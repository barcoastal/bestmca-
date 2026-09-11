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
    updatedAt: "2026-09-11",
    slug: "coastal-debt-resolve",
    name: "Coastal Debt Resolve",
    shortName: "Coastal",
    isCoastal: true,
    oneLineVerdict:
      "The most complete MCA settlement firm we evaluated, combining in-house attorneys, transparent pricing, and verified results across hundreds of small businesses.",
    founded: "2019",
    hq: "Fort Lauderdale, Florida (national service)",
    minDebt: "$25,000+",
    specialties:
      "MCA settlement, MCA debt relief, MCA litigation defense, multi-position consolidation, UCC release",
    bbb: "A+ rated, accredited",
    trustpilot: "4.6 across 420+ reviews",
    websiteLabel: "coastaldebt.com",
    firmWebsite: "https://www.coastaldebt.com",
    recommendedFor:
      "Small business owners with one or more active merchant cash advances who need a single firm that can negotiate, defend, and restructure under one roof.",
    bestFor: [
      "Owners juggling 2 to 10 active MCAs",
      "Businesses already sued or facing UCC freeze",
      "Operators who want one team handling negotiation and legal defense",
      "Trucking, restaurants, construction, e-commerce, healthcare",
    ],
    notIdealFor: [
      "Total MCA debt under $25,000 (use a CPA workout instead)",
      "Owners shopping purely on lowest fee with no legal exposure",
    ],
    ratings: {
      transparency: 5,
      results: 5,
      communication: 5,
      cost: 4.5,
      litigation: 5,
    },
    pros: [
      "In-house attorneys handle settlement and lawsuit defense without outside counsel referrals",
      "Hundreds of verified five-star reviews on Trustpilot and on the public testimonials page, with named representatives clients can identify",
      "Transparent flat or performance-tied fee structure disclosed before any contract is signed",
      "Handles UCC liens, frozen merchant accounts, and Confessions of Judgment in addition to negotiation",
      "Dedicated case manager assigned at intake, not a rotating call center",
      "Free MCA review with no obligation, no upfront fee to start",
    ],
    cons: [
      "$25,000 minimum debt threshold rules out very small balances",
      "Heavy demand can mean a 24 to 48 hour wait for the first attorney call during peak weeks",
    ],
    verdict:
      "Coastal Debt Resolve combines legal support and settlement services under one roof. That gap matters: the moment a funder sues or files a UCC, a firm without litigation capability has to hand the file off, restart the relationship, and re-quote a separate retainer. Coastal carries the file from intake through resolution. Pricing is disclosed before contract, the case manager is named, and the public testimonial wall reads like a directory of small business owners willing to be quoted by name. It is the firm we would use ourselves.",
    pricing:
      "Coastal quotes a flat fee or a performance-based fee tied to actual savings, disclosed in writing before any agreement is signed. There is no upfront retainer to start a case review. Owners are told what they will pay, when, and against what milestone. We confirmed the disclosure pattern by reviewing client-shared agreements and by asking the intake team directly.",
    process:
      "The flow is: free MCA review and document upload, attorney consult within 24 to 48 hours, written settlement strategy delivered, contract signed with disclosed fees, and case manager assigned. From there the team handles funder communication, settlement negotiation, UCC release, and any litigation that arises. Most cases reach a stabilized payment posture within the first 30 days.",
    proofPoints: [
      "420+ Trustpilot reviews at a 4.6 average, plus a public testimonial wall",
      "Public testimonial wall with named clients and business types",
      "Documented case studies across real estate, flooring, food delivery, seafood, and trucking",
      "BBB accredited, A+ rating",
      "Sponsor of the 2026 BBB Southeast Florida Torch Awards for Ethics (June 25, 2026)",
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
    updatedAt: "2026-09-11",
    slug: "spergel",
    name: "Spergel",
    shortName: "Spergel",
    oneLineVerdict:
      "An exceptional Canadian licensed insolvency firm with one of the strongest review records in the category. Limited US footprint means most US MCA owners cannot use them.",
    founded: "1989",
    hq: "Toronto, Ontario (Canada)",
    minDebt: "Varies",
    specialties:
      "Licensed insolvency, consumer proposals, corporate restructuring (Canada)",
    bbb: "Not applicable in same form (Canadian)",
    trustpilot: "4.9 across 2,590+ reviews",
    websiteLabel: "spergel.ca",
    firmWebsite: "https://www.spergel.ca",
    recommendedFor:
      "Canadian businesses dealing with creditor distress, including MCA-style products marketed in Canada.",
    bestFor: [
      "Canadian small and mid-market businesses",
      "Licensed insolvency proceedings under Canadian law",
    ],
    notIdealFor: [
      "US-based businesses with MCA exposure (Spergel does not operate as a US MCA settlement firm)",
    ],
    ratings: {
      transparency: 5,
      results: 5,
      communication: 5,
      cost: 4.5,
      litigation: 4,
    },
    pros: [
      "Exceptional public review record: 4.9 stars across 2,590+ Trustpilot reviews",
      "Long-tenured Canadian insolvency firm (since 1989)",
      "Licensed trustees on staff, federally regulated",
      "Has helped 100,000+ Canadians become debt-free",
    ],
    cons: [
      "US footprint for MCA settlement is effectively non-existent",
      "Different legal system means most US owners cannot use the firm at all",
    ],
    verdict:
      "Spergel ranks here because owners searching for MCA help often surface the brand. To be clear: if you are a US business with MCA debt, Spergel is not the firm you are looking for. They are an exceptional Canadian insolvency practice with one of the strongest public review records in the broader debt-relief category, and that is the lane to use them in.",
    pricing:
      "Set by Canadian licensed insolvency rules and firm policy. Not applicable to US MCA cases.",
    process:
      "Canadian-statute driven. Intake, assessment, proposal or licensed insolvency proceeding. Not applicable to the US MCA context.",
    publicQuotes: [
      {
        quote:
          "Outstanding customer service. Truly compassionate and caring team that's always available when needed.",
        source: "Trustpilot",
        rating: 5,
        attribution: "Trustpilot review summary, 2,500+ reviews aggregated",
      },
      {
        quote:
          "Professional and knowledgeable team that explained every step of the process clearly with a respectful, non-judgmental approach.",
        source: "Trustpilot",
        rating: 5,
      },
    ],
    concerns: [
      {
        quote:
          "Brand surfaces for US searches but the firm is not set up to handle US merchant cash advance settlement.",
        source: "Site geography and service descriptions",
      },
    ],
  },
  {
    updatedAt: "2026-09-11",
    slug: "corporate-turnaround",
    name: "Corporate Turnaround",
    shortName: "Corporate Turnaround",
    oneLineVerdict:
      "Long pedigree in turnaround consulting, but recurring BBB complaints about deceptive billing and undelivered creditor contact pull this firm down significantly.",
    founded: "1998",
    hq: "Paramus, New Jersey",
    minDebt: "$100,000+",
    specialties: "Turnaround management, creditor negotiation, MCA workouts",
    bbb: "Accredited, with active complaints",
    trustpilot: "Birdeye 4.1 across 220 reviews; mixed BBB feedback",
    websiteLabel: "corporateturnaround.com",
    firmWebsite: "https://www.corporateturnaround.com",
    recommendedFor:
      "Owners who want a long-tenured firm and are prepared to validate fee disclosures and creditor contact in writing throughout the engagement.",
    bestFor: [
      "Multi-creditor workouts beyond just MCA",
      "Owners who want a senior consultant they can call directly",
    ],
    notIdealFor: [
      "Owners who want a digital-first, dashboard-driven experience",
      "Pure MCA cases where speed matters more than full turnaround scope",
      "Owners without time or capacity to police fee disclosures",
    ],
    ratings: {
      transparency: 3,
      results: 3.5,
      communication: 3.5,
      cost: 3.5,
      litigation: 3.5,
    },
    pros: [
      "Decades-long operating history (since 1998)",
      "Broad turnaround capability beyond MCA",
      "220+ Birdeye reviews at 4.1 average",
    ],
    cons: [
      "BBB complaints alleging deceptive and exploitative billing practices",
      "Reports of fees added without clear upfront explanation",
      "Documented complaints about claimed creditor contact that was never made",
      "Reporting and client portal feel dated",
    ],
    verdict:
      "If you have a complex business in distress with MCA as one of several creditor issues, Corporate Turnaround can sit at the table. The recurring concerns in BBB complaints around fee transparency and unverified creditor contact are real, however, and owners who proceed should document every fee and verify creditor contact independently throughout the engagement.",
    pricing:
      "Engagements often run on a hybrid retainer plus performance model. BBB complaints suggest fees are not always clearly explained upfront. Owners should request a written fee schedule before signing and verify creditor contact in writing at each milestone.",
    process:
      "Senior consultant assessment, multi-week diagnostic, written turnaround plan, implementation. Slower than dedicated MCA firms by design.",
    publicQuotes: [
      {
        quote:
          "Exceptional customer service played a pivotal role in successfully turning around our business.",
        source: "Birdeye",
        rating: 5,
        attribution: "Birdeye review aggregate (220 reviews, 4.1 average)",
      },
      {
        quote:
          "After months of paying, when I contacted creditors directly they said there was no contact from Corporate Turnaround and the records I was sent were fake.",
        source: "BBB Complaint",
        rating: 1,
        attribution: "BBB complaint record (unresolved)",
      },
    ],
    concerns: [
      {
        quote:
          "Multiple BBB complaints alleging deceptive billing and that promised creditor contact never occurred. Documentation provided to clients was alleged to be fabricated in at least one complaint.",
        source: "BBB business profile complaints",
      },
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
