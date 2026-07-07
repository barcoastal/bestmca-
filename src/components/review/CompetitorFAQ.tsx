import Link from "next/link";
import type { Review } from "@/data/reviews";
import { competitorFaqItems } from "@/lib/faq";
import { faqSchema, jsonLd } from "@/lib/schema";

export function CompetitorFAQ({ review }: { review: Review }) {
  const items = competitorFaqItems(review);

  return (
    <section className="my-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(items))}
      />
      <header className="mb-6">
        <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-warn">
          Frequently Asked
        </div>
        <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
          {review.name} reviews, complaints, and common questions
        </h3>
      </header>
      <div className="space-y-3">
        {items.map((f, i) => (
          <details
            key={i}
            className="group rounded-2xl border border-line bg-white p-5 open:bg-paper-soft"
          >
            <summary className="cursor-pointer flex items-start justify-between gap-4 list-none">
              <h4 className="font-display text-base font-semibold text-navy">
                {f.q}
              </h4>
              <span className="text-navy text-xl leading-none shrink-0 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-navy">
        <Link href={`/legit/${review.slug}`} className="hover:underline">
          Is {review.shortName} legit or a scam? →
        </Link>
        <Link
          href={`/compare/coastal-debt-vs-${review.slug}`}
          className="hover:underline"
        >
          {review.shortName} vs Coastal Debt Resolve →
        </Link>
      </div>
    </section>
  );
}
