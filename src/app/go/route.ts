import { NextRequest, NextResponse } from "next/server";
import { readSettings } from "@/lib/settings";

// Every CTA on the site points here; this 302s to the configured
// destination with UTMs attached. Changing the destination in /admin
// changes every CTA instantly, no rebuild. Also logs the click
// server-side ([cta-go] in Railway logs).

export const dynamic = "force-dynamic";

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

  console.log(
    `[cta-go] ${new Date().toISOString()} campaign=${campaign} dest=${url.hostname}`,
  );
  return NextResponse.redirect(url.toString(), 302);
}
