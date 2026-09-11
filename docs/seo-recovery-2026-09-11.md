# SEO recovery changes — September 11, 2026

## Baseline and checks

Fresh Search Console snapshot: September 2–8, 2026: 1 click, 250 impressions, average position 55.6. Historical August 9–15: 59 clicks, 3,472 impressions, position 17.4. No recovery established.

Google Search Console UI checked on September 11 for sc-domain:mcasettlementreviews.com:
- Manual actions: No issues detected.
- Security issues: No issues detected.

These reports do not rule out an algorithmic reassessment.

## Changes

- Calculate all 17 overall scores from the published weights; derive ranking order and shared ranks from rounded scores. Underlying category assessments are unchanged and remain editorial judgments requiring further evidence.
- Remove contradictory BBB exclusivity claims; Eastern BBB status updated from C+ to Not Rated using its current profile. Preserve dates on older records rather than claiming a universal recheck.
- Rewrite Eastern, Second Wind and Rise reviews with linked, dated public sources, company-claim attribution and limits on verification. Remove unsupported direct quotations, minimum balances and standard timelines. Include Eastern complaint dates, statuses and the business response without presenting allegations as findings.
- Use explicit per-review editorial dates for visible labels, Review JSON-LD and sitemap entries. Omit unknown sitemap modification dates instead of replacing them on every build.
- Preserve core URLs, comparison/glossary noindex directives and homepage canonical strategy. Category ties are no longer counted as Coastal wins.
- Remove unsupported homepage contract-reading claim and fix the ranking-page firm count.

## Verification

Production build, TypeScript and git diff checks. Run `node validation/check-recovery.cjs` after building to verify all review JSON-LD scores, dates, canonicals, tied ranking behavior, source sections and existing indexing directives. Browser inspection of Eastern review desktop layout completed.

## Still requires factual input

Publisher/legal ownership, common ownership or commercial relationships with featured firms, referral compensation, actual authors/reviewers and evidence for claimed original research. Asked owner in this session; no response received yet. Existing ownership/compensation disclosures have not been rewritten as if verified. This is a material unfinished part of the recovery effort.

The remaining 14 reviews need the same source-level audit. Correct score arithmetic does not validate category scores or remaining outcome, fee and testimonial claims.

## Monitoring

Existing weekly GSC snapshot script retained. Compare complete non-overlapping seven-day periods, and a full 28-day post-publication period with prior periods; separate page/query changes from aggregate query-mix effects. Track enquiries only with a verified conversion baseline. No recovery timeframe or ranking guarantee.
