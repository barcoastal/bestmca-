# Search recovery work — October 7, 2026

## Baseline and diagnosis

Read-only Search Console Web Search comparison: July 18–August 14 had 152 clicks, 11,100 impressions and 14.2 average position; September 8–October 5 had 3 clicks, 418 impressions and 45.7 average position. Impressions fell abruptly from 566 on August 17 to 44 on August 18. The August spam update and the earlier malformed-head deployment overlap the decline; neither is a proven sole cause. Six priority URLs were still indexed, crawlable and assigned their expected canonicals in the October 7 URL Inspection pull. Manual Actions and Security Issues both showed no issues in the Search Console UI. These findings do not rule out an algorithmic reassessment.

Raw read-only diagnostic: `/private/tmp/mca-traffic-diagnosis.json`. The existing weekly Search Console snapshots remain in `docs/gsc-snapshots/`.

## Local changes

- Eastern Financial Partners and Second Wind Consultants reviews now analyze dated company disclosures about service scope, fee structure and legal or restructuring arrangements. Six new findings link directly to the relevant company pages. Marketing examples are described as examples, not typical outcomes or case-specific quotes.
- Both reviews now include provider-specific questions for a written proposal. Their editorial modification dates advance to October 7; earlier BBB and customer-review check dates remain unchanged.
- Competitor review heroes lead to their sources and, where available, the provider's own site. The redundant Coastal callout and sidebar promotion were removed; one labeled Coastal comparison option remains after the review content. Coastal's own review and its consultation CTA are unchanged.
- No URLs, canonical tags, robots rules or indexing directives changed.

Company pages checked October 7: https://www.easternfinancialpartners.com/how-it-works, https://secondwindconsultants.com/faq/, and https://secondwindconsultants.com/credit-rehabilitation-restructuring/. These are company statements, not audited client results or legal opinions.

## Verification and limits

Next.js production build, TypeScript, the three existing validation scripts and `git diff --check` passed. Rendered static HTML for the priority reviews has one canonical, no `noindex`, the new dated findings and the intended source links. Desktop preview confirmed the evidence-first hero and readable review layout.

This is a content and usability improvement, not proof of a ranking fix. Removing earlier Coastal placements may affect consultation clicks; compare organic engagement and qualified inquiries after publication. The first full 28-day period after the September 18 release ends October 16, with Search Console reporting lag afterward. This October 7 work needs its own later comparison window.

The changes are local and have not been published.
