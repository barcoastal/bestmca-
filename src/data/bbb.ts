// Verified Better Business Bureau (bbb.org) profile data for every MCA settlement
// and debt-relief firm we cover. All figures were read directly from each firm's
// live bbb.org (or BBB Canada) profile on 2026-06-02. BBB data is live and changes
// over time; these are point-in-time snapshots. We do not fabricate any figure: where
// a firm has no BBB profile, or a metric is not published, that is stated explicitly.

export type BBBAccreditation = "accredited" | "not-accredited" | "none";

export type BBBQuote = {
  text: string;
  reviewer?: string;
  sentiment: "positive" | "negative";
};

export type BBBRecord = {
  slug?: string; // links to /reviews/[slug] when we have a full review
  logoSlug?: string; // overrides which brand logo to show (defaults to slug)
  name: string;
  shortName: string;
  isCoastal?: boolean;
  accreditation: BBBAccreditation;
  accreditedSince?: string;
  grade: string; // "A+", "A", "B", "F", or "No profile"
  hasProfile: boolean;
  starRating?: number; // BBB customer-review average (out of 5)
  reviewCount?: number;
  complaints3yr?: number;
  complaints12mo?: number;
  started?: string;
  hq?: string;
  profileUrl?: string;
  entityNote?: string; // when the BBB profile is under a different legal entity
  takeaway: string; // one honest line summarizing the BBB record
  quotes: BBBQuote[];
};

