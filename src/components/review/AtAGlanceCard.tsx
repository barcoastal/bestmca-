import type { Review } from "@/data/reviews";

const ROWS: { label: string; key: keyof Review }[] = [
  { label: "Founded", key: "founded" },
  { label: "Headquarters", key: "hq" },
  { label: "Minimum debt", key: "minDebt" },
  { label: "Specialties", key: "specialties" },
  { label: "BBB", key: "bbb" },
  { label: "Trustpilot", key: "trustpilot" },
  { label: "Website", key: "websiteLabel" },
];

export function AtAGlanceCard({ review }: { review: Review }) {
  return (
    <aside className="rounded-2xl border border-line bg-white p-6 shadow-sm">
      <h3 className="font-display text-lg font-semibold text-navy">
        At a glance
      </h3>
      <dl className="mt-4 divide-y divide-line text-sm">
        {ROWS.map(({ label, key }) => (
          <div key={label} className="grid grid-cols-3 gap-3 py-2.5">
            <dt className="col-span-1 text-ink-subtle">{label}</dt>
            <dd className="col-span-2 text-ink-soft">{review[key] as string}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
