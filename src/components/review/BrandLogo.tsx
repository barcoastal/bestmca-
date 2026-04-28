import type { Review } from "@/data/reviews";

type Props = {
  review: Pick<Review, "name" | "websiteLabel" | "shortName">;
  size?: number;
  rounded?: boolean;
  className?: string;
};

function logoUrl(domain: string, size: number) {
  return `https://logo.clearbit.com/${domain}?size=${size * 2}`;
}

export function BrandLogo({
  review,
  size = 48,
  rounded = true,
  className = "",
}: Props) {
  const domain = review.websiteLabel.split(",")[0].trim();
  const showLogo = domain.includes(".");
  return (
    <span
      className={`relative inline-flex items-center justify-center bg-white border border-line shrink-0 overflow-hidden ${
        rounded ? "rounded-xl" : "rounded-md"
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center font-display font-semibold text-navy bg-paper-soft"
        style={{ fontSize: size * 0.42 }}
      >
        {review.shortName.charAt(0)}
      </span>
      {showLogo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoUrl(domain, size)}
          alt={`${review.name} logo`}
          width={size}
          height={size}
          loading="lazy"
          className="relative z-10 object-contain bg-white"
          style={{ width: size, height: size }}
        />
      )}
    </span>
  );
}
