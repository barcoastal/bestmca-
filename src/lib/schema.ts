import type { Review } from "@/data/reviews";

const SITE = "https://www.mcasettlementreviews.com";

export function reviewSchema(review: Review) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: review.name,
      url: `https://${review.websiteLabel}`,
    },
    author: {
      "@type": "Organization",
      name: "MCA Settlement Reviews",
      url: SITE,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.score,
      bestRating: 5,
      worstRating: 1,
    },
    publisher: {
      "@type": "Organization",
      name: "MCA Settlement Reviews",
      url: SITE,
    },
    reviewBody: review.verdict,
    name: `${review.name} Review`,
    datePublished: "2026-04-28",
  };
}

export function aggregateRatingSchema(review: Review) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: review.name,
    url: `https://${review.websiteLabel}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: review.score,
      bestRating: 5,
      worstRating: 1,
      reviewCount: 1,
      ratingCount: 1,
    },
  };
}

export function jsonLd(data: object) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}
