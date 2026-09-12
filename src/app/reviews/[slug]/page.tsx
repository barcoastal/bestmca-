import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COASTAL, REVIEWS, getReviewBySlug } from "@/data/reviews";
import { ScoreBadge } from "@/components/review/ScoreBadge";
import { AtAGlanceCard } from "@/components/review/AtAGlanceCard";
import { ProsConsTable } from "@/components/review/ProsConsTable";
import { RatingBreakdown } from "@/components/review/RatingBreakdown";
import { CTABanner } from "@/components/review/CTABanner";
import { AlternativeCallout } from "@/components/review/AlternativeCallout";
import { ConcernsList } from "@/components/review/ConcernsList";
import { ExternalResources } from "@/components/review/ExternalResources";
import { PublicReviewSources } from "@/components/review/PublicReviewSources";
import { CompetitorReviewBoxes } from "@/components/review/CompetitorReviewBoxes";
import { CoastalFAQ } from "@/components/review/CoastalFAQ";
import { BrandLogo } from "@/components/review/BrandLogo";
import { CompetitorFAQ } from "@/components/review/CompetitorFAQ";
import { TrackedLink } from "@/components/review/TrackedLink";
import { coastalCta } from "@/lib/cta";
import {
  reviewSchema,
  breadcrumbSchema,
  jsonLd,
} from "@/lib/schema";

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

  if (review.isCoastal) {
    return {
      title:
        "Coastal Debt Resolve Reviews 2026: Trustpilot, Complaints & Verdict",
      description:
        `2026 review of Coastal Debt Resolve: ${review.score.toFixed(1)}/5 editorial score. Services, public reviews, costs and limitations.`,
      keywords: [
        "Coastal Debt Resolve reviews",
        "Coastal Debt Resolve complaints",
        "Is Coastal Debt Resolve legit",
        "Coastal Debt review",
        "Coastal Debt Resolve cost",
        "Coastal Debt Resolve BBB",
      ],
      openGraph: {
        title: "Coastal Debt Resolve Reviews 2026: Independent Verdict",
        description:
          "Coastal Debt Resolve: service claims, public records, fees and review limitations.",
        type: "article",
      },
      alternates: { canonical: `/reviews/${review.slug}` },
    };
  }

  const title = review.ratingNote
    ? `${review.name} Reviews (2026): Services, Complaints & BBB`
    : `${review.name} Reviews (2026): ${review.score.toFixed(1)}/5 Rating, Complaints & BBB`;
  const description = review.oneLineVerdict;
  return {
    title,
    description,
    keywords: [
      `${review.name.toLowerCase()} reviews`,
      `${review.name.toLowerCase()} complaints`,
      `${review.name.toLowerCase()} lawsuit`,
      `is ${review.name.toLowerCase()} legit`,
      `${review.name.toLowerCase()} bbb`,
    ],
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
      {!review.ratingNote && <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(reviewSchema(review))}
      />}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Best Companies 2026", path: "/best-mca-settlement-companies-2026" },
            { name: review.name, path: `/reviews/${review.slug}` },
          ]),
        )}
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
            <div className="mt-5 flex items-center gap-4">
              <BrandLogo review={review} size={64} />
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
                  {review.name} Reviews
                  <span className="text-ink-subtle font-normal"> · 2026</span>
                </h1>
                <div className="mt-1 text-sm text-ink-subtle">
                  {review.websiteLabel}
                </div>
              </div>
            </div>
            <p className="mt-5 text-lg text-ink-soft leading-relaxed">
              {review.oneLineVerdict}
            </p>
            <p className="mt-3 text-sm text-ink-subtle">Editorial update: <time dateTime={review.updatedAt}>{review.updatedAt}</time> · Source checks and editorial limitations are noted below.</p>
            {review.ratingNote && <p className="mt-4 rounded-xl border border-line bg-white p-4 text-sm text-ink-soft">{review.ratingNote}</p>}
            <div className="mt-6">
              <TrackedLink
                href={coastalCta(`review-hero-${review.slug}`)}
                campaign={`review-hero-${review.slug}`}
                className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep hover:bg-gold/90 transition-colors shadow-[0_2px_10px_rgba(245,184,0,0.3)]"
              >
                {isCoastal
                  ? "Get your free MCA review from Coastal →"
                  : "Request a consultation from Coastal →"}
              </TrackedLink>
            </div>
            {isCoastal && (
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold/90 text-navy-deep px-3 py-1 text-xs uppercase tracking-[0.16em] font-semibold">
                Featured provider · Score under review
              </div>
            )}
            {!isCoastal && (
              <Link
                href={`/legit/${review.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:underline"
              >
                Is {review.shortName} legit or a scam? Read our verdict →
              </Link>
            )}
            {review.warning && (
              <div className="mt-5 rounded-2xl border border-bad/40 bg-bad-soft/40 p-4">
                <div className="text-xs uppercase tracking-[0.16em] font-semibold text-bad">
                  Editorial Warning
                </div>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {review.warning}
                </p>
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
              {review.ratingNote ? "What the available evidence supports" : `Why we ranked ${review.shortName} #${review.rank}`}
            </h2>
            <p className="mt-4 text-base text-ink-soft leading-relaxed">
              {review.verdict}
            </p>
          </section>

          {review.sources && (
            <section className="mt-10 rounded-2xl border border-line bg-white p-6">
              <h2 className="font-display text-2xl font-semibold text-navy">Sources checked {review.sourcesCheckedAt || "September 11, 2026"}</h2>
              <p className="mt-3 text-sm text-ink-muted">This update uses public records and company materials. We did not conduct an intake call, audit case results or review a signed client contract for this update. Category scores remain editorial judgments, not measured success rates.</p>
              <ul className="mt-5 space-y-5">{review.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy underline">{source.label}</a><p className="mt-1 text-sm text-ink-soft leading-relaxed">{source.note}</p></li>)}</ul>
            </section>
          )}
          {/* Pros and cons */}
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold text-navy">
              Strengths and drawbacks
            </h2>
            <p className="mt-2 text-sm text-ink-muted">
              Our editorial assessment of available materials. Company claims and client opinions are not independently audited outcomes.
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

          {/* Real public review quotes for this firm (when available) */}
          {!isCoastal && <CompetitorReviewBoxes review={review} />}

          {/* Public review platforms (every firm) */}
          <PublicReviewSources review={review} />

          {/* External verification (every firm) */}
          <ExternalResources review={review} />

          {/* Concerns (only for non-Coastal) */}
          {!isCoastal && review.concerns && review.concerns.length > 0 && (
            <ConcernsList concerns={review.concerns} />
          )}

          {/* FAQ targeting branded modifier queries (non-Coastal) */}
          {!isCoastal && <CompetitorFAQ review={review} />}

          {/* Coastal-only blocks */}
          {isCoastal && (
            <>
              {review.proofPoints && review.proofPoints.length > 0 && (
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
              <CoastalFAQ />
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
                ? "Contact Coastal for a consultation and request a written explanation of fees, services and cancellation terms."
                : "Compare Coastal’s written proposal, fees and service scope before choosing a provider."
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
          <RatingBreakdown ratings={review.ratings} note={review.ratingNote} />
          {!isCoastal && (
            <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <div className="text-xs uppercase tracking-[0.18em] font-semibold text-ink-subtle">
                Top-ranked alternative
              </div>
              <div className="mt-3 flex items-center gap-3">
                <BrandLogo
                  review={{
                    name: "Coastal Debt Resolve",
                    shortName: "Coastal",
                    websiteLabel: "coastaldebt.com",
                  }}
                  size={40}
                />
                <div className="font-display text-lg font-semibold text-navy">
                  Coastal Debt Resolve
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="font-display text-2xl font-semibold text-navy tabular-nums">
                  {COASTAL.score.toFixed(1)}
                </span>
                <span className="text-xs text-ink-subtle">/ 5</span>
              </div>
              <p className="mt-3 text-sm text-ink-muted">
                {COASTAL.oneLineVerdict}
              </p>
              <p className="mt-3 text-xs text-ink-muted">{COASTAL.ratingNote}</p>
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
