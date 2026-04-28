import Link from "next/link";

const NAV = [
  { href: "/best-mca-settlement-companies-2026", label: "Best of 2026" },
  { href: "/reviews/coastal-debt-resolve", label: "Reviews" },
  { href: "/guides/what-is-mca-settlement", label: "Guides" },
  { href: "/methodology", label: "Methodology" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-baseline gap-2 group">
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
