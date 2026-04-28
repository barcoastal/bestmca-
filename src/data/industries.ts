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
    picks: pickByName(["Coastal", "Second Wind", "Corporate Rescue"]),
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
  },
];

export function getIndustryBySlug(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
