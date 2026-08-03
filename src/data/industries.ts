import { COASTAL, COMPETITORS, REVIEWS, type Review } from "./reviews";

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
    slug: "mca-debt-relief-for-retail",
    name: "Retail",
    pluralName: "retail businesses",
    metaTitle: "MCA Debt Relief for Retail Businesses (2026): Top Firms Ranked",
    metaDescription:
      "Best MCA debt relief and settlement firms for retail stores. Independent ranking based on transparency, results, communication, cost, and litigation defense.",
    h1: "Best MCA debt relief firms for retail businesses",
    intro:
      "Retail operators took on MCAs to bridge inventory cycles and seasonal volume gaps. With foot traffic still uneven and credit card processing fees rising, those daily pulls are choking margin. Here are the firms best equipped to settle MCA debt for retail.",
    whyDifferent:
      "Retail businesses live on inventory turnover and processor relationships. MCA daily ACH pulls can starve the inventory account at exactly the moment a reorder is due, which kills next month&rsquo;s revenue and accelerates the spiral. The right settlement firm understands inventory financing, processor freezes, and seasonal cash flow.",
    whyDifferentSecond:
      "Funders that pull aggressive UCC action against retail operators can also disrupt supplier relationships, which is why litigation defense matters as much as settlement negotiation in this category.",
    picks: pickByName(["Coastal", "Second Wind", "Corporate Rescue Advisors"]),
    sections: [
      {
        title: "How MCA debt typically spirals in retail",
        body: [
          "The pattern we see most often starts with one advance taken before a peak season to load up on inventory. The season underperforms or a supplier raises prices, the daily pull starts eating the reorder budget, and the owner takes a second advance to cover the first. By the third advance the store is paying out 15 to 30 percent of daily card volume across stacked positions, and the inventory account, the thing that generates next month's revenue, is the first casualty.",
          "Retail has a second trigger most industries do not: the processor. Because MCA remittance is often tied to card settlement, a funder dispute can freeze a merchant account outright. For a store doing most of its volume on cards, a frozen processor is not a cash flow problem, it is a closed business. That is why speed matters more in retail settlements than almost anywhere else.",
        ],
      },
      {
        title: "What a realistic retail settlement looks like",
        body: [
          "Settled retail cases usually land in one of two shapes: a lump-sum settlement at a meaningful discount when the owner can raise outside cash (family, equipment sale, sublease), or a restructured payment plan that converts daily pulls into a weekly or monthly amount sized to actual card volume, not the volume the funder projected at origination.",
          "Two things to insist on in any retail engagement: written confirmation that the funder will not contact your processor while negotiation is active, and a UCC release plan for each position, because open UCC filings will block the inventory financing you need to recover. A firm that cannot explain its UCC release process on the first call is not equipped for retail work.",
        ],
      },
    ],
    faq: [
      {
        q: "Can a retail store settle MCA debt and keep operating?",
        a: "Yes, and staying open is usually the goal of a settlement rather than an obstacle to it. Funders generally recover more from an operating store than a closed one, which is negotiating leverage. The key is engaging before the funder freezes your merchant processor or files suit, while you still have revenue to structure a deal around.",
      },
      {
        q: "What happens if an MCA funder freezes my merchant account?",
        a: "A processor freeze cuts off card revenue immediately, which for most retail stores means the business stops. It is usually triggered by missed remittances or a default notice. If it happens, you need a firm with attorneys who can negotiate the release quickly. If it has not happened yet, that risk is a reason to engage early rather than after default.",
      },
      {
        q: "How much can retail businesses typically save in an MCA settlement?",
        a: "Public outcomes across the industry generally range from 30 to 60 percent reductions on the outstanding balance, depending on how many positions are stacked, whether litigation has started, and whether you can fund a lump-sum settlement. Any firm guaranteeing a specific percentage before reviewing your contracts is a red flag.",
      },
      {
        q: "Should I stop paying my MCA to force a settlement?",
        a: "Not without a written strategy from whoever is representing you. Stopping payments triggers default clauses, can freeze your processor, and in contracts with a Confession of Judgment can produce a judgment against you almost immediately. Some strategies do involve stopping payment, but only with legal defense prepared in advance.",
      },
    ],
  },
  {
    slug: "mca-debt-relief-for-salons",
    name: "Salons and Beauty",
    pluralName: "salons and beauty businesses",
    metaTitle: "MCA Debt Relief for Salons and Beauty Businesses (2026)",
    metaDescription:
      "Best MCA debt relief firms for salons, spas, and beauty businesses. Real reviews of the top settlement and restructuring firms in 2026.",
    h1: "Best MCA debt relief firms for salons and beauty businesses",
    intro:
      "Salon owners face thin margins, booth-rental cash flow swings, and credit card processor exposure. MCAs marketed as quick capital often turn into daily ACH pressure that the business cannot absorb. Here is who we recommend for relief.",
    whyDifferent:
      "Salon and beauty businesses run on appointment-based cash flow with material weekly variance. A daily MCA pull that is sized off a peak week becomes catastrophic on a slow one. The right firm understands the appointment cycle and negotiates payment structures aligned to actual revenue patterns.",
    whyDifferentSecond:
      "Many salon owners hold personal guarantees on their MCAs, which means a default can put personal credit and household assets at risk. A firm with attorneys on staff matters more here than in industries with cleaner business-personal separation.",
    picks: pickByName(["Coastal", "Eastern Financial", "Regroup"]),
    sections: [
      {
        title: "How MCA debt typically spirals for salons",
        body: [
          "Salon advances are usually sized off a strong quarter: holiday season, prom and wedding months, a stylist roster at full capacity. The daily pull that felt survivable at peak becomes brutal in the slow weeks of January and late summer, when appointment volume drops 20 to 40 percent but the ACH does not. Add one stylist departure taking their book of business, and the math breaks.",
          "Because most salons run on a single operating account, a stacked second or third advance does not just squeeze profit, it competes directly with rent and product orders. We repeatedly see owners personally covering payroll from savings while the daily pulls continue, which is exactly backwards: the personal guarantee means protecting the business account should come first, through a restructure, not through the owner's savings.",
        ],
      },
      {
        title: "What a realistic salon settlement looks like",
        body: [
          "Salon settlements tend to be smaller-balance and faster than other industries: fewer positions, smaller advances, funders who would rather take a discounted payoff than chase a small business through litigation. A typical resolved case converts daily pulls into a single weekly payment sized to real appointment revenue, or closes the balance out at a negotiated discount funded over a few months.",
          "The personal guarantee is the thing to take seriously. Most salon MCAs are personally guaranteed, so a default can follow the owner home: personal credit, personal assets, and in Confession of Judgment states, a judgment entered without a trial. That is why we weight attorney access heavily in our picks for this category. Negotiation without legal defense behind it leaves the owner exposed if talks break down.",
        ],
      },
    ],
    faq: [
      {
        q: "Can a small salon settle an MCA, or is settlement only for big balances?",
        a: "Settlement works at salon-sized balances. Smaller advances often settle faster because funders prefer a quick discounted payoff over collection costs. What matters is engaging while the business is still operating and having someone who negotiates these contracts regularly, not the size of the debt.",
      },
      {
        q: "I personally guaranteed my salon's MCA. What does that mean if I default?",
        a: "It means the funder can pursue you personally, not just the business: personal credit damage, claims against personal assets, and in some states a Confession of Judgment that becomes an enforceable judgment almost immediately. A personal guarantee is the strongest reason to resolve the debt through negotiation rather than letting it default unmanaged.",
      },
      {
        q: "The daily pulls are sized off my busiest months. Can that be changed?",
        a: "Yes. Reconciliation clauses in many MCA contracts formally allow the pull to be adjusted to actual revenue, and most funders will negotiate payment restructures when the alternative is default. Converting a peak-sized daily pull into a revenue-aligned weekly payment is one of the most common outcomes in salon cases.",
      },
      {
        q: "Will settling my MCA hurt my ability to get financing later?",
        a: "A negotiated settlement is far better for your future financing than a default, a judgment, or open UCC filings. Part of a complete settlement is getting UCC liens released and the account reported as resolved, which clears the path to conventional financing as the business recovers.",
      },
    ],
  },
  {
    slug: "mca-debt-relief-for-staffing-companies",
    name: "Staffing",
    pluralName: "staffing and recruiting firms",
    metaTitle:
      "MCA Debt Relief for Staffing Companies (2026): Top Firms Ranked",
    metaDescription:
      "Best MCA debt relief firms for staffing, recruiting, and PEO businesses. Reviews of the top settlement and restructuring firms.",
    h1: "Best MCA debt relief firms for staffing companies",
    intro:
      "Staffing firms borrow against accounts receivable in a category where clients regularly stretch payment to 60 or 90 days. When a client misses, MCAs do not. The result is staffing operators carrying multiple MCAs against AR that has not yet collected. Here is who handles this best.",
    whyDifferent:
      "Staffing operators have a unique exposure: they pay W-2 weekly but collect from clients monthly or longer. MCAs sized off gross billings rather than collections create a structural mismatch. The right firm models cash flow against actual collection cadence, not gross invoicing.",
    whyDifferentSecond:
      "Many staffing MCAs are stacked because the original advance was used to make payroll on a client invoice that arrived late. A firm that understands AR factoring and the difference between billings and collections is essential.",
    picks: pickByName(["Coastal", "Second Wind", "Regroup"]),
    sections: [
      {
        title: "How MCA debt typically spirals for staffing firms",
        body: [
          "Nearly every staffing MCA case starts the same way: a client invoice slipped from 30 days to 75, payroll could not wait, and an advance covered the gap. The structural problem is that the advance is repaid daily against gross billings while the firm collects monthly against net terms. One more late client, and a second advance covers payroll plus the first advance's pulls. Staffing operators reach three or four stacked positions faster than any other industry we track.",
          "The exposure is also bigger than it looks on paper. Staffing margins run 3 to 8 percent of billings, so an MCA remitting 10 percent of daily gross is not taking a share of profit, it is taking a multiple of it. The firm can be growing revenue and adding placements while going insolvent underneath, which is why staffing owners are often blindsided by how fast the position deteriorates.",
        ],
      },
      {
        title: "What a realistic staffing settlement looks like",
        body: [
          "The core of a staffing restructure is resequencing payments to collections rather than billings: weekly or biweekly payments timed to when client remittances actually land. Funders will negotiate this because a staffing firm's receivables are genuinely collectible, the money exists, it is just 60 days away. A firm that can present an AR aging schedule credibly gets materially better terms.",
          "Watch the factoring interaction. Many staffing firms also factor receivables, and MCA UCC filings usually conflict with the factor's senior position. A default that spooks the factor can cut off the firm's real working capital overnight, which is far more dangerous than the MCA itself. Any settlement plan must sequence UCC releases so the factoring line stays intact throughout.",
        ],
      },
    ],
    faq: [
      {
        q: "My staffing firm factors receivables and has MCAs. Which gets paid first?",
        a: "Your factor almost always holds the senior UCC position on receivables, and keeping that line alive is usually more important than any single MCA, because factoring is what funds payroll. A competent settlement plan protects the factoring relationship first and sequences MCA negotiations and UCC releases around it.",
      },
      {
        q: "Can I settle MCA debt while clients still owe me money?",
        a: "Yes, and outstanding receivables actually help. Collectible AR shows the funder there is real money coming, which supports a restructure timed to collections instead of default. Firms that model your collection cadence and present it to funders get better outcomes than those that just argue hardship.",
      },
      {
        q: "What happens to my client contracts if an MCA funder sues my staffing firm?",
        a: "A lawsuit or judgment can reach the firm's bank accounts and receivables, and some funders send UCC notices directly to your clients instructing them to pay the funder instead of you. That is disruptive and embarrassing with exactly the clients you need. Engaging before litigation is how you keep the dispute invisible to your client base.",
      },
      {
        q: "How many stacked MCAs is too many to fix?",
        a: "There is no fixed cutoff. Three to five stacked positions is common in resolved staffing cases. What matters is total daily remittance as a share of collections and whether any funder has already moved toward default or litigation. More positions mainly means the negotiation needs to be coordinated across funders rather than one-off.",
      },
    ],
  },
  {
    slug: "mca-debt-relief-for-security-firms",
    name: "Security",
    pluralName: "security firms and contract security businesses",
    metaTitle: "MCA Debt Relief for Security Firms (2026): Top Companies",
    metaDescription:
      "Best MCA debt relief and settlement firms for security companies. Reviews of the top firms for guard services, alarm monitoring, and security contractors.",
    h1: "Best MCA debt relief firms for security companies",
    intro:
      "Contract security operators carry significant payroll exposure with thin per-billable-hour margins. MCAs that look manageable in a strong contract month become destructive when a contract ends or a client delays payment. Here is who handles MCA relief for security firms.",
    whyDifferent:
      "Security companies run on a fixed-cost model: guards, vehicles, monitoring infrastructure. MCAs that pull daily ACH against a margin of pennies-per-billable-hour can wipe out a month of profit in one slow week. The right settlement firm restructures to weekly or monthly cadence aligned to actual contract revenue.",
    whyDifferentSecond:
      "License and bonding requirements in security mean a default that triggers state action can take the entire business offline. Litigation defense is essential when a funder threatens regulatory complaint as a negotiation tactic.",
    picks: pickByName(["Coastal", "Eastern Financial", "Second Wind"]),
    sections: [
      {
        title: "How MCA debt typically spirals for security companies",
        body: [
          "Security firms take advances to bridge two events: winning a new contract that requires guards, uniforms, and vehicles before the first invoice pays, or losing a contract that was covering fixed costs. Both are lumpy, contract-driven events, but the MCA pull is daily and constant. When a major contract ends or a municipal client pays in 90 days, the fixed cost base keeps burning and the daily ACH keeps pulling, and a second advance becomes the only way to make Friday payroll.",
          "The margin math is unforgiving. Contract security typically nets single-digit margins per billable hour. A daily remittance sized at even 8 to 10 percent of revenue exceeds the entire profit margin, meaning every day the advance is being repaid out of working capital, not earnings. That is survivable for weeks, not quarters.",
        ],
      },
      {
        title: "What a realistic security-firm settlement looks like",
        body: [
          "The strongest asset a security firm brings to negotiation is its contract book: predictable, documented monthly revenue that a funder can see. Resolved cases typically convert daily pulls into monthly payments mapped to contract receipts, or settle balances at a discount when the firm can fund a payoff, sometimes from mobilization payments on a newly won contract.",
          "The regulatory angle needs handling with care. Guard licenses and bonding sit with state regulators, and an aggressive funder threatening complaints or interfering with a bond can jeopardize the license the whole business runs on. This is why attorney-backed representation matters in this category: regulatory pressure tactics tend to stop when there is counsel on the other side, and continue when there is not.",
        ],
      },
    ],
    faq: [
      {
        q: "Can an MCA default cost my security company its license or bond?",
        a: "The default itself does not revoke a license, but the fallout can reach it: judgments can affect bonding, and some funders use the threat of regulatory complaints as negotiation pressure. If your funder has referenced your license or bond in collection conversations, treat that as the signal to get attorney-backed representation involved.",
      },
      {
        q: "We just lost our biggest contract and cannot cover the daily pulls. What now?",
        a: "A contract loss is a documentable revenue event, which is exactly what reconciliation and restructuring conversations are built for. The wrong move is silently missing remittances and triggering default. The right move is presenting the revenue change to funders, through representation, and restructuring the payment to the revenue that remains.",
      },
      {
        q: "Municipal clients pay us in 60 to 90 days. Can payments be aligned to that?",
        a: "Yes. Government and institutional receivables are slow but nearly certain, which makes them good collateral for a restructured schedule. Funders will generally accept monthly payments timed to municipal remittance cycles over forcing a default on revenue that is clearly coming.",
      },
      {
        q: "Do security firms actually settle MCA balances at a discount?",
        a: "Yes, particularly when the firm can fund a lump-sum payoff or the funder's alternative is chasing a thin-margin business through litigation. Industry-wide outcomes commonly fall in the 30 to 60 percent reduction range depending on position count and litigation status. Be skeptical of anyone quoting your number before reading your contracts.",
      },
    ],
  },
  {
    slug: "mca-debt-relief-for-professional-services",
    name: "Professional Services",
    pluralName: "professional services firms",
    metaTitle:
      "MCA Debt Relief for Professional Services Firms (2026)",
    metaDescription:
      "Best MCA debt relief firms for accounting, legal, consulting, and other professional services businesses. Top settlement firms ranked.",
    h1: "Best MCA debt relief firms for professional services",
    intro:
      "Professional services firms (accounting, legal, consulting, agency) often took MCAs to bridge slow client payments or fund growth. The fixed-cost overhead of partner draws and salaries makes daily ACH pulls especially painful when revenue dips.",
    whyDifferent:
      "Professional services firms have reputational exposure that retail and trucking do not. A funder filing a public lawsuit can damage client relationships and partner-level credit. Settlement that resolves quickly and quietly matters more than in other categories.",
    whyDifferentSecond:
      "Many professional services firms are partnerships or PCs, which means default exposure is shared and personal. The right firm understands partnership liability and negotiates accordingly.",
    picks: pickByName(["Coastal", "Second Wind", "Corporate Turnaround"]),
    sections: [
      {
        title: "How MCA debt typically spirals in professional services",
        body: [
          "Agencies, accounting firms, consultancies, and small law practices usually reach for an MCA at one of two moments: a major client pushes payment past 60 days while salaries and partner draws continue, or the firm invests ahead of growth, new hires, new office, and the revenue arrives slower than planned. Because these firms bill high and collect slow, an advance sized off billings feels affordable right up until two clients pay late in the same month.",
          "The distinctive risk here is reputational. A funder lawsuit is a public record that clients, referral partners, and opposing counsel can find. For a firm that sells trust and judgment, a public collection action does damage beyond the dollars, and sophisticated funders know it, which is why they move to litigation faster against professional firms than against retail or trucking. The window to settle quietly is real but shorter.",
        ],
      },
      {
        title: "What a realistic professional-services settlement looks like",
        body: [
          "These cases settle well when handled early. The firm's receivables are high quality, the principals are creditworthy, and funders would rather take a structured payoff than litigate against a business run by people who understand litigation. Typical outcomes are a discounted lump sum funded from collections or partner capital, or a short restructure timed to the firm's billing cycle, with confidentiality handled as part of the deal.",
          "Partnership structure is the complicating factor. In partnerships and PCs, a personal guarantee signed by one partner can create exposure the other partners never saw, and a default becomes an internal governance problem on top of a creditor problem. Getting all guarantors identified and represented consistently, before negotiation starts, prevents a funder from playing partners against each other.",
        ],
      },
    ],
    faq: [
      {
        q: "Will settling an MCA become public and visible to my clients?",
        a: "A negotiated settlement is a private contract, nothing about it is published. What becomes public is litigation: lawsuits, judgments, and UCC filings are searchable records. That asymmetry is the strongest argument for resolving MCA debt before a funder files, especially for firms whose clients run background checks on their vendors.",
      },
      {
        q: "One partner signed the MCA guarantee. Are the other partners liable?",
        a: "It depends on your entity type and what was signed. The signing partner's personal guarantee binds them personally, and the business entity is bound by the merchant agreement, which affects all partners economically. Sorting exactly who is exposed, before negotiating, is one of the first things competent representation does in a partnership case.",
      },
      {
        q: "Our revenue is fine, the problem is timing. Do we still need a settlement firm?",
        a: "If the business is fundamentally sound and the issue is collections timing, you may need a restructure rather than a discounted settlement: converting daily pulls into payments aligned to your billing cycle. That is a lighter engagement, and reputable firms will tell you so rather than selling you a full settlement program you do not need.",
      },
      {
        q: "Can a funder freeze our operating or trust accounts?",
        a: "Funders with a judgment, including one entered through a Confession of Judgment, can restrain bank accounts, and for law firms in particular a restrained trust account is a professional emergency. If your MCA contract contains a COJ, treat account exposure as the primary risk and get legal defense involved before any default occurs.",
      },
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
