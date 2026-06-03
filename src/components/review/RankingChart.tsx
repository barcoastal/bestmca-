import Link from "next/link";
import { REVIEWS, type Review } from "@/data/reviews";
import { Stars } from "./Stars";
import { BrandLogo } from "./BrandLogo";

type Props = {
  reviews?: Review[];
  highlightSlug?: string;
};

// Stacked leaderboard: one firm per row, ranked top to bottom. Matches the
// visual language of the BBB ratings chart for a consistent feel across the site.
export function RankingChart({
  reviews = REVIEWS,
  highlightSlug = "coastal-debt-resolve",
}: Props) {
  return (
    <div className="space-y-3">
      {reviews.map((r) => {
        const isCoastal = r.slug === highlightSlug;
        return (
          <Link
            key={r.slug}
            href={`/reviews/${r.slug}`}
            className={`group block rounded-2xl border p-5 md:p-6 transition-shadow hover:shadow-md ${
              isCoastal
                ? "border-gold bg-gold-soft/30"
                : "border-line bg-white shadow-sm"
            }`}
          >
            <div className="flex items-center gap-4 md:gap-5">
              {/* Rank */}
              <span className="font-display text-2xl md:text-3xl font-semibold text-ink-subtle tabular-nums leading-none w-7 shrink-0 text-center">
                {r.rank}
              </span>

              {/* Logo */}
              <BrandLogo review={r} size={52} />

              {/* Name + verdict */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-display text-lg md:text-xl font-semibold text-navy leading-snug group-hover:underline">
                    {r.name}
                  </h3>
                  {isCoastal && (
                    <span className="rounded-full bg-gold text-navy-deep text-[9px] font-semibold uppercase tracking-[0.14em] px-2 py-0.5">
                      Top pick
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-ink-soft leading-relaxed line-clamp-2 max-w-2xl">
                  {r.oneLineVerdict}
                </p>
                <div className="mt-2 hidden sm:flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-subtle">
                  <span>
                    <span className="font-semibold text-ink-soft">Min</span>{" "}
                    {r.minDebt}
                  </span>
                  <span className="truncate max-w-xs">
                    <span className="font-semibold text-ink-soft">Focus</span>{" "}
                    {r.specialties.split(",")[0]}
                  </span>
                </div>
              </div>

              {/* Score */}
              <div className="flex flex-col items-center gap-1 shrink-0 pl-1">
                <span
                  className={`font-display text-2xl md:text-3xl font-semibold tabular-nums leading-none ${
                    isCoastal ? "text-navy" : "text-navy"
                  }`}
                >
                  {r.score.toFixed(1)}
                </span>
                <Stars value={r.score} size="sm" />
                <span className="text-[9px] uppercase tracking-[0.14em] text-ink-subtle font-semibold mt-0.5 hidden md:block">
                  Score
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
