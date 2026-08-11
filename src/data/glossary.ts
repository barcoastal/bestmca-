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
    slug: "merchant-cash-advance",
    term: "Merchant Cash Advance (MCA)",
    definition:
      "A merchant cash advance is financing structured as a purchase of a business's future revenue rather than a loan. The funder advances a lump sum and collects a fixed daily or weekly amount, or a percentage of sales, until a larger total (the advance times a factor rate) is repaid. Because it is framed as a purchase, it avoids most lending regulation and usury caps.",
    detail:
      "The purchase framing is why MCA costs can reach the equivalent of 60 to 300 percent APR legally, and why the tools for getting out of one differ from ordinary debt relief. Whether a given advance is truly a purchase or a disguised loan is the central question in much MCA litigation.",
    related: [
      { label: "Every MCA debt relief option", href: "/mca-debt-relief" },
      { label: "Factor rate", href: "/glossary/factor-rate" },
    ],
  },
  {
    slug: "factor-rate",
    term: "Factor Rate",
    definition:
      "The multiplier that sets the total repayment on an MCA. An advance of $100,000 at a 1.4 factor rate means the business repays $140,000 regardless of how fast it pays. Factor rates typically run 1.2 to 1.5, and unlike interest, the cost does not shrink if you repay early.",
    detail:
      "Converted to an annualized rate, a 1.4 factor repaid over six months is roughly 80 percent APR or more, which is the comparison funders' marketing avoids. New state disclosure laws increasingly force that APR equivalent to be shown before signing.",
    related: [
      { label: "MCA contract red flags", href: "/guides/mca-contract-red-flags" },
    ],
  },
  {
    slug: "holdback",
    term: "Holdback",
    definition:
      "The share of daily card sales or revenue an MCA funder collects, either as a true percentage of each day's receipts or, more commonly, as a fixed daily ACH debit estimated from past revenue. Typical holdbacks run 5 to 20 percent of daily volume.",
    detail:
      "The gap between a fixed debit and your actual revenue is where businesses drown: the debit stays constant while sales dip. The reconciliation clause exists to close that gap, and invoking it is often the fastest legitimate payment relief available.",
    related: [
      { label: "Reconciliation clause", href: "/glossary/reconciliation-clause" },
    ],
  },
  {
    slug: "specified-percentage",
    term: "Specified Percentage",
    definition:
      "The percentage of future receivables an MCA agreement says the funder has purchased, for example, 15 percent of all revenue until the purchased amount is delivered. It is the contractual basis for the daily payment and the number a reconciliation trues the payment back to.",
    detail:
      "Courts examining whether an MCA is a true purchase look hard at whether collections actually track this percentage. Funders that ignore it in practice, collecting fixed amounts regardless of revenue, undermine their own contract's legal characterization.",
    related: [
      { label: "Reconciliation guide", href: "/guides/mca-reconciliation-clause" },
      { label: "Recharacterization", href: "/glossary/recharacterization" },
    ],
  },
  {
    slug: "receivables-purchase-agreement",
    term: "Receivables Purchase Agreement",
    definition:
      "The contract behind most MCAs: the funder agrees to buy a defined amount of the business's future receivables at a discount, paid as the upfront advance. Legally it is a sale of an asset, not a loan, which is what exempts it from lending laws in most states.",
    detail:
      "Everything unusual about MCA collections, UCC filings on all assets, direct access to your bank account, notices to your customers, flows from this structure. Read it for the reconciliation clause, the default triggers, and any Confession of Judgment before signing.",
    related: [
      { label: "Contract red flags, clause by clause", href: "/guides/mca-contract-red-flags" },
    ],
  },
  {
    slug: "reconciliation-clause",
    term: "Reconciliation Clause",
    definition:
      "A contract provision entitling the merchant to have the fixed daily MCA payment adjusted, reconciled, to match the agreed percentage of actual revenue. If revenue drops 40 percent, a proper reconciliation drops the payment roughly 40 percent and credits past over-collection.",
    detail:
      "The clause exists because it protects the funder's legal position: true purchases must track real revenue. Most owners never invoke it. A written reconciliation request with bank statements attached is free, is not a default, and forces a useful choice: honor the clause or create evidence for a recharacterization argument.",
    related: [
      { label: "How to invoke reconciliation", href: "/guides/mca-reconciliation-clause" },
    ],
  },
  {
    slug: "true-up",
    term: "True-Up",
    definition:
      "The periodic adjustment that reconciles what an MCA funder actually collected against what the specified percentage of real revenue would have been, refunding or crediting the difference. Some contracts require the merchant to request it; better ones run it monthly by default.",
    detail:
      "In practice 'true-up' and 'reconciliation' describe the same mechanism. What matters is who carries the burden: clauses that require the merchant to ask, with documentation, within short windows, are designed not to be used.",
    related: [
      { label: "Reconciliation clause", href: "/glossary/reconciliation-clause" },
    ],
  },
  {
    slug: "ach-debit",
    term: "ACH Debit (MCA)",
    definition:
      "The automated daily or weekly withdrawal an MCA funder takes from the business bank account under authorization signed at funding. It is how remittance actually happens for most advances, fixed amounts pulled every business day.",
    detail:
      "Failed debits trigger fees, re-presentments (sometimes several per day), and default clauses. Revoking ACH authorization or switching accounts without a strategy is itself an event of default in most agreements, so banking moves belong inside a plan, not a panic.",
    related: [
      { label: "What happens in default, week by week", href: "/guides/what-happens-mca-default" },
    ],
  },
  {
    slug: "confession-of-judgment",
    term: "Confession of Judgment (COJ)",
    definition:
      "A document signed at funding in which the merchant admits liability in advance, allowing the funder to enter a court judgment on default without filing a lawsuit, without a hearing, and often without notice. It converts a payment dispute into an enforceable judgment almost overnight.",
    detail:
      "New York banned COJs against out-of-state debtors in 2019 and courts have vacated thousands entered with procedural defects, but they persist in other venues and older contracts. If your agreement contains one, treat any approaching default as a legal emergency and get counsel before a payment is missed.",
    related: [
      { label: "Warning signs a funder is going legal", href: "/guides/warning-signs-mca-funder-legal-action" },
      { label: "COJ vacatur", href: "/glossary/coj-vacatur" },
    ],
  },
  {
    slug: "coj-vacatur",
    term: "COJ Vacatur",
    definition:
      "A court order undoing a judgment that was entered through a Confession of Judgment. Vacatur is granted for procedural defects: defective affidavits, improper venue, service failures, or noncompliance with statutes like New York's COJ reforms.",
    detail:
      "Vacatur does not erase the underlying debt; it removes the judgment and its enforcement tools (restraints, levies) and restores your right to defend. Attacking the judgment and negotiating a settlement usually proceed in parallel.",
    related: [
      { label: "Frozen account first-48-hours guide", href: "/guides/frozen-account-mca-funder" },
    ],
  },
  {
    slug: "ucc-1-financing-statement",
    term: "UCC-1 Financing Statement",
    definition:
      "A public notice filed with a state's Secretary of State recording a creditor's security interest in a business's assets. MCA funders file blanket UCC-1s covering receivables, inventory, equipment, and accounts, establishing priority against other creditors.",
    detail:
      "The filing itself takes nothing, but it blocks bank loans and SBA refinancing until released, and it is the foundation for customer-notification letters. Search your state's UCC database before negotiating anything; every filing is a settlement item, and no resolution is complete until terminations hit the public record.",
    related: [
      { label: "Getting UCC liens released", href: "/guides/ucc-lien-release-mca" },
    ],
  },
  {
    slug: "ucc-9-406-notice",
    term: "UCC 9-406 Notice",
    definition:
      "A letter an MCA funder sends to a business's customers, citing UCC Section 9-406, instructing them to pay the funder directly instead of the business, on the theory that the funder owns the receivables. Customers who ignore a valid notice risk paying twice, so most comply.",
    detail:
      "It is the funder's fastest revenue weapon and frequently overreaches: sent on disputed positions, claiming more than was assigned, or defective in form. Customers may demand proof of the assignment, and withdrawal of the notices is a standard term in negotiated resolutions.",
    related: [
      { label: "Full UCC 9-406 guide", href: "/ucc-9-406-merchant-cash-advance" },
    ],
  },
  {
    slug: "account-debtor",
    term: "Account Debtor",
    definition:
      "In UCC language, the party who owes money on a receivable, from a business owner's perspective, your customer. When an MCA funder claims your receivables, your customers are the account debtors it can notify under UCC 9-406.",
    detail:
      "The term matters because the statute's rights and duties attach to it: an account debtor who receives valid notice must pay the assignee to be safe, but is also entitled to request reasonable proof of the assignment first.",
    related: [
      { label: "UCC 9-406 explained", href: "/ucc-9-406-merchant-cash-advance" },
    ],
  },
  {
    slug: "personal-guarantee",
    term: "Personal Guarantee (MCA)",
    definition:
      "A commitment making the business owner personally liable if the business cannot pay. In MCA agreements it typically guarantees performance, that the merchant will not breach the contract, but in practice funders pursue guarantors personally after default: personal credit, personal assets, personal bank accounts.",
    detail:
      "The guarantee is why an MCA default follows owners home and why resolving the debt through negotiation beats unmanaged default. Watch for guarantee language buried in performance covenants and for requests that a spouse co-sign.",
    related: [
      { label: "Contract red flags", href: "/guides/mca-contract-red-flags" },
    ],
  },
  {
    slug: "stacking",
    term: "Stacking",
    definition:
      "Taking multiple MCA advances that draw from the same revenue simultaneously. Each advance is priced as if it were alone; three or four together commonly remit 30 to 45 percent of gross revenue daily, more than most businesses' entire margin.",
    detail:
      "Stacking usually violates anti-stacking clauses in every agreement in the pile, giving each funder default leverage it can invoke at will. Stacks are resolved as one coordinated negotiation across funders, not one position at a time.",
    related: [
      { label: "Getting out of stacked MCAs", href: "/guides/stacked-mca-debt" },
    ],
  },
  {
    slug: "reverse-consolidation",
    term: "Reverse Consolidation",
    definition:
      "A product marketed as MCA consolidation that does not pay off existing advances. Instead, the provider deposits weekly amounts that cover the merchant's existing daily pulls while collecting its own longer, larger payment, leaving every original position alive and adding a new one on top.",
    detail:
      "It smooths cash flow for a while at a heavy total cost, and for stacks that were unpayable already it typically postpones and enlarges the reckoning. Ask one question of any consolidation offer: does this retire my positions, or sit alongside them?",
    related: [
      { label: "Consolidation vs settlement", href: "/guides/mca-consolidation-vs-settlement" },
      { label: "MCA consolidation loans", href: "/mca-consolidation-loans" },
    ],
  },
  {
    slug: "mca-default",
    term: "Default (MCA)",
    definition:
      "Any event an MCA agreement defines as breach, which reaches far beyond missed payments: changing bank accounts, taking additional financing, dipping below minimum balances, or blocked ACH access can all be contractual defaults even while payments continue.",
    detail:
      "Default unlocks the funder's remedies: default fees, acceleration, UCC notices to customers, processor freezes, and any Confession of Judgment. The escalation follows a recognizable ladder, and options narrow at each rung, which is why the first default notice, not the fifth, is the moment to act.",
    related: [
      { label: "The default timeline, week by week", href: "/guides/what-happens-mca-default" },
    ],
  },
  {
    slug: "merchant-account-freeze",
    term: "Merchant Account Freeze",
    definition:
      "A hold placed on a business's card-processing funds, typically after an MCA funder contacts the processor claiming rights over the receivables. Card sales continue but settlements stop reaching the business's bank account.",
    detail:
      "For card-heavy businesses a freeze is an existential event measured in days. Freezes are contractual pressure, not court orders, and routinely lift against a signed payment framework, which is why fast, credible engagement beats waiting the funder out.",
    related: [
      { label: "First 48 hours after a freeze", href: "/guides/frozen-account-mca-funder" },
    ],
  },
  {
    slug: "bank-restraint",
    term: "Bank Restraint / Levy",
    definition:
      "A legal freeze on a bank account obtained by a judgment creditor, in MCA cases, usually after a judgment entered by lawsuit or Confession of Judgment. The bank blocks the account on service of the restraining notice; a levy then takes the funds.",
    detail:
      "Unlike a processor freeze, a restraint means a judgment exists, this is legal process, not pressure. Deposits into a restrained account are captured too. Release comes by negotiated stipulation, vacating the judgment, or satisfaction, and counsel should be involved the same day.",
    related: [
      { label: "Frozen account guide", href: "/guides/frozen-account-mca-funder" },
      { label: "COJ vacatur", href: "/glossary/coj-vacatur" },
    ],
  },
  {
    slug: "recharacterization",
    term: "Recharacterization",
    definition:
      "The legal argument that an MCA labeled as a receivables purchase is in substance a loan, and should be treated as one. If a court recharacterizes an advance, lending law applies, including usury caps that many MCA factor rates dramatically exceed.",
    detail:
      "Courts weigh whether repayment was truly contingent on revenue: real reconciliation, no fixed term, no absolute repayment obligation. Funders that ignored their own reconciliation clauses or collected fixed sums regardless of revenue hand merchants the argument. It is a lever in negotiation even when never litigated.",
    related: [
      { label: "Usury", href: "/glossary/usury" },
      { label: "Attorneys vs settlement firms", href: "/guides/mca-attorneys-vs-settlement-companies" },
    ],
  },
  {
    slug: "usury",
    term: "Usury (and MCAs)",
    definition:
      "Laws capping the interest a lender may charge, civil caps around 16 to 25 percent in states like New York, with criminal usury above that. MCAs priced at effective rates far beyond these caps are legal only because they are structured as purchases, not loans.",
    detail:
      "Usury is the stake in every recharacterization fight: if the advance is a loan, its factor-rate pricing may be usurious and unenforceable in whole or part. This is why the purchase-versus-loan question dominates MCA litigation and settlement leverage.",
    related: [
      { label: "Recharacterization", href: "/glossary/recharacterization" },
    ],
  },
  {
    slug: "mca-debt-settlement",
    term: "Debt Settlement (MCA)",
    definition:
      "Negotiating with MCA funders to resolve balances for less than owed, commonly 30 to 60 percent reductions on distressed files, documented in written agreements that also release liens and close accounts. It reduces the number itself, unlike restructuring or consolidation which reshape payments.",
    detail:
      "Settlement fits when full repayment is not realistic. Complete resolutions have three parts: signed settlement agreement per position, UCC terminations on the public record, and written confirmation the account is closed. Missing any one invites the debt back later.",
    related: [
      { label: "How MCA settlement works", href: "/guides/what-is-mca-settlement" },
      { label: "2026 firm rankings", href: "/" },
    ],
  },
  {
    slug: "mca-debt-restructuring",
    term: "Debt Restructuring (MCA)",
    definition:
      "Renegotiating the terms of existing advances, cadence, sizing, duration, so daily pulls become a sustainable weekly or monthly payment, without necessarily reducing the balance. The tool for businesses that can repay in full at a survivable pace.",
    detail:
      "Restructures preserve funder relationships and avoid settled-debt consequences, and funders accept them routinely when the alternative is default. If honest math says full repayment is fiction, restructuring only stretches the problem and settlement is the correct tool.",
    related: [
      { label: "Restructuring explained", href: "/mca-debt-restructuring" },
    ],
  },
  {
    slug: "estoppel-letter",
    term: "Estoppel Letter",
    definition:
      "A statement a funder requests, from the merchant or another creditor, confirming facts like the outstanding balance and absence of disputes, which the signer is later estopped from denying. In MCA collections, funders gather estoppels while building enforcement files.",
    detail:
      "A funder asking for updated bank statements or estoppel confirmations after missed payments is usually preparing litigation. Route such requests through your representative; casually signed confirmations surface later as evidence.",
    related: [
      { label: "Signs a funder is preparing to sue", href: "/guides/warning-signs-mca-funder-legal-action" },
    ],
  },
];

export function getGlossaryTerm(slug: string) {
  return GLOSSARY.find((t) => t.slug === slug);
}
