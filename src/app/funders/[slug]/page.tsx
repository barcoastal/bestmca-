import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FUNDERS, getFunderBySlug } from "@/data/funders";
import { CTABanner } from "@/components/review/CTABanner";
import { faqSchema, jsonLd } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return FUNDERS.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const f = getFunderBySlug(slug);
  if (!f) return {};
  return {
    title: f.metaTitle,
    description: f.metaDescription,
    alternates: { canonical: `/funders/${f.slug}` },
  };
}

export default async function FunderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const f = getFunderBySlug(slug);
  if (!f) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: f.metaTitle,
    description: f.metaDescription,
    author: {
      "@type": "Organization",
      name: "MCA Settlement Reviews Editorial Team",
      url: "https://www.mcasettlementreviews.com/about",
    },
    publisher: { "@id": "https://www.mcasettlementreviews.com/#organization" },
    mainEntityOfPage: `https://www.mcasettlementreviews.com/funders/${f.slug}`,
  };

  const others = FUNDERS.filter((x) => x.slug !== f.slug).slice(0, 4);

  return (
    <article className="bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articleSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(f.faq))} />

      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            <Link href="/funders" className="hover:text-navy">
              Funder Files
            </Link>{" "}
            · Public Record
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            Dealing with {f.name}: lawsuits, collections, and resolution
          </h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">{f.intro}</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-xs text-ink-subtle">
            {f.aka && (
              <span>
                <span className="font-semibold">Entities:</span> {f.aka}
              </span>
            )}
            <span>
              <span className="font-semibold">Base:</span> {f.hq}
            </span>
          </div>
          <p className="mt-4 text-xs text-ink-subtle max-w-2xl">
            MCA Settlement Reviews is not affiliated with {f.name}. This page
            summarizes public records and attributed reporting for business
            owners managing {f.name} obligations; it is information, not legal
            advice.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-display text-2xl font-semibold text-navy">
          What the public record shows
        </h2>
        <ul className="mt-5 space-y-4">
          {f.record.map((r, i) => (
            <li key={i} className="grid grid-cols-[auto_1fr] gap-4 text-ink-soft leading-relaxed">
              <span className="font-mono text-[11px] font-semibold text-warn pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-6">
        <h2 className="font-display text-2xl font-semibold text-navy">
          The merchant playbook
        </h2>
        <ul className="mt-5 space-y-3">
          {f.playbook.map((p, i) => (
            <li key={i} className="flex gap-3 text-ink-soft leading-relaxed">
              <span className="text-win font-semibold shrink-0">✓</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-muted">
          The general playbooks apply here too:{" "}
          <Link href="/guides/mca-lawsuit-first-30-days" className="text-navy underline">
            served with a lawsuit
          </Link>
          ,{" "}
          <Link href="/guides/mca-confession-of-judgment" className="text-navy underline">
            Confessions of Judgment
          </Link>
          ,{" "}
          <Link href="/guides/frozen-account-mca-funder" className="text-navy underline">
            frozen accounts
          </Link>
          , and{" "}
          <Link href="/guides/what-is-mca-settlement" className="text-navy underline">
            how settlement works
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-8">
        <h2 className="font-display text-2xl font-semibold text-navy mb-5">
          {f.name}: common questions
        </h2>
        <div className="space-y-3">
          {f.faq.map((item, i) => (
            <details key={i} className="group rounded-2xl border border-line bg-white p-5 open:bg-paper-soft">
              <summary className="cursor-pointer flex items-start justify-between gap-4 list-none">
                <h3 className="font-display text-base font-semibold text-navy">{item.q}</h3>
                <span className="text-navy text-xl leading-none shrink-0 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-4">
        <div className="rounded-2xl border border-line bg-white p-5">
          <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-ink-subtle">
            Sources
          </div>
          <ul className="mt-2 space-y-1.5 text-xs text-ink-muted">
            {f.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener nofollow" className="hover:text-navy underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-10">
        <h2 className="font-display text-lg font-semibold text-navy mb-3">
          Other funder files
        </h2>
        <div className="flex flex-wrap gap-2">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/funders/${o.slug}`}
              className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-navy hover:bg-paper-soft transition-colors"
            >
              {o.name}
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 pb-16">
        <CTABanner
          campaign={`funder-${f.slug}`}
          heading={`Dealing with ${f.name} right now?`}
          body="Our #1 rated firm reviews your position free, with attorneys in-house for the files that turn legal, and a written strategy before any contract."
          buttonLabel="Get a free review"
        />
      </div>
    </article>
  );
}
