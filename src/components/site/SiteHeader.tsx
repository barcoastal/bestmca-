import Link from "next/link";

const NAV = [
  { href: "/best-mca-settlement-companies-2026", label: "Best of 2026" },
  { href: "/mca-settlement-companies-bbb-ratings", label: "BBB Ratings" },
  { href: "/reviews/coastal-debt-resolve", label: "Reviews" },
  { href: "/guides/what-is-mca-settlement", label: "Guides" },
  { href: "/news", label: "News" },
  { href: "/methodology", label: "Methodology" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center rounded-[9px] bg-navy shrink-0"
          >
            <svg viewBox="0 0 64 64" width={22} height={22}>
              <path
                fill="#f5b800"
                d="M30 10 C33 23 39 29 52 32 C39 35 33 41 30 54 C27 41 21 35 8 32 C21 29 27 23 30 10 Z"
              />
              <path
                fill="#ffd34d"
                d="M47 12 C47.8 15.4 49.6 17.2 53 18 C49.6 18.8 47.8 20.6 47 24 C46.2 20.6 44.4 18.8 41 18 C44.4 17.2 46.2 15.4 47 12 Z"
              />
            </svg>
          </span>
          <span className="font-display text-xl text-navy font-semibold tracking-tight">
            MCA Settlement Reviews
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
            Independent · 2026
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-ink-soft">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hover:text-navy transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
