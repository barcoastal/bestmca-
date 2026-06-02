import Link from "next/link";
import { BBB_RECORDS, BBB_COASTAL, bbbGradeTone, type BBBRecord } from "@/data/bbb";
import { Stars } from "@/components/review/Stars";
import { CTABanner } from "@/components/review/CTABanner";
import { jsonLd } from "@/lib/schema";

export const metadata = {
  title:
    "MCA Settlement Companies BBB Ratings Compared (2026): Real Grades & Reviews",
  description:
    "The real Better Business Bureau record for every major MCA settlement and debt-relief firm: accreditation status, letter grade, and customer-review stars. Verified directly from bbb.org, no fabricated data.",
  keywords: [
    "mca settlement companies bbb",
    "mca debt relief bbb rating",
    "best mca settlement company bbb",
    "mca debt relief reviews bbb",
    "corporate rescue advisors bbb",
    "eastern financial partners bbb",
    "mca resolve bbb",
  ],
  alternates: { canonical: "/mca-settlement-companies-bbb-ratings" },
};

const VERIFIED_DATE = "June 2, 2026";

function GradeBadge({
  grade,
  size = "md",
}: {
  grade: string;
  size?: "md" | "lg";
}) {
  const tone = bbbGradeTone(grade);
  const cls =
    tone === "good"
      ? "bg-win-soft text-win"
      : tone === "ok"
        ? "bg-warn-soft text-warn"
        : tone === "bad"
          ? "bg-bad-soft text-bad"
          : "bg-paper-soft text-ink-subtle";
  const dims =
    size === "lg"
      ? "min-w-[3.5rem] px-3 py-2 text-2xl"
      : "min-w-[2.75rem] px-2.5 py-1 text-base";
  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl font-display font-semibold tabular-nums ${dims} ${cls}`}
    >
      {grade}
    </span>
  );
}

function AccreditationPill({ record }: { record: BBBRecord }) {
  if (record.accreditation === "accredited") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-win-soft/60 px-3 py-1 text-xs font-semibold text-win">
        <span aria-hidden>✓</span> BBB Accredited
        {record.accreditedSince && (
          <span className="font-normal opacity-70">
            since {record.accreditedSince}
          </span>
        )}
      </span>
    );
  }
  if (record.accreditation === "not-accredited") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-paper-soft px-3 py-1 text-xs font-medium text-ink-muted">
        <span aria-hidden className="text-bad">
          ✕
        </span>{" "}
        Not accredited
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-paper-soft px-3 py-1 text-xs font-medium text-ink-subtle">
      No BBB profile
    </span>
  );
}

function MetaRow({ record }: { record: BBBRecord }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-subtle">
      {record.starRating && (
        <span className="inline-flex items-center gap-1.5">
          <Stars value={record.starRating} size="sm" />
          <span className="font-semibold text-ink-soft tabular-nums">
            {record.starRating.toFixed(2)}
          </span>
          <span>({record.reviewCount} reviews)</span>
        </span>
      )}
      {record.started && (
        <span>
          <span className="font-semibold text-ink-soft">Since</span>{" "}
          {record.started}
        </span>
      )}
      <span>
        <span className="font-semibold text-ink-soft">HQ</span> {record.hq}
      </span>
    </div>
  );
}

function Quotes({ record }: { record: BBBRecord }) {
  if (record.quotes.length === 0) return null;
  return (
    <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
      {record.quotes.map((q, i) => (
        <blockquote
          key={i}
          className={`rounded-xl border-l-4 px-3.5 py-2.5 text-sm leading-relaxed ${
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
  );
}

function CardLinks({ record }: { record: BBBRecord }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold">
      {record.slug && (
        <Link href={`/reviews/${record.slug}`} className="text-navy">
          Read our full {record.shortName} review →
        </Link>
      )}
      {record.profileUrl && (
        <a
          href={record.profileUrl}
          target="_blank"
          rel="noopener nofollow"
          className="text-ink-muted hover:text-navy"
        >
          View live BBB profile ↗
        </a>
      )}
    </div>
  );
}

