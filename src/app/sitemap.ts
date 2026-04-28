import type { MetadataRoute } from "next";
import { REVIEWS } from "@/data/reviews";
import { GUIDES } from "@/data/guides";
import { INDUSTRIES } from "@/data/industries";

const SITE = "https://mcasettlementreviews.com";

const COMPARABLE = [
  "second-wind-consultants",
  "reset-finance",
  "corporate-turnaround",
  "spergel",
  "corporate-rescue",
  "eastern-financial-partners",
  "ascend-consulting",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, priority: 1 },
    {
      url: `${SITE}/best-mca-settlement-companies-2026`,
      lastModified: now,
      priority: 0.95,
    },
    { url: `${SITE}/methodology`, lastModified: now, priority: 0.6 },
    { url: `${SITE}/about`, lastModified: now, priority: 0.5 },
    {
      url: `${SITE}/best-for-trucking-companies`,
      lastModified: now,
      priority: 0.7,
    },
    {
      url: `${SITE}/best-for-restaurants-and-hospitality`,
      lastModified: now,
      priority: 0.7,
    },
  ];

  const reviews: MetadataRoute.Sitemap = REVIEWS.map((r) => ({
    url: `${SITE}/reviews/${r.slug}`,
    lastModified: now,
    priority: r.isCoastal ? 0.95 : 0.85,
  }));

  const compares: MetadataRoute.Sitemap = COMPARABLE.map((slug) => ({
    url: `${SITE}/compare/coastal-debt-vs-${slug}`,
    lastModified: now,
    priority: 0.8,
  }));

  const guides: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: `${SITE}/guides/${g.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  const industries: MetadataRoute.Sitemap = INDUSTRIES.map((i) => ({
    url: `${SITE}/${i.slug}`,
    lastModified: now,
    priority: 0.75,
  }));

  return [...staticPages, ...reviews, ...compares, ...guides, ...industries];
}
