import Link from "next/link";
import { COASTAL, REVIEWS } from "@/data/reviews";
import { ScoreBadge } from "@/components/review/ScoreBadge";
import { CTABanner } from "@/components/review/CTABanner";

export const metadata = {
  title: "Best MCA Settlement Companies for Trucking Businesses (2026)",
  description:
    "Trucking companies face MCA pressure from seasonal cash flow swings, fuel costs, and ELD-related revenue dips. Here are the firms best equipped to settle MCA debt for owner-operators and small fleets.",
  alternates: { canonical: "/best-for-trucking-companies" },
};

const PICKS = [
  COASTAL,
  REVIEWS.find((r) => r.slug === "second-wind-consultants")!,
  REVIEWS.find((r) => r.slug === "corporate-rescue")!,
];

export default function TruckingPage() {
  return (
    <article className="bg-paper">
      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            Industry Spotlight · Trucking
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            Best MCA settlement companies for trucking businesses
          </h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            Trucking businesses live and die on cash flow. Fuel volatility,
            broker payment timing, and seasonal volume make MCAs especially
            destructive in this category. Here are the firms best equipped to
            handle MCA settlement for owner-operators and small fleets.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-12 space-y-6">
        <h2 className="font-display text-2xl font-semibold text-navy">
          Why trucking is a different MCA situation
        </h2>
        <p className="text-ink-soft leading-relaxed">
          Trucking owners typically take MCAs to bridge fuel and payroll during
          slow weeks. The daily ACH structure of MCAs is misaligned with
          weekly settlement on broker invoices, which means revenue often hits
          the bank account too late to clear the day&rsquo;s ACH pull. The
          stack compounds quickly: a single $50K MCA becomes three positions
          inside six months.
        </p>
        <p className="text-ink-soft leading-relaxed">
          The right settlement firm for trucking knows this rhythm. They know
          which funders take aggressive UCC action, which will negotiate a
          weekly rather than daily payment, and which will threaten lawsuit on
          first missed payment.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-display text-3xl font-semibold text-navy mb-8">
          Our top three picks for trucking
        </h2>
        <div className="space-y-5">
          {PICKS.map((r, i) => (
            <Link
              key={r.slug}
              href={`/reviews/${r.slug}`}
              className={`block rounded-2xl border p-6 transition-shadow hover:shadow-md ${
                r.isCoastal
                  ? "border-gold bg-gold-soft/30"
                  : "border-line bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-ink-subtle">
                    Pick #{i + 1}
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-navy">
                    {r.name}
                    {r.isCoastal && (
                      <span className="ml-3 rounded-full bg-gold text-navy-deep text-[10px] font-semibold uppercase tracking-[0.14em] px-2 py-0.5 align-middle">
                        Top pick
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 text-ink-soft leading-relaxed max-w-2xl">
                    {r.oneLineVerdict}
                  </p>
                </div>
                <ScoreBadge score={r.score} variant="compact" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 pb-16">
        <CTABanner
          campaign="best-for-trucking"
          heading="Coastal has handled MCA settlements for trucking owners across the country"
        />
      </div>
    </article>
  );
}
