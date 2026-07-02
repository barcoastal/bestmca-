#!/usr/bin/env node
// GSC performance pull for mcasettlementreviews.com
// Reuses the working OAuth client + refresh token from ~/mirai-seo/.env
// (that Google account must be added as a Full user on the property).
// No external deps: refreshes the access token and calls the REST API via fetch.

import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const SITE = "sc-domain:mcasettlementreviews.com";
const ENV_PATH = path.join(os.homedir(), "mirai-seo", ".env");

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
    }
  );
  const data = await r.json();
  if (data.error) throw new Error(JSON.stringify(data.error));
  return data.rows || [];
}

function dateStr(daysAgo) {
  return new Date(Date.now() - daysAgo * 86400000).toISOString().split("T")[0];
}

function pct(n) {
  return (n * 100).toFixed(1) + "%";
}

async function main() {
  const env = loadEnv(ENV_PATH);
  const token = await accessToken(env);

  // Confirm access first.
  const sites = await fetch("https://searchconsole.googleapis.com/webmasters/v3/sites", {
    headers: { Authorization: "Bearer " + token },
  }).then((x) => x.json());
  const owned = (sites.siteEntry || []).map((s) => s.siteUrl);
  if (!owned.includes(SITE)) {
    console.error("NO ACCESS to " + SITE + " yet.\nAccount can see:\n  " + owned.join("\n  "));
    console.error("\nAdd this Google account as a Full user on the mcasettlementreviews.com property, then re-run.");
    process.exit(2);
  }

  const startDate = dateStr(90);
  const endDate = dateStr(2); // GSC data lags ~2 days
  const base = { startDate, endDate };
  console.log(`# GSC pull for ${SITE}  (${startDate} -> ${endDate})\n`);

  // Totals
  const totalRows = await query(token, { ...base });
  const t = totalRows[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  console.log(`## Totals (90d)`);
  console.log(`clicks=${t.clicks}  impressions=${t.impressions}  ctr=${pct(t.ctr)}  avgPos=${t.position?.toFixed(1)}\n`);

  // Top pages
  const pages = await query(token, { ...base, dimensions: ["page"], rowLimit: 100 });
  console.log(`## Top pages by clicks (top 20)`);
  for (const p of pages.sort((a, b) => b.clicks - a.clicks).slice(0, 20)) {
    console.log(`${String(p.clicks).padStart(4)}c ${String(p.impressions).padStart(6)}i ${pct(p.ctr).padStart(6)} pos${p.position.toFixed(1).padStart(5)}  ${p.keys[0]}`);
  }
  console.log();

  // Queries
  const queries = await query(token, { ...base, dimensions: ["query"], rowLimit: 1000 });

  console.log(`## Striking-distance queries (pos 5-20, sorted by impressions)`);
  const striking = queries
    .filter((q) => q.position >= 5 && q.position <= 20)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 30);
  for (const q of striking) {
    console.log(`${String(q.clicks).padStart(4)}c ${String(q.impressions).padStart(6)}i ${pct(q.ctr).padStart(6)} pos${q.position.toFixed(1).padStart(5)}  ${q.keys[0]}`);
  }
  console.log();

  console.log(`## High-impression low-CTR queries (>=100 impr, ctr<2%, pos<=15)`);
  const lowctr = queries
    .filter((q) => q.impressions >= 100 && q.ctr < 0.02 && q.position <= 15)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 25);
  for (const q of lowctr) {
    console.log(`${String(q.clicks).padStart(4)}c ${String(q.impressions).padStart(6)}i ${pct(q.ctr).padStart(6)} pos${q.position.toFixed(1).padStart(5)}  ${q.keys[0]}`);
  }
  console.log();

  console.log(`## Top queries by clicks (top 25)`);
  for (const q of queries.sort((a, b) => b.clicks - a.clicks).slice(0, 25)) {
    console.log(`${String(q.clicks).padStart(4)}c ${String(q.impressions).padStart(6)}i ${pct(q.ctr).padStart(6)} pos${q.position.toFixed(1).padStart(5)}  ${q.keys[0]}`);
  }
}

main().catch((e) => {
  console.error("ERROR:", e.message);
  process.exit(1);
});
