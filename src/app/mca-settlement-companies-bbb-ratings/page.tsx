import Link from "next/link";
import { BBB_RECORDS, BBB_COASTAL, bbbGradeTone, type BBBRecord } from "@/data/bbb";
import { CTABanner } from "@/components/review/CTABanner";
import { jsonLd } from "@/lib/schema";

export const metadata = {
  title:
    "MCA Settlement Companies BBB Ratings Compared (2026): Real Grades, Reviews & Complaints",
  description:
    "We pulled the real Better Business Bureau record for every major MCA settlement and debt-relief firm: accreditation status, letter grade, customer-review stars, and complaint counts. Verified directly from bbb.org, no fabricated data.",
  keywords: [
    "mca settlement companies bbb",
    "mca debt relief bbb rating",
    "mca settlement company complaints",
    "best mca settlement company bbb",
    "mca debt relief reviews bbb",
    "corporate rescue advisors bbb",
    "eastern financial partners bbb",
    "mca resolve bbb complaints",
  ],
  alternates: { canonical: "/mca-settlement-companies-bbb-ratings" },
};

const VERIFIED_DATE = "June 2, 2026";

function GradeBadge({ grade }: { grade: string }) {
  const tone = bbbGradeTone(grade);
  const cls =
    tone === "good"
      ? "bg-win-soft text-win"
      : tone === "ok"
        ? "bg-warn-soft text-warn"
        : tone === "bad"
          ? "bg-bad-soft text-bad"
          : "bg-paper-soft text-ink-subtle";
  return (
    <span
      className={`inline-flex min-w-[2.75rem] items-center justify-center rounded-lg px-2.5 py-1 font-display text-base font-semibold tabular-nums ${cls}`}
    >
      {grade}
    </span>
  );
}

function AccreditationCell({ record }: { record: BBBRecord }) {
  if (record.accreditation === "accredited") {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-win">
        <span aria-hidden>✓</span> Accredited
        {record.accreditedSince && (
          <span className="font-normal text-ink-subtle">
            ({record.accreditedSince})
          </span>
        )}
      </span>
    );
  }
  if (record.accreditation === "not-accredited") {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm text-ink-muted">
        <span aria-hidden className="text-bad">
          ✕
        </span>{" "}
        Not accredited
      </span>
    );
  }
  return <span className="text-sm text-ink-subtle">No BBB profile</span>;
}

