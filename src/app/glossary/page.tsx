import Link from "next/link";
import { GLOSSARY } from "@/data/glossary";
import { jsonLd } from "@/lib/schema";

export const metadata = {
  title: "MCA Glossary: Merchant Cash Advance Terms in Plain English",
  description:
    "Every term business owners meet in MCA agreements and disputes, factor rates, holdbacks, Confessions of Judgment, UCC 9-406 notices, reconciliation, defined in plain English.",
  alternates: { canonical: "/glossary" },
  robots: { index: false, follow: true },
};

export default function GlossaryPage() {
  const setSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": "https://www.mcasettlementreviews.com/glossary",
    name: "MCA and Merchant Cash Advance Glossary",
    hasDefinedTerm: GLOSSARY.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      url: `https://www.mcasettlementreviews.com/glossary/${t.slug}`,
    })),
  };

  return (
    <article className="bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(setSchema)} />
      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            Reference
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            The MCA glossary: every term, in plain English
          </h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            MCA agreements are written to be signed fast and understood late.
            These are the {GLOSSARY.length} terms that decide what you owe,
            what the funder can do, and what your options are, defined the
            way a business owner actually needs them.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          {GLOSSARY.map((t) => (
            <Link
              key={t.slug}
              href={`/glossary/${t.slug}`}
              className="group rounded-2xl border border-line bg-white p-5 hover:shadow-md transition-shadow"
            >
              <h2 className="font-display text-lg font-semibold text-navy group-hover:underline">
                {t.term}
              </h2>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed line-clamp-3">
                {t.definition}
              </p>
              <span className="mt-3 inline-block text-xs font-semibold text-navy">
                Full definition →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
