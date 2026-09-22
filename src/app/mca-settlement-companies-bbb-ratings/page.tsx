import Link from "next/link";
import { BBB_RECORDS, BBB_COASTAL, bbbGradeTone, type BBBRecord } from "@/data/bbb";
import { Stars } from "@/components/review/Stars";
import { BrandLogo } from "@/components/review/BrandLogo";
import { BBBSeal } from "@/components/review/BBBSeal";
import { CTABanner } from "@/components/review/CTABanner";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { jsonLd } from "@/lib/schema";

export const metadata = {
  title:
    "MCA Settlement Companies BBB Ratings Compared (2026): Real Grades & Reviews",
  description:
    "Compare selected MCA providers using dated BBB profiles, accreditation, grades and source limitations. Check the linked records for current information.",
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

const VERIFIED_DATE = "See individual record dates";

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
      Profile not located
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
    a: "Multiple firms we track are listed as BBB Accredited with an A+ rating, including Coastal Debt Resolve and Second Wind Consultants. Check the linked BBB profiles for current ratings and accreditation. A grade does not establish settlement results. Corporate Rescue Advisors is listed as Not Rated in our September 14, 2026 record.",
  },
  {
    q: "What does BBB Accreditation actually require?",
    a: "BBB accreditation requires meeting its standards, including responsiveness to complaints, and paying an accreditation fee. Non-accreditation alone does not establish why a business is not accredited or prove poor service. Accreditation does not guarantee outcomes.",
  },
  {
    q: "Why do some firms have no linked BBB profile?",
    a: "A matching profile was not established in our reviewed records for those brands. This does not prove that none exists. Search the legal entity and alternate names, and check the source notes before drawing conclusions.",
  },
];

