import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COASTAL, COMPETITORS, getReviewBySlug } from "@/data/reviews";
import { getBBBBySlug, bbbGradeTone } from "@/data/bbb";
import { CTABanner } from "@/components/review/CTABanner";
import { BrandLogo } from "@/components/review/BrandLogo";
import { Stars } from "@/components/review/Stars";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return COMPETITORS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const firm = getReviewBySlug(slug);
  if (!firm || firm.isCoastal) return {};
  return {
    title: `Is ${firm.name} Legit or a Scam? Honest 2026 Review`,
    description: `Is ${firm.name} legit? Our independent verdict, the firm's real BBB rating, verified customer reviews, and what to check before signing. No compensation, no sponsorships.`,
    keywords: [
      `is ${firm.name.toLowerCase()} legit`,
      `${firm.name.toLowerCase()} scam`,
      `${firm.name.toLowerCase()} reviews`,
      `${firm.name.toLowerCase()} complaints`,
      `is ${firm.name.toLowerCase()} a scam`,
    ],
    alternates: { canonical: `/legit/${slug}` },
  };
}

// Verdict band: trustworthy / caution / avoid, derived from score + BBB grade.
function verdictBand(score: number, grade?: string) {
  if (grade === "F" || score < 3) {
    return {
      label: "Approach with caution",
      tone: "bad" as const,
      line: "The public record shows enough red flags that we would not sign without serious independent verification.",
    };
  }
  if (score < 4 || grade === "B") {
    return {
      label: "Legitimate, but verify carefully",
      tone: "ok" as const,
      line: "This appears to be a real operating firm, but the record has caveats worth checking before you commit.",
    };
  }
  return {
    label: "Legitimate and well-reviewed",
    tone: "good" as const,
    line: "This is an established firm with a solid public record. The question is fit, not legitimacy.",
  };
}

