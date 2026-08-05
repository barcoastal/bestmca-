"use client";

import { useState } from "react";
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

// Five slim bars, one per scoring category. Same data as each review's
// RatingBreakdown, surfaced at a glance for comparison.
function CategoryBars({ review }: { review: Review }) {
  return (
    <div className="flex items-end gap-1 h-6">
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

// Expanded "ticket": a boarding-pass style detail card with a perforated
// divider between the score stub and the detail body.
function TicketRow({ review, isCoastal }: { review: Review; isCoastal: boolean }) {
  return (
    <tr className="ct-row">
      <td colSpan={6} className="p-0">
        <div className="px-4 pb-5 pt-1 bg-paper-soft/60">
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm flex flex-col md:flex-row">
            {/* Stub */}
            <div className="md:w-56 shrink-0 bg-navy text-white p-5 flex md:flex-col items-center md:items-start gap-4 md:gap-3 relative">
              <BrandLogo review={review} size={44} />
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold">
                  Ranked #{review.rank} of {RANKED.length}
                </div>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-display text-3xl font-semibold text-gold tabular-nums leading-none">
                    {review.score.toFixed(1)}
                  </span>
                  <span className="text-xs text-white/60">/ 5</span>
                </div>
                <div className="mt-1">
                  <Stars value={review.score} size="sm" />
                </div>
              </div>
              <div className="hidden md:block mt-auto pt-3 text-[11px] text-white/70 leading-relaxed">
                <div>
                  <span className="text-white/45">Founded</span> {review.founded}
                </div>
                <div className="mt-0.5">
                  <span className="text-white/45">HQ</span> {review.hq}
                </div>
              </div>
              {/* Perforation */}
              <div
                aria-hidden
                className="hidden md:block absolute right-0 top-3 bottom-3 border-r-2 border-dashed border-white/25"
              />
            </div>

            {/* Body */}
            <div className="flex-1 p-5 md:p-6">
              <p className="text-sm text-ink-soft leading-relaxed">
                {review.oneLineVerdict}
              </p>

              <div className="mt-4 grid gap-5 md:grid-cols-2">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-win">
                    Best for
                  </div>
                  <ul className="mt-2 space-y-1.5 text-xs text-ink-soft">
                    {(review.bestFor.length > 0
                      ? review.bestFor
                      : ["Not recommended based on the public record"]
                    )
                      .slice(0, 3)
                      .map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-win">✓</span>
                          {b}
                        </li>
                      ))}
                  </ul>
                  <div className="mt-4 text-[10px] uppercase tracking-[0.18em] font-semibold text-bad">
                    Watch for
                  </div>
                  <ul className="mt-2 space-y-1.5 text-xs text-ink-soft">
                    {review.cons.slice(0, 2).map((c, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-bad">×</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-ink-subtle">
                    Category breakdown
                  </div>
                  <div className="mt-2 space-y-2">
                    {RATING_KEYS.map((k) => {
                      const v = review.ratings[k];
                      return (
                        <div key={k} className="flex items-center gap-2">
                          <span className="w-40 shrink-0 text-[11px] text-ink-muted">
                            {RATING_LABELS[k]}
                          </span>
                          <span className="flex-1 h-1.5 rounded-full bg-line overflow-hidden">
                            <span
                              className={`block h-full rounded-full ${
                                v >= 4.5 ? "bg-gold" : "bg-navy/60"
                              }`}
                              style={{ width: `${(v / 5) * 100}%` }}
                            />
                          </span>
                          <span className="w-7 text-right text-[11px] font-semibold text-navy tabular-nums">
                            {v.toFixed(1)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Link
                  href={`/reviews/${review.slug}`}
                  className="inline-flex items-center rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white hover:bg-navy-deep transition-colors"
                >
                  Read the full review →
                </Link>
                {!isCoastal && (
                  <>
                    <Link
                      href={`/compare/coastal-debt-vs-${review.slug}`}
                      className="inline-flex items-center rounded-full border border-line px-4 py-2 text-xs font-semibold text-navy hover:bg-paper-soft transition-colors"
                    >
                      Compare vs Coastal
                    </Link>
                    <Link
                      href={`/legit/${review.slug}`}
                      className="inline-flex items-center rounded-full border border-line px-4 py-2 text-xs font-semibold text-navy hover:bg-paper-soft transition-colors"
                    >
                      Is it legit?
                    </Link>
                  </>
                )}
                {isCoastal && (
                  <TrackedLink
                    href={coastalCta("comparison-ticket")}
                    campaign="comparison-ticket"
                    className="inline-flex items-center rounded-full bg-gold px-4 py-2 text-xs font-semibold text-navy-deep hover:bg-gold/90 transition-colors"
                  >
                    Start free review →
                  </TrackedLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export function ComparisonTable({
  reviews = RANKED,
  highlightSlug = "coastal-debt-resolve",
}: Props) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

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
              const isOpen = openSlug === r.slug;
              return [
                <tr
                  key={r.slug}
                  onClick={() => setOpenSlug(isOpen ? null : r.slug)}
                  aria-expanded={isOpen}
                  className={`group ct-row cursor-pointer ${
                    isCoastal
                      ? "bg-gold-soft/25 shadow-[inset_3px_0_0_0_var(--color-gold)]"
                      : isOpen
                        ? "bg-paper-soft"
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
                            onClick={(e) => e.stopPropagation()}
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
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenSlug(isOpen ? null : r.slug);
                      }}
                      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                        isOpen
                          ? "bg-navy text-white border-navy"
                          : "border-line text-navy group-hover:bg-navy group-hover:text-white group-hover:border-navy"
                      }`}
                    >
                      {isOpen ? "Close" : "More info"}
                      <span
                        aria-hidden
                        className={`inline-block transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                    </button>
                  </td>
                </tr>,
                isOpen ? (
                  <TicketRow
                    key={`${r.slug}-ticket`}
                    review={r}
                    isCoastal={isCoastal}
                  />
                ) : null,
              ];
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
