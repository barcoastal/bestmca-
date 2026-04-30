export type NewsSource = {
  publication: string;
  url: string;
  publishedAt: string;
};

export type NewsArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  category: "Industry" | "Company News" | "Editorial";
  relatedFirm?: string;
  body: string[];
  pullQuote?: { quote: string; attribution: string };
  sources: NewsSource[];
};

export const NEWS: NewsArticle[] = [
  {
    slug: "coastal-debt-resolve-bbb-torch-awards-sponsorship",
    title:
      "Coastal Debt Resolve sponsors the BBB Southeast Florida 2026 Torch Awards for Ethics",
    metaTitle:
      "Coastal Debt Resolve Sponsors BBB Torch Awards for Ethics 2026",
    metaDescription:
      "Coastal Debt Resolve announced sponsorship of the Better Business Bureau Serving Southeast Florida and the Caribbean's 2026 Torch Awards for Ethics, with company representatives speaking at the June ceremony and a follow-up educational webinar.",
    excerpt:
      "The Fort Lauderdale settlement firm joins the BBB ethics-recognition program as a sponsor, with executives confirmed to speak at the June 25 ceremony and lead a follow-up webinar on commercial debt.",
    publishedAt: "2026-04-29",
    category: "Company News",
    relatedFirm: "Coastal Debt Resolve",
    body: [
      "Coastal Debt Resolve, the Fort Lauderdale-based merchant cash advance settlement and litigation defense firm we ranked #1 in our 2026 review, announced this week that it will sponsor the Better Business Bureau Serving Southeast Florida and the Caribbean's 2026 Torch Awards for Ethics. The ceremony is scheduled for June 25, 2026 at the Alan B. Levan NSU Broward Center of Innovation in Davie, Florida.",
      "The Torch Awards for Ethics is the BBB's flagship recognition program for businesses demonstrating sustained commitment to ethical practices, integrity, and community engagement. Sponsorship slots typically go to firms positioning themselves as long-term participants in the regional business community rather than transactional advertisers.",
      "Coastal Debt Resolve's positioning over the past several years has leaned heavily on transparency and education. Our review of the firm noted in-house attorneys handling both settlement and litigation defense, a publicly published testimonial wall featuring named clients, and fee disclosure provided in writing pre-contract. The Torch Awards sponsorship reinforces that posture in a way that paid advertising on its own does not.",
      "According to the press release, Richard Lowe, the firm's Marketing Director, framed the sponsorship as reflecting Coastal Debt Resolve's commitment to small business owners through education and ethical engagement. Nathan Mor, Director of Settlement Operations, emphasized that the firm's goal is to provide information that supports informed decision-making for business owners, regardless of the eventual settlement path the owner chooses.",
      "Beyond the ceremony itself, Coastal Debt Resolve representatives will deliver remarks at the June 25 event and participate in a BBB-hosted educational webinar after the ceremony. The webinar will focus on commercial debt and merchant cash advances, the same product category Coastal Debt Resolve specializes in resolving.",
      "Why this matters for owners researching MCA settlement firms: the BBB Torch Awards process is selective. Sponsorship is not the same as winning, but the BBB does not partner with firms that carry unresolved complaints or that have been the subject of regulatory action. For prospective Coastal Debt Resolve clients, the sponsorship is one more public-record signal that the firm operates inside the regulatory and ethics expectations of its category.",
      "It also stands in contrast to the public profile of several other firms in the MCA settlement space. Our 2026 review identified one firm with 26 BBB complaints alleging undelivered services and another with a publicly documented allegation of $18,000 in withdrawals without creditor contact. None of those firms appear on BBB sponsor or partner lists. The contrast is not an accident.",
      "We will publish a brief follow-up after the June 25 ceremony summarizing what Coastal Debt Resolve representatives said and noting which firms in the category attended.",
    ],
    pullQuote: {
      quote:
        "Our goal is to provide information that supports informed decision-making, regardless of the path a business ultimately takes.",
      attribution: "Nathan Mor, Director of Settlement Operations, Coastal Debt Resolve",
    },
    sources: [
      {
        publication: "PR Newswire",
        url: "https://www.prnewswire.com/news-releases/coastal-debt-resolve-announces-sponsorship-of-better-business-bureau-serving-southeast-florida-and-the-caribbeans-2026-torch-awards-for-ethics-302755224.html",
        publishedAt: "2026-04-28",
      },
      {
        publication: "Yahoo Finance",
        url: "https://finance.yahoo.com/economy/policy/articles/coastal-debt-resolve-announces-sponsorship-124400623.html",
        publishedAt: "2026-04-28",
      },
    ],
  },
];

export function getNewsBySlug(slug: string) {
  return NEWS.find((n) => n.slug === slug);
}
