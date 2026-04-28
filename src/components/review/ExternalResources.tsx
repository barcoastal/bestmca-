import type { Review } from "@/data/reviews";

type Props = {
  review: Review;
};

function bbbSearchUrl(name: string) {
  return `https://www.bbb.org/search?find_text=${encodeURIComponent(name)}`;
}

function trustpilotSearchUrl(name: string) {
  return `https://www.trustpilot.com/search?query=${encodeURIComponent(name)}`;
}

export function ExternalResources({ review }: Props) {
  const links: { label: string; href: string; sub: string }[] = [];
  if (review.firmWebsite) {
    links.push({
      label: "Official website",
      href: review.firmWebsite,
      sub: review.websiteLabel,
    });
  }
  links.push({
    label: "BBB profile",
    href: bbbSearchUrl(review.name),
    sub: "Better Business Bureau search",
  });
  links.push({
    label: "Trustpilot",
    href: trustpilotSearchUrl(review.name),
    sub: "Public review aggregator",
  });

  return (
    <section className="my-12 rounded-2xl border border-line bg-white p-6">
      <h3 className="font-display text-lg font-semibold text-navy">
        Verify it yourself
      </h3>
      <p className="mt-2 text-sm text-ink-muted">
        Cross-check our review against the firm&rsquo;s own materials and
        independent third-party platforms.
      </p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block rounded-xl border border-line bg-paper-soft hover:bg-paper p-4 transition-colors"
            >
              <div className="text-xs uppercase tracking-[0.16em] font-semibold text-warn">
                {l.label}
              </div>
              <div className="mt-1.5 text-sm font-semibold text-navy">
                {l.sub}
              </div>
              <div className="mt-2 text-xs text-ink-subtle truncate">
                {new URL(l.href).hostname.replace(/^www\./, "")}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
