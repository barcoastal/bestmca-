# Evidence, mobile navigation and performance release — September 18, 2026

## Placement and review evidence

The owner requested that Coastal remain first and authorized using public evidence with editorial placement disclosed. Coastal remains first in the homepage list, full comparison, structured ItemList and featured provider selections. The remaining display sequence is retained for continuity. No claim of independently established superiority supports that order.

Retired unsupported numerical editorial scores and category winners from public review, comparison, legitimacy, industry, homepage and machine-readable summary surfaces. Historical inputs remain in source for the audit trail. Genuine dated third-party ratings (BBB and Trustpilot) remain separately identified; these are not the retired editorial scores. All 17 provider reviews retain source notes. Review and AggregateRating rich-result markup remains withheld.

Rewrote methodology to explain editorial placement, source types, verification gaps and the retirement of numerical scores. Replaced the interactive score table with server-rendered company cards and native expandable source/fee details. This avoids client JavaScript for the comparison interaction.

Review modification dates reflect today's presentation changes. The September 11–14 public-record check dates remain unchanged. This pass did not newly verify every provider record or invent fees, client outcomes, attorney qualifications, authors or review experiences.

## Content corrections

- Replaced unsupported quantitative results, guaranteed confidentiality, credit and collateral claims across nine industry pages with differentiated planning considerations and contract questions. Coastal remains the first company listed. New York statutory examples have explicit jurisdiction and scope limits.
- Corrected unsupported enforcement/settlement predictions across funder pages. Replaced the secondary Champion Auto reference with the actual 2018 New York appellate decision and narrowed the description to its particular agreement and record.
- Rewrote the personal-credit guide to distinguish account reporting, guarantee liability, court records and credit reports. Experian's civil-judgment reporting policy does not erase legal obligations; settlement does not guarantee a clean report.
- Corrected the attorney-versus-settlement guide's unsupported in-house-lawyer rationale for Coastal's position; clarified the need to verify service scope and jurisdiction. Made targeted corrections in default and lawsuit guides.
- Reworked the UCC 9-406 overview and FAQ around New York's actual statutory conditions and exceptions. Removed claims that letters routinely lead to discounts or must always be followed.
- Removed unsupported specialized-experience promises from trucking/restaurant CTAs and in-house-attorney promises from funder CTAs.

This is not a comprehensive professional legal review. Further source-level work remains in the broader guide collection and the full factual litigation history of each funder. No complete court, client-contract, outcome, or licensing audit was performed.

Primary references checked:

- https://www.nysenate.gov/legislation/laws/CVP/3218
- https://www.nysenate.gov/legislation/laws/UCC/9-406
- https://www.nysenate.gov/legislation/laws/UCC/9-609
- https://www.nycourts.gov/Reporter/3dseries/2018/2018_01645.htm
- https://www.experian.com/blogs/ask-experian/judgments-no-longer-included-on-credit-report/
- https://www.consumerfinance.gov/ask-cfpb/how-long-does-information-stay-on-my-credit-report-en-323/

## Mobile and performance

Found the original navigation hidden on mobile without a replacement. Added a native, keyboard-accessible disclosure menu and kept desktop navigation at widths where it fits. Browser verification at 390 CSS pixels found no horizontal overflow; opening the menu and navigating to Methodology worked. Comparison source details opened correctly on mobile.

PageSpeed's direct API returned a quota error, but the web interface completed a baseline mobile run on the previously deployed homepage:

- Performance 94; accessibility 96; best practices 100; SEO 100.
- FCP 1.7s; LCP 2.9s; TBT 90ms; CLS 0; Speed Index 1.8s.
- No real-user field data. A simulated Lighthouse result is not a field Core Web Vitals assessment and is not a ranking score.
- Report: https://pagespeed.web.dev/analysis/https-www-mcasettlementreviews-com/1pk10nk0o4?form_factor=mobile

The report identified contrast failures in subtle text on paper backgrounds and approximately 47 KiB of image-delivery savings. Darkened the shared subtle-text color and changed provider logos to Next Image with explicit dimensions and responsive optimized raster output. Post-publication results are recorded below when available; no improvement is claimed from the baseline alone.

## Conversion tracking

Read-only inspection found the configured Trakkit script on `trackit.coastaldebt-tools.com`, existing CTA beacons, and the `/go` redirect. Local redirect tests passed for (a) a synthetic Trakkit cookie forwarded as both tkclid and click_id and (b) an msr visitor ID fallback. Both returned 302 with the expected referral UTMs. Redirect destinations were inspected without following them or submitting a lead.

These checks verify outbound attribution plumbing, not unique conversions, qualified inquiries, or closed business. Those require downstream lead records joined on the click ID. Beacon and redirect logs must not be added together as two conversions for one click. No real lead or CRM conversion event was fabricated.

## Monitoring

The previously repaired weekly Search Console job remains unchanged. September 15–21 is not complete yet; the first full post-publication week must be assessed after reporting lag. The 28-day period ends October 12. Today's findings do not establish ranking recovery.

## Validation

Production build and TypeScript passed during implementation. `validation/check-evidence.cjs` verifies Coastal first, all 17 dated review records, withheld numeric rating schema, preserved canonicals/indexability, all 16 comparison routes, and the nine revised industry routes. Existing recovery checks pass with the rank assertion updated to the disclosed editorial ordering.

Publication verification follows below.

## Publication verification

Published commit `439231b` through the existing GitHub/Railway integration. Deployment `42cdf6eb-938c-4d55-bd3d-562639c9cb04` reported success. Read-only GET checks passed on 104 production routes (87 sitemap pages, the full comparison and 16 head-to-head pages). Checks confirmed Coastal first in ItemList, the new placement/evidence policy, withheld numerical ratings, source notes, mobile navigation, optimized image URLs, canonicals and preserved indexing directives. Results: `evidence-production-verification-2026-09-18.json`.

Browser inspection confirmed the live homepage displays Coastal’s “#1 editorial placement” label and the new menu. The temporary local validation server was stopped.

First post-deployment mobile lab run: performance 86, accessibility 100, best practices 100, SEO 100; FCP 2.0s, LCP 3.5s, TBT 10ms, CLS 0, Speed Index 4.4s. The LCP element was the hero paragraph, with a reported 2,370ms render delay. Image-delivery and contrast warnings from the baseline were absent. This run does not establish a loading-speed improvement. Report: https://pagespeed.web.dev/analysis/https-www-mcasettlementreviews-com/6s48b37oiu?form_factor=mobile

A repeat without code changes scored performance 84, accessibility 100, best practices 100, SEO 100; FCP 2.1s, LCP 3.8s, TBT 110ms, CLS 0, Speed Index 4.5s. Report: https://pagespeed.web.dev/analysis/https-www-mcasettlementreviews-com/469ew13odg?form_factor=mobile

The two post-release runs support the accessibility fix but indicate slower simulated mobile rendering than the single baseline. Loading performance remains an open issue; neither ranking improvement nor a Core Web Vitals pass is established. Further work should isolate hero text/font rendering and request timing using comparable traces before making another performance change.
