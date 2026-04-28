import type { Review } from "@/data/reviews";

type Props = {
  review: Review;
};

function bbb(name: string) {
  return `https://www.bbb.org/search?find_text=${encodeURIComponent(name)}`;
}

function trustpilot(name: string) {
  return `https://www.trustpilot.com/search?query=${encodeURIComponent(name)}`;
}

function google(name: string) {
  return `https://www.google.com/search?q=${encodeURIComponent(`${name} reviews`)}`;
}

function reddit(name: string) {
  return `https://www.reddit.com/search/?q=${encodeURIComponent(name)}`;
}

export function PublicReviewSources({ review }: Props) {
  const sources = [
    {
      label: "Better Business Bureau",
      summary: review.bbb,
      href: bbb(review.name),
      tag: "BBB",
    },
    {
      label: "Trustpilot",
      summary: review.trustpilot,
      href: trustpilot(review.name),
      tag: "Trustpilot",
    },
    {
      label: "Google",
      summary: "Search public Google reviews and discussion",
      href: google(review.name),
      tag: "Google",
    },
    {
      label: "Reddit",
      summary: "Small business and operator threads",
      href: reddit(review.name),
      tag: "Reddit",
    },
  ];

  return (
    <section className="my-12">
      <header className="mb-5">
        <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-warn">
          Read the public reviews
        </div>
        <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
          What clients say about {review.shortName} on third-party platforms
        </h3>
        <p className="mt-2 text-sm text-ink-muted">
          We do not embed quotes we cannot independently verify. Use the boxes
          below to read the actual reviews on the platforms that host them.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {sources.map((s) => (
          <a
            key={s.tag}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block rounded-2xl border border-line bg-white p-5 hover:shadow-md transition-shadow"
          >
            <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-warn">
              {s.tag}
            </div>
            <div className="mt-2 font-display text-base font-semibold text-navy">
              {s.label}
            </div>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed line-clamp-3">
              {s.summary}
            </p>
            <div className="mt-4 text-xs font-semibold text-navy">
              Read on {s.tag} →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
