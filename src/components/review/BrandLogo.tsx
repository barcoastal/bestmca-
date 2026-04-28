import type { Review } from "@/data/reviews";

type Props = {
  review: Pick<Review, "name" | "websiteLabel" | "shortName">;
  size?: number;
  rounded?: boolean;
  className?: string;
};

const ACCENTS: Record<string, string> = {
  Coastal: "#3052ff",
  "Second Wind": "#0ea5e9",
  Spergel: "#16a34a",
  "Corporate Turnaround": "#a16207",
  Regroup: "#7c3aed",
  "Corporate Rescue": "#db2777",
  "Eastern Financial": "#0891b2",
  BDLG: "#475569",
  "Stop MCA": "#dc2626",
  "MCA Resolve": "#9ca3af",
};

function initialsFor(shortName: string) {
  const words = shortName.split(/\s+/);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return shortName.slice(0, 2).toUpperCase();
}

export function BrandLogo({
  review,
  size = 48,
  rounded = true,
  className = "",
}: Props) {
  const initials = initialsFor(review.shortName);
  const accent = ACCENTS[review.shortName] ?? "#1a2540";

  return (
    <span
      role="img"
      aria-label={`${review.name} logo`}
      className={`relative inline-flex items-center justify-center shrink-0 overflow-hidden bg-white ${
        rounded ? "rounded-xl" : "rounded-md"
      } ${className}`}
      style={{
        width: size,
        height: size,
        boxShadow: `inset 0 0 0 1px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.04)`,
      }}
    >
      <span
        aria-hidden
        className="absolute"
        style={{
          top: size * 0.14,
          right: size * 0.14,
          width: size * 0.13,
          height: size * 0.13,
          borderRadius: 999,
          background: accent,
        }}
      />
      <span
        className="font-display font-semibold tracking-tight"
        style={{
          fontSize: size * 0.42,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          color: "#0f172a",
        }}
      >
        {initials}
      </span>
    </span>
  );
}
