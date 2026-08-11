import Link from "next/link";
import { FUNDERS } from "@/data/funders";

export const metadata = {
  title: "MCA Funder Files: Lawsuits and Collection Records by Funder (2026)",
  description:
    "Public-record profiles of the MCA funders merchants most often face: who sues, who settles, consent orders, COJ history, and the response playbook per funder.",
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
            Know your funder: lawsuits, collection patterns, and public records
          </h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            How an MCA dispute goes depends heavily on who is on the other
            side: some funders sue within weeks, some negotiate for months,
            some operate under regulatory consent orders. These profiles
            compile what the public record, court decisions, regulatory
            actions, and complaint records, shows about each funder, with a
            response playbook for merchants dealing with them.
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
