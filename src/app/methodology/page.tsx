import Link from "next/link";
import { OWNERSHIP_DISCLOSURE } from "@/lib/disclosure";

export const metadata = {
  title: "Our Methodology: Sources, Company Placement & Review Standards",
  description: "How we compare MCA settlement firms, why Coastal is featured first, and what our dated public sources can and cannot establish.",
  alternates: { canonical: "/methodology" },
};
const CRITERIA = [
  { title: "Transparency and disclosures", text: "We look for written service descriptions, fees, cancellation terms, and program limitations. A company statement is evidence of what it advertises, not proof of what every customer receives." },
  { title: "Settlement outcomes", text: "Customer reviews describe individual experiences. They do not establish typical savings, success rates, or completion times. We have not independently audited a representative set of client agreements and outcomes." },
  { title: "Client communication", text: "Dated customer reviews, complaints, and business responses can identify questions to ask. An allegation is not a court finding, and a small review sample may not represent all clients." },
  { title: "Total cost", text: "Compare provider fees, creditor payments, and separate legal fees in a written proposal. Where a complete fee schedule has not been verified, the review says so. We do not infer a standard price or net savings from marketing claims." },
  { title: "Legal service scope", text: "Confirm the named attorney, licensing jurisdiction, engagement agreement, and fees. An advertised attorney network, referral, and direct representation are different arrangements; none alone establishes better outcomes." },
];
export default function MethodologyPage() {
  return <article className="bg-paper">
    <header className="border-b border-line bg-paper-soft"><div className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-xs uppercase tracking-widest text-warn">Editorial standards · Updated September 18, 2026</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-navy">How we compare MCA settlement companies</h1>
      <p className="mt-4 text-lg text-ink-soft">Our reviews organize public records, company claims, and questions to verify before signing an agreement.</p>
    </div></header>
    <div className="mx-auto max-w-3xl px-5 py-12 space-y-10 text-ink-soft leading-relaxed">
      <section><h2 className="font-display text-2xl font-semibold text-navy">Why Coastal appears first</h2>
        <p className="mt-3">Coastal Debt Resolve is the publisher’s featured first provider. This is an editorial placement decision, not the result of an independently validated scoring model or proof of superior savings, service, or legal outcomes. Other companies remain available for comparison.</p>
        <p className="mt-3">Coastal advertises MCA settlement and payment restructuring, and has dated BBB and Trustpilot records linked in its review. Those records offer information to evaluate; they do not establish that Coastal is the best fit for every business. Complete fees and the scope of legal representation must be confirmed in writing.</p>
        <Link href="/reviews/coastal-debt-resolve" className="mt-3 inline-block text-navy underline">Read Coastal’s sources, complaints and limitations</Link>
      </section>
      <section><h2 className="font-display text-2xl font-semibold text-navy">Why numerical scores are no longer displayed</h2>
        <p className="mt-3">Earlier versions used a weighted five-category score. The category assessments were not independently substantiated, so we stopped publishing those numbers on September 18, 2026. Reproducible arithmetic does not make the underlying judgments verified evidence.</p>
        <p className="mt-3">List numbers show editorial display positions. Coastal stays first; the remaining sequence is retained for continuity and does not measure relative performance. We do not assign category winners or publish rating structured data from the retired scores.</p>
      </section>
      <section><h2 className="font-display text-2xl font-semibold text-navy">What we examine</h2>
        <div className="mt-5 space-y-6">{CRITERIA.map(c => <div key={c.title}><h3 className="font-semibold text-navy">{c.title}</h3><p className="mt-2">{c.text}</p></div>)}</div>
      </section>
      <section><h2 className="font-display text-2xl font-semibold text-navy">Sources and corrections</h2>
        <p className="mt-3">Each review identifies the sources checked and their dates. We distinguish company advertising, third-party reviews, complaint allegations, business responses, and specific court or regulator findings. BBB grades, accreditation, customer stars, and complaint totals are separate measures.</p>
        <p className="mt-3">A page update date may reflect a wording correction; it does not refresh the date of its underlying source checks. We have not performed a comprehensive client-contract, outcome, or professional-license audit. Missing evidence is not proof that a provider lacks a service.</p>
        <p className="mt-3">Send a specific correction and supporting source to <a href="mailto:editorial@mcasettlementreviews.com" className="text-navy underline">editorial@mcasettlementreviews.com</a>.</p>
      </section>
      <section><h2 className="font-display text-2xl font-semibold text-navy">Ownership and compensation</h2><p className="mt-3">{OWNERSHIP_DISCLOSURE}</p><Link href="/about" className="mt-3 inline-block text-navy underline">About the publication</Link></section>
    </div>
  </article>;
}
