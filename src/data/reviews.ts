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
    hq: "Florida (national service)",
    minDebt: "$25,000+",
    specialties:
      "MCA settlement, MCA litigation defense, multi-position consolidation, UCC release",
    bbb: "A rated, accredited",
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
      "BBB accredited, A rating",
    ],
  },
  {
    slug: "second-wind-consultants",
    name: "Second Wind Consultants",
    shortName: "Second Wind",
    score: 4.4,
    rank: 2,
    oneLineVerdict:
      "A well known restructuring firm with strong outcomes for established companies, but higher minimums and a slower intake make it a poor fit for owners in active funder distress.",
    founded: "2009",
    hq: "Trumbull, Connecticut",
    minDebt: "$250,000+ in many cases",
    specialties: "Business debt restructuring, MCA resolution, asset sales",
    bbb: "Not BBB accredited at time of review",
    trustpilot: "Limited Trustpilot footprint",
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
      transparency: 3.5,
      results: 4.5,
      communication: 4,
      cost: 4,
      litigation: 4,
    },
    pros: [
      "Long operating history in business debt restructuring",
      "Strong reputation for handling complex multi-creditor situations",
      "Established relationships with several major MCA funders",
    ],
    cons: [
      "Higher effective minimums skew it toward mid-market clients",
      "Intake and evaluation cycle can run several weeks before any action",
      "Public-facing pricing is opaque, fees disclosed only late in the funnel",
      "Less integrated litigation defense than firms with full in-house legal",
    ],
    verdict:
      "Second Wind has earned its reputation in larger restructurings. For a $750,000 multi-creditor workout with time on the clock, they are a credible choice. For a small business with three MCAs, daily ACH pulls, and a UCC threat next week, the fit is wrong. The intake cycle is the weak point: by the time you finish their evaluation, a funder has often already filed. Owners in active distress should pick a firm built for speed.",
    pricing:
      "Pricing is not published. Clients report fee structures tied to total restructured debt, with custom retainers depending on case complexity. Expect to complete a full evaluation before receiving a quote.",
    process:
      "Intake is consultative and slow by design. A discovery call is followed by document collection, a multi-day analysis, and a proposal call. Implementation begins after a signed engagement, often two to four weeks after first contact.",
    concerns: [
      {
        quote:
          "Limited Trustpilot and BBB footprint relative to the firm's size, making third-party verification of recent client outcomes harder than for competitors with active review pipelines.",
        source: "Public review platforms (BBB, Trustpilot) as of 2026",
      },
    ],
  },
  {
    slug: "reset-finance",
    name: "Reset Finance",
    shortName: "Reset",
    score: 4.2,
    rank: 3,
    oneLineVerdict:
      "Solid for straight consolidation when no lawsuit is on the table, but lighter litigation defense leaves owners exposed if a funder escalates.",
    founded: "2018",
    hq: "New York, New York",
    minDebt: "$50,000+",
    specialties: "MCA consolidation, debt refinancing, payment restructuring",
    bbb: "Mixed reviews on BBB",
    trustpilot: "Limited Trustpilot presence",
    websiteLabel: "resetfinance.com",
    recommendedFor:
      "Owners with multiple healthy MCAs who want to consolidate into a single payment but who are not currently being sued.",
    bestFor: [
      "Multi-position MCA consolidation",
      "Owners with revenue still strong enough to refinance",
    ],
    notIdealFor: [
      "Active litigation or imminent lawsuits from funders",
      "Owners needing UCC release or COJ defense",
      "Severe revenue distress where refinancing options are gone",
    ],
    ratings: {
      transparency: 4,
      results: 4,
      communication: 4,
      cost: 4,
      litigation: 3,
    },
    pros: [
      "Useful product for owners who can still refinance their way out",
      "Generally responsive intake team",
      "Clear consolidation product, easy to understand",
    ],
    cons: [
      "Litigation defense capability is limited compared to attorney-led firms",
      "Consolidation only works when revenue still supports a refinance",
      "Less flexibility for severe distress cases",
    ],
    verdict:
      "Reset Finance is fine if you caught the problem early. The moment a funder threatens litigation or freezes a merchant account, you need a firm with attorneys on staff, and Reset is not built that way. Owners using Reset should be paired with an attorney on retainer just in case.",
    pricing:
      "Fees are tied to consolidation product structure. Clients should ask explicitly whether the firm will represent them if a funder sues during the consolidation period.",
    process:
      "Intake, document collection, consolidation product design, signed agreement, payment restructuring. Litigation that arises during the process typically requires referral to outside counsel.",
    concerns: [
      {
        quote:
          "Mixed third-party feedback on consolidation outcomes when underlying revenue continues to decline after restructuring.",
        source: "Public review aggregators",
      },
    ],
  },
  {
    slug: "corporate-turnaround",
    name: "Corporate Turnaround",
    shortName: "Corporate Turnaround",
    score: 4.1,
    rank: 4,
    oneLineVerdict:
      "Long pedigree in turnaround consulting, but the MCA-specific arm feels grafted on and the technology and reporting feel a decade behind newer firms.",
    founded: "1998",
    hq: "Paramus, New Jersey",
    minDebt: "$100,000+",
    specialties: "Turnaround management, creditor negotiation, MCA workouts",
    bbb: "Accredited",
    trustpilot: "Few recent reviews",
    websiteLabel: "corporateturnaround.com",
    recommendedFor:
      "Owners who value long-tenured firms and are comfortable with a more traditional, in-person consulting style.",
    bestFor: [
      "Multi-creditor workouts beyond just MCA",
      "Owners who want a senior consultant they can call directly",
    ],
    notIdealFor: [
      "Owners who want a digital-first, dashboard-driven experience",
      "Pure MCA cases where speed matters more than full turnaround scope",
    ],
    ratings: {
      transparency: 4,
      results: 4,
      communication: 4,
      cost: 4,
      litigation: 4,
    },
    pros: [
      "Decades-long operating history",
      "Broad turnaround capability beyond MCA",
      "Senior-consultant access",
    ],
    cons: [
      "Reporting and client portal feel dated",
      "Less specialized in MCA than firms built specifically for it",
      "Pricing tied to traditional consulting hours, not always fixed-fee",
    ],
    verdict:
      "If you have a complex business in distress with MCA as one of several creditor issues, Corporate Turnaround can sit at the table. If your problem is purely MCA and you want speed, transparency, and a modern client experience, you will be better served by a firm built specifically for this lane.",
    pricing:
      "Engagements often run on a hybrid retainer plus performance model. Owners should request a written fee schedule before signing.",
    process:
      "Senior consultant assessment, multi-week diagnostic, written turnaround plan, implementation. Slower than dedicated MCA firms by design.",
    concerns: [
      {
        quote:
          "Owners report a more traditional consulting cadence, which can feel slow when daily ACH pulls are depleting accounts.",
        source: "Public client commentary",
      },
    ],
  },
  {
    slug: "spergel",
    name: "Spergel",
    shortName: "Spergel",
    score: 4.0,
    rank: 5,
    oneLineVerdict:
      "A respected name in Canadian insolvency and corporate restructuring, but US MCA owners will find limited applicable footprint.",
    founded: "1989",
    hq: "Toronto, Ontario (Canada)",
    minDebt: "Varies",
    specialties:
      "Licensed insolvency, consumer proposals, corporate restructuring (Canada)",
    bbb: "Not applicable in same form",
    trustpilot: "Strong in Canada",
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
      transparency: 4.5,
      results: 4.5,
      communication: 4,
      cost: 4,
      litigation: 3.5,
    },
    pros: [
      "Long-tenured Canadian insolvency firm",
      "Licensed trustees on staff",
      "Strong Canadian reputation",
    ],
    cons: [
      "US footprint for MCA settlement is effectively non-existent",
      "Different legal system means most US owners cannot use the firm at all",
    ],
    verdict:
      "Spergel ranks here because owners searching for MCA help often surface the brand. To be clear: if you are a US business with MCA debt, Spergel is not the firm you are looking for. They are an excellent Canadian insolvency practice, and that is the lane to use them in.",
    pricing:
      "Set by Canadian licensed insolvency rules and firm policy. Not applicable to US MCA cases.",
    process:
      "Canadian-statute driven. Intake, assessment, proposal or licensed insolvency proceeding. Not applicable to the US MCA context.",
    concerns: [
      {
        quote:
          "Brand surfaces for US searches but the firm is not set up to handle US merchant cash advance settlement.",
        source: "Site geography and service descriptions",
      },
    ],
  },
  {
    slug: "corporate-rescue",
    name: "Corporate Rescue",
    shortName: "Corporate Rescue",
    score: 3.9,
    rank: 6,
    oneLineVerdict:
      "Software-driven restructuring playbook with reasonable results for straightforward MCA stacks, but litigation depth lags firms with full in-house legal.",
    founded: "2017",
    hq: "United States (national service)",
    minDebt: "$20,000+",
    specialties: "MCA restructuring, payment reduction, term extension",
    bbb: "Accredited",
    trustpilot: "Mixed",
    websiteLabel: "corporaterescue.com",
    firmWebsite: "https://www.corporaterescue.com",
    recommendedFor:
      "Owners with $20K to $200K in MCA debt who want a structured restructuring product without a full litigation engagement.",
    bestFor: [
      "Smaller MCA stacks ($20K to $200K)",
      "Owners who want a productized intake and clear playbook",
    ],
    notIdealFor: [
      "Active lawsuits or aggressive funder litigation",
      "Cases requiring deep, ongoing attorney representation",
    ],
    ratings: {
      transparency: 4,
      results: 4,
      communication: 4,
      cost: 4,
      litigation: 3,
    },
    pros: [
      "Productized restructuring approach is easy to understand",
      "Public materials describe the process clearly",
      "Lower minimum than mid-market firms",
    ],
    cons: [
      "Less depth in litigation defense than attorney-led competitors",
      "Outcomes for complex multi-creditor situations vary",
      "Marketing claims around payment reductions should be validated against signed agreement",
    ],
    verdict:
      "Corporate Rescue is a reasonable pick for a clean MCA case where no funder is filing suit. The moment litigation is on the table, the gap shows. We would pair Corporate Rescue with separate counsel, or simply use a firm with attorneys already on staff.",
    pricing:
      "Fees vary by total debt restructured. Clients should request the specific savings methodology in writing.",
    process:
      "Free initial review, debt analysis, restructuring proposal, implementation, ongoing support. Standard productized funnel.",
    concerns: [
      {
        quote:
          "Public marketing emphasizes payment reduction percentages without consistently describing the legal exposure that remains if a funder sues.",
        source: "Firm marketing materials and public review platforms",
      },
    ],
  },
  {
    slug: "eastern-financial-partners",
    name: "Eastern Financial Partners",
    shortName: "Eastern Financial",
    score: 3.8,
    rank: 7,
    oneLineVerdict:
      "Attorney-led MCA negotiation team with credible outcomes at small scale, but the overall settlement book is meaningfully smaller than top-ranked firms.",
    founded: "2019",
    hq: "United States",
    minDebt: "Varies",
    specialties: "MCA negotiation, settlement, attorney-led representation",
    bbb: "Not yet established footprint",
    trustpilot: "Limited",
    websiteLabel: "easternfinancialpartners.com",
    firmWebsite: "https://easternfinancialpartners.com",
    recommendedFor:
      "Owners who specifically want a smaller, attorney-led shop and are comfortable with a less established public reputation.",
    bestFor: [
      "Owners who prefer a boutique attorney experience",
      "Smaller MCA cases under $100K",
    ],
    notIdealFor: [
      "Owners who want extensive third-party validation",
      "Complex stacks needing scale and bench depth",
    ],
    ratings: {
      transparency: 4,
      results: 3.5,
      communication: 4,
      cost: 4,
      litigation: 4,
    },
    pros: [
      "Attorney-led representation is the right structural choice for MCA cases",
      "Public claim of $20M+ in submitted settlements",
      "Smaller shop can mean more direct attorney access",
    ],
    cons: [
      "Total submitted settlement volume is modest compared to scaled competitors",
      "Public review footprint is thin, harder to validate outcomes independently",
      "Smaller bench means single-point-of-failure risk if your attorney is unavailable",
    ],
    verdict:
      "Eastern Financial Partners is doing the right thing structurally by leading with attorneys. The constraint is scale: with a $20M settlement footprint, the pattern recognition across funder behaviors is necessarily narrower than firms with multiples of that volume. Good firm, smaller bench. Owners who want the same attorney-led model with more depth should look at the firms ranked above.",
    pricing:
      "Set per case. Owners should request fee schedule and milestones in writing before signing.",
    process:
      "Consultation, debt analysis, attorney representation, negotiation, settlement.",
    concerns: [
      {
        quote:
          "Limited independent third-party reviews relative to total client volume claimed, making outcome validation harder.",
        source: "Public review platforms",
      },
    ],
  },
  {
    slug: "ascend-consulting",
    name: "Ascend Consulting",
    shortName: "Ascend",
    score: 3.7,
    rank: 8,
    oneLineVerdict:
      "Decent settlement results when the case is straightforward, but recurring complaints about communication cadence and post-sale handoff drag the score.",
    founded: "2016",
    hq: "United States (multi-office)",
    minDebt: "$25,000+",
    specialties: "MCA settlement, business debt negotiation",
    bbb: "Mixed",
    trustpilot: "Mixed",
    websiteLabel: "ascendconsulting.com",
    recommendedFor:
      "Owners who already have a strong CFO or operator and can self-manage through periods of slower vendor communication.",
    bestFor: [
      "Self-sufficient operators",
      "Single or two-position MCA cases",
    ],
    notIdealFor: [
      "Owners who need hands-on, weekly communication",
      "Cases requiring rapid escalation to litigation",
    ],
    ratings: {
      transparency: 3.5,
      results: 4,
      communication: 3,
      cost: 4,
      litigation: 3.5,
    },
    pros: [
      "Settlement outcomes are credible when the case is clean",
      "Reasonable fee structure",
    ],
    cons: [
      "Multiple public complaints around communication cadence",
      "Post-sale experience can differ from intake experience",
      "Limited litigation depth",
    ],
    verdict:
      "Ascend gets results often enough to belong on this list, but the gap between intake and post-sale experience is the recurring pattern in client commentary. Owners who already have strong internal finance leadership can absorb that gap. Owners who need a partner can do better elsewhere.",
    pricing:
      "Fees vary. Owners should ask for a written fee schedule and the named case manager who will handle their file post-signature.",
    process:
      "Standard intake and settlement process. Quality of execution depends heavily on which case manager is assigned.",
    concerns: [
      {
        quote:
          "Recurring third-party feedback that responsiveness drops materially after the contract is signed.",
        source: "BBB and other public review platforms",
      },
    ],
  },
  {
    slug: "drb-strategic-legal",
    name: "DRB / Strategic Legal Practices",
    shortName: "DRB",
    score: 3.6,
    rank: 9,
    oneLineVerdict:
      "Strong in litigation defense, but the absence of a real settlement negotiation arm means owners often end up with legal bills they could have avoided.",
    founded: "Varies by entity",
    hq: "United States",
    minDebt: "Litigation-driven",
    specialties: "MCA litigation defense, COJ vacatur, UCC defense",
    bbb: "Varies",
    trustpilot: "Limited",
    websiteLabel: "Varies",
    recommendedFor:
      "Owners already sued by a funder who need pure litigation defense and have no need for negotiation.",
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
      "Genuine litigation capability",
      "Useful for cases where the funder has already filed",
    ],
    cons: [
      "No real negotiation arm, so settlement-only cases get over-lawyered",
      "Hourly billing can run up quickly",
      "Owners often end up paying more than a combined settlement-and-defense firm would charge",
    ],
    verdict:
      "If you are sued, defense is what you need. If you are not yet sued, paying a litigation firm to negotiate is the wrong tool. The best MCA outcomes come from firms that can do both under one fee, escalating to litigation only when negotiation fails. DRB is fine for the narrow case it serves and overkill for everything else.",
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
    slug: "mca-stop",
    name: "MCA Stop",
    shortName: "MCA Stop",
    score: 3.5,
    rank: 10,
    oneLineVerdict:
      "Aggressive marketing brings owners in the door, but fee structure and disclosures lag, and outcomes vary more than the sales pitch suggests.",
    founded: "Recent entrant",
    hq: "United States",
    minDebt: "Varies",
    specialties: "MCA settlement, payment reduction marketing",
    bbb: "Limited footprint",
    trustpilot: "Mixed and limited",
    websiteLabel: "mcastop.com",
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
      communication: 3.5,
      cost: 3.5,
      litigation: 3,
    },
    pros: [
      "Easy to find via paid search and social",
      "Quick intake",
    ],
    cons: [
      "Marketing claims about percentage reductions are not always tied to a written guarantee",
      "Fee structure is harder to nail down than top-ranked firms",
      "Limited public review base for outcome validation",
    ],
    verdict:
      "Marketing-led firms in any consumer category tend to underdeliver against pitch. MCA Stop is in that pattern. Owners who go this route should insist on a written fee schedule, a written description of what success looks like, and a named case manager before signing anything.",
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
];

export const COASTAL = REVIEWS.find((r) => r.isCoastal)!;
export const COMPETITORS = REVIEWS.filter((r) => !r.isCoastal);

export function getReviewBySlug(slug: string) {
  return REVIEWS.find((r) => r.slug === slug);
}
