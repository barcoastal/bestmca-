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
  faq?: { q: string; a: string }[];
  takeaway: string;
  updatedAt?: string;
  sources?: { label: string; url: string; note: string }[];
};

export const GUIDES: Guide[] = [
  {
  "slug": "what-is-mca-settlement",
  "title": "What is MCA settlement, and how does it actually work?",
  "metaTitle": "MCA Debt Settlement Explained: How It Works in 2026",
  "metaDescription": "Merchant cash advance settlement explained: what it is, how negotiation works, what it costs, and when it makes sense for a small business.",
  "intro": "MCA settlement is an attempt to reach a written agreement with a funder about an outstanding obligation. A proposal may seek a discounted payoff or revised payments. The funder can decline, and negotiations do not automatically stop enforcement.",
  "sections": [
    {
      "heading": "Settlement, restructuring and refinancing",
      "paragraphs": [
        "Settlement generally seeks an agreed resolution of a claimed balance. Restructuring changes payment terms. Refinancing uses new financing to address existing obligations. Ask which result the proposal actually offers and calculate the total amount you would pay, including fees."
      ]
    },
    {
      "heading": "Start with the contracts and cash flow",
      "paragraphs": [
        "Gather each agreement, current claimed balance, payment history, security filing, personal guarantee and any legal notices. Build a cash-flow forecast that includes essential operating costs. A representative should explain which creditors will be approached and what payments the business can sustain."
      ]
    },
    {
      "heading": "Put any agreement in writing",
      "paragraphs": [
        "Confirm the creditors and accounts covered, the amount and timing of payments, what happens on a missed payment and what releases are included. Do not assume settling a balance also releases a personal guarantee, ends a lawsuit or terminates every UCC filing. Have those provisions reviewed and verify completion."
      ]
    },
    {
      "heading": "There is no verified standard timeline or savings rate",
      "paragraphs": [
        "We have not established a representative MCA settlement dataset from which to estimate typical discounts or completion times. Provider examples are selected cases. Ask for assumptions, supporting records and a plan for a creditor that refuses."
      ]
    },
    {
      "heading": "Compare legal alternatives when needed",
      "paragraphs": [
        "Bankruptcy, litigation defense and consensual negotiation have different requirements and consequences. The U.S. Courts explains that Chapter 11 can permit continued operations under court supervision. An attorney should assess whether it is available or appropriate; an MCA label alone does not decide the legal treatment."
      ]
    }
  ],
  "faq": [
    {
      "q": "How long does MCA settlement take?",
      "a": "There is no verified industry-wide timeframe in our research. Timing depends on creditor participation, funding, disputed terms and any court proceedings. Request a case-specific plan without treating it as a guarantee."
    },
    {
      "q": "Should I stop payments while negotiations take place?",
      "a": "Negotiations do not themselves change payment obligations. Payment changes may trigger default or enforcement. Obtain advice on your contract and any legal notices before changing payments."
    },
    {
      "q": "Will a settlement protect my credit?",
      "a": "No credit outcome is guaranteed. Reporting, existing defaults, guarantees and future lender decisions vary. Review the proposed reporting terms and check the relevant credit records."
    }
  ],
  "takeaway": "Compare the written scope, creditor payments, all fees and unresolved legal issues. A sales promise does not replace a signed creditor agreement.",
  "sources": [
    {
      "label": "U.S. Courts: Chapter 11 basics",
      "url": "https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics/chapter-11-bankruptcy-basics",
      "note": "Federal court explanation of reorganization; not a determination about an individual MCA."
    }
  ],
  "updatedAt": "2026-09-14"
},
  {
  "slug": "how-much-does-mca-settlement-cost",
  "title": "How much does MCA settlement actually cost?",
  "metaTitle": "MCA Settlement Costs: Compare Fees and Total Payments",
  "metaDescription": "How to compare written MCA settlement fees, creditor payments, legal charges and cancellation terms without relying on unverified industry averages.",
  "intro": "A settlement quote is incomplete unless it separates the provider’s fees from money reaching creditors. We have not verified a representative industry fee range. Compare written proposals for the same balances and services.",
  "sections": [
    {
      "heading": "Identify the fee basis",
      "paragraphs": [
        "A proposal may use a fixed amount, a percentage of enrolled balances, a percentage of claimed savings or multiple charges. Ask exactly what is included in the calculation, when each charge becomes due and whether an unsuccessful negotiation still generates fees."
      ]
    },
    {
      "heading": "Calculate the full cost",
      "paragraphs": [
        "For a hypothetical $100,000 obligation, a $60,000 creditor settlement plus a $20,000 provider fee costs $80,000 before other charges. The net reduction is $20,000, not the $40,000 headline discount. These figures illustrate arithmetic, not typical MCA pricing or a predicted outcome."
      ]
    },
    {
      "heading": "Include legal and account charges",
      "paragraphs": [
        "Request any attorney, administration, payment-processing, account-maintenance and cancellation fees. Ask whether legal representation requires a separate agreement and whether fees apply separately to each creditor. Neither hourly billing nor a separate attorney engagement proves poor service; unclear scope makes comparison difficult."
      ]
    },
    {
      "heading": "Check the fee trigger and refund terms",
      "paragraphs": [
        "Stop MCA’s public FAQ, for example, describes an enrollment fee and a savings-related service fee but does not specify the amounts. This illustrates why a “free consultation” does not mean a free program. Confirm any refund conditions against the agreement."
      ]
    },
    {
      "heading": "Compare proposals on the same assumptions",
      "paragraphs": [
        "List creditor payments, provider fees, outside legal costs and unresolved balances. Model what happens if one creditor refuses, an account is sued or the business leaves the program. Ask for actual written terms instead of relying on a headline percentage."
      ]
    }
  ],
  "takeaway": "Compare the full cash outflow and contractual obligations. A lower provider fee is not necessarily a lower total cost.",
  "sources": [
    {
      "label": "Stop MCA: fee FAQ",
      "url": "https://stopmca.com/",
      "note": "Company disclosure of enrollment and service fees; not an industry-wide pricing benchmark."
    }
  ],
  "updatedAt": "2026-09-14"
},
  {
  "slug": "mca-settlement-vs-bankruptcy",
  "title": "MCA settlement vs bankruptcy: which one fits your situation?",
  "metaTitle": "MCA Settlement vs Bankruptcy: Side-by-Side Comparison",
  "metaDescription": "When MCA settlement is the right tool, when bankruptcy is, and how to think about the trade-offs around credit, control, and personal exposure.",
  "intro": "Consensual settlement and bankruptcy are different ways of addressing financial distress. Neither automatically preserves credit, assets or business operations. The appropriate route depends on the entity, obligations, contracts and applicable law.",
  "sections": [
    {
      "heading": "What settlement requires",
      "paragraphs": [
        "A negotiated proposal needs the relevant creditor’s agreement. It can address a balance or payment schedule, but other creditors and court deadlines remain relevant. Check whether the business can afford the resulting payments plus fees and ordinary operating expenses."
      ]
    },
    {
      "heading": "What Chapter 11 can involve",
      "paragraphs": [
        "The U.S. Courts describes Chapter 11 as reorganization in which a debtor often remains in possession and can continue operating. A filing generally creates an automatic stay, subject to exceptions and possible relief from the stay. This is not a promise that every collection action stops or that a particular business qualifies."
      ]
    },
    {
      "heading": "Business and personal exposure are separate questions",
      "paragraphs": [
        "The entity that owes the obligation, any personal guarantee and the property subject to security interests all matter. An agreement with one creditor does not necessarily release a guarantor or solve other liabilities. Obtain an assessment that includes both the business and personal exposure."
      ]
    },
    {
      "heading": "Compare realistic alternatives",
      "paragraphs": [
        "Ask counsel to compare eligibility, expected costs, creditor participation, court supervision, taxes and effects on operations. There is no universal rule that settlement is cheaper or bankruptcy is a last resort. Compare scenarios using a cash-flow forecast rather than a guaranteed savings claim."
      ]
    }
  ],
  "takeaway": "Get case-specific advice comparing negotiation and court-supervised options. Do not assume that either path guarantees continued operations or protects credit.",
  "sources": [
    {
      "label": "U.S. Courts: Chapter 11 basics",
      "url": "https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics/chapter-11-bankruptcy-basics",
      "note": "Explains debtor-in-possession operations, reorganization and the automatic stay, including limits."
    }
  ],
  "updatedAt": "2026-09-14"
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
  {
    slug: "mca-contract-red-flags",
    title: "Common red flags in MCA contract terms, explained clause by clause",
    metaTitle: "MCA Contract Red Flags: 8 Terms to Check Before You Sign",
    metaDescription:
      "The MCA contract terms that hurt business owners most: Confessions of Judgment, broad UCC liens, no reconciliation clause, personal guarantees, and default triggers, explained in plain English.",
    intro:
      "Most owners sign an MCA agreement in under a day, often under cash pressure, and discover what the terms actually mean months later. These are the clauses that do the damage, what each one means in plain English, and what to check before you sign or before you negotiate your way out.",
    sections: [
      {
        heading: "Confession of Judgment (COJ)",
        paragraphs: [
          "A COJ is a signed admission that you owe the money, filed away until the funder needs it. If you default, the funder can enter a judgment against you almost immediately, without a lawsuit, without a hearing, and in some states without notice. It converts a contract dispute into an enforceable judgment overnight.",
          "New York banned COJs against out-of-state debtors in 2019, but they persist in other jurisdictions and in older agreements. If your contract contains one, treat any default as a legal emergency rather than a negotiation opening, and get representation involved before you miss a payment, not after.",
        ],
      },
      {
        heading: "Blanket UCC liens",
        paragraphs: [
          "Most MCA agreements file a UCC-1 lien against all business assets, not just receivables. The practical damage: the lien blocks bank loans, SBA refinancing, and inventory financing until it is released, and an aggressive funder can send UCC notices to your customers instructing them to redirect payments.",
          "Check how many UCC filings are already against your business (your state's Secretary of State site lists them free). Every settlement you negotiate should include a written lien release, and no resolution is complete until the filings are actually terminated.",
        ],
      },
      {
        heading: "No reconciliation clause, or one that requires you to ask",
        paragraphs: [
          "A reconciliation clause lets the daily pull be adjusted to your actual revenue. Its presence is also what legally distinguishes a receivables purchase from a disguised loan. Contracts without one, or with a version that puts the burden entirely on you to request and document, are the ones that break businesses in a slow month.",
          "If your contract has a reconciliation clause you have never used, that is often the fastest legitimate payment relief available. See our reconciliation guide for how to invoke it.",
        ],
      },
      {
        heading: "Personal guarantees and spousal signatures",
        paragraphs: [
          "A personal guarantee means the funder can pursue your personal assets when the business cannot pay. Watch especially for guarantee language buried in performance covenants, and for requests that a spouse co-sign, which extends exposure to household assets that have nothing to do with the business.",
        ],
      },
      {
        heading: "Default triggers that have nothing to do with missing payments",
        paragraphs: [
          "Many agreements define default to include things owners do routinely: changing banks, adding another financing, dipping below a minimum daily balance, or even declining revenue itself. Broad triggers let a funder call default, and use COJ or lien remedies, while you are still technically paying.",
        ],
        bullets: [
          "Changing bank accounts without funder consent",
          "Taking any additional financing (anti-stacking clauses)",
          "Minimum balance or minimum deposit covenants",
          "Blocked or rerouted card processing",
        ],
      },
      {
        heading: "Fees that survive the advance",
        paragraphs: [
          "Origination fees, ACH fees, default fees, attorney fee shifting, and prepayment terms that make early payoff cost the same as full term. On a stacked file these fees compound. Any settlement conversation should start from a full accounting of what was advanced, what has been repaid, and what the fees actually were.",
        ],
      },
    ],
    faq: [
      {
        q: "What is the single worst clause to find in an MCA contract?",
        a: "A Confession of Judgment. It removes your right to defend yourself in court before a judgment is entered, which turns any default into an immediate legal emergency. Contracts with COJs need professional handling before a missed payment, not after.",
      },
      {
        q: "Are MCA contracts even legal?",
        a: "Generally yes, because they are structured as purchases of future receivables rather than loans, which exempts them from usury caps in most states. Courts occasionally recharacterize an MCA as a loan when it lacks true reconciliation and recourse features, which is one of the legal levers settlement attorneys use.",
      },
      {
        q: "Can I get out of an MCA contract I already signed?",
        a: "You cannot simply cancel it, but the balance, payment schedule, and liens are all negotiable, especially when the funder's realistic alternative is a default they would have to chase. That negotiation is what MCA settlement is. See our guide to how settlement works.",
      },
    ],
    takeaway:
      "Read for the COJ, the lien scope, the reconciliation clause, the guarantee, and the default triggers. Those five clauses decide how bad a bad month becomes.",
  },
  {
    slug: "warning-signs-mca-funder-legal-action",
    title: "8 warning signs your MCA funder is about to take legal action",
    metaTitle: "8 Warning Signs Your MCA Funder Is About to Sue (2026)",
    metaDescription:
      "The escalation pattern MCA funders follow before filing suit: default notices, UCC letters to your customers, frozen processing, COJ threats, and what to do at each stage.",
    intro:
      "Funders rarely sue out of nowhere. There is a recognizable escalation ladder, and owners who know the rungs can act one step ahead instead of one step behind. Here are the eight signs litigation is coming, roughly in the order they appear.",
    sections: [
      {
        heading: "The escalation ladder",
        paragraphs: [
          "Each of these steps is a signal, and each one narrows your options slightly. The earlier on this list you act, the more leverage you have.",
        ],
        bullets: [
          "1. Missed-remittance calls turn into formal default notices citing contract sections",
          "2. The funder starts re-presenting failed ACH pulls multiple times a day",
          "3. You receive a demand letter from a law firm rather than the funder's collections desk",
          "4. UCC notification letters go out to your customers or card processor",
          "5. Your merchant processing account is frozen or reserves are imposed",
          "6. The funder requests updated bank statements or an estoppel letter (building its case file)",
          "7. References to the personal guarantee, or your spouse, enter the conversation",
          "8. In COJ contracts: any mention that judgment 'can be entered at any time'",
        ],
      },
      {
        heading: "What each stage means for your options",
        paragraphs: [
          "Stages one through three are still negotiation territory. Funders send legal-flavored letters precisely because they are cheaper than actual litigation, and most funders would still rather restructure or settle than pay counsel to chase a distressed business.",
          "Stages four and five are operational attacks. Once customers get UCC letters or processing freezes, the funder is spending real effort, and the damage to your revenue makes every later settlement harder to fund. This is the point where professional representation stops being optional in practice.",
          "Stages six through eight mean litigation is being prepared. If a COJ exists, judgment can arrive in days. Anything you send the funder at this stage, statements, estoppel letters, admissions on calls, can be used in the case, so route communication through your representative.",
        ],
      },
      {
        heading: "What not to do when the letters start",
        paragraphs: [
          "Do not silently close the bank account the funder debits: in most agreements that is itself an event of default and reads as bad faith in any later proceeding. Do not sign anything new, particularly hardship or modification agreements with fresh COJs inside, without review. And do not stop all payments as a negotiation tactic without a legal strategy prepared for what follows.",
        ],
      },
      {
        heading: "The window that matters",
        paragraphs: [
          "The best settlements in our review data happen between the first default notice and the first filing. Before the notice, funders see no reason to discount. After a judgment, they have no reason to. The weeks in between are when a credible representative can convert the funder's litigation cost into your discount.",
        ],
      },
    ],
    faq: [
      {
        q: "How fast can an MCA funder actually get a judgment?",
        a: "With a Confession of Judgment on file, days. Without one, the funder must sue and win, which takes weeks to months and costs them real money, which is exactly the leverage a settlement negotiation uses.",
      },
      {
        q: "My funder sent a UCC letter to my biggest customer. Is it over?",
        a: "No, but the clock is loud. UCC notices are as much pressure tactic as remedy, and they are frequently withdrawn as part of a negotiated resolution. Get representation involved immediately so customer relationships take as little damage as possible.",
      },
      {
        q: "Should I answer calls from the funder's law firm?",
        a: "Politely take their contact details and route the conversation through your representative. Anything you say on those calls can shape the case; experienced counsel says less and settles more.",
      },
    ],
    takeaway:
      "Funders telegraph litigation before they file. The window between the first default notice and the first filing is where settlements are won, use it.",
  },
  {
    slug: "what-happens-mca-default",
    updatedAt: "2026-09-18",
    title: "What actually happens when you default on a merchant cash advance",
    metaTitle: "MCA Default: What Actually Happens, Week by Week (2026)",
    metaDescription:
      "The real timeline of an MCA default: default notices, ACH re-presentments, frozen processing, UCC letters, COJ judgments, and the recovery paths that still exist at each stage.",
    intro:
      "Owners imagine default as a cliff. It is closer to a staircase: a sequence of escalations, each with options still attached. Here is the realistic week-by-week pattern we see across public court records and client accounts, and what remains recoverable at each stage.",
    sections: [
      {
        heading: "Days 1 to 7: the machine notices",
        paragraphs: [
          "The first missed remittances trigger automated re-presentments, often multiple ACH attempts per day, each one generating bank fees on your side. Collections calls begin. A formal default notice usually lands within the week, citing the contract and reserving all remedies.",
          "What is still fully available: everything. At this stage funders routinely accept reinstated payments, temporary reductions, or a reconciliation adjustment if your contract has the clause. The mistake owners make in week one is silence.",
        ],
      },
      {
        heading: "Weeks 2 to 4: pressure becomes operational",
        paragraphs: [
          "If contact fails, funders move on the infrastructure: instructing your card processor to hold funds, imposing reserves, or sending UCC notification letters to your customers directing payments to the funder. Stacked positions accelerate here, because one funder's freeze causes defaults on the others.",
          "What is still available: negotiated restructures and settlements, though the funder's asking price rises once it has spent effort. Owners with multiple positions need the negotiation coordinated across funders now, not one at a time.",
        ],
      },
      {
        heading: "Month 2 onward: the legal phase",
        paragraphs: [
          "Contracts with a Confession of Judgment can produce an entered judgment almost immediately once the funder decides to use it, followed by bank restraints and levies. Without a COJ, expect a filed lawsuit that you must answer, typically within 20 to 30 days depending on the state, or face default judgment.",
          "What is still available: more than most owners think. Filed cases settle constantly, COJ judgments can sometimes be vacated on procedural grounds, and even post-judgment balances get negotiated because enforcement against a struggling business is slow and expensive. But every option costs more here than it did in week one.",
        ],
      },
      {
        heading: "What default does not automatically mean",
        paragraphs: [
          "Default does not automatically close your business, seize your equipment, or take your house. Those outcomes require enforcement steps that take time and money, which is exactly why negotiated resolutions remain available deep into the process. It also does not appear on personal credit automatically, though judgments and guarantee enforcement can get there eventually.",
        ],
      },
      {
        heading: "If you are reading this before defaulting",
        paragraphs: [
          "The single highest-leverage moment in the entire timeline is right before the first missed payment. A funder approached with a documented hardship and a restructure proposal before default treats you as a merchant managing a problem. The same conversation two months later happens against default interest, legal fees, and a case file.",
        ],
      },
    ],
    faq: [
      {
        q: "Will an MCA default hurt my personal credit?",
        a: "Personal liability and credit reporting are separate questions. Check the guarantee, the provider’s reporting practices, and actual credit reports. Resolving a balance does not guarantee a particular reporting or score outcome.",
      },
      {
        q: "Can the funder take money directly from my bank account?",
        a: "During the contract it already does, via authorized ACH. After default and a judgment, it can restrain and levy accounts through legal process. Between those two points, closing accounts without strategy tends to trigger default clauses, so make banking moves part of a plan, not a panic.",
      },
      {
        q: "Is it ever too late to settle an MCA debt?",
        a: "Rarely. Even post-judgment balances settle, because enforcement is slow and uncertain for the funder. What changes is price: each escalation stage raises the percentage funders demand. Earlier is cheaper, but later is still negotiable.",
      },
    ],
    takeaway:
      "Default is a staircase, not a cliff. Options exist at every stage; they just get more expensive each step down. Act on the first notice, not the fifth.",
  },
  {
    slug: "negotiate-mca-debt-yourself",
    title: "Can you negotiate MCA debt yourself? An honest DIY assessment",
    metaTitle: "Negotiating MCA Debt Yourself: When DIY Works and When It Backfires",
    metaDescription:
      "A straight answer on DIY MCA settlement: the situations where owners succeed alone, the mistakes that trigger defaults and judgments, and the honest math on professional fees.",
    intro:
      "Professional fees vary, and this site has not established a representative industry range. Direct negotiation may be worth exploring, but assess the contract, disputed balances and any legal proceedings before deciding whether representation is needed.",
    sections: [
      {
        heading: "Where DIY genuinely works",
        paragraphs: [
          "One position, a funder you are current with, and a documentable hardship: that is the DIY sweet spot. Funders handle hardship requests daily, and a single-position merchant asking for a temporary reduction or invoking a reconciliation clause often gets it without any intermediary.",
          "Available cash may support a lump-sum proposal, but no particular percentage or acceptance time is assured. Document the claimed balance and ask for the creditor’s written terms before transferring funds.",
        ],
        bullets: [
          "Single MCA position, no default yet",
          "A contract with a reconciliation clause you can invoke",
          "Access to lump-sum cash for an immediate discounted payoff",
          "A cooperative, established funder rather than a litigation-heavy one",
        ],
      },
      {
        heading: "Where DIY predictably backfires",
        paragraphs: [
          "Stacked positions are the clearest disqualifier. Settling one funder while three others keep pulling daily achieves nothing, and the negotiations interact: one funder learning another got a discount changes its posture. Coordinated multi-funder negotiation is genuinely hard to run from inside the business.",
          "The second disqualifier is any legal exposure: a Confession of Judgment in the contract, a received demand letter, or a litigation-aggressive funder. Owners negotiating solo make admissions on recorded calls, sign modifications with fresh COJs inside, or stop payments as a bluff, each of which converts a negotiation into a judgment.",
          "The third is the knowledge gap on price. Funders negotiate these balances all day and know exactly what each week of pressure is worth. Owners anchor against hope. Firms that work the same funders repeatedly know each one's actual settlement bands, which is a real information asymmetry, and most of what the fee buys.",
        ],
      },
      {
        heading: "The honest math on fees",
        paragraphs: [
          "Hypothetically, a 20 percent fee on $200,000 is $40,000. Compare that fee plus creditor payments and legal costs with other available proposals. These figures are an arithmetic example, not evidence that a representative will improve an outcome by a particular amount.",
          "Whatever you choose, the fee structure rules from our cost guide apply: written fee schedule, defined success, fees tied to results, and no large upfront payments before any work.",
        ],
      },
      {
        heading: "A middle path most owners skip",
        paragraphs: [
          "An hour or two of consultation with an MCA-experienced attorney, paid hourly, buys a contract read, a COJ check, and a realistic settlement range, without enrolling in anything. For single-position owners leaning DIY, that small spend removes the most dangerous unknowns before you dial the funder.",
        ],
      },
    ],
    faq: [
      {
        q: "What should I say when I call my MCA funder to negotiate?",
        a: "Lead with documentation, not emotion: revenue is down X percent, here are the statements, the current pull is unsustainable, and you are proposing a specific restructured amount. Ask whether the contract's reconciliation provision applies. Never state that you intend to stop paying.",
      },
      {
        q: "Can I record my calls with the funder?",
        a: "Recording laws vary by state (some require all-party consent), but you should assume the funder records everything, and that anything you admit can surface later. Keep calls factual and short, and follow up in writing.",
      },
      {
        q: "If I start DIY and it goes wrong, can a firm take over?",
        a: "Yes, firms inherit half-negotiated files constantly. The handoff is harder if you have made written admissions or signed a modification, so if you feel the conversation turning legal, stop and get representation before signing anything.",
      },
    ],
    takeaway:
      "One clean position: consider DIY, ideally after an hour of legal review. Stacked, defaulted, or COJ-exposed: the information asymmetry is against you, and representation usually pays for itself.",
  },
  {
    slug: "mca-reconciliation-clause",
    title: "The MCA reconciliation clause: the payment cut most owners never claim",
    metaTitle: "MCA Reconciliation Clause: How to Lower Your Daily Payment (2026)",
    metaDescription:
      "Most MCA contracts contain a reconciliation clause that legally entitles you to a payment adjusted to real revenue. How to find it, invoke it, and what to do if the funder stalls.",
    intro:
      "Buried in most MCA agreements is a clause that can lower your daily payment without a settlement, a default, or a fee: reconciliation. It exists because the funder needs it there for legal reasons. Most owners never use it. Here is how it works and how to claim it.",
    sections: [
      {
        heading: "Why the clause exists at all",
        paragraphs: [
          "An MCA is legally a purchase of a percentage of your future revenue, not a loan. But the daily amount you pay is a fixed dollar figure estimated from past revenue. Reconciliation is the mechanism that trues the fixed pull back to the agreed percentage of actual revenue, and its presence is a core reason courts treat MCAs as purchases rather than usurious loans.",
          "That legal function is your leverage: a funder that ignores its own reconciliation clause is undermining the characterization its entire contract depends on, and experienced attorneys make exactly that point when funders stall.",
        ],
      },
      {
        heading: "How to invoke it, step by step",
        paragraphs: [
          "The process is administrative, not adversarial. Done properly it reads like bookkeeping, not distress.",
        ],
        bullets: [
          "Find the clause: search the agreement for 'reconciliation', 'adjustment', or 'true-up'",
          "Compute the gap: agreed percentage times actual monthly revenue versus what was actually debited",
          "Gather proof: bank statements and processing statements for the period",
          "Send the request in writing, to the notice address in the contract, citing the clause number",
          "Ask for both: a refund or credit of the over-collection, and a reduced go-forward daily amount",
          "Calendar the response deadline the clause specifies, and follow up in writing",
        ],
      },
      {
        heading: "What funders do when you ask",
        paragraphs: [
          "Established funders process legitimate reconciliation requests, grudgingly but routinely. The stall patterns to expect: requests for endless additional documentation, offers to 'modify' the agreement instead (read anything new for fresh guarantees or COJs before signing), or simple silence past the contractual deadline.",
          "Silence or refusal converts a bookkeeping request into evidence. Documented refusal to reconcile supports a recharacterization argument, the claim that the MCA is actually a disguised loan, which is one of the stronger levers a settlement attorney can bring to the table afterward.",
        ],
      },
      {
        heading: "What reconciliation cannot do",
        paragraphs: [
          "Reconciliation adjusts the payment to your revenue reality. It does not reduce the total you owe, remove liens, or fix a stack of five positions each pulling daily. If the business cannot survive even a correctly reconciled payment, you are past the bookkeeping remedy and into restructuring or settlement territory, and it is better to know that early.",
        ],
      },
    ],
    faq: [
      {
        q: "Does every MCA contract have a reconciliation clause?",
        a: "Most modern agreements do, because it protects the funder's legal characterization. Some older or more aggressive contracts omit it or make it discretionary. If yours has none, that absence itself is useful to a settlement attorney arguing the advance functions as a loan.",
      },
      {
        q: "Will asking for reconciliation put me in default?",
        a: "No. Invoking a right the contract grants you is not a default event, and the request, made in writing with documentation, signals a merchant managing the account rather than one about to disappear. What triggers defaults is missed payments and silence.",
      },
      {
        q: "My revenue dropped 40 percent. How much should my payment drop?",
        a: "In principle, proportionally: the daily pull should true up to the agreed percentage of actual revenue, so a 40 percent revenue drop supports roughly a 40 percent payment reduction for the period, plus a credit for what was over-collected. The contract's exact formula governs.",
      },
    ],
    takeaway:
      "Before you pay anyone to fix an unaffordable MCA payment, check whether the contract already obligates the funder to fix it. Reconciliation is free, fast when it works, and evidence when it does not.",
  },
  {
    slug: "mca-attorneys-vs-settlement-companies",
    updatedAt: "2026-09-18",
    title: "MCA attorneys vs settlement companies: which one do you actually need?",
    metaTitle: "MCA Attorney or Settlement Company? How to Choose (2026)",
    metaDescription:
      "Lawyers and settlement firms solve different MCA problems. When you need an attorney, when a settlement company is enough, what each costs, and how to find the right one in your state.",
    intro:
      "Owners searching for MCA help find two different animals: law firms and settlement companies. They overlap enough to be confusing and differ enough that picking wrong costs real money. Here is the clean split, and a state-by-state note on when the lawyer question actually matters.",
    sections: [
      {
        heading: "What each one actually does",
        paragraphs: [
          "A settlement company negotiates commercial deals: reduced balances, restructured payments, coordinated multi-funder workouts. Its leverage is financial, the funder's cost of chasing you versus taking a discount today. It cannot represent you in court, file motions, or vacate a judgment.",
          "An attorney brings legal leverage: answering lawsuits, challenging Confessions of Judgment, contesting UCC enforcement, and raising recharacterization arguments (that the advance functions as a usurious loan). Attorneys can also negotiate settlements, though a litigation shop billing hourly is not always the cheapest negotiator.",
          "Coastal is featured first by editorial choice. Its company materials describe an attorney network; we have not verified an in-house litigation team or a universal legal-services package. Confirm the named attorney, scope, jurisdiction, and fees in a written agreement.",
        ],
      },
      {
        heading: "Clear signs you need an attorney, not just a negotiator",
        paragraphs: [
          "Some situations are legal problems wearing a debt costume. In any of these, negotiation without counsel leaves you exposed:",
        ],
        bullets: [
          "You have been served with a lawsuit, or a judgment already exists",
          "Your contract contains a Confession of Judgment",
          "Your bank account has been restrained or levied",
          "UCC notices have gone to your customers or processor",
          "The funder's conduct suggests a recharacterization or usury defense worth raising",
        ],
      },
      {
        heading: "Clear signs a settlement company is enough",
        paragraphs: [
          "Even without a lawsuit, a proposed payment change can have contractual consequences. Compare the services offered and ask whether legal review is needed. The absence of litigation does not establish that a settlement company alone is sufficient.",
        ],
      },
      {
        heading: "Does my state matter?",
        paragraphs: [
          "Jurisdiction matters. Have counsel review forum and choice-of-law provisions alongside applicable law, the parties, and any actual proceeding. Do not assume a contractual clause conclusively resolves every jurisdiction or enforcement issue.",
          "Confirm that the lawyer is authorized to handle the relevant matter and court. Local advice may also be necessary for assets, enforcement, or other issues in a different jurisdiction.",
        ],
      },
      {
        heading: "What each costs",
        paragraphs: [
          "No representative industry fee range was verified for this guide. Request written settlement and attorney quotes for the actual services needed, including separate engagements, ongoing charges and cancellation terms.",
        ],
      },
    ],
    faq: [
      {
        q: "Can a settlement company stop a lawsuit?",
        a: "No. Only an attorney can appear in court for you. A settlement company can negotiate while a suit is pending, but the deadlines to answer a complaint run regardless, which is why sued owners need counsel first and negotiation second.",
      },
      {
        q: "Do I need a lawyer in my own state?",
        a: "The answer depends on the contract, applicable law, location of assets, and any court proceeding. Confirm appropriate licensing and whether counsel in more than one jurisdiction is needed.",
      },
      {
        q: "Is a law firm always the safer choice?",
        a: "Neither a label nor a staffing model guarantees a better result. Compare qualifications, proposed services, written fees, and conflicts. Ask who is responsible for legal advice and representation.",
      },
    ],
    takeaway:
      "Confirm the actual service scope, responsible professionals, jurisdiction, and total fees. Do not infer court representation from an advertised attorney network.",
  },
  {
    slug: "ucc-lien-release-mca",
    title: "UCC liens from MCA funders: how they hurt you and how to get them released",
    metaTitle: "MCA UCC Liens: Removal and Release After Settlement (2026)",
    metaDescription:
      "MCA funders file blanket UCC-1 liens that block refinancing and can reach your customers. How to find every filing, what a release requires, and the settlement mistake that leaves liens alive.",
    intro:
      "Every MCA you signed almost certainly produced a UCC-1 filing against your business, and those filings outlive the problems you can see. They block refinancing, spook lenders, and let funders reach your customers. Here is how to find them, what they really do, and how to get them off.",
    sections: [
      {
        heading: "What the filing actually is",
        paragraphs: [
          "A UCC-1 financing statement is a public notice, filed with your state's Secretary of State, that a creditor claims a security interest in your assets. MCA funders typically claim everything: receivables, inventory, equipment, deposit accounts. The filing itself seizes nothing, but it establishes priority and it is public.",
          "Two practical harms follow. First, any bank, SBA lender, or factor that searches your name sees the filings and either declines or demands subordination. Second, a funder in default posture can send notices to your account debtors, your customers, directing them to pay the funder directly, which is both a cash-flow attack and a reputation hit.",
        ],
      },
      {
        heading: "Find every filing before you negotiate",
        paragraphs: [
          "Search your state's Secretary of State UCC database (free in most states) for your legal entity name and any DBAs. Stacked owners are routinely surprised: filings from funders long paid off, duplicate filings, even filings from brokers who never advanced a dollar. Build the list first; every one of them is a negotiation item.",
        ],
      },
      {
        heading: "How releases actually happen",
        paragraphs: [
          "A proper settlement agreement obligates the funder to file a UCC-3 termination within a stated window after final payment, and gives you the right to file it yourself if they fail. That last clause matters: collections departments are diligent about filing liens and lazy about terminating them.",
          "After final payment, verify. Pull the state record again two to four weeks later and confirm the termination is on file. If it is not, send written demand citing the agreement; funders who ignore termination obligations after being paid are exposed under UCC Article 9's own remedy provisions, and they know it.",
        ],
      },
      {
        heading: "The settlement mistake that leaves liens alive",
        paragraphs: [
          "Paying a discounted balance without a written release clause is the classic error. The debt is compromised, the funder loses interest, and the filing sits on the record for its full five-year life, blocking your refinance two years later when the funder's phone number no longer answers. No release language, no deal, that rule has no exceptions worth making.",
        ],
      },
    ],
    faq: [
      {
        q: "How long does a UCC lien last if nobody removes it?",
        a: "Five years from filing in most states, and the funder can renew it. Waiting out the clock is rarely a plan; termination through settlement or demand is.",
      },
      {
        q: "Can I get financing while MCA UCC liens are on file?",
        a: "It is hard. Most lenders require first position or clean records. Some will lend against a payoff-and-release arranged at closing, which is another reason your settlement paperwork must nail the release mechanics.",
      },
      {
        q: "A funder I finished paying years ago still has a filing. What do I do?",
        a: "Send a written demand for termination under UCC 9-513; the funder generally must file or authorize termination within about 20 days once the obligation is satisfied. If they ignore it, you can file a UCC-3 with an explanation, and an attorney letter usually resolves it faster than that.",
      },
    ],
    takeaway:
      "Liens outlive debts. List every filing before negotiating, put release language in every settlement, and verify the terminations actually hit the public record.",
  },
  {
    slug: "stacked-mca-debt",
    title: "Stacked MCAs: why the third advance breaks the business, and the way out",
    metaTitle: "Stacked MCA Debt: How to Get Out of Multiple Positions (2026)",
    metaDescription:
      "Why MCA stacking spirals so fast, what total daily remittance your revenue can actually carry, and how coordinated multi-funder settlement unwinds a stack without closing the business.",
    intro:
      "Nobody plans to stack. The second advance covered the first one's pulls; the third covered payroll; by the fourth the business is remitting a quarter of gross revenue daily. Stacking is the single most common shape of the files that reach settlement firms, and unwinding it has rules of its own.",
    sections: [
      {
        heading: "The arithmetic of the spiral",
        paragraphs: [
          "Each advance is priced as if it were the only one: a pull sized to 10 or 15 percent of revenue is survivable alone. Three of them remit 30 to 45 percent of gross off the top, against businesses whose entire margin is often under 15 percent. From that point the stack is mathematically unpayable from operations; it is being paid from working capital, supplier float, and the owner's savings, which is why it feels fine until it suddenly does not.",
          "Stacking also usually violates every contract in the pile. Anti-stacking clauses make each new advance an event of default on the earlier ones, leverage funders hold quietly until they want it.",
        ],
      },
      {
        heading: "Why you cannot settle a stack one funder at a time",
        paragraphs: [
          "Settle position one while positions two through four keep pulling daily, and you have spent your settlement cash without changing the math. Worse, funders talk: a discount granted to one repositions the others' demands. Stacks get resolved as a coordinated negotiation, one financial picture presented to all funders, priority respected, and the total resolution sized to what the business can actually fund.",
          "Priority matters more than owners expect. First-position funders with senior UCC filings have real leverage; fourth-position funders behind three liens are often functionally unsecured and settle at the steepest discounts. A negotiator who understands the priority ladder spends your money where it buys the most.",
        ],
      },
      {
        heading: "The number that decides everything",
        paragraphs: [
          "Before any strategy: compute total daily remittance across all positions as a percentage of average daily revenue, and compare it to your true operating margin. That single ratio determines whether the answer is reconciliation and restructure (ratio modestly above margin), coordinated settlement (well above), or a wind-down conversation (multiples above with declining revenue). Honest firms run this math on the first call; be suspicious of any that promise outcomes before seeing it.",
        ],
      },
      {
        heading: "While the workout runs",
        paragraphs: [
          "Keep revenue visible and honest: hiding deposits in new accounts breaches every agreement in the stack and destroys the credibility a coordinated deal depends on. Do not take a fifth advance to buy a quiet month; each new position resets every negotiation. And keep supplier relationships current where possible, because the business's survival is the asset every funder is being asked to bet on.",
        ],
      },
    ],
    faq: [
      {
        q: "How many MCA positions can realistically be settled at once?",
        a: "Coordinated workouts across three to six positions are routine at established firms; the record files run higher. The constraint is not the count, it is whether the business generates enough to fund a credible total resolution.",
      },
      {
        q: "Should I pay the most aggressive funder first?",
        a: "Not automatically. Aggression and legal priority are different things. Strategy usually follows the UCC priority ladder and each funder's litigation posture together, quieting the genuinely dangerous positions while junior liens wait, which is exactly the coordination a stacked workout exists to manage.",
      },
      {
        q: "Is a reverse consolidation a way out of a stack?",
        a: "It replaces many daily pulls with one, which feels like relief, but it adds a new funded position on top of the stack, usually at real cost, and resolves nothing. For most stacked files it postpones the reckoning and raises its price. See our consolidation guide for the full comparison.",
      },
    ],
    takeaway:
      "A stack is one problem, not four. Compute the remittance-to-revenue ratio, respect the priority ladder, and resolve the whole picture in one coordinated negotiation.",
  },
  {
    slug: "frozen-account-mca-funder",
    title: "Funder froze your account? What to do in the first 48 hours",
    metaTitle: "MCA Funder Froze Your Bank or Merchant Account: First 48 Hours",
    metaDescription:
      "Whether it is a restrained bank account or a held merchant processor, the first 48 hours decide how bad an MCA freeze gets. The triage steps, in order, and the calls not to make.",
    intro:
      "A freeze is the moment an MCA problem stops being theoretical: payroll is Friday and the money will not move. Bank restraints and processor holds have different mechanics and different fixes, and the first 48 hours of response determine most of the damage. Here is the triage, in order.",
    sections: [
      {
        heading: "First, identify which freeze you have",
        paragraphs: [
          "A merchant processing hold means the funder (or its partner processor) is holding card settlements before they reach you. It is contractual, fast, and usually reversible by agreement. A bank account restraint means a judgment exists, almost always via a Confession of Judgment or a suit you did not answer, and the funder's attorneys have served your bank. That one is legal process, and it is the more serious of the two.",
          "You can tell the difference in one call to your bank: ask whether there is a legal restraint on the account and who served it. If the bank says restraint, get the case caption and index number; your attorney needs both.",
        ],
      },
      {
        heading: "Hour 1 to 12: stop the bleeding",
        paragraphs: [
          "Protect payroll first: if a restraint hit your operating account, do not deposit new funds into it, incoming money is captured too. Run essential payments from an account at a different bank that was never on file with the funder, opened properly, not hidden, your attorney will disclose it in negotiation. Notify your payroll provider before the run date; failed payroll pulls create their own cascade.",
          "Do not call the funder and vent. Every statement is negotiation material, and desperation reprices the settlement against you. The outreach that works is representative-to-funder within a day, with a concrete proposal attached to the release.",
        ],
      },
      {
        heading: "Hour 12 to 48: the release negotiation",
        paragraphs: [
          "Processor holds release by agreement: funders use them to force contact, and routinely lift them against a signed payment plan or settlement framework. Speed matters because every held settlement batch is revenue your resolution will need.",
          "Bank restraints release three ways: negotiated stipulation (fastest and most common), motion to vacate the judgment where grounds exist, COJ procedural defects and service failures are the usual ones, or satisfaction of the judgment. An attorney who works MCA files will know within one read of the paperwork which path your facts support.",
        ],
      },
      {
        heading: "After the release: fix the cause",
        paragraphs: [
          "A freeze is a symptom. The judgment or default that produced it is still there, and a funder who froze once will freeze again. Fold the release into a full resolution, settled balance, payment schedule, UCC release, judgment satisfaction filed with the court, rather than paying whatever unlocks the account today and facing the same funder next quarter.",
        ],
      },
    ],
    faq: [
      {
        q: "Can the funder freeze my personal bank account too?",
        a: "If you signed a personal guarantee and the judgment names you personally, yes, personal accounts can be restrained. That escalation is exactly why guarantee files need counsel before default, not after the freeze.",
      },
      {
        q: "How long does a processor hold last?",
        a: "As long as it takes to force the conversation the funder wants, days to weeks. Holds typically lift within days of a signed framework, which is why fast, credible engagement beats waiting the funder out.",
      },
      {
        q: "The judgment was entered through a COJ I barely remember signing. Can it be undone?",
        a: "Sometimes. COJ judgments get vacated for procedural defects, defective affidavits, improper venue, service failures, and New York barred out-of-state COJs in 2019. Whether attacking the judgment beats settling it is a fact-specific attorney call, and both paths often run in parallel.",
      },
    ],
    takeaway:
      "Identify the freeze type, protect payroll from a clean account, say nothing to the funder directly, and trade the release for a full resolution, not just a reopened account.",
  },
  {
    slug: "mca-consolidation-vs-settlement",
    title: "MCA consolidation vs settlement: one reduces payments, one reduces debt",
    metaTitle: "MCA Consolidation vs Settlement: Which Actually Helps? (2026)",
    metaDescription:
      "Consolidation and reverse consolidation restructure MCA payments; settlement reduces the balance itself. The honest comparison, the reverse-consolidation trap, and how to choose.",
    intro:
      "Half the ads promising MCA relief sell consolidation; the other half sell settlement. They sound interchangeable and are nearly opposites: one changes the shape of what you pay, the other changes the amount you owe. Choosing wrong adds months and real money to the problem.",
    sections: [
      {
        heading: "What consolidation really is",
        paragraphs: [
          "MCA consolidation replaces multiple advances with one new obligation, a term loan or a fresh advance, that pays the others off. Your daily chaos becomes one payment, which is genuine operational relief. What it does not do is reduce principal: you still owe everything, now to a new creditor, plus the new product's cost.",
          "The reverse consolidation variant is the one to scrutinize. Instead of paying your funders off, the reverse-consolidation company deposits weekly amounts that cover your existing daily pulls while pulling its own, longer payment from you. Every original position stays alive, a new one is added on top, and the effective cost of the arrangement is routinely brutal. For stacked files it usually postpones the reckoning and raises its price.",
        ],
      },
      {
        heading: "What settlement really is",
        paragraphs: [
          "Settlement seeks an agreed resolution of outstanding balances; a creditor may accept revised terms or decline. There is no verified typical savings rate in our research. Compare creditor payments, all fees, possible reporting effects and unresolved legal issues.",
        ],
      },
      {
        heading: "The decision in one question",
        paragraphs: [
          "Can the business fully repay everything it owes at a survivable monthly cost, if the payments were merely reshaped? If yes, and you qualify for a genuine term loan at sane pricing, consolidation is the cleaner path: no settled-debt consequences, relationships intact. If no, if full repayment is arithmetic fiction, then consolidation only rearranges an unpayable number, and settlement is the tool that changes the number itself.",
          "The uncomfortable pattern: businesses distressed enough to be shopping for relief rarely qualify for the good consolidation products, and the products that will take them price like the problem they are. That is why so many stacked files pass through a failed consolidation on the way to the settlement that should have come first.",
        ],
      },
      {
        heading: "Questions that expose a bad consolidation offer",
        paragraphs: [
          "Three answers reveal most of what matters:",
        ],
        bullets: [
          "Does this pay off my existing positions entirely, or sit alongside them? (Alongside means reverse consolidation)",
          "What is the total dollar repayment across the new product's life, next to my current total payoff?",
          "What UCC position does the new lender take, and what happens to the old filings?",
        ],
      },
    ],
    faq: [
      {
        q: "Does consolidating MCAs hurt my credit like settlement does?",
        a: "A true consolidation that pays funders in full avoids settled-debt marks, which is its main advantage. A reverse consolidation avoids nothing if the underlying stack later defaults anyway, which is the common ending for stacks that were unpayable before the extra layer.",
      },
      {
        q: "Can I consolidate first and settle later if it fails?",
        a: "You can, and many owners do, but the failed consolidation makes the later settlement harder: one more funded position, one more UCC filing, and less cash left to fund resolutions. If the full-repayment math already fails, skipping straight to settlement preserves your leverage.",
      },
      {
        q: "Is there any legitimate use of reverse consolidation?",
        a: "As a short bridge for a fundamentally solvent business with a dated, specific revenue event ahead, arguably. As a fix for structural over-remittance, no: it adds cost to a stack that already cannot carry its cost.",
      },
    ],
    takeaway:
      "Consolidation reshapes payments; settlement reduces debt. Run the full-repayment math honestly, and be ruthless about the reverse-consolidation trap: if the offer sits alongside your positions instead of retiring them, walk.",
  },
];

export function getGuideBySlug(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}

GUIDES.push(
  {
    slug: "how-to-get-out-of-mca",
    title: "How to get out of a merchant cash advance: the decision tree",
    metaTitle: "How to Get Out of a Merchant Cash Advance (2026 Decision Tree)",
    metaDescription:
      "The realistic paths out of MCA debt, organized as a decision tree: your situation, your best first move, and what to avoid, from current-but-squeezed to sued-and-frozen.",
    intro:
      "Every article about escaping MCA debt lists the same six options. What owners actually need is a decision tree: given your specific situation right now, which move comes first? This guide routes you by scenario rather than listing theory.",
    sections: [
      {
        heading: "Scenario 1: current on payments, but the squeeze is on",
        paragraphs: [
          "You have the most options and the most leverage of anyone reading this page. First move: check your agreement for a reconciliation clause and compute what a true-up would change; if revenue is down from when the advance was priced, that is free relief you are entitled to. Second: if the business can repay in full at a saner pace, propose a restructure before you miss anything, funders price cooperation higher for merchants who come to them first.",
          "What to avoid at this stage: taking another advance to ease the pressure (that is how stacks are born) and signing anything new without reading it for fresh guarantees or Confessions of Judgment.",
        ],
      },
      {
        heading: "Scenario 2: stacked, and the math stopped working",
        paragraphs: [
          "Compute the number that decides everything: total daily remittance across all positions as a share of revenue, against your true margin. If it is structurally unpayable, stop optimizing single positions. Stacks resolve as one coordinated negotiation, respecting UCC priority, quieting the litigation-prone funders first, sized to what the business can actually fund.",
          "This is the scenario where professional representation most clearly pays for itself, and where the choice of firm matters most. Vet against our red-flags list before signing with anyone.",
        ],
      },
      {
        heading: "Scenario 3: default notices arrived",
        paragraphs: [
          "The window between the first default notice and the first legal filing is where the best settlements in this industry happen. The funder has signaled escalation but not yet spent money on lawyers; discounts are at their deepest. Engage now, through representation if a COJ exists in your contract, and do not go silent, silence is what converts notices into filings.",
        ],
      },
      {
        heading: "Scenario 4: sued, judgment entered, or account frozen",
        paragraphs: [
          "Legal problems need legal tools first: answering the lawsuit before the deadline, moving to vacate defective COJ judgments, negotiating restraint releases. Settlement still happens in this scenario, post-judgment balances get compromised every day, but it happens alongside defense, not instead of it. A firm without litigation capability cannot run this scenario alone.",
        ],
      },
      {
        heading: "The moves that make every scenario worse",
        paragraphs: [
          "Four mistakes appear in almost every catastrophic MCA story: silently switching bank accounts (a default event that reads as fraud in court), taking a reverse consolidation on top of an unpayable stack, stopping payments as a bluff with no legal strategy behind it, and signing hardship modifications containing fresh COJs. Whatever scenario you are in, not doing these four things preserves your options.",
        ],
        bullets: [
          "Do not hide revenue or switch banks without a strategy",
          "Do not add positions to escape positions",
          "Do not stop paying without defense prepared",
          "Do not sign new documents unread",
        ],
      },
    ],
    faq: [
      {
        q: "What is the fastest way out of an MCA?",
        a: "If you have cash available, a negotiated lump-sum settlement is the fastest clean exit, distressed positions commonly resolve at meaningful discounts, with lien releases, in weeks. If you do not have cash, a restructure that converts daily pulls to an affordable payment is the fastest relief, with settlement as the endgame.",
      },
      {
        q: "Can I just pay the MCA off early and be done?",
        a: "You can, but factor-rate pricing means early payoff usually saves little or nothing, you owe the full purchased amount regardless. Some contracts include early-payoff discounts or addendums; check before wiring anything, and get a zero-balance letter and UCC termination as part of any payoff.",
      },
      {
        q: "Is bankruptcy ever the right way out of MCA debt?",
        a: "Occasionally, when the business is not viable even without the MCA pulls, or personal exposure is unmanageable. For operating businesses, settlement or restructuring resolves most MCA situations without the public process and lasting consequences of filing. Get advice on both paths before choosing either.",
      },
    ],
    takeaway:
      "Route by scenario, not by product pitch. Current: reconcile and restructure. Stacked: coordinate everything. Noticed: negotiate now. Sued: defend first. And in every scenario, avoid the four moves that destroy options.",
  },
  {
    slug: "mca-confession-of-judgment",
    title: "Signed a Confession of Judgment? What it means and what to do now",
    metaTitle: "MCA Confession of Judgment: What to Do If You Signed One (2026)",
    metaDescription:
      "Most owners discover the COJ in their MCA paperwork only when it is used. What a Confession of Judgment does, where it is enforceable in 2026, and the moves that protect you before and after entry.",
    intro:
      "Buried in many MCA funding packages is the single most dangerous document in commercial finance: a Confession of Judgment. Most owners learn they signed one at the worst possible moment, when a judgment appears against them without a lawsuit. Here is what it is, what it is not, and what to do at each stage.",
    sections: [
      {
        heading: "What you actually signed",
        paragraphs: [
          "A COJ is a pre-signed admission of liability. On default, real or claimed, the funder's attorney files it with a supporting affidavit, and a court clerk enters judgment against you: no complaint served, no hearing, no chance to raise defenses. Enforcement tools follow immediately: bank restraints, levies, liens on the judgment amount plus fees.",
          "The COJ typically binds both the business and every personal guarantor, which is how a business default reaches personal bank accounts within days.",
        ],
      },
      {
        heading: "Where COJs stand in 2026",
        paragraphs: [
          "New York, the venue that processed most MCA COJs for a decade, banned their use against out-of-state debtors in 2019, and its recent reforms have added merchant protections with real teeth: courts have vacated thousands of judgments entered with procedural defects. But COJs remain enforceable in other states, in older agreements, and against in-state debtors where permitted. The document in your file is dangerous until a lawyer says otherwise about your specific facts.",
        ],
      },
      {
        heading: "If you signed one and are still current",
        paragraphs: [
          "Your job is to make sure the COJ never gets used. That means no silent defaults: if payments are becoming unsustainable, move on reconciliation, restructuring, or settlement before a missed remittance gives the funder cause. It also means professional handling of any negotiation, because a misstep that triggers default carries judgment-level consequences within days, not months.",
        ],
      },
      {
        heading: "If judgment has already been entered",
        paragraphs: [
          "Move on two tracks the same week. Defense: an MCA-experienced attorney reviews the entry for vacatur grounds, defective affidavits, improper venue, service failures, statutory noncompliance, which are common enough that thousands of COJ judgments have been undone. Resolution: the judgment amount itself remains negotiable, because enforcement is slower and costlier for the funder than a settlement. Restraint releases, vacatur motions, and settlement talks routinely run in parallel.",
        ],
      },
    ],
    faq: [
      {
        q: "How do I know if my MCA contract has a Confession of Judgment?",
        a: "Search the funding package for 'confession of judgment', 'affidavit of confession', or 'COJ', it is often a separate signature page rather than a clause. If you cannot find your copy, request the full signed agreement from the funder; you are entitled to it.",
      },
      {
        q: "Can a COJ judgment be undone?",
        a: "Frequently, yes. Vacatur is granted for procedural defects, and New York's reforms made several categories of MCA COJ entries vulnerable. Success depends on your facts and venue, which is an attorney's call after reading the actual filing.",
      },
      {
        q: "Are new MCA contracts still allowed to include COJs?",
        a: "In some states yes, and some funders shifted filings to permissive venues after New York's ban. Refusing to sign one, or negotiating it out, is a legitimate ask before taking any advance, and a funder that will not fund without it is telling you how it collects.",
      },
    ],
    takeaway:
      "A COJ converts default into judgment overnight. If you signed one: never default silently. If judgment entered: vacatur review and settlement talks, same week, parallel tracks.",
  },
  {
    slug: "mca-lawsuit-first-30-days",
    updatedAt: "2026-09-18",
    title: "Served with an MCA lawsuit: what the first 30 days decide",
    metaTitle: "MCA Lawsuit: What to Do in the First 30 Days (2026)",
    metaDescription:
      "A funder filed suit. The first 30 days decide whether you face a default judgment or a defensible negotiation. Deadlines, defenses, and the sequence that protects the business.",
    intro:
      "A process server at the counter changes the problem: this is no longer a debt to negotiate at leisure but a case with a clock. Miss the answer deadline and the funder wins everything by default. Use the window well and most MCA suits end in settlements far better than the complaint demands. Here is the sequence.",
    sections: [
      {
        heading: "Week 1: the clock and the counsel",
        paragraphs: [
          "Find the answer deadline first, typically 20 to 30 days from service depending on the court, and calendar it in red. Then get MCA-experienced counsel reviewing the complaint; the venue is usually the one the contract chose (often New York), so experience in that forum matters more than a local address. Do not call the funder's lawyers to explain yourself; everything said becomes evidence.",
        ],
      },
      {
        heading: "Weeks 1-2: what a defense review looks for",
        paragraphs: [
          "MCA complaints are volume paperwork, and volume paperwork has defects. Common defense angles: recharacterization (the advance functioned as a usurious loan, no true reconciliation, fixed payments regardless of revenue), service defects, standing and assignment gaps when positions were sold between funders, damage calculations that ignore payments made, and conduct claims under newer statutes like New York's FAIR Act. Raising real defenses changes the settlement math even when the case never reaches trial.",
        ],
      },
      {
        heading: "Weeks 2-4: answer, protect, negotiate",
        paragraphs: [
          "File the answer on time, always, even mid-negotiation, because the deadline is leverage the funder is counting on you to miss. Protect operations in parallel: know your exposure to restraints and levies before they arrive, and manage which accounts hold operating cash. Then negotiate from the defended position: a funder facing a filed answer, real defenses, and a represented merchant reprices the case, litigation is now a cost center for them, not a shortcut.",
        ],
      },
      {
        heading: "What settlements look like after filing",
        paragraphs: [
          "Filed cases settle constantly, at discounts that reflect both sides' litigation costs. A complete post-filing settlement includes dismissal of the case with prejudice, mutual releases, UCC terminations, and if any judgment was entered, its satisfaction on the court record. Paying without those paper terms resolves nothing.",
        ],
      },
    ],
    faq: [
      {
        q: "What happens if I ignore an MCA lawsuit?",
        a: "Default judgment for everything demanded: full balance, default fees, attorney fees, interest. Then enforcement: bank restraints, levies, liens, and pursuit of personal guarantors. Ignoring the suit is choosing the worst available outcome; answering preserves every other option.",
      },
      {
        q: "Can I settle after being sued, or is it too late?",
        a: "Settlement may remain an option after a case is filed, but no representative settlement rate or discount was verified here. Court deadlines continue unless formally changed; discuss the actual case and any proposal with counsel.",
      },
      {
        q: "Do I need a lawyer in the state where I was sued?",
        a: "You need counsel admitted in the forum court, which the contract usually fixed in advance (frequently New York regardless of where you operate). MCA-experienced firms handle these forums daily; your local business attorney can co-counsel but usually should not run it alone.",
      },
    ],
    takeaway:
      "Answer on time, defend for leverage, negotiate from the defended position, and paper the settlement with dismissal, releases, and UCC terminations. The suit is a phase, not the ending.",
  },
  {
    "slug": "mca-personal-credit",
    "title": "Do MCAs affect personal credit? Reporting, guarantees, and judgments",
    "metaTitle": "Do MCAs Affect Personal Credit? Reporting and Guarantees (2026)",
    "metaDescription": "Distinguish MCA account reporting, personal guarantees, public court records, and credit reports. A settlement does not guarantee a clean personal credit file.",
    "intro": "A personal guarantee, an account reported to a credit bureau, and a court judgment are different things. Do not assume an MCA is invisible to personal credit or that settling it will preserve a particular score. Check the actual agreement, reporting practices, and records.",
    "updatedAt": "2026-09-18",
    "sections": [
      {
        "heading": "Ask what is reported and to whom",
        "paragraphs": [
          "Ask the provider whether it reports the account to consumer or business reporting agencies and how it handles delinquency or settlement. An application inquiry alone does not answer those questions. Review the actual reports instead of relying on a general promise about MCA financing."
        ]
      },
      {
        "heading": "A guarantee is a liability question",
        "paragraphs": [
          "A guarantee can create obligations separate from the business agreement. Its scope and triggering conditions require review of the signed terms and applicable law. Liability, collection activity, and what appears on a particular credit report should not be treated as interchangeable."
        ]
      },
      {
        "heading": "Court records are not the same as credit reports",
        "paragraphs": [
          "Experian states that it no longer includes civil judgments or tax liens in consumer credit histories. That reporting practice does not erase a court judgment or decide its enforceability. Other records and underwriting checks may raise separate questions.",
          "The CFPB explains that accurate negative account information generally cannot be removed simply because a consumer wants it removed. Do not promise deletion, a specific score change, or future financing approval as a result of settlement."
        ]
      },
      {
        "heading": "Check the proposed resolution",
        "paragraphs": [
          "Ask what the agreement says about any guarantor release, remaining balance, account status, and existing proceedings. Check whether each relevant party is bound. If information on a credit report is inaccurate, use the reporting agency’s dispute process and keep supporting records."
        ]
      }
    ],
    "faq": [
      {
        "q": "Will settling an MCA keep it off my personal credit report?",
        "a": "That outcome is not guaranteed. Check the actual account reporting, the agreement, and your reports. A settlement does not automatically delete accurate negative information."
      },
      {
        "q": "Does a personal credit inquiry mean the funder reports monthly?",
        "a": "No. An inquiry and ongoing account reporting are separate questions. Ask the provider and check the relevant reports."
      },
      {
        "q": "Does the absence of a judgment from my credit report mean it is gone?",
        "a": "No. A credit-reporting policy does not erase a court record or resolve a legal obligation. Have qualified counsel assess the judgment and any available options."
      }
    ],
    "takeaway": "Verify account reporting, guarantee exposure, and court records separately. No credit or financing result is promised.",
    "sources": [
      {
        "label": "Experian: civil judgments and consumer credit reports",
        "url": "https://www.experian.com/blogs/ask-experian/judgments-no-longer-included-on-credit-report/",
        "note": "Checked September 18, 2026. Describes Experian’s treatment of civil judgments and tax liens; does not establish individual MCA account reporting."
      },
      {
        "label": "CFPB: how long information stays on a credit report",
        "url": "https://www.consumerfinance.gov/ask-cfpb/how-long-does-information-stay-on-my-credit-report-en-323/",
        "note": "Checked September 18, 2026. General reporting guidance and limits on removing accurate negative information."
      }
    ]
  },
);
