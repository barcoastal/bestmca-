export type RatingKey =
  | "transparency"
  | "results"
  | "communication"
  | "cost"
  | "litigation";

export const RATING_LABELS: Record<RatingKey, string> = {
  transparency: "Transparency & Disclosures",
  results: "Settlement Results",
  communication: "Client Communication",
  cost: "Cost & Fee Structure",
  litigation: "Litigation Defense",
};

export type PublicQuote = {
  quote: string;
  source: string;
  sourceUrl?: string;
  rating?: number;
  attribution?: string;
};

export type Review = {
  slug: string;
  name: string;
  shortName: string;
  score: number;
  updatedAt: string;
  sourcesCheckedAt?: string;
  ratingNote?: string;
  sources?: { label: string; url: string; note: string }[];
  isCoastal?: boolean;
  rank: number;
  oneLineVerdict: string;
  founded: string;
  hq: string;
  minDebt: string;
  specialties: string;
  bbb: string;
  trustpilot: string;
  websiteLabel: string;
  firmWebsite?: string;
  recommendedFor: string;
  bestFor: string[];
  notIdealFor: string[];
  ratings: Record<RatingKey, number>;
  pros: string[];
  cons: string[];
  verdict: string;
  pricing: string;
  process: string;
  concerns?: { quote: string; source: string }[];
  proofPoints?: string[];
  publicQuotes?: PublicQuote[];
  warning?: string;
};

