import type { Review } from "@/data/reviews";
import { Stars } from "./Stars";

type Props = {
  review: Review;
};

export function CompetitorReviewBoxes({ review }: Props) {
  const hasQuotes = review.publicQuotes && review.publicQuotes.length > 0;

  if (!hasQuotes) {
    return (
      <section className="my-12">
        <header className="mb-6">
          <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-warn">
            Verified Public Reviews
          </div>
          <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
            What clients are actually saying about {review.shortName}
          </h3>
        </header>
        <div className="rounded-2xl border border-line bg-paper-soft p-6">
          <div className="flex items-start gap-4">
            <div className="text-warn text-2xl leading-none mt-1">!</div>
            <div>
              <h4 className="font-display text-lg font-semibold text-navy">
                {review.shortName} has limited public review footprint
              </h4>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed max-w-2xl">
                As of our review, {review.name} did not have a substantial
                volume of independent third-party reviews on the major
                platforms (Trustpilot, BBB) that we could embed honestly here.
                We refuse to fabricate or paraphrase reviews we cannot verify.
              </p>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed max-w-2xl">
                Use the platform boxes below to check the current public
                review state directly. If a meaningful review base develops,
                we will update this section.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="my-12">
      <header className="mb-6">
        <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-warn">
          Verified Public Reviews
        </div>
        <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
          What clients are actually saying about {review.shortName}
        </h3>
        <p className="mt-2 text-sm text-ink-muted">
          Real public reviews sourced from BBB, Trustpilot, and independent
          review aggregators. We include positive and negative quotes when
          present so the picture is honest.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {review.publicQuotes!.map((q, i) => {
          const isPositive = (q.rating ?? 5) >= 4;
          return (
            <article
              key={i}
              className={`rounded-2xl border p-5 flex flex-col ${
                isPositive
                  ? "border-line bg-white"
                  : "border-bad/30 bg-bad-soft/20"
              }`}
            >
              <div className="flex items-center justify-between">
                {q.rating !== undefined ? (
                  <Stars value={q.rating} size="sm" />
                ) : (
                  <span />
                )}
                <span
                  className={`text-[10px] uppercase tracking-[0.16em] font-semibold ${
                    isPositive ? "text-warn" : "text-bad"
                  }`}
                >
                  {q.source}
                </span>
              </div>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed flex-1">
                &ldquo;{q.quote}&rdquo;
              </p>
              {q.attribution && (
                <footer className="mt-4 text-[11px] uppercase tracking-[0.16em] text-ink-subtle">
                  {q.attribution}
                </footer>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
