// Funder profiles: what public records show about the MCA funders merchants
// most often search when trouble starts. Every specific claim below traces to
// court records, regulatory actions, BBB complaints, or attributed reporting;
// contested characterizations are attributed to their sources. These pages are
// for merchants dealing with these funders, we are not affiliated with any.

export type Funder = {
  slug: string;
  name: string;
  aka?: string;
  hq: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  // What the public record shows (sourced, factual).
  record: string[];
  // What merchants dealing with this funder should know / do.
  playbook: string[];
  faq: { q: string; a: string }[];
  sources: { label: string; url: string }[];
};

export const FUNDERS: Funder[] = [
  {
    "slug": "everest-business-funding",
    "name": "Everest Business Funding",
    "aka": "EBF Holdings, LLC; affiliated with EBF Partners",
    "hq": "Florida / New York filings",
    "metaTitle": "Everest Business Funding Lawsuits: What Merchants Should Know (2026)",
    "metaDescription": "Read the actual EBF Holdings v. Emek Renovation decision and its limits, plus documents to gather when facing an Everest Business Funding dispute.",
    "intro": "The reviewed record for EBF Holdings, doing business as Everest Business Funding, includes a dispute over an allegedly breached settlement. Read the actual procedural result before drawing conclusions about collection practices.",
    "record": [
      "In EBF Holdings v. Emek Renovation Corp. (April 11, 2025), the Kings County court denied an unopposed application under CPLR 3215(i). The settlement predated the action, so that particular procedure was unavailable.",
      "The denial was not a finding that the entire obligation was invalid. This single decision does not establish Everest’s filing frequency, typical discount, or settlement success rate."
    ],
    "playbook": [
      "Keep both the original funding documents and every later settlement or amendment. A demand may concern a later agreement rather than only the advance.",
      "Have counsel check the procedural request and claimed balance. Do not infer the result of your case from this decision."
    ],
    "faq": [
      {
        "q": "Everest is suing me. What should I collect?",
        "a": "Gather the complaint, service details, original contract, later settlements, and payment records for counsel. Identify the actual deadline."
      },
      {
        "q": "Does the Emek decision cancel other Everest obligations?",
        "a": "No. It addresses a particular application and procedural requirement, not every Everest contract."
      }
    ],
    "sources": [
      {
        "label": "New York Courts: EBF Holdings v. Emek Renovation (2025)",
        "url": "https://www.nycourts.gov/Reporter/3dseries/2025/2025_50535.htm"
      }
    ]
  },
  {
    "slug": "forward-financing",
    "name": "Forward Financing",
    "hq": "Boston, Massachusetts",
    "metaTitle": "Forward Financing Lawsuits and Settlement: A Merchant's Guide (2026)",
    "metaDescription": "Forward Financing’s published reconciliation requirements, their limits, and questions to check against your own revenue-based financing agreement.",
    "intro": "Forward Financing publishes its own explanation of revenue-based financing and contract requirements. Those company materials can help identify questions to ask, but they do not establish independent litigation or settlement outcomes.",
    "record": [
      "Forward’s contract highlights describe a purchase of future revenue and say access to reconciliation and payment flexibility requires compliance with the agreement, including financial documentation.",
      "These are the company’s descriptions. Your signed product and terms govern; this page does not verify a litigation frequency or a representative settlement result."
    ],
    "playbook": [
      "Identify the actual product in your agreement; do not assume every product a provider offers has the same terms.",
      "For a revenue adjustment, follow the written procedure and retain the request, supporting records, and response.",
      "If court papers exist, obtain legal review independently of any customer-service discussion."
    ],
    "faq": [
      {
        "q": "Does this page show how often Forward sues?",
        "a": "No. We have not established a representative filing count or collection timeline."
      },
      {
        "q": "Can I request revised payments?",
        "a": "Check your agreement’s process and ask for the written requirements. A request is not an approved change."
      }
    ],
    "sources": [
      {
        "label": "Forward Financing: company contract highlights",
        "url": "https://www.forwardfinancing.com/resources/forward-revenue-based-financing-contract-highlights/"
      }
    ]
  },
  {
    "slug": "fora-financial",
    "name": "Fora Financial",
    "aka": "Fora Financial Advance, LLC; Fora Financial Holdings; files under aliases incl. Empire Merchant Advance per defense-firm reports",
    "hq": "New York, New York",
    "metaTitle": "Fora Financial Lawsuits and UCC Liens: What Merchants Should Know (2026)",
    "metaDescription": "What Fora Financial’s 4 Pillar appellate decision actually says, what it does not establish, and documents to review in your own dispute.",
    "intro": "Fora’s published 4 Pillar decision concerns an independent sales organization agreement. It is useful context about that dispute, but it is not a merchant default judgment or a measure of merchant settlement outcomes.",
    "record": [
      "In Fora Financial Advance v. 4 Pillar Consulting (March 13, 2025), the First Department dismissed a tortious-interference claim and otherwise affirmed the appealed order.",
      "The case involved a broker/ISO agreement and an interference-fee provision. It does not establish that Fora wins every claim, uses a standard collection timetable, or offers particular merchant discounts."
    ],
    "playbook": [
      "Match your own contracting party and documents. Do not treat an entity name mentioned in secondary commentary as proof of who owns your obligation.",
      "If reconciliation or a claimed default is disputed, preserve the contract and correspondence for counsel.",
      "Ask for written terms covering the actual parties, balances, releases, and filings."
    ],
    "faq": [
      {
        "q": "Was 4 Pillar a merchant-default decision?",
        "a": "No. The cited appeal concerned claims under an ISO relationship. It should not be presented as a typical merchant collections result."
      },
      {
        "q": "Does Fora settle balances?",
        "a": "You may request terms, but we have not verified a representative acceptance rate, discount, or timeframe."
      }
    ],
    "sources": [
      {
        "label": "New York Courts: Fora Financial Advance v. 4 Pillar Consulting (2025)",
        "url": "https://www.nycourts.gov/reporter/3dseries/2025/2025_01422.htm"
      }
    ]
  },
  {
    "slug": "cfg-merchant-solutions",
    "name": "CFG Merchant Solutions",
    "aka": "CFG Merchant Solutions, LLC (CFGMS)",
    "hq": "New York, New York",
    "metaTitle": "CFG Merchant Solutions Lawsuits: Court Record and Merchant Guide (2026)",
    "metaDescription": "CFG v. Valentis distinguished business and guarantor claims. Read the decision’s outcome and limits before assessing your own settlement dispute.",
    "intro": "A published CFG case illustrates why a business’s obligations and a guarantor’s obligations must be assessed separately. It concerns particular settlement documents, not every CFG account.",
    "record": [
      "In CFG Merchant Solutions v. Valentis Security Services (September 16, 2022), the court granted summary judgment against the business on a settlement claim but denied it against the guarantor.",
      "The guarantor claims were severed and continued; denial of that branch of the motion was not a final cancellation of all personal exposure. The opinion does not establish a typical discount or complaint rate."
    ],
    "playbook": [
      "Include every later settlement and its payment history in the record you give counsel.",
      "Review the guarantor’s signed terms and alleged breach separately from the company’s balance.",
      "Preserve actual customer notices and collection communications. General allegations on review sites do not resolve their legality."
    ],
    "faq": [
      {
        "q": "Does a business judgment automatically establish guarantor liability?",
        "a": "Do not assume so. The guarantee, pleaded claim, evidence, and applicable law require separate review."
      },
      {
        "q": "What if I missed a settlement payment?",
        "a": "Review the settlement’s notice, default, and remedy terms promptly with counsel. Another agreement is not assured."
      }
    ],
    "sources": [
      {
        "label": "New York Courts: CFG v. Valentis Security Services (2022)",
        "url": "https://www.nycourts.gov/Reporter/3dseries/2022/2022_50875.htm"
      }
    ]
  },
  {
    "slug": "reliant-funding",
    "name": "Reliant Funding",
    "aka": "Reliant Services Group, LLC",
    "hq": "San Diego, California",
    "metaTitle": "Reliant Funding Lawsuits and Complaints: What Merchants Should Know",
    "metaDescription": "A scoped review of Reliant Services Group’s 2021 California annual-report consent order, with limits and questions for merchants reviewing their own documents.",
    "intro": "The verified regulatory source below concerns a 2021 California annual-report filing matter involving Reliant Services Group. Its scope is narrower than a general finding about every Reliant financing agreement.",
    "record": [
      "The May 12, 2021 DFPI consent order describes a late annual report and rescinds an earlier summary license-revocation order. It is a historical administrative matter.",
      "This order is not a current licensing check, a merchant settlement result, or a finding that your agreement is invalid. We do not infer present collection practices from it."
    ],
    "playbook": [
      "Match the legal entity and product in your agreement rather than relying only on the Reliant Funding trade name.",
      "Keep origination materials and the payment ledger if you dispute representations or amounts.",
      "Verify any current court notice independently and obtain advice on the actual deadline."
    ],
    "faq": [
      {
        "q": "Does the 2021 order cancel my balance?",
        "a": "No such conclusion follows from this source. Counsel would need to assess your own agreement and facts."
      },
      {
        "q": "Does this page establish how often Reliant sues?",
        "a": "No. The source reviewed here does not provide representative collection or settlement statistics."
      }
    ],
    "sources": [
      {
        "label": "California DFPI: Reliant Services Group consent order (May 12, 2021)",
        "url": "https://dfpi.ca.gov/wp-content/uploads/sites/337/2021/05/Consent-Order-Reliant-Services-Group-LLC-2021.pdf"
      }
    ]
  },
  {
    "slug": "expansion-capital-group",
    "name": "Expansion Capital Group",
    "aka": "Expansion Capital Group, LLC (ECG)",
    "hq": "Sioux Falls, South Dakota",
    "metaTitle": "Expansion Capital Group: Consent Order, Complaints, and Merchant Guide",
    "metaDescription": "What the California DFPI April 2022 enforcement listing confirms about Expansion Capital Group, and what remains unverified.",
    "intro": "California’s April 2022 enforcement summary lists a consent order for Expansion Capital Group. That historical entry is context; it does not establish a current restriction or a result for a merchant’s own dispute.",
    "record": [
      "The DFPI April 2022 summary lists an April 4, 2022 consent order concerning Expansion Capital Group under Financial Code section 22712.",
      "The full order could not be retrieved during this check. We therefore do not summarize detailed findings, penalties, ongoing terms, or alleged collection behavior from it."
    ],
    "playbook": [
      "Obtain the complete order and any later records before relying on its terms or current effect.",
      "Compare your own signed agreement, statements, and notices; a historical enforcement entry does not establish a defense.",
      "Request written clarification of disputed balances and seek counsel for active proceedings."
    ],
    "faq": [
      {
        "q": "Is Expansion currently operating under a restriction?",
        "a": "This historical listing does not establish current status. Check the complete order and later regulatory records."
      },
      {
        "q": "Does the listing determine my settlement terms?",
        "a": "No. It provides no representative discount, acceptance rate, or outcome for your account."
      }
    ],
    "sources": [
      {
        "label": "California DFPI: April 2022 enforcement summary",
        "url": "https://dfpi.ca.gov/wp-content/uploads/sites/337/2022/05/Summary-of-Enforcement-Actions-APRIL-2022.pdf"
      }
    ]
  },
  {
    "slug": "kalamata-capital-group",
    "name": "Kalamata Capital Group",
    "hq": "New York area",
    "metaTitle": "Kalamata Capital Group Lawsuits: Speed, Default Judgments, and Defense",
    "metaDescription": "A specific 2026 Kalamata Capital Group court record, its evidentiary context, and documents to gather for your own revenue-purchase dispute.",
    "intro": "A 2026 Erie County decision discusses two revenue-purchase agreements involving Kalamata and Aaction Power Equipment. The opinion supplies a specific record to read rather than an assumed industry collection pattern.",
    "record": [
      "Kalamata Capital Group v. Aaction Power Equipment, decided February 23, 2026 and corrected in part March 27, 2026, considers a summary-judgment application and evidence of funding under two agreements.",
      "The court’s analysis concerns those documents and the parties’ submitted evidence. It does not establish Kalamata’s overall filing volume, average settlement discount, or the merits of another merchant’s defenses."
    ],
    "playbook": [
      "Preserve funding receipts as well as remittance records; a balance dispute may require both.",
      "Give counsel the complete agreements and actual court papers, including any venue or jurisdiction provisions.",
      "A published decision is not a substitute for meeting the deadlines in your own case."
    ],
    "faq": [
      {
        "q": "Does this opinion predict my outcome?",
        "a": "No. Compare the facts and procedural posture with counsel; the legal and evidentiary issues may differ."
      },
      {
        "q": "Can I negotiate while a case is pending?",
        "a": "You can request a proposal, but negotiations do not automatically alter court deadlines."
      }
    ],
    "sources": [
      {
        "label": "New York Courts: Kalamata v. Aaction Power Equipment (2026)",
        "url": "https://www.nycourts.gov/Reporter/3dseries/2026/2026_50375.htm"
      }
    ]
  },
  {
    "slug": "pearl-capital",
    "name": "Pearl Capital",
    "aka": "Pearl Capital Business Funding, LLC; Pearl Alpha / Beta / Gamma / Delta Funding entities",
    "hq": "New York, New York",
    "metaTitle": "Pearl Capital Lawsuits: The Landmark Cases and What They Mean for Merchants",
    "metaDescription": "Read the scoped result of Champion Auto Sales v. Pearl Beta Funding and questions about entity identity, judgment records, and written releases.",
    "intro": "The reviewed Champion Auto Sales decision concerns Pearl Beta Funding and a challenge to a confession-of-judgment entry. Do not assume a decision involving one Pearl entity establishes the rights of every similarly named company.",
    "record": [
      "In Champion Auto Sales v. Pearl Beta Funding (March 15, 2018), the First Department affirmed dismissal of the complaint seeking to vacate a judgment by confession. The court found the underlying transaction was not usurious on that record.",
      "This is not a ruling that every Pearl agreement is a lawful purchase or that every judgment challenge fails. Identify the precise entity, agreement, and proceeding."
    ],
    "playbook": [
      "Compare the contracting name with any assignee, plaintiff, or secured party shown in your own records.",
      "If judgment exists, obtain the entry documents and enforcement notices for counsel.",
      "Ensure proposed releases cover the actual parties and obligations; do not infer an assignment from similar names."
    ],
    "faq": [
      {
        "q": "Does Champion Auto establish that all MCAs are valid?",
        "a": "No. It addresses the transaction and challenge before that court."
      },
      {
        "q": "How do I identify the correct Pearl entity?",
        "a": "Use the signed agreement, assignment evidence, court papers, and financing statements. Ask for clarification of any mismatch."
      }
    ],
    "sources": [
      {
        "label": "New York Courts: Champion Auto Sales v. Pearl Beta Funding (2018)",
        "url": "https://www.nycourts.gov/Reporter/3dseries/2018/2018_01645.htm"
      }
    ]
  }
];

export function getFunderBySlug(slug: string) {
  return FUNDERS.find((f) => f.slug === slug);
}
