export type NewsSource = {
  publication: string;
  url: string;
  publishedAt?: string;
};

export type NewsArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  correctionNote?: string;
  category: "Industry" | "Company News" | "Editorial";
  relatedFirm?: string;
  body: string[];
  pullQuote?: { quote: string; attribution: string };
  sources: NewsSource[];
};

export const NEWS: NewsArticle[] = [
  {
  "slug": "coastal-debt-resolve-bbb-torch-awards-sponsorship",
  "title": "Coastal Debt Resolve’s announced BBB Torch Awards sponsorship: what it does and does not establish",
  "metaTitle": "Coastal BBB Torch Awards Sponsorship: Evidence and Limits",
  "metaDescription": "Our corrected account of Coastal’s announced sponsorship, with the original source links and limits on what sponsorship establishes.",
  "excerpt": "The earlier article overstated what a sponsorship says about service quality, complaints and legal staffing. Those conclusions have been removed.",
  "publishedAt": "2026-04-29",
  "category": "Company News",
  "relatedFirm": "Coastal Debt Resolve",
  "body": [
    "Our April article linked an announcement attributed to Coastal Debt Resolve about sponsoring the BBB Southeast Florida and Caribbean 2026 Torch Awards. The original announcement links are retained below for readers to inspect. This update did not independently confirm the completed event, speaking appearances or a follow-up webinar.",
    "Sponsoring an event is not the same as winning an ethics award. The earlier article’s assertions that sponsorship demonstrated a clean complaint record, verified legal staffing or superior settlement performance were not supported by the cited announcement and have been removed.",
    "For information relevant to choosing a provider, consult the dated company review and linked BBB complaint records. Confirm the legal-service scope and full cost in a written engagement. This article does not establish typical results or the quality of an individual case."
  ],
  "sources": [
    {
      "publication": "PR Newswire",
      "url": "https://www.prnewswire.com/news-releases/coastal-debt-resolve-announces-sponsorship-of-better-business-bureau-serving-southeast-florida-and-the-caribbeans-2026-torch-awards-for-ethics-302755224.html",
      "publishedAt": "2026-04-28"
    },
    {
      "publication": "Yahoo Finance",
      "url": "https://finance.yahoo.com/economy/policy/articles/coastal-debt-resolve-announces-sponsorship-124400623.html",
      "publishedAt": "2026-04-28"
    }
  ],
  "correctionNote": "Corrected September 14, 2026: removed unsupported claims about sponsor vetting, complaint history, in-house lawyers and competitor comparisons. The original announcement could not be fully reverified in this update.",
  "updatedAt": "2026-09-14"
},
  {
  "slug": "ftc-first-mca-refunds-ram-capital",
  "title": "FTC merchant cash advance refunds: separating Yellowstone payments from the RAM Capital case",
  "metaTitle": "FTC MCA Refunds: Yellowstone and RAM Capital Corrections",
  "metaDescription": "Corrected coverage of FTC merchant cash advance refunds and the separate RAM Capital enforcement action, with direct FTC sources.",
  "excerpt": "FTC records show Yellowstone refunds began in 2022. The RAM Capital order is a separate part of the enforcement record.",
  "publishedAt": "2026-08-05",
  "category": "Industry",
  "body": [
    "The FTC’s Yellowstone Capital refund page states that payments began in June 2022, followed by a second round in August 2024. It now describes a further distribution to eligible businesses. This contradicts the earlier article’s claim that MCA refunds first began in March 2026.",
    "Separately, the FTC’s January 2022 RAM Capital announcement describes an order banning RAM Capital Funding and its owner from merchant cash advance and debt collection activities and requiring a $675,000 payment. That action should not be conflated with the Yellowstone refund program.",
    "Refund eligibility and payment instructions are case-specific. Use the FTC’s official refund page and named administrator rather than assuming that a business qualifies because it held an MCA. An enforcement case against one provider does not establish a settlement discount or legal remedy against every other provider."
  ],
  "sources": [
    {
      "publication": "FTC: Yellowstone Capital refunds",
      "url": "https://www.ftc.gov/enforcement/refunds/yellowstone-capital-refunds"
    },
    {
      "publication": "FTC: RAM Capital enforcement announcement",
      "url": "https://www.ftc.gov/news-events/news/press-releases/2022/01/merchant-cash-advance-providers-banned-industry-ordered-redress-small-businesses"
    }
  ],
  "correctionNote": "Corrected September 14, 2026: the earlier “first-ever” March 2026 claim and attribution of the refund figures to RAM Capital were not supported. We removed the unsupported industry-wide $1.6 billion total.",
  "updatedAt": "2026-09-14"
},
  {
  "slug": "ny-fair-business-practices-act-mca",
  "title": "New York’s FAIR Business Practices Act and MCA enforcement: what the official record establishes",
  "metaTitle": "New York FAIR Act and MCA Enforcement: Source Check",
  "metaDescription": "New York Attorney General sources explain the FAIR Act and an MCA-related enforcement case. They do not guarantee private claims or settlement discounts.",
  "excerpt": "The law expands the Attorney General’s enforcement tools. Its effect on a particular MCA dispute requires a case-specific legal assessment.",
  "publishedAt": "2026-08-05",
  "category": "Industry",
  "body": [
    "New York’s Attorney General announced the signing of the FAIR Business Practices Act in December 2025. The announcement describes broader tools for the Attorney General to address unfair and abusive practices affecting consumers and small businesses.",
    "In June 2026, the Attorney General announced a lawsuit against Rapid Ruling, an arbitration service used in MCA disputes, and cited the FAIR Act among the laws allegedly violated. A filed lawsuit states allegations; it is not itself a final judgment that every allegation is proven.",
    "These sources do not establish that every merchant has a new private claim, that every MCA contract is unenforceable or that a funder must accept a discount. An attorney should evaluate applicable law, contractual terms, procedural posture and any available remedy. Existing court or arbitration deadlines should not be ignored while that review takes place."
  ],
  "sources": [
    {
      "publication": "New York Attorney General: FAIR Act signing",
      "url": "https://ag.ny.gov/press-release/2025/attorney-general-james-senator-comrie-and-assemblymember-lasher-celebrate"
    },
    {
      "publication": "New York Attorney General: Rapid Ruling lawsuit",
      "url": "https://ag.ny.gov/press-release/2026/attorney-general-james-sues-sham-arbitration-service-created-help-predatory",
      "publishedAt": "2026-06-08"
    }
  ],
  "correctionNote": "Updated September 14, 2026: removed unsupported settlement-leverage predictions, a generalized private-remedy implication and an unverified count of vacated judgments.",
  "updatedAt": "2026-09-14"
},
  {
  "slug": "state-mca-disclosure-wave-texas-louisiana",
  "title": "Louisiana and Texas commercial financing rules: current official sources",
  "metaTitle": "Louisiana and Texas MCA Disclosure Rules: September 2026",
  "metaDescription": "Louisiana’s revenue-based financing disclosures and Texas’s commercial sales-based finance registration guidance, checked against official sources.",
  "excerpt": "Louisiana has a written-disclosure requirement; Texas now provides registration instructions. Applicability depends on the transaction and statutory exemptions.",
  "publishedAt": "2026-08-04",
  "category": "Industry",
  "body": [
    "Louisiana’s legislature identifies Act 198 of 2025 as effective August 1, 2025. The law requires specified written disclosures for covered revenue-based financing transactions at or before consummation. The statute, rather than a generic MCA label, determines which requirements apply.",
    "The Texas Office of Consumer Credit Commissioner now provides registration guidance for commercial sales-based finance businesses. Its page says applications through NMLS began September 1, 2026. Providers and brokers should consult the current regulator instructions and the applicable rules for deadlines and exemptions.",
    "A disclosure or registration requirement does not by itself establish that a particular debt is void, that all financing must state APR or that a merchant can stop payments. Ask qualified counsel to assess the contract, transaction date, parties and jurisdiction. This article does not provide a state-by-state legal opinion."
  ],
  "sources": [
    {
      "publication": "Louisiana Legislature: R.S. 9:3137.10",
      "url": "https://www.legis.la.gov/legis/LawPrint.aspx?d=1429292"
    },
    {
      "publication": "Louisiana Legislature: Act 198 legislative history",
      "url": "https://www.legis.la.gov/Legis/BillInfo.aspx?i=248484"
    },
    {
      "publication": "Texas OCCC: commercial sales-based finance",
      "url": "https://occc.texas.gov/industry/regulated-lenders/commercial-sales-based-finance/"
    }
  ],
  "correctionNote": "Updated September 14, 2026: replaced the outdated “rules due by September” framing and removed unsupported predictions about refinancing, APR requirements and settlement leverage.",
  "updatedAt": "2026-09-14"
},
  {
  "slug": "state-of-mca-settlement-2026-study-published",
  "title": "Our MCA provider BBB comparison: scope, dates and limitations",
  "metaTitle": "MCA Provider BBB Dataset: Scope and Limitations",
  "metaDescription": "How to use our selected-provider BBB comparison, distinguish grades from accreditation and review the limitations of point-in-time records.",
  "excerpt": "The comparison summarizes selected provider records. It is not an industry census, an outcome study or a single-date audit of every metric.",
  "publishedAt": "2026-08-04",
  "category": "Editorial",
  "body": [
    "Our comparison assembles BBB records for the providers and brands covered on this site. It is a selected editorial sample, not a census of the MCA industry. Related brands may refer to the same operating entity and should not be treated as independent provider choices.",
    "Accreditation, letter grades, customer-review averages and complaint counts measure different things. The linked notes identify check dates and source limitations. An omitted metric means it was not established in this dataset; it does not prove that BBB publishes no such information.",
    "The table changes when underlying records are corrected. It should not be used to infer a provider’s success rate or predict an individual result. Read the source profile and business responses, then compare the proposed services and total fees in writing."
  ],
  "sources": [
    {
      "publication": "MCA Settlement Reviews: provider comparison",
      "url": "https://www.mcasettlementreviews.com/state-of-mca-settlement-2026"
    }
  ],
  "correctionNote": "Updated September 14, 2026: clarified sample limits, mixed check dates and the distinction between a missing value and a nonexistent public record.",
  "updatedAt": "2026-09-14"
},
];

export function getNewsBySlug(slug: string) {
  return NEWS.find((n) => n.slug === slug);
}
