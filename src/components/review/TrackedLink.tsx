"use client";

// Outbound CTA link that fires a first-party beacon on click so we can see
// which pages actually send visitors to Coastal (see /api/track).
export function TrackedLink({
  href,
  campaign,
  className,
  children,
}: {
  href: string;
  campaign: string;
  className?: string;
  children: React.ReactNode;
}) {
  const onClick = () => {
    try {
      navigator.sendBeacon(
        "/api/track",
        new Blob(
          [JSON.stringify({ campaign, page: window.location.pathname })],
          { type: "application/json" },
        ),
      );
    } catch {
      // Tracking must never block the click.
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener nofollow"
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
