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
    "slug": "how-to-choose-mca-settlement-company",
    "title": "How to choose the right MCA settlement company",
    "metaTitle": "How to Pick an MCA Settlement Company: Scope, Fees, and Evidence",
    "metaDescription": "Compare MCA settlement firms by documented services, full fees, responsible professionals, public evidence, communication, and alternatives.",
    "intro": "Compare the written engagement, the people responsible for your file, and the evidence behind the sales claims. This checklist is an editorial buying framework, not a prediction of which provider will achieve the largest reduction.",
    "sections": [
      {
        "heading": "1. Identify who provides legal representation",
        "paragraphs": [
          "Ask whether a named attorney will represent you, in which jurisdiction, and under which agreement. An attorney network, referral arrangement, or in-house title does not by itself establish that court work is included."
        ]
      },
      {
        "heading": "2. Compare the complete fee schedule",
        "paragraphs": [
          "Request the fee basis, payment triggers, account charges, legal expenses, cancellation terms, and refund policy. Model the amount paid to creditors plus every service fee, including a scenario where a creditor declines."
        ]
      },
      {
        "heading": "3. Confirm the handoff and communication plan",
        "paragraphs": [
          "Ask who handles negotiations after intake, how often you receive written updates, and how you can escalate an unresolved question. Record the promised response standard in the engagement."
        ]
      },
      {
        "heading": "4. Check dated public evidence",
        "paragraphs": [
          "Read company materials, public reviews, complaint responses, and relevant regulatory records separately. A review score is not a verified settlement success rate, and a complaint is not automatically an established finding."
        ]
      },
      {
        "heading": "5. Define the work and its limits",
        "paragraphs": [
          "List the creditors, balances, disputes, and proceedings covered. Ask what happens if a new lawsuit arrives or a funder refuses a proposal. Identify any services requiring another professional."
        ]
      },
      {
        "heading": "6. Compare alternatives",
        "paragraphs": [
          "Obtain another written proposal when practical. If court deadlines are involved, secure appropriate legal advice promptly rather than waiting for sales calls. Discuss refinancing, direct negotiation, and bankruptcy where relevant."
        ]
      }
    ],
    "takeaway": "Choose on documented scope, total cost, qualifications, and communication. Coastal remains our featured first provider by editorial choice; that placement does not replace your contract review.",
    "sources": [
      {
        "label": "New York Courts: responding to a summons and complaint",
        "url": "https://www.nycourts.gov/legacypdfs/courts/1jd/supctmanh/HelpCenterForms/How_to_Respond_to_a_Summons_and_Complaint.pdf",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      },
      {
        "label": "U.S. Courts: Chapter 11 bankruptcy basics",
        "url": "https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics/chapter-11-bankruptcy-basics",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      }
    ],
    "updatedAt": "2026-09-18"
  },
  {
    "slug": "mca-debt-relief-red-flags",
    "title": "MCA debt relief red flags: how to spot the firms to avoid",
    "metaTitle": "MCA Debt Relief Red Flags: Claims and Contracts to Check",
    "metaDescription": "Questions to investigate before choosing MCA debt relief: written fees, evidence for promises, legal representation, public records, and alternatives.",
    "intro": "Unclear fees, unsupported promises, and pressure deserve scrutiny. These are questions to investigate, not proof that a particular company is fraudulent. We have not established how common misconduct is across this industry.",
    "sections": [
      {
        "heading": "Fees you cannot calculate",
        "paragraphs": [
          "Ask for a written quote explaining what triggers payment, which amounts the percentage applies to, and what remains payable if negotiations fail. Do not rely on a headline fee alone."
        ]
      },
      {
        "heading": "Guaranteed reductions or fixed completion dates",
        "paragraphs": [
          "Ask for the underlying evidence and the conditions behind every claim. The provider cannot promise that an independent creditor will accept a proposal. Treat examples as examples unless the sample and methodology are disclosed."
        ]
      },
      {
        "heading": "Court representation left unexplained",
        "paragraphs": [
          "Find out who will handle legal advice, motions, hearings, and urgent notices. Outside counsel can be an appropriate arrangement; the concern is undisclosed responsibility or cost, not the staffing model."
        ]
      },
      {
        "heading": "Pressure or incomplete paperwork",
        "paragraphs": [
          "Take the time needed to read the engagement and compare options while honoring actual legal deadlines. Request missing terms, including cancellation and refund provisions, before committing."
        ]
      },
      {
        "heading": "Public records presented without context",
        "paragraphs": [
          "Check dates, exact legal entities, company responses, and case outcomes. Few reviews do not establish review suppression, and a filed allegation does not establish misconduct."
        ]
      },
      {
        "heading": "A single solution offered before reviewing your documents",
        "paragraphs": [
          "A recommendation should account for balances, cash flow, guarantees, and active proceedings. Bankruptcy and other alternatives warrant professional consideration where appropriate."
        ]
      }
    ],
    "takeaway": "Investigate the claim and the contract. No review platform, staffing label, or marketing promise establishes the right result for your business.",
    "sources": [
      {
        "label": "New York Courts: responding to a summons and complaint",
        "url": "https://www.nycourts.gov/legacypdfs/courts/1jd/supctmanh/HelpCenterForms/How_to_Respond_to_a_Summons_and_Complaint.pdf",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      },
      {
        "label": "U.S. Courts: Chapter 11 bankruptcy basics",
        "url": "https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics/chapter-11-bankruptcy-basics",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      }
    ],
    "updatedAt": "2026-09-18"
  },
  {
    "slug": "mca-contract-red-flags",
    "title": "Common red flags in MCA contract terms, explained clause by clause",
    "metaTitle": "MCA Contract Red Flags: Terms to Check Before You Sign",
    "metaDescription": "Review MCA payment, reconciliation, collateral, guarantee, default, and judgment terms together. The actual agreement and applicable law determine exposure.",
    "intro": "Read the complete funding package, including addenda and guarantees. The practical questions are what you must pay, what changes when revenue falls, what constitutes default, and what enforcement rights the documents claim.",
    "sections": [
      {
        "heading": "Judgment-by-confession documents",
        "paragraphs": [
          "Locate any affidavit or authorization for judgment and ask counsel to assess it. New York CPLR 3218 imposes conditions on this procedure. Do not assume that every signed document is enforceable, that an older agreement is exempt from current rules, or that judgment occurs on a universal timetable."
        ]
      },
      {
        "heading": "Collateral and assignment terms",
        "paragraphs": [
          "Compare the security agreement with any public financing statements. A filing does not itself seize property. Check the specific assets, assignments, and release terms rather than assuming every agreement covers all assets."
        ]
      },
      {
        "heading": "Reconciliation and adjustments",
        "paragraphs": [
          "Find the revenue definition, calculation period, request process, required records, and response terms. A reconciliation clause is relevant to legal analysis, but its existence alone does not decide whether a transaction is a loan."
        ]
      },
      {
        "heading": "Guarantees and additional signers",
        "paragraphs": [
          "Identify who signed, in what capacity, and what events trigger each guarantee. Business nonpayment does not automatically establish every guarantor’s liability or what property is available for enforcement."
        ]
      },
      {
        "heading": "Default triggers and fees",
        "paragraphs": [
          "Review banking-change, additional-financing, information, and remittance provisions. Reconcile the cash received, amounts paid, claimed balance, and additional charges. Have proposed modifications reviewed before signing."
        ]
      }
    ],
    "faq": [
      {
        "q": "Which clause should I review first?",
        "a": "Prioritize any existing court deadline or enforcement notice. Then review the full package; no single clause establishes your total exposure."
      },
      {
        "q": "Are MCA contracts automatically exempt from lending laws?",
        "a": "No label settles that question. Legal treatment depends on the substance of the transaction and applicable law."
      },
      {
        "q": "Can I change a contract I already signed?",
        "a": "You can request changes or a settlement. Acceptance is not assured, and a request does not itself suspend the existing terms."
      }
    ],
    "takeaway": "Review payment, reconciliation, collateral, guarantees, default, and dispute terms together. The signed documents and applicable law determine the analysis.",
    "sources": [
      {
        "label": "New York CPLR 3218: judgment by confession",
        "url": "https://www.nysenate.gov/legislation/laws/CVP/3218",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      },
      {
        "label": "New York Courts: Davis v. Richmond Capital Group (2021)",
        "url": "https://www.nycourts.gov/REPORTER/3dseries/2021/2021_03111.htm",
        "note": "Checked September 18, 2026. A pleading-stage decision, not a finding that every MCA is a loan or every reconciliation refusal proves a defense."
      },
      {
        "label": "New York UCC 9-406: assignment notices",
        "url": "https://www.nysenate.gov/legislation/laws/UCC/9-406",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      }
    ],
    "updatedAt": "2026-09-18"
  },
  {
    "slug": "warning-signs-mca-funder-legal-action",
    "title": "MCA collection notices: warning signs and documents to check",
    "metaTitle": "MCA Collection Notices: Demands, Court Papers, and Deadlines",
    "metaDescription": "Distinguish MCA demands, customer notices, and court papers. Verify the actual record and deadline without assuming a standard escalation sequence.",
    "intro": "A demand letter, a customer notice, and a summons are different documents. Identify what actually arrived and any deadline it creates. We have not verified a standard escalation sequence or a best-discount window.",
    "sections": [
      {
        "heading": "Separate a demand from a court filing",
        "paragraphs": [
          "Preserve the envelope, email, attachments, and date received. Verify any case through the relevant court. A demand is not itself a judgment, and the absence of a demand does not establish that no case exists."
        ]
      },
      {
        "heading": "Records to collect now",
        "paragraphs": [
          "Build a single file for counsel or an adviser."
        ],
        "bullets": [
          "Complete agreements, addenda, and guarantees",
          "Payment history and the claimed balance",
          "Default notices and correspondence",
          "Court papers and service details",
          "Bank or processor notices and customer assignment letters"
        ]
      },
      {
        "heading": "Do not infer a timetable from collection contact",
        "paragraphs": [
          "Calls, document requests, or references to a guarantee do not prove when a suit will be filed. Obtain advice about the actual document, particularly if it concerns a judgment or restraint."
        ]
      },
      {
        "heading": "Keep negotiation separate from procedural deadlines",
        "paragraphs": [
          "Ask the appropriate professional to identify response obligations and any formal extension. A settlement discussion is not a substitute for a timely response. Obtain advice before changing banking arrangements or signing an admission."
        ]
      }
    ],
    "faq": [
      {
        "q": "How quickly can a funder obtain judgment?",
        "a": "There is no universal timeline. The process, jurisdiction, service, documents, and court history matter; counsel should review the actual record."
      },
      {
        "q": "Does a customer assignment notice mean I have lost the case?",
        "a": "No. Have the assignment, notice, and relevant law reviewed. Do not treat the notice as either automatically valid or safe to ignore."
      },
      {
        "q": "Should I respond to a demand letter?",
        "a": "Preserve it and arrange an appropriate response. If represented, route it through counsel; do not make commitments you have not reviewed."
      }
    ],
    "takeaway": "Respond to verified documents and deadlines. No sequence of phone calls predicts a judgment date or settlement discount.",
    "sources": [
      {
        "label": "New York Courts: responding to a summons and complaint",
        "url": "https://www.nycourts.gov/legacypdfs/courts/1jd/supctmanh/HelpCenterForms/How_to_Respond_to_a_Summons_and_Complaint.pdf",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      },
      {
        "label": "New York CPLR 3218: judgment by confession",
        "url": "https://www.nysenate.gov/legislation/laws/CVP/3218",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      },
      {
        "label": "New York UCC 9-406: assignment notices",
        "url": "https://www.nysenate.gov/legislation/laws/UCC/9-406",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      }
    ],
    "updatedAt": "2026-09-18"
  },
  {
    "slug": "what-happens-mca-default",
    "updatedAt": "2026-09-18",
    "title": "What actually happens when you default on a merchant cash advance",
    "metaTitle": "MCA Default: Notices, Legal Process, and Options (2026)",
    "metaDescription": "Understand an alleged MCA default: check the balance, payment terms, bank notices, legal deadlines, and resolution options without assuming a fixed timeline.",
    "intro": "Default is determined by the agreement and applicable law. A missed debit, a claimed breach, a filed case, and an enforceable judgment are separate events. This guide describes issues to check rather than an invented week-by-week timeline.",
    "sections": [
      {
        "heading": "Verify the claimed breach and balance",
        "paragraphs": [
          "Compare the notice with the signed terms and payment records. Ask for a ledger explaining principal or purchased receivables, credits, fees, and any claimed acceleration. Record which amounts you dispute."
        ]
      },
      {
        "heading": "Identify effects on operations",
        "paragraphs": [
          "Review any bank, processor, or customer notice. Different restrictions have different legal and contractual bases. Obtain advice before moving funds or changing arrangements that may be subject to restrictions."
        ]
      },
      {
        "heading": "If legal papers arrive",
        "paragraphs": [
          "Identify the court, parties, service details, and response deadline promptly. Counsel should assess the required response and any existing judgment. Missing a deadline may support a default application, not automatic entitlement to every amount demanded."
        ]
      },
      {
        "heading": "Evaluate resolution options",
        "paragraphs": [
          "Ask whether reconciliation, revised payments, settlement, refinancing, or bankruptcy is appropriate. Compare available cash, total costs, guarantees, and creditor participation. None is a guaranteed solution."
        ]
      },
      {
        "heading": "Keep credit reporting separate",
        "paragraphs": [
          "A guarantee concerns liability; a credit report is a separate record. Check actual reporting and the proposed resolution terms rather than assuming default or settlement has a particular score effect."
        ]
      }
    ],
    "faq": [
      {
        "q": "Will default hurt my personal credit?",
        "a": "Check actual account reporting separately from guarantee exposure and court records. No score outcome is promised."
      },
      {
        "q": "Can the funder take money from my bank account?",
        "a": "Review payment authorizations and any legal process. An authorized debit, an account restriction, and a levy are different mechanisms."
      },
      {
        "q": "Can I negotiate after default?",
        "a": "You may request a resolution, including after proceedings begin, but acceptance and terms are uncertain. Negotiations do not automatically pause deadlines."
      }
    ],
    "takeaway": "Work from the actual notice, balance, contract, and court record. No representative enforcement timeline or stage-by-stage settlement price is established here.",
    "sources": [
      {
        "label": "New York Courts: responding to a summons and complaint",
        "url": "https://www.nycourts.gov/legacypdfs/courts/1jd/supctmanh/HelpCenterForms/How_to_Respond_to_a_Summons_and_Complaint.pdf",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      },
      {
        "label": "New York CPLR 5222: restraining notices",
        "url": "https://www.nysenate.gov/legislation/laws/CVP/5222",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      },
      {
        "label": "U.S. Courts: Chapter 11 bankruptcy basics",
        "url": "https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics/chapter-11-bankruptcy-basics",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      }
    ]
  },
  {
    "slug": "negotiate-mca-debt-yourself",
    "title": "Can you negotiate MCA debt yourself? An honest DIY assessment",
    "metaTitle": "Negotiate MCA Debt Yourself: Preparation, Costs, and Legal Review",
    "metaDescription": "Prepare a documented MCA negotiation request, compare total costs, identify legal issues, and review written terms before deciding on representation.",
    "intro": "Direct negotiation can avoid a representative’s service fee, but it also leaves you responsible for understanding the proposal and its consequences. Decide what you can handle after reviewing your contracts and any legal proceedings.",
    "sections": [
      {
        "heading": "Prepare a documented request",
        "paragraphs": [
          "List the amount advanced, payments, current claimed balance, and disputed charges. Prepare a cash-flow forecast and check whether the agreement offers reconciliation or other adjustments. Ask for the written procedure."
        ]
      },
      {
        "heading": "Know when to obtain legal help",
        "paragraphs": [
          "Court papers, judgments, restraints, guarantees, or conflicting creditor claims warrant professional review. An owner’s ability to represent a business in court depends on court rules; direct commercial negotiation is a separate activity."
        ]
      },
      {
        "heading": "Compare total cost, not promised savings",
        "paragraphs": [
          "Include creditor payments, service fees, legal expenses, and ongoing account charges. Hypothetically, a 20 percent fee on $200,000 is $40,000; this arithmetic does not establish a typical fee or the value of representation."
        ]
      },
      {
        "heading": "Review the written outcome",
        "paragraphs": [
          "Specify the covered accounts and parties, payment dates, missed-payment consequences, releases, and handling of filings or court cases. Keep copies of acceptance and payment confirmation. A proposal is not a completed settlement."
        ]
      }
    ],
    "faq": [
      {
        "q": "What should I ask the funder?",
        "a": "Request a balance breakdown and the process for a documented hardship or reconciliation request. State the proposed terms accurately and keep written records."
      },
      {
        "q": "Should I record calls?",
        "a": "Recording rules vary by jurisdiction. Check the applicable rules before recording; written follow-up can also document the discussion."
      },
      {
        "q": "Can I hire someone after starting negotiations?",
        "a": "You can seek representation later, subject to availability and engagement terms. Provide all prior messages, proposals, and signed documents."
      }
    ],
    "takeaway": "Use records and written terms. Get professional review for legal exposure, and do not assume either DIY or paid representation produces a better discount.",
    "sources": [
      {
        "label": "New York Courts: responding to a summons and complaint",
        "url": "https://www.nycourts.gov/legacypdfs/courts/1jd/supctmanh/HelpCenterForms/How_to_Respond_to_a_Summons_and_Complaint.pdf",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      },
      {
        "label": "New York UCC 9-513: termination statements",
        "url": "https://www.nysenate.gov/legislation/laws/UCC/9-513",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      }
    ],
    "updatedAt": "2026-09-18"
  },
  {
    "slug": "mca-reconciliation-clause",
    "title": "The MCA reconciliation clause: how to check and request an adjustment",
    "metaTitle": "MCA Reconciliation Clause: Calculation and Request Process",
    "metaDescription": "Review your MCA reconciliation formula, required records, request procedure, and disputed responses. Payment adjustments depend on the contract.",
    "intro": "Reconciliation is a contractual process for comparing remittances with the agreed share of actual revenue. The formula, eligibility, records, deadlines, and available adjustments depend on your agreement.",
    "sections": [
      {
        "heading": "Read the calculation before requesting relief",
        "paragraphs": [
          "Identify the defined revenue, specified percentage, measurement period, and treatment of refunds or credits. Distinguish a backward-looking reconciliation from a change to future debits."
        ]
      },
      {
        "heading": "Prepare the request",
        "paragraphs": [
          "Follow the notice method and document requirements in the contract."
        ],
        "bullets": [
          "Locate the clause and any amendments",
          "Calculate the relevant revenue and remittances for the same period",
          "Collect the requested bank and processor records",
          "Send the calculation and request to the specified address",
          "Keep delivery evidence and calendar any stated response period"
        ]
      },
      {
        "heading": "If the response is disputed",
        "paragraphs": [
          "Keep the request, supporting records, and response. Davis v. Richmond Capital Group allowed certain allegations concerning reconciliation and loan characterization to proceed at the pleading stage. It did not establish that every refusal proves an unlawful loan."
        ]
      },
      {
        "heading": "Do not confuse a request with an approved change",
        "paragraphs": [
          "A submitted request does not itself authorize you to stop paying or change debits. Ask for the calculation and any approved adjustment in writing. Review a new agreement for added fees, guarantees, or waivers."
        ]
      }
    ],
    "faq": [
      {
        "q": "Does every MCA have this clause?",
        "a": "Do not assume so. Read your agreement and ask counsel about missing, discretionary, or disputed provisions."
      },
      {
        "q": "Does requesting reconciliation prevent default?",
        "a": "The request does not automatically waive other obligations or resolve an existing claimed breach. Check the contract and obtain advice if default is disputed."
      },
      {
        "q": "Does a 40 percent revenue drop mean a 40 percent payment cut?",
        "a": "Not necessarily. The defined revenue, comparison period, prior collections, and contractual formula determine the calculation."
      }
    ],
    "takeaway": "Use the contract’s formula and procedure. No universal cost, response time, payment reduction, or legal outcome is promised.",
    "sources": [
      {
        "label": "New York Courts: Davis v. Richmond Capital Group (2021)",
        "url": "https://www.nycourts.gov/REPORTER/3dseries/2021/2021_03111.htm",
        "note": "Checked September 18, 2026. A pleading-stage decision, not a finding that every MCA is a loan or every reconciliation refusal proves a defense."
      }
    ],
    "updatedAt": "2026-09-18"
  },
  {
    "slug": "mca-attorneys-vs-settlement-companies",
    "updatedAt": "2026-09-18",
    "title": "MCA attorneys vs settlement companies: which one do you actually need?",
    "metaTitle": "MCA Attorney or Settlement Company? Scope, Fees, and Qualifications",
    "metaDescription": "Compare MCA legal representation and negotiation services, including responsibility, jurisdiction, engagement terms, and fees. Verify actual scope before signing.",
    "intro": "Owners searching for MCA help find two different animals: law firms and settlement companies. They overlap enough to be confusing and differ enough that picking wrong costs real money. Here is the clean split, and a state-by-state note on when the lawyer question actually matters.",
    "sections": [
      {
        "heading": "What each one actually does",
        "paragraphs": [
          "A settlement provider may negotiate revised payments or balances. Confirm which services it actually offers. Court representation and legal advice require appropriately authorized professionals; an advertised attorney relationship does not establish an engagement.",
          "A lawyer may assess legal claims, respond to proceedings, review enforcement, and negotiate. Request the proposed scope and fee agreement rather than assuming every law firm handles all of these services.",
          "Coastal is featured first by editorial choice. Its company materials describe an attorney network; we have not verified an in-house litigation team or a universal legal-services package. Confirm the named attorney, scope, jurisdiction, and fees in a written agreement."
        ]
      },
      {
        "heading": "Clear signs you need an attorney, not just a negotiator",
        "paragraphs": [
          "Some situations are legal problems wearing a debt costume. In any of these, negotiation without counsel leaves you exposed:"
        ],
        "bullets": [
          "You have been served with a lawsuit, or a judgment already exists",
          "Your contract contains a Confession of Judgment",
          "Your bank account has been restrained or levied",
          "UCC notices have gone to your customers or processor",
          "The funder's conduct suggests a recharacterization or usury defense worth raising"
        ]
      },
      {
        "heading": "When comparing a negotiation service",
        "paragraphs": [
          "Even without a lawsuit, a proposed payment change can have contractual consequences. Compare the services offered and ask whether legal review is needed. The absence of litigation does not establish that a settlement company alone is sufficient."
        ]
      },
      {
        "heading": "Does my state matter?",
        "paragraphs": [
          "Jurisdiction matters. Have counsel review forum and choice-of-law provisions alongside applicable law, the parties, and any actual proceeding. Do not assume a contractual clause conclusively resolves every jurisdiction or enforcement issue.",
          "Confirm that the lawyer is authorized to handle the relevant matter and court. Local advice may also be necessary for assets, enforcement, or other issues in a different jurisdiction."
        ]
      },
      {
        "heading": "What each costs",
        "paragraphs": [
          "No representative industry fee range was verified for this guide. Request written settlement and attorney quotes for the actual services needed, including separate engagements, ongoing charges and cancellation terms."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a settlement company stop a lawsuit?",
        "a": "Negotiation does not automatically stop a case or its deadlines. Court representation rules differ for individuals and business entities; arrange appropriate counsel for the actual proceeding."
      },
      {
        "q": "Do I need a lawyer in my own state?",
        "a": "The answer depends on the contract, applicable law, location of assets, and any court proceeding. Confirm appropriate licensing and whether counsel in more than one jurisdiction is needed."
      },
      {
        "q": "Is a law firm always the safer choice?",
        "a": "Neither a label nor a staffing model guarantees a better result. Compare qualifications, proposed services, written fees, and conflicts. Ask who is responsible for legal advice and representation."
      }
    ],
    "takeaway": "Confirm the actual service scope, responsible professionals, jurisdiction, and total fees. Do not infer court representation from an advertised attorney network.",
    "sources": [
      {
        "label": "New York Courts: responding to a summons and complaint",
        "url": "https://www.nycourts.gov/legacypdfs/courts/1jd/supctmanh/HelpCenterForms/How_to_Respond_to_a_Summons_and_Complaint.pdf",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      }
    ]
  },
  {
    "slug": "ucc-lien-release-mca",
    "title": "UCC liens from MCA funders: how they hurt you and how to get them released",
    "metaTitle": "MCA UCC Liens: Reviewing Release and Termination Requirements",
    "metaDescription": "Find MCA-related financing statements, compare them with the agreement, document termination requirements, and verify filing authority and completion.",
    "intro": "A UCC financing statement is a public filing to investigate alongside the underlying agreement. Identify the debtor, secured party, collateral, amendments, and termination requirements before treating a balance as fully resolved.",
    "sections": [
      {
        "heading": "Find the relevant records",
        "paragraphs": [
          "Use the applicable filing office and correct legal debtor name. Search methods and charges vary. Keep filing numbers and copies, then compare them with your agreements and payoff history."
        ]
      },
      {
        "heading": "A filing is not a complete statement of rights",
        "paragraphs": [
          "Collateral coverage, attachment, perfection, priority, and enforcement are separate questions. A filing does not by itself seize property or establish that every asset is covered. Ask a prospective lender what an existing filing means for its proposal."
        ]
      },
      {
        "heading": "Agree how termination will be handled",
        "paragraphs": [
          "The written resolution should identify affected filings, any remaining obligations, who must deliver or file termination documents, and when. New York UCC 9-513 contains conditional termination duties, including provisions for sold accounts; do not treat all filings as identical."
        ]
      },
      {
        "heading": "Verify the record after completion",
        "paragraphs": [
          "Calendar the contractual dates and recheck the filing office. If a termination is missing, preserve proof of payment and seek advice about a proper demand and filing authority. Do not file an unauthorized termination yourself."
        ]
      }
    ],
    "faq": [
      {
        "q": "How long does a financing statement remain effective?",
        "a": "New York’s general rule is five years, subject to exceptions and continuation provisions. Check the applicable filing and jurisdiction."
      },
      {
        "q": "Can I obtain financing with an existing filing?",
        "a": "That depends on collateral, priority, the lender’s requirements, and proposed payoff or subordination arrangements."
      },
      {
        "q": "Can I terminate a paid-off filing myself?",
        "a": "Not merely because you believe the balance is paid. Check statutory conditions, authorization, the agreement, and the filing office’s requirements with counsel."
      }
    ],
    "takeaway": "Match each filing to its obligation, document the release process, and verify completion. A payoff receipt alone does not answer every lien question.",
    "sources": [
      {
        "label": "New York UCC 9-513: termination statements",
        "url": "https://www.nysenate.gov/legislation/laws/UCC/9-513",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      },
      {
        "label": "New York UCC 9-509: who may file",
        "url": "https://www.nysenate.gov/legislation/laws/UCC/9-509",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      },
      {
        "label": "New York UCC 9-515: duration and continuation",
        "url": "https://www.nysenate.gov/legislation/laws/UCC/9-515",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      }
    ],
    "updatedAt": "2026-09-18"
  },
  {
    "slug": "stacked-mca-debt",
    "title": "Stacked MCAs: compare obligations and coordinated options",
    "metaTitle": "Stacked MCA Debt: Comparing Multiple Obligations and Options",
    "metaDescription": "Build a combined forecast for multiple MCA obligations and compare payment, settlement, and legal options without assuming a standard discount or outcome.",
    "intro": "Multiple advances can compete for the same cash flow. Start with a complete obligation schedule and operating forecast. We have not verified a typical number of positions, discount, or success rate for a stacked workout.",
    "sections": [
      {
        "heading": "Build one cash-flow picture",
        "paragraphs": [
          "Record each funder, remittance, claimed balance, maturity or delivery terms, collateral, and guarantee. Include payroll, tax, supplier, and other obligations so an affordable payment is based on the whole business."
        ]
      },
      {
        "heading": "Use arithmetic as a scenario, not an industry statistic",
        "paragraphs": [
          "For illustration, three positions each collecting 10 percent of the same revenue would together take 30 percent before other expenses. Your actual percentages, timing, and agreements may differ."
        ]
      },
      {
        "heading": "Review overlapping contractual rights",
        "paragraphs": [
          "Check additional-financing restrictions and all relevant security interests. Do not infer legal priority solely from a marketing label such as first or fourth position. A professional should evaluate competing rights and any restrictions on payments."
        ]
      },
      {
        "heading": "Compare coordinated proposals",
        "paragraphs": [
          "Model reconciliation, revised payments, settlement, financing, and court-supervised options. Resolving one position may help, but check the remaining obligations before committing cash. There is no guaranteed benefit from a particular negotiation order."
        ]
      }
    ],
    "faq": [
      {
        "q": "How many positions can be negotiated at once?",
        "a": "There is no verified universal limit or typical result here. The documents, available funds, creditor participation, and legal issues determine feasibility."
      },
      {
        "q": "Should I pay the most aggressive funder first?",
        "a": "Do not choose solely on collection pressure. Obtain advice about competing rights and the operational effect of any proposed payment."
      },
      {
        "q": "Does reverse consolidation eliminate the stack?",
        "a": "Check whether it actually pays off existing obligations or adds funding alongside them. Compare total repayment and all remaining contracts."
      }
    ],
    "takeaway": "Evaluate the full set of obligations and keep the cash-flow assumptions explicit. Creditor participation and outcomes remain uncertain.",
    "sources": [
      {
        "label": "U.S. Courts: Chapter 11 bankruptcy basics",
        "url": "https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics/chapter-11-bankruptcy-basics",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      },
      {
        "label": "New York UCC 9-406: assignment notices",
        "url": "https://www.nysenate.gov/legislation/laws/UCC/9-406",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      }
    ],
    "updatedAt": "2026-09-18"
  },
  {
    "slug": "frozen-account-mca-funder",
    "title": "Account frozen after an MCA dispute? Check the notice and options",
    "metaTitle": "MCA Account Freeze: Bank Notices, Processor Holds, and Options",
    "metaDescription": "Identify the actual bank or processor notice, obtain legal review, and verify release requirements without moving restricted funds.",
    "intro": "An inaccessible account can disrupt payroll and suppliers, but different restrictions require different responses. Obtain the actual bank or processor notice and arrange prompt legal review. No universal 48-hour release process exists.",
    "sections": [
      {
        "heading": "Identify the restriction",
        "paragraphs": [
          "Ask the institution for its stated reason, amount affected, document reference, issuing party, and any case number. A processor reserve, bank compliance hold, restraining notice, and levy are not interchangeable."
        ]
      },
      {
        "heading": "Review urgent operating needs lawfully",
        "paragraphs": [
          "Prepare a list of payroll, tax, and supplier deadlines for counsel. Do not move restricted funds or route receipts elsewhere to evade a notice or order. Ask which lawful options are available under the actual restriction."
        ]
      },
      {
        "heading": "Evaluate the release process",
        "paragraphs": [
          "Counsel can assess the notice, applicable exemptions, challenge procedures, and any negotiated release. New York CPLR 5222 is one jurisdiction’s restraining-notice provision, not a description of every bank hold. Do not assume a payment plan automatically releases funds."
        ]
      },
      {
        "heading": "Confirm what was resolved",
        "paragraphs": [
          "Obtain written confirmation of any release from the appropriate party and verify the institution has processed it. Separately address any remaining debt, guarantee, filing, or court case. Removing one restriction may not resolve the underlying dispute."
        ]
      }
    ],
    "faq": [
      {
        "q": "Can a personal account be affected?",
        "a": "That depends on the account ownership, legal process, parties, exemptions, and applicable law. A business guarantee alone does not answer the question."
      },
      {
        "q": "How long does a processor hold last?",
        "a": "The reason, terms, documentation, and release procedure matter. Ask the processor for written conditions rather than assuming a standard duration."
      },
      {
        "q": "Can a confession-of-judgment entry be challenged?",
        "a": "Potential grounds, procedure, and deadlines require review of the actual record. No success rate is established here."
      }
    ],
    "takeaway": "Get the notice, identify the legal or contractual basis, and obtain advice about lawful operations and release. Do not rely on a promised release timetable.",
    "sources": [
      {
        "label": "New York CPLR 5222: restraining notices",
        "url": "https://www.nysenate.gov/legislation/laws/CVP/5222",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      },
      {
        "label": "New York CPLR 3218: judgment by confession",
        "url": "https://www.nysenate.gov/legislation/laws/CVP/3218",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      }
    ],
    "updatedAt": "2026-09-18"
  },
  {
    "slug": "mca-consolidation-vs-settlement",
    "title": "MCA consolidation vs settlement: compare written terms and costs",
    "metaTitle": "MCA Consolidation vs Settlement: Comparing Terms and Costs",
    "metaDescription": "Compare MCA consolidation, reverse consolidation, and settlement by remaining obligations, creditor participation, fees, cash flow, and risks.",
    "intro": "Compare what each proposal actually changes: creditors, outstanding balances, payment timing, and total cost. Neither a consolidation label nor a settlement label establishes affordability or a particular credit result.",
    "sections": [
      {
        "heading": "What consolidation proposes",
        "paragraphs": [
          "A true payoff consolidation uses new financing to retire specified obligations. Obtain payoff amounts and confirmation of which old accounts and filings will be resolved. Compare the new repayment total, fees, collateral, and guarantees."
        ]
      },
      {
        "heading": "Check a reverse-consolidation offer carefully",
        "paragraphs": [
          "Some offers provide funds toward existing debits while adding a new repayment obligation. If old balances remain, include them in the forecast. Do not confuse a lower immediate debit with a lower total cost."
        ]
      },
      {
        "heading": "What settlement proposes",
        "paragraphs": [
          "Settlement seeks creditor agreement on a balance or revised terms. A creditor can decline. Include service charges and legal expenses when comparing a proposal with full repayment or other options."
        ]
      },
      {
        "heading": "Use the same forecast for each option",
        "paragraphs": [
          "Model expected revenue, essential costs, all payments, and a weaker-revenue scenario. Ask what happens if a creditor refuses or a payment is missed. Review credit reporting, tax, and legal consequences with the appropriate professionals."
        ]
      }
    ],
    "faq": [
      {
        "q": "Does consolidation protect personal credit?",
        "a": "No particular result is assured. Check actual reporting, payment performance, guarantees, and the new agreement."
      },
      {
        "q": "Can I seek settlement after consolidation?",
        "a": "You may request it, but the new creditor can decline. Include the additional costs and obligations before choosing a sequence."
      },
      {
        "q": "How do I compare reverse consolidation?",
        "a": "List every existing balance that remains, every new charge, and the full payment schedule. Assess affordability beyond the initial relief period."
      }
    ],
    "takeaway": "Compare written terms and total obligations under the same cash-flow assumptions. No option guarantees savings, preserved credit, or continued financing access.",
    "sources": [
      {
        "label": "U.S. Courts: Chapter 11 bankruptcy basics",
        "url": "https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics/chapter-11-bankruptcy-basics",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      }
    ],
    "updatedAt": "2026-09-18"
  },
  {
    "slug": "how-to-get-out-of-mca",
    "title": "How to get out of a merchant cash advance: the decision tree",
    "metaTitle": "How to Get Out of a Merchant Cash Advance (2026 Decision Tree)",
    "metaDescription": "The realistic paths out of MCA debt, organized as a decision tree: your situation, your best first move, and what to avoid, from current-but-squeezed to sued-and-frozen.",
    "intro": "Start with the current documents and cash flow, then compare available options. This guide helps organize the decision; it does not establish that settlement is the best route or promise an exit date.",
    "sections": [
      {
        "heading": "Current on payments but under pressure",
        "paragraphs": [
          "Check whether the agreement provides reconciliation or payment adjustments. Prepare supporting records and compare a written request with other proposals. Do not change payments on the assumption that a request has been accepted."
        ]
      },
      {
        "heading": "Several advances competing for cash",
        "paragraphs": [
          "Create a combined schedule including essential operating costs and other debts. Ask an adviser to assess overlapping agreements, collateral, guarantees, and the feasibility of coordinated changes."
        ]
      },
      {
        "heading": "A default notice has arrived",
        "paragraphs": [
          "Verify the allegation, claimed balance, and response terms. Preserve communications and ask about available resolution options. We have no verified evidence of a special pre-lawsuit window that produces the deepest discounts."
        ]
      },
      {
        "heading": "A suit, judgment, or restriction exists",
        "paragraphs": [
          "Arrange prompt legal review of the actual record. Negotiations may occur alongside legal work, but they do not automatically pause deadlines or enforcement. Obtain written scope for any representative’s responsibilities."
        ]
      },
      {
        "heading": "Compare negotiation, financing, and bankruptcy",
        "paragraphs": [
          "Use the same cash-flow forecast for all proposals. Chapter 11 is a potential reorganization process, subject to eligibility and professional review. Do not treat bankruptcy as appropriate only when a business has already failed."
        ]
      }
    ],
    "faq": [
      {
        "q": "What is the fastest way out?",
        "a": "No universal route or timeframe is established. Existing cash, contractual payoff terms, creditor acceptance, and proceedings affect timing."
      },
      {
        "q": "Can I pay off early?",
        "a": "Request a dated written payoff quote, check any discount or fee terms, and confirm how releases and filings will be handled."
      },
      {
        "q": "Could bankruptcy be appropriate for an operating business?",
        "a": "Potentially. Obtain advice about eligibility, costs, alternatives, and effects on the business and guarantors."
      }
    ],
    "takeaway": "Choose from documented options with appropriate advice. Avoid guarantees about discounts, credit, business survival, or timing.",
    "sources": [
      {
        "label": "New York Courts: responding to a summons and complaint",
        "url": "https://www.nycourts.gov/legacypdfs/courts/1jd/supctmanh/HelpCenterForms/How_to_Respond_to_a_Summons_and_Complaint.pdf",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      },
      {
        "label": "U.S. Courts: Chapter 11 bankruptcy basics",
        "url": "https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics/chapter-11-bankruptcy-basics",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      }
    ],
    "updatedAt": "2026-09-18"
  },
  {
    "slug": "mca-confession-of-judgment",
    "title": "Signed a Confession of Judgment? What it means and what to do now",
    "metaTitle": "MCA Confession of Judgment: Documents, Requirements, and Review",
    "metaDescription": "Locate the MCA confession affidavit, check jurisdiction-specific requirements, and obtain legal review of the judgment and enforcement record.",
    "intro": "A confession-of-judgment document can authorize a judgment procedure without an ordinary action where permitted. Its effect depends on statutory requirements, the affidavit, parties, and filing history. A signature alone does not establish that a judgment is valid.",
    "sections": [
      {
        "heading": "Locate the complete document",
        "paragraphs": [
          "Gather the funding agreement, any confession affidavit, guarantees, amendments, and related notices. Identify each signer and the capacity in which they signed."
        ]
      },
      {
        "heading": "Check the governing procedure",
        "paragraphs": [
          "New York CPLR 3218 contains requirements for the affidavit and limits on filing, including residence-related conditions and a three-year filing period. Other jurisdictions differ. Do not assume old documents automatically remain usable or that every default becomes a judgment overnight."
        ]
      },
      {
        "heading": "If no judgment has been entered",
        "paragraphs": [
          "Ask counsel to assess the document and available options before making commitments or changing performance. A request for reconciliation or settlement does not itself prevent a filing."
        ]
      },
      {
        "heading": "If a judgment exists",
        "paragraphs": [
          "Obtain the docket, entry documents, and any enforcement notices. Counsel should identify the proper procedure and deadline for any challenge and whether temporary relief is available. A challenge or negotiation does not itself vacate the judgment."
        ]
      }
    ],
    "faq": [
      {
        "q": "How can I find a COJ in my funding package?",
        "a": "Look for a confession affidavit or authorization for judgment, including separate attachments. Request the complete signed package if documents are missing."
      },
      {
        "q": "Can the judgment be undone?",
        "a": "That depends on the grounds, procedural route, deadlines, and evidence. No representative success rate was verified."
      },
      {
        "q": "Are new COJ documents allowed?",
        "a": "The answer is jurisdiction- and transaction-specific. Obtain advice on the applicable law before signing or relying on one."
      }
    ],
    "takeaway": "Review the actual affidavit and court record with counsel. Neither enforceability nor successful vacatur can be inferred from a general guide.",
    "sources": [
      {
        "label": "New York CPLR 3218: judgment by confession",
        "url": "https://www.nysenate.gov/legislation/laws/CVP/3218",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      },
      {
        "label": "New York Courts: Champion Auto Sales v. Pearl Beta Funding (2018)",
        "url": "https://www.nycourts.gov/Reporter/3dseries/2018/2018_01645.htm",
        "note": "Checked September 18, 2026. The court affirmed dismissal of this particular challenge; it does not establish a general result for other agreements."
      }
    ],
    "updatedAt": "2026-09-18"
  },
  {
    "slug": "mca-lawsuit-first-30-days",
    "updatedAt": "2026-09-18",
    "title": "Served with an MCA lawsuit: identify the deadline and response",
    "metaTitle": "MCA Lawsuit: Response Deadlines, Documents, and Legal Review",
    "metaDescription": "Verify the actual MCA lawsuit deadline, prepare records for counsel, and coordinate the appropriate response with any settlement discussions.",
    "intro": "The actual response deadline comes first; the title is not a promise that you have 30 days. Identify the court, service details, and papers received, and arrange appropriate legal representation promptly.",
    "sections": [
      {
        "heading": "Immediately: verify service and the deadline",
        "paragraphs": [
          "Keep all papers and delivery details. Confirm the case through the court and have counsel determine the response required. Do not assume a standard 20- or 30-day period applies to every service method, court, or document."
        ]
      },
      {
        "heading": "Prepare the record for counsel",
        "paragraphs": [
          "Supply agreements, assignments, guarantees, payment histories, notices, and correspondence. Identify disputed amounts and prior modifications. Counsel can assess jurisdiction, service, the contract, available defenses, and the evidence actually supporting each position."
        ]
      },
      {
        "heading": "Respond through the appropriate procedure",
        "paragraphs": [
          "The response may involve an answer, motion, or another authorized procedure. A business entity may require an attorney even when an individual could appear personally. Obtain confirmation of any valid extension; a sales or settlement discussion does not create one."
        ]
      },
      {
        "heading": "Review any proposed resolution",
        "paragraphs": [
          "Identify the parties and claims covered, payment obligations, releases, case disposition, and handling of judgments or security filings. Specify which documents must be filed and verify completion. No representative post-filing settlement rate or discount is established."
        ]
      }
    ],
    "faq": [
      {
        "q": "What happens if I ignore the lawsuit?",
        "a": "The plaintiff may seek default relief. What it must establish and what relief can be granted depend on the applicable rules and record. Obtain advice promptly if a deadline has passed."
      },
      {
        "q": "Can I settle after being sued?",
        "a": "You may seek a resolution, but acceptance is uncertain. Continue complying with court requirements unless they are formally changed."
      },
      {
        "q": "Which lawyer do I need?",
        "a": "Confirm that counsel can act in the relevant court and handle the issues involved. Ask whether additional counsel is needed for another jurisdiction."
      }
    ],
    "takeaway": "Preserve the documents, determine the actual deadline, and coordinate legal work with any negotiations. Do not assume that default grants every demand or that an answer guarantees a discount.",
    "sources": [
      {
        "label": "New York Courts: responding to a summons and complaint",
        "url": "https://www.nycourts.gov/legacypdfs/courts/1jd/supctmanh/HelpCenterForms/How_to_Respond_to_a_Summons_and_Complaint.pdf",
        "note": "Primary reference checked September 18, 2026. Apply the relevant jurisdiction and facts; this guide is general information."
      }
    ]
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
  }
];

export function getGuideBySlug(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}
