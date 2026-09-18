import Link from "next/link";
import { RANKED, COASTAL } from "@/data/reviews";
import { ScoreBadge } from "@/components/review/ScoreBadge";
import { RankingChart } from "@/components/review/RankingChart";
import { CTABanner } from "@/components/review/CTABanner";
import { BrandLogo } from "@/components/review/BrandLogo";
import { BBBSeal } from "@/components/review/BBBSeal";
import { coastalCta } from "@/lib/cta";
import { TrackedLink } from "@/components/review/TrackedLink";
import { NEWS } from "@/data/news";
import { BBB_RECORDS } from "@/data/bbb";

export const metadata = {
  // Brand leads so it survives SERP truncation and the homepage (not /about)
  // owns the "mca settlement reviews" brand query. Head term kept second.
  title: {
    absolute:
      "MCA Settlement Reviews: Best MCA Debt Relief Companies 2026",
  },
  description:
    "Compare 17 MCA settlement and debt relief companies. Read dated BBB records, complaints, fee disclosures, and the limitations behind our editorial comparison.",
  keywords: [
    "mca debt relief",
    "mca debt relief reviews",
    "best mca debt relief companies",
    "mca settlement",
    "mca debt settlement",
    "merchant cash advance settlement",
    "best mca settlement company",
  ],
  alternates: { canonical: "/" },
};

