const COASTAL_BASE = "https://www.coastaldebt.com/";

export function coastalCta(campaign: string, params?: Record<string, string>) {
  const url = new URL(COASTAL_BASE);
  url.searchParams.set("utm_source", "mcasettlementreviews");
  url.searchParams.set("utm_medium", "referral");
  url.searchParams.set("utm_campaign", campaign);
  if (params) {
    for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  }
  return url.toString();
}

export const COASTAL_PHONE = "(888) 305-6500";
export const COASTAL_PHONE_HREF = "tel:+18883056500";
