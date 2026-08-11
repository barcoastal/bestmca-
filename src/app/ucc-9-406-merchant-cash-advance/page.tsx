import Link from "next/link";
import { CTABanner } from "@/components/review/CTABanner";
import { faqSchema, jsonLd } from "@/lib/schema";

export const metadata = {
  title: "UCC 9-406 and MCA Debt: When Funders Contact Your Customers",
  description:
    "UCC 9-406 is the statute MCA funders cite when they tell your customers to pay them instead of you. What the notice really means, what it does not, and how to respond in the first week.",
  alternates: { canonical: "/ucc-9-406-merchant-cash-advance" },
};

const FAQ = [
  {
    q: "What is a UCC 9-406 notice?",
    a: "Section 9-406 of the Uniform Commercial Code lets an assignee of receivables notify the account debtor, your customer, to pay the assignee directly. MCA funders, claiming ownership of your future receivables, send these letters to your customers after default, instructing them to redirect payments to the funder.",
  },
  {
    q: "Do my customers have to comply with a 9-406 letter?",
    a: "A valid notification puts the customer at risk of paying twice if they ignore it, which is why most corporate payables departments comply reflexively. But customers can demand reasonable proof of the assignment, and letters are frequently defective, overbroad, or sent on disputed positions. Getting counsel involved fast is how those defects get raised before your revenue reroutes.",
  },
  {
    q: "Can 9-406 letters be withdrawn?",
    a: "Yes, and they routinely are as part of a negotiated resolution. Funders use the letters as pressure; releasing them is a standard chip in settlement talks. The damage to customer confidence is the part that does not withdraw as easily, which is why speed of response matters more than anything.",
  },
  {
    q: "Is a 9-406 notice the same as a UCC lien?",
    a: "No. The UCC-1 financing statement is a public filing that establishes the funder's security interest. The 9-406 notification is an operational weapon built on top of it: a letter that actually redirects your cash. The lien blocks financing; the letter attacks revenue.",
  },
];

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "UCC 9-406 and MCA Debt: When Funders Contact Your Customers",
    description: metadata.description,
    author: {
      "@type": "Organization",
      name: "MCA Settlement Reviews Editorial Team",
      url: "https://www.mcasettlementreviews.com/about",
    },
    publisher: { "@id": "https://www.mcasettlementreviews.com/#organization" },
    mainEntityOfPage:
      "https://www.mcasettlementreviews.com/ucc-9-406-merchant-cash-advance",
  };

  return (
    <article className="bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articleSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(FAQ))} />

      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            Legal Mechanics · UCC 9-406
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            UCC 9-406: the letter that sends your customers&rsquo; money to
            your funder
          </h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            Of everything in an MCA funder&rsquo;s toolkit, the 9-406
            notification does the most damage the fastest: one letter, and
            your biggest customer starts paying the funder instead of you.
            Here is what the statute actually authorizes, where the letters
            overreach, and what the first week of response looks like.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-12 space-y-8">
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">
            Why funders can do this at all
          </h2>
          <p className="mt-3 text-ink-soft leading-relaxed">
            An MCA is structured as a purchase of your future receivables.
            UCC 9-406 exists so a buyer of receivables can collect what it
            bought: it entitles an assignee to notify your account debtors to
            pay the assignee directly, and a customer who pays you after
            receiving valid notice risks having to pay twice. That double-pay
            risk is why payables departments comply quickly, and why the
            letters are so effective as pressure even when the underlying
            claim is contestable.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">
            Where the letters overreach
          </h2>
          <p className="mt-3 text-ink-soft leading-relaxed">
            In practice, notices go out that are defective in ways counsel can
            attack: sent on positions that are current or disputed, claiming
            all receivables when the agreement assigned a percentage, missing
            the identification the statute requires, or sent by junior
            funders standing behind senior filings. Customers are also
            entitled to request reasonable proof of the assignment before
            redirecting anything, a right almost no one exercises unless your
            attorney tells them to. None of this makes the letters harmless;
            it makes them negotiable.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">
            The first-week response
          </h2>
          <p className="mt-3 text-ink-soft leading-relaxed">
            Move on three fronts at once. Legal: get MCA-experienced counsel
            reviewing the notice and the underlying agreement for defects,
            this overlaps with everything in our{" "}
            <Link href="/guides/warning-signs-mca-funder-legal-action" className="text-navy underline">
              escalation-signs guide
            </Link>
            . Customers: contact affected accounts personally, calm and
            factual, telling them the matter is with counsel and asking them
            to route proof-of-assignment demands through you. Resolution: a
            funder deploying 9-406 letters is spending real effort, which
            means it will negotiate; withdrawal of the notices should be an
            explicit term of any{" "}
            <Link href="/guides/what-is-mca-settlement" className="text-navy underline">
              settlement
            </Link>
            , alongside the{" "}
            <Link href="/guides/ucc-lien-release-mca" className="text-navy underline">
              UCC terminations
            </Link>
            . Firms with in-house litigation capability handle this sequence
            under one roof, a core reason litigation defense is a scored
            category in our{" "}
            <Link href="/" className="text-navy underline">
              2026 rankings
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-6">
        <h2 className="font-display text-2xl font-semibold text-navy mb-5">
          UCC 9-406 questions, answered
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
        <CTABanner campaign="pillar-ucc-9-406" />
      </div>
    </article>
  );
}
