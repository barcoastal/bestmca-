import { NextRequest, NextResponse } from "next/server";
import { readSettings } from "@/lib/settings";

// Every CTA on the site points here; this 302s to the configured
// destination with UTMs attached. Changing the destination in /admin
// changes every CTA instantly, no rebuild. Also logs the click
// server-side ([cta-go] in Railway logs).
//
// Click id: each visitor gets a persistent msr_ click id (cookie msr_cid,
// set client-side on first pageview or here as fallback). It is forwarded
// to the destination as ?click_id= so the landing page's lead webhook
// carries the review-site click id, not one minted on the LP. Inbound ad
// click ids captured on arrival (msr_gclid etc.) are forwarded too.

export const dynamic = "force-dynamic";

function readCookie(header: string | null, name: string): string {
  if (!header) return "";
  const m = header.match(new RegExp("(?:^|;\\s*)" + name + "=([^;]*)"));
  try {
    return m ? decodeURIComponent(m[1]) : "";
  } catch {
    return m ? m[1] : "";
  }
}

export function GET(request: NextRequest) {
  const campaign =
    request.nextUrl.searchParams.get("c")?.slice(0, 100) || "unknown";
  const s = readSettings();

  let url: URL;
  try {
    url = new URL(s.ctaBaseUrl);
  } catch {
    url = new URL("https://www.coastaldebt.com/");
  }
  url.searchParams.set("utm_source", "mcasettlementreviews");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", campaign);
  if (s.ctaExtraParams) {
    for (const [k, v] of new URLSearchParams(s.ctaExtraParams)) {
      url.searchParams.set(k, v);
    }
  }

  const cookieHeader = request.headers.get("cookie");
  let cid = readCookie(cookieHeader, "msr_cid");
  let setCid = false;
  if (!cid || !/^msr_[a-z0-9]+$/i.test(cid)) {
    cid =
      "msr_" +
      Date.now().toString(36) +
      Math.random().toString(36).slice(2, 10);
    setCid = true;
  }
  url.searchParams.set("click_id", cid);
  for (const [param, ck] of [
    ["gclid", "msr_gclid"],
    ["fbclid", "msr_fbclid"],
    ["msclkid", "msr_msclkid"],
  ] as const) {
    const v = readCookie(cookieHeader, ck);
    if (v) url.searchParams.set(param, v);
  }

  console.log(
    `[cta-go] ${new Date().toISOString()} campaign=${campaign} dest=${url.hostname} click_id=${cid}`,
  );
  const res = NextResponse.redirect(url.toString(), 302);
  if (setCid) {
    res.headers.append(
      "Set-Cookie",
      `msr_cid=${cid}; Path=/; Max-Age=31536000; SameSite=Lax`,
    );
  }
  return res;
}
