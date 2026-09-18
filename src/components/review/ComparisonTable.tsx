import Link from "next/link";
import { RANKED, type Review } from "@/data/reviews";
import { BrandLogo } from "./BrandLogo";

type Props = { reviews?: Review[]; highlightSlug?: string };
export function ComparisonTable({ reviews = RANKED, highlightSlug = "coastal-debt-resolve" }: Props) {
  return <div className="space-y-4">
    <p className="text-sm text-ink-soft">Coastal is featured first by editorial choice. Display order does not establish better outcomes; numerical ratings are not published. Compare dated sources and written terms.</p>
    {reviews.map(r => <article key={r.slug} className={`rounded-2xl border p-5 ${r.slug === highlightSlug ? "border-gold bg-gold-soft/30" : "border-line bg-white"}`}>
      <div className="flex items-center gap-3"><span className="text-lg font-semibold text-navy">{r.rank}.</span><BrandLogo review={r} size={44}/><h3 className="font-display text-xl font-semibold text-navy"><Link href={`/reviews/${r.slug}`}>{r.name}</Link></h3></div>
      <p className="mt-3 text-sm text-ink-soft">{r.oneLineVerdict}</p>
      <dl className="mt-4 grid gap-4 md:grid-cols-2 text-sm">
        <div><dt className="font-semibold">BBB record</dt><dd>{r.bbb}</dd></div>
        <div><dt className="font-semibold">Service scope</dt><dd>{r.specialties}</dd></div>
      </dl>
      <details className="mt-4 border-t border-line pt-3"><summary className="cursor-pointer text-sm font-semibold text-navy">Fees, limitations and sources</summary>
        <p className="mt-3 text-sm text-ink-soft">{r.pricing}</p>
        <p className="mt-3 text-xs text-ink-muted">{r.ratingNote}</p>
        <ul className="mt-3 space-y-2 text-sm">{r.sources?.map(source => <li key={source.url}><a className="text-navy underline" href={source.url}>{source.label}</a><p className="text-ink-soft">{source.note}</p></li>)}</ul>
      </details>
      <Link className="mt-4 inline-block text-sm font-semibold text-navy underline" href={`/reviews/${r.slug}`}>Read the full {r.shortName} review →</Link>
    </article>)}
  </div>;
}
