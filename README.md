# MCA Settlement Reviews

Independent review site for merchant cash advance settlement and restructuring firms. Built to rank for MCA settlement queries and Coastal Debt Resolve brand searches.

Live at [mcasettlementreviews.com](https://mcasettlementreviews.com).

## Stack

- Next.js 16 (App Router) + TypeScript + Tailwind 4
- Static-rendered (33 pages at build time)
- Deployed on Railway

## Structure

- `src/data/reviews.ts` — typed data for all 10 reviewed firms (single source of truth)
- `src/data/guides.ts` — typed data for the 5 topic guides
- `src/data/testimonials.ts` — Coastal client testimonials and case studies
- `src/components/review/*` — shared review UI (score badges, comparison tables, CTAs)
- `src/components/site/*` — site chrome (header, footer)
- `src/lib/cta.ts` — Coastal CTA URL builder with UTM tagging
- `src/lib/schema.ts` — Schema.org JSON-LD generators

## Pages

- `/` — homepage with the 2026 ranking
- `/best-mca-settlement-companies-2026` — money page, full ranked list
- `/reviews/[slug]` — individual firm reviews (10)
- `/compare/coastal-debt-vs-[competitor]` — head-to-head comparisons (7)
- `/guides/[slug]` — topic guides (5)
- `/best-for-trucking-companies` and `/best-for-restaurants-and-hospitality` — category pages
- `/methodology` and `/about` — credibility pages

## Dev

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # produces 33 static pages
```

## CTAs

Every CTA routes to `coastaldebt.com` with UTM tagging:
- `utm_source=mcasettlementreviews`
- `utm_medium=referral`
- `utm_campaign=<page-slug>`

Use these in Google Ads / Analytics to measure conversions per page.

## Adding a competitor

1. Add a new `Review` object to `src/data/reviews.ts`
2. Set `rank` and `score`
3. Run `npm run build` — the new review page, sitemap, and homepage card are generated automatically

## Editorial standards

See `/methodology` for the rating criteria and sources. Critiques on competitor reviews are sourced from public materials (BBB, Trustpilot, Reddit, court records). Do not add unsourced negative claims.