const REVIEW_DATA: Omit<Review, "score" | "rank">[] = [
  {
    updatedAt: "2026-09-12",
    slug: "coastal-debt-resolve",
    name: "Coastal Debt Resolve",
    shortName: "Coastal",
    isCoastal: true,
    oneLineVerdict:
      "Coastal offers MCA settlement and payment restructuring. BBB accreditation and public reviews provide useful records; confirm total fees, cancellation terms and the scope of attorney services in writing.",
    founded: "2018 (BBB business-start record)",
    hq: "Fort Lauderdale, Florida (national service)",
    minDebt: "Not verified; request eligibility criteria",
    specialties:
      "MCA settlement and payment restructuring; company-advertised attorney network",
    bbb: "A+ rated, accredited (checked September 12, 2026)",
    trustpilot: "4.6 from 429 reviews (checked September 12, 2026)",
    websiteLabel: "coastaldebt.com",
    firmWebsite: "https://www.coastaldebt.com",
    recommendedFor:
      "Business owners comparing a written MCA settlement or restructuring proposal.",
    bestFor: [
  "Owners seeking a proposal for MCA payment restructuring",
  "Owners able to compare program fees, creditor payments and cancellation terms"
],
    notIdealFor: [
  "Owners seeking guaranteed savings or completion dates",
  "Owners who have not confirmed representation for an active lawsuit"
],
    ratings: {
      transparency: 5,
      results: 5,
      communication: 5,
      cost: 4.5,
      litigation: 5,
    },
    pros: [
  "Public BBB profile and accreditation",
  "Public Trustpilot record with both positive and negative reviews",
  "Company offers a free consultation and publishes program limitations"
],
    cons: [
  "No complete fee schedule verified in the reviewed public materials",
  "BBB includes billing, service and solicitation complaints",
  "Attorney-network advertising does not establish in-house representation or included litigation fees",
  "Published customer examples are selected by the company, not an independent outcome audit"
],
    verdict:
      "Coastal has an identifiable business record and offers MCA settlement and restructuring. Its public materials describe an attorney network; they do not establish that all litigation work is performed in-house for one fee. Compare the signed engagement, public complaint responses and total cost before deciding. Our older claims about verified contracts, guaranteed legal scope and standard response times were not adequately supported and have been removed.",
    pricing:
      "A free consultation is advertised. We did not verify a complete fee schedule or signed engagement. Ask for all program, administration, legal-plan and cancellation charges, plus the amount reaching creditors. The BBB profile lists a no-refund policy; confirm the applicable contract terms.",
    process:
      "The provider describes consultation, eligibility assessment and creditor negotiation. The public information does not establish a guaranteed completion or attorney-response time. Obtain the proposed work and schedule in writing.",
    proofPoints: [],
  sourcesCheckedAt: "2026-09-12",
ratingNote: "The existing 4.9 editorial score is under evidence review. Its arithmetic matches the published weights, but the category assessments have not been independently substantiated. It is not a verified success rate or a fresh endorsement.",
publicQuotes: [],
sources: [
  {
    "label": "Coastal service descriptions and disclaimers",
    "url": "https://www.coastaldebt.com/",
    "note": "Company materials describe an attorney network and state that results vary. They do not establish a universal fee, minimum balance or litigation package."
  },
  {
    "label": "BBB business profile",
    "url": "https://www.bbb.org/us/fl/fort-lauderdale/profile/debt-relief-services/coastal-debt-resolve-0633-92025913",
    "note": "Checked September 12, 2026: A+ and accredited since February 28, 2024. Business start: June 20, 2018. The profile lists ABSM LLC and a no-refund policy."
  },
  {
    "label": "BBB complaints and business responses",
    "url": "https://www.bbb.org/us/fl/fort-lauderdale/profile/debt-relief-services/coastal-debt-resolve-0633-92025913/complaints",
    "note": "Checked September 12, 2026: 72 complaints in three years; 39 closed in twelve months. A June 15, 2026 billing complaint disputes cancellation charges and communication. Coastal responded that fees were disclosed and services provided; the consumer disputed that response. BBB marks it Answered, not Resolved. A June 25 calling complaint is marked Resolved after a do-not-call response. Allegations are not court findings; complaint counts are not a failure rate."
  },
  {
    "label": "Trustpilot company profile",
    "url": "https://www.trustpilot.com/review/coastaldebt.com",
    "note": "Checked September 12, 2026: displayed score 4.6 with 429 reviews. This is a platform score, separate from our editorial rating. Not every review carries a verified label, and customer opinions are not audited settlement outcomes."
  }
],
},
  {
    updatedAt: "2026-09-11",
    slug: "second-wind-consultants",
    ratingNote: "The existing editorial score is under evidence review. Its category assessments have not been independently substantiated; it is not a measured success rate or a fresh endorsement.",
    name: "Second Wind Consultants",
    shortName: "Second Wind",
    oneLineVerdict:
      "Second Wind provides business restructuring and turnaround services and is BBB A+ accredited. Compare its proposal with Rise Alliance, its related business, and verify fees and legal scope in writing.",
    founded: "2009",
    hq: "Northampton, Massachusetts",
    minDebt: "Not verified; request eligibility criteria",
    specialties: "Business debt restructuring, MCA resolution, asset sales",
    bbb: "A+; accredited since January 2014 (checked September 11, 2026)",
    trustpilot: "No current Trustpilot aggregate verified in this update",
    websiteLabel: "secondwindconsultants.com",
    firmWebsite: "https://secondwindconsultants.com",
    recommendedFor:
      "Businesses comparing broader restructuring and turnaround services alongside MCA relief.",
    bestFor: [
  "Businesses evaluating a wider operational restructuring",
  "Owners comparing Second Wind and Rise Alliance proposals"
],
    notIdealFor: [
  "Owners seeking a guaranteed outcome or timeline",
  "Owners needing a public fixed-price package"
],
    ratings: {
      transparency: 4,
      results: 4.5,
      communication: 4,
      cost: 4,
      litigation: 4,
    },
    pros: [
  "BBB lists operations since 2009 and accreditation since 2014",
  "Offers restructuring, turnaround and management consulting",
  "Discloses its relationship with Rise Alliance"
],
    cons: [
  "No complete fee schedule on the homepage reviewed",
  "No standard intake timeline verified",
  "Confirm the contracting entity and legal representation in the engagement"
],
    verdict:
      "Second Wind has a documented operating history and a broader service offering than MCA negotiation alone. The previous version asserted a $250,000 minimum and a slow intake cycle without sufficient supporting evidence; those claims have been removed. Its suitability depends on the proposed work, total cost and named professionals.",
    pricing:
      "A complete engagement fee schedule was not found on the homepage reviewed. Obtain a written quote separating consulting, restructuring and any legal costs. The site describes management consulting without hourly fees; this does not establish pricing for every service.",
    process:
      "The company offers an initial specialist consultation. Request a written sequence of work, timing and responsible professionals. We have not verified a standard two-to-four-week onboarding period.",
    publicQuotes: [],
    concerns: [],
  sources: [
  {
    "label": "Second Wind: service overview",
    "url": "https://secondwindconsultants.com/",
    "note": "Company descriptions of restructuring, turnaround and management consulting; not independent proof of outcomes."
  },
  {
    "label": "BBB business profile",
    "url": "https://www.bbb.org/us/ma/northampton/profile/business-consultant/second-wind-consultants-inc-0261-256587",
    "note": "A+ and accredited; BBB lists a 2009 business start and January 24, 2014 accreditation."
  },
  {
    "label": "Rise Alliance formation announcement",
    "url": "https://secondwindconsultants.com/resource/second-wind-consultants-and-polaris-business-advisors-unite-to-form-rise-alliance/",
    "note": "Company announcement describes the combination with Polaris Business Advisors that formed Rise Alliance."
  }
],
},
  {
    updatedAt: "2026-09-12",
    slug: "spergel",
    name: "Spergel",
    shortName: "Spergel",
    oneLineVerdict:
      "Spergel offers Canadian insolvency and debt-help services. Its Canadian BBB profile is A+ accredited. Its general customer ratings do not establish suitability or results for U.S. MCA settlement; confirm jurisdiction and service scope.",
    founded: "1985 (BBB business-start record)",
    hq: "Toronto, Ontario (Canada)",
    minDebt: "Varies",
    specialties:
      "Canadian personal and business debt help; company-described Licensed Insolvency Trustee services",
    bbb: "A+ rated; accredited in Canada (checked September 12, 2026)",
    trustpilot: "4.9 from 2,599 reviews (checked September 12, 2026)",
    websiteLabel: "spergel.ca",
    firmWebsite: "https://www.spergel.ca",
    recommendedFor:
      "Canadian business owners comparing personal and corporate debt options with a qualified professional.",
    bestFor: [
  "Canadian owners seeking advice on business and personal liabilities",
  "Owners who confirm the named trustee and applicable jurisdiction"
],
    notIdealFor: [
  "U.S. MCA cases without confirmed jurisdictional coverage",
  "Owners treating a general review score as evidence of MCA settlement performance"
],
    ratings: {
      transparency: 5,
      results: 5,
      communication: 5,
      cost: 4.5,
      litigation: 4,
    },
    pros: [
  "BBB Canada lists an A+ accredited business profile",
  "Company publishes named trustee profiles",
  "Public Trustpilot record offers a separate source of customer opinions"
],
    cons: [
  "No U.S. MCA service scope verified in this update",
  "General debt-help reviews do not isolate MCA outcomes",
  "No case-specific fee or eligibility assessment performed"
],
    verdict:
      "Spergel is presented in company materials as a Canadian insolvency practice. Its BBB record and customer-review profile are relevant checks, but they do not validate the category scores in our U.S.-focused comparison. Canadian and U.S. services should not be treated as interchangeable. Confirm professional credentials and jurisdiction directly before relying on a proposal.",
    pricing:
      "We did not verify a case-specific quotation. Ask which procedure is proposed, how all fees are calculated and who is responsible for them. Do not apply Canadian consumer-insolvency pricing assumptions to a corporate or U.S. MCA case.",
    process:
      "The company describes a consultation covering the owner’s personal and business liabilities and possible Canadian debt options. This update did not verify eligibility for any individual case or a U.S. MCA settlement process.",
    publicQuotes: [],
    concerns: [],
  sourcesCheckedAt: "2026-09-12",
ratingNote: "Spergel: existing editorial score is under evidence review. The formula is reproducible, but the category scores have not been independently substantiated. This is not a measured success rate or a fresh endorsement.",
sources: [
  {
    "label": "Spergel business and self-employed services",
    "url": "https://www.spergel.ca/business-and-self-employed/",
    "note": "Company materials distinguish personal liabilities and incorporated-business needs. These descriptions do not establish U.S. MCA coverage."
  },
  {
    "label": "Spergel named team profiles",
    "url": "https://www.spergel.ca/about-us/meet-the-team/",
    "note": "Company lists named Licensed Insolvency Trustees. This update did not independently verify each individual’s current licence in the government register."
  },
  {
    "label": "BBB Canada profile",
    "url": "https://www.bbb.org/ca/on/north-york/profile/bankruptcy-counseling/msi-spergel-inc-0107-1136552",
    "note": "Checked September 12, 2026: A+ accredited; accreditation May 27, 2021; business start June 25, 1985. This corrects the prior claim that BBB was not applicable."
  },
  {
    "label": "Trustpilot profile",
    "url": "https://www.trustpilot.com/review/spergel.ca",
    "note": "Checked September 12, 2026: displayed score 4.9 from 2,599 reviews. It is separate from our editorial score and does not isolate MCA-specific outcomes."
  }
],
},
  {
    updatedAt: "2026-09-12",
    slug: "corporate-turnaround",
    name: "Corporate Turnaround",
    shortName: "Corporate Turnaround",
    oneLineVerdict:
      "Corporate Turnaround offers commercial debt negotiation. Its BBB profile is A rated and not accredited. Review the documented billing disputes and business responses, and obtain written fees and creditor-contact commitments.",
    founded: "1998",
    hq: "Paramus, New Jersey",
    minDebt: "Not verified; request eligibility criteria",
    specialties: "Turnaround management, creditor negotiation, MCA workouts",
    bbb: "A rated; not accredited (checked September 12, 2026)",
    trustpilot: "No current Trustpilot aggregate verified in this update",
    websiteLabel: "corporateturnaround.com",
    firmWebsite: "https://www.corporateturnaround.com",
    recommendedFor:
      "Business owners comparing proposals covering multiple types of commercial debt.",
    bestFor: [
  "Businesses seeking a proposal for vendor, loan or other commercial debts",
  "Owners able to compare written costs and service scope"
],
    notIdealFor: [
  "Owners seeking guaranteed creditor acceptance",
  "Owners who have not confirmed representation for active litigation"
],
    ratings: {
      transparency: 3,
      results: 3.5,
      communication: 3.5,
      cost: 3.5,
      litigation: 3.5,
    },
    pros: [
  "BBB lists a business start in 1998",
  "Company describes negotiation for several types of commercial debt",
  "Public complaint responses can be reviewed before engagement"
],
    cons: [
  "Not BBB accredited",
  "Public billing and service disputes require careful reading",
  "No complete current fee schedule or standard implementation time independently verified"
],
    verdict:
      "Corporate Turnaround has an identifiable operating history. Its company materials describe negotiating business debts within a monthly budget. Public complaints raise issues to investigate, but their allegations are not adjudicated findings. Our prior $100,000 minimum, standard fee-model description and claims about slow implementation were not adequately sourced and have been removed.",
    pricing:
      "We did not verify a complete current fee schedule or signed client agreement. Ask for all fees, their triggers and cancellation terms, including charges if a creditor is paid through another route. Individual complaint allegations are not a universal fee schedule.",
    process:
      "The company describes assessing the available monthly budget and negotiating with creditors. Confirm the named contact, covered creditors, reporting frequency and legal scope. We have not verified a standard onboarding duration.",
    publicQuotes: [],
    concerns: [],
  sourcesCheckedAt: "2026-09-12",
ratingNote: "Corporate Turnaround: existing editorial score is under evidence review. The formula is reproducible, but the category scores have not been independently substantiated. This is not a measured success rate or a fresh endorsement.",
sources: [
  {
    "label": "Corporate Turnaround service overview",
    "url": "https://www.corporateturnaround.com/",
    "note": "Company describes budget-based negotiation involving vendors, credit cards, leases and loans. These are service claims, not independently audited outcomes."
  },
  {
    "label": "BBB business profile",
    "url": "https://www.bbb.org/us/nj/paramus/profile/debt-relief-services/corporate-turnaround-0221-12001541",
    "note": "Checked September 12, 2026: A rated, not accredited; business start March 1, 1998. BBB identifies Commercial Credit Counseling Services, Inc. as an alternate name."
  },
  {
    "label": "BBB complaint record and responses",
    "url": "https://www.bbb.org/us/nj/paramus/profile/debt-relief-services/corporate-turnaround-0221-12001541/complaints",
    "note": "Checked September 12, 2026: 13 complaints in three years; 2 closed in twelve months. A May 7, 2025 complaint disputes fees following garnishment. The company disputed the amount and reported continued communication; the consumer rejected its response. BBB marks it Answered. Allegations and responses are not court findings, and counts do not establish a failure rate."
  }
],
},
  {
  "updatedAt": "2026-09-14",
  "slug": "regroup-partners",
  "name": "Regroup Partners",
  "shortName": "Regroup",
  "oneLineVerdict": "Regroup advertises business restructuring and creditor coordination. BBB lists an A+ grade without accreditation. Request a written proposal and an explanation of how client funds are handled.",
  "founded": "2019 (BBB record)",
  "hq": "Boca Raton, Florida",
  "minDebt": "Not verified; request written eligibility criteria",
  "specialties": "Company-advertised business restructuring, creditor coordination and MCA advisory",
  "bbb": "A+; not accredited (checked September 14, 2026)",
  "trustpilot": "Current platform aggregate not verified in this audit",
  "websiteLabel": "regrouppartners.com",
  "firmWebsite": "https://regrouppartners.com",
  "recommendedFor": "Owners comparing the documented service scope, costs and public records before choosing a provider.",
  "bestFor": [
    "Comparing a written proposal for the services described below"
  ],
  "notIdealFor": [
    "Anyone relying on guaranteed savings, timing or unverified legal representation"
  ],
  "ratings": {
    "transparency": 3.5,
    "results": 4,
    "communication": 4,
    "cost": 4.5,
    "litigation": 3
  },
  "pros": [
    "Public service descriptions",
    "Matching BBB profile"
  ],
  "cons": [
    "No complete engagement pricing verified",
    "Company experience claims are distinct from the BBB business-start date"
  ],
  "verdict": "The company offers advisory services; its experience claims and selected testimonials do not establish typical results. BBB lists a 2019 business start. We removed unlinked quotations and unsupported savings and trust-account allegations from the previous review.",
  "pricing": "A complete fee schedule was not established by the homepage reviewed. The previous no-upfront-fee assertion is not verified. Request total charges, cancellation terms and any arrangements for holding client funds.",
  "process": "The company describes an initial discussion of business obligations and restructuring options. Obtain written deliverables, creditor-contact milestones and reporting commitments.",
  "publicQuotes": [],
  "concerns": [],
  "sourcesCheckedAt": "September 14, 2026",
  "proofPoints": [],
  "ratingNote": "Regroup Partners: the existing editorial score is under evidence review. Its category assessments have not been independently substantiated. It is not a measured success rate or a fresh endorsement.",
  "sources": [
    {
      "label": "Company website and service descriptions",
      "url": "https://regrouppartners.com",
      "note": "Company descriptions of restructuring, cash-flow advisory and creditor coordination. Experience and testimonial claims are promotional, not audited results."
    },
    {
      "label": "BBB business profile",
      "url": "https://www.bbb.org/us/fl/boca-raton/profile/debt-relief-services/regroup-partners-co-0633-90540825",
      "note": "A+; not accredited. Checked September 14, 2026. Accreditation and grades are distinct from customer-review averages and are not guarantees of outcomes."
    }
  ]
},
  {
  "updatedAt": "2026-09-14",
  "slug": "corporate-rescue",
  "name": "Corporate Rescue Advisors",
  "shortName": "Corporate Rescue Advisors",
  "oneLineVerdict": "Corporate Rescue Advisors advertises an MCA restructuring program. Its BBB profile is Not Rated and not accredited. Clarify when negotiations begin and what fees are collected beforehand.",
  "founded": "2025 (BBB record)",
  "hq": "Boca Raton, Florida",
  "minDebt": "Not verified; request written eligibility criteria",
  "specialties": "Company-advertised MCA restructuring and attorney-related services",
  "bbb": "Not Rated; not accredited (checked September 14, 2026)",
  "trustpilot": "Current platform aggregate not verified in this audit",
  "websiteLabel": "corporaterescue.com",
  "firmWebsite": "https://www.corporaterescue.com",
  "recommendedFor": "Owners comparing the documented service scope, costs and public records before choosing a provider.",
  "bestFor": [
    "Comparing a written proposal for the services described below"
  ],
  "notIdealFor": [
    "Anyone relying on guaranteed savings, timing or unverified legal representation"
  ],
  "ratings": {
    "transparency": 3.5,
    "results": 3.5,
    "communication": 4,
    "cost": 3.5,
    "litigation": 3
  },
  "pros": [
    "Public description of its program",
    "Matching BBB profile"
  ],
  "cons": [
    "Not Rated and not BBB accredited",
    "Negotiation timing needs a precise contractual explanation"
  ],
  "verdict": "BBB lists a May 2025 business start and says previously closed complaints are being addressed. This corrects our older accreditation and founding claims. The prior fraud quotations were not adequately linked and have been removed; no finding of fraud is established here.",
  "pricing": "No complete fee schedule was established by the reviewed homepage. Ask for all enrollment, recurring, legal and cancellation charges before paying.",
  "process": "The homepage says negotiations may begin around 60% of the way through its program. Ask what that milestone measures, what happens before it and how creditor actions are handled. Do not interpret the marketing as a guaranteed outcome.",
  "publicQuotes": [],
  "concerns": [],
  "sourcesCheckedAt": "September 14, 2026",
  "proofPoints": [],
  "ratingNote": "Corporate Rescue Advisors: the existing editorial score is under evidence review. Its category assessments have not been independently substantiated. It is not a measured success rate or a fresh endorsement.",
  "sources": [
    {
      "label": "Company website and service descriptions",
      "url": "https://www.corporaterescue.com",
      "note": "Homepage describes an MCA program and says negotiations may begin around the 60% point. This is a company statement, not evidence of actual case timing."
    },
    {
      "label": "BBB business profile",
      "url": "https://www.bbb.org/us/fl/boca-raton/profile/financial-consultants/corporate-rescue-advisors-llc-0633-92053458",
      "note": "Not Rated; not accredited. Checked September 14, 2026. BBB says previously closed complaints are being addressed."
    }
  ]
},
  {
    updatedAt: "2026-09-11",
    slug: "eastern-financial-partners",
    ratingNote: "The existing editorial score is under evidence review. Its category assessments have not been independently substantiated; it is not a measured success rate or a fresh endorsement.",
    name: "Eastern Financial Partners",
    shortName: "Eastern Financial",
    oneLineVerdict:
      "Eastern offers MCA restructuring and advertises attorney-led negotiations. Its BBB profile is currently Not Rated and not accredited; review the dated complaint record and obtain written fees before deciding.",
    founded: "2023",
    hq: "Red Bank, New Jersey",
    minDebt: "Varies",
    specialties: "MCA restructuring; company-advertised attorney-led negotiations",
    bbb: "Not Rated; not accredited (checked September 11, 2026)",
    trustpilot: "See current platform profile; no current aggregate verified in this update",
    websiteLabel: "easternfinancialpartners.com",
    firmWebsite: "https://easternfinancialpartners.com",
    recommendedFor:
      "Business owners comparing MCA restructuring proposals and the scope of attorney involvement.",
    bestFor: [
  "Owners seeking an MCA-specific restructuring proposal",
  "Owners willing to compare written fees and service commitments"
],
    notIdealFor: [
  "Owners needing a guaranteed settlement outcome",
  "Owners unable to verify who handles an active lawsuit"
],
    ratings: {
      transparency: 3.5,
      results: 4,
      communication: 3,
      cost: 4,
      litigation: 4,
    },
    pros: [
  "MCA-specific service offering",
  "Company describes attorney involvement",
  "Public BBB profile permits review of complaints and responses"
],
    cons: [
  "Not BBB accredited; currently Not Rated",
  "Exact fees were not available on the homepage reviewed",
  "Complaint records warrant careful review of billing, communication and cancellation terms"
],
    verdict:
      "Eastern merits comparison on its written proposal. The provider describes attorney-led MCA restructuring, but this review has not independently verified its legal staffing or case outcomes. Its BBB status is Not Rated, not the C+ previously shown here. Read the complaint chronology and business responses below before evaluating the engagement.",
    pricing:
      "The company says service charges are included in the restructured payment. The homepage reviewed did not provide an itemized fee schedule. Request total charges, payment timing and cancellation terms in writing.",
    process:
      "The company describes reviewing MCA balances and schedules, followed by attorney-led negotiation. Ask which creditors are covered, when contact begins and whether litigation representation is included.",
    publicQuotes: [],
    concerns: [],
  sources: [
  {
    "label": "Eastern: services and payment explanation",
    "url": "https://www.easternfinancialpartners.com/",
    "note": "Company description; staffing and outcomes were not independently verified."
  },
  {
    "label": "BBB business profile",
    "url": "https://www.bbb.org/us/nj/red-bank/profile/financial-services/eastern-financial-partners-0221-90236109",
    "note": "Not Rated and not accredited on September 11, 2026. BBB says previously closed complaints are being addressed."
  },
  {
    "label": "BBB complaint chronology",
    "url": "https://www.bbb.org/us/nj/red-bank/profile/financial-services/eastern-financial-partners-0221-90236109/complaints",
    "note": "Three complaints listed. June 25, 2026: alleged payments without subsequent communication. January 12, 2026: disputed refund. Both listed as unanswered. An August 2025 calling complaint includes a response saying the caller was disciplined and the number added to a do-not-call list. These are allegations and responses, not court findings."
  }
],
},
  {
  "updatedAt": "2026-09-12",
  "slug": "business-debt-law-group",
  "name": "Business Debt Law Group",
  "shortName": "BDLG",
  "oneLineVerdict": "The firm advertises MCA negotiation, restructuring and litigation services. Compare its written scope and fees; the previous litigation-only description was inaccurate.",
  "founded": "1998 (BBB business-start record)",
  "hq": "Fort Lauderdale, Florida",
  "minDebt": "Not verified; request eligibility criteria",
  "specialties": "Company-advertised MCA negotiation, restructuring and lawsuit defense",
  "bbb": "A+ rated; not accredited (checked September 12, 2026)",
  "trustpilot": "No current aggregate verified in this update",
  "websiteLabel": "businessdebtlawgroup.com",
  "recommendedFor": "Owners comparing legal representation for MCA payment disputes or lawsuits.",
  "bestFor": [
    "Owners seeking an evaluation of MCA contracts and creditor actions",
    "Owners comparing negotiation and litigation options"
  ],
  "notIdealFor": [
    "Owners seeking guaranteed results",
    "Owners who have not confirmed attorney availability in their jurisdiction"
  ],
  "ratings": {
    "transparency": 4,
    "results": 4,
    "communication": 3.5,
    "cost": 3,
    "litigation": 4.5
  },
  "pros": [
    "Publishes named attorneys and a legal entity",
    "Advertises negotiation alongside litigation",
    "Identifiable BBB profile"
  ],
  "cons": [
    "No complete fee schedule verified in the reviewed materials",
    "No independent outcome audit performed",
    "Jurisdiction and engagement scope require confirmation"
  ],
  "verdict": "The earlier review incorrectly described this practice as litigation-only and asserted higher costs without comparative evidence. Its site identifies Rumore Jocelyn Serra PLLC and advertises settlement and restructuring alongside defense. The BBB profile is A+ and not accredited. These records do not establish service quality or likely results; attorney licensing was not independently checked in this update.",
  "pricing": "No complete fee schedule was verified. Request a written engagement agreement covering negotiation, court work, expenses and termination. The previous hourly-billing assertion was unsupported.",
  "process": "The firm describes reviewing agreements, payment history and creditor actions before discussing options. Confirm who will handle the matter and what the engagement covers.",
  "concerns": [],
  "firmWebsite": "https://businessdebtlawgroup.com",
  "sources": [
    {
      "label": "Firm services and attorney information",
      "url": "https://businessdebtlawgroup.com/",
      "note": "Company descriptions, not independent verification of credentials or outcomes."
    },
    {
      "label": "About the firm",
      "url": "https://businessdebtlawgroup.com/about-us/",
      "note": "Describes negotiation, settlement, restructuring and litigation options. This contradicts the previous litigation-only characterization."
    },
    {
      "label": "BBB business profile",
      "url": "https://www.bbb.org/us/fl/ft-lauderdale/profile/lawyers/business-debt-law-group-0633-23006096",
      "note": "BBB lists A+, no accreditation, a February 18, 1998 business start and the alternate name Rumore Jocelyn Serra PLLC. Checked September 12, 2026; complaint and customer-review totals were not verified."
    }
  ],
  "sourcesCheckedAt": "September 12, 2026",
  "publicQuotes": [],
  "ratingNote": "Business Debt Law Group: existing editorial score is under evidence review. The formula is reproducible, but the category scores have not been independently substantiated. This is not a measured success rate or a fresh endorsement."
},
  {
  "updatedAt": "2026-09-14",
  "slug": "business-debt-adjusters",
  "name": "Business Debt Adjusters",
  "shortName": "Business Debt Adjusters",
  "oneLineVerdict": "Business Debt Adjusters offers debt negotiation and payment restructuring. BBB lists A- and no accreditation, citing an unanswered complaint. Compare written costs and creditor commitments.",
  "founded": "2016 (BBB record)",
  "hq": "Englewood Cliffs, New Jersey",
  "minDebt": "Not verified; request written eligibility criteria",
  "specialties": "Company-advertised business debt negotiation and payment restructuring",
  "bbb": "A-; not accredited (checked September 14, 2026)",
  "trustpilot": "Current platform aggregate not verified in this audit",
  "websiteLabel": "businessdebtadjusters.com",
  "firmWebsite": "https://www.businessdebtadjusters.com",
  "recommendedFor": "Owners comparing the documented service scope, costs and public records before choosing a provider.",
  "bestFor": [
    "Comparing a written proposal for the services described below"
  ],
  "notIdealFor": [
    "Anyone relying on guaranteed savings, timing or unverified legal representation"
  ],
  "ratings": {
    "transparency": 3,
    "results": 3.5,
    "communication": 3,
    "cost": 3.5,
    "litigation": 3.5
  },
  "pros": [
    "Public explanation of consultation and underwriting",
    "Matching BBB operating record"
  ],
  "cons": [
    "Full program pricing not verified",
    "BBB cites failure to answer one complaint"
  ],
  "verdict": "The company describes potential payment relief, with results dependent on creditor agreement. BBB provides an operating record, not proof of typical savings. Unsupported quotations, lien allegations and employee-review conclusions have been removed from this review.",
  "pricing": "The homepage advertises a free consultation but does not establish the full program cost. Request an itemized agreement, payment allocation and cancellation terms.",
  "process": "The provider describes consultation, underwriting and creditor negotiation. Ask for the contact schedule and documentation of each creditor agreement.",
  "publicQuotes": [],
  "concerns": [],
  "sourcesCheckedAt": "September 14, 2026",
  "proofPoints": [],
  "ratingNote": "Business Debt Adjusters: the existing editorial score is under evidence review. Its category assessments have not been independently substantiated. It is not a measured success rate or a fresh endorsement.",
  "sources": [
    {
      "label": "Company website and service descriptions",
      "url": "https://www.businessdebtadjusters.com",
      "note": "Homepage describes a free consultation, underwriting and negotiation, with variable results. Selected customer stories do not establish typical outcomes."
    },
    {
      "label": "BBB business profile",
      "url": "https://www.bbb.org/us/nj/englewd-clfs/profile/debt-relief-services/business-debt-adjusters-0221-90179879",
      "note": "A-; not accredited. Checked September 14, 2026. Accreditation and grades are distinct from customer-review averages and are not guarantees of outcomes."
    }
  ]
},
  {
  "updatedAt": "2026-09-14",
  "slug": "stop-mca",
  "name": "Stop MCA",
  "shortName": "Stop MCA",
  "oneLineVerdict": "Stop MCA advertises MCA negotiation and identifies Business Debt Adjusters in its privacy policy. Treat the brands as related when comparing proposals; confirm the entity on the contract.",
  "founded": "2016 (Business Debt Adjusters record) (BBB record)",
  "hq": "Englewood Cliffs, New Jersey (operator record)",
  "minDebt": "Not verified; request written eligibility criteria",
  "specialties": "Company-advertised MCA negotiation; not a law firm",
  "bbb": "Operating entity Business Debt Adjusters: A-; not accredited (checked September 14, 2026)",
  "trustpilot": "Current platform aggregate not verified in this audit",
  "websiteLabel": "stopmca.com",
  "firmWebsite": "https://stopmca.com",
  "recommendedFor": "Owners comparing the documented service scope, costs and public records before choosing a provider.",
  "bestFor": [
    "Comparing a written proposal for the services described below"
  ],
  "notIdealFor": [
    "Anyone relying on guaranteed savings, timing or unverified legal representation"
  ],
  "ratings": {
    "transparency": 3,
    "results": 3.5,
    "communication": 3,
    "cost": 3.5,
    "litigation": 3
  },
  "pros": [
    "FAQ distinguishes the service from a law firm",
    "Privacy policy identifies an operating entity"
  ],
  "cons": [
    "Enrollment and service fees require a written quote",
    "Operator BBB record must not be presented as separate brand accreditation"
  ],
  "verdict": "Stop MCA states it is not a law firm and uses an attorney network when needed. Its privacy policy names Business Debt Adjusters. The BBB record below concerns that operator, not a separately accredited Stop MCA business.",
  "pricing": "The FAQ describes an enrollment fee plus a service fee related to savings. No dollar amount or percentage is specified there. Verify refund eligibility and all legal charges in the engagement.",
  "process": "The FAQ gives a company-estimated range of 2–25 months. That is not a verified completion forecast. Confirm the work schedule and creditor-contact process for the proposed case.",
  "concerns": [],
  "sourcesCheckedAt": "September 14, 2026",
  "publicQuotes": [],
  "proofPoints": [],
  "ratingNote": "Stop MCA: the existing editorial score is under evidence review. Its category assessments have not been independently substantiated. It is not a measured success rate or a fresh endorsement.",
  "sources": [
    {
      "label": "Company website and service descriptions",
      "url": "https://stopmca.com",
      "note": "FAQ discloses an enrollment fee, savings-related service fee, 2–25 month estimate and that Stop MCA is not a law firm."
    },
    {
      "label": "BBB business profile",
      "url": "https://www.bbb.org/us/nj/englewd-clfs/profile/debt-relief-services/business-debt-adjusters-0221-90179879",
      "note": "Operating entity Business Debt Adjusters: A-; not accredited. Checked September 14, 2026. This record concerns Business Debt Adjusters, the entity named in Stop MCA’s privacy policy."
    },
    {
      "label": "Stop MCA privacy policy",
      "url": "https://stopmca.com/privacy-policy",
      "note": "Identifies Business Debt Adjusters, LLC. This supports disclosing the brand relationship, not assuming identical contracts."
    }
  ]
},
  {
  "updatedAt": "2026-09-14",
  "slug": "mca-debt-advisors",
  "name": "MCA Debt Advisors",
  "shortName": "MCA Debt Advisors",
  "oneLineVerdict": "MCA Debt Advisors advertises payment restructuring. BBB lists an F grade and seven unanswered complaints. Review the public record and written engagement carefully before deciding.",
  "founded": "2020 (BBB record)",
  "hq": "Erie, Pennsylvania",
  "minDebt": "Not verified; request written eligibility criteria",
  "specialties": "Company-advertised MCA and business debt payment restructuring",
  "bbb": "F; not accredited (checked September 14, 2026)",
  "trustpilot": "Current platform aggregate not verified in this audit",
  "websiteLabel": "mcadebtadvisors.com",
  "firmWebsite": "https://www.mcadebtadvisors.com",
  "recommendedFor": "Owners comparing the documented service scope, costs and public records before choosing a provider.",
  "bestFor": [
    "Comparing a written proposal for the services described below"
  ],
  "notIdealFor": [
    "Anyone relying on guaranteed savings, timing or unverified legal representation"
  ],
  "ratings": {
    "transparency": 2,
    "results": 2.5,
    "communication": 2,
    "cost": 2.5,
    "litigation": 2.5
  },
  "pros": [
    "Identifiable company contact details",
    "Public BBB record"
  ],
  "cons": [
    "BBB F grade with seven unanswered complaints",
    "Full fees and typical results not verified"
  ],
  "verdict": "The BBB grade and unanswered complaints warrant attention. They do not independently establish every customer allegation. We removed unsourced quotations and the previous generic account of fee collection; company testimonials are not independently verified outcomes.",
  "pricing": "The homepage offers a free consultation but does not establish a complete fee schedule. Ask how payments are split between fees and creditors and what is refundable.",
  "process": "The company describes reviewing obligations, contacting creditors and proposing a revised payment structure. No standard completion time or successful-result rate was verified.",
  "publicQuotes": [],
  "concerns": [],
  "sourcesCheckedAt": "September 14, 2026",
  "proofPoints": [],
  "ratingNote": "MCA Debt Advisors: the existing editorial score is under evidence review. Its category assessments have not been independently substantiated. It is not a measured success rate or a fresh endorsement.",
  "sources": [
    {
      "label": "Company website and service descriptions",
      "url": "https://www.mcadebtadvisors.com",
      "note": "Company describes creditor contact and revised payment structures. Its displayed testimonial aggregate was not independently checked against a review platform."
    },
    {
      "label": "BBB business profile",
      "url": "https://www.bbb.org/us/pa/erie/profile/debt-relief-services/mca-debt-advisors-llc-0141-71077651",
      "note": "F; not accredited. Checked September 14, 2026. Rating reasons cite 25 complaints and seven unanswered; counts can change and are not a failure rate."
    }
  ]
},
  {
  "updatedAt": "2026-09-14",
  "slug": "mca-resolve",
  "name": "MCA Resolve",
  "shortName": "MCA Resolve",
  "oneLineVerdict": "MCA Resolve’s website redirects to DebtResolvePro. BBB retains a separate MCA Resolve LLC profile with a B grade and no accreditation. Confirm the contracting entity before treating the brands as interchangeable.",
  "founded": "2019 (BBB record)",
  "hq": "Delray Beach, Florida (BBB record)",
  "minDebt": "Not verified; request written eligibility criteria",
  "specialties": "Historical MCA Resolve listing; current destination advertises business debt negotiation",
  "bbb": "B; not accredited (checked September 14, 2026)",
  "trustpilot": "Current platform aggregate not verified in this audit",
  "websiteLabel": "mcaresolve.com",
  "firmWebsite": "https://mcaresolve.com",
  "recommendedFor": "Owners comparing the documented service scope, costs and public records before choosing a provider.",
  "bestFor": [
    "Comparing a written proposal for the services described below"
  ],
  "notIdealFor": [
    "Anyone relying on guaranteed savings, timing or unverified legal representation"
  ],
  "ratings": {
    "transparency": 2,
    "results": 2,
    "communication": 2.5,
    "cost": 3,
    "litigation": 2
  },
  "pros": [
    "Historical BBB record remains available",
    "Current website destination can be checked"
  ],
  "cons": [
    "Brand and contracting-entity continuity not verified",
    "BBB complaints require review in their original context"
  ],
  "verdict": "A website redirect is observable, but it does not prove legal succession or who is responsible for an existing contract. BBB cites complaints for MCA Resolve LLC. We removed unlinked quotations and claims that every engagement follows the same complaint pattern.",
  "pricing": "The current destination did not establish a complete fee schedule in the homepage reviewed. Existing clients should consult their signed MCA Resolve agreement; new applicants should confirm the entity and all charges.",
  "process": "The destination advertises a free assessment and MCA resolution services. Do not infer that its process, legal entity or terms match an older MCA Resolve contract.",
  "publicQuotes": [],
  "concerns": [],
  "sourcesCheckedAt": "September 14, 2026",
  "proofPoints": [],
  "ratingNote": "MCA Resolve: the existing editorial score is under evidence review. Its category assessments have not been independently substantiated. It is not a measured success rate or a fresh endorsement.",
  "sources": [
    {
      "label": "Company website and service descriptions",
      "url": "https://mcaresolve.com",
      "note": "Opening mcaresolve.com redirected to debtrespro.com on September 14, 2026. The destination markets MCA resolution; legal succession was not established."
    },
    {
      "label": "BBB business profile",
      "url": "https://www.bbb.org/us/fl/delray-beach/profile/debt-relief-services/mca-resolve-llc-0633-92028391",
      "note": "B; not accredited. Checked September 14, 2026. Rating reasons cite 23 complaints for MCA Resolve LLC; this is not a record for every business using the destination brand."
    },
    {
      "label": "Current website destination",
      "url": "https://debtrespro.com/",
      "note": "Markets services as DebtResolvePro. A domain redirect alone does not establish a transfer of contractual obligations."
    }
  ]
},
  {
  "updatedAt": "2026-09-14",
  "slug": "national-credit-partners",
  "name": "National Credit Partners",
  "shortName": "National Credit Partners",
  "oneLineVerdict": "National Credit Partners advertises business debt modification and restructuring. BBB lists A+ accreditation. Confirm fees, state availability and any legal services in the written proposal.",
  "founded": "2018 (BBB record)",
  "hq": "Costa Mesa, California",
  "minDebt": "Not verified; request written eligibility criteria",
  "specialties": "Company-advertised business debt modification and restructuring",
  "bbb": "A+; accredited (checked September 14, 2026)",
  "trustpilot": "Current platform aggregate not verified in this audit",
  "websiteLabel": "nationalcreditpartners.com",
  "firmWebsite": "https://nationalcreditpartners.com",
  "recommendedFor": "Owners comparing the documented service scope, costs and public records before choosing a provider.",
  "bestFor": [
    "Comparing a written proposal for the services described below"
  ],
  "notIdealFor": [
    "Anyone relying on guaranteed savings, timing or unverified legal representation"
  ],
  "ratings": {
    "transparency": 4,
    "results": 4,
    "communication": 4,
    "cost": 3.5,
    "litigation": 3.5
  },
  "pros": [
    "Matching accredited BBB profile",
    "Public fee and availability FAQ"
  ],
  "cons": [
    "No full public fee schedule established",
    "Litigation representation and typical outcomes not verified"
  ],
  "verdict": "BBB lists a 2018 business start and accreditation since November 2018. These identify the business but do not establish results. The homepage directs applicants to a consultation for fees; prior quotations and hidden-fee allegations lacked adequate citations and were removed.",
  "pricing": "The fee FAQ directs customers to a free consultation rather than publishing a full schedule. Obtain total program costs, cancellation rules and any separate attorney costs.",
  "process": "The provider markets case-specific debt modification and says availability can vary by state. Ask for the covered creditors, proposed changes and professional responsibilities.",
  "publicQuotes": [],
  "concerns": [],
  "sourcesCheckedAt": "September 14, 2026",
  "proofPoints": [],
  "ratingNote": "National Credit Partners: the existing editorial score is under evidence review. Its category assessments have not been independently substantiated. It is not a measured success rate or a fresh endorsement.",
  "sources": [
    {
      "label": "Company website and service descriptions",
      "url": "https://nationalcreditpartners.com",
      "note": "Homepage FAQ directs applicants to a consultation for pricing and says programs may vary by state. Marketing claims are not independently audited results."
    },
    {
      "label": "BBB business profile",
      "url": "https://www.bbb.org/us/ca/costa-mesa/profile/corporate/national-credit-partners-1126-1000056604",
      "note": "A+; accredited. Checked September 14, 2026. Accreditation and grades are distinct from customer-review averages and are not guarantees of outcomes."
    }
  ]
},
  {
    updatedAt: "2026-09-11",
    slug: "rise-alliance",
    ratingNote: "The existing editorial score is under evidence review. Its category assessments have not been independently substantiated; it is not a measured success rate or a fresh endorsement.",
    name: "Rise Alliance",
    shortName: "Rise Alliance",
    oneLineVerdict:
      "Rise Alliance describes business debt and personal-guarantee resolution and identifies itself as part of Second Wind Consultants. Verify the contracting entity, fees and legal scope; no standard settlement timeline is established here.",
    founded: "Second Wind Consultants brand",
    hq: "New York, New York",
    minDebt: "Varies",
    specialties: "MCA settlement, cash-flow relief, guaranty resolution",
    bbb: "Standalone profile not verified; parent accreditation must not be treated as its own",
    trustpilot: "No current Trustpilot aggregate verified in this update",
    websiteLabel: "risealliance.com",
    firmWebsite: "https://risealliance.com",
    recommendedFor:
      "Owners comparing a business restructuring proposal with MCA settlement alternatives.",
    bestFor: [
  "Owners seeking a proposal for business debt and personal guarantees",
  "Owners comparing related Second Wind and Rise Alliance offerings"
],
    notIdealFor: [
  "Owners seeking guaranteed savings or timing",
  "Owners who have not established which entity and professionals will perform the work"
],
    ratings: {
      transparency: 3.5,
      results: 4,
      communication: 4,
      cost: 3.5,
      litigation: 3.5,
    },
    pros: [
  "Publicly identifies its Second Wind relationship",
  "Describes business debt and personal-guarantee services",
  "Provides a contact route for an individual proposal"
],
    cons: [
  "No itemized fee schedule found on the homepage reviewed",
  "No independently verified standard settlement duration",
  "Confirm legal scope and contracting entity rather than assuming parent credentials apply"
],
    verdict:
      "Rise Alliance identifies itself as part of Second Wind Consultants. Treat the two as related options when comparing proposals. We removed the previous two-to-eight-week claim and blended Google/Birdeye review total because this update did not establish adequate evidence for them. Company testimonials do not establish a typical outcome.",
    pricing:
      "No itemized fee schedule was found on the homepage reviewed. Ask for total fees, creditor payments, cancellation provisions and any separate legal charges before signing.",
    process:
      "The company describes creditor engagement, debt resolution and subsequent business consulting. Request a case-specific schedule and written explanation of what happens if a creditor declines. No standard settlement duration has been independently verified.",
    publicQuotes: [],
    concerns: [],
  sources: [
  {
    "label": "Rise Alliance: services and relationship",
    "url": "https://risealliance.com/",
    "note": "Company describes business debt resolution and states that it is part of Second Wind Consultants. Promotional results are not verified typical outcomes."
  },
  {
    "label": "Formation announcement",
    "url": "https://secondwindconsultants.com/resource/second-wind-consultants-and-polaris-business-advisors-unite-to-form-rise-alliance/",
    "note": "Second Wind describes the combination with Polaris Business Advisors that formed Rise Alliance."
  }
],
},
  {
  "updatedAt": "2026-09-14",
  "slug": "delancey-street",
  "name": "Delancey Street",
  "shortName": "Delancey Street",
  "oneLineVerdict": "Delancey Street advertises MCA and business debt negotiation. BBB lists the matching LLC as Not Rated and not accredited, with a 2023 business start. Verify fees and who provides legal work.",
  "founded": "2023 (BBB record)",
  "hq": "New York, New York",
  "minDebt": "Not verified; request written eligibility criteria",
  "specialties": "Company-advertised MCA, SBA and stacked-debt negotiation",
  "bbb": "Not Rated; not accredited (checked September 14, 2026)",
  "trustpilot": "Current platform aggregate not verified in this audit",
  "websiteLabel": "delanceystreet.com",
  "firmWebsite": "https://www.delanceystreet.com",
  "recommendedFor": "Owners comparing the documented service scope, costs and public records before choosing a provider.",
  "bestFor": [
    "Comparing a written proposal for the services described below"
  ],
  "notIdealFor": [
    "Anyone relying on guaranteed savings, timing or unverified legal representation"
  ],
  "ratings": {
    "transparency": 3.5,
    "results": 3.5,
    "communication": 4,
    "cost": 4,
    "litigation": 3.5
  },
  "pros": [
    "Public service descriptions",
    "BBB profile linked to the company website"
  ],
  "cons": [
    "Not Rated and not BBB accredited",
    "Promotional volume and legal-service claims not independently verified"
  ],
  "verdict": "The company publishes service and settlement-volume claims. We have not independently audited those outcomes or attorney arrangements. BBB’s linked entity record starts in 2023, which does not substantiate the 2018 founding date previously shown here.",
  "pricing": "The previously stated 15–20% fee and universal no-fee-until-settlement terms were not adequately substantiated in this audit. Ask for the exact fee basis, trigger, cancellation provisions and separate legal costs.",
  "process": "The site offers consultation and negotiation services. Establish a case-specific schedule and named legal professionals rather than relying on promotional response-time or savings figures.",
  "publicQuotes": [],
  "concerns": [],
  "sourcesCheckedAt": "September 14, 2026",
  "proofPoints": [],
  "ratingNote": "Delancey Street: the existing editorial score is under evidence review. Its category assessments have not been independently substantiated. It is not a measured success rate or a fresh endorsement.",
  "sources": [
    {
      "label": "Company website and service descriptions",
      "url": "https://www.delanceystreet.com",
      "note": "Homepage markets MCA, SBA and stacked-debt services. Its settlement volumes, testimonials and response-time claims are not verified typical outcomes."
    },
    {
      "label": "BBB business profile",
      "url": "https://www.bbb.org/us/ny/new-york/profile/debt-relief-services/delancey-street-llc-0121-87176359",
      "note": "Not Rated; not accredited. Checked September 14, 2026. Accreditation and grades are distinct from customer-review averages and are not guarantees of outcomes."
    }
  ]
},
  {
  "updatedAt": "2026-09-14",
  "slug": "national-debt-relief",
  "name": "National Debt Relief",
  "shortName": "National Debt Relief",
  "oneLineVerdict": "National Debt Relief offers unsecured-debt settlement, including some business-related debts. BBB lists A+ accreditation. Eligibility for a specific MCA and the scope of litigation help must be confirmed directly.",
  "founded": "Not reverified in this audit",
  "hq": "New York, New York",
  "minDebt": "Not verified; request written eligibility criteria",
  "specialties": "Unsecured-debt settlement; company materials also discuss business debt",
  "bbb": "A+; accredited (checked September 14, 2026)",
  "trustpilot": "Current platform aggregate not verified in this audit",
  "websiteLabel": "nationaldebtrelief.com",
  "firmWebsite": "https://www.nationaldebtrelief.com",
  "recommendedFor": "Owners comparing the documented service scope, costs and public records before choosing a provider.",
  "bestFor": [
    "Comparing a written proposal for the services described below"
  ],
  "notIdealFor": [
    "Anyone relying on guaranteed savings, timing or unverified legal representation"
  ],
  "ratings": {
    "transparency": 4,
    "results": 4,
    "communication": 4,
    "cost": 4,
    "litigation": 2
  },
  "pros": [
    "Matching accredited BBB profile",
    "Public information about business-related unsecured debt"
  ],
  "cons": [
    "Specific MCA eligibility not established by the reviewed material",
    "No verified MCA litigation-service scope"
  ],
  "verdict": "Its business-debt resource describes potential eligibility for business credit cards and certain unsecured loans or credit lines. This does not establish acceptance of every MCA. Our earlier blanket assertion that it never handles MCA-specific work was not adequately substantiated.",
  "pricing": "Get a written quote for the actual debts accepted. Consumer-program fee ranges should not be assumed to apply to an MCA, business debt or a separate legal engagement.",
  "process": "The company describes debt review and negotiated settlement. Creditor participation, timing and fees depend on the accepted accounts and contract; no result is guaranteed here.",
  "publicQuotes": [],
  "concerns": [],
  "sourcesCheckedAt": "September 14, 2026",
  "proofPoints": [],
  "ratingNote": "National Debt Relief: the existing editorial score is under evidence review. Its category assessments have not been independently substantiated. It is not a measured success rate or a fresh endorsement.",
  "sources": [
    {
      "label": "Company website and service descriptions",
      "url": "https://www.nationaldebtrelief.com",
      "note": "Company homepage describes unsecured-debt relief. Review-platform totals and advertised customer outcomes were not independently audited."
    },
    {
      "label": "BBB business profile",
      "url": "https://www.bbb.org/us/ny/new-york/profile/debt-relief-services/national-debt-relief-0121-110899",
      "note": "A+; accredited. Checked September 14, 2026. Accreditation and grades are distinct from customer-review averages and are not guarantees of outcomes."
    },
    {
      "label": "Company business-debt resource",
      "url": "https://www.nationaldebtrelief.com/resources/business-debt-relief/",
      "note": "Discusses business credit cards and some unsecured business loans or lines of credit. It does not establish eligibility for every MCA contract."
    }
  ]
},
  {
  "updatedAt": "2026-09-12",
  "slug": "business-debt-insider",
  "name": "Business Debt Insider",
  "shortName": "Business Debt Insider",
  "oneLineVerdict": "Business Debt Insider advertises commercial debt restructuring with flat fees. Its disclosure says legal representation requires a separate attorney agreement and separate fees; results are not guaranteed.",
  "founded": "2026 (company-reported entity formation; not independently verified)",
  "hq": "Fort Lauderdale, Florida (company-listed)",
  "minDebt": "Not verified; request eligibility criteria",
  "specialties": "Company-advertised commercial debt planning and restructuring",
  "bbb": "No matching profile located in this check; status not independently confirmed",
  "trustpilot": "No current aggregate verified in this update",
  "websiteLabel": "businessdebtinsider.com",
  "firmWebsite": "https://businessdebtinsider.com",
  "recommendedFor": "Business owners comparing a written commercial debt proposal and its full costs.",
  "bestFor": [
    "Owners seeking a written restructuring proposal",
    "Owners comparing program fees and separate legal costs"
  ],
  "notIdealFor": [
    "Owners seeking guaranteed savings",
    "Owners requiring legal representation through the consulting engagement itself"
  ],
  "ratings": {
    "transparency": 4.5,
    "results": 4.5,
    "communication": 4.5,
    "cost": 4.5,
    "litigation": 4
  },
  "pros": [
    "Publishes service and fee disclosures",
    "Explains that legal work requires a separate engagement",
    "Discloses that outcomes vary"
  ],
  "cons": [
    "No independent client-outcome audit performed",
    "Attorney fees are separate according to its disclosure",
    "Current third-party rating aggregates were not verified"
  ],
  "verdict": "Business Debt Insider identifies itself as a trade name of GRL Recovery LLC. This review relies on public company materials, not inspected client agreements or verified settlement results. Its disclosed separation of consulting and legal services matters when comparing total costs. The earlier endorsement and relative size assertions lacked independent evidence.",
  "pricing": "The homepage advertises flat fees. The disclosure says program fees depend on the debt and proposed approach, with terms confirmed before signing. Legal fees are charged separately by the attorney. No complete price schedule was verified.",
  "process": "The company describes an initial analysis and written plan followed by creditor work. Creditor acceptance, savings and completion dates were not independently verified.",
  "concerns": [],
  "sources": [
    {
      "label": "Company service descriptions",
      "url": "https://businessdebtinsider.com/",
      "note": "Company identifies GRL Recovery LLC and advertises flat fees and restructuring. These are company statements, not an outcome audit."
    },
    {
      "label": "Company disclosure",
      "url": "https://businessdebtinsider.com/disclosure",
      "note": "Describes variable program fees, separate attorney engagements and fees, and no guaranteed result. Checked September 12, 2026."
    }
  ],
  "sourcesCheckedAt": "September 12, 2026",
  "publicQuotes": [],
  "ratingNote": "Business Debt Insider: existing editorial score is under evidence review. The formula is reproducible, but the category scores have not been independently substantiated. This is not a measured success rate or a fresh endorsement."
},
];

