import Link from "next/link";
import { CTABanner } from "@/components/review/CTABanner";
import { FeaturedReviews } from "@/components/review/FeaturedReviews";
import { faqSchema, jsonLd } from "@/lib/schema";

export const metadata = {
  title: "UCC 9-406 and MCA Debt: When Funders Contact Your Customers",
  description:
    "UCC 9-406 is the statute MCA funders cite when they tell your customers to pay them instead of you. What the notice really means, what it does not, and how to respond in the first week.",
  alternates: { canonical: "/ucc-9-406-merchant-cash-advance" },
};

const FAQ = [
  { q: "What is a UCC 9-406 notice?", a: "Under New York UCC 9-406, a qualifying assignment notice can change whom an account debtor must pay to discharge an obligation. The provision has conditions and exceptions; the actual notice, agreement, and applicable law matter." },
  { q: "Do my customers have to comply with every letter?", a: "Do not assume every letter is effective or ineffective. New York’s statute addresses identification of assigned rights, proof of assignment, and exceptions. The account debtor should obtain advice on the actual notice before deciding whom to pay." },
  { q: "Can the notice be withdrawn in a settlement?", a: "A proposed agreement can address withdrawal or changed payment instructions, but acceptance is not guaranteed. Confirm which notices and parties are covered and how any change will be communicated." },
  { q: "Is this the same as a UCC financing statement?", a: "No. A financing statement is a public filing; an assignment notice addresses payment of an assigned obligation. A filing alone does not resolve every question about the validity, scope, or enforcement of an asserted interest." },
];

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "UCC 9-406 and MCA Debt: When Funders Contact Your Customers",
    description: metadata.description,
    dateModified: "2026-09-18",
    author: {
      "@type": "Organization",
      name: "MCA Settlement Reviews",
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
            Legal Mechanics · UCC 9-406 · Updated September 18, 2026
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            UCC 9-406: evaluating an MCA assignment notice
          </h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            An assignment notice can raise questions about where customer payments
            should go. This overview uses New York’s current statute as an example;
            it does not determine the law or outcome for your particular agreement.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-12 space-y-6 text-ink-soft leading-relaxed">
        <h2 className="font-display text-2xl font-semibold text-navy">Read the actual notice and statute</h2>
        <p>New York UCC 9-406 addresses when payment to an assignor or assignee discharges an account debtor’s obligation. It includes rules about identifying the rights assigned, requests for reasonable proof, and exceptions. It does not establish that every funder letter is valid or that a disputed notice can simply be ignored.</p>
        <p>Preserve the notice, underlying agreements, payment records, and correspondence. Have qualified counsel assess the relevant parties, assigned rights, jurisdiction, and any deadline. Do not assume that negotiation suspends the notice or other proceedings.</p>
        <p>If an agreement changes payment instructions or withdraws notices, identify the affected accounts and parties in writing and confirm how the change will be communicated. No withdrawal, discount, or completion time is guaranteed.</p>
        <p>Source checked September 18, 2026: <a className="text-navy underline" href="https://www.nysenate.gov/legislation/laws/UCC/9-406">New York Senate: UCC 9-406</a>. Other jurisdictions and agreements require their own analysis.</p>
        <Link className="inline-block text-navy underline" href="/guides/what-is-mca-settlement">Read the settlement overview and its limitations</Link>
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

      <FeaturedReviews />

      <div className="mx-auto max-w-4xl px-5 pb-16">
        <CTABanner campaign="pillar-ucc-9-406" />
      </div>
    </article>
  );
}
