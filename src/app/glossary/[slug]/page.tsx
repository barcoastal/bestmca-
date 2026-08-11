import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GLOSSARY, getGlossaryTerm } from "@/data/glossary";
import { CTABanner } from "@/components/review/CTABanner";
import { jsonLd } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return GLOSSARY.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = getGlossaryTerm(slug);
  if (!t) return {};
  return {
    title: `${t.term}: Definition and Why It Matters | MCA Glossary`,
    description: t.definition.slice(0, 158),
    alternates: { canonical: `/glossary/${t.slug}` },
  };
}

export default async function TermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = getGlossaryTerm(slug);
  if (!t) notFound();

  const termSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: t.term,
    description: t.definition,
    url: `https://www.mcasettlementreviews.com/glossary/${t.slug}`,
    inDefinedTermSet: "https://www.mcasettlementreviews.com/glossary",
  };

  const others = GLOSSARY.filter((x) => x.slug !== t.slug).slice(0, 6);

  return (
    <article className="bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(termSchema)} />
      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-3xl px-5 py-12">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            <Link href="/glossary" className="hover:text-navy">
              MCA Glossary
            </Link>
          </div>
          <h1 className="mt-3 font-display text-4xl font-semibold text-navy leading-tight">
            {t.term}
          </h1>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-5 py-10 space-y-6">
        <p className="text-lg text-ink leading-relaxed font-medium">
          {t.definition}
        </p>
        <div>
          <h2 className="font-display text-xl font-semibold text-navy">
            Why it matters
          </h2>
          <p className="mt-3 text-ink-soft leading-relaxed">{t.detail}</p>
        </div>
        {t.related.length > 0 && (
          <div className="rounded-2xl border border-line bg-white p-5">
            <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-ink-subtle">
              Go deeper
            </div>
            <ul className="mt-2 space-y-1.5">
              {t.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="text-sm font-semibold text-navy hover:underline">
                    {r.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-3xl px-5 py-8">
        <h2 className="font-display text-lg font-semibold text-navy mb-3">
          More terms
        </h2>
        <div className="flex flex-wrap gap-2">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/glossary/${o.slug}`}
              className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-navy hover:bg-paper-soft transition-colors"
            >
              {o.term}
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 pb-14">
        <CTABanner
          campaign={`glossary-${t.slug}`}
          variant="subtle"
          heading="Dealing with the real thing, not just the definition?"
          body="Our #1 rated firm gives free MCA reviews with a written strategy before any contract."
          buttonLabel="Get a free review"
        />
      </div>
    </article>
  );
}
