# Search recovery — October 11, 2026

## Baseline

Search Console final Web Search data retrieved October 10: July 18–August 14 had 152 clicks and 11,100 impressions; September 10–October 7 had 3 clicks and 428 impressions. The first abrupt decline was August 18, coincident with Google's August spam update and following a malformed-head deployment. Neither is established as the sole cause. The head defect was fixed August 24. All six priority URL inspections passed on October 10 with expected canonicals. Eastern and Second Wind's reported crawls predated their October 7 research updates.

## Changes

- Added `/reviews`, an alphabetical directory of all 17 providers, with a self-canonical, CollectionPage/ItemList markup and sitemap entry. Header, footer, contextual review links and review breadcrumbs point to it.
- Replaced unsupported best/rank/numbered placement presentation on the homepage and comparison page with comparison language. Coastal remains a clearly labeled editorial feature. The homepage ItemList is unordered; directory positions represent alphabetical order.
- Clarified Coastal consultation buttons and identified whose Trustpilot record appears below the hero. Replaced the duplicated 17-card homepage review section with a directory link; shortened repeated notices while retaining methodology and individual review limitations.
- Updated Corporate Rescue's shared BBB record from the dated Not Rated snapshot to A-, not accredited, checked October 11. Added the five-complaint counts and linked company responses. Its review, legitimacy page, homepage, BBB comparison and study use the shared records.
- Added Corporate Rescue research on its negotiation milestone, case-specific fee/payment/cancellation disclosures and separate legal plans. The August BBB response is attributed as the company's account of a disputed case, not a verified standard contract or a legal finding. Added provider-specific proposal questions.
- Rechecked Rise's company pages and added its advertised timing range with a clear distinction between company estimates and audited completion data. Retained earlier BBB/source dates instead of claiming a universal recheck.
- Contributor remains anonymous, as explicitly requested by the owner on October 11. No qualifications or separate reviewer were invented.

## Sources

Checked October 11:
- https://www.corporaterescue.com/
- https://www.corporaterescue.com/terms
- https://www.bbb.org/us/fl/boca-raton/profile/financial-consultants/corporate-rescue-advisors-llc-0633-92053458
- https://www.bbb.org/us/fl/boca-raton/profile/financial-consultants/corporate-rescue-advisors-llc-0633-92053458/complaints
- https://risealliance.com/about/
- https://risealliance.com/services/business-debt-resolution/
- https://risealliance.com/services/business-debt-resolution/proactive-mca-resolution/

## Content overlap decision

Inspected shared review/legitimacy templates and the query-page evidence in `gsc-overlap-2026-09-12.json`, with the current October 10 page-level diagnostic. In July 19–August 15, Eastern's review query produced 15 clicks to its review and four to its legitimacy page. Corporate Turnaround's review query produced seven clicks to its legitimacy page and zero to its review page. Those existing legitimacy URLs therefore had demonstrated search value. Sparse post-drop query data does not establish which URL should absorb the other.

Preserved all existing URL and canonical directives, including the comparison page's homepage canonical and the earlier noindex treatment of glossary/comparison templates. No bulk deletion or redirects. The new directory serves navigation rather than duplicating the full comparison or review content.

## Validation

Production build and TypeScript passed. All three existing evidence/recovery validation scripts passed. Rendered checks confirmed alphabetical directory ordering, all 17 destinations, self-canonical/indexability, sitemap inclusion, updated source sections and removal of numbered placement language from the affected landing pages. Desktop directory preview and 390px directory/homepage previews were readable with no horizontal document overflow.

## Monitoring

Use the existing weekly Search Console snapshots; no new automation was created. The first complete seven-day window after this release is October 12–18, reviewed after final data is available. The first 28-day window is October 12–November 8. Compare the same pages and queries, with clicks and impressions primary; aggregate position changes alone are insufficient. Record indexing requests as requests, not evidence that Google has recrawled or rankings have recovered.
