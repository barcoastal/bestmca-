import Link from "next/link";
import { REVIEWS, COASTAL } from "@/data/reviews";
import { ScoreBadge } from "@/components/review/ScoreBadge";
import { Stars } from "@/components/review/Stars";
import { ComparisonTable } from "@/components/review/ComparisonTable";
import { CTABanner } from "@/components/review/CTABanner";
import { BrandLogo } from "@/components/review/BrandLogo";
import { coastalCta } from "@/lib/cta";

export const metadata = {
  title:
    "Best MCA Debt Relief & Settlement Companies of 2026 — Independent Reviews",
  description:
    "Independent rankings of the best MCA debt relief and merchant cash advance settlement companies in 2026. Compare 10 firms across transparency, results, communication, cost, and litigation defense.",
  keywords: [
    "mca debt relief",
    "mca debt relief reviews",
    "best mca debt relief companies",
    "mca settlement",
    "mca debt settlement",
    "merchant cash advance settlement",
    "best mca settlement company",
  ],
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 grid gap-12 md:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
              2026 Independent Review · Updated April 2026
            </div>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold text-navy leading-[1.05] tracking-tight">
              The best MCA settlement companies of 2026, ranked by people who
              actually read the contracts.
            </h1>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-2xl">
              We reviewed 10 merchant cash advance settlement and restructuring
              firms across five categories: transparency and disclosures,
              settlement results, client communication, fee structure, and
              litigation defense. One firm scored above the rest.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={`/reviews/${COASTAL.slug}`}
                className="inline-flex items-center justify-center rounded-full bg-navy text-white px-6 py-3 text-sm font-semibold hover:bg-navy-deep transition-colors"
              >
                See our #1 pick
              </Link>
              <Link
                href="/best-mca-settlement-companies-2026"
                className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-navy hover:bg-paper-soft transition-colors"
              >
                Full ranking →
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-3 text-xs text-ink-subtle">
              <Stars value={4.9} size="sm" /> 4.9 average for our top-rated firm
              · 800+ verified client reviews
            </div>
          </div>

          {/* Hero #1 card */}
          <Link
            href={`/reviews/${COASTAL.slug}`}
            className="group block rounded-3xl border border-line bg-white p-7 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-warn">
                Editor&rsquo;s top pick
              </div>
              <span className="rounded-full bg-gold text-navy-deep text-[10px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1">
                #1
              </span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <BrandLogo review={COASTAL} size={44} />
              <h2 className="font-display text-2xl font-semibold text-navy">
                {COASTAL.name}
              </h2>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <span className="font-display text-3xl font-semibold text-navy tabular-nums">
                {COASTAL.score.toFixed(1)}
              </span>
              <Stars value={COASTAL.score} size="md" />
            </div>
            <p className="mt-4 text-sm text-ink-soft leading-relaxed">
              {COASTAL.oneLineVerdict}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
              <Stat label="BBB" value={COASTAL.bbb.split(",")[0]} />
              <Stat label="Trustpilot" value="4.9 (800+)" />
              <Stat label="Min debt" value={COASTAL.minDebt} />
              <Stat label="Litigation" value="In-house attorneys" />
            </div>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:underline">
              Read full review →
            </span>
          </Link>
        </div>
      </section>

      {/* Methodology strip */}
      <section className="bg-paper-soft border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-10 grid gap-6 md:grid-cols-5">
          {[
            { n: "01", t: "Transparency", d: "Fees disclosed before signing" },
            { n: "02", t: "Results", d: "Verified settlement outcomes" },
            { n: "03", t: "Communication", d: "Named case manager, response cadence" },
            { n: "04", t: "Cost", d: "Total cost of resolution, not headline rate" },
            { n: "05", t: "Litigation", d: "In-house attorneys vs referral" },
          ].map((s) => (
            <div key={s.n}>
              <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-warn">
                {s.n}
              </div>
              <div className="mt-2 font-display text-base font-semibold text-navy">
                {s.t}
              </div>
              <div className="mt-1 text-xs text-ink-muted">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Top 10 ranking */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <header className="mb-8 max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            The 2026 Ranking
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-navy">
            Top 10 MCA settlement and restructuring firms
          </h2>
          <p className="mt-3 text-base text-ink-soft leading-relaxed">
            Ranked by composite score across five rating categories. Click any
            firm to read the full review, including pricing, process, and
            sourced concerns.
          </p>
        </header>
        <ComparisonTable />
      </section>

      {/* Why we rank Coastal #1 */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 grid gap-12 md:grid-cols-2 items-start">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-gold-soft">
              Why Coastal scored 4.9
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold leading-tight">
              The only firm with attorneys, settlement, and case management
              under one roof.
            </h2>
            <p className="mt-5 text-white/75 leading-relaxed">
              Most MCA firms specialize in one of three things: pre-litigation
              negotiation, consolidation, or lawsuit defense. The other two get
              referred out. That is a problem when your situation evolves
              mid-case, which it usually does.
            </p>
            <p className="mt-4 text-white/75 leading-relaxed">
              Coastal Debt Resolve carries the file from intake through
              resolution. Pricing is disclosed before contract. The case manager
              is named. The public testimonial wall reads like a directory of
              small business owners willing to be quoted by name.
            </p>
            <Link
              href={coastalCta("homepage-coastal-deep-dive")}
              target="_blank"
              rel="noopener"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-gold text-navy-deep px-6 py-3 text-sm font-semibold hover:bg-gold/90 transition-colors"
            >
              Get a free MCA review →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Composite score", value: "4.9 / 5" },
              { label: "Trustpilot reviews", value: "800+" },
              { label: "Min debt", value: "$25K" },
              { label: "In-house attorneys", value: "Yes" },
              { label: "BBB", value: "A, accredited" },
              { label: "Free initial review", value: "Yes" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/55 font-semibold">
                  {s.label}
                </div>
                <div className="mt-2 font-display text-xl font-semibold">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse reviews */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <header className="mb-8">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            Browse all reviews
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-navy">
            Every firm we evaluated, in detail
          </h2>
        </header>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <Link
              key={r.slug}
              href={`/reviews/${r.slug}`}
              className="group block rounded-2xl border border-line bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-ink-subtle">
                  Rank #{r.rank}
                </span>
                <ScoreBadge score={r.score} variant="compact" />
              </div>
              <div className="mt-3 flex items-center gap-3">
                <BrandLogo review={r} size={36} />
                <h3 className="font-display text-lg font-semibold text-navy group-hover:underline">
                  {r.name}
                </h3>
              </div>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed line-clamp-3">
                {r.oneLineVerdict}
              </p>
              <div className="mt-4 text-xs text-ink-subtle">
                {r.minDebt} · {r.specialties.split(",")[0]}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-5">
        <CTABanner campaign="homepage-bottom" />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-paper-soft px-3 py-2.5">
      <div className="text-[10px] uppercase tracking-[0.16em] text-ink-subtle font-semibold">
        {label}
      </div>
      <div className="mt-0.5 text-sm font-semibold text-ink">{value}</div>
    </div>
  );
}