const FAQ = [
  {
    q: "Which MCA settlement company has the best BBB rating?",
    a: "Of the firms we track, Coastal Debt Resolve is the only one that is both BBB Accredited and rated A+. Second Wind Consultants is also A+ and accredited, but serves larger mid-market restructurings rather than small businesses in active distress. Several heavily marketed MCA firms are not accredited at all, and one, Corporate Rescue Advisors LLC, holds an F.",
  },
  {
    q: "What does BBB Accreditation actually require?",
    a: "Accreditation requires a business to meet BBB standards and, critically, to respond to complaints filed against it. It is not a guarantee of quality, but a firm that is not accredited, or that has lost accreditation, has chosen not to participate in that process or failed to meet the bar.",
  },
  {
    q: "Why do some firms have no BBB profile?",
    a: "Some firms have simply never registered with the BBB, and litigation-focused law firms often are not listed under a BBB business category at all. No profile means there is no independently tracked rating or review history to check before you sign, which is a reason to ask for references and written disclosures directly.",
  },
];

export default function BBBRatingsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const others = BBB_RECORDS.filter((r) => !r.isCoastal);

  return (
    <article className="bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema)} />

      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            Verified BBB Records · {VERIFIED_DATE}
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            MCA settlement companies and their real BBB record
          </h1>
          <p className="mt-4 text-lg text-ink-soft leading-relaxed max-w-3xl">
            We pulled the actual Better Business Bureau profile for every major
            merchant cash advance settlement and debt-relief firm, the
            accreditation status, the letter grade, and the customer-review
            average, and put them side by side. Every figure below was read
            directly from{" "}
            <span className="font-semibold text-ink-soft">bbb.org</span>. We do
            not accept compensation from any firm, and we did not soften or
            invent a single number.
          </p>
        </div>
      </header>

      {/* Featured: Coastal */}
      <section className="mx-auto max-w-5xl px-5 pt-14">
        <div className="relative overflow-hidden rounded-3xl border border-gold bg-gold-soft/30 p-8 md:p-10">
          <div
            aria-hidden
            className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-gold/15 blur-3xl"
          />
          <div className="relative">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div className="min-w-0">
                <span className="rounded-full bg-gold text-navy-deep text-[10px] font-semibold uppercase tracking-[0.16em] px-3 py-1">
                  Our #1 Pick · Best BBB Standing
                </span>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-navy">
                  {BBB_COASTAL.name}
                </h2>
                <div className="mt-3">
                  <AccreditationPill record={BBB_COASTAL} />
                </div>
              </div>
              <div className="flex flex-col items-center gap-1.5 shrink-0">
                <GradeBadge grade={BBB_COASTAL.grade} size="lg" />
                <span className="text-[10px] uppercase tracking-[0.16em] text-ink-subtle font-semibold">
                  BBB Grade
                </span>
              </div>
            </div>
            <p className="mt-5 text-ink-soft leading-relaxed max-w-3xl">
              {BBB_COASTAL.takeaway}
            </p>
            <div className="mt-5">
              <MetaRow record={BBB_COASTAL} />
            </div>
            <CardLinks record={BBB_COASTAL} />
          </div>
        </div>
      </section>

      {/* The rest, as boxes */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <h2 className="font-display text-2xl font-semibold text-navy mb-6">
          The rest of the field
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {others.map((r) => (
            <div
              key={r.name}
              className="flex flex-col rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold text-navy leading-snug">
                    {r.name}
                  </h3>
                  <div className="mt-2">
                    <AccreditationPill record={r} />
                  </div>
                </div>
                <GradeBadge grade={r.grade} size="lg" />
              </div>

              <div className="mt-4">
                <MetaRow record={r} />
              </div>

              <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                {r.takeaway}
              </p>

              {r.entityNote && (
                <p className="mt-3 text-xs text-ink-muted italic">
                  {r.entityNote}
                </p>
              )}

              <Quotes record={r} />

              <div className="mt-auto">
                <CardLinks record={r} />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-ink-subtle leading-relaxed">
          Snapshot taken {VERIFIED_DATE}. BBB ratings and reviews are live and
          change over time; check each profile for the current figure. Spergel is
          listed on BBB Canada and does not serve U.S. MCA cases. Stop MCA&apos;s
          record is filed under its operating entity, Business Debt Adjusters,
          LLC.
        </p>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-5xl px-5 pb-4">
        <CTABanner
          campaign="bbb-ratings"
          heading={`The only A+ accredited firm in this comparison: ${BBB_COASTAL.name}`}
          body="Coastal Debt Resolve is BBB Accredited with an A+ rating. Get a free MCA review, a written settlement strategy, and a flat fee quoted before you sign anything."
        />
      </div>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-12">
        <h2 className="font-display text-3xl font-semibold text-navy mb-6">
          BBB ratings: common questions
        </h2>
        <div className="space-y-5">
          {FAQ.map((f) => (
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
    </article>
  );
}
