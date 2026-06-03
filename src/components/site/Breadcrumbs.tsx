import Link from "next/link";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

type Crumb = { name: string; path: string };

// Visible breadcrumb trail + BreadcrumbList JSON-LD. Always include Home first.
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-ink-subtle">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(full))}
      />
      <ol className="flex flex-wrap items-center gap-1.5">
        {full.map((c, i) => {
          const last = i === full.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {last ? (
                <span className="text-ink-muted">{c.name}</span>
              ) : (
                <Link href={c.path} className="hover:text-navy">
                  {c.name}
                </Link>
              )}
              {!last && <span aria-hidden>·</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
