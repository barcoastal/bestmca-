import { NextRequest, NextResponse } from "next/server";
import { adminPassword, readSettings, writeSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

function authed(request: NextRequest) {
  const key = request.headers.get("x-admin-key") || "";
  const expected = adminPassword();
  // length-safe comparison
  if (key.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++)
    diff |= key.charCodeAt(i) ^ expected.charCodeAt(i);
  return diff === 0;
}

export function GET(request: NextRequest) {
  if (!authed(request))
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  return NextResponse.json(readSettings());
}

export async function POST(request: NextRequest) {
  if (!authed(request))
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  const body = await request.json();
  const patch: Record<string, string> = {};
  for (const k of ["ctaBaseUrl", "ctaExtraParams", "headHtml"] as const) {
    if (typeof body[k] === "string") patch[k] = body[k].slice(0, 20000);
  }
  if (patch.ctaBaseUrl) {
    try {
      new URL(patch.ctaBaseUrl);
    } catch {
      return NextResponse.json(
        { error: "ctaBaseUrl must be a valid absolute URL" },
        { status: 400 },
      );
    }
  }
  const next = writeSettings(patch);
  console.log(
    `[admin] ${new Date().toISOString()} settings updated: ${Object.keys(patch).join(",")}`,
  );
  return NextResponse.json(next);
}