const HOME_FAQ = [
  {
    q: "What is MCA settlement?",
    a: "MCA settlement is the process of negotiating with a merchant cash advance funder to reduce the total owed, restructure the daily or weekly payment, or release a UCC lien. Because MCAs are structured as purchases of future receivables rather than loans, they need a different approach than ordinary debt relief.",
  },
  {
    q: "How do you rank the companies?",
    a: "List positions are editorial, with Coastal Debt Resolve featured first. We compare dated public records and company claims across service scope, fees, communication, outcomes, and legal representation. Numerical scores are no longer published because their underlying category assessments have not been independently substantiated. We receive no compensation from featured firms. Read our methodology and each review’s sources and limitations.",
  },
  {
    q: "Which MCA settlement company has the best BBB rating?",
    a: "Multiple firms in our comparison are listed as BBB Accredited with an A+ rating. Compare their BBB grades, accreditation status, and customer-review averages on our BBB ratings page, and check the linked BBB profiles for current information.",
  },
  {
    q: "Is MCA settlement the same as bankruptcy?",
    a: "No. Settlement involves negotiating an agreement with a creditor or funder. Bankruptcy is a court process; Chapter 11 can allow a business to reorganize while continuing operations. Neither route guarantees that you will preserve assets, credit, or the business. Compare the options with qualified counsel.",
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // Tells Google this page IS the ranked list for "best MCA debt relief
  // companies" queries, with one entry per firm pointing at its review.
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best MCA Debt Relief Companies 2026",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: RANKED.length,
    itemListElement: RANKED.map((r) => ({
      "@type": "ListItem",
      position: r.rank,
      name: r.name,
      url: `https://www.mcasettlementreviews.com/reviews/${r.slug}`,
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c"),
        }}
      />
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-20 grid gap-12 md:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
              2026 Independent Review · Updated{" "}
              September 18, 2026
            </div>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold text-navy leading-[1.05] tracking-tight">
              MCA settlement companies for 2026: compare services, records, and fees.
            </h1>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-2xl">
              Compare {RANKED.length} merchant cash advance settlement and
              restructuring firms using dated public records, fee information,
              and service limitations. Coastal is featured first by editorial choice.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <TrackedLink
                href={coastalCta("homepage-hero")}
                campaign="homepage-hero"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep hover:bg-gold/90 transition-colors shadow-[0_2px_10px_rgba(245,184,0,0.35)]"
              >
                Get a free MCA review →
              </TrackedLink>
              <Link
                href={`/reviews/${COASTAL.slug}`}
                className="inline-flex items-center justify-center rounded-full bg-navy text-white px-6 py-3 text-sm font-semibold hover:bg-navy-deep transition-colors"
              >
                Read Coastal’s review
              </Link>
              <Link
                href="/best-mca-settlement-companies-2026"
                className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-navy hover:bg-paper-soft transition-colors"
              >
                Full ranking →
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-3 text-xs text-ink-subtle"> Dated Trustpilot record: {COASTAL.trustpilot}
            </div>
          </div>

          {/* Hero #1 card */}
          <Link
            href={`/reviews/${COASTAL.slug}`}
            className="group block rounded-3xl border border-line bg-white p-7 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-warn">
                Featured provider
              </div>
              <span className="rounded-full bg-gold text-navy-deep text-[10px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1">
                #1 editorial placement
              </span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <BrandLogo review={COASTAL} size={44} />
              <h2 className="font-display text-2xl font-semibold text-navy">
                {COASTAL.name}
              </h2>
            </div>
            <p className="mt-3 text-xs text-ink-muted">Featured first by editorial choice. Compare the sources and written terms.</p>
            <p className="mt-4 text-sm text-ink-soft leading-relaxed">
              {COASTAL.oneLineVerdict}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
              <Stat label="BBB" value={COASTAL.bbb.split(",")[0]} />
              <Stat label="Trustpilot" value={COASTAL.trustpilot} />
              <Stat label="Min debt" value={COASTAL.minDebt} />
              <Stat label="Litigation" value="Confirm legal scope" />
            </div>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:underline">
              Read full review →
            </span>
          </Link>
        </div>
      </section>

      {/* Methodology strip */}
      <section className="bg-paper-soft border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-10 grid gap-6 md:grid-cols-5">
          {[
            { n: "01", t: "Transparency", d: "Fees disclosed before signing" },
            { n: "02", t: "Results", d: "Outcome evidence and its limitations" },
            { n: "03", t: "Communication", d: "Named case manager, response cadence" },
            { n: "04", t: "Cost", d: "Total cost of resolution, not headline rate" },
            { n: "05", t: "Litigation", d: "In-house attorneys vs referral" },
          ].map((s) => (
            <div key={s.n}>
              <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-warn">
                {s.n}
              </div>
              <div className="mt-2 font-display text-base font-semibold text-navy">
                {s.t}
              </div>
              <div className="mt-1 text-xs text-ink-muted">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Top 10 ranking */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <header className="mb-8 max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            The 2026 Ranking
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-navy">
            Top 17 MCA settlement and restructuring firms
          </h2>
          <p className="mt-3 text-base text-ink-soft leading-relaxed">
            Coastal is featured first by editorial choice. List positions do not
            measure outcomes. Compare each firm’s dated sources, advertised
            services, pricing limitations, and complaints before requesting a proposal.
          </p>
        </header>
        <RankingChart />
        <div className="mt-8 text-center">
          <Link
            href="/best-mca-settlement-companies-2026"
            className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-navy hover:bg-paper-soft transition-colors"
          >
            See the full 2026 company comparison →
          </Link>
        </div>
      </section>

      {/* BBB record band */}
      <section className="bg-paper-soft border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-[1.3fr_1fr] items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
              Dated public records
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-navy leading-tight">
              Compare the BBB records behind our reviews
            </h2>
            <p className="mt-4 text-base text-ink-soft leading-relaxed max-w-xl">
              Compare available letter grades, accreditation status, complaints, and
              customer-review averages. Our BBB comparison identifies the linked
              profiles, check dates, related entities, and missing information.
              These records do not establish settlement outcomes.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {BBB_RECORDS.filter((record) =>
                ["coastal-debt-resolve", "mca-resolve", "corporate-rescue"].includes(record.slug || ""),
              ).map((record) => (
                <GradeChip
                  key={record.slug}
                  grade={record.grade}
                  tone={record.grade === "A+" ? "good" : "ok"}
                  label={record.name}
                />
              ))}
            </div>
            <Link
              href="/mca-settlement-companies-bbb-ratings"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-navy text-white px-6 py-3 text-sm font-semibold hover:bg-navy-deep transition-colors"
            >
              Compare all BBB ratings →
            </Link>
          </div>
          <div className="rounded-3xl border border-line bg-white p-7 shadow-sm">
            <div className="text-[10px] uppercase tracking-[0.22em] font-semibold text-warn">
              Featured provider
            </div>
            <div className="mt-3 flex items-center gap-3">
              <BrandLogo review={COASTAL} size={44} />
              <div className="font-display text-xl font-semibold text-navy">
                {COASTAL.name}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-xl bg-win-soft text-win font-display text-2xl font-semibold px-3 py-1.5">
                A+
              </span>
              <div className="text-sm text-ink-soft leading-snug">
                BBB Accredited
                <br />
                <span className="text-ink-subtle">since February 2024</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-ink-muted leading-relaxed">
              Coastal is among the firms in our comparison listed as BBB
              Accredited and rated A+.
            </p>
            <div className="mt-5">
              <BBBSeal campaign="homepage-bbb-band" />
            </div>
          </div>
        </div>
      </section>

      {/* Why we rank Coastal #1 */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 grid gap-12 md:grid-cols-2 items-start">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-gold-soft">
              Coastal is our featured first provider
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold leading-tight">
              MCA restructuring: compare the evidence and the written proposal.
            </h2>
            <p className="mt-5 text-white/75 leading-relaxed">
              {COASTAL.oneLineVerdict}
            </p>
            <p className="mt-4 text-white/75 leading-relaxed">
              {COASTAL.ratingNote}
            </p>
            <Link
              href={coastalCta("homepage-coastal-deep-dive")}
              target="_blank"
              rel="noopener"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-gold text-navy-deep px-6 py-3 text-sm font-semibold hover:bg-gold/90 transition-colors"
            >
              Get a free MCA review →
            </Link>
            <div className="mt-7">
              <BBBSeal campaign="homepage-coastal-seal" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Placement", value: "Featured first" },
              { label: "Trustpilot reviews", value: "429 (Sep 12, 2026)" },
              { label: "Min debt", value: "Confirm eligibility" },
              { label: "Legal representation", value: "Confirm scope" },
              { label: "BBB", value: "A+, accredited" },
              { label: "Free initial review", value: "Yes" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/55 font-semibold">
                  {s.label}
                </div>
                <div className="mt-2 font-display text-xl font-semibold">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse reviews */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <header className="mb-8">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            Browse all reviews
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-navy">
            Every firm we evaluated, in detail
          </h2>
        </header>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RANKED.map((r) => (
            <Link
              key={r.slug}
              href={`/reviews/${r.slug}`}
              className="group block rounded-2xl border border-line bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-ink-subtle">
                  Rank #{r.rank}
                </span>
                <ScoreBadge score={r.score} variant="compact" />
              </div>
              <div className="mt-3 flex items-center gap-3">
                <BrandLogo review={r} size={36} />
                <h3 className="font-display text-lg font-semibold text-navy group-hover:underline">
                  {r.name}
                </h3>
              </div>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed line-clamp-3">
                {r.oneLineVerdict}
              </p>
              <div className="mt-4 text-xs text-ink-subtle">
                {r.minDebt} · {r.specialties.split(",")[0]}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="font-display text-3xl font-semibold text-navy">
          Compare MCA debt relief options before choosing a firm
        </h2>
        <p className="mt-3 max-w-3xl text-ink-soft leading-relaxed">
          Start with the type of help you need, then compare the proposed fees,
          payment terms, and service scope in writing. These guides explain the
          questions to ask alongside our company reviews.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { href: "/mca-debt-relief", title: "MCA debt relief options", text: "Compare the available approaches and questions to discuss with an adviser." },
            { href: "/mca-debt-restructuring", title: "MCA debt restructuring", text: "Understand proposed payment changes and what to check in an agreement." },
            { href: "/mca-consolidation-loans", title: "MCA consolidation loans", text: "Compare new financing with settlement and restructuring proposals." },
            { href: "/guides/how-much-does-mca-settlement-cost", title: "MCA settlement costs", text: "Review provider fees and creditor payments together when comparing proposals." },
            { href: "/guides/mca-settlement-vs-bankruptcy", title: "MCA settlement vs. bankruptcy", text: "Explore the differences and questions to take to qualified counsel." },
            { href: "/methodology", title: "How to read our company ratings", text: "See our placement policy, dated evidence, and assessment limitations." },
          ].map((guide) => (
            <Link key={guide.href} href={guide.href} className="rounded-2xl border border-line bg-white p-5 hover:shadow-md transition-shadow">
              <h3 className="font-display text-lg font-semibold text-navy">{guide.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{guide.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <header className="mb-6 flex items-end justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
              Latest News
            </div>
            <h2 className="mt-2 font-display text-3xl font-semibold text-navy">
              Industry updates and editorial notes
            </h2>
          </div>
          <Link
            href="/news"
            className="hidden sm:inline-flex text-sm font-semibold text-navy hover:underline"
          >
            All news →
          </Link>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {NEWS.slice(0, 2).map((n) => {
            const date = new Date(
              n.publishedAt + "T00:00:00Z",
            ).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC",
            });
            return (
              <Link
                key={n.slug}
                href={`/news/${n.slug}`}
                className="block rounded-2xl border border-line bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-semibold text-warn">
                  <span>{n.category}</span>
                  <span className="text-ink-subtle">·</span>
                  <time className="text-ink-subtle" dateTime={n.publishedAt}>
                    {date}
                  </time>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-navy leading-snug">
                  {n.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft line-clamp-3">
                  {n.excerpt}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-16">
        <header className="mb-8">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            Common questions
          </div>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold text-navy">
            MCA settlement, answered
          </h2>
        </header>
        <div className="space-y-4">
          {HOME_FAQ.map((f) => (
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
              {f.q === "Is MCA settlement the same as bankruptcy?" && (
                <a
                  href="https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics/chapter-11-bankruptcy-basics"
                  className="mt-3 inline-block text-sm text-navy underline"
                >
                  Source: U.S. Courts Chapter 11 overview
                </a>
              )}
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-5">
        <CTABanner campaign="homepage-bottom" />
      </div>
    </div>
  );
}

function GradeChip({
  grade,
  tone,
  label,
}: {
  grade: string;
  tone: "good" | "ok" | "bad";
  label: string;
}) {
  const cls =
    tone === "good"
      ? "bg-win-soft text-win"
      : tone === "ok"
        ? "bg-warn-soft text-warn"
        : "bg-bad-soft text-bad";
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-xs">
      <span
        className={`inline-flex items-center justify-center rounded-md px-1.5 py-0.5 font-display text-sm font-semibold ${cls}`}
      >
        {grade}
      </span>
      <span className="font-medium text-ink-soft">{label}</span>
    </span>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-paper-soft px-3 py-2.5">
      <div className="text-[10px] uppercase tracking-[0.16em] text-ink-subtle font-semibold">
        {label}
      </div>
      <div className="mt-0.5 text-sm font-semibold text-ink">{value}</div>
    </div>
  );
}
