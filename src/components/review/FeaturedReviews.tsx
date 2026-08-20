import Link from "next/link";
import { RANKED } from "@/data/reviews";
import { BrandLogo } from "./BrandLogo";

// Funnels internal link equity from content pages (guides, funders, glossary,
// pillars) into the firm review pages, the site's money pages. Links the
// top-ranked firms by default so the strongest commercial pages get the weight.
export function FeaturedReviews({
  count = 6,
  heading = "Compare the firms we reviewed",
}: {
  count?: number;
  heading?: string;
}) {
  const firms = RANKED.slice(0, count);
  return (
    <section className="mx-auto max-w-4xl px-5 py-10">
      <div className="rounded-2xl border border-line bg-paper-soft p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-display text-lg font-semibold text-navy">
            {heading}
          </h2>
          <Link
            href="/"
            className="text-xs font-semibold text-navy hover:underline whitespace-nowrap"
          >
            Full 2026 ranking →
          </Link>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {firms.map((r) => (
            <Link
              key={r.slug}
              href={`/reviews/${r.slug}`}
              className="group flex items-center gap-3 rounded-xl border border-line bg-white px-3 py-2.5 hover:border-navy transition-colors"
            >
              <BrandLogo review={r} size={28} />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-navy leading-tight group-hover:underline">
                  {r.name}
                </span>
                <span className="block text-[11px] text-ink-subtle">
                  #{r.rank} · {r.score.toFixed(1)}/5
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
