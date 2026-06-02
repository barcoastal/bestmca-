import Link from "next/link";
import { coastalCta } from "@/lib/cta";

type Props = {
  campaign: string;
  className?: string;
};

// BBB Accredited Business seal for Coastal Debt Resolve (BBB Accredited, A+
// rating, verified on bbb.org). Links through to the Coastal site. Attributed
// to Coastal specifically so it never implies this review site is accredited.
export function BBBSeal({ campaign, className = "" }: Props) {
  return (
    <Link
      href={coastalCta(campaign)}
      target="_blank"
      rel="noopener"
      aria-label="Coastal Debt Resolve is BBB Accredited with an A+ rating. Visit Coastal Debt Resolve."
      className={`group inline-flex items-stretch overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md ${className}`}
    >
      <span className="flex items-center gap-2.5 bg-[#0a4e8c] px-3.5 py-2.5">
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          aria-hidden
          className="shrink-0"
        >
          <path
            fill="#ffffff"
            d="M12 2c1.2 2.2.6 3.7-.4 5.1-1 1.4-1.7 2.6-.9 4.3.4-.7 1-1.2 1.6-1.7-.2 1.6.8 2.4 1.5 3.3.7.9.9 2 .2 3.2-.5.9-1.5 1.4-2.6 1.4-1.9 0-3.4-1.4-3.4-3.4 0-1.6.9-2.7 1.7-3.9C10.6 8.4 10.9 6 12 2Z"
          />
        </svg>
        <span className="leading-none text-white">
          <span className="block font-display text-base font-bold tracking-tight">
            BBB
          </span>
        </span>
      </span>
      <span className="flex flex-col justify-center bg-white px-3.5 py-2">
        <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#0a4e8c]">
          Accredited Business
        </span>
        <span className="text-sm font-bold text-[#0a4e8c] leading-tight">
          A+ Rating · Coastal Debt Resolve
        </span>
      </span>
    </Link>
  );
}
