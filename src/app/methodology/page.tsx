import Link from "next/link";

export const metadata = {
  title: "Our Methodology: How We Rate MCA Settlement Companies",
  description:
    "How MCA Settlement Reviews evaluates merchant cash advance settlement and restructuring firms. Our five-category scoring system, sources, and editorial standards.",
  alternates: { canonical: "/methodology" },
};

const CRITERIA = [
  {
    title: "Transparency and disclosures",
    weight: "20%",
    description:
      "Are fees disclosed in writing before any contract is signed? Is the firm clear about what it will and will not do? Are total cost-of-resolution numbers provided, or just headline percentages?",
    redFlags: [
      "No fee schedule provided pre-contract",
      "Marketing claims about percentages not tied to written guarantees",
      "Refusal to explain what happens if settlement fails",
    ],
  },
  {
    title: "Settlement results",
    weight: "25%",
    description:
      "What are the actual outcomes across the firm's client base? We look at independent third-party reviews, verifiable case studies, and where possible, signed agreements clients have shared.",
    redFlags: [
      "No verifiable third-party reviews despite years of operation",
      "Case studies that cannot be cross-referenced",
      "Claims of high success rates with no methodology",
    ],
  },
  {
    title: "Client communication",
    weight: "20%",
    description:
      "Is a named case manager assigned at intake? What is the typical response cadence? Do clients report consistent communication post-signature, or does the experience drop off?",
    redFlags: [
      "Recurring complaints about post-sale responsiveness",
      "Rotating contact with no single point of accountability",
      "Sales team handoff to a separate, unnamed operations team",
    ],
  },
  {
    title: "Cost and fee structure",
    weight: "15%",
    description:
      "Total cost of resolution, including any per-funder fees, attorney fees, success fees, and milestone payments. We compare against the savings the firm actually delivers.",
    redFlags: [
      "Hourly billing with no cap for what should be a fixed-fee case",
      "Hidden milestone fees revealed only mid-engagement",
      "Fees billed even on funders the firm did not negotiate with",
    ],
  },
  {
    title: "Litigation defense",
    weight: "20%",
    description:
      "Does the firm have in-house attorneys? Can it defend against a Confession of Judgment, UCC freeze, or active lawsuit without referring out? Litigation capability under the same fee is a meaningful differentiator.",
    redFlags: [
      "No in-house legal team for what is fundamentally a legal product",
      "Litigation requires separate retainer with referred counsel",
      "Firm cannot defend against COJ or UCC actions",
    ],
  },
];

export default function MethodologyPage() {
  return (
    <article className="bg-paper">
      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            Editorial Standards
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            How we rate MCA settlement companies
          </h1>
          <p className="mt-4 text-lg text-ink-soft leading-relaxed">
            Our ratings are built on a five-category scoring system. We do not
            weigh marketing budgets, brand recognition, or paid placements.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-5 py-12">
        <p className="text-base text-ink-soft leading-relaxed">
          Every firm reviewed on this site is scored on the same five
          categories. Each category is described below, along with the kinds of
          patterns that move a firm up or down the rating. A firm&rsquo;s
          composite score is a weighted average of the five category scores.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-12 space-y-10">
        {CRITERIA.map((c, i) => (
          <section key={i} className="border-t border-line pt-10">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-semibold text-navy">
                {i + 1}. {c.title}
              </h2>
              <span className="text-xs uppercase tracking-[0.18em] font-semibold text-warn">
                Weight {c.weight}
              </span>
            </div>
            <p className="mt-3 text-ink-soft leading-relaxed">{c.description}</p>
            <h3 className="mt-5 text-xs uppercase tracking-[0.18em] font-semibold text-bad">
              What lowers the score
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-ink-soft">
              {c.redFlags.map((f, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-bad mt-0.5">×</span>
                  {f}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16">
        <div className="rounded-2xl border border-line bg-white p-8">
          <h2 className="font-display text-2xl font-semibold text-navy">
            Sources
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>BBB business profiles, ratings, and complaint records</li>
            <li>Trustpilot review aggregates and individual reviews</li>
            <li>Reddit and small business forum commentary</li>
            <li>Court records for active and resolved litigation</li>
            <li>Firm-published materials, including signed-contract templates</li>
            <li>State Attorney General consumer protection records</li>
            <li>Direct intake calls placed by our editorial team</li>
          </ul>
        </div>
        <div className="mt-6 text-sm text-ink-muted leading-relaxed">
          <span className="font-semibold text-ink">Disclosure:</span> We do not
          accept compensation, referral fees, affiliate payments, or
          sponsorships from any company featured on this site. This site
          exists solely to publish real, sourced reviews of MCA settlement
          firms. Ratings are determined entirely by the criteria above. Read
          more on our{" "}
          <Link href="/about" className="text-navy underline">
            about page
          </Link>
          .
        </div>
      </section>
    </article>
  );
}
