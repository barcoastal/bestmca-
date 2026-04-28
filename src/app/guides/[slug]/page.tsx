import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES, getGuideBySlug } from "@/data/guides";
import { CTABanner } from "@/components/review/CTABanner";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `/guides/${guide.slug}` },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <article className="bg-paper">
      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            <Link href="/" className="hover:text-navy">
              Home
            </Link>{" "}
            · MCA Guides
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-[1.1]">
            {guide.title}
          </h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            {guide.intro}
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-5 py-12 space-y-10">
        {guide.sections.map((s, i) => (
          <section key={i}>
            <h2 className="font-display text-2xl font-semibold text-navy">
              {s.heading}
            </h2>
            <div className="mt-4 space-y-4 text-base text-ink-soft leading-relaxed">
              {s.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
            {s.bullets && (
              <ul className="mt-4 space-y-2 text-base text-ink-soft">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-navy shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="rounded-2xl border-l-4 border-gold bg-gold-soft/30 p-6">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-warn">
            Takeaway
          </div>
          <p className="mt-2 text-base text-ink leading-relaxed">
            {guide.takeaway}
          </p>
        </section>
      </section>

      <div className="mx-auto max-w-3xl px-5 pb-16">
        <CTABanner
          campaign={`guide-${guide.slug}`}
          variant="subtle"
          heading="Talk to our #1 rated MCA settlement firm"
          body="Coastal Debt Resolve will give you a free MCA review and a written settlement strategy before any contract."
          buttonLabel="Get a free review"
        />
      </div>

      <section className="mx-auto max-w-3xl px-5 pb-16">
        <h3 className="font-display text-xl font-semibold text-navy mb-4">
          More guides
        </h3>
        <ul className="space-y-2">
          {GUIDES.filter((g) => g.slug !== guide.slug).map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="text-navy hover:underline"
              >
                {g.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