// Ordered best-to-worst by BBB standing: accreditation first, then letter grade,
// then complaint profile. Firms with no BBB profile are listed last.
export const BBB_RECORDS: BBBRecord[] = [
  {
    slug: "coastal-debt-resolve",
    name: "Coastal Debt Resolve",
    shortName: "Coastal",
    isCoastal: true,
    accreditation: "accredited",
    accreditedSince: "Feb 2024",
    grade: "A+",
    hasProfile: true,
    complaints3yr: 69,
    complaints12mo: 44,
    started: "2019",
    hq: "Fort Lauderdale, FL",
    profileUrl:
      "https://www.bbb.org/us/fl/fort-lauderdale/profile/debt-relief-services/coastal-debt-resolve-0633-92025913",
    takeaway:
      "The only firm here that is both BBB Accredited and rated A+. Complaint volume is the highest in the table, but that tracks its client base, the largest in this comparison, and BBB keeps it at A+ because the firm responds to and resolves complaints. Accreditation requires that responsiveness; an F-rated firm with two ignored complaints does not have it.",
    quotes: [],
  },
  {
    slug: "second-wind-consultants",
    name: "Second Wind Consultants, Inc.",
    shortName: "Second Wind",
    accreditation: "accredited",
    accreditedSince: "Jan 2014",
    grade: "A+",
    hasProfile: true,
    starRating: 5.0,
    reviewCount: 2,
    complaints3yr: 1,
    complaints12mo: 0,
    started: "2009",
    hq: "Northampton, MA",
    profileUrl:
      "https://www.bbb.org/us/ma/northampton/profile/business-consultant/second-wind-consultants-inc-0261-256587",
    takeaway:
      "One of the cleanest BBB records in the category: A+, accredited since 2014, and just one complaint in three years. Better suited to larger mid-market restructurings than to small businesses in active funder distress.",
    quotes: [
      {
        text: "I worked with Second Wind Consulting for over 2 years, and there is no question that I could not have navigated that period without their team.",
        sentiment: "positive",
      },
    ],
  },
  {
    slug: "spergel",
    name: "MSI Spergel Inc (Spergel)",
    shortName: "Spergel",
    accreditation: "accredited",
    accreditedSince: "May 2021",
    grade: "A+",
    hasProfile: true,
    starRating: 4.57,
    reviewCount: 23,
    complaints3yr: 4,
    complaints12mo: 1,
    started: "1985",
    hq: "North York, ON (Canada)",
    profileUrl:
      "https://www.bbb.org/ca/on/north-york/profile/bankruptcy-counseling/msi-spergel-inc-0107-1136552",
    entityNote:
      "Listed on BBB Canada, not the U.S. BBB. Spergel is a Canadian licensed insolvency trustee, a more heavily regulated category than U.S. debt settlement, and does not handle U.S. MCA cases.",
    takeaway:
      "An A+ accredited Canadian insolvency firm with a strong review record. Listed here because the brand surfaces in U.S. searches, but a U.S. business with MCA debt cannot use them.",
    quotes: [
      {
        text: "Their process is simple, fast and easy from beginning to end.",
        reviewer: "Christopher R",
        sentiment: "positive",
      },
    ],
  },
  {
    slug: "regroup-partners",
    name: "Regroup Partners Co.",
    shortName: "Regroup",
    accreditation: "not-accredited",
    grade: "A+",
    hasProfile: true,
    starRating: 3.67,
    reviewCount: 3,
    started: "2019",
    hq: "Boca Raton, FL",
    profileUrl:
      "https://www.bbb.org/us/fl/boca-raton/profile/debt-relief-services/regroup-partners-co-0633-90540825",
    takeaway:
      "A+ rated but not accredited, with a thin review base (3 reviews) split between strong praise and a serious billing complaint. Verify fee handling in writing before engaging.",
    quotes: [
      {
        text: "I would like to extend my gratitude to Regroup Partners for your invaluable assistance in restructuring our business.",
        sentiment: "positive",
      },
      {
        text: "Regroup Partners collected $59,808.48 and settled only one account for $25,769.13. They are now lying...",
        sentiment: "negative",
      },
    ],
  },
  {
    slug: "corporate-turnaround",
    name: "Corporate Turnaround",
    shortName: "Corporate Turnaround",
    accreditation: "not-accredited",
    grade: "A",
    hasProfile: true,
    starRating: 4.2,
    reviewCount: 9,
    complaints3yr: 13,
    complaints12mo: 3,
    started: "1998",
    hq: "Paramus, NJ",
    profileUrl:
      "https://www.bbb.org/us/nj/paramus/profile/debt-relief-services/corporate-turnaround-0221-12001541",
    takeaway:
      "Long operating history and an A letter grade, but not accredited, and 13 complaints in three years with recurring themes: funds taken but allegedly not forwarded to creditors, and disputed fees. Document every fee and verify creditor contact independently.",
    quotes: [
      {
        text: "Very thankful for finding Corporate Turnaround. Adam and his team were great to work with.",
        reviewer: "Tracey L",
        sentiment: "positive",
      },
      {
        text: "If I could give no stars I would. This company is all about taking money with no result.",
        reviewer: "Carnice G",
        sentiment: "negative",
      },
    ],
  },
  {
    slug: "stop-mca",
    name: "Stop MCA",
    shortName: "Stop MCA",
    accreditation: "not-accredited",
    grade: "A",
    hasProfile: true,
    starRating: 3.18,
    reviewCount: 11,
    complaints3yr: 3,
    complaints12mo: 0,
    started: "2016",
    hq: "Englewood Cliffs, NJ",
    profileUrl:
      "https://www.bbb.org/us/nj/englewd-clfs/profile/debt-relief-services/business-debt-adjusters-0221-90179879",
    entityNote:
      "The stopmca.com brand has no BBB profile of its own. The record shown is for Business Debt Adjusters, LLC, named as the site operator in Stop MCA's own privacy policy.",
    takeaway:
      "An A grade under the operating entity, but not accredited, a below-average 3.18-star review average, and BBB notes a failure to respond to one complaint. Reviews flag aggressive, repeated sales calls.",
    quotes: [
      {
        text: "Gonenc Eddy was amazing. Was there for me every step of the way.",
        reviewer: "Brandon B",
        sentiment: "positive",
      },
      {
        text: "This company calls us multiple times a day... they lie and say one of our vendors has filed something against us.",
        reviewer: "Kerry D",
        sentiment: "negative",
      },
    ],
  },
  {
    slug: "mca-resolve",
    name: "MCA Resolve, LLC",
    shortName: "MCA Resolve",
    accreditation: "not-accredited",
    grade: "B",
    hasProfile: true,
    starRating: 3.5,
    reviewCount: 38,
    complaints3yr: 25,
    complaints12mo: 6,
    started: "2019",
    hq: "Delray Beach, FL",
    profileUrl:
      "https://www.bbb.org/us/fl/delray-beach/profile/debt-relief-services/mca-resolve-llc-0633-92028391",
    takeaway:
      "Not accredited, a B grade, and 25 complaints in three years against a mediocre 3.5-star average. The recurring complaint pattern is fees taken in full with little to no creditor contact made. Approach with extreme caution.",
    quotes: [
      {
        text: "MCA Resolve settled my debt in less than the estimated time. I am now debt free and free of those lenders!",
        reviewer: "Rita E",
        sentiment: "positive",
      },
      {
        text: "MCA Resolve took 24k of which all was taken for fees... they kept taking. Even after I put a stop to the withdrawals they still continued.",
        reviewer: "Ed R",
        sentiment: "negative",
      },
    ],
  },
  {
    slug: "eastern-financial-partners",
    name: "Eastern Financial Partners",
    shortName: "Eastern Financial",
    accreditation: "not-accredited",
    grade: "B",
    hasProfile: true,
    complaints3yr: 1,
    started: "2023",
    hq: "Red Bank, NJ",
    profileUrl:
      "https://www.bbb.org/us/nj/red-bank/profile/financial-services/eastern-financial-partners-0221-90236109",
    takeaway:
      "A B grade dragged down by a complaint the firm failed to respond to, plus multiple reviews describing harassing robo-dialed calls and texts. Its Trustpilot score is much higher than its BBB standing.",
    quotes: [
      {
        text: "I have asked multiple times to be put on a do not call list and they ignore it.",
        sentiment: "negative",
      },
      {
        text: "This company employs robo-dialers... and has no respect for being asked to remove your number.",
        sentiment: "negative",
      },
    ],
  },
  {
    logoSlug: "corporate-rescue",
    name: "Corporate Rescue Advisors, LLC",
    shortName: "Corporate Rescue Advisors",
    accreditation: "not-accredited",
    grade: "F",
    hasProfile: true,
    complaints3yr: 2,
    started: "May 2025",
    hq: "Boca Raton, FL",
    profileUrl:
      "https://www.bbb.org/us/fl/boca-raton/profile/financial-consultants/corporate-rescue-advisors-llc-0633-92053458",
    takeaway:
      "The worst BBB record in this comparison: an F grade, not accredited, in business less than a year, and two complaints the firm simply failed to respond to. The grade is low precisely because of that non-response.",
    quotes: [
      {
        text: "...me for over 20k. Stay far away!",
        sentiment: "negative",
      },
    ],
  },
  {
    slug: "business-debt-law-group",
    name: "Business Debt Law Group",
    shortName: "BDLG",
    accreditation: "none",
    grade: "No profile",
    hasProfile: false,
    hq: "Fort Lauderdale, FL",
    takeaway:
      "No BBB profile exists under the brand or its underlying law-firm entity. As a litigation practice rather than a settlement company, that is less unusual, but it means no BBB record to evaluate.",
    quotes: [],
  },
];

export const BBB_COASTAL = BBB_RECORDS.find((r) => r.isCoastal)!;

export function getBBBBySlug(slug: string) {
  return BBB_RECORDS.find((r) => r.slug === slug);
}

export function bbbGradeTone(grade: string): "good" | "ok" | "bad" | "none" {
  if (grade === "A+" || grade === "A") return "good";
  if (grade === "B" || grade === "C") return "ok";
  if (grade === "No profile") return "none";
  return "bad"; // D, F
}
