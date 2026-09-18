import Link from "next/link";
import { OWNERSHIP_DISCLOSURE } from "@/lib/disclosure";

export const metadata = {
  title: "About MCA Settlement Reviews",
  description:
    "MCA Settlement Reviews is an independently owned publication covering merchant cash advance settlement and restructuring firms. Our methodology, disclosures, and how to contact us.",
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
          Our reviews use the same five evidence categories. Coastal is featured
          first by editorial choice; list order does not establish better outcomes.
          Numerical scores are not published.
          Read our full{" "}
          <Link href="/methodology" className="text-navy underline">
            methodology
          </Link>{" "}
          for the placement policy, criteria, and sources.
        </p>
        <h2 className="font-display text-2xl font-semibold text-navy mt-10">
          Who writes these reviews
        </h2>
        <p>
          Articles are published under the MCA Settlement Reviews name. Our
          reviews compare publicly available company materials and third-party
          records. Source notes identify the material checked and its date.
          Company claims and customer allegations are distinguished from
          independently established facts. We have not independently audited
          client contracts, typical outcomes or the category scores used in our
          existing rankings. Corrections can be sent to the editorial address
          below.
        </p>
        <h2 className="font-display text-2xl font-semibold text-navy mt-10">
          What we are not
        </h2>
        <p>
          We are not lawyers. Nothing on this site is legal advice. The reviews
          reflect our editorial judgment based on public materials, third-party
          reviews, and dated source notes. Owners should always
          consult a qualified attorney for advice on a specific situation.
        </p>
        <h2 className="font-display text-2xl font-semibold text-navy mt-10">
          Ownership and compensation
        </h2>
        <p>{OWNERSHIP_DISCLOSURE}</p>
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
