import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { REVIEWS, getReviewBySlug } from "@/data/reviews";
import { ScoreBadge } from "@/components/review/ScoreBadge";
import { AtAGlanceCard } from "@/components/review/AtAGlanceCard";
import { ProsConsTable } from "@/components/review/ProsConsTable";
import { RatingBreakdown } from "@/components/review/RatingBreakdown";
import { CTABanner } from "@/components/review/CTABanner";
import { AlternativeCallout } from "@/components/review/AlternativeCallout";
import { ConcernsList } from "@/components/review/ConcernsList";
import { TestimonialCarousel } from "@/components/review/TestimonialCarousel";
import { CaseStudyGrid } from "@/components/review/CaseStudyGrid";
import { reviewSchema, aggregateRatingSchema, jsonLd } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return REVIEWS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const review = getReviewBySlug(slug);
  if (!review) return {};
  const title = `${review.name} Review (2026): ${review.score.toFixed(1)}/5 Rating`;
  const description = review.oneLineVerdict;
  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    alternates: { canonical: `/reviews/${review.slug}` },
  };
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const review = getReviewBySlug(slug);
  if (!review) notFound();

  const isCoastal = review.isCoastal === true;

  return (
    <article className="bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(reviewSchema(review))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(aggregateRatingSchema(review))}
      />

      {/* Hero */}
      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-[1fr_auto] items-start">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-ink-subtle font-semibold">
              <Link href="/" className="hover:text-navy">
                Home
              </Link>
              <span>·</span>
              <Link
                href="/best-mca-settlement-companies-2026"
                className="hover:text-navy"
              >
                Best of 2026
              </Link>
              <span>·</span>
              <span className="text-ink-soft">Ranked #{review.rank}</span>
            </div>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
              {review.name} Review
            </h1>
            <p className="mt-4 text-lg text-ink-soft leading-relaxed">
              {review.oneLineVerdict}
            </p>
            {isCoastal && (
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold/90 text-navy-deep px-3 py-1 text-xs uppercase tracking-[0.16em] font-semibold">
                Editor&rsquo;s top pick · 2026
              </div>
            )}
          </div>
          <div className="md:justify-self-end">
            <ScoreBadge score={review.score} rank={review.rank} />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-12 md:grid-cols-[1fr_320px]">
        {/* Main column */}
        <div className="min-w-0">
          {/* Verdict */}
          <section>
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-subtle">
              Our verdict
            </div>
            <h2 className="mt-2 font-display text-2xl font-semibold text-navy">
              Why we ranked {review.shortName} #{review.rank}
            </h2>
            <p className="mt-4 text-base text-ink-soft leading-relaxed">
              {review.verdict}
            </p>
          </section>

          {/* Pros and cons */}
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-navy">
              Strengths and drawbacks
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              What we found across our review of public materials, client
              commentary, and signed agreement disclosures.
            </p>
            <div className="mt-6">
              <ProsConsTable pros={review.pros} cons={review.cons} />
            </div>
          </section>

          {/* Pricing */}
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-navy">
              Pricing and fee structure
            </h2>
            <p className="mt-4 text-base text-ink-soft leading-relaxed">
              {review.pricing}
            </p>
          </section>

          {/* Process */}
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-navy">
              How the process works
            </h2>
            <p className="mt-4 text-base text-ink-soft leading-relaxed">
              {review.process}
            </p>
          </section>

          {/* Best for / not ideal for */}
          <section className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                Best for
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {review.bestFor.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-win">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-navy">
                Not ideal for
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {review.notIdealFor.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-bad">×</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Concerns (only for non-Coastal) */}
          {!isCoastal && review.concerns && review.concerns.length > 0 && (
            <ConcernsList concerns={review.concerns} />
          )}

          {/* Coastal-only blocks */}
          {isCoastal && (
            <>
              <TestimonialCarousel />
              <CaseStudyGrid />
              {review.proofPoints && (
                <section className="my-10 rounded-2xl bg-navy text-white p-8">
                  <h3 className="font-display text-xl font-semibold">
                    Why these results are verifiable
                  </h3>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-white/85">
                    {review.proofPoints.map((p, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-gold">●</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </>
          )}

          {/* CTA banner */}
          <CTABanner
            campaign={`review-${review.slug}`}
            heading={
              isCoastal
                ? "Ready to talk to Coastal Debt Resolve?"
                : `Want a second opinion before signing with ${review.shortName}?`
            }
            body={
              isCoastal
                ? "Coastal will give you a free MCA review, a written settlement strategy, and a fixed fee quote before you sign anything."
                : "Our #1 rated firm Coastal Debt Resolve will give you a free MCA review and a side-by-side comparison with no obligation."
            }
            buttonLabel={
              isCoastal ? "Start free review" : "Compare with Coastal"
            }
          />

          {/* Alternative callout for competitors */}
          {!isCoastal && (
            <AlternativeCallout
              competitorName={review.shortName}
              reason={`${review.shortName} ranked #${review.rank} in our 2026 review.`}
            />
          )}
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-6">
          <AtAGlanceCard review={review} />
          <RatingBreakdown ratings={review.ratings} />
          {!isCoastal && (
            <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <div className="text-xs uppercase tracking-[0.18em] font-semibold text-ink-subtle">
                Top-ranked alternative
              </div>
              <div className="mt-2 font-display text-lg font-semibold text-navy">
                Coastal Debt Resolve
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="font-display text-2xl font-semibold text-navy tabular-nums">
                  4.9
                </span>
                <span className="text-xs text-ink-subtle">/ 5</span>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                In-house attorneys, transparent pricing, and 800+ verified
                client reviews.
              </p>
              <Link
                href="/reviews/coastal-debt-resolve"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-deep transition-colors"
              >
                See Coastal review →
              </Link>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}
