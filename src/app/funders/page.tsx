import Link from "next/link";
import { FUNDERS } from "@/data/funders";

export const metadata = {
  title: "MCA Funder Files: Lawsuits and Collection Records by Funder (2026)",
  description:
    "Read specific MCA funder court decisions, regulatory records, company statements, and their limitations. Prepare questions about your own agreement and notices.",
  alternates: { canonical: "/funders" },
};

export default function FundersPage() {
  return (
    <article className="bg-paper">
      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            The Funder Files
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            Know your funder: court decisions and public records
          </h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            These profiles identify specific court decisions, historical
            regulatory records, and company statements. Each explains what
            the source establishes, its limits, and which documents to review
            in your own matter. They do not establish typical discounts or
            collection timelines. Sources reviewed September 18, 2026.
          </p>
          <p className="mt-3 text-xs text-ink-subtle">
            We are not affiliated with any funder listed. Profiles summarize
            public records and attributed reporting; they are information, not
            legal advice.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className="grid gap-5 md:grid-cols-2">
          {FUNDERS.map((f) => (
            <Link
              key={f.slug}
              href={`/funders/${f.slug}`}
              className="group rounded-2xl border border-line bg-white p-6 hover:shadow-md transition-shadow"
            >
              <h2 className="font-display text-xl font-semibold text-navy group-hover:underline">
                {f.name}
              </h2>
              <div className="mt-1 text-xs text-ink-subtle">{f.hq}</div>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed line-clamp-3">
                {f.intro}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-navy">
                Read the file →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
