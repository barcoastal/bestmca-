import type { Review } from "@/data/reviews";
export function HeadToHeadTable({ a, b }: { a: Review; b: Review }) {
  const rows: { label: string; key: "bbb" | "specialties" | "pricing" | "minDebt" }[] = [
    { label: "BBB record", key: "bbb" }, { label: "Service scope", key: "specialties" },
    { label: "Fees and limitations", key: "pricing" }, { label: "Eligibility", key: "minDebt" },
  ];
  return <div className="overflow-x-auto rounded-2xl border border-line bg-white"><table className="w-full text-sm">
    <caption className="p-4 text-left text-ink-soft">Dated public information; no numeric winner is assigned.</caption>
    <thead><tr className="bg-paper-soft"><th className="p-4 text-left">Compare</th><th className="p-4 text-left">{a.name}</th><th className="p-4 text-left">{b.name}</th></tr></thead>
    <tbody>{rows.map(row => <tr key={row.key} className="border-t border-line"><th scope="row" className="p-4 text-left align-top">{row.label}</th><td className="p-4 align-top">{a[row.key]}</td><td className="p-4 align-top">{b[row.key]}</td></tr>)}</tbody>
  </table></div>;
}
