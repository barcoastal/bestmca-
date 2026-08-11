// CTAs route through the internal /go redirect, whose destination is
// configurable at runtime from /admin (see src/lib/settings.ts). UTMs are
// appended by the redirect handler.
export function coastalCta(campaign: string, params?: Record<string, string>) {
  const qs = new URLSearchParams({ c: campaign });
  if (params) {
    for (const [k, v] of Object.entries(params)) qs.set(k, v);
  }
  return `/go?${qs.toString()}`;
}

export const COASTAL_PHONE = "(888) 305-6500";
export const COASTAL_PHONE_HREF = "tel:+18883056500";