const FAQ = [
  {
    q: "Which MCA settlement company has the best BBB rating?",
    a: "Of the firms we track, Coastal Debt Resolve is the only one that is both BBB Accredited and rated A+. Second Wind Consultants is also A+ and accredited, but serves larger mid-market restructurings rather than small businesses in active distress. Several heavily marketed MCA firms are not accredited at all, and one, Corporate Rescue Advisors LLC, holds an F.",
  },
  {
    q: "Does a high BBB complaint count mean a company is bad?",
    a: "Not on its own. Complaint counts scale with how many clients a firm serves, so a high-volume firm will naturally show more complaints than a tiny one. What matters more is the BBB letter grade and accreditation status, which already weigh whether the company responds to and resolves complaints. A firm with two complaints it ignored can score an F, while a firm with far more complaints it answered can keep an A+.",
  },
  {
    q: "What does BBB Accreditation actually require?",
    a: "Accreditation requires a business to meet BBB standards and, critically, to respond to complaints filed against it. It is not a guarantee of quality, but a firm that is not accredited, or that has lost accreditation, has chosen not to participate in that process or failed to meet the bar.",
  },
  {
    q: "Why do some firms have no BBB profile?",
    a: "Some firms have simply never registered with the BBB, and litigation-focused law firms often are not listed under a BBB business category at all. No profile means there is no independently tracked rating, review history, or complaint record to check before you sign, which is a reason to ask for references and written disclosures directly.",
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

  return (
    <article className="bg-paper">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema)} />

      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            Verified BBB Records · {VERIFIED_DATE}
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            MCA settlement companies, ranked by their real BBB record
          </h1>
          <p className="mt-4 text-lg text-ink-soft leading-relaxed max-w-3xl">
            We pulled the actual Better Business Bureau profile for every major
            merchant cash advance settlement and debt-relief firm, the
            accreditation status, the letter grade, the customer-review average,
            and the complaint count, and put them side by side. Every figure
            below was read directly from{" "}
            <span className="font-semibold text-ink-soft">bbb.org</span>. We do
            not accept compensation from any firm, and we did not soften or
            invent a single number.
          </p>
        </div>
      </header>

      {/* Comparison table */}
      <section className="mx-auto max-w-5xl px-5 py-14">
        <div className="overflow-x-auto rounded-2xl border border-line bg-white">
          <table className="w-full min-w-[760px] text-left">
            <thead>
              <tr className="border-b border-line bg-paper-soft text-[11px] uppercase tracking-[0.12em] text-ink-subtle">
                <th className="px-4 py-3 font-semibold">Firm</th>
                <th className="px-4 py-3 font-semibold">BBB grade</th>
                <th className="px-4 py-3 font-semibold">Accreditation</th>
                <th className="px-4 py-3 font-semibold">Customer reviews</th>
                <th className="px-4 py-3 font-semibold">Complaints (3 yr)</th>
                <th className="px-4 py-3 font-semibold">Profile</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {BBB_RECORDS.map((r) => (
                <tr
                  key={r.name}
                  className={r.isCoastal ? "bg-gold-soft/30" : "bg-white"}
                >
                  <td className="px-4 py-4 align-top">
                    <div className="flex items-center gap-2">
                      {r.slug ? (
                        <Link
                          href={`/reviews/${r.slug}`}
                          className="font-semibold text-navy hover:underline"
                        >
                          {r.name}
                        </Link>
                      ) : (
                        <span className="font-semibold text-navy">{r.name}</span>
                      )}
                      {r.isCoastal && (
                        <span className="rounded-full bg-gold text-navy-deep text-[9px] font-semibold uppercase tracking-[0.14em] px-2 py-0.5">
                          Our #1
                        </span>
                      )}
                    </div>
                    <div className="mt-0.5 text-xs text-ink-subtle">{r.hq}</div>
                  </td>
                  <td className="px-4 py-4 align-top">
                    <GradeBadge grade={r.grade} />
                  </td>
                  <td className="px-4 py-4 align-top">
                    <AccreditationCell record={r} />
                  </td>
                  <td className="px-4 py-4 align-top text-sm text-ink-soft tabular-nums">
                    {r.starRating ? (
                      <>
                        {r.starRating.toFixed(2)}
                        <span className="text-ink-subtle">
                          {" "}
                          ({r.reviewCount})
                        </span>
                      </>
                    ) : (
                      <span className="text-ink-subtle">Not shown</span>
                    )}
                  </td>
                  <td className="px-4 py-4 align-top text-sm text-ink-soft tabular-nums">
                    {typeof r.complaints3yr === "number" ? (
                      <>
                        {r.complaints3yr}
                        {typeof r.complaints12mo === "number" && (
                          <span className="text-ink-subtle">
                            {" "}
                            ({r.complaints12mo} in 12 mo)
                          </span>
                        )}
                      </>
                    ) : (
                      <span className="text-ink-subtle">—</span>
                    )}
                  </td>
                  <td className="px-4 py-4 align-top text-sm">
                    {r.profileUrl ? (
                      <a
                        href={r.profileUrl}
                        target="_blank"
                        rel="noopener nofollow"
                        className="text-navy underline"
                      >
                        BBB
                      </a>
                    ) : (
                      <span className="text-ink-subtle">None</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-ink-subtle leading-relaxed">
          Snapshot taken {VERIFIED_DATE}. BBB ratings, reviews, and complaint
          counts are live and change over time; check each profile for the
          current figure. Spergel is listed on BBB Canada and does not serve U.S.
          MCA cases. Stop MCA&apos;s record is filed under its operating entity,
          Business Debt Adjusters, LLC.
        </p>
      </section>

      {/* How to read this */}
      <section className="mx-auto max-w-5xl px-5 pb-4">
        <div className="rounded-2xl border border-line bg-paper-soft p-7">
          <h2 className="font-display text-2xl font-semibold text-navy">
            How to read a BBB record
          </h2>
          <p className="mt-3 text-ink-soft leading-relaxed">
            The number that gets quoted most, raw complaint count, is the one
            that misleads most. Complaints scale with client volume, so the
            busiest firm in a category will almost always show the most. The
            signals that actually separate a trustworthy firm from a risky one
            are <span className="font-semibold text-navy">accreditation</span>{" "}
            and the <span className="font-semibold text-navy">letter grade</span>,
            because both reward a firm for responding to and resolving
            complaints. That is why Corporate Rescue Advisors holds an F on just
            two complaints, it ignored them, while an accredited firm that
            answers and resolves a much larger volume keeps an A+.
          </p>
        </div>
      </section>

      {/* Detailed cards */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <h2 className="font-display text-3xl font-semibold text-navy mb-8">
          Every firm&apos;s BBB record, in detail
        </h2>
        <div className="space-y-6">
          {BBB_RECORDS.map((r) => (
            <div
              key={r.name}
              className={`rounded-2xl border p-7 ${
                r.isCoastal
                  ? "border-gold bg-gold-soft/30"
                  : "border-line bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-5 flex-wrap">
                <div className="min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display text-2xl font-semibold text-navy">
                      {r.name}
                    </h3>
                    {r.isCoastal && (
                      <span className="rounded-full bg-gold text-navy-deep text-[10px] font-semibold uppercase tracking-[0.14em] px-2.5 py-0.5">
                        Top pick
                      </span>
                    )}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-subtle">
                    {r.started && (
                      <span>
                        <span className="font-semibold text-ink-soft">
                          In business since:
                        </span>{" "}
                        {r.started}
                      </span>
                    )}
                    <span>
                      <span className="font-semibold text-ink-soft">HQ:</span>{" "}
                      {r.hq}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <GradeBadge grade={r.grade} />
                  <div className="text-xs">
                    <AccreditationCell record={r} />
                  </div>
                </div>
              </div>

              <p className="mt-4 text-ink-soft leading-relaxed max-w-3xl">
                {r.takeaway}
              </p>

              {r.entityNote && (
                <p className="mt-3 text-xs text-ink-muted italic max-w-3xl">
                  {r.entityNote}
                </p>
              )}

              {r.quotes.length > 0 && (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {r.quotes.map((q, i) => (
                    <blockquote
                      key={i}
                      className={`rounded-xl border-l-4 px-4 py-3 text-sm leading-relaxed ${
                        q.sentiment === "positive"
                          ? "border-win bg-win-soft/40 text-ink-soft"
                          : "border-bad bg-bad-soft/40 text-ink-soft"
                      }`}
                    >
                      <span className="italic">&ldquo;{q.text}&rdquo;</span>
                      <span className="mt-1 block text-[11px] uppercase tracking-[0.1em] text-ink-subtle not-italic">
                        {q.sentiment === "positive" ? "Positive" : "Negative"} ·
                        BBB {r.reviewCount ? "review" : "record"}
                        {q.reviewer ? ` · ${q.reviewer}` : ""}
                      </span>
                    </blockquote>
                  ))}
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-4 text-xs font-semibold">
                {r.slug && (
                  <Link href={`/reviews/${r.slug}`} className="text-navy">
                    Read our full {r.shortName} review →
                  </Link>
                )}
                {r.profileUrl && (
                  <a
                    href={r.profileUrl}
                    target="_blank"
                    rel="noopener nofollow"
                    className="text-ink-muted hover:text-navy"
                  >
                    View live BBB profile ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
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
