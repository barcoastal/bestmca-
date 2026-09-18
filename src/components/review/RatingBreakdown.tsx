import { RATING_LABELS, type RatingKey } from "@/data/reviews";

type Props = { ratings: Record<RatingKey, number>; note?: string };
const EVIDENCE: Record<RatingKey, string> = {
  transparency: "Request written fees, cancellation terms, and service scope.",
  results: "Representative client outcomes have not been independently audited.",
  communication: "Read dated complaints and responses; confirm your point of contact.",
  cost: "Compare provider fees, creditor payments, and any separate legal fees.",
  litigation: "Confirm the attorney, jurisdiction, and separate representation agreement where applicable.",
};
export function RatingBreakdown({ note }: Props) {
  return <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
    <h3 className="font-display text-lg font-semibold text-navy">Evidence and questions to verify</h3>
    {note && <p className="mt-3 text-xs text-ink-muted">{note}</p>}
    <ul className="mt-4 space-y-4">{(Object.keys(EVIDENCE) as RatingKey[]).map(key => <li key={key}>
      <h4 className="text-sm font-semibold text-ink">{RATING_LABELS[key]}</h4>
      <p className="mt-1 text-sm text-ink-soft">{EVIDENCE[key]}</p>
    </li>)}</ul>
  </div>;
}