const SITE = "https://www.mcasettlementreviews.com";
const PAGE_URL = `${SITE}/mca-settlement-companies-bbb-ratings`;

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

  // Describe the comparison without republishing third-party ratings as our own.
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "MCA provider BBB record comparison",
    url: PAGE_URL,
    numberOfItems: BBB_RECORDS.length,
    itemListOrder: "https://schema.org/ItemListUnordered",
    itemListElement: BBB_RECORDS.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Organization", name: r.name,
        ...(r.profileUrl ? { url: r.profileUrl } : {}) },
    })),
  };

  return (
    <article className="bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(itemListSchema)}
      />

      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="mb-5">
            <Breadcrumbs
              items={[
                { name: "BBB Ratings", path: "/mca-settlement-companies-bbb-ratings" },
              ]}
            />
          </div>
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            BBB Record Comparison · {VERIFIED_DATE}
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            MCA settlement companies and their real BBB record
          </h1>
          <p className="mt-3 text-sm text-ink-subtle">
            Headline findings from this dataset are summarized in our{" "}
            <Link
              href="/state-of-mca-settlement-2026"
              className="text-navy underline"
            >
              State of MCA Settlement 2026 study
            </Link>
            .
          </p>
          <p className="mt-4 text-lg text-ink-soft leading-relaxed max-w-3xl">
            We compare available Better Business Bureau profiles for selected
            merchant cash advance settlement and debt-relief firms, the
            accreditation status, the letter grade, and the customer-review
            average, and put them side by side. Records are dated snapshots,
            not live ratings. Follow the profile links and read the source
            limitations before comparing providers.
          </p>
        </div>
      </header>

      {/* How to read a BBB grade */}
      <section className="mx-auto max-w-5xl px-5 pt-12">
        <div className="rounded-2xl border border-line bg-paper-soft p-7">
          <h2 className="font-display text-2xl font-semibold text-navy">
            How to read a BBB grade
          </h2>
          <p className="mt-3 text-ink-soft leading-relaxed">
            BBB letter grades, accreditation and customer-review averages are
            separate measures. Customer reviews do not determine the letter grade.
            A Not Rated record is not an F. Complaint counts need context, including
            the period covered, business size, responses and outcomes; they are not
            settlement failure rates. Neither a grade nor accreditation guarantees results.
          </p>
          <p className="mt-3 text-sm text-ink-soft">
            Sources: <a className="underline" href="https://www.bbb.org/about/overview-of-ratings">BBB rating definitions</a>
            {" · "}<a className="underline" href="https://www.bbb.org/business/accreditation/standards">BBB accreditation standards</a>.
            Definitions checked September 22, 2026; company records retain their individual dates.
          </p>
        </div>
      </section>

      {/* Stacked chart: one firm per row, ranked top to bottom */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <h2 className="font-display text-3xl font-semibold text-navy mb-7">
          Compare the available BBB records
        </h2>
        <p className="mb-4 text-sm text-ink-soft">Coastal is featured first by editorial choice. Display order is not a BBB ranking. Missing counts mean not verified, not zero; related brands may share a profile.</p>
        <div className="mb-8 overflow-x-auto rounded-xl border border-line" role="region" aria-label="BBB comparison table" tabIndex={0}>
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="p-4 text-left text-ink-muted">Dated BBB records at a glance. Detailed check dates, entity notes and profile links appear below.</caption>
            <thead className="bg-paper-soft text-navy"><tr>
              {["Company", "Grade", "Accreditation", "Complaints: 3 years", "Closed: 12 months"].map(label => <th key={label} scope="col" className="p-3">{label}</th>)}
            </tr></thead>
            <tbody>{BBB_RECORDS.map(r => <tr key={r.name} className="border-t border-line">
              <th scope="row" className="p-3 font-semibold">{r.slug ? <Link className="underline text-navy" href={`/reviews/${r.slug}`}>{r.name}</Link> : r.name}</th>
              <td className="p-3">{r.grade}</td>
              <td className="p-3">{r.accreditation === "accredited" ? "Accredited" : r.accreditation === "not-accredited" ? "Not accredited" : "Not verified"}</td>
              <td className="p-3">{r.complaints3yr ?? "Not verified"}</td>
              <td className="p-3">{r.complaints12mo ?? "Not verified"}</td>
            </tr>)}</tbody>
          </table>
        </div>
        <div className="space-y-4">
          {BBB_RECORDS.map((r, i) => (
            <div
              key={r.name}
              className={`rounded-2xl border p-6 md:p-7 transition-shadow hover:shadow-md ${
                r.isCoastal
                  ? "border-gold bg-gold-soft/30"
                  : "border-line bg-white"
              }`}
            >
              <div className="flex items-start gap-4 md:gap-5">
                <span className="font-display text-2xl md:text-3xl font-semibold text-ink-subtle tabular-nums leading-none pt-1 w-7 shrink-0">
                  {i + 1}
                </span>
                <BrandLogo
                  review={{
                    name: r.name,
                    shortName: r.shortName,
                    slug: r.logoSlug ?? r.slug,
                    websiteLabel: "",
                  }}
                  size={56}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display text-xl md:text-2xl font-semibold text-navy leading-snug">
                          {r.name}
                        </h3>
                        {r.isCoastal && (
                          <span className="rounded-full bg-gold text-navy-deep text-[9px] font-semibold uppercase tracking-[0.14em] px-2 py-0.5">
                            Featured provider
                          </span>
                        )}
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <AccreditationPill record={r} />
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-1 shrink-0">
                      <GradeBadge grade={r.grade} size="lg" />
                      <span className="text-[9px] uppercase tracking-[0.16em] text-ink-subtle font-semibold">
                        BBB Grade
                      </span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <MetaRow record={r} />
                  </div>

                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                    {r.takeaway}
                  </p>

                  {r.entityNote && (
                    <p className="mt-3 text-xs text-ink-muted italic">
                      {r.entityNote}
                    </p>
                  )}

                  <Quotes record={r} />

                  {r.isCoastal && (
                    <div className="mt-4">
                      <BBBSeal campaign="bbb-seal-coastal-row" />
                    </div>
                  )}

                  <CardLinks record={r} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-ink-subtle leading-relaxed">
          Records have different check dates. BBB ratings and reviews are live and
          change over time; check each profile for the current figure. Spergel is
          listed on BBB Canada; U.S. MCA service eligibility was not established. Stop MCA&apos;s
          record is filed under its operating entity, Business Debt Adjusters,
          LLC.
        </p>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-5xl px-5 pb-4">
        <CTABanner
          campaign="bbb-ratings"
          heading={`An A+ accredited firm in this comparison: ${BBB_COASTAL.name}`}
          body="Coastal is our featured first provider. Request a written proposal covering all program fees, creditor payments, legal services and cancellation terms."
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
