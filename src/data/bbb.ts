// Point-in-time BBB records. Each takeaway states its check date where available.
// Grades, accreditation and customer-review averages are different measures.
// Unverified totals are omitted rather than carried forward as current figures.

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

// Editorial display order, with Coastal featured first; not a BBB ranking.
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
    complaints3yr: 72,
    complaints12mo: 39,
    started: "2018",
    hq: "Fort Lauderdale, FL",
    profileUrl:
      "https://www.bbb.org/us/fl/fort-lauderdale/profile/debt-relief-services/coastal-debt-resolve-0633-92025913",
    takeaway:
      "A+ and accredited status checked September 12, 2026. BBB lists 72 complaints in three years and 39 closed in twelve months. Read the responses and outcomes; accreditation is not a guarantee of service results.",
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
      "A+ and accredited status checked September 11, 2026. Compare the written service scope and fees; accreditation does not guarantee outcomes.",
    quotes: [],
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
      "Canadian BBB profile for MSI Spergel Inc. Canadian insolvency services should not be assumed to cover a U.S. MCA dispute.",
    takeaway:
      "A+ and accredited status checked September 12, 2026. The Canadian profile does not establish U.S. MCA service coverage or a typical case outcome.",
    quotes: [],
  },
  {
  "slug": "national-credit-partners",
  "name": "National Credit Partners",
  "shortName": "National Credit Partners",
  "accreditation": "accredited",
  "accreditedSince": "Nov 2018",
  "grade": "A+",
  "hasProfile": true,
  "started": "2018",
  "hq": "Costa Mesa, CA",
  "profileUrl": "https://www.bbb.org/us/ca/costa-mesa/profile/corporate/national-credit-partners-1126-1000056604",
  "takeaway": "Checked September 14, 2026: A+ and accredited since November 2018. This supports identifying the business, not a guarantee of savings or legal representation.",
  "quotes": []
},
  {
  "slug": "national-debt-relief",
  "name": "National Debt Relief",
  "shortName": "National Debt Relief",
  "accreditation": "accredited",
  "accreditedSince": "Feb 2013",
  "grade": "A+",
  "hasProfile": true,
  "started": "2009",
  "hq": "New York, NY",
  "profileUrl": "https://www.bbb.org/us/ny/new-york/profile/debt-relief-services/national-debt-relief-0121-110899",
  "takeaway": "Checked September 14, 2026: A+ and accredited. Company materials discuss some business-related unsecured debt; specific MCA eligibility and legal-service scope require confirmation.",
  "quotes": []
},
  {
  "slug": "regroup-partners",
  "name": "Regroup Partners Co.",
  "shortName": "Regroup",
  "accreditation": "not-accredited",
  "grade": "A+",
  "hasProfile": true,
  "started": "2019",
  "hq": "Boca Raton, FL",
  "profileUrl": "https://www.bbb.org/us/fl/boca-raton/profile/debt-relief-services/regroup-partners-co-0633-90540825",
  "takeaway": "Checked September 14, 2026: A+, not accredited; BBB lists a 2019 business start. Read individual records and responses rather than treating a grade as proof of results.",
  "quotes": []
},
  {
  "slug": "business-debt-adjusters",
  "name": "Business Debt Adjusters",
  "shortName": "Business Debt Adjusters",
  "accreditation": "not-accredited",
  "grade": "A-",
  "hasProfile": true,
  "started": "2016",
  "hq": "Englewood Cliffs, NJ",
  "profileUrl": "https://www.bbb.org/us/nj/englewd-clfs/profile/debt-relief-services/business-debt-adjusters-0221-90179879",
  "takeaway": "Checked September 14, 2026: A- and not accredited. BBB cites one unanswered complaint. The grade is not an independently measured settlement outcome.",
  "quotes": []
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
    complaints12mo: 2,
    started: "1998",
    hq: "Paramus, NJ",
    profileUrl:
      "https://www.bbb.org/us/nj/paramus/profile/debt-relief-services/corporate-turnaround-0221-12001541",
    takeaway:
      "Checked September 12, 2026: A rated and not accredited. BBB lists 13 complaints in three years and 2 closed in twelve months. Read the dated allegations and responses; complaint counts are not a failure rate.",
    quotes: [],
  },
  {
  "slug": "stop-mca",
  "name": "Stop MCA",
  "shortName": "Stop MCA",
  "accreditation": "not-accredited",
  "grade": "A-",
  "hasProfile": true,
  "started": "2016",
  "hq": "Englewood Cliffs, NJ",
  "profileUrl": "https://www.bbb.org/us/nj/englewd-clfs/profile/debt-relief-services/business-debt-adjusters-0221-90179879",
  "entityNote": "Stop MCA’s privacy policy names Business Debt Adjusters, LLC. The profile below concerns that entity; confirm the business on your contract.",
  "takeaway": "Operator record checked September 14, 2026: Business Debt Adjusters is A- and not accredited. This is not a separate Stop MCA accreditation.",
  "quotes": []
},
  {
  "slug": "mca-resolve",
  "name": "MCA Resolve, LLC",
  "shortName": "MCA Resolve",
  "accreditation": "not-accredited",
  "grade": "B",
  "hasProfile": true,
  "started": "2019",
  "hq": "Delray Beach, FL",
  "profileUrl": "https://www.bbb.org/us/fl/delray-beach/profile/debt-relief-services/mca-resolve-llc-0633-92028391",
  "takeaway": "Checked September 14, 2026: B and not accredited. Rating reasons cite 23 complaints. The domain now redirects to DebtResolvePro; legal succession is not established by that redirect.",
  "quotes": []
},
  {
    slug: "eastern-financial-partners",
    name: "Eastern Financial Partners",
    shortName: "Eastern Financial",
    accreditation: "not-accredited",
    grade: "Not Rated",
    hasProfile: true,
    complaints3yr: 3,
    started: "2023",
    hq: "Red Bank, NJ",
    profileUrl:
      "https://www.bbb.org/us/nj/red-bank/profile/financial-services/eastern-financial-partners-0221-90236109",
    takeaway:
      "Checked September 11, 2026: not accredited and Not Rated. BBB says the business is responding to previously closed complaints. Read the linked complaint record and responses; allegations are not court findings.",
    quotes: [],
  complaints12mo: 2,
},
  {
  "logoSlug": "corporate-rescue",
  "name": "Corporate Rescue Advisors, LLC",
  "shortName": "Corporate Rescue Advisors",
  "accreditation": "not-accredited",
  "grade": "Not Rated",
  "hasProfile": true,
  "started": "2025",
  "hq": "Boca Raton, FL",
  "profileUrl": "https://www.bbb.org/us/fl/boca-raton/profile/financial-consultants/corporate-rescue-advisors-llc-0633-92053458",
  "takeaway": "Checked September 14, 2026: Not Rated and not accredited. BBB says previously closed complaints are being addressed; business start listed as May 16, 2025.",
  "quotes": [],
  "slug": "corporate-rescue"
},
  {
  "slug": "mca-debt-advisors",
  "name": "MCA Debt Advisors, LLC",
  "shortName": "MCA Debt Advisors",
  "accreditation": "not-accredited",
  "grade": "F",
  "hasProfile": true,
  "started": "2020",
  "hq": "Erie, PA",
  "profileUrl": "https://www.bbb.org/us/pa/erie/profile/debt-relief-services/mca-debt-advisors-llc-0141-71077651",
  "takeaway": "Checked September 14, 2026: F and not accredited. BBB rating reasons cite 25 complaints, including seven unanswered. Complaint counts change and are not a failure rate.",
  "quotes": []
},
  {
  "slug": "delancey-street",
  "name": "Delancey Street LLC",
  "shortName": "Delancey Street",
  "accreditation": "not-accredited",
  "grade": "Not rated",
  "hasProfile": true,
  "started": "2023",
  "hq": "New York, NY",
  "profileUrl": "https://www.bbb.org/us/ny/new-york/profile/debt-relief-services/delancey-street-llc-0121-87176359",
  "takeaway": "Checked September 14, 2026: Not Rated and not accredited. BBB lists a February 2023 business start and says it lacks enough information to rate the business.",
  "quotes": []
},
  {
    slug: "rise-alliance",
    name: "Rise Alliance",
    shortName: "Rise Alliance",
    accreditation: "none",
    grade: "No profile",
    hasProfile: false,
    hq: "New York, NY",
    entityNote:
      "Operates as a brand within the Second Wind Consultants group; Second Wind's own profile is A+ and accredited.",
    takeaway:
      "A standalone BBB profile was not verified in the September 11, 2026 review. Second Wind’s separate accreditation must not be treated as accreditation of Rise Alliance.",
    quotes: [],
  },
  {
    slug: "business-debt-insider",
    name: "Business Debt Insider",
    shortName: "Business Debt Insider",
    accreditation: "none",
    grade: "No profile",
    hasProfile: false,
    hq: "Fort Lauderdale, FL",
    takeaway:
      "No matching BBB profile located in the September 12, 2026 check. This does not establish that no profile exists. Service and fee statements come from the company.",
    quotes: [],
  },
  {
    slug: "business-debt-law-group",
    name: "Business Debt Law Group",
    shortName: "BDLG",
    accreditation: "not-accredited",
    grade: "A+",
    hasProfile: true,
    started: "1998",
    profileUrl: "https://www.bbb.org/us/fl/ft-lauderdale/profile/lawyers/business-debt-law-group-0633-23006096",
    hq: "Fort Lauderdale, FL",
    takeaway:
      "A+ and not accredited, checked September 12, 2026. BBB lists Rumore Jocelyn Serra PLLC as an alternate name. Complaint and customer-review totals were not verified in this update.",
    quotes: [],
  },
];

export const BBB_COASTAL = BBB_RECORDS.find((r) => r.isCoastal)!;

export function getBBBBySlug(slug: string) {
  return BBB_RECORDS.find((r) => r.slug === slug);
}

export function bbbGradeTone(grade: string): "good" | "ok" | "bad" | "none" {
  if (grade.startsWith("A")) return "good";
  if (grade.startsWith("B") || grade.startsWith("C")) return "ok";
  if (grade === "No profile" || grade === "Not rated") return "none";
  return "bad"; // D, F
}
