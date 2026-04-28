import Link from "next/link";
import { coastalCta, COASTAL_PHONE, COASTAL_PHONE_HREF } from "@/lib/cta";

type Props = {
  campaign: string;
  variant?: "primary" | "subtle";
  heading?: string;
  body?: string;
  buttonLabel?: string;
};

export function CTABanner({
  campaign,
  variant = "primary",
  heading = "Get a free MCA review from our #1 rated firm",
  body = "Coastal Debt Resolve will analyze your situation, give you a written settlement strategy, and quote a flat fee before you sign anything. No upfront payment to start.",
  buttonLabel = "Start free MCA review",
}: Props) {
  if (variant === "subtle") {
    return (
      <aside className="rounded-2xl border border-line bg-paper-soft p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <p className="font-display text-lg font-semibold text-navy leading-snug">
            {heading}
          </p>
          <p className="mt-1 text-sm text-ink-muted max-w-xl">{body}</p>
        </div>
        <Link
          href={coastalCta(campaign)}
          target="_blank"
          rel="noopener"
          className="shrink-0 inline-flex items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy-deep transition-colors"
        >
          {buttonLabel}
        </Link>
      </aside>
    );
  }

  return (
    <section className="rounded-3xl bg-navy text-white p-8 md:p-10 my-12 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative max-w-3xl">
        <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-gold-soft">
          MCA Settlement Reviews · #1 Recommended Firm
        </div>
        <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold leading-tight">
          {heading}
        </h3>
        <p className="mt-3 text-white/75 leading-relaxed max-w-xl">{body}</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href={coastalCta(campaign)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep hover:bg-gold/90 transition-colors"
          >
            {buttonLabel}
          </Link>
          <Link
            href={COASTAL_PHONE_HREF}
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Call {COASTAL_PHONE}
          </Link>
        </div>
      </div>
    </section>
  );
}
