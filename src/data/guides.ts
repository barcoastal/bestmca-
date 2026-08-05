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
      {
        heading: "The settlement process, step by step",
        paragraphs: [
          "A typical engagement follows a predictable arc. Week one is document gathering and analysis: every MCA agreement, the payment history on each position, bank statements, and current revenue. From that, the firm builds the picture funders will respond to, what the business actually generates versus what the stacked positions pull.",
          "Weeks two through four are the negotiation window. The firm contacts each funder, presents the financial reality, and works toward either a discounted payoff or a restructured schedule. Funders respond at different speeds; aggressive ones sometimes escalate before settling, which is where a firm with litigation capability keeps the process on track.",
          "Resolution usually lands between week four and month six depending on position count and whether litigation was already in motion. A complete resolution includes signed settlement agreements for each position, UCC lien releases, and written confirmation that the account is closed. Missing any of those three invites problems later.",
        ],
      },
      {
        heading: "What happens if you default instead",
        paragraphs: [
          "Understanding the alternative clarifies why settlement exists. An unmanaged MCA default typically unfolds fast: default notices within days of missed remittances, ACH attempts that overdraw the account, a frozen merchant processor if the funder contacts it, and UCC notices sent to your customers instructing them to redirect payment. Contracts with a Confession of Judgment can produce an enforceable judgment in weeks with no trial.",
          "None of that means default is unrecoverable, firms resolve post-default cases every day. It means the price of resolution rises with each escalation step. The same funder that would have taken a steep discount pre-default may demand more, plus legal fees, once a judgment is entered. Timing is the single biggest factor owners control.",
        ],
      },
      {
        heading: "Settlement vs consolidation, refinancing, and bankruptcy",
        paragraphs: [
          "Consolidation and reverse-consolidation products replace your MCAs with a new obligation, often at a similar true cost, and add a new creditor to the picture. They change the payment shape without reducing what you owe. Refinancing into a term loan genuinely helps when you qualify, but businesses buried in stacked MCAs with UCC filings usually do not qualify until the MCAs are resolved first.",
          "Bankruptcy is the heaviest tool: it stops collection instantly but puts the business through a public court process with long credit consequences, and because MCAs are structured as receivable purchases, funders sometimes contest their treatment. Settlement sits between doing nothing and filing: it reduces the actual balance, keeps the matter private, and keeps the business operating. The right choice depends on whether the underlying business is viable once the daily pulls stop.",
        ],
      },
    ],
    faq: [
      {
        q: "How long does MCA settlement take?",
        a: "Simple single-position cases can resolve in four to eight weeks. Stacked positions across multiple funders, or cases where litigation has already started, commonly run three to six months. The timeline is driven mostly by how many funders are involved and how far each has escalated.",
      },
      {
        q: "Is MCA settlement legal?",
        a: "Yes. Settlement is an ordinary commercial negotiation between you (through your representative) and the funder, ending in a written agreement both sides sign. What varies is the quality of representation, which is why we review the firms in this space.",
      },
      {
        q: "Does settling an MCA hurt my business credit?",
        a: "A negotiated settlement is significantly better for your credit picture than a default, judgment, or open UCC liens. Some funders report settled accounts, but a resolved balance with released liens positions the business to qualify for conventional financing again, which an unresolved default never does.",
      },
      {
        q: "Can I negotiate an MCA settlement myself?",
        a: "You can, and on a single small position with a cooperative funder it sometimes works. The difficulty is that funders negotiate these contracts daily and you do not, and mistakes like stopping payment without a strategy can trigger defaults and judgments. Multiple positions or any litigation risk is usually where professional representation pays for itself.",
      },
      {
        q: "How much does MCA settlement cost?",
        a: "Most firms charge either a percentage of enrolled debt (commonly 15 to 25 percent), a percentage of savings achieved, or a flat fee. The structure matters as much as the number: get the full fee schedule in writing before signing, and read our cost guide for a breakdown of each model.",
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
        a: "Not automatically, since the advance is to the business. It reaches personal credit through the personal guarantee: judgments and collections against you individually can be reported. Resolving the debt before judgment is how you keep it off the personal side.",
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
      "Settlement firms charge 15 to 25 percent of enrolled debt, so the question is fair: can you just call the funder yourself? Sometimes yes. This is an honest map of where DIY works, where it predictably backfires, and how to decide which side of the line you are on.",
    sections: [
      {
        heading: "Where DIY genuinely works",
        paragraphs: [
          "One position, a funder you are current with, and a documentable hardship: that is the DIY sweet spot. Funders handle hardship requests daily, and a single-position merchant asking for a temporary reduction or invoking a reconciliation clause often gets it without any intermediary.",
          "DIY also works for owners who can fund a lump-sum payoff. Cash on the table at 50 to 70 percent of balance speaks for itself, and some funders will paper that deal directly with you in a week.",
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
          "A firm charging 20 percent of a $200,000 enrolled balance costs $40,000, which only makes sense if representation improves your outcome by more than that. On a single clean position it often does not. On a stacked, defaulted, or litigated file, where the spread between a good and bad outcome is 30 to 50 points of balance plus legal exposure, it usually does.",
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
];

export function getGuideBySlug(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}
