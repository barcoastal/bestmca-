import { NextResponse } from "next/server";
import { readSettings } from "@/lib/settings";

// Public, non-sensitive subset used by the runtime script injector.
export const dynamic = "force-dynamic";

export function GET() {
  const s = readSettings();
  return NextResponse.json(
    { headHtml: s.headHtml },
    { headers: { "Cache-Control": "public, max-age=300" } },
  );
}
