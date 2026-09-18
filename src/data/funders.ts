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
    slug: "everest-business-funding",
    name: "Everest Business Funding",
    aka: "EBF Holdings, LLC; affiliated with EBF Partners",
    hq: "Florida / New York filings",
    metaTitle: "Everest Business Funding Lawsuits: What Merchants Should Know (2026)",
    metaDescription:
      "Everest Business Funding (EBF Holdings) actively files collection suits against merchants in New York and Florida courts. What the court records show, the allegation patterns, and how merchants respond.",
    intro:
      "Everest Business Funding, operating legally as EBF Holdings, LLC, is one of the most active filers in MCA collections. If you searched its name next to the word lawsuit, you are probably holding a default notice or worse. Here is what the public record shows and what the response playbook looks like.",
    record: [
      "Court dockets show EBF Holdings filing breach-of-contract collection actions against merchants in New York Supreme Court (including Kings County) and Florida county courts, with complaints typically alleging the merchant defaulted on a revenue-based financing agreement by diverting receivables or failing to maintain sufficient funds for remittances.",
      "A 2025 Kings County filing against an optical business and its guarantor over a $99,400 agreement illustrates the standard shape: business and personal guarantor named together, default alleged from blocked or insufficient remittances.",
      "Everest has also litigated against debt-settlement companies themselves: together with Yellowstone Capital, it won a reported $500,000 settlement against a debt-relief operation accused of interfering with merchant contracts, context worth knowing when a relief firm pitches you a stop-paying strategy.",
      "Merchant-side litigation has alleged predatory practices including fee and disclosure issues and historic use of Confessions of Judgment; no global settlement of such claims had been publicly announced as of early 2026.",
    ],
    playbook: [
      "A default notice should be reviewed promptly with the agreement and any actual court papers. This page does not establish a discount advantage from a particular negotiation stage.",
      "Its complaints lean on diverted-receivables allegations: silently switching bank accounts is the exact conduct its lawyers plead. Any banking changes belong inside a represented strategy.",
      "If the demand names a guarantor, have counsel review the signed guarantee and the allegations separately from the business obligation. A demand does not establish liability.",
      "This page does not establish a representative settlement rate or discount for Everest. A resolved docket entry alone does not disclose the financial terms or establish a comparable outcome.",
    ],
    faq: [
      {
        q: "Everest Business Funding is suing me. What do I do first?",
        a: "Have qualified counsel identify the actual response deadline from the court, service details, and applicable rules. Missing a deadline can expose a party to a request for default relief; it does not automatically establish every amount claimed.",
      },
      {
        q: "Will Everest settle instead of litigating?",
        a: "A particular case may settle, but filing volume does not establish settlement rates or expected terms. A proposal does not suspend court deadlines unless the applicable process changes them.",
      },
      {
        q: "Does Everest use Confessions of Judgment?",
        a: "Merchant-side suits have alleged historic COJ use, and older agreements may contain them. Whether yours does is a document question: find your full funding package and have it read before any default, because a COJ changes the speed of everything.",
      },
    ],
    sources: [
      { label: "Law.com Radar, EBF Holdings v. Exclusive Optical (Kings County)", url: "https://www.law.com/radar/card/newyork-kings-2629484-ebf-holdings-llc-d-b-a-everest-business-funding-v-exclusive-optical-inc" },
      { label: "Justia, EBF Holdings v. Emek Renovation Corp. (2025)", url: "https://law.justia.com/cases/new-york/other-courts/2025/2025-ny-slip-op-50535-u.html" },
      { label: "UniCourt, EBF Holdings collection filings (FL)", url: "https://unicourt.com/case/fl-mda3-casedke858784acbde-1408508" },
    ],
  },
  {
    slug: "forward-financing",
    name: "Forward Financing",
    hq: "Boston, Massachusetts",
    metaTitle: "Forward Financing Lawsuits and Settlement: A Merchant's Guide (2026)",
    metaDescription:
      "What merchants dealing with Forward Financing debt should know: how its revenue-based financing works, what happens after missed remittances, and how resolutions typically proceed.",
    intro:
      "Forward Financing is a Boston-based revenue-based financing provider with a large small-business portfolio. Compared with the industry's most aggressive filers its public litigation footprint is modest, but merchants behind on remittances still face the standard MCA escalation mechanics, and the response playbook is the same.",
    record: [
      "Forward Financing provides revenue-based financing structured as purchases of future receivables, with fixed daily or weekly ACH remittances, the structure that governs what happens in a dispute.",
      "Public records show Forward Financing acting as a co-plaintiff alongside other funders in litigation against a debt-relief operation (MCA Debt Advisors), indicating it actively protects its contracts against interference-style relief tactics.",
      "Secondary commentary does not establish this funder’s typical collection timeline or your contractual exposure. Check the actual notices, agreement, and court docket.",
    ],
    playbook: [
      "The absence of a headline litigation record is not a free pass: contract remedies (default fees, UCC rights, guarantee enforcement) exist in the agreement regardless of how often a funder ends up in published dockets.",
      "Missed-remittance conversations with any funder go better before default than after; if revenue has dropped, a documented reconciliation or restructure request is the correct opening move.",
      "Be careful with relief firms pitching stop-paying strategies against this funder; its co-plaintiff role in anti-interference litigation shows it will pursue the strategy's architects, with your file as evidence.",
      "Resolutions follow the standard arc: documented hardship, a credible proposal, and written settlement terms including UCC terminations.",
    ],
    faq: [
      {
        q: "Does Forward Financing sue merchants?",
        a: "This page does not establish how often Forward Financing sues merchants. Check the contracting entity and any actual docket or notice; possible remedies depend on the agreement and applicable law.",
      },
      {
        q: "Can I settle a Forward Financing balance?",
        a: "You may request revised terms or a settlement, but this page does not establish a standard discount, acceptance rate, or timeline for Forward Financing. Obtain any agreement in writing.",
      },
      {
        q: "My payments are unaffordable but I have not defaulted. What now?",
        a: "Gather the signed agreement and revenue records. Ask about any contractual reconciliation procedure or proposed payment change; do not assume approval or change payments without understanding the consequences.",
      },
    ],
    sources: [
      { label: "CourtListener, funder co-plaintiff litigation records", url: "https://www.courtlistener.com/docket/65407566/fora-financial-holdings-llc-v-new-york-tribeca-group-llc/" },
      { label: "Defense-bar commentary on MCA collection sequences", url: "https://crediblelaw.com/merchant-cash-advance-litigation-defense/" },
    ],
  },
  {
    slug: "fora-financial",
    name: "Fora Financial",
    aka: "Fora Financial Advance, LLC; Fora Financial Holdings; files under aliases incl. Empire Merchant Advance per defense-firm reports",
    hq: "New York, New York",
    metaTitle: "Fora Financial Lawsuits and UCC Liens: What Merchants Should Know (2026)",
    metaDescription:
      "Fora Financial litigates in New York state and federal courts and, per defense-firm reports, files UCC liens under multiple entity names. The record, the patterns, and the merchant playbook.",
    intro:
      "Fora Financial is one of the larger names in small-business financing, and its entities appear regularly in New York state and federal dockets, as plaintiff against merchants and against debt-relief operations alike. Two patterns reported by defense firms matter most to merchants: alias UCC filings and reconciliation friction.",
    record: [
      "Fora Financial entities litigate actively: dockets include Fora Financial Holdings v. New York Tribeca Group (S.D.N.Y.) and a 2025 First Department appellate decision in Fora Fin. Advance v. 4 Pillar Consulting, and Fora appears as co-plaintiff in funder litigation against MCA Debt Advisors and related parties.",
      "Defense-firm reporting states Fora files UCC-1 liens under at least four entity names, including Empire Merchant Advance, which can make filings hard for merchants to identify when auditing their own UCC record.",
      "The same defense-side commentary reports fixed ACH remittances continuing through low-revenue periods with reconciliation requests rarely granted in practice, despite contractual language, an attributed characterization worth testing with your own written reconciliation request.",
      "Personal exposure depends on the guarantee’s language, triggering conditions, and applicable law. A default allegation is not an automatic finding of guarantor liability.",
    ],
    playbook: [
      "Audit your state's UCC database for all filings against your business and check unfamiliar secured-party names against Fora's known entities; you cannot negotiate releases for liens you have not found.",
      "Put reconciliation requests in writing with bank statements attached. If contractual reconciliation is refused or ignored, that paper trail becomes leverage, refusal to reconcile undermines the purchase characterization the contract depends on.",
      "Expect professional, fast-moving litigation if the account goes legal; Fora's appellate activity shows it litigates through, not just files. Answer deadlines are real here.",
      "Complete resolutions must name every Fora-related entity that filed anything: settling with one name while another's lien survives is the alias-filing trap.",
    ],
    faq: [
      {
        q: "I found a UCC lien from a company I never signed with. Could it be Fora?",
        a: "Possibly, defense firms report Fora files under multiple entity names, including Empire Merchant Advance. Match the filing date against your funding history, and make sure any settlement obligates termination of every related entity's filings by name.",
      },
      {
        q: "Fora denied my reconciliation request. Is that the end of it?",
        a: "Keep a copy of the request, supporting records, and response. Counsel can assess the actual reconciliation language and any relevant legal issues; a refusal alone does not establish a defense or a right to a discount.",
      },
      {
        q: "Does Fora Financial settle merchant balances?",
        a: "Litigation volume does not establish settlement volume or outcomes. This page does not provide a verified settlement rate or discount for Fora Financial.",
      },
    ],
    sources: [
      { label: "CourtListener, Fora Financial Holdings v. New York Tribeca Group", url: "https://www.courtlistener.com/docket/65407566/fora-financial-holdings-llc-v-new-york-tribeca-group-llc/" },
      { label: "Justia, Fora Fin. Advance v. 4 Pillar Consulting (1st Dept 2025)", url: "https://law.justia.com/cases/new-york/appellate-division-first-department/2025/index-no-650367-24-appeal-no-3890-case-no-2024-05355.html" },
      { label: "Grant Phillips Law, Fora Financial MCA review (defense-firm report)", url: "https://grantphillipslaw.com/fora-financial-mca-review/" },
    ],
  },
  {
    slug: "cfg-merchant-solutions",
    name: "CFG Merchant Solutions",
    aka: "CFG Merchant Solutions, LLC (CFGMS)",
    hq: "New York, New York",
    metaTitle: "CFG Merchant Solutions Lawsuits: Court Record and Merchant Guide (2026)",
    metaDescription:
      "CFG Merchant Solutions litigates merchant defaults through New York courts, and BBB complaints allege aggressive collection contact. The documented record and the response playbook.",
    intro:
      "CFG Merchant Solutions appears in a steady stream of published New York decisions enforcing its receivables purchase agreements, and on the other side of the ledger, in BBB complaints about its collection conduct. Both halves of that record are useful to a merchant deciding how to respond.",
    record: [
      "Published New York decisions document CFG's enforcement pattern: CFG v. Valentis Security Services (2022), CFG v. Complete Automotive Repair Service (2024, a $22,350 receivables agreement with a personal guarantee), and CFG v. Essential Foundations Preschool (2025, alleging stopped payments and blocked ACH withdrawals with a $35,366 balance).",
      "The cases show the standard claim structure: breach of the receivables agreement, the guarantor named personally, and, in at least one case, a breached settlement agreement pleaded on top of the original default, a reminder that resolutions must be kept, not just signed.",
      "BBB complaints against CFG allege harassment-style collection contact including outreach to personal employers and customers, threatening demands, and disputed account debits; complaints also indicate some merchants signed Confessions of Judgment.",
      "CFG maintains an active BBB profile; its complaint record is public and worth reading in full before negotiating.",
    ],
    playbook: [
      "CFG pleads breached settlements when merchants sign deals they cannot keep. Whatever you negotiate, size it to what the business can actually pay, a broken settlement is worse than none.",
      "If collection contact reaches your customers or personal contacts, document everything: dates, callers, statements. New York's FAIR Business Practices Act now extends abusive-practice protections to small businesses, and documented conduct is leverage.",
      "Check your funding package for a COJ before anything else; complaints indicate some CFG merchants signed them, and that document dictates your risk clock.",
      "The published cases are ordinary contract litigation, which means ordinary defenses and ordinary settlements apply: answer on time, raise real defenses, negotiate from the defended position.",
    ],
    faq: [
      {
        q: "CFG is calling my customers. Can they do that?",
        a: "Preserve the customer notice and related agreements. New York UCC 9-406 addresses assignment notices and their effect, subject to conditions and exceptions. Counsel should assess the notice and applicable jurisdiction; a BBB allegation does not establish unlawful conduct or negotiating leverage.",
      },
      {
        q: "I signed a settlement with CFG and fell behind on it. How bad is that?",
        a: "A missed settlement payment may trigger rights under the settlement and underlying documents. Obtain advice promptly about notices, deadlines, and available options; a second settlement or better terms are not assured.",
      },
      {
        q: "Does CFG Merchant Solutions use Confessions of Judgment?",
        a: "BBB complaint records indicate some merchants signed COJs with CFG. Whether your file contains one is a document question that determines how fast a default can become a judgment, find your full signed package and have it read before any missed payment.",
      },
    ],
    sources: [
      { label: "NY Courts, CFG v. Valentis Security Services (2022)", url: "https://www.nycourts.gov/Reporter/3dseries/2022/2022_50875.htm" },
      { label: "Justia, CFG v. Complete Automotive Repair Service (2024)", url: "https://law.justia.com/cases/new-york/other-courts/2024/2024-ny-slip-op-51512-u.html" },
      { label: "BBB, CFG Merchant Solutions complaints", url: "https://www.bbb.org/us/ny/new-york/profile/financing/cfg-merchant-solutions-llc-0121-87146302/complaints" },
    ],
  },
  {
    slug: "reliant-funding",
    name: "Reliant Funding",
    aka: "Reliant Services Group, LLC",
    hq: "San Diego, California",
    metaTitle: "Reliant Funding Lawsuits and Complaints: What Merchants Should Know",
    metaDescription:
      "Reliant Funding's public record includes regulatory settlements over marketing practices and collection suits against merchants. What the record shows and how to respond to Reliant MCA debt.",
    intro:
      "Reliant Funding is a long-established MCA provider whose public record runs in both directions: regulatory settlements over its own practices, and collection litigation against merchants who defaulted. Both matter when you are deciding how to handle a Reliant balance.",
    record: [
      "Public reporting documents a 2020 settlement with penalty over false and misleading marketing, a 2021 penalty for failing to file a mandatory annual report, and a 2017 class action over robocall practices.",
      "On the collection side, Reliant Services Group, LLC (the entity behind the Reliant Funding trade name) has sued merchants for breach of MCA agreements, e.g., its suit against a construction company, following the industry-standard pattern of business plus guarantor.",
      "Reliant provides merchant cash advances, not loans, meaning the receivables-purchase structure, with its reconciliation questions and characterization issues, governs disputes.",
    ],
    playbook: [
      "The regulatory history is context, not a defense by itself, but marketing-practice findings can matter where your dispute involves what was represented at signing. Keep every document and communication from origination.",
      "Match the entity name: your agreement and any UCC filings may say Reliant Services Group rather than Reliant Funding; settlements and releases must name the right entity.",
      "Standard escalation rules apply: engage before default where possible, answer on time if sued, and paper any resolution with lien terminations.",
    ],
    faq: [
      {
        q: "Does Reliant Funding sue merchants who default?",
        a: "Yes, court records show collection suits by Reliant Services Group against defaulted merchants and their guarantors. Its filings follow the standard breach-of-contract pattern, which means the standard defense and settlement playbook applies.",
      },
      {
        q: "Do Reliant's regulatory settlements help my case?",
        a: "A regulatory or marketing matter does not automatically invalidate your agreement or establish a defense. Preserve your own communications and ask counsel whether a specific finding applies to your facts.",
      },
      {
        q: "Can I settle a Reliant Funding balance?",
        a: "You can request a proposal addressing payment terms, fees, guarantees, and any filings. We have not verified a typical Reliant settlement result or timeline, and agreement is not guaranteed.",
      },
    ],
    sources: [
      { label: "Business.org, Reliant Funding review incl. regulatory history", url: "https://www.business.org/finance/loans/reliant-funding-loans-review/" },
      { label: "Credible Law, Reliant Funding lawsuit defense overview", url: "https://crediblelaw.com/reliant-funding-lawsuit-defense/" },
    ],
  },
  {
    slug: "expansion-capital-group",
    name: "Expansion Capital Group",
    aka: "Expansion Capital Group, LLC (ECG)",
    hq: "Sioux Falls, South Dakota",
    metaTitle: "Expansion Capital Group: Consent Order, Complaints, and Merchant Guide",
    metaDescription:
      "Expansion Capital Group operates under a 2022 California DFPI consent order, and BBB complaints allege collection and lien irregularities. What the record shows and how merchants respond.",
    intro:
      "Expansion Capital Group is a Sioux Falls-based MCA provider with a public record that includes a state regulatory consent order, a detail most merchants dealing with ECG never learn, and one that frames how disputes with it get handled.",
    record: [
      "In 2022, ECG entered a consent order with California's Department of Financial Protection and Innovation concerning its MCA and merchant financing agreements, a public regulatory action available in full on the DFPI's site.",
      "A BBB complaint documents a merchant alleging ECG falsely claimed breach, referred the account to a third-party collector (AMA Recovery Group) not licensed in the merchant's state, and caused a UCC lien with an inflated balance including $760 in allegedly undisclosed fees.",
      "ECG has litigated in federal court in South Dakota, including as plaintiff against the SBA in 2022 and in earlier merchant-related litigation, showing a willingness to use the courts in both directions.",
    ],
    playbook: [
      "If a third-party collector contacts you on an ECG account, check its licensing in your state before engaging; the documented complaint pattern makes that a live question, and unlicensed collection is leverage.",
      "Audit any ECG UCC filing against your actual balance and contract; the complaint record includes an alleged inflated-balance lien, and a filing that overstates the debt is contestable.",
      "The DFPI consent order is public: your representative should know it exists and what it covers, because a funder under regulatory watch prices conduct risk differently in negotiation.",
    ],
    faq: [
      {
        q: "What is the Expansion Capital Group consent order about?",
        a: "It is a 2022 public regulatory action by California's DFPI concerning ECG's merchant financing agreements. The full order is published on the DFPI website; if you are negotiating with ECG, your representative should have read it.",
      },
      {
        q: "A collector called about my ECG account. Do I have to deal with them?",
        a: "Identify the entity making the demand and request the basis for its authority and balance calculation. Whether licensing requirements apply depends on the entity, activity, and jurisdiction; ask qualified counsel rather than assuming a complaint proves a violation.",
      },
      {
        q: "The UCC lien ECG filed shows more than I owe. What can I do?",
        a: "Request a written accounting of the amount advanced, payments, and claimed fees. Have counsel compare it with the agreement and filing. A financing statement is not necessarily a statement of the current payoff balance.",
      },
    ],
    sources: [
      { label: "California DFPI, Consent Order, Expansion Capital Group, LLC (2022)", url: "https://dfpi.ca.gov/wp-content/uploads/sites/337/2022/04/Consent-Order-Expansion-Capital-Group-LLC.pdf" },
      { label: "BBB, Expansion Capital Group complaints", url: "https://www.bbb.org/us/sd/sioux-falls/profile/small-business-loans/expansion-capital-group-llc-0714-300099542/complaints" },
    ],
  },
  {
    slug: "kalamata-capital-group",
    name: "Kalamata Capital Group",
    hq: "New York area",
    metaTitle: "Kalamata Capital Group Lawsuits: Speed, Default Judgments, and Defense",
    metaDescription:
      "Defense firms report Kalamata Capital Group files collection suits fast and obtains default judgments frequently. What that reputation means for merchants, and why the answer deadline is everything.",
    intro:
      "Ask MCA defense attorneys which funders move fastest from default to lawsuit and Kalamata Capital Group comes up repeatedly. Operating since 2013, its reported collection posture makes one date matter more than everything else in your file: the answer deadline.",
    record: [
      "Defense-bar commentary consistently describes Kalamata as quick to sue after default and frequent in obtaining default judgments against merchants who fail to respond, with collection counsel (reported as Berkovitch and Bouskila) filing at volume.",
      "Kalamata appears across published defense-firm litigation guides as a frequently-encountered plaintiff in New York MCA litigation.",
      "Public complaints and reviews reported by consumer and legal sites point to aggressive collection practices; its verified-review footprint is thin, which makes the litigation record the most informative public signal.",
    ],
    playbook: [
      "Assume speed. With this funder, the gap between default and filed suit is reported to be short; the day a default notice arrives is the day to engage representation, not the week after.",
      "Default judgments are the pattern because merchants do not answer. Answering on time, with any defense, converts you from statistic to negotiation, most of Kalamata's leverage evaporates when the case actually has to be litigated.",
      "If a default judgment already exists, move quickly on vacatur review (service defects are a common ground) and restraint response; the frozen-account playbook applies.",
    ],
    faq: [
      {
        q: "How fast does Kalamata actually sue?",
        a: "We have not verified a representative filing timeline for Kalamata. Read any summons or notice promptly and have counsel identify the actual response deadline. Do not infer your deadline from another case.",
      },
      {
        q: "Kalamata got a default judgment against me. Is it over?",
        a: "A judgment may have options for review, enforcement relief, or negotiation, but availability and deadlines depend on the case and jurisdiction. Obtain the docket and judgment for counsel; no particular remedy or outcome is guaranteed.",
      },
      {
        q: "Why do defense lawyers talk about this funder so much?",
        a: "The amount of online legal commentary does not establish a funder’s filing frequency, success rate, or settlement practices. Use specific primary records and your own documents when evaluating a claim.",
      },
    ],
    sources: [
      { label: "NYC Debt Lawyers, Kalamata Capital Group MCA lawsuits", url: "https://www.nycdebtlawyers.com/debt-defense-blog/2023/november/kalamata-capital-group-merchant-cash-advance-law/" },
      { label: "Credible Law, Kalamata lawsuit defense overview", url: "https://crediblelaw.com/kalamata-capital-group-mca-lawsuit-defense/" },
    ],
  },
  {
    slug: "pearl-capital",
    name: "Pearl Capital",
    aka: "Pearl Capital Business Funding, LLC; Pearl Alpha / Beta / Gamma / Delta Funding entities",
    hq: "New York, New York",
    metaTitle: "Pearl Capital Lawsuits: The Landmark Cases and What They Mean for Merchants",
    metaDescription:
      "Pearl Capital's litigation shaped MCA law, including the landmark Champion Auto v. Pearl Beta usury ruling. What its court record means for merchants dealing with Pearl entities today.",
    intro:
      "Cases involving Pearl entities are part of the published MCA litigation record. Individual decisions do not establish that every Pearl agreement is enforceable or predict what will happen in another dispute.",
    record: [
      "In Champion Auto Sales, LLC v. Pearl Beta Funding, LLC (First Department, March 15, 2018), the court affirmed dismissal of the complaint seeking to vacate a judgment by confession and concluded that the underlying agreement was not a usurious transaction. This holding concerns that agreement and record.",
      "Pearl operates through a family of entities, Pearl Capital Business Funding, Pearl Alpha, Pearl Beta, Pearl Gamma, Pearl Delta, which appear together in litigation, including a judgment affirmed on appeal in 2022 arising from a servicing dispute.",
      "Pearl's historic collection model relied heavily on Confessions of Judgment in the pre-2019 New York era; the state's reforms ended COJ entry against out-of-state merchants and pushed funders, including Pearl-era portfolios, into ordinary litigation.",
    ],
    playbook: [
      "Know which Pearl entity holds your position: agreements and UCC filings may name any of the Alpha/Beta/Gamma/Delta entities, and complete resolutions must cover the right ones.",
      "A decision involving one agreement does not decide every other agreement. Ask counsel to evaluate the actual contract, performance, jurisdiction, and relevant current law rather than treating a case summary as a universal rule.",
      "If an older judgment exists, obtain the affidavit, entry documents, and docket for counsel. Changes in law do not automatically undo an existing judgment; any challenge depends on the facts and applicable rules.",
    ],
    faq: [
      {
        q: "Can I argue my Pearl Capital agreement is an illegal usurious loan?",
        a: "Do not treat a case involving one Pearl entity and agreement as a ruling on your contract. Classification and any available defense require review of the actual facts, agreement, and applicable law.",
      },
      {
        q: "I have an old judgment from a Pearl entity via a Confession of Judgment. Options?",
        a: "Obtain the judgment, supporting affidavit, docket, and relevant notices. Counsel can assess the applicable law, any procedural issue, and deadlines. We have not established that your judgment can be vacated or a count of comparable successful challenges.",
      },
      {
        q: "Which Pearl entity do I actually owe?",
        a: "Check your agreement's counterparty and search your state's UCC records for all Pearl-named filings, positions were written and assigned across the entity family. Any settlement must name and bind the entity holding your position and terminate each entity's filings.",
      },
    ],
    sources: [
      { label: "New York Courts: Champion Auto Sales v. Pearl Beta Funding (2018), checked September 18, 2026", url: "https://www.nycourts.gov/Reporter/3dseries/2018/2018_01645.htm" },
      { label: "vLex, Pearl Capital v. Berkovitch (1st Dept 2022)", url: "https://case-law.vlex.com/vid/pearl-capital-bus-funding-929077955" },
      { label: "FindLaw, In re Pearl Capital Business Funding (2022)", url: "https://caselaw.findlaw.com/court/ny-supreme-court-appellate-division/2083115.html" },
    ],
  },
];

export function getFunderBySlug(slug: string) {
  return FUNDERS.find((f) => f.slug === slug);
}
