import type { Review } from "@/data/reviews";

type Props = {
  review: Pick<Review, "name" | "websiteLabel" | "shortName">;
  size?: number;
  rounded?: boolean;
  className?: string;
};

function googleFavicon(domain: string, size: number) {
  const px = Math.max(64, size * 2);
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${px}`;
}

export function BrandLogo({
  review,
  size = 48,
  rounded = true,
  className = "",
}: Props) {
  const domain = review.websiteLabel.split(",")[0].trim().replace(/^www\./, "");
  const showLogo = domain.includes(".");

  return (
    <span
      className={`relative inline-flex items-center justify-center bg-white border border-line shrink-0 overflow-hidden ${
        rounded ? "rounded-xl" : "rounded-md"
      } ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Monogram fallback always rendered behind the image */}
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center font-display font-semibold text-white"
        style={{
          fontSize: size * 0.46,
          background: `linear-gradient(135deg, #1a2540 0%, #2c3a5f 100%)`,
        }}
      >
        {review.shortName.charAt(0)}
      </span>
      {showLogo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={googleFavicon(domain, size)}
          alt={`${review.name} logo`}
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
          className="relative z-10 object-contain"
          style={{
            width: size * 0.7,
            height: size * 0.7,
            background: "transparent",
          }}
        />
      )}
    </span>
  );
}
