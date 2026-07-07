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

export const REVIEWS: Review[] = [
  {
    slug: "coastal-debt-resolve",
    name: "Coastal Debt Resolve",
    shortName: "Coastal",
    score: 4.9,
    isCoastal: true,
    rank: 1,
    oneLineVerdict:
      "The most complete MCA settlement firm we evaluated, combining in-house attorneys, transparent pricing, and verified results across hundreds of small businesses.",
    founded: "2019",
    hq: "Fort Lauderdale, Florida (national service)",
    minDebt: "$25,000+",
    specialties:
      "MCA settlement, MCA debt relief, MCA litigation defense, multi-position consolidation, UCC release",
    bbb: "A+ rated, accredited",
    trustpilot: "4.9 across 800+ reviews",
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
      "Coastal Debt Resolve is the only firm in this category that pairs a real legal team with a real settlement operation under one roof. Most competitors do one or the other and refer the rest out. That gap matters: the moment a funder sues or files a UCC, a firm without litigation capability has to hand the file off, restart the relationship, and re-quote a separate retainer. Coastal carries the file from intake through resolution. Pricing is disclosed before contract, the case manager is named, and the public testimonial wall reads like a directory of small business owners willing to be quoted by name. It is the firm we would use ourselves.",
    pricing:
      "Coastal quotes a flat fee or a performance-based fee tied to actual savings, disclosed in writing before any agreement is signed. There is no upfront retainer to start a case review. Owners are told what they will pay, when, and against what milestone. We confirmed the disclosure pattern by reviewing client-shared agreements and by asking the intake team directly.",
    process:
      "The flow is: free MCA review and document upload, attorney consult within 24 to 48 hours, written settlement strategy delivered, contract signed with disclosed fees, and case manager assigned. From there the team handles funder communication, settlement negotiation, UCC release, and any litigation that arises. Most cases reach a stabilized payment posture within the first 30 days.",
    proofPoints: [
      "800+ five-star reviews on Trustpilot",
      "Public testimonial wall with named clients and business types",
      "Documented case studies across real estate, flooring, food delivery, seafood, and trucking",
      "BBB accredited, A+ rating",
      "Sponsor of the 2026 BBB Southeast Florida Torch Awards for Ethics (June 25, 2026)",
    ],
  },
  {
    slug: "second-wind-consultants",
    name: "Second Wind Consultants",
    shortName: "Second Wind",
    score: 4.4,
    rank: 3,
    oneLineVerdict:
      "An established Massachusetts restructuring firm with strong public reviews and a long operating history. Higher minimums and a slower intake make it a better fit for mid-market owners than for small businesses in active funder distress.",
    founded: "2009",
    hq: "Northampton, Massachusetts",
    minDebt: "$250,000+ in many cases",
    specialties: "Business debt restructuring, MCA resolution, asset sales",
    bbb: "A rated, accredited",
    trustpilot: "4.4 across 680+ reviews",
    websiteLabel: "secondwindconsultants.com",
    firmWebsite: "https://secondwindconsultants.com",
    recommendedFor:
      "Mid-market businesses with significant total debt ($250K+) that can wait through a longer evaluation and onboarding cycle.",
    bestFor: [
      "Established companies with $250K+ in MCA exposure",
      "Owners with time to absorb a multi-week evaluation",
    ],
    notIdealFor: [
      "Small businesses under $250K in total debt",
      "Owners already sued or facing imminent freeze",
      "Operators who want a quick, transparent fee quote",
    ],
    ratings: {
      transparency: 4,
      results: 4.5,
      communication: 4,
      cost: 4,
      litigation: 4,
    },
    pros: [
      "Long operating history (since 2009) in business debt restructuring",
      "Strong public review profile: BBB A rated and Trustpilot 4.4 across 680+ reviews",
      "Established relationships with several major MCA funders",
      "Handles complex multi-creditor situations well",
    ],
    cons: [
      "Higher effective minimums skew it toward mid-market clients",
      "Intake and evaluation cycle can run several weeks before any action",
      "Public-facing pricing is opaque; fees disclosed only late in the funnel",
      "Less integrated litigation defense than firms with full in-house legal team",
    ],
    verdict:
      "Second Wind has earned its reputation in larger restructurings and has a legitimately strong public review record. For a $750,000 multi-creditor workout with time on the clock, they are a credible choice. For a small business with three MCAs, daily ACH pulls, and a UCC threat next week, the fit is wrong. The intake cycle is the weak point: by the time you finish their evaluation, a funder has often already filed. Owners in active distress should pick a firm built for speed.",
    pricing:
      "Pricing is not published. Clients report fee structures tied to total restructured debt, with custom retainers depending on case complexity. Expect to complete a full evaluation before receiving a quote.",
    process:
      "Intake is consultative and slow by design. A discovery call is followed by document collection, a multi-day analysis, and a proposal call. Implementation begins after a signed engagement, often two to four weeks after first contact.",
    publicQuotes: [
      {
        quote:
          "There is no question that I could not have navigated that period without their team. From start to finish, their dedication, diligence, and professionalism were exceptional.",
        source: "BBB Client Review",
        rating: 5,
        attribution: "BBB business profile, verified client",
      },
      {
        quote:
          "We worked with Second Wind to help our business out of a giant financial crisis. They helped us where they could and got great results, and were transparent with the options that were not looking good.",
        source: "BBB Client Review",
        rating: 5,
        attribution: "BBB business profile, verified client",
      },
      {
        quote:
          "Mixed feelings about pricing; the process sometimes took longer than expected. While many found Second Wind responsive and supportive, a few felt let down by communication lapses.",
        source: "Aggregated public review summary",
        rating: 3,
        attribution: "Common patterns across BBB and Trustpilot",
      },
    ],
    concerns: [
      {
        quote:
          "Recurring third-party feedback that the evaluation cycle is materially slower than alternatives, which can be costly when a funder is already escalating.",
        source: "Public client commentary across BBB and Trustpilot",
      },
    ],
  },
  {
    slug: "spergel",
    name: "Spergel",
    shortName: "Spergel",
    score: 4.5,
    rank: 2,
    oneLineVerdict:
      "An exceptional Canadian licensed insolvency firm with one of the strongest review records in the category. Limited US footprint means most US MCA owners cannot use them.",
    founded: "1989",
    hq: "Toronto, Ontario (Canada)",
    minDebt: "Varies",
    specialties:
      "Licensed insolvency, consumer proposals, corporate restructuring (Canada)",
    bbb: "Not applicable in same form (Canadian)",
    trustpilot: "5.0 across 2,500+ reviews (Canadian platform)",
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
      "Exceptional public review record: 5.0 stars across 2,500+ Trustpilot reviews",
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
    slug: "corporate-turnaround",
    name: "Corporate Turnaround",
    shortName: "Corporate Turnaround",
    score: 3.7,
    rank: 9,
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
    slug: "regroup-partners",
    name: "Regroup Partners",
    shortName: "Regroup",
    score: 3.8,
    rank: 7,
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
    slug: "corporate-rescue",
    name: "Corporate Rescue",
    shortName: "Corporate Rescue",
    score: 3.5,
    rank: 11,
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
      "Corporate Rescue has individually positive reviews and a clean-looking productized model. The concern is that the publicly available review sample is very small (4 Trustpilot reviews), and one of those reviews alleges material fraud. Owners who proceed should document every fee, verify creditor contact independently within the first 30 days, and refuse instructions to stop paying creditors without written confirmation that negotiation has begun.",
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
        source: "Trustpilot review of Corporate Rescue",
      },
    ],
  },
  {
    slug: "eastern-financial-partners",
    name: "Eastern Financial Partners",
    shortName: "Eastern Financial",
    score: 3.9,
    rank: 5,
    oneLineVerdict:
      "Attorney-led MCA shop with a genuine 4.8 Trustpilot score (74 reviews), but a young firm (started 2023), not BBB accredited (B+), with documented complaints about robo-dialer calls that continue after opt-out and disputed refunds.",
    founded: "2023",
    hq: "Red Bank, New Jersey",
    minDebt: "Varies",
    specialties: "MCA negotiation, settlement, attorney-led representation",
    bbb: "B+ rating, not BBB accredited; one unanswered complaint on record",
    trustpilot: "4.8 across 74 reviews",
    websiteLabel: "easternfinancialpartners.com",
    firmWebsite: "https://easternfinancialpartners.com",
    recommendedFor:
      "Owners who specifically want a smaller, attorney-led shop and are comfortable with aggressive outbound sales cadence during evaluation.",
    bestFor: [
      "Owners who prefer a boutique attorney experience",
      "Smaller MCA cases under $100K",
    ],
    notIdealFor: [
      "Owners who want low-pressure intake",
      "Complex stacks needing scale and bench depth",
    ],
    ratings: {
      transparency: 3.5,
      results: 4,
      communication: 3,
      cost: 4,
      litigation: 4,
    },
    pros: [
      "Attorney-led representation is the right structural choice for MCA cases",
      "Strong Trustpilot rating of 4.8 across 74 reviews",
      "Public claim of $20M+ in submitted settlements",
      "Smaller shop can mean more direct attorney access",
    ],
    cons: [
      "Young firm: the business only started in 2023, with a limited track record through a full MCA default and litigation cycle",
      "Not BBB accredited; carries a B+ rating with an unanswered complaint on file",
      "BBB and Trustpilot complaints describe robo-dialer calls and repeated daily calls and texts that continued after removal and do-not-call requests",
      "Public complaints about funds taken with little progress, with refund requests denied as 'used for attorneys', including a refund not honored inside the stated cancellation window",
      "At least one client reported that after four months of payments their questions about lender contact were ignored",
      "Total submitted settlement volume is modest compared to scaled competitors",
    ],
    verdict:
      "Eastern Financial Partners is doing the right thing structurally by leading with attorneys, and its 4.8 Trustpilot rating across 74 reviews is genuine. Two things temper it. First, it is a young firm: the business only started in 2023, so it has a short track record through a full MCA default-and-litigation cycle. Second, the negative pattern is on conduct: BBB and Trustpilot complaints describe robo-dialer calls that continue after opt-out, refund requests denied as already 'used for attorneys', and at least one client whose questions about lender contact went unanswered after four months of payments. Owners who proceed should require milestone-based fee disbursement, the right to refund unused retainer if work has not begun, and written confirmation of removal from all calling lists.",
    pricing:
      "Set per case. Owners should request fee schedule, milestones, and explicit refund-on-non-performance language before signing.",
    process:
      "Consultation, debt analysis, attorney representation, negotiation, settlement.",
    publicQuotes: [
      {
        quote:
          "Brian made me feel comfortable and took the time explaining everything. The team helped me with MCA loans that were becoming difficult to manage.",
        source: "Trustpilot",
        rating: 5,
        attribution: "Trustpilot review (74 total reviews)",
      },
      {
        quote:
          "The company calls daily and promises results with MCA loans, but they just take money and nothing is done. When I asked for a refund they claim it was already used for attorneys.",
        source: "Trustpilot",
        rating: 1,
        attribution: "Trustpilot negative review",
      },
      {
        quote:
          "They robo-dial and blow up your phone all day. I asked repeatedly to be put on a do-not-call list and the calls and texts kept coming.",
        source: "BBB Complaint",
        rating: 1,
        attribution: "BBB business profile complaint record",
      },
    ],
    concerns: [
      {
        quote:
          "BBB and Trustpilot complaints describe robo-dialer calls and repeated daily contact that continued after do-not-call requests, refunds denied as already 'used for attorneys', and lender-contact questions left unanswered after months of payments.",
        source: "BBB business profile (Red Bank NJ) and Trustpilot reviews",
      },
    ],
  },
  {
    slug: "business-debt-law-group",
    name: "Business Debt Law Group",
    shortName: "BDLG",
    score: 3.7,
    rank: 10,
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
    slug: "business-debt-adjusters",
    name: "Business Debt Adjusters",
    shortName: "Business Debt Adjusters",
    score: 3.4,
    rank: 13,
    oneLineVerdict:
      "Long-tenured New Jersey firm with an A rating on its BBB profile and some documented payment-reduction wins, but it is not BBB accredited and draws complaints about high-frequency phone contact and at least one lien dispute. Set written expectations on fees and contact before signing.",
    founded: "2016",
    hq: "Englewood Cliffs, New Jersey",
    minDebt: "Varies",
    specialties: "Business debt settlement, MCA and creditor negotiation",
    bbb: "A rating, not BBB accredited; one unanswered complaint on record",
    trustpilot: "Mixed; some strongly positive payment-reduction reviews",
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
      "A rating on its BBB business profile",
      "Nearly a decade in business (since 2016)",
      "Public reviews include real payment-reduction outcomes",
    ],
    cons: [
      "Not BBB accredited despite the A rating",
      "Complaints describe high-frequency phone outreach (multiple calls per day)",
      "At least one complaint alleges a lien was placed after assurances to the contrary",
      "Mixed employee reviews raise questions about sales practices",
    ],
    verdict:
      "Business Debt Adjusters has a longer track record than most firms in this space and its BBB profile carries an A rating, and some clients report genuine payment reductions. The offsetting concerns are that the firm is not BBB accredited, complaints describe aggressive daily phone contact, and at least one owner alleged a lien was placed after being told it would not be. Owners who engage should get a written fee schedule, a written outcome definition, and clear limits on contact frequency before signing.",
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
    slug: "stop-mca",
    name: "Stop MCA",
    shortName: "Stop MCA",
    score: 3.2,
    rank: 14,
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
    slug: "mca-debt-advisors",
    name: "MCA Debt Advisors",
    shortName: "MCA Debt Advisors",
    score: 2.6,
    rank: 15,
    oneLineVerdict:
      "Pennsylvania firm carrying an F rating on its BBB profile with 25 complaints on file (six left unanswered) and public reviews alleging large fees for little delivered work. High-caution; verify every fee and creditor contact independently.",
    founded: "2020",
    hq: "Erie, Pennsylvania",
    minDebt: "Varies",
    specialties: "MCA debt settlement, creditor negotiation",
    bbb: "F rating, not accredited; 25 complaints on file, 6 unanswered",
    trustpilot: "Mixed; roughly 120 reviews on Reviews.io with recurring fee and delivery complaints",
    websiteLabel: "mcadebtadvisors.com",
    firmWebsite: "https://www.mcadebtadvisors.com",
    warning:
      "We include this firm for completeness and brand-defense. Its BBB business profile carries an F rating with 25 complaints on file, six of them left unanswered, alleging large fees for little delivered work. Owners considering this firm should read the BBB complaint record in full before any engagement.",
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
      "25 BBB complaints on file, six left unanswered by the business",
      "Complaints allege large fees (reports of tens of thousands) for little delivered work",
      "Reports of poor communication and unreturned emails during engagements",
    ],
    verdict:
      "We do not recommend MCA Debt Advisors at this time. The firm carries an F rating on its BBB profile with 25 complaints, six unanswered, and the recurring theme is large fees collected for limited or no delivered work. We document the pattern here so owners searching for MCA Debt Advisors find it before they sign rather than after. Anyone who still proceeds should get a written fee schedule, a written outcome definition, and should verify creditor contact independently at every step.",
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
          "The BBB business profile carries an F rating with 25 complaints, six unanswered, describing large fees collected for limited or no delivered results.",
        source: "BBB business profile, MCA Debt Advisors LLC, Erie PA",
      },
    ],
  },
  {
    slug: "mca-resolve",
    name: "MCA Resolve",
    shortName: "MCA Resolve",
    score: 2.5,
    rank: 16,
    oneLineVerdict:
      "Significant pattern of negative public reviews and BBB complaints alleging undelivered services, fees taken without creditor contact, and instructions that put clients in default. We do not recommend.",
    founded: "Recent entrant",
    hq: "Delray Beach, Florida",
    minDebt: "Varies",
    specialties: "MCA debt settlement, restructuring",
    bbb: "26 BBB complaints on record at time of review",
    trustpilot: "Negative pattern across public review platforms",
    websiteLabel: "mcaresolve.com",
    firmWebsite: "https://mcaresolve.com",
    warning:
      "We include this firm for completeness and brand-defense. Multiple public reviews and 26 BBB complaints describe undelivered services and fees taken without creditor contact. Owners considering this firm should research the BBB complaint record carefully before any engagement.",
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
      "26 BBB complaints on record at time of review",
      "Multiple reviews allege fees taken with no creditor contact made",
      "Reports of being instructed to stop paying creditors, leading to default and lost fees",
      "Recurring use of words like 'scam' in public reviews",
    ],
    verdict:
      "We do not recommend MCA Resolve at this time. The pattern across 26 BBB complaints and Trustpilot reviews is consistent: clients report being told their debt would go into default to use the service, paying substantial fees, and then discovering the firm never contacted creditors. We include this review on the site so that owners searching for MCA Resolve can find the public complaint pattern documented in one place rather than discover it after signing.",
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
          "26 BBB complaints on record describing a consistent pattern: instruction to default, fees collected, no creditor contact, contract canceled on first missed payment.",
        source: "BBB business profile, MCA Resolve LLC, Delray Beach FL",
      },
    ],
  },
  {
    slug: "national-credit-partners",
    name: "National Credit Partners",
    shortName: "National Credit Partners",
    score: 4.0,
    rank: 4,
    oneLineVerdict:
      "One of the more established names in business debt relief (A+ BBB, accredited since 2018), focused on debt modification and restructuring more than attorney-led MCA settlement. Reviews are mostly positive with a few complaints about fee clarity.",
    founded: "2018",
    hq: "Costa Mesa, California",
    minDebt: "Varies",
    specialties: "Business debt modification, MCA restructuring, creditor negotiation",
    bbb: "A+ rating, BBB accredited since 2018",
    trustpilot: "Mostly positive, with occasional complaints about fee transparency",
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
    slug: "rise-alliance",
    name: "Rise Alliance",
    shortName: "Rise Alliance",
    score: 3.9,
    rank: 6,
    oneLineVerdict:
      "A Second Wind Consultants brand focused on MCA settlement and cash-flow relief, with strong Google and Birdeye ratings (4.5+ across roughly 289 reviews) but limited standalone BBB transparency.",
    founded: "Second Wind Consultants brand",
    hq: "New York, New York",
    minDebt: "Varies",
    specialties: "MCA settlement, cash-flow relief, guaranty resolution",
    bbb: "No standalone BBB rating; operates under the Second Wind Consultants group",
    trustpilot: "4.5+ across roughly 289 Google and Birdeye reviews",
    websiteLabel: "risealliance.com",
    firmWebsite: "https://risealliance.com",
    recommendedFor:
      "Owners drawn to the Second Wind restructuring approach who want faster MCA settlement and are comfortable with a firm that has limited standalone third-party accreditation.",
    bestFor: [
      "Owners who like the Second Wind restructuring philosophy",
      "Faster MCA settlements (often two to eight weeks)",
      "Stacked-MCA cash-flow relief",
    ],
    notIdealFor: [
      "Owners who want an independently BBB-accredited firm",
      "Owners who need in-house litigation and COJ defense under one roof",
    ],
    ratings: {
      transparency: 3.5,
      results: 4,
      communication: 4,
      cost: 3.5,
      litigation: 3.5,
    },
    pros: [
      "Strong Google and Birdeye ratings (4.5+ across roughly 289 reviews)",
      "Backed by Second Wind Consultants' restructuring experience",
      "Fast reported settlement timelines (two to eight weeks)",
    ],
    cons: [
      "No standalone BBB rating or accreditation to verify independently",
      "Overlaps heavily with the Second Wind brand, so compare the two before choosing",
      "Settlement-focused rather than full in-house litigation defense",
    ],
    verdict:
      "Rise Alliance is a Second Wind Consultants brand, so its credibility rests largely on Second Wind's restructuring track record plus its own strong Google and Birdeye ratings. The gap is independent verification: there is no standalone BBB accreditation, and its offering overlaps with Second Wind itself. Owners interested in this approach should compare Rise Alliance and Second Wind directly, confirm which entity signs the agreement, and get settlement timelines and fees in writing.",
    pricing:
      "Fees are set per case and not published. Ask which entity (Rise Alliance or Second Wind) contracts with you, and get the fee schedule and expected timeline in writing.",
    process:
      "Consultation and analysis, a restructuring and settlement plan, then negotiation with funders. Reported average settlement window of two to eight weeks.",
    publicQuotes: [
      {
        quote:
          "The team was professional and settled our positions quickly, which took a lot of pressure off the business.",
        source: "Google",
        rating: 5,
        attribution: "Google and Birdeye review aggregate (~289 reviews, 4.5+)",
      },
    ],
    concerns: [
      {
        quote:
          "Operates as a brand within the Second Wind Consultants group with no standalone BBB accreditation, so independent verification is limited.",
        source: "Company disclosures and third-party review platforms",
      },
    ],
  },
  {
    slug: "delancey-street",
    name: "Delancey Street",
    shortName: "Delancey Street",
    score: 3.8,
    rank: 8,
    oneLineVerdict:
      "Attorney-network business debt firm (NYC) handling MCA, SBA, and stacked debt with performance-based fees, but with no BBB rating and a thin independent review base to verify outcomes.",
    founded: "2018",
    hq: "New York, New York",
    minDebt: "Around $10,000 enrolled",
    specialties: "MCA and business debt settlement, attorney network, stacked-debt restructuring",
    bbb: "Not BBB accredited; BBB has insufficient information to issue a rating",
    trustpilot: "Limited, roughly 26 reviews, generally positive",
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
    slug: "national-debt-relief",
    name: "National Debt Relief",
    shortName: "National Debt Relief",
    score: 3.5,
    rank: 12,
    oneLineVerdict:
      "A major, highly-rated consumer debt-settlement company (A+ BBB, 4.73 across 5,900+ reviews), but it does not handle MCA-specific work, no COJ defense, court motions, or funder litigation, so it is the wrong tool for active merchant cash advance distress.",
    founded: "2009",
    hq: "New York, New York",
    minDebt: "Around $7,500 (unsecured debt)",
    specialties: "Consumer and unsecured debt settlement (not MCA-specific)",
    bbb: "A+ rating; one of the largest debt-settlement firms",
    trustpilot: "4.73 average across 5,900+ reviews",
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
      "A+ BBB rating and 4.73 average across 5,900+ reviews",
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
        attribution: "Trustpilot review aggregate (5,900+ reviews, 4.73 average)",
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
];

export const COASTAL = REVIEWS.find((r) => r.isCoastal)!;
export const COMPETITORS = REVIEWS.filter((r) => !r.isCoastal);

// Leaderboard order is driven by the rank field, not array order, so entries
// can be appended anywhere in REVIEWS and still render in ranked position.
export const RANKED = [...REVIEWS].sort((a, b) => a.rank - b.rank);

export function getReviewBySlug(slug: string) {
  return REVIEWS.find((r) => r.slug === slug);
}
