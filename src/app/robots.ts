import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://mcasettlementreviews.com/sitemap.xml",
    host: "https://mcasettlementreviews.com",
  };
}
