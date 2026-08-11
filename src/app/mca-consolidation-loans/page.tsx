import Link from "next/link";
import { CTABanner } from "@/components/review/CTABanner";
import { faqSchema, jsonLd } from "@/lib/schema";

export const metadata = {
  title: "MCA Consolidation Loans: What They Fix, What They Hide (2026)",
  description:
    "Consolidating MCA debt into one loan sounds like the fix. Sometimes it is. The honest guide to MCA consolidation loans, reverse consolidation, qualification reality, and when settlement beats both.",
  alternates: { canonical: "/mca-consolidation-loans" },
};

const FAQ = [
  {
    q: "Can I get a loan to consolidate my MCAs?",
    a: "If your credit and cash flow still qualify, yes: a term loan or SBA loan that pays off the advances is genuinely the cleanest exit, cheaper money, monthly payments, relationships intact. The catch is qualification: stacked MCAs, UCC filings, and depleted cash flow are exactly what makes conventional lenders decline, which is why many owners cannot take this road until the MCAs are resolved first.",
  },
  {
    q: "What is a reverse consolidation?",
    a: "A product that deposits weekly amounts to cover your existing daily MCA pulls while collecting its own longer payment from you. Every original position stays alive and a new one is added on top. It smooths cash flow short-term but usually raises the total cost of an already stressed stack. Read the total-repayment number before signing one.",
  },
  {
    q: "Is consolidation or settlement better for MCA debt?",
    a: "Run the full-repayment test: can the business pay everything it owes at a survivable pace if the payments were merely reshaped? If yes and you qualify for real financing, consolidate. If no, consolidation just rearranges an unpayable number and settlement, which reduces the balance itself, is the tool that fits.",
  },
  {
    q: "Will consolidating MCAs hurt my credit?",
    a: "A true consolidation that pays funders in full is the most credit-friendly exit there is. The danger is the failed middle path: adding a consolidation product to a stack that defaults anyway, which leaves you with every consequence of default plus one more creditor.",
  },
];

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MCA Consolidation Loans: What They Fix, What They Hide",
    description: metadata.description,
    author: {
      "@type": "Organization",
      name: "MCA Settlement Reviews Editorial Team",
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
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            MCA consolidation loans: the fix that is sometimes real and
            sometimes a fourth position
          </h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            Every owner drowning in daily pulls has the same thought: one
            loan, pay them all off, one sane payment. Sometimes that product
            exists and is genuinely the answer. Sometimes what gets sold under
            that name adds a new advance on top of the pile. This page is how
            you tell the difference before signing.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-12 space-y-8">
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">
            The three products sold as "MCA consolidation"
          </h2>
          <p className="mt-3 text-ink-soft leading-relaxed">
            A true consolidation loan, term or SBA, pays your funders off in
            full and replaces them with one cheaper monthly payment. It is the
            best exit in the category and the hardest to qualify for. A
            consolidation advance is just a bigger MCA that retires the
            smaller ones: same daily-pull structure, new paper, occasionally
            worth it for the cadence change alone, usually not. And the
            reverse consolidation does not retire anything: it floats your
            existing pulls while adding its own, which means every UCC filing,
            every guarantee, and every position stays live, plus one.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">
            The qualification catch-22
          </h2>
          <p className="mt-3 text-ink-soft leading-relaxed">
            The consolidation ads target owners who mostly cannot get the good
            product. Lenders searching your record find the{" "}
            <Link href="/guides/ucc-lien-release-mca" className="text-navy underline">
              UCC filings
            </Link>{" "}
            each advance left behind, see the daily debits in your statements,
            and decline. The path many owners actually walk: resolve the
            advances first, through{" "}
            <Link href="/guides/what-is-mca-settlement" className="text-navy underline">
              settlement
            </Link>{" "}
            or a{" "}
            <Link href="/mca-debt-restructuring" className="text-navy underline">
              restructure
            </Link>
            , get the liens released, then refinance the settled amount at
            conventional rates. Settlement first, consolidation second, not
            the other way around.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">
            Three questions that expose a bad offer
          </h2>
          <ul className="mt-3 space-y-2 text-ink-soft leading-relaxed list-none">
            <li className="flex gap-3"><span className="text-warn font-semibold">01</span> Does this pay off my existing positions entirely, or sit alongside them?</li>
            <li className="flex gap-3"><span className="text-warn font-semibold">02</span> What is the total dollar repayment over the product&rsquo;s life, next to my current total payoff?</li>
            <li className="flex gap-3"><span className="text-warn font-semibold">03</span> What UCC position does the new lender take, and what happens to the old filings?</li>
          </ul>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Full comparison with settlement, including when each wins, in our{" "}
            <Link href="/guides/mca-consolidation-vs-settlement" className="text-navy underline">
              consolidation vs settlement guide
            </Link>
            . And if the math points to resolution instead, our{" "}
            <Link href="/" className="text-navy underline">
              2026 ranking of MCA debt relief companies
            </Link>{" "}
            is where to start vetting help.
          </p>
        </div>
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

      <div className="mx-auto max-w-4xl px-5 pb-16">
        <CTABanner campaign="pillar-mca-consolidation" />
      </div>
    </article>
  );
}
