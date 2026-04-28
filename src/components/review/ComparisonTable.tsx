import Link from "next/link";
import { REVIEWS, type Review } from "@/data/reviews";
import { Stars } from "./Stars";
import { BrandLogo } from "./BrandLogo";

type Props = {
  reviews?: Review[];
  highlightSlug?: string;
};

export function ComparisonTable({
  reviews = REVIEWS,
  highlightSlug = "coastal-debt-resolve",
}: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-paper-soft border-b border-line text-left">
            <th className="py-3 px-4 text-xs uppercase tracking-[0.16em] font-semibold text-ink-subtle">
              Rank
            </th>
            <th className="py-3 px-4 text-xs uppercase tracking-[0.16em] font-semibold text-ink-subtle">
              Firm
            </th>
            <th className="py-3 px-4 text-xs uppercase tracking-[0.16em] font-semibold text-ink-subtle">
              Score
            </th>
            <th className="py-3 px-4 text-xs uppercase tracking-[0.16em] font-semibold text-ink-subtle hidden md:table-cell">
              Min Debt
            </th>
            <th className="py-3 px-4 text-xs uppercase tracking-[0.16em] font-semibold text-ink-subtle hidden lg:table-cell">
              Specialty
            </th>
            <th className="py-3 px-4" />
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {reviews.map((r) => {
            const isCoastal = r.slug === highlightSlug;
            return (
              <tr
                key={r.slug}
                className={isCoastal ? "bg-gold-soft/20" : "hover:bg-paper-soft"}
              >
                <td className="py-4 px-4 align-top font-display font-semibold text-navy tabular-nums">
                  #{r.rank}
                </td>
                <td className="py-4 px-4 align-top">
                  <div className="flex items-start gap-3">
                    <BrandLogo review={r} size={36} />
                    <div className="min-w-0">
                      <Link
                        href={`/reviews/${r.slug}`}
                        className="font-semibold text-navy hover:underline"
                      >
                        {r.name}
                      </Link>
                      {isCoastal && (
                        <span className="ml-2 inline-block rounded-full bg-gold/90 text-navy-deep text-[10px] font-semibold uppercase tracking-[0.14em] px-2 py-0.5 align-middle">
                          Top pick
                        </span>
                      )}
                      <p className="mt-1 text-xs text-ink-subtle line-clamp-2 max-w-md">
                        {r.oneLineVerdict}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 align-top whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-semibold text-navy tabular-nums">
                      {r.score.toFixed(1)}
                    </span>
                    <Stars value={r.score} size="sm" />
                  </div>
                </td>
                <td className="py-4 px-4 align-top text-ink-soft hidden md:table-cell">
                  {r.minDebt}
                </td>
                <td className="py-4 px-4 align-top text-ink-soft hidden lg:table-cell text-xs">
                  {r.specialties}
                </td>
                <td className="py-4 px-4 align-top text-right">
                  <Link
                    href={`/reviews/${r.slug}`}
                    className="text-xs font-semibold text-navy hover:underline"
                  >
                    Read review →
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
