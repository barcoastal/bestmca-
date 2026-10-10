import type { Metadata } from "next";
import Link from "next/link";
import { REVIEWS } from "@/data/reviews";
import { BrandLogo } from "@/components/review/BrandLogo";
import { jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "MCA Company Review Directory: Find a Provider",
  description: "Find all 17 MCA settlement and restructuring company reviews alphabetically. Read dated sources, fee information, complaints and service limitations.",
  alternates: { canonical: "/reviews" },
};

const firms = [...REVIEWS].sort((a, b) => a.name.localeCompare(b.name, "en"));

export default function ReviewsDirectory() {
  return (
    <article className="bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "MCA company review directory",
        url: "https://www.mcasettlementreviews.com/reviews",
        mainEntity: {
          "@type": "ItemList",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: firms.length,
          itemListElement: firms.map((firm, index) => ({
            "@type": "ListItem", position: index + 1, name: firm.name,
            url: `https://www.mcasettlementreviews.com/reviews/${firm.slug}`,
          })),
        },
      })} />
      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-xs uppercase tracking-widest text-warn">Company directory · Alphabetical order</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy">Find an MCA company review</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">Browse {firms.length} settlement, restructuring and debt-help providers. Each review brings together dated public records, advertised services, fee information and questions for a written proposal.</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-muted">This directory is alphabetical. Inclusion does not establish eligibility, service quality or settlement results. Some providers offer broader debt services or work in different jurisdictions.</p>
          <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold text-navy">
            <Link className="underline underline-offset-2" href="/mca-settlement-companies-bbb-ratings">Compare BBB records</Link>
            <Link className="underline underline-offset-2" href="/methodology">How we review companies</Link>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-5 md:grid-cols-2">
        {firms.map(firm => (
          <section key={firm.slug} className="rounded-2xl border border-line bg-white p-6">
            <div className="flex items-start gap-3">
              <BrandLogo review={firm} size={40} />
              <h2 className="font-display text-xl font-semibold text-navy"><Link className="hover:underline" href={`/reviews/${firm.slug}`}>{firm.name}</Link></h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{firm.specialties}</p>
            <p className="mt-3 text-xs text-ink-muted">Editorial update: <time dateTime={firm.updatedAt}>{firm.updatedAt}</time>. Individual source dates are listed in the review.</p>
            <Link className="mt-5 inline-block text-sm font-semibold text-navy underline underline-offset-2" href={`/reviews/${firm.slug}`}>Read the {firm.shortName} review →</Link>
          </section>
        ))}
      </div>
    </article>
  );
}
