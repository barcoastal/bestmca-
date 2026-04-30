import Link from "next/link";
import { NEWS } from "@/data/news";

export const metadata = {
  title: "MCA Industry News and Editorial Updates",
  description:
    "Editorial updates and industry news on MCA debt relief and settlement firms, including company announcements, regulatory actions, and review changes.",
  alternates: { canonical: "/news" },
};

export default function NewsIndex() {
  return (
    <article className="bg-paper">
      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-4xl px-5 py-14">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            News & Updates
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            MCA settlement industry news
          </h1>
          <p className="mt-4 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Editorial coverage of company announcements, regulatory actions,
            and review changes across the firms we evaluate.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 py-12 space-y-5">
        {NEWS.map((n) => {
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
              className="block rounded-2xl border border-line bg-white p-7 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-semibold text-warn">
                <span>{n.category}</span>
                <span className="text-ink-subtle">·</span>
                <time className="text-ink-subtle" dateTime={n.publishedAt}>
                  {date}
                </time>
              </div>
              <h2 className="mt-3 font-display text-2xl font-semibold text-navy leading-tight">
                {n.title}
              </h2>
              <p className="mt-3 text-ink-soft leading-relaxed">{n.excerpt}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-navy">
                Read article →
              </span>
            </Link>
          );
        })}
      </section>
    </article>
  );
}
