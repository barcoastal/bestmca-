import { Stars } from "./Stars";

type Props = {
  score: number;
  rank?: number;
  variant?: "default" | "compact";
};

export function ScoreBadge({ score, rank, variant = "default" }: Props) {
  if (variant === "compact") {
    return (
      <div className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1">
        <span className="font-display text-base font-semibold text-navy tabular-nums">
          {score.toFixed(1)}
        </span>
        <Stars value={score} size="sm" />
      </div>
    );
  }

  return (
    <div className="inline-flex flex-col items-center gap-2 rounded-2xl border border-line bg-white px-6 py-5 shadow-sm">
      {rank !== undefined && (
        <span className="text-[10px] uppercase tracking-[0.2em] text-ink-subtle font-semibold">
          Ranked #{rank}
        </span>
      )}
      <div className="font-display text-4xl font-semibold text-navy tabular-nums leading-none">
        {score.toFixed(1)}
        <span className="text-base text-ink-subtle font-normal">/5</span>
      </div>
      <Stars value={score} size="md" />
    </div>
  );
}
