export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: GuideSection[];
  takeaway: string;
};

export const GUIDES: Guide[] = [
  {
    slug: "what-is-mca-settlement",
    title: "What is MCA settlement, and how does it actually work?",
    metaTitle: "What is MCA Settlement? A Plain-English 2026 Guide",
    metaDescription:
      "Merchant cash advance settlement explained: what it is, how negotiation works, what it costs, and when it makes sense for a small business.",
    intro:
      "Merchant cash advance (MCA) settlement is the process of negotiating with an MCA funder to reduce the total amount owed, restructure the daily or weekly payment, or release a UCC lien. It is not the same as consolidation, refinancing, or bankruptcy, and the differences matter.",
    sections: [
      {
        heading: "Why MCA settlement exists",
        paragraphs: [
          "MCAs are technically purchases of future receivables, not loans. That structure means traditional debt-relief tools like bankruptcy and standard refinancing often do not apply cleanly. Funders also have unusual leverage tools (UCC liens, ACH access, Confessions of Judgment) that make a default catastrophic if mishandled.",
          "Settlement firms exist to negotiate directly with funders to reduce the balance, restructure the payment, and protect the merchant account, ideally before any of those leverage tools get pulled.",
        ],
      },
      {
        heading: "How the negotiation works",
        paragraphs: [
          "A settlement firm typically gathers the original MCA agreement, payment history, and current revenue. They then approach the funder with a written proposal: usually a reduced lump sum, a stretched-out payment plan, or both. The funder either accepts, counters, or refuses.",
          "Acceptance rates depend on the funder, how long the MCA has been outstanding, the merchant's revenue trajectory, and the firm's relationship with that funder. Firms that handle volume across many funders develop predictable settlement bands per funder, which is part of what owners pay for.",
        ],
      },
      {
        heading: "What settlement does not solve",
        paragraphs: [
          "Settlement does not magically restore a frozen merchant account, vacate an entered Confession of Judgment without legal action, or undo a UCC lien that has already been used to seize receivables. Those situations require a litigation defense capability alongside negotiation.",
          "This is why we rate firms separately on litigation defense in our methodology. Owners in active distress need both, ideally under one fee.",
        ],
      },
      {
        heading: "When MCA settlement is the right tool",
        paragraphs: [
          "Settlement is usually the right tool when the business is operationally viable but cash flow is choking on the daily ACH pulls, when the owner wants to avoid bankruptcy, and when the funder relationship has not yet escalated past negotiation.",
        ],
        bullets: [
          "You have one or more active MCAs draining daily revenue",
          "Your business can still cover essential operating costs after a restructured payment",
          "You want to avoid Chapter 7 or Chapter 11 if possible",
          "You have not yet been sued, or a lawsuit is recent and defensible",
        ],
      },
    ],
    takeaway:
      "MCA settlement is a specific tool for a specific problem. The right firm is one that can negotiate, defend in court if needed, and quote a fixed fee before you sign anything.",
  },
  {
    slug: "how-much-does-mca-settlement-cost",
    title: "How much does MCA settlement actually cost?",
    metaTitle: "MCA Settlement Cost in 2026: Fees, Structures, Real Numbers",
    metaDescription:
      "What MCA settlement firms actually charge, the three main fee structures, and how to evaluate total cost of resolution before signing.",
    intro:
      "MCA settlement firms charge in three main ways: flat fees, percentage of total debt, and percentage of savings. Each has trade-offs. The number that actually matters is the total cost of resolution, not the headline rate.",
    sections: [
      {
        heading: "The three main fee structures",
        paragraphs: [
          "Flat fee: a single agreed dollar amount, usually paid in installments tied to milestones (intake, agreement signed, settlement closed). Predictable and clean. Best when the case is straightforward.",
          "Percentage of total debt: usually 12 to 25 percent of the original MCA balance. Easier for the firm to underwrite. Owners pay the same whether the firm settles for 50 percent or 30 percent of the balance, which can misalign incentives.",
          "Percentage of savings: usually 20 to 35 percent of the difference between original balance and settled amount. Aligns the firm with the owner. Higher upside for both. Some firms blend this with a smaller flat retainer.",
        ],
      },
      {
        heading: "What 'cheap' actually costs you",
        paragraphs: [
          "The cheapest fee quote is rarely the cheapest total resolution. A firm that charges 10 percent up front but cannot defend a UCC freeze will cost you a separate litigation retainer when the funder escalates. A firm that quotes a low headline percentage but bills hourly post-signature can run far past the initial number.",
          "Total cost of resolution = settlement firm fees + any referred-out legal fees + any per-funder add-ons + any post-engagement fees if the situation evolves. Ask for that number in writing before signing.",
        ],
      },
      {
        heading: "Red flags in fee disclosures",
        paragraphs: [
          "Watch for verbal-only fee discussions, separate retainers required for each funder, hourly billing on what should be a fixed-fee case, and 'success fees' that activate on outcomes you did not specifically authorize.",
        ],
        bullets: [
          "No written fee schedule before contract",
          "Separate retainer per funder",
          "Hourly billing for routine settlement work",
          "Vague 'additional services may apply' clauses",
          "Fee tied to total debt rather than savings achieved",
        ],
      },
    ],
    takeaway:
      "Get the total cost of resolution in writing, not the headline rate. The cheapest quote that requires a separate litigation retainer later is rarely the cheapest path to resolution.",
  },
  {
    slug: "mca-settlement-vs-bankruptcy",
    title: "MCA settlement vs bankruptcy: which one fits your situation?",
    metaTitle: "MCA Settlement vs Bankruptcy: Side-by-Side Comparison",
    metaDescription:
      "When MCA settlement is the right tool, when bankruptcy is, and how to think about the trade-offs around credit, control, and personal exposure.",
    intro:
      "MCA settlement and bankruptcy are different tools for different problems. Settlement preserves the business as a going concern. Bankruptcy is a legal proceeding under federal law that restructures or discharges debt. Picking the wrong one is expensive.",
    sections: [
      {
        heading: "When settlement is the right tool",
        paragraphs: [
          "Settlement is the right tool when the underlying business is operationally viable, when the owner wants to keep the business running and the bank line intact, and when the MCA balance is the primary stress point.",
        ],
        bullets: [
          "Business is still generating revenue",
          "Owner wants to preserve credit and bank relationships",
          "MCA debt is the main issue, not a symptom of broader collapse",
          "Time exists to negotiate before funders sue",
        ],
      },
      {
        heading: "When bankruptcy is the right tool",
        paragraphs: [
          "Bankruptcy makes sense when debt extends well beyond MCAs, when the business cannot operate even with restructured payments, when assets need to be protected from multiple creditor actions at once, or when a personal guarantee is exposing the owner's home or savings.",
        ],
        bullets: [
          "Debt is broad: MCAs plus tax liens, equipment loans, supplier judgments",
          "Operations are non-viable even at zero MCA payment",
          "Personal assets are exposed via guarantee",
          "Multiple creditors are circling at once",
        ],
      },
      {
        heading: "Trade-offs to think through",
        paragraphs: [
          "Settlement preserves credit and operating relationships but does not stop a determined funder. Bankruptcy creates a legal stay but is public, slow, and expensive in legal fees. Settlement keeps the owner in control. Bankruptcy hands material control to the court.",
          "A good MCA settlement firm will tell you when bankruptcy is the better tool. A firm that pushes settlement when bankruptcy is clearly indicated is selling its product, not solving your problem.",
        ],
      },
    ],
    takeaway:
      "Pick the tool that matches the problem. If you are not sure, talk to a firm that has handled both paths and will tell you which one fits, even if it costs them the engagement.",
  },
  {
    slug: "how-to-choose-mca-settlement-company",
    title: "How to choose the right MCA settlement company",
    metaTitle: "How to Pick an MCA Settlement Company: 7 Things That Matter",
    metaDescription:
      "A practical checklist for evaluating MCA settlement firms: legal capability, fee structure, communication, third-party validation, and the right questions to ask.",
    intro:
      "Most MCA settlement firms look similar from a marketing page. The differences show up in the contract, in litigation capability, and in what happens after the sales call. Here is a checklist you can run before signing.",
    sections: [
      {
        heading: "1. Verify in-house legal capability",
        paragraphs: [
          "Ask: do you have attorneys on staff, and will they represent me if a funder sues during this engagement, under the same fee? If the answer is 'we partner with outside counsel and you would pay them separately,' that is a referral arrangement, not in-house legal.",
        ],
      },
      {
        heading: "2. Get the fee schedule in writing pre-contract",
        paragraphs: [
          "Insist on a written fee schedule that includes: total cost, payment milestones, what triggers each fee, and any additional fees that may apply. Verbal pricing is not pricing.",
        ],
      },
      {
        heading: "3. Ask for the named case manager",
        paragraphs: [
          "Sales teams hand off to operations teams. Ask who specifically will handle your file post-signature, and how to reach them. A firm that cannot name the person should not get your business.",
        ],
      },
      {
        heading: "4. Validate third-party reviews",
        paragraphs: [
          "Look for Trustpilot reviews with named clients, BBB profiles with multi-year history, and Reddit commentary in r/smallbusiness and adjacent subs. Outcome patterns repeat across reviews; sales claims do not.",
        ],
      },
      {
        heading: "5. Confirm scope clarity",
        paragraphs: [
          "Get in writing: which funders are covered, what happens if a new MCA is taken on during engagement, what counts as 'success,' and what happens if a funder refuses to negotiate.",
        ],
      },
      {
        heading: "6. Test responsiveness during intake",
        paragraphs: [
          "If the firm is slow or evasive during the sales process, it will be slow or evasive during the engagement. The intake experience predicts the operational experience.",
        ],
      },
      {
        heading: "7. Get a second opinion",
        paragraphs: [
          "Talk to at least two firms. Cross-check fee quotes, scope language, and what each firm tells you about your specific situation. Real firms welcome the comparison. Marketing-led firms pressure you to sign immediately.",
        ],
      },
    ],
    takeaway:
      "The right MCA firm answers all seven of these in writing, without pressure. If a firm pushes back on any of these, that is your signal.",
  },
  {
    slug: "mca-debt-relief-red-flags",
    title: "MCA debt relief red flags: how to spot the firms to avoid",
    metaTitle: "MCA Debt Relief Red Flags: 9 Warning Signs to Watch For",
    metaDescription:
      "Patterns that show up in problem MCA settlement firms: opaque fees, missing legal capability, aggressive sales pressure, and the regulatory history of the category.",
    intro:
      "The MCA settlement category has attracted regulatory attention for the same reasons every consumer debt-relief category has: high stress, urgent decisions, and structural information asymmetry. Most firms are legitimate. The patterns below describe the ones that are not.",
    sections: [
      {
        heading: "1. No written fee schedule pre-contract",
        paragraphs: [
          "If a firm will not put fees in writing before you sign, walk. This is the most consistent predictor of post-engagement disputes.",
        ],
      },
      {
        heading: "2. Pressure to sign on the first call",
        paragraphs: [
          "Real firms are comfortable with you taking 24 to 48 hours to think and to talk to a second firm. Aggressive same-call closes are a marketing-shop pattern.",
        ],
      },
      {
        heading: "3. Promises of guaranteed percentage reductions",
        paragraphs: [
          "Settlement outcomes depend on funder, business situation, and timing. Firms that 'guarantee' specific percentage reductions in marketing materials are often unable to back the guarantee with contract language.",
        ],
      },
      {
        heading: "4. No in-house legal capability",
        paragraphs: [
          "MCA cases are fundamentally legal products. A firm without attorneys on staff is going to refer out the moment your situation requires defense, and the referred counsel will charge separately.",
        ],
      },
      {
        heading: "5. Vague scope language in the contract",
        paragraphs: [
          "If the contract uses phrases like 'additional services may apply,' 'fees may vary,' or 'as determined by the firm,' those are blanks the firm fills in later, in their favor.",
        ],
      },
      {
        heading: "6. Limited or absent third-party reviews",
        paragraphs: [
          "A firm operating for several years should have BBB and Trustpilot footprints. Limited public reviews despite long operation suggests either small client volume or active suppression of negative feedback.",
        ],
      },
      {
        heading: "7. Sales team you cannot get past",
        paragraphs: [
          "Refusal to introduce you to operations, attorneys, or your post-signature case manager pre-contract usually means that experience will be different from the sales experience.",
        ],
      },
      {
        heading: "8. Disregard for bankruptcy as an option",
        paragraphs: [
          "A firm that refuses to discuss whether bankruptcy might fit your situation is selling its product, not advising you. Real firms tell you when their tool is not the right one.",
        ],
      },
      {
        heading: "9. Regulatory history",
        paragraphs: [
          "Check the firm against state Attorney General actions, FTC actions in the broader debt-relief category, and any active litigation. Past regulatory action is the strongest predictor of future regulatory action.",
        ],
      },
    ],
    takeaway:
      "Most legitimate MCA firms answer every one of these without flinching. The firms that flinch are the firms to avoid.",
  },
];

export function getGuideBySlug(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}
