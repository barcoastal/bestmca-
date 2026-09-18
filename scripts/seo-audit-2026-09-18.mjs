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

async function rfetch(url, opts, tries = 4) {
  let lastErr;
  for (let i = 0; i < tries; i++) {
    try {
      return await fetch(url, opts);
    } catch (e) {
      lastErr = e;
      await new Promise((r) => setTimeout(r, 3000 * (i + 1)));
    }
  }
  throw lastErr;
}

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
  const r = await rfetch("https://oauth2.googleapis.com/token", {
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
  const r = await rfetch(
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


const token = await accessToken(loadEnv(ENV_PATH));
const windows = [];
for (const [startDate,endDate] of [["2026-09-02","2026-09-08"],["2026-09-09","2026-09-15"]]) {
  const base={startDate,endDate,dataState:"final"};
  const [totals,pages,queries,pairs]=await Promise.all([
    query(token,base),query(token,{...base,dimensions:["page"],rowLimit:1000}),
    query(token,{...base,dimensions:["query"],rowLimit:1000}),
    query(token,{...base,dimensions:["query","page"],rowLimit:5000})]);
  windows.push({...base,totals,pages,queries,pairs});
}
const inspections=[];
for (const route of ["/","/reviews/coastal-debt-resolve","/reviews/eastern-financial-partners","/mca-settlement-companies-bbb-ratings"]) {
 const r=await rfetch("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",{method:"POST",headers:{Authorization:"Bearer "+token,"Content-Type":"application/json"},body:JSON.stringify({inspectionUrl:"https://www.mcasettlementreviews.com"+route,siteUrl:SITE})});
 const data=await r.json();
 inspections.push({route,status:r.status,result:data.inspectionResult?.indexStatusResult,error:data.error?.message});
}
fs.writeFileSync("docs/gsc-audit-2026-09-18.json",JSON.stringify({windows,inspections},null,2));
console.log(JSON.stringify({windows:windows.map(w=>({start:w.startDate,end:w.endDate,totals:w.totals,queries:w.queries.slice(0,15)})),inspections},null,2));
