import { RATING_LABELS, type RatingKey, type Review } from "@/data/reviews";
import { Stars } from "./Stars";

const ROWS: RatingKey[] = [
  "transparency",
  "results",
  "communication",
  "cost",
  "litigation",
];

type Props = {
  a: Review;
  b: Review;
};

export function HeadToHeadTable({ a, b }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-paper-soft border-b border-line">
            <th className="py-4 px-4 text-left text-xs uppercase tracking-[0.16em] font-semibold text-ink-subtle">
              Category
            </th>
            <th className="py-4 px-4 text-left">
              <div className="font-display font-semibold text-navy text-base">
                {a.name}
              </div>
              <div className="text-xs text-ink-subtle">Rank #{a.rank}</div>
            </th>
            <th className="py-4 px-4 text-left">
              <div className="font-display font-semibold text-navy text-base">
                {b.name}
              </div>
              <div className="text-xs text-ink-subtle">Rank #{b.rank}</div>
            </th>
            <th className="py-4 px-4 text-right text-xs uppercase tracking-[0.16em] font-semibold text-ink-subtle">
              Winner
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {ROWS.map((key) => {
            const av = a.ratings[key];
            const bv = b.ratings[key];
            const winner = av === bv ? "tie" : av > bv ? a.name : b.name;
            return (
              <tr key={key}>
                <td className="py-3 px-4 text-ink">{RATING_LABELS[key]}</td>
                <td
                  className={`py-3 px-4 ${winner === a.name ? "bg-gold-soft/30" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-navy tabular-nums">
                      {av.toFixed(1)}
                    </span>
                    <Stars value={av} size="sm" />
                  </div>
                </td>
                <td
                  className={`py-3 px-4 ${winner === b.name ? "bg-gold-soft/30" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-navy tabular-nums">
                      {bv.toFixed(1)}
                    </span>
                    <Stars value={bv} size="sm" />
                  </div>
                </td>
                <td className="py-3 px-4 text-right text-xs font-semibold text-ink-soft">
                  {winner === "tie" ? "Tie" : winner}
                </td>
              </tr>
            );
          })}
          <tr className="bg-paper-soft">
            <td className="py-3 px-4 font-semibold text-ink">Overall score</td>
            <td className="py-3 px-4 font-display font-semibold text-navy tabular-nums">
              {a.score.toFixed(1)}/5
            </td>
            <td className="py-3 px-4 font-display font-semibold text-navy tabular-nums">
              {b.score.toFixed(1)}/5
            </td>
            <td className="py-3 px-4 text-right text-xs font-semibold text-ink-soft">
              {a.score > b.score ? a.name : b.name}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
