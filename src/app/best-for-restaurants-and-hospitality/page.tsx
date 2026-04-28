import Link from "next/link";
import { COASTAL, REVIEWS } from "@/data/reviews";
import { ScoreBadge } from "@/components/review/ScoreBadge";
import { CTABanner } from "@/components/review/CTABanner";

export const metadata = {
  title:
    "Best MCA Settlement Companies for Restaurants and Hospitality (2026)",
  description:
    "Restaurants face thin margins, seasonal volume, and merchant processor exposure that makes MCA debt especially urgent. Here are the firms best equipped to settle MCA debt for restaurant operators.",
  alternates: { canonical: "/best-for-restaurants-and-hospitality" },
};

const PICKS = [
  COASTAL,
  REVIEWS.find((r) => r.slug === "second-wind-consultants")!,
  REVIEWS.find((r) => r.slug === "ascend-consulting")!,
];

export default function RestaurantsPage() {
  return (
    <article className="bg-paper">
      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            Industry Spotlight · Restaurants and Hospitality
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            Best MCA settlement companies for restaurants and hospitality
          </h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            Restaurants run on thin margins, seasonal swings, and direct
            merchant processor exposure. MCAs that took daily card-receipt
            splits during the post-COVID surge are now choking operators in a
            slower environment. Here are the firms best equipped to help.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-12 space-y-6">
        <h2 className="font-display text-2xl font-semibold text-navy">
          Why restaurants are a different MCA situation
        </h2>
        <p className="text-ink-soft leading-relaxed">
          Many restaurant MCAs were structured against credit card processing
          volume rather than ACH. That means when revenue dips, the funder can
          freeze the merchant processor, which kills the business overnight
          regardless of how the operator was planning to negotiate. Speed of
          response and processor experience matters more in this category
          than almost any other.
        </p>
        <p className="text-ink-soft leading-relaxed">
          The right firm for a restaurant has handled processor disputes and
          knows which funders will pull the trigger on a freeze versus which
          will accept a restructured payment.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-display text-3xl font-semibold text-navy mb-8">
          Our top three picks for restaurants
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
          campaign="best-for-restaurants"
          heading="Coastal has handled MCA settlements for restaurant and hospitality operators across the country"
        />
      </div>
    </article>
  );
}
