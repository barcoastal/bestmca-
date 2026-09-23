import Link from "next/link";
import type { Review } from "@/data/reviews";

const CHECKS: Record<string, { entity: string; legal: string; questions: string[] }> = {
  "coastal-debt-resolve": {
    entity: "The reviewed BBB profile identifies ABSM LLC. Confirm the legal entity on your proposed agreement.",
    legal: "Company materials describe an attorney network; included litigation representation and fees were not established.",
    questions: ["Which charges remain payable if I cancel, and how does the stated no-refund policy apply?", "Who is the named attorney, and does the engagement cover an existing lawsuit?", "How much of each payment reaches creditors rather than program or legal fees?"],
  },
  "rise-alliance": {
    entity: "Rise identifies itself as part of Second Wind Consultants. Confirm which entity signs the agreement and receives payments.",
    legal: "Business debt and personal-guarantee resolution are advertised; named counsel, jurisdiction and representation require confirmation.",
    questions: ["How does this proposal differ from Second Wind’s offering?", "Which creditors and personal guarantees does the scope cover?", "What fees and obligations remain if a creditor declines the proposal?"],
  },
  "business-debt-law-group": {
    entity: "The reviewed company and BBB materials identify Rumore Jocelyn Serra PLLC. Match this to the proposed engagement.",
    legal: "Negotiation, restructuring and lawsuit defense are advertised. Attorney licensing and availability in your jurisdiction were not independently checked.",
    questions: ["Which attorney will represent me, and in which courts or jurisdictions?", "Are negotiations, filings, hearings and expenses included in the quoted fee?", "What happens to fees and representation if I terminate the engagement?"],
  },
  "business-debt-insider": {
    entity: "Company materials identify Business Debt Insider as a trade name of GRL Recovery LLC.",
    legal: "The company disclosure separates consulting from legal representation, with a separate attorney agreement and fees.",
    questions: ["What is the total consulting fee, and when does each payment become due?", "What additional legal fees apply, and which attorney agreement covers them?", "What cancellation terms apply before and after creditor work begins?"],
  },
};

export function ReviewDecisionGuide({ review }: { review: Review }) {
  const checks = CHECKS[review.slug];
  if (!checks) return null;
  return (
    <section className="mt-10 rounded-2xl border border-line bg-paper-soft p-6" aria-labelledby="before-signing">
      <h2 id="before-signing" className="font-display text-2xl font-semibold text-navy">What to verify before choosing {review.shortName}</h2>
      <p className="mt-3 text-sm text-ink-muted">This checklist summarizes the dated sources above. Company statements are distinguished from verified outcomes; we have not inspected your contract.</p>
      <dl className="mt-5 space-y-4 text-sm text-ink-soft">
        <div><dt className="font-semibold text-navy">Contracting entity</dt><dd className="mt-1">{checks.entity}</dd></div>
        <div><dt className="font-semibold text-navy">Fees and cancellation</dt><dd className="mt-1">{review.pricing}</dd></div>
        <div><dt className="font-semibold text-navy">Legal representation</dt><dd className="mt-1">{checks.legal}</dd></div>
      </dl>
      <h3 className="mt-6 font-semibold text-navy">Questions for the written proposal</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink-soft">{checks.questions.map(q => <li key={q}>{q}</li>)}</ul>
      <p className="mt-5 text-sm text-ink-soft">Compare <Link className="text-navy underline" href="/guides/how-much-does-mca-settlement-cost">total settlement costs</Link>, <Link className="text-navy underline" href="/guides/mca-attorneys-vs-settlement-companies">attorneys and settlement companies</Link>, and <Link className="text-navy underline" href="/guides/mca-contract-red-flags">contract terms to check</Link>.</p>
    </section>
  );
}
