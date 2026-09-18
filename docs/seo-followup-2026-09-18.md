# SEO follow-up — September 18, 2026

## Scope and implementation

Coastal remains first by explicit editorial choice. Provider ordering, genuine dated public ratings, review URLs and existing indexability directives are preserved.

- Mobile: changed the two self-hosted Next fonts from `swap` to `optional`, retaining preloads and metric-adjusted fallbacks. On slow initial loads, readable fallback text remains instead of a late font substitution. Shortened the homepage introduction while preserving the provider count, evidence scope and Coastal disclosure. This targets the text-rendering delay observed in two prior mobile reports; only repeat live tests can establish the resulting lab metrics.
- Evidence: reviewed all eight funder profiles and the 19-guide collection. Rewrote the remaining 15 guides, corrected associated metadata, added primary references and jurisdiction limits, and removed unsupported discount/timing/representation assertions. Corrected 24 glossary definitions and two financing hubs so the same claims do not remain in linked reference pages. Existing glossary noindex directives remain.
- Funder records: replaced generalized allegations and secondary-law-firm descriptions with identified decisions or official/company records. Correctly distinguished Fora's ISO/broker case from merchant default litigation; described the split CFG business/guarantor outcome; scoped the EBF procedural denial and Pearl decision. Reliant's reviewed 2021 order concerns annual-report filing and rescission of a previous revocation. Forward's statements are explicitly attributed to the company. Expansion's official listing was available through search, but the full PDF returned 403, so detailed findings and current restrictions are not asserted.
- Removed universal instructions to move operating receipts after a bank restraint, self-file a UCC termination without authority, expect overnight judgment, or assume negotiation always beats bankruptcy.
- Guide and glossary CTAs describe Coastal as the featured first provider and request written service/fee terms, replacing an unsupported universal written-strategy promise.

## Source scope

Primary New York court decisions: EBF/Emek (2025_50535), Fora/4 Pillar (2025_01422), CFG/Valentis (2022_50875), Kalamata/Aaction (2026_50375), Pearl/Champion Auto (2018_01645), Davis/Richmond (2021_03111). Each is linked on its relevant page. Court rulings are described by procedural scope, not extrapolated into industry success statistics.

Legal references include New York CPLR 3218 and 5222, UCC 9-406, 9-509, 9-513 and 9-515; New York Courts' response guidance; and U.S. Courts Chapter 11 guidance. These are not a national legal opinion. Existing independently dated BBB/Trustpilot records were not represented as freshly rechecked by this pass.

Font reference: https://web.dev/articles/optimize-webfont-loading and installed Next.js 16.2.4 font documentation. This is a rendering change, not a claim of ranking improvement.

## Attribution audit

Read-only downstream attribution reconciliation was completed separately. Business funnel counts and CRM findings are retained in the private local report, not published in this public repository. No test leads were submitted or historical CRM records modified.

## Search Console monitoring

The existing Monday 09:00 local launch agent is loaded; last exit code was 0. The weekly script now includes page-level click and impression changes alongside tracked queries. Missing rows are not treated as zero. Repeat runs replace the same date's report rather than duplicate it.

Fresh final-data pull: September 9–15 versus September 2–8 remains 1 versus 1 click, 151 versus 250 impressions. This cannot measure September 18 work. The September 18 release has its own first full week, September 19–25, and first 28 days, September 19–October 16; assess after reporting lag. Those windows are separate from the earlier September 14 release windows.

The schedule runs on this Mac, so execution depends on its availability. No future result or autonomous human review is promised. Qualified inquiries come from CRM reconciliation, not GSC.

## Validation and publication

Production build and TypeScript passed. All three validation scripts passed: review/evidence invariants; 19 unique sourced guides and FAQ consistency; eight funder profiles; 24 glossary routes with preserved noindex; unique sitemap URLs; optional font CSS. Mobile browser verification at 390px confirmed readable typography, no horizontal overflow, menu opening, and navigation to a guide. Live deployment and repeat PageSpeed results follow below.
