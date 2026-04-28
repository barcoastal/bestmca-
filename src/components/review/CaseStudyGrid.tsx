import { CASE_STUDIES } from "@/data/testimonials";

export function CaseStudyGrid() {
  return (
    <section className="my-14">
      <header className="mb-6">
        <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-subtle">
          Documented Outcomes
        </div>
        <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
          Real businesses Coastal helped resolve their MCA debt
        </h3>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CASE_STUDIES.map((c, i) => (
          <article
            key={i}
            className="rounded-2xl bg-paper-soft border border-line p-6"
          >
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-warn">
              {c.industry}
            </div>
            <p className="mt-3 font-display text-base text-ink leading-relaxed">
              &ldquo;{c.quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm font-medium text-ink-muted">
              {c.name}
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
