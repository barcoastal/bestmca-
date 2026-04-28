import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INDUSTRIES, getIndustryBySlug } from "@/data/industries";
import { ScoreBadge } from "@/components/review/ScoreBadge";
import { BrandLogo } from "@/components/review/BrandLogo";
import { CTABanner } from "@/components/review/CTABanner";

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry } = await params;
  const i = getIndustryBySlug(industry);
  if (!i) return {};
  return {
    title: i.metaTitle,
    description: i.metaDescription,
    alternates: { canonical: `/${i.slug}` },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const i = getIndustryBySlug(industry);
  if (!i) notFound();

  return (
    <article className="bg-paper">
      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            Industry Spotlight · {i.name}
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            {i.h1}
          </h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">{i.intro}</p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-12 space-y-6">
        <h2 className="font-display text-2xl font-semibold text-navy">
          Why {i.pluralName} are a different MCA situation
        </h2>
        <p
          className="text-ink-soft leading-relaxed"
          dangerouslySetInnerHTML={{ __html: i.whyDifferent }}
        />
        <p className="text-ink-soft leading-relaxed">{i.whyDifferentSecond}</p>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-display text-3xl font-semibold text-navy mb-8">
          Our top three picks for {i.pluralName}
        </h2>
        <div className="space-y-5">
          {i.picks.map((r, idx) => (
            <Link
              key={r.slug}
              href={`/reviews/${r.slug}`}
              className={`block rounded-2xl border p-6 transition-shadow hover:shadow-md ${
                r.isCoastal
                  ? "border-gold bg-gold-soft/30"
                  : "border-line bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-ink-subtle">
                    Pick #{idx + 1}
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <BrandLogo review={r} size={40} />
                    <h3 className="font-display text-2xl font-semibold text-navy">
                      {r.name}
                      {r.isCoastal && (
                        <span className="ml-3 rounded-full bg-gold text-navy-deep text-[10px] font-semibold uppercase tracking-[0.14em] px-2 py-0.5 align-middle">
                          Top pick
                        </span>
                      )}
                    </h3>
                  </div>
                  <p className="mt-3 text-ink-soft leading-relaxed max-w-2xl">
                    {r.oneLineVerdict}
                  </p>
                </div>
                <ScoreBadge score={r.score} variant="compact" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 pb-16">
        <CTABanner
          campaign={`industry-${i.slug}`}
          heading={`Coastal Debt Resolve has handled MCA settlements for ${i.pluralName} across the country`}
        />
      </div>
    </article>
  );
}
