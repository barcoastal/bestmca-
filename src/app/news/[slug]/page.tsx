import { ContributorByline } from "@/components/site/ContributorByline";
import { contributorSchema } from "@/lib/contributor";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NEWS, getNewsBySlug } from "@/data/news";
import { CTABanner } from "@/components/review/CTABanner";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { jsonLd } from "@/lib/schema";

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
      modifiedTime: article.updatedAt,
      url: `/news/${article.slug}`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: article.title,
          author: contributorSchema,
          description: article.excerpt,
          datePublished: article.publishedAt,
          dateModified: article.updatedAt,
          mainEntityOfPage: `https://www.mcasettlementreviews.com/news/${article.slug}`,
          publisher: { "@id": "https://www.mcasettlementreviews.com/#organization" },
          citation: article.sources.map((source) => source.url),
        })}
      />
      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <div className="mb-4">
            <Breadcrumbs items={[
              { name: "News", path: "/news" },
              { name: article.title, path: `/news/${article.slug}` },
            ]} />
          </div>
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
          <ContributorByline />
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            {article.excerpt}
          </p>
          {article.updatedAt && <p className="mt-3 text-sm text-ink-muted">Updated <time dateTime={article.updatedAt}>{article.updatedAt}</time></p>}
          {article.correctionNote && <p className="mt-4 rounded-xl border border-line bg-white p-4 text-sm text-ink-soft">{article.correctionNote}</p>}
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
            Sources and original links. Any verification limitations are noted
            in the article above.
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
                    {s.publishedAt ? `Published ${s.publishedAt}` : "See source for publication and update dates"}
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
            body="Read our Coastal Debt Resolve review for dated public sources, service claims, complaints, and the limits of our verification."
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
