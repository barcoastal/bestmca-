import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper-soft mt-24">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-lg text-navy font-semibold">
            MCA Settlement Reviews
          </div>
          <p className="mt-3 text-sm text-ink-muted leading-relaxed max-w-md">
            Independent reviews and rankings of merchant cash advance settlement
            and restructuring companies. We rate firms across transparency,
            results, communication, cost, and litigation defense.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-ink-subtle font-medium">
            Reviews
          </div>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <Link
                href="/best-mca-settlement-companies-2026"
                className="hover:text-navy"
              >
                Best Companies 2026
              </Link>
            </li>
            <li>
              <Link
                href="/reviews/coastal-debt-resolve"
                className="hover:text-navy"
              >
                #1 Coastal Debt Resolve
              </Link>
            </li>
            <li>
              <Link href="/methodology" className="hover:text-navy">
                Our Methodology
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-ink-subtle font-medium">
            Resources
          </div>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <Link
                href="/guides/what-is-mca-settlement"
                className="hover:text-navy"
              >
                What is MCA Settlement?
              </Link>
            </li>
            <li>
              <Link
                href="/guides/mca-debt-relief-red-flags"
                className="hover:text-navy"
              >
                Red Flags to Avoid
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-navy">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-ink-subtle">
          <p className="max-w-3xl leading-relaxed">
            <span className="font-medium text-ink-muted">Disclosure:</span> We
            do not accept compensation, referral fees, affiliate payments, or
            sponsorships from any company featured on this site. This site
            exists solely to publish real, sourced reviews of MCA settlement
            firms based on the criteria explained on our{" "}
            <Link
              href="/methodology"
              className="underline underline-offset-2 hover:text-navy"
            >
              methodology page
            </Link>
            .
          </p>
          <p>© {new Date().getFullYear()} MCA Settlement Reviews</p>
        </div>
      </div>
    </footer>
  );
}
