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
    updatedAt: "2026-09-11",
    slug: "regroup-partners",
    name: "Regroup Partners",
    shortName: "Regroup",
    oneLineVerdict:
      "Consolidation and restructuring firm with no upfront fees and several positive long-term client outcomes. A trust-account complaint flags the need to verify fee handling in writing.",
    founded: "2010s",
    hq: "United States",
    minDebt: "Varies",
    specialties: "MCA restructuring, settlement, consolidation, reverse consolidation",
    bbb: "Limited public BBB profile",
    trustpilot: "Mixed (small sample on independent platforms)",
    websiteLabel: "regrouppartners.com",
    firmWebsite: "https://regrouppartners.com",
    recommendedFor:
      "Owners with multiple MCAs who want a no-upfront-fee restructuring or consolidation product and can document fee handling carefully.",
    bestFor: [
      "Multi-position MCA consolidation candidates",
      "Owners who want a no-upfront-fee structure",
      "Salons, hospitality, professional services",
    ],
    notIdealFor: [
      "Active litigation cases needing in-house attorneys",
      "Owners who cannot independently verify trust-account handling",
    ],
    ratings: {
      transparency: 3.5,
      results: 4,
      communication: 4,
      cost: 4.5,
      litigation: 3,
    },
    pros: [
      "No upfront fees model",
      "Multiple positive long-term client outcomes (one client reported 39% debt reduction; another worked with them 19 months)",
      "Range of products: restructuring, settlement, consolidation, reverse consolidation",
    ],
    cons: [
      "Complaint on record alleging $12,000 in trust-account funds being mishandled",
      "Limited litigation defense capability compared to attorney-led firms",
      "Lower volume of independent third-party reviews than top-ranked firms",
    ],
    verdict:
      "Regroup Partners has done legitimate restructuring work for small businesses, with at least one publicly documented client engagement of 19 months that produced material savings. The trust-account complaint is the flag: insist on written documentation of any funds held and verify directly with creditors that scheduled payments are being made. For owners who can self-police those steps, Regroup is a credible mid-tier choice.",
    pricing:
      "No upfront fees per public materials. Owners should request a written fee schedule and an explanation of how any funds placed in trust are held and disbursed.",
    process:
      "Free initial review, expense and obligation analysis, restructuring proposal, implementation. Some engagements include trust-account funds for staged creditor payments.",
    publicQuotes: [
      {
        quote:
          "After Regroup reviewed our expenses and financial obligations they negotiated with vendors and combined everything into one simple loan, saving 39% of our debt obligations.",
        source: "Public client review (Revdex)",
        rating: 5,
        attribution: "Independent review aggregator",
      },
      {
        quote:
          "We worked with them for 19 months. They restructured our business debt and saved us considerable money. Transparency, honesty, and unwavering support throughout.",
        source: "Public client review (Revdex)",
        rating: 5,
        attribution: "Hair salon franchise owner, public review",
      },
      {
        quote:
          "My money was supposedly placed in a trust account, but when I asked for information and paperwork I was passed around to different people. They took $12,000 and I found the company dishonest.",
        source: "Public Complaint",
        rating: 1,
        attribution: "Independent review aggregator",
      },
    ],
    concerns: [
      {
        quote:
          "Trust-account handling complaint with significant claimed losses ($12K). Worth verifying fund handling in writing if engaging.",
        source: "Public review aggregator (Revdex)",
      },
    ],
  },
  {
    updatedAt: "2026-09-11",
    slug: "corporate-rescue",
    name: "Corporate Rescue Advisors",
    shortName: "Corporate Rescue Advisors",
    oneLineVerdict:
      "Software-driven restructuring playbook with positive individual reviews from a small sample size, but a serious fraud allegation in public reviews requires careful diligence before engaging.",
    founded: "2017",
    hq: "United States (national service)",
    minDebt: "$20,000+",
    specialties: "MCA restructuring, payment reduction, term extension",
    bbb: "Accredited",
    trustpilot: "4.0 across 4 reviews (very small sample)",
    websiteLabel: "corporaterescue.com",
    firmWebsite: "https://www.corporaterescue.com",
    recommendedFor:
      "Owners with smaller MCA debt who can independently verify creditor contact and fee disbursement after signing.",
    bestFor: [
      "Smaller MCA stacks ($20K to $200K)",
      "Owners who want a productized intake and clear playbook",
    ],
    notIdealFor: [
      "Active lawsuits or aggressive funder litigation",
      "Owners who cannot personally verify creditor contact mid-engagement",
    ],
    ratings: {
      transparency: 3.5,
      results: 3.5,
      communication: 4,
      cost: 3.5,
      litigation: 3,
    },
    pros: [
      "Productized restructuring approach is easy to understand",
      "Public materials describe the process clearly",
      "Individual positive reviews note professional handling and clear explanation",
    ],
    cons: [
      "Trustpilot review base is only 4 reviews — sample too small for confident pattern reading",
      "Public review alleges suspected fraud with $18K+ in withdrawals across multiple accounts and undelivered creditor contact",
      "Less depth in litigation defense than attorney-led competitors",
    ],
    verdict:
      "Corporate Rescue Advisors has individually positive reviews and a clean-looking productized model. The concern is that the publicly available review sample is very small (4 Trustpilot reviews), and one of those reviews alleges material fraud. Owners who proceed should document every fee, verify creditor contact independently within the first 30 days, and refuse instructions to stop paying creditors without written confirmation that negotiation has begun.",
    pricing:
      "Fees vary by total debt restructured. Public marketing claims payment reductions of up to 60% but should be validated against signed agreement language.",
    process:
      "Free initial review, debt analysis, restructuring proposal, implementation, ongoing support.",
    publicQuotes: [
      {
        quote:
          "Frank Venezio was very professional. He explained to me all the details and made me feel very safe.",
        source: "Trustpilot",
        rating: 5,
        attribution: "Trustpilot review (one of only 4)",
      },
      {
        quote:
          "Suspected fraud. The company withdrew over $18,000 from multiple accounts including recurring withdrawals exceeding $1,400 per week. The company did not perform the services promised and never contacted any lenders or creditors. They instructed us to stop paying creditors which caused our accounts to become delinquent.",
        source: "Trustpilot",
        rating: 1,
        attribution: "Trustpilot review (one of only 4)",
      },
    ],
    concerns: [
      {
        quote:
          "A specific allegation of $18,000+ in withdrawals across multiple accounts with no creditor contact made, plus instructions to stop paying creditors. Verify in writing before any engagement.",
        source: "Trustpilot review of Corporate Rescue Advisors",
      },
    ],
  },
  {
    updatedAt: "2026-09-11",
    slug: "eastern-financial-partners",
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
    updatedAt: "2026-09-11",
    slug: "business-debt-law-group",
    name: "Business Debt Law Group",
    shortName: "BDLG",
    oneLineVerdict:
      "Litigation-focused law firm useful for owners already sued by an MCA funder. Less efficient than combined settlement-and-defense firms for pre-litigation cases.",
    founded: "Varies by entity",
    hq: "United States",
    minDebt: "Litigation-driven",
    specialties: "MCA litigation defense, COJ vacatur, UCC defense, debt negotiation",
    bbb: "Varies",
    trustpilot: "Limited public review presence",
    websiteLabel: "businessdebtlawgroup.com",
    recommendedFor:
      "Owners already sued by a funder who need pure litigation defense and have no need for upstream negotiation.",
    bestFor: [
      "Owners served with a Confession of Judgment",
      "Cases already in active litigation",
    ],
    notIdealFor: [
      "Pre-litigation cases where settlement could resolve the issue cheaper",
      "Owners who want negotiation and legal under one fee",
    ],
    ratings: {
      transparency: 4,
      results: 4,
      communication: 3.5,
      cost: 3,
      litigation: 4.5,
    },
    pros: [
      "Genuine litigation capability for active MCA lawsuits",
      "Useful for cases where the funder has already filed",
      "Comprehensive legal services across debtor-creditor litigation",
    ],
    cons: [
      "No real upstream negotiation arm — settlement-only cases get over-lawyered",
      "Hourly billing structure can run high",
      "Owners often pay more than a combined settlement-and-defense firm would charge",
    ],
    verdict:
      "If you are already sued, defense is what you need and Business Debt Law Group can provide that. If you are pre-litigation, paying a litigation firm to negotiate is the wrong tool. The best MCA outcomes come from firms that can do both under one fee, escalating to litigation only when negotiation fails. BDLG is fine for the narrow case it serves.",
    pricing:
      "Hourly billing or case-based retainers. Litigation is expensive by nature.",
    process:
      "Engagement on a litigation matter. Defense filings, motion practice, settlement of the litigation, judgment defense.",
    concerns: [
      {
        quote:
          "Litigation-only structure means owners with negotiable cases pay litigation rates for what could have been a fixed-fee settlement.",
        source: "Industry pattern across litigation-only practices",
      },
    ],
  },
  {
    updatedAt: "2026-09-11",
    slug: "business-debt-adjusters",
    name: "Business Debt Adjusters",
    shortName: "Business Debt Adjusters",
    oneLineVerdict:
      "Long-tenured New Jersey firm with an A- rating on its BBB profile and some documented payment-reduction wins, but it is not BBB accredited and draws complaints about high-frequency phone contact and at least one lien dispute. Set written expectations on fees and contact before signing.",
    founded: "2016",
    hq: "Englewood Cliffs, New Jersey",
    minDebt: "Varies",
    specialties: "Business debt settlement, MCA and creditor negotiation",
    bbb: "A- rating, not BBB accredited; one unanswered complaint on record",
    trustpilot: "4.9 across 190 Trustpilot reviews",
    websiteLabel: "businessdebtadjusters.com",
    firmWebsite: "https://www.businessdebtadjusters.com",
    recommendedFor:
      "Owners who want an established firm and are prepared to set written expectations on contact frequency and fee handling before they sign.",
    bestFor: [
      "Owners who value a longer operating history (since 2016)",
      "Multi-creditor business debt beyond a single MCA",
    ],
    notIdealFor: [
      "Owners sensitive to high-frequency phone outreach",
      "Owners who treat BBB accreditation as a baseline requirement",
      "Owners who need every fee guaranteed in writing before any contact",
    ],
    ratings: {
      transparency: 3,
      results: 3.5,
      communication: 3,
      cost: 3.5,
      litigation: 3.5,
    },
    pros: [
      "A- rating on its BBB business profile",
      "Nearly a decade in business (since 2016)",
      "Public reviews include real payment-reduction outcomes",
    ],
    cons: [
      "Not BBB accredited despite the A- rating",
      "Complaints describe high-frequency phone outreach (multiple calls per day)",
      "At least one complaint alleges a lien was placed after assurances to the contrary",
      "Mixed employee reviews raise questions about sales practices",
    ],
    verdict:
      "Business Debt Adjusters has a longer track record than most firms in this space and its BBB profile carries an A- rating, and some clients report genuine payment reductions. The offsetting concerns are that the firm is not BBB accredited, complaints describe aggressive daily phone contact, and at least one owner alleged a lien was placed after being told it would not be. Owners who engage should get a written fee schedule, a written outcome definition, and clear limits on contact frequency before signing.",
    pricing:
      "Fee structure varies by case and is not published. Request a written fee schedule and a written description of the expected outcome before signing.",
    process:
      "Phone-led intake and consultation, engagement agreement, then creditor negotiation on the client's behalf.",
    publicQuotes: [
      {
        quote:
          "A consultant reduced our payments by roughly half and gave us the breathing room that kept the business out of bankruptcy.",
        source: "Trustpilot",
        rating: 5,
        attribution: "Trustpilot review (representative positive)",
      },
      {
        quote:
          "We were assured the lender would work with us, then a lien was placed on the business anyway.",
        source: "BBB Complaint",
        rating: 1,
        attribution: "BBB business profile complaint record",
      },
    ],
    concerns: [
      {
        quote:
          "BBB complaints describe repeated daily phone contact and, in at least one case, a lien placed on the client's business after assurances it would not happen.",
        source: "BBB business profile, Business Debt Adjusters, Englewood Cliffs NJ",
      },
    ],
  },
  {
    updatedAt: "2026-09-11",
    slug: "stop-mca",
    name: "Stop MCA",
    shortName: "Stop MCA",
    oneLineVerdict:
      "Settlement firm with aggressive marketing presence and intermittent outcomes per public commentary. Approach with diligence on fee structure and creditor-contact verification.",
    founded: "Recent entrant",
    hq: "United States",
    minDebt: "Varies",
    specialties: "MCA settlement, payment reduction marketing",
    bbb: "Limited footprint",
    trustpilot: "Mixed and limited",
    websiteLabel: "stopmca.com",
    firmWebsite: "https://stopmca.com",
    recommendedFor:
      "Owners who have already done their own diligence and are simply price-shopping after they understand the deal structure.",
    bestFor: [
      "Owners with high diligence willingness",
      "Single-MCA cases",
    ],
    notIdealFor: [
      "First-time settlement seekers who need clear disclosures up front",
      "Owners with no time to validate marketing claims",
    ],
    ratings: {
      transparency: 3,
      results: 3.5,
      communication: 3,
      cost: 3.5,
      litigation: 3,
    },
    pros: [
      "Easy to find via paid search and social",
      "Quick intake process",
    ],
    cons: [
      "Marketing claims about percentage reductions are not always tied to a written guarantee",
      "Fee structure is harder to nail down than top-ranked firms",
      "Limited public review base for outcome validation",
    ],
    verdict:
      "Marketing-led firms in any consumer category tend to underdeliver against pitch. Owners who go this route should insist on a written fee schedule, a written description of what success looks like, and a named case manager before signing anything.",
    pricing:
      "Owners report fee structures that vary case to case. Get the fee schedule in writing before signing.",
    process:
      "Inbound funnel from paid marketing, sales call, signed agreement, settlement attempt.",
    concerns: [
      {
        quote:
          "Marketing-driven firms in adjacent debt-relief categories have historically attracted regulatory and AG attention when fee disclosures are weak.",
        source: "Industry pattern, prior FTC and state AG actions in adjacent categories",
      },
    ],
  },
  {
    updatedAt: "2026-09-11",
    slug: "mca-debt-advisors",
    name: "MCA Debt Advisors",
    shortName: "MCA Debt Advisors",
    oneLineVerdict:
      "Pennsylvania firm carrying an F rating on its BBB profile with 26 complaints on file (seven left unanswered) and public reviews alleging large fees for little delivered work. High-caution; verify every fee and creditor contact independently.",
    founded: "2020",
    hq: "Erie, Pennsylvania",
    minDebt: "Varies",
    specialties: "MCA debt settlement, creditor negotiation",
    bbb: "F rating, not accredited; 26 complaints on file, 7 unanswered",
    trustpilot: "Mixed; roughly 120 reviews on Reviews.io with recurring fee and delivery complaints",
    websiteLabel: "mcadebtadvisors.com",
    firmWebsite: "https://www.mcadebtadvisors.com",
    warning:
      "We include this firm for completeness and brand-defense. Its BBB business profile carries an F rating with 26 complaints on file, seven of them left unanswered, alleging large fees for little delivered work. Owners considering this firm should read the BBB complaint record in full before any engagement.",
    recommendedFor:
      "We do not currently recommend MCA Debt Advisors based on the BBB rating and complaint pattern.",
    bestFor: [],
    notIdealFor: [
      "Owners who need clear, written fee disclosures up front",
      "Owners who cannot absorb fees paid with no guaranteed outcome",
      "First-time settlement seekers",
    ],
    ratings: {
      transparency: 2,
      results: 2.5,
      communication: 2,
      cost: 2.5,
      litigation: 2.5,
    },
    pros: [
      "Has an established web presence and intake process",
      "Some positive outcome reviews exist among the roughly 120 on Reviews.io",
    ],
    cons: [
      "F rating on its BBB business profile",
      "23 BBB complaints on file, seven left unanswered by the business",
      "Complaints allege large fees (reports of tens of thousands) for little delivered work",
      "Reports of poor communication and unreturned emails during engagements",
    ],
    verdict:
      "We do not recommend MCA Debt Advisors at this time. The firm carries an F rating on its BBB profile with 26 complaints, seven unanswered, and the recurring theme is large fees collected for limited or no delivered work. We document the pattern here so owners searching for MCA Debt Advisors find it before they sign rather than after. Anyone who still proceeds should get a written fee schedule, a written outcome definition, and should verify creditor contact independently at every step.",
    pricing:
      "Fees are not published and complaints describe large sums collected, sometimes as ACH drafts with a short two-day dispute window. Get a written fee schedule and outcome definition before signing.",
    process:
      "Intake and consultation, engagement agreement with ACH-drafted fees, then negotiation attempts. Some complaints note the short two-day ACH dispute window.",
    publicQuotes: [
      {
        quote:
          "They took tens of thousands in fees over months and could not point to a single settled account or documented creditor contact.",
        source: "BBB Complaint",
        rating: 1,
        attribution: "BBB business profile complaint record",
      },
    ],
    concerns: [
      {
        quote:
          "The BBB business profile carries an F rating with 26 complaints, seven unanswered, describing large fees collected for limited or no delivered results.",
        source: "BBB business profile, MCA Debt Advisors LLC, Erie PA",
      },
    ],
  },
  {
    updatedAt: "2026-09-11",
    slug: "mca-resolve",
    name: "MCA Resolve",
    shortName: "MCA Resolve",
    oneLineVerdict:
      "Significant pattern of negative public reviews and BBB complaints alleging undelivered services, fees taken without creditor contact, and instructions that put clients in default. We do not recommend.",
    founded: "Recent entrant",
    hq: "Delray Beach, Florida",
    minDebt: "Varies",
    specialties: "MCA debt settlement, restructuring",
    bbb: "23 BBB complaints on record at time of review",
    trustpilot: "2.7 across 86 Trustpilot reviews",
    websiteLabel: "mcaresolve.com",
    firmWebsite: "https://mcaresolve.com",
    warning:
      "We include this firm for completeness and brand-defense. Multiple public reviews and 23 BBB complaints describe undelivered services and fees taken without creditor contact. Owners considering this firm should research the BBB complaint record carefully before any engagement.",
    recommendedFor:
      "We do not currently recommend MCA Resolve based on the pattern of public complaints.",
    bestFor: [],
    notIdealFor: [
      "All owners until the public complaint pattern resolves",
    ],
    ratings: {
      transparency: 2,
      results: 2,
      communication: 2.5,
      cost: 3,
      litigation: 2,
    },
    pros: [
      "Has a public-facing presence and intake process",
    ],
    cons: [
      "23 BBB complaints on record at time of review",
      "Multiple reviews allege fees taken with no creditor contact made",
      "Reports of being instructed to stop paying creditors, leading to default and lost fees",
      "Recurring use of words like 'scam' in public reviews",
    ],
    verdict:
      "We do not recommend MCA Resolve at this time. The pattern across 23 BBB complaints and Trustpilot reviews is consistent: clients report being told their debt would go into default to use the service, paying substantial fees, and then discovering the firm never contacted creditors. We include this review on the site so that owners searching for MCA Resolve can find the public complaint pattern documented in one place rather than discover it after signing.",
    pricing:
      "Public complaints describe fees taken in full with no creditor contact subsequently made. Verify any fee handling and creditor contact independently before any engagement.",
    process:
      "Per public complaints, the typical pattern is: intake, instruction to stop paying creditors, fees collected, no creditor contact verified, contract canceled if a payment is missed.",
    publicQuotes: [
      {
        quote:
          "I was told my debt would go into default to use this service and that they would contact creditors. When I contacted creditors directly they said they had no business dealings with MCA Resolve.",
        source: "BBB Complaint",
        rating: 1,
        attribution: "BBB business profile complaint record",
      },
      {
        quote:
          "I paid substantial amounts taken entirely as fees with no creditors contacted. With all the lies that MCA Resolve stated about their services they took thousands of dollars for complete lies.",
        source: "BBB Complaint",
        rating: 1,
        attribution: "BBB business profile complaint record",
      },
      {
        quote:
          "I was canceled after one missed payment, lost thousands in fees while still owing all my original debt, with no proof the company contacted creditors.",
        source: "Public review",
        rating: 1,
        attribution: "Public review platform",
      },
    ],
    concerns: [
      {
        quote:
          "23 BBB complaints on record describing a consistent pattern: instruction to default, fees collected, no creditor contact, contract canceled on first missed payment.",
        source: "BBB business profile, MCA Resolve LLC, Delray Beach FL",
      },
    ],
  },
  {
    updatedAt: "2026-09-11",
    slug: "national-credit-partners",
    name: "National Credit Partners",
    shortName: "National Credit Partners",
    oneLineVerdict:
      "One of the more established names in business debt relief (A+ BBB, accredited since 2018), focused on debt modification and restructuring more than attorney-led MCA settlement. Reviews are mostly positive with a few complaints about fee clarity.",
    founded: "2018",
    hq: "Costa Mesa, California",
    minDebt: "Varies",
    specialties: "Business debt modification, MCA restructuring, creditor negotiation",
    bbb: "A+ rating, BBB accredited since 2018",
    trustpilot: "3.8 across 8 Trustpilot reviews; thin base, with occasional fee-transparency complaints",
    websiteLabel: "nationalcreditpartners.com",
    firmWebsite: "https://nationalcreditpartners.com",
    recommendedFor:
      "Owners who want an established, BBB-accredited firm for broad business debt modification and are comfortable clarifying the fee math in writing before signing.",
    bestFor: [
      "Owners who value an A+ BBB, accredited firm",
      "Broad business debt beyond a single MCA",
      "Restructuring and modification rather than pure litigation",
    ],
    notIdealFor: [
      "Owners who specifically need attorney-led COJ or lawsuit defense",
      "Owners who want fees tied strictly to settlement savings",
    ],
    ratings: {
      transparency: 4,
      results: 4,
      communication: 4,
      cost: 3.5,
      litigation: 3.5,
    },
    pros: [
      "A+ BBB rating, accredited since 2018",
      "Roughly eight years operating with an established track record",
      "Mostly positive client reviews citing real creditor-payoff help",
      "Broad business-debt modification capability",
    ],
    cons: [
      "Positioned around debt modification and consulting rather than attorney-led MCA settlement",
      "Some reviews cite hidden fees and disputed contract calculations",
      "Not primarily a litigation or Confession-of-Judgment defense shop",
    ],
    verdict:
      "National Credit Partners is one of the more established, credibly-rated firms in this space, with an A+ BBB profile and accreditation since 2018. Its model leans toward business debt modification and restructuring rather than the attorney-led settlement and litigation defense that hard MCA cases often require, and a minority of reviews flag fee clarity. Owners should get the full fee math and the scope (modification vs settlement vs litigation) in writing before signing. For pure MCA distress with lawsuit or COJ risk, an attorney-led firm is a closer fit.",
    pricing:
      "Fees are set per case and not published. Because a few reviews mention disputed calculations, request the complete fee schedule and a worked example in writing before signing.",
    process:
      "Consultation and debt analysis, a proposed modification and restructuring plan, then creditor negotiation and program management.",
    publicQuotes: [
      {
        quote:
          "They went beyond the call of duty to help pay our creditors off and were instrumental in helping save the company.",
        source: "Trustpilot",
        rating: 5,
        attribution: "Trustpilot review",
      },
      {
        quote:
          "I ran into hidden fees and totally wrong calculations on the contracts.",
        source: "Trustpilot",
        rating: 2,
        attribution: "Trustpilot negative review",
      },
    ],
    concerns: [
      {
        quote:
          "A minority of reviews allege hidden fees and incorrect contract calculations, though most feedback is positive.",
        source: "Trustpilot reviews and BBB profile (Costa Mesa CA)",
      },
    ],
  },
  {
    updatedAt: "2026-09-11",
    slug: "rise-alliance",
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
    updatedAt: "2026-09-11",
    slug: "delancey-street",
    name: "Delancey Street",
    shortName: "Delancey Street",
    oneLineVerdict:
      "Attorney-network business debt firm (NYC) handling MCA, SBA, and stacked debt with performance-based fees, but with no BBB rating and a thin independent review base to verify outcomes.",
    founded: "2018",
    hq: "New York, New York",
    minDebt: "Around $10,000 enrolled",
    specialties: "MCA and business debt settlement, attorney network, stacked-debt restructuring",
    bbb: "Not BBB accredited; BBB has insufficient information to issue a rating",
    trustpilot: "3.9 across 26 Trustpilot reviews",
    websiteLabel: "delanceystreet.com",
    firmWebsite: "https://www.delanceystreet.com",
    recommendedFor:
      "Owners who want an attorney-network model with fees contingent on settlement and are comfortable with a firm that has a limited independent review footprint.",
    bestFor: [
      "Owners who want fees only after a settlement is reached",
      "MCA plus SBA or other stacked business debt",
      "Attorney-coordinated negotiation",
    ],
    notIdealFor: [
      "Owners who want an established BBB rating to check",
      "Owners who want a large independent review base before signing",
    ],
    ratings: {
      transparency: 3.5,
      results: 3.5,
      communication: 4,
      cost: 4,
      litigation: 3.5,
    },
    pros: [
      "Performance-based fees (15 to 20% of enrolled debt), nothing until a settlement is approved",
      "Attorney-network model coordinating legal leverage",
      "Public claim of $100M+ settled across 1,000+ cases since 2018",
    ],
    cons: [
      "No BBB rating (insufficient information on file)",
      "Thin independent review base (roughly 26 Trustpilot reviews) to verify claims",
      "Fee is a percent of enrolled debt, not of savings, so model the total cost",
    ],
    verdict:
      "Delancey Street runs an attorney-network model with performance-based fees, which is structurally sound, and it publishes strong volume claims ($100M+ across 1,000+ cases). The caution is verification: there is no BBB rating and only a small independent review base, so its results are harder to confirm from the outside than higher-volume, better-documented firms. Owners should get the fee (a percentage of enrolled debt, not savings) modeled in writing and confirm the no-fee-until-settlement terms.",
    pricing:
      "Charges roughly 15 to 20 percent of enrolled debt, with no fee until a settlement is negotiated and approved. Because the fee is a percent of enrolled debt rather than savings, model the total dollar cost before signing.",
    process:
      "Consultation, enrollment, attorney-coordinated negotiation with funders, then settlement. No fee is charged until a settlement is approved.",
    publicQuotes: [
      {
        quote:
          "They were patient and guided us through the whole debt process without pressure.",
        source: "Trustpilot",
        rating: 5,
        attribution: "Trustpilot review (limited review base)",
      },
    ],
    concerns: [
      {
        quote:
          "No BBB rating on file and only a small independent review base, so outcome and volume claims are harder to verify externally.",
        source: "BBB profile (no rating) and Trustpilot",
      },
    ],
  },
  {
    updatedAt: "2026-09-11",
    slug: "national-debt-relief",
    name: "National Debt Relief",
    shortName: "National Debt Relief",
    oneLineVerdict:
      "A major, highly-rated consumer debt-settlement company (A+ BBB, 4.7 across 44,900+ reviews), but it does not handle MCA-specific work, no COJ defense, court motions, or funder litigation, so it is the wrong tool for active merchant cash advance distress.",
    founded: "2009",
    hq: "New York, New York",
    minDebt: "Around $7,500 (unsecured debt)",
    specialties: "Consumer and unsecured debt settlement (not MCA-specific)",
    bbb: "A+ rating; one of the largest debt-settlement firms",
    trustpilot: "4.7 across 44,900+ Trustpilot reviews",
    websiteLabel: "nationaldebtrelief.com",
    firmWebsite: "https://www.nationaldebtrelief.com",
    recommendedFor:
      "Owners whose problem is mainly unsecured or consumer debt (credit cards, lines of credit) rather than merchant cash advances. For MCA-specific distress, choose an MCA specialist.",
    bestFor: [
      "Consumers and owners with unsecured, non-MCA debt",
      "People who want a very large, established, A+ firm",
      "Credit card and line-of-credit settlement",
    ],
    notIdealFor: [
      "Owners in active MCA distress needing settlement or defense",
      "Anyone facing a Confession of Judgment, frozen account, or funder lawsuit",
      "Owners who need court motions or MCA-specific litigation",
    ],
    ratings: {
      transparency: 4,
      results: 4,
      communication: 4,
      cost: 4,
      litigation: 2,
    },
    pros: [
      "A+ BBB rating and a 4.7 Trustpilot average across 44,900+ reviews",
      "Over $1B settled and 550,000+ clients, a huge, proven operation",
      "Strong fit for unsecured and consumer debt",
    ],
    cons: [
      "Does not handle MCA-specific work: no COJ challenge, no court motions, no funder litigation",
      "Not built for active merchant cash advance distress",
      "Owners with MCA problems would still need a separate MCA specialist",
    ],
    verdict:
      "National Debt Relief is a genuinely strong, highly-rated company, but for the wrong problem. It is built for consumer and unsecured debt settlement at massive scale, and it explicitly does not challenge Confessions of Judgment, file court motions, or handle MCA funder litigation. If your core issue is merchant cash advance debt, especially with lawsuit or COJ risk, National Debt Relief is not the right firm and you would want an MCA specialist. We rank it here because owners search it, not because it competes for MCA cases.",
    pricing:
      "Typically 15 to 25 percent of enrolled debt on settled consumer accounts, with no upfront fees. Note this pricing is for unsecured debt programs, not MCA settlement.",
    process:
      "Enroll unsecured debts, pause payments into a dedicated account, and negotiate settlements over 24 to 48 months. This is a consumer-debt process, not an MCA workout.",
    publicQuotes: [
      {
        quote:
          "They settled my unsecured accounts for far less than I owed and kept me updated the whole way.",
        source: "Trustpilot",
        rating: 5,
        attribution: "Trustpilot review aggregate (44,900+ reviews, 4.7 average)",
      },
    ],
    concerns: [
      {
        quote:
          "Explicitly does not handle MCA-specific work, no Confession of Judgment defense, court motions, or funder litigation, so it does not fit active MCA distress.",
        source: "Company service scope and category reviews",
      },
    ],
  },
  {
    updatedAt: "2026-09-11",
    slug: "business-debt-insider",
    name: "Business Debt Insider",
    shortName: "Business Debt Insider",
    oneLineVerdict:
      "A flat-fee restructuring practice that folds stacked MCA debt into one weekly payment, with no new loan and no bankruptcy filing. A strong, owner-friendly model, newer and smaller than the category's largest firms.",
    founded: "Fort Lauderdale, Florida (GRL Recovery LLC)",
    hq: "Fort Lauderdale, Florida",
    minDebt: "Varies",
    specialties: "MCA restructuring, debt relief, single weekly payment consolidation",
    bbb: "Newer firm; flat-fee, documented agreements (limited BBB footprint to date)",
    trustpilot: "Limited public review footprint as a newer firm",
    websiteLabel: "businessdebtinsider.com",
    firmWebsite: "https://businessdebtinsider.com",
    recommendedFor:
      "Owners who want a flat-fee plan that folds stacked MCA debt into one weekly payment without a new loan or a bankruptcy filing.",
    bestFor: [
      "Owners who want one weekly payment instead of daily MCA debits",
      "Businesses that want to keep operating, with no new loan and no bankruptcy",
      "Owners who want a flat fee and a written plan before any engagement fee",
    ],
    notIdealFor: [
      "Owners who specifically want in-house attorneys and litigation under one roof",
      "Owners who want the single largest, longest-tenured firm by settlement volume",
    ],
    ratings: {
      transparency: 4.5,
      results: 4.5,
      communication: 4.5,
      cost: 4.5,
      litigation: 4,
    },
    pros: [
      "Flat fees disclosed in writing before any engagement fee is charged",
      "Folds stacked business debt into a single weekly payment",
      "No new loan and no bankruptcy filing",
      "Free written analysis of total outflow and exposure up front",
    ],
    cons: [
      "Newer and smaller than the category's longest-tenured firms",
      "Not a law firm; coordinates with outside counsel the client retains for litigation",
      "Limited public review footprint to verify outcomes independently",
    ],
    verdict:
      "Business Debt Insider runs the kind of model we like to see: a free written analysis first, then a flat fee and a single weekly payment that folds in the stacked advances, with no new loan and no bankruptcy filing. It is transparent that it is not a lender and not a law firm, and it coordinates with outside counsel when a matter needs litigation. The main caveats are that it is newer and smaller than the largest firms in this ranking, and its public review footprint is still limited, so ask for written references and a clear fee schedule. For owners who want one manageable payment and a plan they can read before they sign, it is a credible choice.",
    pricing:
      "Flat fees, documented in writing before any engagement fee is charged. No contingency and no percentage-of-enrolled-debt model.",
    process:
      "Free written analysis of total outflow and exposure, then relief on the daily debits, a restructured single weekly payment, or settlement, depending on what the business can support.",
    concerns: [
      {
        quote:
          "A newer and smaller firm than the category leaders, with a limited independent review footprint, so verify references and get the fee schedule in writing.",
        source: "Firm disclosures and public footprint at time of review",
      },
    ],
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

// Equal published scores share a rank; no editorial rank overrides.
export const REVIEWS: Review[] = SCORED.map((review) => ({
  ...review,
  rank: 1 + SCORED.filter((other) => other.score > review.score).length,
}));

export const COASTAL = REVIEWS.find((r) => r.isCoastal)!;
export const COMPETITORS = REVIEWS.filter((r) => !r.isCoastal);

// Leaderboard order is driven by the rank field, not array order, so entries
// can be appended anywhere in REVIEWS and still render in ranked position.
export const RANKED = [...REVIEWS].sort((a, b) => a.rank - b.rank);

export function getReviewBySlug(slug: string) {
  return REVIEWS.find((r) => r.slug === slug);
}
