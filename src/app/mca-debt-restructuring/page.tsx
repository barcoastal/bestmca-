import Link from "next/link";
import { CTABanner } from "@/components/review/CTABanner";
import { FeaturedReviews } from "@/components/review/FeaturedReviews";
import { faqSchema, jsonLd } from "@/lib/schema";

export const metadata = {
  title: "MCA Debt Restructuring: Daily Pulls to One Affordable Payment (2026)",
  description:
    "How merchant cash advance restructuring actually works: converting daily ACH debits into a payment matched to real revenue, when it beats settlement, what it costs, and who does it well.",
  alternates: { canonical: "/mca-debt-restructuring" },
};

const FAQ = [
  {
    q: "What is MCA debt restructuring?",
    a: "Restructuring converts the payment terms of your existing advances, typically daily ACH pulls, into a schedule the business can sustain, usually one weekly or monthly payment sized to actual revenue. Unlike settlement it does not necessarily reduce the balance; it changes the shape of repayment so the business survives to repay it.",
  },
  {
    q: "Is restructuring better than settlement?",
    a: "They solve different problems. If the business can repay what it owes at a survivable pace, restructuring preserves funder relationships and avoids settled-debt consequences. If full repayment is not realistic, restructuring only stretches an unpayable number and settlement is the honest tool. Reputable firms run this math before recommending either.",
  },
  {
    q: "Will funders actually agree to restructure?",
    a: "Routinely, when approached credibly. A funder's alternative to restructuring is a default they must chase. Documented revenue, a specific proposal, and professional presentation get restructures approved every day, especially before default rather than after.",
  },
  {
    q: "How is restructuring different from a reverse consolidation?",
    a: "Restructuring changes the terms of what you already owe. A reverse consolidation adds a new funded position that covers your existing pulls while charging its own, usually at a heavy cost. One reduces pressure structurally; the other borrows against it.",
  },
];

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MCA Debt Restructuring, Explained",
    description: metadata.description,
    author: {
      "@type": "Organization",
      name: "MCA Settlement Reviews Editorial Team",
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
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            MCA debt restructuring: from daily pulls to one payment you can
            actually make
          </h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            Restructuring is the middle path the marketing skips: it does not
            wave the balance away like settlement ads promise, and it does not
            pile on new debt like consolidation offers. It renegotiates the
            terms of what you already owe, daily pulls become a weekly or
            monthly payment matched to what the business actually earns.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-12 space-y-8">
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">
            What a restructure actually changes
          </h2>
          <p className="mt-3 text-ink-soft leading-relaxed">
            Three levers move in a typical restructure. Cadence: daily ACH
            debits convert to weekly or monthly payments, which alone can
            rescue a business whose problem is timing rather than totals.
            Sizing: the payment gets tied to current revenue instead of the
            revenue projected when the advance was sold, formalizing what a{" "}
            <Link href="/guides/mca-reconciliation-clause" className="text-navy underline">
              reconciliation clause
            </Link>{" "}
            does informally. Duration: the repayment window stretches, which
            funders accept when the alternative is a default worth cents on
            the dollar.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">
            When restructuring is the right tool
          </h2>
          <p className="mt-3 text-ink-soft leading-relaxed">
            The test is one honest calculation: can the business repay its
            full obligations at some survivable pace? If yes, restructuring
            preserves relationships, avoids settled-debt reporting, and keeps
            the door open with funders you may want again. Restaurants coming
            off a bad season, contractors between projects, and{" "}
            <Link href="/mca-debt-relief-for-staffing-companies" className="text-navy underline">
              staffing firms
            </Link>{" "}
            waiting on slow receivables are classic restructure candidates.
            If the math says full repayment is fiction, stop: stretching an
            unpayable number just funds more months of fees. That is{" "}
            <Link href="/guides/what-is-mca-settlement" className="text-navy underline">
              settlement
            </Link>{" "}
            territory, and the honest firms will tell you so on the first
            call.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">
            Stacked positions: restructure as triage
          </h2>
          <p className="mt-3 text-ink-soft leading-relaxed">
            In{" "}
            <Link href="/guides/stacked-mca-debt" className="text-navy underline">
              stacked files
            </Link>
            , restructures and settlements usually run together: senior,
            well-secured positions get restructured while junior positions
            settle at discounts. That coordination, who gets stretched, who
            gets settled, in what order, is most of what a competent firm
            earns its fee doing. Our{" "}
            <Link href="/" className="text-navy underline">
              2026 ranking
            </Link>{" "}
            scores which firms run that play transparently, and the{" "}
            <Link href="/mca-settlement-companies-bbb-ratings" className="text-navy underline">
              BBB comparison
            </Link>{" "}
            shows their real complaint records.
          </p>
        </div>
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
