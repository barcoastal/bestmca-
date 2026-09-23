export type ResearchUpdate = {
  checkedAt: string;
  pricing: string;
  findings: { heading: string; text: string; sourceLabel: string; sourceUrl: string }[];
};

// Public company disclosures checked September 24; not client-contract audits.
export const REVIEW_RESEARCH: Record<string, ResearchUpdate> = {
  "coastal-debt-resolve": {
    checkedAt: "2026-09-24",
    pricing: "Coastal advertises a free consultation. Its public disclaimer distinguishes savings before and after program fees, but does not provide an itemized enrollment fee schedule. Obtain program, administration, legal and cancellation charges in writing, separately from creditor payments. The September 12 BBB record noted a no-refund policy; this update did not recheck that record or inspect a signed client agreement.",
    findings: [
      { heading: "Payment relief and total savings are different", text: "Coastal publishes examples of lower weekly payments and separately describes savings before and after program fees. Those figures answer different questions: a smaller weekly debit does not establish a lower total cost. Request a proposal showing creditor payments, all fees and the payment schedule together. The examples are company-selected, not independently audited typical results.", sourceLabel: "Coastal homepage and program disclaimer", sourceUrl: "https://www.coastaldebt.com/" },
      { heading: "Website terms are not the enrollment agreement", text: "The public Terms and Conditions govern website use and say they do not change existing agreements. They describe arbitration and other dispute provisions, but are not an itemized program contract. Request the actual enrollment agreement and applicable cancellation, refund and dispute terms before signing.", sourceLabel: "Coastal Terms and Conditions", sourceUrl: "https://www.coastaldebt.com/terms-of-use" },
      { heading: "Confirm legal services and state eligibility", text: "The homepage advertises legal resources, while its disclaimer says the company does not provide legal advice and is not available in every state. Ask who would represent you, whether a separate agreement is required and which legal costs are included.", sourceLabel: "Coastal service descriptions and exclusions", sourceUrl: "https://www.coastaldebt.com/" },
    ],
  },
  "rise-alliance": {
    checkedAt: "2026-09-24",
    pricing: "Rise advertises a free consultation. Its business-debt-resolution FAQ says consulting costs depend on project scope, without an itemized price schedule on that page. Ask for a written breakdown of restructuring, consulting and legal charges, payment milestones and cancellation terms. Neither a signed engagement nor a standard refund policy was verified in this check.",
    findings: [
      { heading: "The proposed work may go beyond negotiation", text: "Rise's RISE Program description includes corporate balance-sheet restructuring and, when needed, Article 9 restructuring. A proposal may therefore involve structural business changes rather than only a revised payment schedule. Ask the adviser and your counsel to explain the proposed transactions, affected assets, creditor involvement and personal guarantees. The marketing description does not establish that any protection will apply to your case.", sourceLabel: "Rise's RISE Program description", sourceUrl: "https://risealliance.com/about/" },
      { heading: "Scope determines the quoted cost", text: "The service FAQ describes project-dependent consulting costs. The reviewed page does not specify a universal percentage, flat price, cancellation charge or refund formula. Compare the full proposal, including any continuing consulting work, rather than assuming that the free consultation makes later services free.", sourceLabel: "Rise business debt resolution and cost FAQ", sourceUrl: "https://risealliance.com/services/business-debt-resolution/" },
      { heading: "Compare related providers as related providers", text: "Rise identifies itself as a division of Second Wind Consultants. Ask which entity will contract with you and how the two offerings differ. A related firm's credentials or customer records should not automatically be assigned to the agreement you receive.", sourceLabel: "Rise company relationship", sourceUrl: "https://risealliance.com/about/" },
    ],
  },
  "business-debt-law-group": {
    checkedAt: "2026-09-24",
    pricing: "Business Debt Law Group advertises a free case evaluation. No itemized fee schedule was found on the homepage, attorney roster or FAQ reviewed in this check. Obtain a written engagement covering negotiation, litigation, expenses, billing milestones and termination. Do not assume either hourly or flat-rate billing without a proposal.",
    findings: [
      { heading: "Named attorneys, with case-specific availability to confirm", text: "The firm's attorney roster names Anthony Rumore and Steven R. Serra, and identifies Rumore Jocelyn Serra PLLC. This establishes what the firm publishes, not independent verification of current bar standing or availability. Confirm the responsible attorney, jurisdiction and scope in your engagement.", sourceLabel: "BDLG attorney roster", sourceUrl: "https://businessdebtlawgroup.com/attorneys/" },
      { heading: "Prepare the documents that affect the proposal", text: "The firm's consultation guidance requests complete MCA agreements, guarantees, payment records, creditor correspondence and any lawsuit, judgment, UCC or bank-restraint documents. Preparing these helps identify what the proposed representation must cover. The public FAQ is not an engagement agreement or a fee quote.", sourceLabel: "BDLG consultation-document guidance", sourceUrl: "https://businessdebtlawgroup.com/frequently-asked-questions/" },
      { heading: "Ask what the final settlement documents will address", text: "BDLG's FAQ distinguishes settlement of business obligations from the treatment of guarantees, liens, judgments and litigation. Ask which of those issues the quoted work covers and what written releases or filings are contemplated. The FAQ does not promise a standard reduction or outcome.", sourceLabel: "BDLG settlement and UCC FAQs", sourceUrl: "https://businessdebtlawgroup.com/frequently-asked-questions/" },
    ],
  },
  "business-debt-insider": {
    checkedAt: "2026-09-24",
    pricing: "BDI's disclosure says the initial assessment is free and program fees vary with debt size, lender mix and the chosen approach. Terms are discussed before signing. Attorney representation requires a separate engagement and separate legal fees. No complete program price schedule, cancellation charge or refund formula was found in the disclosure and website terms reviewed.",
    findings: [
      { heading: "Budget for two engagements if legal work is needed", text: "BDI identifies itself as GRL Recovery LLC's trade name and says it is not a law firm. Its disclosure requires a separate attorney agreement for representation, with fees charged separately by the attorney. Compare the combined consulting and legal costs, including when each becomes payable.", sourceLabel: "BDI service and fee disclosure", sourceUrl: "https://businessdebtinsider.com/disclosure" },
      { heading: "A free assessment does not establish a program price", text: "The disclosure ties program fees to debt size, lender mix and the selected approach. It also says outcome examples may be actual or representative. Ask which example is documented, which is illustrative and how your quotation differs; neither type guarantees your result.", sourceLabel: "BDI assessment and outcome disclosure", sourceUrl: "https://businessdebtinsider.com/disclosure" },
      { heading: "Request the final agreement rather than relying on website terms", text: "The public Terms of Service currently describe themselves as starter copy awaiting counsel review. They identify the business and general website conditions but do not supply an itemized program agreement. Request the final dated engagement, cancellation and refund provisions, and any separate attorney agreement before committing.", sourceLabel: "BDI public Terms of Service", sourceUrl: "https://businessdebtinsider.com/terms" },
    ],
  },
};
