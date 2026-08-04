"use client";

import { useEffect, useState } from "react";
import { coastalCta, COASTAL_PHONE, COASTAL_PHONE_HREF } from "@/lib/cta";
import { TrackedLink } from "./TrackedLink";

// Site-wide bottom conversion bar. Appears after meaningful scroll,
// dismissible per session, tracked via the cta beacon (campaign sticky-bar).
export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setDismissed(sessionStorage.getItem("sticky-cta-dismissed") === "1");
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 sticky-cta-enter">
      <div className="mx-auto max-w-6xl px-3 pb-3">
        <div className="flex items-center justify-between gap-3 rounded-2xl bg-navy-deep/95 backdrop-blur border border-white/10 pl-5 pr-3 py-3 shadow-[0_-4px_24px_rgba(15,23,42,0.25)]">
          <p className="text-sm text-white/90 min-w-0 truncate">
            <span className="font-display font-semibold text-gold">
              Free MCA review
            </span>{" "}
            <span className="hidden sm:inline">
              from our #1 rated firm, written strategy before any contract.
            </span>
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={COASTAL_PHONE_HREF}
              className="hidden md:inline-flex items-center rounded-full border border-white/25 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Call {COASTAL_PHONE}
            </a>
            <TrackedLink
              href={coastalCta("sticky-bar")}
              campaign="sticky-bar"
              className="inline-flex items-center rounded-full bg-gold px-4 py-2 text-xs font-semibold text-navy-deep hover:bg-gold/90 transition-colors"
            >
              Start now →
            </TrackedLink>
            <button
              aria-label="Dismiss"
              onClick={() => {
                sessionStorage.setItem("sticky-cta-dismissed", "1");
                setDismissed(true);
              }}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors text-lg leading-none"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
