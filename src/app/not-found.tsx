import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-32 text-center">
      <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
        404
      </div>
      <h1 className="mt-3 font-display text-4xl font-semibold text-navy">
        We could not find that page
      </h1>
      <p className="mt-4 text-ink-soft">
        The review or guide you were looking for may have moved.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-navy text-white px-5 py-2.5 text-sm font-semibold hover:bg-navy-deep"
        >
          Return home
        </Link>
        <Link
          href="/best-mca-settlement-companies-2026"
          className="inline-flex items-center justify-center rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-navy hover:bg-paper-soft"
        >
          See the 2026 ranking
        </Link>
      </div>
    </div>
  );
}
