import Link from "next/link";

export const metadata = {
  title: "About MCA Settlement Reviews",
  description:
    "MCA Settlement Reviews is an independent editorial team that evaluates merchant cash advance settlement and restructuring firms. Our methodology, disclosures, and how to contact us.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="bg-paper">
      <header className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-3xl px-5 py-14">
          <div className="text-[11px] uppercase tracking-[0.24em] font-semibold text-warn">
            About
          </div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-navy leading-tight">
            We help small business owners pick the right MCA settlement firm.
          </h1>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-5 py-12 space-y-6 text-base text-ink-soft leading-relaxed">
        <p>
          MCA Settlement Reviews is an independent editorial site that
          evaluates merchant cash advance settlement, restructuring, and
          litigation defense firms. We exist because the MCA category is full
          of marketing-led firms making claims that owners cannot easily
          verify, and because the wrong firm can cost a business its operating
          account, its UCC position, or its bank line.
        </p>
        <p>
          Every review on this site is built on the same five-category scoring
          system. We do not weigh ad spend, brand size, or paid placement.
          Read our full{" "}
          <Link href="/methodology" className="text-navy underline">
            methodology
          </Link>{" "}
          for the criteria and sources.
        </p>
        <h2 className="font-display text-2xl font-semibold text-navy mt-10">
          What we are not
        </h2>
        <p>
          We are not lawyers. Nothing on this site is legal advice. The reviews
          reflect our editorial judgment based on public materials, third-party
          reviews, and direct interactions with firms. Owners should always
          consult a qualified attorney for advice on a specific situation.
        </p>
        <h2 className="font-display text-2xl font-semibold text-navy mt-10">
          Compensation disclosure
        </h2>
        <p>
          We may receive compensation from firms featured on this site through
          referral arrangements. Compensation does not influence editorial
          ratings. Our top-ranked firm earned its position through the same
          scoring process applied to every other firm on the list. If the
          ratings ever shifted, the order would shift with them.
        </p>
        <h2 className="font-display text-2xl font-semibold text-navy mt-10">
          Contact
        </h2>
        <p>
          Editorial corrections or factual disputes:{" "}
          <a
            href="mailto:editorial@mcasettlementreviews.com"
            className="text-navy underline"
          >
            editorial@mcasettlementreviews.com
          </a>
          .
        </p>
      </section>
    </article>
  );
}
