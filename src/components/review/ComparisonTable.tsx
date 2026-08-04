import Link from "next/link";
import {
  RANKED,
  RATING_LABELS,
  type RatingKey,
  type Review,
} from "@/data/reviews";
import { Stars } from "./Stars";
import { BrandLogo } from "./BrandLogo";
import { TrackedLink } from "./TrackedLink";
import { coastalCta } from "@/lib/cta";

type Props = {
  reviews?: Review[];
  highlightSlug?: string;
};

const RATING_KEYS = Object.keys(RATING_LABELS) as RatingKey[];

function RankMedal({ rank }: { rank: number }) {
  if (rank === 1)
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold text-navy-deep font-display text-sm font-semibold shadow-[0_1px_4px_rgba(245,184,0,0.45)]">
        1
      </span>
    );
  if (rank === 2)
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-navy font-display text-sm font-semibold">
        2
      </span>
    );
  if (rank === 3)
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-warn-soft text-warn font-display text-sm font-semibold">
        3
      </span>
    );
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center font-display text-sm font-semibold text-ink-subtle tabular-nums">
      {rank}
    </span>
  );
}

// Five slim bars, one per scoring category. This is the same data that powers
// each review's RatingBreakdown, surfaced at a glance for comparison.
function CategoryBars({ review }: { review: Review }) {
  return (
    <div className="flex items-end gap-1 h-6" aria-hidden={false}>
      {RATING_KEYS.map((k) => {
        const v = review.ratings[k];
        return (
          <span
            key={k}
            title={`${RATING_LABELS[k]}: ${v}/5`}
            className={`w-1.5 rounded-sm ${
              v >= 4.5 ? "bg-gold" : v >= 3.5 ? "bg-navy/70" : "bg-navy/30"
            }`}
            style={{ height: `${Math.max(4, (v / 5) * 24)}px` }}
          />
        );
      })}
    </div>
  );
}

export function ComparisonTable({
  reviews = RANKED,
  highlightSlug = "coastal-debt-resolve",
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-16px_rgba(26,37,64,0.18)]">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-paper-soft text-left">
              <th className="py-3.5 px-4 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-subtle border-b-2 border-line">
                Rank
              </th>
              <th className="py-3.5 px-4 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-subtle border-b-2 border-line">
                Firm
              </th>
              <th className="py-3.5 px-4 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-subtle border-b-2 border-line">
                Score
              </th>
              <th className="py-3.5 px-4 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-subtle border-b-2 border-line hidden lg:table-cell">
                Category scores
              </th>
              <th className="py-3.5 px-4 text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-subtle border-b-2 border-line hidden md:table-cell">
                Min Debt
              </th>
              <th className="py-3.5 px-4 border-b-2 border-line" />
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {reviews.map((r, i) => {
              const isCoastal = r.slug === highlightSlug;
              return (
                <tr
                  key={r.slug}
                  className={`group ct-row ${
                    isCoastal
                      ? "bg-gold-soft/25 shadow-[inset_3px_0_0_0_var(--color-gold)]"
                      : "hover:bg-paper-soft transition-colors"
                  }`}
                  style={{ animationDelay: `${Math.min(i * 45, 500)}ms` }}
                >
                  <td className="py-4 px-4 align-middle">
                    <RankMedal rank={r.rank} />
                  </td>
                  <td className="py-4 px-4 align-middle">
                    <div className="flex items-center gap-3">
                      <BrandLogo review={r} size={38} />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Link
                            href={`/reviews/${r.slug}`}
                            className="font-semibold text-navy hover:underline"
                          >
                            {r.name}
                          </Link>
                          {isCoastal && (
                            <span className="inline-block rounded-full bg-gold/90 text-navy-deep text-[10px] font-semibold uppercase tracking-[0.14em] px-2 py-0.5">
                              Top pick
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-xs text-ink-subtle line-clamp-1 max-w-md">
                          {r.oneLineVerdict}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 align-middle whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-lg font-semibold text-navy tabular-nums leading-none">
                        {r.score.toFixed(1)}
                      </span>
                      <Stars value={r.score} size="sm" />
                    </div>
                    <div className="mt-1.5 h-1 w-24 rounded-full bg-line overflow-hidden">
                      <span
                        className={`block h-full rounded-full ${
                          isCoastal ? "bg-gold" : "bg-navy/60"
                        }`}
                        style={{ width: `${(r.score / 5) * 100}%` }}
                      />
                    </div>
                  </td>
                  <td className="py-4 px-4 align-middle hidden lg:table-cell">
                    <CategoryBars review={r} />
                  </td>
                  <td className="py-4 px-4 align-middle text-ink-soft hidden md:table-cell whitespace-nowrap">
                    {r.minDebt}
                  </td>
                  <td className="py-4 px-4 align-middle text-right">
                    <Link
                      href={`/reviews/${r.slug}`}
                      className="inline-flex items-center whitespace-nowrap rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-navy transition-colors group-hover:bg-navy group-hover:text-white group-hover:border-navy"
                    >
                      Read review →
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6} className="p-0">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-navy px-6 py-5">
                  <p className="text-sm text-white/85 text-center sm:text-left">
                    <span className="font-display font-semibold text-white">
                      Not sure where to start?
                    </span>{" "}
                    Our #1 pick reviews your MCA position free, with a written
                    strategy before any contract.
                  </p>
                  <TrackedLink
                    href={coastalCta("comparison-table")}
                    campaign="comparison-table"
                    className="shrink-0 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep hover:bg-gold/90 transition-colors"
                  >
                    Start free review →
                  </TrackedLink>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
