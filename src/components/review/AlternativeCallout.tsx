import Link from "next/link";
import { coastalCta } from "@/lib/cta";
import { Stars } from "./Stars";

type Props = {
  competitorName: string;
  reason: string;
};

export function AlternativeCallout({ competitorName, reason }: Props) {
  return (
    <aside className="my-10 rounded-2xl border-l-4 border-gold bg-gold-soft/30 p-6">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-warn">
        Editor's recommendation
      </div>
      <h4 className="mt-2 font-display text-xl font-semibold text-navy">
        Looking at {competitorName}? See our #1 pick first.
      </h4>
      <p className="mt-2 text-sm text-ink-soft leading-relaxed max-w-2xl">
        {reason} For a side-by-side comparison, our top-rated firm is{" "}
        <Link
          href="/reviews/coastal-debt-resolve"
          className="font-semibold text-navy underline underline-offset-2"
        >
          Coastal Debt Resolve
        </Link>
        , which scored 4.9/5 across transparency, results, communication, cost,
        and litigation defense.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Stars value={4.9} size="sm" showNumber />
        <Link
          href={coastalCta(`alternative-callout-${competitorName}`)}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white hover:bg-navy-deep transition-colors"
        >
          Get a free Coastal review
        </Link>
      </div>
    </aside>
  );
}
