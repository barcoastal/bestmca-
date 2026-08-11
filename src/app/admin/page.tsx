"use client";

import { useEffect, useState } from "react";

type Settings = {
  ctaBaseUrl: string;
  ctaExtraParams: string;
  headHtml: string;
};

export default function AdminPage() {
  const [key, setKey] = useState("");
  const [authed, setAuthed] = useState(false);
  const [settings, setSettings] = useState<Settings | null>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const saved = sessionStorage.getItem("admin-key");
    if (saved) {
      setKey(saved);
      login(saved);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function login(k: string) {
    setStatus("");
    const r = await fetch("/api/admin/settings", {
      headers: { "x-admin-key": k },
    });
    if (r.ok) {
      setSettings(await r.json());
      setAuthed(true);
      sessionStorage.setItem("admin-key", k);
    } else {
      setStatus("Wrong password.");
    }
  }

  async function save(patch: Partial<Settings>) {
    setStatus("Saving...");
    const r = await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "x-admin-key": key, "Content-Type": "application/json" },
      body: JSON.stringify(patch),
    });
    if (r.ok) {
      setSettings(await r.json());
      setStatus("Saved.");
    } else {
      const e = await r.json().catch(() => ({}));
      setStatus("Error: " + (e.error || r.status));
    }
  }

  if (!authed) {
    return (
      <div className="mx-auto max-w-sm px-5 py-24">
        <h1 className="font-display text-2xl font-semibold text-navy">
          Admin login
        </h1>
        <input
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && login(key)}
          placeholder="Password"
          className="mt-5 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm"
        />
        <button
          onClick={() => login(key)}
          className="mt-3 w-full rounded-xl bg-navy px-4 py-3 text-sm font-semibold text-white hover:bg-navy-deep transition-colors"
        >
          Sign in
        </button>
        {status && <p className="mt-3 text-sm text-bad">{status}</p>}
      </div>
    );
  }

  if (!settings) return null;

  return (
    <div className="mx-auto max-w-2xl px-5 py-14 space-y-12">
      <header>
        <h1 className="font-display text-3xl font-semibold text-navy">
          Site admin
        </h1>
        <p className="mt-2 text-sm text-ink-muted">
          Changes apply instantly, no rebuild. {status && <b>{status}</b>}
        </p>
      </header>

      <section className="rounded-2xl border border-line bg-white p-6">
        <h2 className="font-display text-xl font-semibold text-navy">
          CTA destination
        </h2>
        <p className="mt-1 text-xs text-ink-muted">
          Every CTA button routes through /go and redirects here. UTMs
          (source, medium, campaign) are appended automatically.
        </p>
        <label className="mt-4 block text-xs font-semibold text-ink-subtle uppercase tracking-wider">
          Base URL
        </label>
        <input
          value={settings.ctaBaseUrl}
          onChange={(e) =>
            setSettings({ ...settings, ctaBaseUrl: e.target.value })
          }
          className="mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm font-mono"
        />
        <label className="mt-4 block text-xs font-semibold text-ink-subtle uppercase tracking-wider">
          Extra query params (optional, e.g. ref=summer&amp;promo=x)
        </label>
        <input
          value={settings.ctaExtraParams}
          onChange={(e) =>
            setSettings({ ...settings, ctaExtraParams: e.target.value })
          }
          className="mt-1 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm font-mono"
        />
        <button
          onClick={() =>
            save({
              ctaBaseUrl: settings.ctaBaseUrl,
              ctaExtraParams: settings.ctaExtraParams,
            })
          }
          className="mt-4 rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-deep transition-colors"
        >
          Save CTA settings
        </button>
        <p className="mt-3 text-xs text-ink-subtle">
          Test:{" "}
          <a href="/go?c=admin-test" target="_blank" className="underline">
            /go?c=admin-test
          </a>
        </p>
      </section>

      <section className="rounded-2xl border border-line bg-white p-6">
        <h2 className="font-display text-xl font-semibold text-navy">
          Custom scripts
        </h2>
        <p className="mt-1 text-xs text-ink-muted">
          Paste script/pixel tags (GA4, Meta pixel, etc.). Injected on every
          page within ~5 minutes (cached), on next load.
        </p>
        <textarea
          value={settings.headHtml}
          onChange={(e) =>
            setSettings({ ...settings, headHtml: e.target.value })
          }
          rows={10}
          spellCheck={false}
          placeholder={'<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXX"></script>\n<script>...</script>'}
          className="mt-3 w-full rounded-xl border border-line bg-paper-soft px-4 py-3 text-xs font-mono leading-relaxed"
        />
        <button
          onClick={() => save({ headHtml: settings.headHtml })}
          className="mt-4 rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-deep transition-colors"
        >
          Save scripts
        </button>
      </section>
    </div>
  );
}
