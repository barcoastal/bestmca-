import { REVIEWS, type Review } from "./reviews";

export type Industry = {
  slug: string;
  name: string;
  pluralName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whyDifferent: string;
  whyDifferentSecond: string;
  picks: Review[];
  // Deep-dive editorial sections rendered between the overview and the picks.
  sections: { title: string; body: string[] }[];
  // Industry-specific FAQ, rendered with FAQPage schema.
  faq: { q: string; a: string }[];
};

const pickByName = (names: string[]) =>
  names
    .map((n) => REVIEWS.find((r) => r.shortName === n))
    .filter(Boolean) as Review[];

export const INDUSTRIES: Industry[] = [
{
  "slug": "mca-debt-relief-for-retail",
  "name": "Retail",
  "pluralName": "retail businesses",
  "metaTitle": "MCA Debt Relief for Retail: Options and Company Reviews",
  "metaDescription": "Compare MCA relief options for retail businesses, with cash-flow questions, contract checks, and dated company reviews. Coastal is featured first.",
  "h1": "MCA debt relief for retail businesses",
  "intro": "Use this checklist to compare a settlement or restructuring proposal for retail businesses. The business-specific questions below are planning considerations, not measured industry outcomes or a recommendation to stop payments.",
  "whyDifferent": "Build a weekly forecast showing card settlements, cash sales, inventory orders, rent, payroll, returns, and each advance payment. Separate available cash from sales that have not yet reached the bank.",
  "whyDifferentSecond": "Compare any proposal against the cash actually available after operating obligations. An advertised reduction in the daily payment does not by itself show the total cost or whether every funder has agreed.",
  "sections": [
    {
      "title": "Inventory and processor cash flow",
      "body": [
        "Model a baseline week and a slower-collection week. Identify which assumptions would make the proposed payment unaffordable, and ask how the agreement handles that situation.",
        "Prepare the signed advance agreements, payment history, notices, and a list of each contracting entity and guarantor. Ask the adviser to identify what additional records are needed and why."
      ]
    },
    {
      "title": "Compare written options and total costs",
      "body": [
        "Ask whether the proposal changes payment timing, reduces an agreed balance, or introduces new financing. Request the total creditor payments, provider fees, separate attorney fees, cancellation terms, and what happens if a funder does not agree.",
        "A proposal is not a completed settlement. Confirm which parties must sign, what obligations remain, and which releases are included. Do not treat a promised result, completion date, or continuing access to financing as established without evidence."
      ]
    }
  ],
  "faq": [
    {
      "q": "How should I evaluate a processor notice?",
      "a": "Preserve the notice and the relevant agreements. Ask counsel and the processor to identify the claimed assignment, the affected receivables, and any deadline. A notice is not proof that every payment must be frozen; its effect depends on the facts and applicable law."
    },
    {
      "q": "Can retail businesses arrange payments around collections?",
      "a": "You can ask for revised terms and document the proposed schedule. Acceptance is not guaranteed. Have the signed agreement reviewed for any existing reconciliation procedure and the consequences of changing or stopping payments."
    },
    {
      "q": "Why is Coastal listed first?",
      "a": "Coastal is the publisher’s featured first provider by editorial choice. We have not established superior results for this industry. Compare the dated public records, service scope, and written fees for each provider."
    }
  ],
  picks: pickByName(["Coastal", "Second Wind", "Corporate Rescue Advisors"])
},
{
  "slug": "mca-debt-relief-for-salons",
  "name": "Salons and Beauty",
  "pluralName": "salons and beauty businesses",
  "metaTitle": "MCA Debt Relief for Salons and Beauty: Options and Company Reviews",
  "metaDescription": "Compare MCA relief options for salons and beauty businesses, with cash-flow questions, contract checks, and dated company reviews. Coastal is featured first.",
  "h1": "MCA debt relief for salons and beauty businesses",
  "intro": "Use this checklist to compare a settlement or restructuring proposal for salons and beauty businesses. The business-specific questions below are planning considerations, not measured industry outcomes or a recommendation to stop payments.",
  "whyDifferent": "Separate service revenue, product sales, booth-rental income, tips, and payroll obligations in the forecast. Show how appointment cancellations or a stylist departure affect the cash available for payments.",
  "whyDifferentSecond": "Compare any proposal against the cash actually available after operating obligations. An advertised reduction in the daily payment does not by itself show the total cost or whether every funder has agreed.",
  "sections": [
    {
      "title": "Appointments, payroll and booth rental",
      "body": [
        "Model a baseline week and a slower-collection week. Identify which assumptions would make the proposed payment unaffordable, and ask how the agreement handles that situation.",
        "Prepare the signed advance agreements, payment history, notices, and a list of each contracting entity and guarantor. Ask the adviser to identify what additional records are needed and why."
      ]
    },
    {
      "title": "Compare written options and total costs",
      "body": [
        "Ask whether the proposal changes payment timing, reduces an agreed balance, or introduces new financing. Request the total creditor payments, provider fees, separate attorney fees, cancellation terms, and what happens if a funder does not agree.",
        "A proposal is not a completed settlement. Confirm which parties must sign, what obligations remain, and which releases are included. Do not treat a promised result, completion date, or continuing access to financing as established without evidence."
      ]
    }
  ],
  "faq": [
    {
      "q": "Will a settlement guarantee future financing?",
      "a": "No. A settlement does not guarantee approval for another loan. Ask a prospective lender about its criteria and have any agreed releases documented; do not assume a resolved balance removes every filing or reporting consequence."
    },
    {
      "q": "Can salons and beauty businesses arrange payments around collections?",
      "a": "You can ask for revised terms and document the proposed schedule. Acceptance is not guaranteed. Have the signed agreement reviewed for any existing reconciliation procedure and the consequences of changing or stopping payments."
    },
    {
      "q": "Why is Coastal listed first?",
      "a": "Coastal is the publisher’s featured first provider by editorial choice. We have not established superior results for this industry. Compare the dated public records, service scope, and written fees for each provider."
    }
  ],
  picks: pickByName(["Coastal", "Eastern Financial", "Regroup"])
},
{
  "slug": "mca-debt-relief-for-staffing-companies",
  "name": "Staffing",
  "pluralName": "staffing and recruiting firms",
  "metaTitle": "MCA Debt Relief for Staffing: Options and Company Reviews",
  "metaDescription": "Compare MCA relief options for staffing and recruiting firms, with cash-flow questions, contract checks, and dated company reviews. Coastal is featured first.",
  "h1": "MCA debt relief for staffing and recruiting firms",
  "intro": "Use this checklist to compare a settlement or restructuring proposal for staffing and recruiting firms. The business-specific questions below are planning considerations, not measured industry outcomes or a recommendation to stop payments.",
  "whyDifferent": "Compare payroll dates with expected client collection dates. List disputed invoices and factor advances separately so the same expected receipt is not counted twice. Include the factoring agreement when requesting advice.",
  "whyDifferentSecond": "Compare any proposal against the cash actually available after operating obligations. An advertised reduction in the daily payment does not by itself show the total cost or whether every funder has agreed.",
  "sections": [
    {
      "title": "Payroll timing and invoice collections",
      "body": [
        "Model a baseline week and a slower-collection week. Identify which assumptions would make the proposed payment unaffordable, and ask how the agreement handles that situation.",
        "Prepare the signed advance agreements, payment history, notices, and a list of each contracting entity and guarantor. Ask the adviser to identify what additional records are needed and why."
      ]
    },
    {
      "title": "Compare written options and total costs",
      "body": [
        "Ask whether the proposal changes payment timing, reduces an agreed balance, or introduces new financing. Request the total creditor payments, provider fees, separate attorney fees, cancellation terms, and what happens if a funder does not agree.",
        "A proposal is not a completed settlement. Confirm which parties must sign, what obligations remain, and which releases are included. Do not treat a promised result, completion date, or continuing access to financing as established without evidence."
      ]
    }
  ],
  "faq": [
    {
      "q": "Does my factoring company automatically have priority?",
      "a": "Do not assume priority from the type of provider. Counsel needs the agreements, filings, dates, and collateral descriptions to assess competing claims. Discuss proposed changes with the factor before relying on continued advances."
    },
    {
      "q": "Can staffing and recruiting firms arrange payments around collections?",
      "a": "You can ask for revised terms and document the proposed schedule. Acceptance is not guaranteed. Have the signed agreement reviewed for any existing reconciliation procedure and the consequences of changing or stopping payments."
    },
    {
      "q": "Why is Coastal listed first?",
      "a": "Coastal is the publisher’s featured first provider by editorial choice. We have not established superior results for this industry. Compare the dated public records, service scope, and written fees for each provider."
    }
  ],
  picks: pickByName(["Coastal", "Second Wind", "Regroup"])
},
{
  "slug": "mca-debt-relief-for-security-firms",
  "name": "Security",
  "pluralName": "security firms and contract security businesses",
  "metaTitle": "MCA Debt Relief for Security: Options and Company Reviews",
  "metaDescription": "Compare MCA relief options for security firms and contract security businesses, with cash-flow questions, contract checks, and dated company reviews. Coastal is featured first.",
  "h1": "MCA debt relief for security firms and contract security businesses",
  "intro": "Use this checklist to compare a settlement or restructuring proposal for security firms and contract security businesses. The business-specific questions below are planning considerations, not measured industry outcomes or a recommendation to stop payments.",
  "whyDifferent": "Map guard payroll, insurance, licensing costs, and expected customer receipts by week. Model the loss or delay of a major contract separately from the normal forecast.",
  "whyDifferentSecond": "Compare any proposal against the cash actually available after operating obligations. An advertised reduction in the daily payment does not by itself show the total cost or whether every funder has agreed.",
  "sections": [
    {
      "title": "Contract renewals and guard payroll",
      "body": [
        "Model a baseline week and a slower-collection week. Identify which assumptions would make the proposed payment unaffordable, and ask how the agreement handles that situation.",
        "Prepare the signed advance agreements, payment history, notices, and a list of each contracting entity and guarantor. Ask the adviser to identify what additional records are needed and why."
      ]
    },
    {
      "title": "Compare written options and total costs",
      "body": [
        "Ask whether the proposal changes payment timing, reduces an agreed balance, or introduces new financing. Request the total creditor payments, provider fees, separate attorney fees, cancellation terms, and what happens if a funder does not agree.",
        "A proposal is not a completed settlement. Confirm which parties must sign, what obligations remain, and which releases are included. Do not treat a promised result, completion date, or continuing access to financing as established without evidence."
      ]
    }
  ],
  "faq": [
    {
      "q": "Can a debt dispute affect my license or bond?",
      "a": "Requirements differ by jurisdiction, license, and bond terms. Ask the relevant licensing authority, surety, and qualified counsel about any disclosure or renewal requirements. Do not assume settlement eliminates them."
    },
    {
      "q": "Can security firms and contract security businesses arrange payments around collections?",
      "a": "You can ask for revised terms and document the proposed schedule. Acceptance is not guaranteed. Have the signed agreement reviewed for any existing reconciliation procedure and the consequences of changing or stopping payments."
    },
    {
      "q": "Why is Coastal listed first?",
      "a": "Coastal is the publisher’s featured first provider by editorial choice. We have not established superior results for this industry. Compare the dated public records, service scope, and written fees for each provider."
    }
  ],
  picks: pickByName(["Coastal", "Eastern Financial", "Second Wind"])
},
{
  "slug": "mca-debt-relief-for-professional-services",
  "name": "Professional Services",
  "pluralName": "professional services firms",
  "metaTitle": "MCA Debt Relief for Professional Services: Options and Company Reviews",
  "metaDescription": "Compare MCA relief options for professional services firms, with cash-flow questions, contract checks, and dated company reviews. Coastal is featured first.",
  "h1": "MCA debt relief for professional services firms",
  "intro": "Use this checklist to compare a settlement or restructuring proposal for professional services firms. The business-specific questions below are planning considerations, not measured industry outcomes or a recommendation to stop payments.",
  "whyDifferent": "Distinguish billed work from collected cash. List client concentration, partner draws, guarantees, and restrictions on any trust or client accounts. Have counsel assess which funds belong to the business before building a proposal.",
  "whyDifferentSecond": "Compare any proposal against the cash actually available after operating obligations. An advertised reduction in the daily payment does not by itself show the total cost or whether every funder has agreed.",
  "sections": [
    {
      "title": "Receivables, partner obligations and client funds",
      "body": [
        "Model a baseline week and a slower-collection week. Identify which assumptions would make the proposed payment unaffordable, and ask how the agreement handles that situation.",
        "Prepare the signed advance agreements, payment history, notices, and a list of each contracting entity and guarantor. Ask the adviser to identify what additional records are needed and why."
      ]
    },
    {
      "title": "Compare written options and total costs",
      "body": [
        "Ask whether the proposal changes payment timing, reduces an agreed balance, or introduces new financing. Request the total creditor payments, provider fees, separate attorney fees, cancellation terms, and what happens if a funder does not agree.",
        "A proposal is not a completed settlement. Confirm which parties must sign, what obligations remain, and which releases are included. Do not treat a promised result, completion date, or continuing access to financing as established without evidence."
      ]
    }
  ],
  "faq": [
    {
      "q": "Is a negotiated settlement guaranteed to remain private?",
      "a": "No. Confidentiality depends on the agreement, existing proceedings, and disclosure obligations. A settlement can become relevant to litigation or other required disclosures. Ask counsel what can actually be kept confidential."
    },
    {
      "q": "Can professional services firms arrange payments around collections?",
      "a": "You can ask for revised terms and document the proposed schedule. Acceptance is not guaranteed. Have the signed agreement reviewed for any existing reconciliation procedure and the consequences of changing or stopping payments."
    },
    {
      "q": "Why is Coastal listed first?",
      "a": "Coastal is the publisher’s featured first provider by editorial choice. We have not established superior results for this industry. Compare the dated public records, service scope, and written fees for each provider."
    }
  ],
  picks: pickByName(["Coastal", "Second Wind", "Corporate Turnaround"])
},
{
  "slug": "mca-debt-relief-for-construction",
  "name": "Construction",
  "pluralName": "construction companies and contractors",
  "metaTitle": "MCA Debt Relief for Construction: Options and Company Reviews",
  "metaDescription": "Compare MCA relief options for construction companies and contractors, with cash-flow questions, contract checks, and dated company reviews. Coastal is featured first.",
  "h1": "MCA debt relief for construction companies and contractors",
  "intro": "Use this checklist to compare a settlement or restructuring proposal for construction companies and contractors. The business-specific questions below are planning considerations, not measured industry outcomes or a recommendation to stop payments.",
  "whyDifferent": "Build the forecast by project, including approved draws, disputed change orders, retainage, subcontractor obligations, and material purchases. Treat uncertain release dates as scenarios rather than committed cash.",
  "whyDifferentSecond": "Compare any proposal against the cash actually available after operating obligations. An advertised reduction in the daily payment does not by itself show the total cost or whether every funder has agreed.",
  "sections": [
    {
      "title": "Progress payments, retainage and project costs",
      "body": [
        "Model a baseline week and a slower-collection week. Identify which assumptions would make the proposed payment unaffordable, and ask how the agreement handles that situation.",
        "Prepare the signed advance agreements, payment history, notices, and a list of each contracting entity and guarantor. Ask the adviser to identify what additional records are needed and why."
      ]
    },
    {
      "title": "Compare written options and total costs",
      "body": [
        "Ask whether the proposal changes payment timing, reduces an agreed balance, or introduces new financing. Request the total creditor payments, provider fees, separate attorney fees, cancellation terms, and what happens if a funder does not agree.",
        "A proposal is not a completed settlement. Confirm which parties must sign, what obligations remain, and which releases are included. Do not treat a promised result, completion date, or continuing access to financing as established without evidence."
      ]
    }
  ],
  "faq": [
    {
      "q": "Can I use retainage to fund a settlement?",
      "a": "First confirm the release conditions, expected timing, and any restrictions or competing rights to the funds. Ask counsel and your financial adviser whether the proposal leaves enough cash for project obligations. A funder is not required to accept a retainage-funded offer."
    },
    {
      "q": "Can construction companies and contractors arrange payments around collections?",
      "a": "You can ask for revised terms and document the proposed schedule. Acceptance is not guaranteed. Have the signed agreement reviewed for any existing reconciliation procedure and the consequences of changing or stopping payments."
    },
    {
      "q": "Why is Coastal listed first?",
      "a": "Coastal is the publisher’s featured first provider by editorial choice. We have not established superior results for this industry. Compare the dated public records, service scope, and written fees for each provider."
    }
  ],
  picks: pickByName(["Coastal", "Second Wind", "Regroup"])
},
{
  "slug": "mca-debt-relief-for-ecommerce",
  "name": "E-commerce",
  "pluralName": "e-commerce and online sellers",
  "metaTitle": "MCA Debt Relief for E-commerce: Options and Company Reviews",
  "metaDescription": "Compare MCA relief options for e-commerce and online sellers, with cash-flow questions, contract checks, and dated company reviews. Coastal is featured first.",
  "h1": "MCA debt relief for e-commerce and online sellers",
  "intro": "Use this checklist to compare a settlement or restructuring proposal for e-commerce and online sellers. The business-specific questions below are planning considerations, not measured industry outcomes or a recommendation to stop payments.",
  "whyDifferent": "Distinguish marketplace sales from available payouts after reserves, refunds, chargebacks, fulfillment, inventory, and advertising costs. Model payout delays separately and identify which platform accounts are named in an agreement or notice.",
  "whyDifferentSecond": "Compare any proposal against the cash actually available after operating obligations. An advertised reduction in the daily payment does not by itself show the total cost or whether every funder has agreed.",
  "sections": [
    {
      "title": "Marketplace payouts, returns and advertising",
      "body": [
        "Model a baseline week and a slower-collection week. Identify which assumptions would make the proposed payment unaffordable, and ask how the agreement handles that situation.",
        "Prepare the signed advance agreements, payment history, notices, and a list of each contracting entity and guarantor. Ask the adviser to identify what additional records are needed and why."
      ]
    },
    {
      "title": "Compare written options and total costs",
      "body": [
        "Ask whether the proposal changes payment timing, reduces an agreed balance, or introduces new financing. Request the total creditor payments, provider fees, separate attorney fees, cancellation terms, and what happens if a funder does not agree.",
        "A proposal is not a completed settlement. Confirm which parties must sign, what obligations remain, and which releases are included. Do not treat a promised result, completion date, or continuing access to financing as established without evidence."
      ]
    }
  ],
  "faq": [
    {
      "q": "Will negotiating an MCA restore a marketplace payout?",
      "a": "Not automatically. A platform reserve or hold may have several causes. Ask the platform for its stated reason and requirements, and have counsel review any assignment notice. An agreement with one funder may not resolve the platform issue."
    },
    {
      "q": "Can e-commerce and online sellers arrange payments around collections?",
      "a": "You can ask for revised terms and document the proposed schedule. Acceptance is not guaranteed. Have the signed agreement reviewed for any existing reconciliation procedure and the consequences of changing or stopping payments."
    },
    {
      "q": "Why is Coastal listed first?",
      "a": "Coastal is the publisher’s featured first provider by editorial choice. We have not established superior results for this industry. Compare the dated public records, service scope, and written fees for each provider."
    }
  ],
  picks: pickByName(["Coastal", "Eastern Financial", "Second Wind"])
},
{
  "slug": "mca-debt-relief-for-medical-dental",
  "name": "Medical and Dental",
  "pluralName": "medical and dental practices",
  "metaTitle": "MCA Debt Relief for Medical and Dental: Options and Company Reviews",
  "metaDescription": "Compare MCA relief options for medical and dental practices, with cash-flow questions, contract checks, and dated company reviews. Coastal is featured first.",
  "h1": "MCA debt relief for medical and dental practices",
  "intro": "Use this checklist to compare a settlement or restructuring proposal for medical and dental practices. The business-specific questions below are planning considerations, not measured industry outcomes or a recommendation to stop payments.",
  "whyDifferent": "Use aggregate receivable aging and reimbursement timing to model cash flow alongside payroll, equipment payments, and other practice obligations. Avoid sending patient-identifying information when aggregate financial records will suffice.",
  "whyDifferentSecond": "Compare any proposal against the cash actually available after operating obligations. An advertised reduction in the daily payment does not by itself show the total cost or whether every funder has agreed.",
  "sections": [
    {
      "title": "Reimbursements, equipment and practice obligations",
      "body": [
        "Model a baseline week and a slower-collection week. Identify which assumptions would make the proposed payment unaffordable, and ask how the agreement handles that situation.",
        "Prepare the signed advance agreements, payment history, notices, and a list of each contracting entity and guarantor. Ask the adviser to identify what additional records are needed and why."
      ]
    },
    {
      "title": "Compare written options and total costs",
      "body": [
        "Ask whether the proposal changes payment timing, reduces an agreed balance, or introduces new financing. Request the total creditor payments, provider fees, separate attorney fees, cancellation terms, and what happens if a funder does not agree.",
        "A proposal is not a completed settlement. Confirm which parties must sign, what obligations remain, and which releases are included. Do not treat a promised result, completion date, or continuing access to financing as established without evidence."
      ]
    }
  ],
  "faq": [
    {
      "q": "Does a UCC filing mean a funder can take clinical equipment?",
      "a": "A filing alone does not determine the right to take a particular asset. Counsel must assess the security agreement, default provisions, ownership, competing interests, and applicable enforcement rules. Do not assume equipment is protected simply because another lender is involved."
    },
    {
      "q": "Can medical and dental practices arrange payments around collections?",
      "a": "You can ask for revised terms and document the proposed schedule. Acceptance is not guaranteed. Have the signed agreement reviewed for any existing reconciliation procedure and the consequences of changing or stopping payments."
    },
    {
      "q": "Why is Coastal listed first?",
      "a": "Coastal is the publisher’s featured first provider by editorial choice. We have not established superior results for this industry. Compare the dated public records, service scope, and written fees for each provider."
    }
  ],
  picks: pickByName(["Coastal", "Second Wind", "Corporate Turnaround"])
},
{
  "slug": "mca-debt-relief-for-auto-repair",
  "name": "Auto Repair",
  "pluralName": "auto repair shops and dealers",
  "metaTitle": "MCA Debt Relief for Auto Repair: Options and Company Reviews",
  "metaDescription": "Compare MCA relief options for auto repair shops and dealers, with cash-flow questions, contract checks, and dated company reviews. Coastal is featured first.",
  "h1": "MCA debt relief for auto repair shops and dealers",
  "intro": "Use this checklist to compare a settlement or restructuring proposal for auto repair shops and dealers. The business-specific questions below are planning considerations, not measured industry outcomes or a recommendation to stop payments.",
  "whyDifferent": "List parts orders, supplier terms, payroll, rent, equipment obligations, and available card receipts by week. Distinguish completed paid work from estimates and jobs waiting for parts.",
  "whyDifferentSecond": "Compare any proposal against the cash actually available after operating obligations. An advertised reduction in the daily payment does not by itself show the total cost or whether every funder has agreed.",
  "sections": [
    {
      "title": "Parts purchases, bay capacity and card receipts",
      "body": [
        "Model a baseline week and a slower-collection week. Identify which assumptions would make the proposed payment unaffordable, and ask how the agreement handles that situation.",
        "Prepare the signed advance agreements, payment history, notices, and a list of each contracting entity and guarantor. Ask the adviser to identify what additional records are needed and why."
      ]
    },
    {
      "title": "Compare written options and total costs",
      "body": [
        "Ask whether the proposal changes payment timing, reduces an agreed balance, or introduces new financing. Request the total creditor payments, provider fees, separate attorney fees, cancellation terms, and what happens if a funder does not agree.",
        "A proposal is not a completed settlement. Confirm which parties must sign, what obligations remain, and which releases are included. Do not treat a promised result, completion date, or continuing access to financing as established without evidence."
      ]
    }
  ],
  "faq": [
    {
      "q": "How much can a repair shop save in settlement?",
      "a": "We have not verified a representative savings range for repair shops. Compare the original obligation, creditor payments, provider fees, separate legal costs, and written releases. A percentage reduction in a stated balance is not the same as net savings."
    },
    {
      "q": "Can auto repair shops and dealers arrange payments around collections?",
      "a": "You can ask for revised terms and document the proposed schedule. Acceptance is not guaranteed. Have the signed agreement reviewed for any existing reconciliation procedure and the consequences of changing or stopping payments."
    },
    {
      "q": "Why is Coastal listed first?",
      "a": "Coastal is the publisher’s featured first provider by editorial choice. We have not established superior results for this industry. Compare the dated public records, service scope, and written fees for each provider."
    }
  ],
  picks: pickByName(["Coastal", "Eastern Financial", "Regroup"])
}
];

export function getIndustryBySlug(slug: string) { return INDUSTRIES.find(i => i.slug === slug); }
