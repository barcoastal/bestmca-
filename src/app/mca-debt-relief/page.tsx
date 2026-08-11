import Link from "next/link";
import { CTABanner } from "@/components/review/CTABanner";
import { faqSchema, jsonLd } from "@/lib/schema";

export const metadata = {
  title: "MCA Debt Relief: Every Real Option Compared (2026)",
  description:
    "The complete map of merchant cash advance debt relief: reconciliation, restructuring, settlement, consolidation, legal defense, and bankruptcy, what each costs, when each fits, and who to trust.",
  alternates: { canonical: "/mca-debt-relief" },
};

const FAQ = [
  {
    q: "What is MCA debt relief?",
    a: "MCA debt relief is any strategy that reduces, restructures, or eliminates merchant cash advance obligations: invoking reconciliation clauses, restructuring daily pulls into affordable payments, settling balances at a discount, refinancing, legal defense against funder lawsuits, or bankruptcy as the last resort. The right tool depends on how far the situation has escalated and whether the business is viable once the daily pulls stop.",
  },
  {
    q: "How much does MCA debt relief cost?",
    a: "Reconciliation is free, it is a right many contracts already grant. Professional settlement typically costs 15 to 25 percent of enrolled debt or a share of savings. Attorneys bill hourly or flat per matter. Consolidation costs whatever the new financing costs, which is often more than it looks. Always get fee schedules in writing before signing anything.",
  },
  {
    q: "Does MCA debt relief hurt your credit?",
    a: "A negotiated resolution is consistently better for business credit than the alternative it prevents: defaults, judgments, and open UCC liens. Some settled accounts get reported, but a resolved balance with released liens restores your ability to get conventional financing, which an unmanaged default never does.",
  },
  {
    q: "Which MCA debt relief company is best?",
    a: "We maintain an independent ranking of 17 MCA settlement and debt-relief firms, scored on transparency, results, communication, cost, and litigation defense, with every firm's live BBB record verified. Coastal Debt Resolve ranks first in the 2026 review.",
  },
];

const OPTIONS = [
  {
    name: "Reconciliation",
    when: "Payments sized off better months; revenue has dropped",
    body: "Many MCA contracts contain a clause that entitles you to have the daily pull adjusted to actual revenue. It is free, fast when honored, and the first thing to check before paying anyone.",
    href: "/guides/mca-reconciliation-clause",
    link: "Reconciliation guide",
  },
  {
    name: "Restructuring",
    when: "The business is viable but the payment shape is not",
    body: "Converting daily pulls into a weekly or monthly payment matched to real cash flow. Changes the shape of what you pay without necessarily reducing the balance.",
    href: "/mca-debt-restructuring",
    link: "Restructuring explained",
  },
  {
    name: "Settlement",
    when: "Full repayment is not realistic",
    body: "Negotiating the balance down, commonly 30 to 60 percent reductions on distressed files, and resolving liens and guarantees as part of the deal. The core tool for stacked or defaulted positions.",
    href: "/guides/what-is-mca-settlement",
    link: "How settlement works",
  },
  {
    name: "Consolidation",
    when: "You qualify for genuinely cheaper financing",
    body: "Replacing MCAs with one new obligation. Helps when a real term loan is available; the reverse-consolidation variant usually adds cost on top of an unpayable stack.",
    href: "/mca-consolidation-loans",
    link: "Consolidation options",
  },
  {
    name: "Legal defense",
    when: "Lawsuit, judgment, COJ, or frozen account",
    body: "Attorney representation against funder litigation: answering suits, vacating Confessions of Judgment, releasing restraints. Pairs with settlement rather than replacing it.",
    href: "/guides/mca-attorneys-vs-settlement-companies",
    link: "Attorney vs settlement firm",
  },
  {
    name: "Bankruptcy",
    when: "The business is not viable even without the MCA pulls",
    body: "The heaviest tool: stops collection instantly but through a public court process with lasting consequences. For most operating businesses, the options above resolve the problem without filing.",
    href: "/guides/mca-settlement-vs-bankruptcy",
    link: "Settlement vs bankruptcy",
  },
];

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MCA Debt Relief: Every Real Option Compared",
    description: metadata.description,
    author: {
      "@type": "Organization",
      name: "MCA Settlement Reviews Editorial Team",
      url: "https://www.mcasettlementreviews.com/about",
    },
    publisher: { "@id": "https://www.mcasettlementreviews.com/#organization" },
    mainEntityOfPage: "https://www.mcasettlementreviews.com/mca-debt-relief",
  };

  return (
    <article className="bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articleSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(FAQ))} />

      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            The Complete Map · 2026
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            MCA debt relief: every real option, compared honestly
          </h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            There are exactly six ways out of merchant cash advance debt, and
            the industry marketing does its best to blur them together. This
            page keeps them separate: what each one actually does, what it
            costs, and when it is the right tool, so you can pick a path
            before someone picks one for you.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className="grid gap-5 md:grid-cols-2">
          {OPTIONS.map((o, i) => (
            <div key={o.name} className="rounded-2xl border border-line bg-white p-6 flex flex-col">
              <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-ink-subtle">
                Option {i + 1}
              </div>
              <h2 className="mt-1 font-display text-xl font-semibold text-navy">
                {o.name}
              </h2>
              <div className="mt-2 text-xs font-semibold text-warn">
                Right when: {o.when}
              </div>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed flex-1">
                {o.body}
              </p>
              <Link href={o.href} className="mt-4 text-sm font-semibold text-navy hover:underline">
                {o.link} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-6 space-y-5">
        <h2 className="font-display text-2xl font-semibold text-navy">
          How to choose in one pass
        </h2>
        <p className="text-ink-soft leading-relaxed">
          Start with one honest calculation: total daily remittance across all
          positions as a share of revenue, next to your true operating margin.
          If the gap is small, reconciliation or a restructure fixes the shape
          of the payments. If the gap is structural, the number itself has to
          change, which is settlement. If a funder has already gone legal,
          defense comes first and negotiation rides alongside. And if the
          business cannot survive even with the debits gone, have the
          bankruptcy conversation early instead of funding fees on a lost
          cause.
        </p>
        <p className="text-ink-soft leading-relaxed">
          Whoever you hire, hold them to the standards in our{" "}
          <Link href="/guides/mca-debt-relief-red-flags" className="text-navy underline">
            red flags guide
          </Link>
          : written fees, defined outcomes, no pressure to stop paying without
          a legal strategy. Our{" "}
          <Link href="/" className="text-navy underline">
            2026 ranking of 17 MCA debt relief companies
          </Link>{" "}
          scores the major firms on exactly those standards, verified against
          their{" "}
          <Link href="/mca-settlement-companies-bbb-ratings" className="text-navy underline">
            live BBB records
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10">
        <h2 className="font-display text-2xl font-semibold text-navy mb-5">
          MCA debt relief: common questions
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

      <div className="mx-auto max-w-4xl px-5 pb-16">
        <CTABanner campaign="pillar-mca-debt-relief" />
      </div>
    </article>
  );
}
