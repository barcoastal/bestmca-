type Props = {
  concerns: { quote: string; source: string }[];
};

export function ConcernsList({ concerns }: Props) {
  return (
    <section className="my-10 rounded-2xl border border-warn/30 bg-warn-soft/30 p-6">
      <h3 className="font-display text-xl font-semibold text-warn">
        Concerns and reported complaints
      </h3>
      <p className="mt-2 text-sm text-ink-muted">
        Sourced from public review platforms, regulatory records, and industry
        commentary at the time of review.
      </p>
      <ul className="mt-5 space-y-4">
        {concerns.map((c, i) => (
          <li key={i} className="border-l-2 border-warn/40 pl-4">
            <p className="text-sm text-ink-soft leading-relaxed">{c.quote}</p>
            <p className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-ink-subtle">
              Source: {c.source}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
