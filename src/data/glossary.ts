// MCA glossary: plain-English definitions of the legal and financial terms
// business owners meet in merchant cash advance agreements and disputes.
// Each term gets a hub entry and its own page (/glossary/[slug]).

export type GlossaryTerm = {
  slug: string;
  term: string;
  // One-paragraph plain-English definition (the quotable answer).
  definition: string;
  // Practical context: why it matters / what to do about it.
  detail: string;
  related: { label: string; href: string }[];
};

export const GLOSSARY: GlossaryTerm[] = [
  {
    "slug": "merchant-cash-advance",
    "term": "Merchant Cash Advance (MCA)",
    "definition": "Financing commonly structured as a purchase of future business receivables for an upfront payment. Remittance may use a revenue percentage or estimated periodic debits.",
    "detail": "The label does not determine legal treatment. Read the agreement and consider the transaction’s substance and applicable law; no industry-wide APR range is established here.",
    "related": [
      {
        "label": "Every MCA debt relief option",
        "href": "/mca-debt-relief"
      },
      {
        "label": "Factor rate",
        "href": "/glossary/factor-rate"
      }
    ]
  },
  {
    "slug": "factor-rate",
    "term": "Factor Rate",
    "definition": "A multiplier used to express a purchased or repayment amount. As a hypothetical example, $100,000 multiplied by 1.4 is $140,000 before considering separate fees or contractual adjustments.",
    "detail": "A factor rate is not an APR. An annualized comparison requires net proceeds, payment timing, fees, and a calculation method. Check the written early-payoff terms instead of assuming there is or is not a discount.",
    "related": [
      {
        "label": "MCA contract red flags",
        "href": "/guides/mca-contract-red-flags"
      }
    ]
  },
  {
    "slug": "holdback",
    "term": "Holdback",
    "definition": "The portion of receipts allocated to a funder under the agreement. Distinguish a percentage of actual receipts from a fixed debit estimated from revenue.",
    "detail": "Compare the agreed calculation with actual collections. Any reconciliation or future adjustment depends on the contract; no typical holdback percentage is verified here.",
    "related": [
      {
        "label": "Reconciliation clause",
        "href": "/glossary/reconciliation-clause"
      }
    ]
  },
  {
    "slug": "specified-percentage",
    "term": "Specified Percentage",
    "definition": "The contractual percentage of defined receipts used in a receivables-purchase arrangement. The agreement must identify the revenue included and how collections are calculated.",
    "detail": "The definition and operation of this term matter. Compare the contract with bank records rather than inferring a legal result from the percentage alone.",
    "related": [
      {
        "label": "Reconciliation guide",
        "href": "/guides/mca-reconciliation-clause"
      },
      {
        "label": "Recharacterization",
        "href": "/glossary/recharacterization"
      }
    ]
  },
  {
    "slug": "receivables-purchase-agreement",
    "term": "Receivables Purchase Agreement",
    "definition": "An agreement describing a sale of specified receivables or future revenue in exchange for funding. Its terms define the parties’ rights and obligations.",
    "detail": "Calling an agreement a purchase does not conclusively establish exemption from lending laws. Review reconciliation, recourse, default, collateral, and dispute provisions together.",
    "related": [
      {
        "label": "Contract red flags, clause by clause",
        "href": "/guides/mca-contract-red-flags"
      }
    ]
  },
  {
    "slug": "reconciliation-clause",
    "term": "Reconciliation Clause",
    "definition": "A provision for comparing collected payments with an agreed share of actual revenue and making adjustments under the contract’s formula and procedure.",
    "detail": "Check required records, notice method, calculation period, and available credits or refunds. A request does not automatically change payment obligations or establish a defense.",
    "related": [
      {
        "label": "How to invoke reconciliation",
        "href": "/guides/mca-reconciliation-clause"
      }
    ]
  },
  {
    "slug": "true-up",
    "term": "True-Up",
    "definition": "An adjustment comparing estimated collections with the amount calculated under the agreement for a defined period. It may overlap with what a contract calls reconciliation.",
    "detail": "Read who must initiate the process and what evidence is required. A documentation requirement alone does not establish improper intent or make a clause invalid.",
    "related": [
      {
        "label": "Reconciliation clause",
        "href": "/glossary/reconciliation-clause"
      }
    ]
  },
  {
    "slug": "ach-debit",
    "term": "ACH Debit (MCA)",
    "definition": "An electronic withdrawal through the Automated Clearing House network. In an MCA arrangement, the authorization and agreement describe the permitted remittances.",
    "detail": "Review any disputed debit, fee, or failed payment against the records. Obtain advice before changing authorization or bank arrangements where contractual or legal restrictions may apply.",
    "related": [
      {
        "label": "What happens in default, notices and options",
        "href": "/guides/what-happens-mca-default"
      }
    ]
  },
  {
    "slug": "confession-of-judgment",
    "term": "Confession of Judgment (COJ)",
    "definition": "A document authorizing a procedure for entry of judgment without an ordinary action where the applicable law permits it and its requirements are satisfied.",
    "detail": "Review the affidavit, parties, dates, and filing history. New York CPLR 3218 imposes specific conditions; do not assume a signature produces a valid judgment or a universal enforcement timeline.",
    "related": [
      {
        "label": "Warning signs a funder is going legal",
        "href": "/guides/warning-signs-mca-funder-legal-action"
      },
      {
        "label": "COJ vacatur",
        "href": "/glossary/coj-vacatur"
      }
    ]
  },
  {
    "slug": "coj-vacatur",
    "term": "COJ Vacatur",
    "definition": "A court’s setting aside of a judgment entered by confession. The available grounds, procedural route, deadlines, and consequences depend on the jurisdiction and record.",
    "detail": "Request the complete judgment and enforcement papers for counsel. Filing a challenge does not itself cancel the obligation or automatically release every restriction.",
    "related": [
      {
        "label": "Frozen account response guide",
        "href": "/guides/frozen-account-mca-funder"
      }
    ]
  },
  {
    "slug": "ucc-1-financing-statement",
    "term": "UCC-1 Financing Statement",
    "definition": "A public financing statement identifying a debtor, secured party, and indicated collateral. It must be read alongside the underlying transaction and applicable law.",
    "detail": "Filing alone does not seize property or conclusively establish every priority or enforcement right. Review the records, collateral, and termination requirements before a payoff or refinancing.",
    "related": [
      {
        "label": "Getting UCC liens released",
        "href": "/guides/ucc-lien-release-mca"
      }
    ]
  },
  {
    "slug": "ucc-9-406-notice",
    "term": "UCC 9-406 Notice",
    "definition": "A notice of assignment concerning payment of a receivable. UCC 9-406 addresses when notice changes how an account debtor can discharge the obligation, with conditions and exceptions.",
    "detail": "Check the relevant jurisdiction, assignment, and notice. The statute includes a process for requesting proof; do not treat every letter as automatically valid or harmless to ignore.",
    "related": [
      {
        "label": "Full UCC 9-406 guide",
        "href": "/ucc-9-406-merchant-cash-advance"
      }
    ]
  },
  {
    "slug": "account-debtor",
    "term": "Account Debtor",
    "definition": "The person obligated on an account, chattel paper, or general intangible under the relevant UCC terminology. A business customer owing an assigned invoice may be an account debtor.",
    "detail": "Assignment-notice rules can affect where payment should be made. Have the actual receivable and notice reviewed rather than relying on the label alone.",
    "related": [
      {
        "label": "UCC 9-406 explained",
        "href": "/ucc-9-406-merchant-cash-advance"
      }
    ]
  },
  {
    "slug": "personal-guarantee",
    "term": "Personal Guarantee (MCA)",
    "definition": "A person’s contractual undertaking concerning another party’s obligation or performance. Liability depends on the guarantee’s wording, conditions, and applicable law.",
    "detail": "Read who signed and which events trigger responsibility. Business nonpayment does not automatically establish all personal liability, asset exposure, or credit-reporting consequences.",
    "related": [
      {
        "label": "Contract red flags",
        "href": "/guides/mca-contract-red-flags"
      }
    ]
  },
  {
    "slug": "stacking",
    "term": "Stacking",
    "definition": "Having multiple advances or financing obligations drawing on the same business cash flow at the same time.",
    "detail": "Prepare a combined payment forecast and review additional-financing restrictions. No standard number of positions, remittance percentage, or settlement discount is established here.",
    "related": [
      {
        "label": "Getting out of stacked MCAs",
        "href": "/guides/stacked-mca-debt"
      }
    ]
  },
  {
    "slug": "reverse-consolidation",
    "term": "Reverse Consolidation",
    "definition": "A financing arrangement marketed to help cover existing remittances through additional funding rather than necessarily paying off the original obligations. Product terms vary.",
    "detail": "List which original balances remain and add every new payment and fee. Short-term cash relief does not by itself establish affordability over the full term.",
    "related": [
      {
        "label": "Consolidation vs settlement",
        "href": "/guides/mca-consolidation-vs-settlement"
      },
      {
        "label": "MCA consolidation loans",
        "href": "/mca-consolidation-loans"
      }
    ]
  },
  {
    "slug": "mca-default",
    "term": "Default (MCA)",
    "definition": "An alleged or established failure to satisfy an obligation under an MCA agreement. The contract and applicable law determine the relevant conditions and remedies.",
    "detail": "A missed debit, default notice, lawsuit, and judgment are separate events. Verify the actual document and deadline rather than assuming a standard escalation ladder.",
    "related": [
      {
        "label": "The default timeline, notices and options",
        "href": "/guides/what-happens-mca-default"
      }
    ]
  },
  {
    "slug": "merchant-account-freeze",
    "term": "Merchant Account Freeze",
    "definition": "A restriction on the availability of card-processing funds. Its basis may involve processor terms, reserves, a dispute, or legal process.",
    "detail": "Ask the processor for the written reason, affected funds, and release conditions. Do not assume it is caused by an MCA funder or will lift after a payment proposal.",
    "related": [
      {
        "label": "Responding to an account restriction",
        "href": "/guides/frozen-account-mca-funder"
      }
    ]
  },
  {
    "slug": "bank-restraint",
    "term": "Bank Restraint / Levy",
    "definition": "A legal restriction on dealing with specified property or funds. A levy is a distinct enforcement mechanism; the governing procedure and protections vary by jurisdiction.",
    "detail": "Get the bank’s actual notice and case details for counsel. Do not infer the basis of every bank hold from this term or move restricted funds to evade legal process.",
    "related": [
      {
        "label": "Frozen account guide",
        "href": "/guides/frozen-account-mca-funder"
      },
      {
        "label": "COJ vacatur",
        "href": "/glossary/coj-vacatur"
      }
    ]
  },
  {
    "slug": "recharacterization",
    "term": "Recharacterization",
    "definition": "The legal analysis of whether a transaction described as a receivables purchase is substantively another form of financing, such as a loan.",
    "detail": "The documents, actual performance, and applicable law matter. A court’s consideration of allegations at an early stage is not a final finding about every similar agreement.",
    "related": [
      {
        "label": "Usury",
        "href": "/glossary/usury"
      },
      {
        "label": "Attorneys vs settlement firms",
        "href": "/guides/mca-attorneys-vs-settlement-companies"
      }
    ]
  },
  {
    "slug": "usury",
    "term": "Usury (and MCAs)",
    "definition": "Restrictions on interest charged on loans or forbearances, subject to jurisdiction-specific thresholds, exceptions, and remedies.",
    "detail": "Before applying a rate limit, determine the transaction’s legal character and which law applies. A high factor rate alone does not establish an unlawful transaction or a guaranteed defense.",
    "related": [
      {
        "label": "Recharacterization",
        "href": "/glossary/recharacterization"
      }
    ]
  },
  {
    "slug": "mca-debt-settlement",
    "term": "Debt Settlement (MCA)",
    "definition": "An attempt to negotiate an agreed resolution of a claimed MCA balance, potentially through a reduced payoff or revised payment terms. Creditor acceptance is required.",
    "detail": "No representative savings rate is verified here. Specify the covered parties, payment obligations, releases, filings, and proceedings in the written agreement.",
    "related": [
      {
        "label": "How MCA settlement works",
        "href": "/guides/what-is-mca-settlement"
      },
      {
        "label": "2026 firm rankings",
        "href": "/"
      }
    ]
  },
  {
    "slug": "mca-debt-restructuring",
    "term": "Debt Restructuring (MCA)",
    "definition": "An agreed change to existing payment terms, such as timing or amount, without necessarily reducing the total balance.",
    "detail": "Creditor acceptance, affordability, reporting, and business continuity are not guaranteed. Compare the complete revised terms with other available options.",
    "related": [
      {
        "label": "Restructuring explained",
        "href": "/mca-debt-restructuring"
      }
    ]
  },
  {
    "slug": "estoppel-letter",
    "term": "Estoppel Letter",
    "definition": "A written statement confirming specified facts about an obligation or relationship, potentially including balances, payments, or disputes. Its legal effect depends on its terms and context.",
    "detail": "Read each statement before signing and obtain advice about disputed facts. A request for a letter does not itself prove that litigation is imminent.",
    "related": [
      {
        "label": "Signs a funder is preparing to sue",
        "href": "/guides/warning-signs-mca-funder-legal-action"
      }
    ]
  }
];

export function getGlossaryTerm(slug: string) {
  return GLOSSARY.find((t) => t.slug === slug);
}
