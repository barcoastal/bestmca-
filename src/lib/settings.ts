import fs from "node:fs";
import path from "node:path";

// Runtime site settings, editable from /admin without a rebuild.
// Stored as JSON on disk. On Railway, mount a volume and set SETTINGS_DIR
// to its mount path (e.g. /data) so settings survive deploys; otherwise
// they persist only until the next deploy.

export type SiteSettings = {
  // Base URL every CTA redirects to via /go (UTMs appended automatically).
  ctaBaseUrl: string;
  // Extra query params appended to every CTA redirect, e.g. "ref=summer".
  ctaExtraParams: string;
  // Raw HTML injected into every page at runtime (script/pixel tags).
  headHtml: string;
};

const DEFAULTS: SiteSettings = {
  ctaBaseUrl: "https://www.coastaldebt.com/",
  ctaExtraParams: "",
  headHtml: "",
};

const DIR = process.env.SETTINGS_DIR || path.join(process.cwd(), "data");
const FILE = path.join(DIR, "runtime-settings.json");

export function readSettings(): SiteSettings {
  try {
    const raw = JSON.parse(fs.readFileSync(FILE, "utf8"));
    return { ...DEFAULTS, ...raw };
  } catch {
    return { ...DEFAULTS };
  }
}

export function writeSettings(patch: Partial<SiteSettings>): SiteSettings {
  const next = { ...readSettings(), ...patch };
  fs.mkdirSync(DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(next, null, 2));
  return next;
}

export function adminPassword(): string {
  // Set ADMIN_PASSWORD on Railway. The fallback exists so the panel works
  // immediately after deploy; change it via env as soon as possible.
  return process.env.ADMIN_PASSWORD || "mcasr-Admin-2026!";
}
