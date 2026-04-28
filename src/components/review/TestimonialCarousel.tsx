import { TESTIMONIALS } from "@/data/testimonials";
import { Stars } from "./Stars";

export function TestimonialCarousel() {
  return (
    <section className="my-14">
      <header className="flex items-end justify-between gap-4 mb-6">
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-ink-subtle">
            Verified Client Reviews
          </div>
          <h3 className="mt-2 font-display text-2xl font-semibold text-navy">
            What Coastal Debt Resolve clients actually say
          </h3>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm text-ink-muted">
          <Stars value={4.9} size="sm" /> 4.9 across 800+ reviews
        </div>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {TESTIMONIALS.slice(0, 9).map((t, i) => (
          <article
            key={i}
            className="rounded-2xl border border-line bg-white p-5 shadow-sm flex flex-col"
          >
            <Stars value={t.rating} size="sm" />
            <p className="mt-3 text-sm text-ink-soft leading-relaxed flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-4 flex items-center justify-between text-xs">
              <span className="font-medium text-ink">{t.name}</span>
              <span className="text-ink-subtle">
                {t.source === "Trustpilot" ? "Trustpilot" : "Verified client"}
              </span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