export const RATING_WEIGHTS: Record<RatingKey, number> = {
  transparency: 20,
  results: 25,
  communication: 20,
  cost: 15,
  litigation: 20,
};

export function calculateScore(ratings: Record<RatingKey, number>): number {
  const total = (Object.keys(RATING_WEIGHTS) as RatingKey[]).reduce(
    (sum, key) => sum + ratings[key] * RATING_WEIGHTS[key],
    0,
  );
  return Math.round((total / 100 + Number.EPSILON) * 10) / 10;
}

const SCORED = REVIEW_DATA.map((review) => ({
  ...review,
  score: calculateScore(review.ratings),
}));

// Preserve the previous comparison sequence, with Coastal featured first.
// Legacy score inputs are retained for the audit trail, not published as evidence.
export const REVIEWS: Review[] = SCORED.map((review) => ({
  ...review,
  updatedAt: review.updatedAt < "2026-09-18" ? "2026-09-18" : review.updatedAt,
  sourcesCheckedAt: review.sourcesCheckedAt || "September 11, 2026",
  ratingNote: `${review.name}: numerical editorial ratings are not published because the category assessments have not been independently substantiated. Read the dated sources and service limitations. Placement is editorial, not a measured success rate.`,
  rank: 1 + [...SCORED].sort((a, b) => Number(!!b.isCoastal) - Number(!!a.isCoastal) || b.score - a.score).findIndex((r) => r.slug === review.slug),
}));

export const COASTAL = REVIEWS.find((r) => r.isCoastal)!;
export const COMPETITORS = REVIEWS.filter((r) => !r.isCoastal);

// Display positions are editorial ordering, not substantiated performance ranks.
export const RANKED = [...REVIEWS].sort((a, b) => a.rank - b.rank);

export function getReviewBySlug(slug: string) {
  return REVIEWS.find((r) => r.slug === slug);
}
