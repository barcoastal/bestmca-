#!/usr/bin/env node
// Weekly GSC snapshot for mcasettlementreviews.com.
// Pulls a clean 7-day window (ending 3 days ago to allow for GSC data lag),
// writes docs/gsc-snapshots/YYYY-MM-DD.json, and appends a human-readable
// delta report vs the previous snapshot to docs/gsc-snapshots/LOG.md.
// Auth: reuses the working OAuth client from ~/mirai-seo/.env (see gsc-pull.mjs).

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "sc-domain:mcasettlementreviews.com";
const ENV_PATH = path.join(os.homedir(), "mirai-seo", ".env");
const OUT_DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "docs",
  "gsc-snapshots",
);

// Queries whose movement we track change-by-change.
const TRACKED = [
  // Head terms (homepage consolidation, Jul 22)
  "best mca debt relief companies",
  "mca settlement companies",
  "mca debt relief reviews",
  "merchant cash advance settlement companies",
  "mca debt relief companies",
  // Key brand queries (title/FAQ/star-snippet changes)
  "second wind consultants reviews",
  "eastern financial partners reviews",
  "spergel reviews",
  "corporate turnaround reviews",
  "rise alliance reviews",
  "regroup partners reviews",
];

function loadEnv(p) {
  const out = {};
  for (const line of fs.readFileSync(p, "utf8").split("\n")) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m) out[m[1]] = m[2].trim();
  }
  return out;
}

async function accessToken(env) {
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      refresh_token: env.GOOGLE_REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
  });
  const tok = await r.json();
  if (!tok.access_token) throw new Error("token refresh failed: " + JSON.stringify(tok));
  return tok.access_token;
}

async function query(token, body) {
  const r = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  );
  const data = await r.json();
  if (data.error) throw new Error(JSON.stringify(data.error));
  return data.rows || [];
}

const dateStr = (daysAgo) =>
  new Date(Date.now() - daysAgo * 86400000).toISOString().split("T")[0];
const pct = (n) => (n * 100).toFixed(1) + "%";
const sign = (n, digits = 0) =>
  (n > 0 ? "+" : "") + n.toFixed(digits);

async function main() {
  const env = loadEnv(ENV_PATH);
  const token = await accessToken(env);
  const startDate = dateStr(9);
  const endDate = dateStr(3);
  const base = { startDate, endDate };

  const [totalRows, queryRows, pageRows] = [
    await query(token, base),
    await query(token, { ...base, dimensions: ["query"], rowLimit: 500 }),
    await query(token, { ...base, dimensions: ["page"], rowLimit: 100 }),
  ];

  const t = totalRows[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  const snapshot = {
    site: SITE,
    window: { startDate, endDate },
    totals: {
      clicks: t.clicks,
      impressions: t.impressions,
      ctr: t.ctr,
      position: t.position,
    },
    tracked: Object.fromEntries(
      TRACKED.map((q) => {
        const row = queryRows.find((r) => r.keys[0] === q);
        return [
          q,
          row
            ? { clicks: row.clicks, impressions: row.impressions, ctr: row.ctr, position: row.position }
            : null,
        ];
      }),
    ),
    topQueries: queryRows
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 50)
      .map((r) => ({ query: r.keys[0], clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position })),
    topPages: pageRows
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 30)
      .map((r) => ({ page: r.keys[0], clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position })),
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const stamp = dateStr(0);
  fs.writeFileSync(path.join(OUT_DIR, `${stamp}.json`), JSON.stringify(snapshot, null, 2));

  // Find the previous snapshot for deltas.
  const prevFile = fs
    .readdirSync(OUT_DIR)
    .filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f) && f !== `${stamp}.json`)
    .sort()
    .pop();
  const prev = prevFile
    ? JSON.parse(fs.readFileSync(path.join(OUT_DIR, prevFile), "utf8"))
    : null;

  let md = `\n## ${stamp} (window ${startDate} to ${endDate})\n\n`;
  md += `Totals: **${t.clicks} clicks**, ${t.impressions} impressions, ${pct(t.ctr)} CTR, avg pos ${t.position.toFixed(1)}`;
  if (prev) {
    const p = prev.totals;
    md += `  (vs prev: clicks ${sign(t.clicks - p.clicks)}, impr ${sign(t.impressions - p.impressions)}, pos ${sign(t.position - p.position, 1)})`;
  }
  md += `\n\n| Tracked query | Clicks | Impr | CTR | Pos | Pos delta |\n|---|---|---|---|---|---|\n`;
  for (const q of TRACKED) {
    const cur = snapshot.tracked[q];
    const old = prev?.tracked?.[q];
    if (!cur) {
      md += `| ${q} | - | - | - | not shown | |\n`;
      continue;
    }
    const delta =
      old != null ? sign(cur.position - old.position, 1) : "new";
    md += `| ${q} | ${cur.clicks} | ${cur.impressions} | ${pct(cur.ctr)} | ${cur.position.toFixed(1)} | ${delta} |\n`;
  }

  const logPath = path.join(OUT_DIR, "LOG.md");
  if (!fs.existsSync(logPath)) {
    fs.writeFileSync(
      logPath,
      "# GSC weekly snapshots\n\nOne entry per run. Position deltas are vs the previous snapshot; negative is better.\n",
    );
  }
  fs.appendFileSync(logPath, md);
  console.log(md);
}

main().catch((e) => {
  console.error("ERROR:", e.message);
  process.exit(1);
});
