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
  {
    slug: "ftc-first-mca-refunds-ram-capital",
    title:
      "FTC sends its first-ever MCA refunds: $3.3 million to nearly 5,000 small businesses",
    metaTitle: "FTC Issues First MCA Refunds: $3.3M to Small Businesses (2026)",
    metaDescription:
      "In a first for commercial borrowers, the FTC distributed $3.3 million to 4,981 small businesses harmed in a merchant cash advance enforcement action, alongside an industry ban and vacated judgments in the RAM Capital Funding matter.",
    excerpt:
      "For the first time, the FTC has directed refund money to commercial borrowers in an MCA enforcement action, and the underlying case ended with an industry ban, vacated judgments, and released liens.",
    publishedAt: "2026-08-05",
    category: "Industry",
    body: [
      "The Federal Trade Commission's March 2026 refund distribution to businesses harmed by merchant cash advance practices marks a first: according to industry tracking of the action, roughly $3.3 million went out to 4,981 eligible small businesses. The FTC has refunded consumers for decades; directing checks to commercial borrowers in an MCA matter is new territory, and it signals how far the agency's view of this market has moved.",
      "The enforcement backdrop is the RAM Capital Funding matter, in which the company and its owner were permanently banned from the merchant cash advance and debt collection industries, required to pay $675,000, and ordered to vacate judgments obtained against former customers and release liens filed against their property, per the public record of the action.",
      "The remedies are worth reading closely, because they map exactly onto the pressure points this site writes about weekly: judgments entered through aggressive collection practice, and UCC liens that outlive the underlying dispute. When a federal order specifically requires vacating judgments and releasing liens, it confirms those instruments, not the advances themselves, are where the real damage to small businesses concentrates.",
      "For owners currently carrying MCA debt, two practical takeaways. First, the compliance climate is shifting in your favor: funders operating on the aggressive end of collections now carry regulatory risk that strengthens a negotiator's hand. Second, if you were a RAM Capital customer, or dealt with any funder later subject to enforcement, check whether vacated judgments and lien releases have actually been processed on your record; our UCC lien guide explains how to verify filings in your state.",
      "Broader context: industry tracking places total judgments, settlements, debt cancellations, and enforcement outcomes across the MCA space at more than $1.6 billion between January 2025 and March 2026. Whatever the precise final tally, the direction is unambiguous, and it is reshaping how funders behave at the negotiation table.",
    ],
    sources: [
      {
        publication: "Credible Law, MCA lawsuit statistics tracking",
        url: "https://crediblelaw.com/mca-lawsuit-statistics/",
        publishedAt: "2026-03-15",
      },
      {
        publication: "Enforcement-actions public record roundup",
        url: "https://www.nyccriminalattorneys.com/mca-companies-facing-enforcement-actions/",
        publishedAt: "2026-03-10",
      },
    ],
  },
  {
    slug: "ny-fair-business-practices-act-mca",
    title:
      "New York's FAIR Business Practices Act now shields small businesses: what changes for MCA collections",
    metaTitle: "NY FAIR Business Practices Act and MCA Debt: What Changed (2026)",
    metaDescription:
      "Effective February 17, 2026, New York's FAIR Business Practices Act extends unfair, deceptive, and abusive practice protections to small businesses, directly reaching MCA collection conduct in the industry's home venue.",
    excerpt:
      "New York extended its unfair-and-abusive-practices protections beyond consumers to small businesses and nonprofits, in the state where most MCA contracts choose their forum.",
    publishedAt: "2026-08-05",
    category: "Industry",
    body: [
      "On February 17, 2026, New York's FAIR Business Practices Act took effect, extending the state's protections against unfair, deceptive, and abusive practices beyond consumers to small businesses and nonprofits. For the merchant cash advance market this is not a peripheral development: New York is the forum most MCA agreements select, the venue where most MCA judgments are entered, and the historical home of the industry's most aggressive collection practices.",
      "The practical significance sits in the word 'abusive.' Consumer-protection standards built around that term reach conduct that older commercial doctrines tolerated: pressure tactics, exploitation of a counterparty's inability to protect its own interests, and practices that obscure the true terms of a transaction. Small businesses in MCA disputes could rarely invoke those standards before, because the statutes protected consumers only. In New York, that wall has now moved.",
      "Court decisions following New York's earlier reforms have already vacated Confessions of Judgment that failed to comply with statutory requirements, establishing that the legislature's procedural protections are enforceable in practice, and industry tracking counts vacaturs in the thousands. The FAIR Act adds a broader conduct standard on top of those procedural rules.",
      "What this means for owners in active MCA distress: the leverage math in New York forums has shifted. Collection conduct that once carried no consequence, harassment-grade contact, misrepresentation of remedies, abusive use of judgment and lien mechanics, now carries statutory exposure for the funder, which is precisely the kind of exposure settlement negotiators and defense attorneys convert into discounts and releases. When we write that the window between default notice and filing is where settlements are won, laws like this are what widen that window.",
      "As always with new statutes, the case law defining the edges will take time. But direction matters as much as detail, and the direction, in the industry's own home venue, is toward accountability for collection conduct.",
    ],
    sources: [
      {
        publication: "Consumer Finance Monitor (Ballard Spahr), merchant cash advance coverage",
        url: "https://www.consumerfinancemonitor.com/tag/merchant-cash-advance/",
        publishedAt: "2026-02-20",
      },
      {
        publication: "Credible Law, MCA laws by state",
        url: "https://crediblelaw.com/merchant-cash-advance-laws-by-state/",
        publishedAt: "2026-03-01",
      },
    ],
  },
  {
    slug: "state-mca-disclosure-wave-texas-louisiana",
    title:
      "The disclosure wave reaches the South: Louisiana live, Texas rules due by September",
    metaTitle: "MCA Disclosure Laws 2026: Louisiana Live, Texas Rules Coming",
    metaDescription:
      "Commercial financing disclosure laws keep spreading: Louisiana's revenue-based financing disclosures are in force and Texas implementing rules are due by September 2026, including new limits on ACH debits.",
    excerpt:
      "The state-by-state disclosure regime that started in California and New York keeps expanding: Louisiana requires pre-signing disclosures for revenue-based financing, and Texas rules land by September.",
    publishedAt: "2026-08-04",
    category: "Industry",
    body: [
      "The state disclosure movement that began with California and New York's commercial financing laws has reached the South. Louisiana now requires providers of revenue-based financing transactions, the statutory category that covers merchant cash advances, to deliver written disclosures to recipients before contract execution, under its law effective August 2025. Texas follows next: implementing rules under its commercial financing statute are due by September 2026.",
      "The Texas rules carry a provision worth singling out: restrictions on automatic ACH debits from merchant accounts unless the provider holds a first-priority perfected security interest. The daily ACH pull is the operational heart of the MCA product, and the first-priority condition would meaningfully complicate stacked lending, because by definition only one funder in a stack can hold first position. If enforced as described, junior stacking in Texas becomes structurally harder.",
      "For owners, the disclosure regimes matter in two ways. Prospectively, standardized cost disclosure, total repayment, estimated APR, payment schedule, makes the true price of an advance visible before signing, which is exactly the information the industry's sales process historically obscured. Retrospectively, a funder's failure to comply with an applicable disclosure law is a compliance defect that experienced negotiators and attorneys raise at the settlement table.",
      "The pattern across states is consistent enough to call a national trajectory: disclosure first, conduct standards second, and courts increasingly willing to look through the receivables-purchase form to the lending substance. Owners weighing an advance today, or negotiating out of one signed years ago, are operating in a materially different legal environment than the one the contracts were drafted for.",
      "Our contract red-flags guide covers what to check in an agreement regardless of state, and our rankings track which settlement firms actually use these regulatory developments as leverage rather than just citing them in marketing.",
    ],
    sources: [
      {
        publication: "MCA Track, regulation by state",
        url: "https://mca-track.com/merchant-cash-advance-regulation-by-state/",
        publishedAt: "2026-07-01",
      },
      {
        publication: "Credible Law, MCA laws by state",
        url: "https://crediblelaw.com/merchant-cash-advance-laws-by-state/",
        publishedAt: "2026-03-01",
      },
    ],
  },
  {
    slug: "state-of-mca-settlement-2026-study-published",
    title:
      "We published the State of MCA Settlement 2026: the industry's BBB record, in one dataset",
    metaTitle: "State of MCA Settlement 2026 Study Published",
    metaDescription:
      "Our new study compiles the live BBB record of every MCA settlement firm we track: accreditation rates, letter grades, and complaint counts across 17 firms, free to cite with attribution.",
    excerpt:
      "The ranking now covers 17 firms, and our new study page compiles their BBB accreditation, grades, and complaint records into one citable dataset.",
    publishedAt: "2026-08-04",
    category: "Editorial",
    body: [
      "We have published the State of MCA Settlement 2026, a study page that compiles the live Better Business Bureau record of every merchant cash advance settlement and debt-relief firm we track: accreditation status, letter grade, and complaint counts, seventeen firms side by side in one dataset.",
      "The headline findings mirror what our individual reviews keep encountering: a majority of firms marketing MCA relief are not BBB accredited, several hold grades below B including an F, and a meaningful number publish no BBB profile at all, leaving owners nothing to verify. The full table, methodology, and every figure's provenance are on the study page.",
      "The dataset exists because the single most common failure we see in owner decision-making is signing with a firm nobody checked. Every figure was read directly from live bbb.org profiles; where a firm publishes no profile or metric, the study says exactly that rather than estimating.",
      "The study is free to cite for journalists, researchers, and industry writers, with attribution and a link. It updates alongside our review cycle, and it complements the ranking itself, which since July covers seventeen firms, including the newest additions to the comparison: National Credit Partners, Rise Alliance, Delancey Street, National Debt Relief, Business Debt Adjusters, MCA Debt Advisors, and Business Debt Insider.",
    ],
    sources: [
      {
        publication: "MCA Settlement Reviews, State of MCA Settlement 2026",
        url: "https://www.mcasettlementreviews.com/state-of-mca-settlement-2026",
        publishedAt: "2026-08-04",
      },
      {
        publication: "Better Business Bureau",
        url: "https://www.bbb.org/",
        publishedAt: "2026-08-04",
      },
    ],
  },
];

export function getNewsBySlug(slug: string) {
  return NEWS.find((n) => n.slug === slug);
}
