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
      "Everest files. Treat its default notices as a precursor to litigation, not letterhead theater, and use the window before filing, that is when discounts run deepest.",
      "Its complaints lean on diverted-receivables allegations: silently switching bank accounts is the exact conduct its lawyers plead. Any banking changes belong inside a represented strategy.",
      "Guarantors are named in its suits as a matter of course. If you personally guaranteed, your response plan is personal, not just corporate.",
      "Everest resolves. The volume of its filings is matched by a steady flow of negotiated resolutions; represented merchants with filed answers and documented finances settle these cases routinely.",
    ],
    faq: [
      {
        q: "Everest Business Funding is suing me. What do I do first?",
        a: "Calendar the answer deadline from the day you were served (typically 20 to 30 days) and get MCA-experienced counsel on the complaint the same week. Filing an answer on time preserves every settlement option; missing it converts the complaint into a default judgment for everything demanded.",
      },
      {
        q: "Will Everest settle instead of litigating?",
        a: "Court records show a steady pattern of resolved and discontinued cases alongside the filings. Funders that file at volume also settle at volume; a represented merchant with a filed answer and a documented financial picture is a settlement candidate, not just a defendant.",
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
      "Defense-side commentary describes the standard post-default sequence for its category: collections contact within hours of failed withdrawals, breach-of-contract claims as the lead theory, and personal guarantees enforced on default.",
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
        a: "Like every MCA funder, it holds contractual remedies and enforces them; its published litigation footprint is smaller than the industry's most aggressive filers, but default still triggers collections, guarantee exposure, and potential suit. Plan around the contract, not the docket count.",
      },
      {
        q: "Can I settle a Forward Financing balance?",
        a: "Revenue-based financing balances are negotiated and settled across this industry daily, and there is nothing structurally different here. Documented hardship plus a specific proposal, presented before escalation, is the standard path.",
      },
      {
        q: "My payments are unaffordable but I have not defaulted. What now?",
        a: "This is the strongest position you will ever negotiate from. Check your agreement for reconciliation language, document the revenue change, and propose the restructure before a missed remittance changes your file from cooperative to defaulted.",
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
      "Personal guarantees are enforced on default per the standard industry pattern, extending exposure to owners individually.",
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
        a: "No, it may be the beginning of your leverage. Send the request in writing with documentation and keep the refusal. A funder that will not honor its own reconciliation clause is exposing its contract's legal characterization, which is exactly the pressure point experienced negotiators and attorneys use.",
      },
      {
        q: "Does Fora Financial settle merchant balances?",
        a: "Its litigation volume implies resolution volume; funders that enforce actively also settle actively. Represented merchants with documented finances and, where applicable, preserved reconciliation paper trails negotiate these balances routinely.",
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
        a: "Funders claiming receivables ownership use UCC 9-406 notices to redirect customer payments, but harassment-style contact is a different matter, and BBB complaints against CFG allege exactly that. Document every contact and get representation involved; conduct-based leverage is real, especially under New York's newer statutes.",
      },
      {
        q: "I signed a settlement with CFG and fell behind on it. How bad is that?",
        a: "Bad but recoverable: CFG has pleaded breached settlements in court, so expect the next agreement to be harder-won. Come back with representation, a realistic number, and documentation of what changed; funders still prefer a performing deal to a judgment they must enforce.",
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
        a: "Not automatically, those matters concerned marketing and compliance, not your contract. But if your dispute involves representations made at signing, the documented history makes origination-conduct arguments more credible. Preserve your sales communications and raise it with counsel.",
      },
      {
        q: "Can I settle a Reliant Funding balance?",
        a: "Reliant balances are negotiated and settled through the standard process: documented hardship, a specific proposal, written terms with UCC terminations. Engaging before default beats engaging after, as with every funder.",
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
        a: "Verify first: which entity, and are they licensed to collect in your state? A BBB complaint against ECG documents exactly this issue with an allegedly unlicensed third-party collector. You are entitled to deal with the actual creditor, in writing, through representation.",
      },
      {
        q: "The UCC lien ECG filed shows more than I owe. What can I do?",
        a: "Demand an accounting in writing: advance amount, payments made, contractual fees. Liens with inflated or undisclosed-fee balances are contestable, and correcting the recorded amount matters because that filing is what other lenders see.",
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
        a: "Defense firms report it among the fastest filers in the industry, sometimes within weeks of default. Treat any default notice from Kalamata as a litigation countdown and engage counsel immediately rather than negotiating solo on the phone.",
      },
      {
        q: "Kalamata got a default judgment against me. Is it over?",
        a: "No. Default judgments are vacated for service defects and other procedural grounds regularly, and even standing judgments get negotiated because enforcement costs the funder time and money. The sequence is vacatur review and settlement talks in parallel, started this week, not this quarter.",
      },
      {
        q: "Why do defense lawyers talk about this funder so much?",
        a: "Volume and speed. A funder that files quickly and wins by default frequently generates a lot of defense work, and a lot of commentary. The practical takeaway for merchants is simple: with Kalamata, deadlines are the whole game.",
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
      "Pearl Capital occupies a unique place in MCA history: its cases helped define the legal ground every funder now stands on, including the landmark appellate ruling that MCA agreements structured as receivables purchases are not usurious loans. Dealing with Pearl means dealing with a funder that litigates, and wins on paper it drafted carefully.",
    record: [
      "In Champion Auto Sales v. Pearl Beta Funding (First Department, 2018), merchants sought to vacate a Confession of Judgment arguing the underlying agreement was criminally usurious; the appellate court unanimously held the agreement was not usurious, a foundational precedent the entire industry cites.",
      "Pearl operates through a family of entities, Pearl Capital Business Funding, Pearl Alpha, Pearl Beta, Pearl Gamma, Pearl Delta, which appear together in litigation, including a judgment affirmed on appeal in 2022 arising from a servicing dispute.",
      "Pearl's historic collection model relied heavily on Confessions of Judgment in the pre-2019 New York era; the state's reforms ended COJ entry against out-of-state merchants and pushed funders, including Pearl-era portfolios, into ordinary litigation.",
    ],
    playbook: [
      "Know which Pearl entity holds your position: agreements and UCC filings may name any of the Alpha/Beta/Gamma/Delta entities, and complete resolutions must cover the right ones.",
      "Do not build a strategy on the usury argument alone; Champion Auto is the case that closed that door for well-drafted agreements. Modern defenses run through reconciliation practice, characterization facts, conduct, and procedure, not the headline usury claim.",
      "Older Pearl positions may carry pre-reform COJ paper; if a historic judgment exists against you, vacatur review under the newer case law is worth a fresh look, thousands of COJ judgments have been undone on procedural grounds.",
    ],
    faq: [
      {
        q: "Can I argue my Pearl Capital agreement is an illegal usurious loan?",
        a: "That exact argument, against this exact funder, produced the 2018 appellate ruling holding a well-drafted receivables purchase is not usurious. Recharacterization arguments still exist, but they turn on how the agreement operated in practice (reconciliation, contingency of repayment), not on the factor rate alone. Get a professional read on your specific facts.",
      },
      {
        q: "I have an old judgment from a Pearl entity via a Confession of Judgment. Options?",
        a: "Pre-2019 COJ judgments are exactly the category New York's reforms and subsequent case law have disturbed: procedural-defect vacatur has undone thousands. A review of how your judgment was entered, venue, affidavit, service, is worth doing even years later, alongside negotiation on the balance.",
      },
      {
        q: "Which Pearl entity do I actually owe?",
        a: "Check your agreement's counterparty and search your state's UCC records for all Pearl-named filings, positions were written and assigned across the entity family. Any settlement must name and bind the entity holding your position and terminate each entity's filings.",
      },
    ],
    sources: [
      { label: "deBanked, Champion Auto v. Pearl Beta ruling coverage", url: "https://debanked.com/2018/03/its-settled-merchant-cash-advance-not-usurious/" },
      { label: "vLex, Pearl Capital v. Berkovitch (1st Dept 2022)", url: "https://case-law.vlex.com/vid/pearl-capital-bus-funding-929077955" },
      { label: "FindLaw, In re Pearl Capital Business Funding (2022)", url: "https://caselaw.findlaw.com/court/ny-supreme-court-appellate-division/2083115.html" },
    ],
  },
];

export function getFunderBySlug(slug: string) {
  return FUNDERS.find((f) => f.slug === slug);
}
