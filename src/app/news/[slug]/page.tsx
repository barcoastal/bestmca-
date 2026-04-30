import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NEWS, getNewsBySlug } from "@/data/news";
import { CTABanner } from "@/components/review/CTABanner";

export const dynamicParams = false;

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.publishedAt,
    },
    alternates: { canonical: `/news/${article.slug}` },
  };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) notFound();

  const date = new Date(article.publishedAt + "T00:00:00Z").toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" },
  );

  return (
    <article className="bg-paper">
      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-warn">
            <Link href="/news" className="hover:text-navy">
              News
            </Link>
            <span className="text-ink-subtle">·</span>
            <span className="text-ink-subtle">{article.category}</span>
            <span className="text-ink-subtle">·</span>
            <time className="text-ink-subtle" dateTime={article.publishedAt}>
              {date}
            </time>
          </div>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-navy leading-[1.1]">
            {article.title}
          </h1>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-5 py-12 space-y-6">
        {article.body.map((p, i) => {
          const showPullQuote = i === 3 && article.pullQuote;
          return (
            <div key={i}>
              <p className="text-base text-ink-soft leading-relaxed">{p}</p>
              {showPullQuote && (
                <figure className="my-10 border-l-4 border-gold pl-6">
                  <blockquote className="font-display text-2xl text-navy leading-snug">
                    &ldquo;{article.pullQuote!.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-sm text-ink-muted">
                    {article.pullQuote!.attribution}
                  </figcaption>
                </figure>
              )}
            </div>
          );
        })}
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-12">
        <div className="rounded-2xl border border-line bg-white p-6">
          <h2 className="font-display text-lg font-semibold text-navy">
            Sources
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Original announcement and third-party coverage referenced in this
            article.
          </p>
          <ul className="mt-4 space-y-3">
            {article.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-line bg-paper-soft p-4 hover:bg-paper transition-colors"
                >
                  <div className="text-xs uppercase tracking-[0.16em] font-semibold text-warn">
                    {s.publication}
                  </div>
                  <div className="mt-1.5 text-sm text-navy font-medium break-words">
                    {s.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </div>
                  <div className="mt-1 text-[11px] text-ink-subtle">
                    Published {s.publishedAt}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {article.relatedFirm === "Coastal Debt Resolve" && (
        <div className="mx-auto max-w-3xl px-5 pb-16">
          <CTABanner
            campaign={`news-${article.slug}`}
            heading="Read our full Coastal Debt Resolve review"
            body="See the complete 2026 evaluation of Coastal Debt Resolve, including pricing, process, attorney capability, and 800+ verified client reviews."
            buttonLabel="Get a free MCA review"
          />
          <Link
            href="/reviews/coastal-debt-resolve"
            className="mt-4 inline-flex items-center text-sm font-semibold text-navy hover:underline"
          >
            View the Coastal Debt Resolve review →
          </Link>
        </div>
      )}
    </article>
  );
}
