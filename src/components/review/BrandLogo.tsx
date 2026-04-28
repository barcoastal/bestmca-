import type { Review } from "@/data/reviews";

type Props = {
  review: Pick<Review, "name" | "websiteLabel" | "shortName"> & {
    slug?: string;
  };
  size?: number;
  rounded?: boolean;
  className?: string;
};

const LOGO_FILES: Record<string, string> = {
  "coastal-debt-resolve": "/logos/coastal-debt-resolve.svg",
  "second-wind-consultants": "/logos/second-wind-consultants.png",
  spergel: "/logos/spergel.svg",
  "corporate-turnaround": "/logos/corporate-turnaround.jpg",
  "regroup-partners": "/logos/regroup-partners.webp",
  "corporate-rescue": "/logos/corporate-rescue.webp",
  "eastern-financial-partners": "/logos/eastern-financial-partners.svg",
  "stop-mca": "/logos/stop-mca.png",
  "mca-resolve": "/logos/mca-resolve.png",
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

function slugFromName(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function BrandLogo({
  review,
  size = 48,
  rounded = true,
  className = "",
}: Props) {
  const slug = review.slug ?? slugFromName(review.name);
  const logoSrc = LOGO_FILES[slug];
  const initials = initialsFor(review.shortName);
  const accent = ACCENTS[review.shortName] ?? "#1a2540";

  const tileClass = `relative inline-flex items-center justify-center shrink-0 overflow-hidden bg-white ${
    rounded ? "rounded-xl" : "rounded-md"
  } ${className}`;
  const tileStyle = {
    width: size,
    height: size,
    boxShadow:
      "inset 0 0 0 1px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.04)",
  } as const;

  if (logoSrc) {
    const padding = Math.round(size * 0.14);
    return (
      <span
        role="img"
        aria-label={`${review.name} logo`}
        className={tileClass}
        style={tileStyle}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt={`${review.name} logo`}
          loading="lazy"
          decoding="async"
          className="object-contain"
          style={{
            width: size - padding * 2,
            height: size - padding * 2,
            maxWidth: size - padding * 2,
            maxHeight: size - padding * 2,
          }}
        />
      </span>
    );
  }

  return (
    <span
      role="img"
      aria-label={`${review.name} logo`}
      className={tileClass}
      style={tileStyle}
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
