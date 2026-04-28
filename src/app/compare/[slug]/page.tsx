import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COASTAL, COMPETITORS, getReviewBySlug } from "@/data/reviews";
import { HeadToHeadTable } from "@/components/review/HeadToHeadTable";
import { CTABanner } from "@/components/review/CTABanner";
import { Stars } from "@/components/review/Stars";

const COMPARABLE_SLUGS = [
  "second-wind-consultants",
  "spergel",
  "corporate-turnaround",
  "regroup-partners",
  "corporate-rescue",
  "eastern-financial-partners",
  "business-debt-law-group",
];

export const dynamicParams = false;

export function generateStaticParams() {
  return COMPARABLE_SLUGS.map((s) => ({ slug: `coastal-debt-vs-${s}` }));
}

function parseCompareSlug(slug: string) {
  const prefix = "coastal-debt-vs-";
  if (!slug.startsWith(prefix)) return null;
  const competitorSlug = slug.slice(prefix.length);
  const competitor = getReviewBySlug(competitorSlug);
  if (!competitor || competitor.isCoastal) return null;
  return competitor;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const competitor = parseCompareSlug(slug);
  if (!competitor) return {};
  const title = `Coastal Debt Resolve vs ${competitor.name}: 2026 Comparison`;
  return {
    title,
    description: `Side-by-side comparison of Coastal Debt Resolve and ${competitor.name} across pricing, results, and litigation defense. See which firm fits your situation.`,
    alternates: { canonical: `/compare/${slug}` },
  };
}

export default async function ComparePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const competitor = parseCompareSlug(slug);
  if (!competitor) notFound();

  const wins = (
    Object.keys(COASTAL.ratings) as (keyof typeof COASTAL.ratings)[]
  ).filter((k) => COASTAL.ratings[k] >= competitor.ratings[k]).length;

  return (
    <article className="bg-paper">
      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            Head-to-Head Comparison · 2026
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            Coastal Debt Resolve vs {competitor.name}
          </h1>
          <p className="mt-4 text-lg text-ink-soft leading-relaxed max-w-3xl">
            We scored both firms across our five-category rating system. Coastal
            won {wins} of 5 categories and finished with a higher composite
            score.
          </p>
          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            <div>
              <div className="text-xs text-ink-subtle uppercase tracking-[0.16em] font-semibold">
                Coastal
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="font-display text-2xl font-semibold text-navy">
                  {COASTAL.score.toFixed(1)}
                </span>
                <Stars value={COASTAL.score} size="sm" />
              </div>
            </div>
            <div>
              <div className="text-xs text-ink-subtle uppercase tracking-[0.16em] font-semibold">
                {competitor.name}
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="font-display text-2xl font-semibold text-navy">
                  {competitor.score.toFixed(1)}
                </span>
                <Stars value={competitor.score} size="sm" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <h2 className="font-display text-2xl font-semibold text-navy mb-6">
          Category-by-category breakdown
        </h2>
        <HeadToHeadTable a={COASTAL} b={competitor} />
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-14 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-white p-6">
          <h3 className="font-display text-xl font-semibold text-navy">
            Where Coastal wins
          </h3>
          <p className="mt-3 text-ink-soft leading-relaxed">
            {COASTAL.verdict}
          </p>
          <Link
            href={`/reviews/${COASTAL.slug}`}
            className="mt-5 inline-flex text-sm font-semibold text-navy hover:underline"
          >
            Read full Coastal review →
          </Link>
        </div>
        <div className="rounded-2xl border border-line bg-white p-6">
          <h3 className="font-display text-xl font-semibold text-navy">
            Where {competitor.shortName} fits
          </h3>
          <p className="mt-3 text-ink-soft leading-relaxed">
            {competitor.verdict}
          </p>
          <Link
            href={`/reviews/${competitor.slug}`}
            className="mt-5 inline-flex text-sm font-semibold text-navy hover:underline"
          >
            Read full {competitor.shortName} review →
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 pb-16">
        <CTABanner
          campaign={`compare-coastal-vs-${competitor.slug}`}
          heading={`Considering ${competitor.name}? Talk to our #1 pick first.`}
          body="Coastal Debt Resolve will give you a free MCA review and a written settlement strategy before you commit to anyone. No upfront fee."
        />
      </div>
    </article>
  );
}