export default async function LegitPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const firm = getReviewBySlug(slug);
  if (!firm || firm.isCoastal) notFound();

  const bbb = getBBBBySlug(slug);
  const band = verdictBand(firm.score, bbb?.grade);
  const bandCls =
    band.tone === "good"
      ? "border-win bg-win-soft/40"
      : band.tone === "ok"
        ? "border-warn bg-warn-soft/40"
        : "border-bad bg-bad-soft/40";

  const faq = [
    {
      q: `Is ${firm.name} a legitimate company?`,
      a: `${band.line} ${firm.oneLineVerdict}`,
    },
    {
      q: `What is ${firm.name}'s BBB rating?`,
      a: bbb?.hasProfile
        ? `${firm.name} holds a BBB grade of ${bbb.grade} and is ${
            bbb.accreditation === "accredited"
              ? "BBB Accredited"
              : "not BBB Accredited"
          }. ${bbb.takeaway}`
        : `${firm.name} does not have a Better Business Bureau profile, which means there is no independently tracked BBB rating or complaint record to check before signing.`,
    },
    {
      q: `What should I check before signing with ${firm.name}?`,
      a: "Get the full fee schedule in writing before paying anything, confirm whether creditor contact has actually begun within the first 30 days, and never agree to stop paying creditors without written confirmation that negotiation is underway. Compare at least one alternative firm first.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article className="bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: `Is ${firm.name} Legit?`, path: `/legit/${slug}` },
          ]),
        )}
      />

      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="mb-5">
            <Breadcrumbs
              items={[{ name: `Is ${firm.shortName} Legit?`, path: `/legit/${slug}` }]}
            />
          </div>
          <div className="flex items-center gap-4">
            <BrandLogo review={firm} size={56} />
            <h1 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-tight">
              Is {firm.name} legit or a scam?
            </h1>
          </div>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            {firm.oneLineVerdict}
          </p>
        </div>
      </header>

      {/* Verdict band */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className={`rounded-2xl border-l-4 ${bandCls} p-6`}>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-ink-subtle">
                Our verdict
              </div>
              <div className="mt-1 font-display text-2xl font-semibold text-navy">
                {band.label}
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="text-center">
                <div className="font-display text-3xl font-semibold text-navy tabular-nums leading-none">
                  {firm.score.toFixed(1)}
                </div>
                <div className="mt-1">
                  <Stars value={firm.score} size="sm" />
                </div>
                <div className="text-[9px] uppercase tracking-[0.14em] text-ink-subtle font-semibold mt-1">
                  Our score
                </div>
              </div>
              {bbb?.hasProfile && (
                <div className="text-center">
                  <div
                    className={`inline-flex items-center justify-center rounded-xl px-3 py-1.5 font-display text-2xl font-semibold ${
                      bbbGradeTone(bbb.grade) === "good"
                        ? "bg-win-soft text-win"
                        : bbbGradeTone(bbb.grade) === "ok"
                          ? "bg-warn-soft text-warn"
                          : "bg-bad-soft text-bad"
                    }`}
                  >
                    {bbb.grade}
                  </div>
                  <div className="text-[9px] uppercase tracking-[0.14em] text-ink-subtle font-semibold mt-1">
                    BBB grade
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="mt-4 text-ink-soft leading-relaxed">{band.line}</p>
        </div>
      </section>

      {/* Full verdict */}
      <section className="mx-auto max-w-4xl px-5 pb-8">
        <h2 className="font-display text-2xl font-semibold text-navy">
          The honest answer
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed">{firm.verdict}</p>
      </section>

      {/* BBB record */}
      {bbb?.hasProfile && (
        <section className="mx-auto max-w-4xl px-5 pb-8">
          <h2 className="font-display text-2xl font-semibold text-navy">
            What the BBB record shows
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">{bbb.takeaway}</p>
          {bbb.quotes.length > 0 && (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {bbb.quotes.map((q, i) => (
                <blockquote
                  key={i}
                  className={`rounded-xl border-l-4 px-4 py-3 text-sm leading-relaxed ${
                    q.sentiment === "positive"
                      ? "border-win bg-win-soft/40 text-ink-soft"
                      : "border-bad bg-bad-soft/40 text-ink-soft"
                  }`}
                >
                  <span className="italic">&ldquo;{q.text}&rdquo;</span>
                  <span className="mt-1 block text-[10px] uppercase tracking-[0.1em] text-ink-subtle not-italic">
                    {q.sentiment === "positive" ? "Positive" : "Negative"} · BBB
                    {q.reviewer ? ` · ${q.reviewer}` : ""}
                  </span>
                </blockquote>
              ))}
            </div>
          )}
          <Link
            href="/mca-settlement-companies-bbb-ratings"
            className="mt-5 inline-flex text-sm font-semibold text-navy hover:underline"
          >
            Compare every firm&rsquo;s BBB rating →
          </Link>
        </section>
      )}

      {/* Pros / cons */}
      {(firm.pros.length > 0 || firm.cons.length > 0) && (
        <section className="mx-auto max-w-4xl px-5 pb-8 grid gap-6 md:grid-cols-2">
          {firm.pros.length > 0 && (
            <div className="rounded-2xl border border-line bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-win">
                What checks out
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {firm.pros.slice(0, 4).map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-win">✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {firm.cons.length > 0 && (
            <div className="rounded-2xl border border-line bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-bad">
                What to watch
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {firm.cons.slice(0, 4).map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-bad">!</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 pb-8">
        <h2 className="font-display text-2xl font-semibold text-navy mb-5">
          Questions people ask about {firm.name}
        </h2>
        <div className="space-y-4">
          {faq.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-line bg-white p-5"
            >
              <summary className="cursor-pointer list-none font-semibold text-navy flex items-center justify-between gap-4">
                {f.q}
                <span className="text-ink-subtle group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-ink-soft leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-6 flex flex-wrap gap-4 text-sm font-semibold">
        <Link href={`/reviews/${firm.slug}`} className="text-navy hover:underline">
          Read our full {firm.shortName} review →
        </Link>
        <Link
          href={`/compare/coastal-debt-vs-${firm.slug}`}
          className="text-navy hover:underline"
        >
          Compare {firm.shortName} vs our #1 pick →
        </Link>
      </section>

      <div className="mx-auto max-w-4xl px-5 pb-16">
        <CTABanner
          campaign={`legit-${firm.slug}`}
          heading={`Researching ${firm.name}? Compare it with our #1-rated firm first.`}
          body={`${COASTAL.name} is BBB Accredited with an A+ rating. Get a free MCA review and a written settlement strategy before you commit to anyone.`}
        />
      </div>
    </article>
  );
}
