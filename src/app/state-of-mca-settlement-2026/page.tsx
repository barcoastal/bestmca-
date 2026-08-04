import Link from "next/link";
import { BBB_RECORDS } from "@/data/bbb";
import { jsonLd } from "@/lib/schema";

// A citable data study computed directly from the verified BBB dataset in
// src/data/bbb.ts. Every stat on this page derives from that data at build
// time, so the study updates whenever the dataset does.

const SITE = "https://www.mcasettlementreviews.com";

const withProfile = BBB_RECORDS.filter((r) => r.hasProfile);
const accredited = withProfile.filter((r) => r.accreditation === "accredited");
const gradeRank: Record<string, number> = {
  "A+": 12, A: 11, "A-": 10, "B+": 9, B: 8, "B-": 7,
  "C+": 6, C: 5, "C-": 4, "D+": 3, D: 2, "D-": 1, F: 0,
};
const belowB = withProfile.filter(
  (r) => (gradeRank[r.grade] ?? -1) < gradeRank["B"] && r.grade !== "No profile",
);
const noProfile = BBB_RECORDS.filter((r) => !r.hasProfile);
const totalComplaints3yr = BBB_RECORDS.reduce(
  (sum, r) => sum + (r.complaints3yr ?? 0),
  0,
);
const firmsWithComplaintData = BBB_RECORDS.filter(
  (r) => r.complaints3yr !== undefined,
);
const pctNotAccredited = Math.round(
  ((BBB_RECORDS.length - accredited.length) / BBB_RECORDS.length) * 100,
);

export const metadata = {
  title: "State of MCA Settlement 2026: BBB Grades of the Industry, Studied",
  description: `We pulled the live BBB record of ${BBB_RECORDS.length} MCA settlement and debt-relief firms. ${pctNotAccredited}% are not BBB accredited, ${belowB.length} hold a grade below B, and ${noProfile.length} have no BBB profile at all. Full data and methodology.`,
  alternates: { canonical: "/state-of-mca-settlement-2026" },
};

export default function StudyPage() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "State of MCA Settlement 2026: BBB standing of MCA settlement firms",
    description: `Point-in-time BBB accreditation status, letter grade, and complaint counts for ${BBB_RECORDS.length} merchant cash advance settlement and debt-relief firms, read directly from live bbb.org profiles.`,
    url: `${SITE}/state-of-mca-settlement-2026`,
    creator: { "@id": `${SITE}/#organization` },
    license: `${SITE}/methodology`,
    temporalCoverage: "2026",
  };

  const stats = [
    {
      n: `${pctNotAccredited}%`,
      label: `of the ${BBB_RECORDS.length} MCA settlement firms we track are NOT BBB accredited`,
    },
    {
      n: String(belowB.length),
      label: "firms hold a BBB grade below B, including at least one F",
    },
    {
      n: String(noProfile.length),
      label: "firms have no BBB profile at all, leaving owners nothing to verify",
    },
    {
      n: String(totalComplaints3yr),
      label: `BBB complaints on record in 3 years across the ${firmsWithComplaintData.length} firms that publish complaint data`,
    },
  ];

  return (
    <article className="bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(datasetSchema)}
      />
      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            Original Research · 2026
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            State of MCA Settlement 2026: what the industry&rsquo;s BBB records
            actually show
          </h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            We read the live Better Business Bureau profile of every merchant
            cash advance settlement and debt-relief firm we track:{" "}
            {BBB_RECORDS.length} companies, their accreditation status, letter
            grades, and complaint records. The picture is uneven enough that no
            business owner should sign with a firm before checking it.
          </p>
          <p className="mt-3 text-sm text-ink-subtle">
            Journalists and researchers: this data is free to cite with
            attribution and a link to this page.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <div className="font-display text-4xl font-semibold text-navy tabular-nums">
                {s.n}
              </div>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-6">
        <h2 className="font-display text-2xl font-semibold text-navy">
          The full dataset
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          Read directly from each firm&rsquo;s live bbb.org profile. Where a
          metric is not published, the cell says so. Snapshot dates and full
          notes on each firm are on the{" "}
          <Link
            href="/mca-settlement-companies-bbb-ratings"
            className="text-navy underline"
          >
            BBB ratings comparison
          </Link>
          .
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line text-left text-[11px] uppercase tracking-[0.14em] text-ink-subtle">
                <th className="px-4 py-3 font-semibold">Firm</th>
                <th className="px-4 py-3 font-semibold">BBB grade</th>
                <th className="px-4 py-3 font-semibold">Accredited</th>
                <th className="px-4 py-3 font-semibold">Complaints (3yr)</th>
              </tr>
            </thead>
            <tbody>
              {BBB_RECORDS.map((r) => (
                <tr key={r.name} className="border-b border-line last:border-b-0">
                  <td className="px-4 py-3 font-semibold text-navy">
                    {r.slug ? (
                      <Link href={`/reviews/${r.slug}`} className="hover:underline">
                        {r.name}
                      </Link>
                    ) : (
                      r.name
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {r.hasProfile ? r.grade : "No profile"}
                  </td>
                  <td className="px-4 py-3">
                    {r.accreditation === "accredited"
                      ? `Yes${r.accreditedSince ? ` (since ${r.accreditedSince})` : ""}`
                      : "No"}
                  </td>
                  <td className="px-4 py-3 tabular-nums">
                    {r.complaints3yr ?? "Not published"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-12 space-y-4">
        <h2 className="font-display text-2xl font-semibold text-navy">
          Methodology
        </h2>
        <p className="text-ink-soft leading-relaxed">
          Every figure was read directly from the firm&rsquo;s live profile on
          bbb.org (or BBB Canada where applicable). BBB data changes over time;
          this study reflects point-in-time snapshots, most recently updated
          alongside our review cycle. We do not estimate or fabricate any
          figure: where a firm publishes no profile or metric, we report
          exactly that. Firm selection covers every company reviewed in our{" "}
          <Link href="/" className="text-navy underline">
            2026 MCA settlement rankings
          </Link>
          . Our editorial standards and scoring system are documented on the{" "}
          <Link href="/methodology" className="text-navy underline">
            methodology page
          </Link>
          . We accept no compensation from any firm covered.
        </p>
        <p className="text-ink-soft leading-relaxed">
          To cite this study: &ldquo;State of MCA Settlement 2026, MCA
          Settlement Reviews&rdquo; with a link to this page. For questions or
          the underlying data, use the contact details on our about page.
        </p>
      </section>
    </article>
  );
}
