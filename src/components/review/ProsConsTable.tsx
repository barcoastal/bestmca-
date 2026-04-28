type Props = {
  pros: string[];
  cons: string[];
};

export function ProsConsTable({ pros, cons }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-win/20 bg-win-soft/40 p-6">
        <div className="flex items-center gap-2 text-win">
          <Check />
          <span className="text-xs uppercase tracking-[0.18em] font-semibold">
            Strengths
          </span>
        </div>
        <ul className="mt-4 space-y-3 text-sm text-ink-soft">
          {pros.map((p, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-win shrink-0" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-bad/20 bg-bad-soft/40 p-6">
        <div className="flex items-center gap-2 text-bad">
          <Cross />
          <span className="text-xs uppercase tracking-[0.18em] font-semibold">
            Drawbacks
          </span>
        </div>
        <ul className="mt-4 space-y-3 text-sm text-ink-soft">
          {cons.map((c, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-bad shrink-0" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4L9 11.6l6.3-6.3a1 1 0 0 1 1.4 0z" />
    </svg>
  );
}

function Cross() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M5.3 5.3a1 1 0 0 1 1.4 0L10 8.6l3.3-3.3a1 1 0 1 1 1.4 1.4L11.4 10l3.3 3.3a1 1 0 0 1-1.4 1.4L10 11.4l-3.3 3.3a1 1 0 0 1-1.4-1.4L8.6 10 5.3 6.7a1 1 0 0 1 0-1.4z" />
    </svg>
  );
}
