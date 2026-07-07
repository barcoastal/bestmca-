import type { Review } from "@/data/reviews";

const SITE = "https://www.mcasettlementreviews.com";

// Build-time date so freshness signals reflect the latest deploy rather than a
// value frozen in source. Regenerated on every static build.
const BUILD_DATE = new Date().toISOString().split("T")[0];

// Sitewide publisher entity. Strengthens E-E-A-T and entity signals.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: "MCA Settlement Reviews",
    url: SITE,
    logo: `${SITE}/icon`,
    description:
      "Independent reviews and rankings of merchant cash advance (MCA) settlement and debt-relief companies. We do not accept compensation, referral fees, or sponsorships from any firm we cover.",
    knowsAbout: [
      "Merchant cash advance settlement",
      "MCA debt relief",
      "Business debt restructuring",
      "UCC lien release",
      "MCA litigation defense",
    ],
    publishingPrinciples: `${SITE}/methodology`,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    name: "MCA Settlement Reviews",
    url: SITE,
    publisher: { "@id": `${SITE}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE}/best-mca-settlement-companies-2026?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  };
}

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
      name: "MCA Settlement Reviews Editorial Team",
      url: `${SITE}/about`,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.score,
      bestRating: 5,
      worstRating: 1,
    },
    publisher: { "@id": `${SITE}/#organization` },
    reviewBody: review.verdict,
    name: `${review.name} Review`,
    datePublished: "2026-04-28",
    dateModified: BUILD_DATE,
  };
}

// FAQPage markup. Rich results for FAQ are now limited to authoritative sites,
// but valid FAQ structured data still reinforces topical relevance and the
// question phrasings we want to rank for.
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
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
