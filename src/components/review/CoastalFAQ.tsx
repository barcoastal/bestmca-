import { jsonLd } from "@/lib/schema";

const FAQ = [
  {
    "q": "What does Coastal Debt Resolve offer?",
    "a": "Coastal advertises MCA settlement and payment restructuring. Its public materials describe an attorney network. Confirm which company and professionals will perform each service."
  },
  {
    "q": "What is Coastal’s BBB standing?",
    "a": "The September 12, 2026 check showed an A+ rating and accreditation. The linked BBB complaint record should also be reviewed; accreditation does not guarantee outcomes."
  },
  {
    "q": "Are there complaints about Coastal?",
    "a": "Yes. Read the dated BBB complaint summary and business responses in the source notes above. Some records are marked Answered and others Resolved; those labels do not mean the same thing."
  },
  {
    "q": "How much does Coastal cost?",
    "a": "A free consultation is advertised, but a complete fee schedule was not verified. Ask for program, legal, administration and cancellation charges in writing. The BBB profile lists a no-refund policy."
  },
  {
    "q": "Does Coastal provide in-house lawsuit defense?",
    "a": "We could not substantiate that all litigation is handled in-house under one fee. Its public materials describe an attorney network. Confirm the named attorney, scope of representation and any separate engagement."
  },
  {
    "q": "What is Coastal’s Trustpilot rating?",
    "a": "The September 12, 2026 check showed 4.6 from 429 reviews. Individual labels and scores can change; use the linked platform profile for current information."
  },
  {
    "q": "Have you verified Coastal’s outcomes and editorial score?",
    "a": "No independent audit of client outcomes or complete litigation search was performed. The existing editorial score is under evidence review. It should not be treated as a measured success rate."
  },
  {
    "q": "How long does the program take?",
    "a": "No standard completion or attorney-response time was independently verified. Request a case-specific schedule and explanation of how creditor decisions may affect it."
  }
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
