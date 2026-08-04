// First-party CTA click tracking. Beacons from TrackedLink land here and are
// written to stdout, which Railway captures in the deploy logs. Search the
// logs for "[cta-click]" to see per-page CTA performance.
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const campaign = String(data.campaign ?? "unknown").slice(0, 100);
    const page = String(data.page ?? "unknown").slice(0, 200);
    console.log(
      `[cta-click] ${new Date().toISOString()} campaign=${campaign} page=${page}`,
    );
  } catch {
    // Malformed beacon; nothing to do.
  }
  return new Response(null, { status: 204 });
}
