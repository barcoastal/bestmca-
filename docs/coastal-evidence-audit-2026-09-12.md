# Coastal evidence audit and page overlap — September 12, 2026

## Coastal corrections

Checked the company homepage, BBB profile and complaint record, and Trustpilot profile. Direct links and dated findings are published in the review's source notes.

Removed unsupported claims about in-house legal coverage, fixed fees, minimum balances and response times. Removed the displayed testimonial and case-study blocks because their quotations were not established as exact, independently verified records. Updated dated BBB and Trustpilot information, attributed complaints and included business-response context.

The existing category scores lack sufficient evidence for reassessment. Retained the historical arithmetic rather than inventing new scores; added explicit evidence-review notices and replaced prominent top-pick promotion. Withheld Coastal's Review rich-result markup while its score is under review. This may remove eligibility for editorial star snippets; unsupported ratings should not be promoted through structured data.

Remaining dependency: actual ownership, commercial relationship disclosure, reviewer identity, and underlying engagement/outcome evidence must come from the publisher. These facts have not been supplied. The other 13 reviews still need source-level audits (three were reviewed September 11; Coastal September 12).

## Query/page overlap

Read-only Search Console API data: query + page dimensions, final Web results, no device/country filter, up to 25,000 rows per window. Saved in gsc-overlap-2026-09-12.json. Windows: July 19–August 15 and August 16–September 9. Their different lengths mean aggregate totals should not be directly compared as rates. Privacy filtering means returned query rows are incomplete.

Before the decline, `eastern financial partners reviews` produced 15 clicks on the review and 4 on the legitimacy page. `corporate turnaround reviews` produced 7 clicks on the legitimacy page and none on the corresponding review. Both route types have demonstrated value.

Decision: no redirects or canonical changes now. Shared queries establish overlap, not causal cannibalization or a benefit from consolidation. A later decision should examine page-specific intent, longer history and simultaneous query/day visibility after the content corrections have been recrawled.

## Validation

Production build, TypeScript, generated HTML checks and browser review. Regression checks cover score/schema consistency for reviews without an evidence-review flag, withholding Review markup for Coastal, visible editorial dates, current Coastal source notes, removed unsupported testimonial headings, and preserved core canonical/noindex behavior.
