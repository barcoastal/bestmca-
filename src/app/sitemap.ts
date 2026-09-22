import type { MetadataRoute } from "next";
import { REVIEWS, COMPETITORS } from "@/data/reviews";
import { FUNDERS } from "@/data/funders";
import { GUIDES } from "@/data/guides";
import { INDUSTRIES } from "@/data/industries";
import { NEWS } from "@/data/news";

const SITE = "https://www.mcasettlementreviews.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: "2026-09-18", priority: 1 },
    // /best-mca-settlement-companies-2026 canonicals to the homepage and is
    // intentionally excluded here to avoid a mixed indexing signal.
    {
      url: `${SITE}/mca-settlement-companies-bbb-ratings`,
      lastModified: "2026-09-22",
      priority: 0.9,
    },
    {
      url: `${SITE}/state-of-mca-settlement-2026`,
      priority: 0.85,
    },
    { url: `${SITE}/mca-debt-relief`, priority: 0.9 },
    { url: `${SITE}/mca-debt-restructuring`, lastModified: "2026-09-18", priority: 0.85 },
    { url: `${SITE}/mca-consolidation-loans`, lastModified: "2026-09-18", priority: 0.85 },
    {
      url: `${SITE}/ucc-9-406-merchant-cash-advance`,
      lastModified: "2026-09-18",
      priority: 0.8,
    },
    { url: `${SITE}/methodology`, lastModified: "2026-09-22", priority: 0.6 },
    { url: `${SITE}/about`, lastModified: "2026-09-22", priority: 0.5 },
    {
      url: `${SITE}/best-for-trucking-companies`,
      lastModified: "2026-09-18",
      priority: 0.7,
    },
    {
      url: `${SITE}/best-for-restaurants-and-hospitality`,
      lastModified: "2026-09-18",
      priority: 0.7,
    },
  ];

  const reviews: MetadataRoute.Sitemap = REVIEWS.map((r) => ({
    url: `${SITE}/reviews/${r.slug}`,
    lastModified: r.updatedAt,
    priority: r.isCoastal ? 0.95 : 0.85,
  }));

  const legit: MetadataRoute.Sitemap = COMPETITORS.map((c) => ({
    url: `${SITE}/legit/${c.slug}`,
    lastModified: "2026-09-22",
    priority: 0.75,
  }));

  const guides: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: `${SITE}/guides/${g.slug}`,
    lastModified: g.updatedAt,
    priority: 0.7,
  }));

  const industries: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${SITE}/${i.slug}`,
    lastModified: "2026-09-18",
    priority: 0.75,
  }));

  const funders: MetadataRoute.Sitemap = [
    { url: `${SITE}/funders`, lastModified: "2026-09-18", priority: 0.8 },
    ...FUNDERS.map((f) => ({
      url: `${SITE}/funders/${f.slug}`,
      lastModified: "2026-09-18",
      priority: 0.75,
    })),
  ];

  const news: MetadataRoute.Sitemap = [
    {
      url: `${SITE}/news`,
      priority: 0.7,
    },
    ...NEWS.map((n) => ({
      url: `${SITE}/news/${n.slug}`,
      lastModified: new Date(n.updatedAt || n.publishedAt),
      priority: 0.75,
    })),
  ];

  return [
    ...staticPages,
    ...reviews,
    ...legit,
    ...guides,
    ...industries,
    ...funders,
    ...news,
  ];
}
