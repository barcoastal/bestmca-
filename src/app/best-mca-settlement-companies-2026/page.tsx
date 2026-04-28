import Link from "next/link";
import { REVIEWS, COASTAL } from "@/data/reviews";
import { Stars } from "@/components/review/Stars";
import { ComparisonTable } from "@/components/review/ComparisonTable";
import { CTABanner } from "@/components/review/CTABanner";

export const metadata = {
  title: "Best MCA Settlement Companies of 2026: Top 10 Ranked",
  description:
    "Independent ranking of the 10 best merchant cash advance settlement and restructuring firms in 2026. Composite scores across transparency, results, communication, cost, and litigation defense.",
  alternates: { canonical: "/best-mca-settlement-companies-2026" },
};

export default function BestOfPage() {
  return (
    <article className="bg-paper">
      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            2026 Independent Ranking
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            The 10 best MCA settlement companies of 2026
          </h1>
          <p className="mt-4 text-lg text-ink-soft leading-relaxed max-w-3xl">
            We evaluated 10 merchant cash advance settlement and restructuring
            firms across five categories. Here is what we found, ranked by
            composite score.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-14">
        <ComparisonTable />
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 prose prose-slate max-w-none">
        <h2 className="font-display text-2xl font-semibold text-navy">
          How we ranked the firms
        </h2>
        <p className="text-ink-soft leading-relaxed">
          Each firm was scored on five categories: transparency and disclosures,
          settlement results, client communication, cost and fee structure, and
          litigation defense capability. Scores are composite. We did not weigh
          marketing claims, brand recognition, or paid placements. We read the
          contracts, reviewed public client commentary, and checked third-party
          platforms (BBB, Trustpilot, court records). Full methodology is
          available on our{" "}
          <Link href="/methodology" className="text-navy underline">
            methodology page
          </Link>
          .
        </p>
      </section>

      {/* Detailed cards */}
      <section className="mx-auto max-w-5xl px-5 pb-14">
        <h2 className="font-display text-3xl font-semibold text-navy mb-8">
          Each firm, in detail
        </h2>
        <div className="space-y-6">
          {REVIEWS.map((r) => (
            <Link
              key={r.slug}
              href={`/reviews/${r.slug}`}
              className={`block rounded-2xl border p-7 transition-shadow hover:shadow-md ${
                r.isCoastal
                  ? "border-gold bg-gold-soft/30"
                  : "border-line bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-3xl font-semibold text-navy tabular-nums">
                      #{r.rank}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-navy">
                      {r.name}
                    </h3>
                    {r.isCoastal && (
                      <span className="rounded-full bg-gold text-navy-deep text-[10px] font-semibold uppercase tracking-[0.14em] px-2.5 py-0.5">
                        Top pick
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-ink-soft leading-relaxed max-w-2xl">
                    {r.oneLineVerdict}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-subtle">
                    <span>
                      <span className="font-semibold text-ink-soft">Min:</span>{" "}
                      {r.minDebt}
                    </span>
                    <span>
                      <span className="font-semibold text-ink-soft">HQ:</span>{" "}
                      {r.hq}
                    </span>
                    <span>
                      <span className="font-semibold text-ink-soft">
                        Founded:
                      </span>{" "}
                      {r.founded}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <div className="font-display text-4xl font-semibold text-navy tabular-nums leading-none">
                    {r.score.toFixed(1)}
                  </div>
                  <Stars value={r.score} size="sm" />
                  <div className="text-[10px] uppercase tracking-[0.16em] text-ink-subtle font-semibold mt-1">
                    Composite score
                  </div>
                </div>
              </div>
              <div className="mt-5 text-xs font-semibold text-navy">
                Read full {r.shortName} review →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 pb-16">
        <CTABanner
          campaign="best-of-2026-bottom"
          heading={`#1 in our 2026 ranking: ${COASTAL.name}`}
        />
      </div>
    </article>
  );
}
