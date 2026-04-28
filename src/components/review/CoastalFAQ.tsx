import { jsonLd } from "@/lib/schema";

const FAQ = [
  {
    q: "Is Coastal Debt Resolve legit?",
    a: "Yes. Coastal Debt Resolve is a Florida-headquartered MCA settlement and litigation defense firm with an A rating and accreditation from the Better Business Bureau, 800+ verified five-star reviews on Trustpilot, and a public testimonials wall featuring named clients across multiple industries. The firm has in-house attorneys who handle both settlement and lawsuit defense.",
  },
  {
    q: "What do Coastal Debt Resolve reviews actually say?",
    a: "Across Trustpilot, BBB, and the firm's public testimonial page, the consistent themes in client commentary are: named representatives clients can identify (Marco, Carlos, Sarah, Simone, and others), responsive communication during a stressful situation, transparent fee disclosures pre-contract, and successful negotiated settlements. The firm holds a 4.9 average across 800+ reviews.",
  },
  {
    q: "Are there any Coastal Debt Resolve complaints?",
    a: "The firm's public review profile is overwhelmingly positive. Where we identified weaknesses in our review they are: a $25,000 minimum debt threshold that rules out very small balances, and high enough demand during peak weeks that the first attorney call can wait 24 to 48 hours. We did not identify pattern complaints around fee disclosure, post-sale communication, or undelivered settlement outcomes.",
  },
  {
    q: "How much does Coastal Debt Resolve cost?",
    a: "Coastal quotes either a flat fee or a performance-based fee tied to actual settlement savings, disclosed in writing before any contract is signed. There is no upfront retainer to begin a case review. The total cost of resolution is provided in writing along with payment milestones.",
  },
  {
    q: "Does Coastal Debt Resolve handle MCA lawsuits and Confessions of Judgment?",
    a: "Yes. Unlike most settlement-only firms, Coastal has in-house attorneys who handle Confession of Judgment defense, UCC release, frozen merchant account disputes, and active litigation under the same engagement. Owners do not pay a separate retainer if a funder escalates during the negotiation.",
  },
  {
    q: "Is Coastal Debt Resolve better than other MCA settlement companies?",
    a: "In our 2026 review across 10 firms, Coastal Debt Resolve scored 4.9 of 5 and ranked first. The differentiator is the integration of attorneys, settlement, and case management under one roof. Most competitors specialize in one of the three and refer the rest out, which creates handoff cost and risk when a case evolves.",
  },
  {
    q: "How long does the Coastal Debt Resolve process take?",
    a: "Most cases reach a stabilized payment posture within the first 30 days. The full settlement timeline depends on the number of MCA positions, the funder mix, and whether litigation is involved. Owners receive a written settlement strategy after the initial attorney consultation, which usually happens within 24 to 48 hours of intake.",
  },
];

export function CoastalFAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="my-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(schema)}
      />
      <header className="mb-6">
        <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-warn">
          Frequently Asked
        </div>
        <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
          Coastal Debt Resolve reviews, complaints, and common questions
        </h3>
      </header>
      <div className="space-y-3">
        {FAQ.map((f, i) => (
          <details
            key={i}
            className="group rounded-2xl border border-line bg-white p-5 open:bg-paper-soft"
          >
            <summary className="cursor-pointer flex items-start justify-between gap-4 list-none">
              <h4 className="font-display text-base font-semibold text-navy">
                {f.q}
              </h4>
              <span className="text-navy text-xl leading-none shrink-0 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
