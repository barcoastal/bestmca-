type Props = {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
};

const SIZE = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-6 w-6",
};

export function Stars({ value, max = 5, size = "md", showNumber = false }: Props) {
  const pct = Math.max(0, Math.min(1, value / max)) * 100;
  return (
    <span className="inline-flex items-center gap-2 align-middle">
      <span className="relative inline-flex">
        <span className={`flex ${size === "lg" ? "gap-0.5" : ""} text-line`}>
          {Array.from({ length: max }).map((_, i) => (
            <Star key={i} className={SIZE[size]} />
          ))}
        </span>
        <span
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${pct}%` }}
        >
          <span className={`flex ${size === "lg" ? "gap-0.5" : ""} text-gold`}>
            {Array.from({ length: max }).map((_, i) => (
              <Star key={i} className={SIZE[size]} filled />
            ))}
          </span>
        </span>
      </span>
      {showNumber && (
        <span className="text-sm font-semibold text-ink-soft tabular-nums">
          {value.toFixed(1)}
        </span>
      )}
    </span>
  );
}

function Star({ className, filled }: { className: string; filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M10 1.5l2.7 5.5 6.05.88-4.38 4.27 1.04 6.04L10 15.27l-5.41 2.92 1.04-6.04L1.25 7.88 7.3 7z" />
    </svg>
  );
}
