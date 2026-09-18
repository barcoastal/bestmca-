type Props = { score: number; rank?: number; variant?: "default" | "compact" };

// The score prop is retained for compatibility with legacy data, but is not displayed.
export function ScoreBadge({ rank, variant = "default" }: Props) {
  return (
    <div className={`inline-flex flex-col items-center gap-1 border border-line bg-paper px-3 py-2 ${variant === "compact" ? "rounded-full" : "rounded-2xl"}`}>
      <span className="text-xs font-semibold text-navy">{rank ? `Editorial position #${rank}` : "Sources reviewed"}</span>
      {variant === "default" && <span className="text-xs text-ink-subtle">Numerical rating not published</span>}
    </div>
  );
}
