import Link from "next/link";
import { CTABanner } from "@/components/review/CTABanner";
import { FeaturedReviews } from "@/components/review/FeaturedReviews";
import { faqSchema, jsonLd } from "@/lib/schema";

export const metadata = {
  title: "MCA Consolidation Loans: Compare Payoffs, Terms, and Total Cost (2026)",
  description: "Check whether an MCA consolidation offer pays off existing advances or adds another obligation. Compare repayment totals, fees, collateral, and credit assumptions.",
  alternates: { canonical: "/mca-consolidation-loans" },
};

const FAQ = [
  {
    "q": "Can I consolidate merchant cash advances?",
    "a": "Eligibility depends on the lender, proposed product, existing obligations, collateral, and finances. A marketing offer is not an approval."
  },
  {
    "q": "What is reverse consolidation?",
    "a": "The term can describe new funding used toward existing remittances rather than paying off the original accounts. Read the actual structure and total obligations."
  },
  {
    "q": "Is consolidation better than settlement?",
    "a": "Compare written offers and affordability. Settlement requires creditor agreement; financing requires approval and creates its own repayment terms."
  },
  {
    "q": "Will consolidation protect my credit?",
    "a": "No particular reporting or score outcome is assured. Check the existing accounts, new product, and actual payment performance."
  }
];

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MCA Consolidation Loans: Payoffs and Total Cost",
    description: metadata.description,
    dateModified: "2026-09-18",
    author: {
      "@type": "Organization",
      name: "MCA Settlement Reviews",
      url: "https://www.mcasettlementreviews.com/about",
    },
    publisher: { "@id": "https://www.mcasettlementreviews.com/#organization" },
    mainEntityOfPage:
      "https://www.mcasettlementreviews.com/mca-consolidation-loans",
  };

  return (
    <article className="bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articleSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(FAQ))} />

      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            Consolidation · 2026
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">MCA consolidation loans: what gets paid off, and what remains?</h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">A consolidation label does not tell you whether existing advances will be retired, whether the new financing costs less, or whether you qualify. Start with the written payoff and repayment details.</p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-12 space-y-8">
        <div><h2 className="font-display text-2xl font-semibold text-navy">Separate payoff financing from additional funding</h2><p className="mt-3 text-ink-soft leading-relaxed">A payoff consolidation replaces specified balances with new financing. An offer described as reverse consolidation may fund existing remittances while leaving original obligations in place. List exactly which accounts close and which remain.</p></div>
        <div><h2 className="font-display text-2xl font-semibold text-navy">Compare total dollars and timing</h2><p className="mt-3 text-ink-soft leading-relaxed">Obtain dated payoff quotes and the full new payment schedule. Include origination, broker, legal, account, and other fees. A smaller weekly payment can still accompany a larger total repayment.</p></div>
        <div><h2 className="font-display text-2xl font-semibold text-navy">Check collateral and qualification directly</h2><p className="mt-3 text-ink-soft leading-relaxed">Ask the prospective lender about underwriting, guarantees, existing filings, and any required payoff, termination, or subordination. Do not assume a UCC filing automatically makes you ineligible or that settlement guarantees future approval.</p></div>
        <div><h2 className="font-display text-2xl font-semibold text-navy">Review the downside case</h2><p className="mt-3 text-ink-soft leading-relaxed">Model missed or delayed revenue and identify default consequences under every agreement that remains. Compare other options with qualified advisers. Neither consolidation nor settlement guarantees a credit score, savings, or business continuity.</p></div>
        <div><h2 className="font-display text-xl font-semibold text-navy">Related guides</h2><ul className="mt-3 space-y-2">
          <li><Link href="/guides/mca-consolidation-vs-settlement" className="text-navy underline">Consolidation versus settlement</Link></li>
          <li><Link href="/guides/ucc-lien-release-mca" className="text-navy underline">Reviewing UCC terminations</Link></li>
          <li><Link href="/mca-debt-restructuring" className="text-navy underline">Restructuring options</Link></li>
          <li><Link href="/" className="text-navy underline">Compare reviewed providers</Link></li>
        </ul></div>
        <p className="text-xs text-ink-subtle">Edited September 18, 2026. General comparison framework; related guides identify legal sources and their scope. No representative approval, settlement, or credit outcome is established.</p>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-6">
        <h2 className="font-display text-2xl font-semibold text-navy mb-5">
          Consolidation questions, answered
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
        <CTABanner campaign="pillar-mca-consolidation" />
      </div>
    </article>
  );
}
