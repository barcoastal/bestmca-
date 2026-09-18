import Link from "next/link";
import { CTABanner } from "@/components/review/CTABanner";
import { FeaturedReviews } from "@/components/review/FeaturedReviews";
import { faqSchema, jsonLd } from "@/lib/schema";

export const metadata = {
  title: "MCA Debt Restructuring: Payment Changes, Costs, and Questions (2026)",
  description: "Compare proposed MCA payment changes, total cost, creditor consent, and alternatives. Restructuring does not guarantee affordability or a particular outcome.",
  alternates: { canonical: "/mca-debt-restructuring" },
};

const FAQ = [
  {
    "q": "What is MCA debt restructuring?",
    "a": "An agreed change to existing payment terms. It may alter timing or amount without necessarily reducing the balance."
  },
  {
    "q": "Is restructuring better than settlement?",
    "a": "There is no universal answer. Compare creditor participation, total payments, fees, legal exposure, and affordability under the same forecast."
  },
  {
    "q": "Will a funder accept my request?",
    "a": "It may accept, counter, or decline. We have not verified a representative acceptance rate or timeline."
  },
  {
    "q": "Is restructuring the same as reverse consolidation?",
    "a": "No. Check whether an offer changes existing terms or adds a new financing obligation while old balances remain."
  }
];

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MCA Debt Restructuring: Payment Changes and Costs",
    description: metadata.description,
    dateModified: "2026-09-18",
    author: {
      "@type": "Organization",
      name: "MCA Settlement Reviews",
      url: "https://www.mcasettlementreviews.com/about",
    },
    publisher: { "@id": "https://www.mcasettlementreviews.com/#organization" },
    mainEntityOfPage:
      "https://www.mcasettlementreviews.com/mca-debt-restructuring",
  };

  return (
    <article className="bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articleSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(FAQ))} />

      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            Restructuring · 2026
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">MCA debt restructuring: compare proposed payment changes</h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">A restructuring proposal seeks changes to existing payment terms. Review the entire written offer, including any additional cost or obligation, before assuming it creates an affordable payment.</p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-12 space-y-8">
        <div><h2 className="font-display text-2xl font-semibold text-navy">What might change</h2><p className="mt-3 text-ink-soft leading-relaxed">A proposal may change remittance timing, amounts, or other terms. Identify what remains payable, which creditors agree, and whether there are new fees, guarantees, or default conditions. A request is not an accepted amendment.</p></div>
        <div><h2 className="font-display text-2xl font-semibold text-navy">Compare reconciliation with a new agreement</h2><p className="mt-3 text-ink-soft leading-relaxed">Reconciliation applies an existing contractual calculation; a restructuring may change the agreement itself. Check your signed terms and compare any replacement documents before accepting them.</p></div>
        <div><h2 className="font-display text-2xl font-semibold text-navy">Test the complete cash-flow forecast</h2><p className="mt-3 text-ink-soft leading-relaxed">Include all creditors, payroll, taxes, suppliers, and service fees. Model weaker revenue as well as your expected case. A lower payment does not necessarily mean lower total cost, and no acceptance or business-survival result is assured.</p></div>
        <div><h2 className="font-display text-2xl font-semibold text-navy">Compare alternatives and responsibility</h2><p className="mt-3 text-ink-soft leading-relaxed">Ask who will negotiate, who handles legal advice, what representation costs, and what happens if a creditor declines. Review other financing, settlement, and bankruptcy options with qualified professionals where appropriate.</p></div>
        <div><h2 className="font-display text-xl font-semibold text-navy">Related guides</h2><ul className="mt-3 space-y-2">
          <li><Link href="/guides/mca-reconciliation-clause" className="text-navy underline">Reconciliation requests</Link></li>
          <li><Link href="/guides/how-much-does-mca-settlement-cost" className="text-navy underline">Comparing service fees</Link></li>
          <li><Link href="/guides/mca-settlement-vs-bankruptcy" className="text-navy underline">Settlement and bankruptcy</Link></li>
          <li><Link href="/" className="text-navy underline">Compare reviewed providers</Link></li>
        </ul></div>
        <p className="text-xs text-ink-subtle">Edited September 18, 2026. General comparison framework; related guides identify legal sources and their scope. No representative approval, settlement, or credit outcome is established.</p>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-6">
        <h2 className="font-display text-2xl font-semibold text-navy mb-5">
          Restructuring questions, answered
        </h2>
        <div className="space-y-3">
          {FAQ.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-line bg-white p-5 open:bg-paper-soft">
              <summary className="cursor-pointer flex items-start justify-between gap-4 list-none">
                <h3 className="font-display text-base font-semibold text-navy">{f.q}</h3>
                <span className="text-navy text-xl leading-none shrink-0 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <FeaturedReviews />

      <div className="mx-auto max-w-4xl px-5 pb-16">
        <CTABanner campaign="pillar-mca-restructuring" />
      </div>
    </article>
  );
}
