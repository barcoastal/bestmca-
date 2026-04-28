import { RATING_LABELS, type RatingKey } from "@/data/reviews";
import { Stars } from "./Stars";

type Props = {
  ratings: Record<RatingKey, number>;
};

const ORDER: RatingKey[] = [
  "transparency",
  "results",
  "communication",
  "cost",
  "litigation",
];

export function RatingBreakdown({ ratings }: Props) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
      <h3 className="font-display text-lg font-semibold text-navy">
        Rating breakdown
      </h3>
      <ul className="mt-4 space-y-3.5">
        {ORDER.map((key) => (
          <li
            key={key}
            className="flex items-center justify-between gap-4 border-b border-line pb-3.5 last:border-0 last:pb-0"
          >
            <div>
              <div className="text-sm font-medium text-ink">
                {RATING_LABELS[key]}
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Stars value={ratings[key]} size="sm" />
              <span className="font-display text-base font-semibold text-navy tabular-nums w-8 text-right">
                {ratings[key].toFixed(1)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
