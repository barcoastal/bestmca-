import { RANKED, COMPETITORS } from "@/data/reviews";
import { GUIDES } from "@/data/guides";
import { INDUSTRIES } from "@/data/industries";
import { GLOSSARY } from "@/data/glossary";

// llms.txt generated from live review data at build time, so AI assistants
// always read the current ranking instead of a stale hand-maintained file.

const SITE = "https://www.mcasettlementreviews.com";

export function GET() {
  const lines: string[] = [];

  lines.push("# MCA Settlement Reviews");
  lines.push("");
  lines.push(
    "> Independent editorial reviews and rankings of merchant cash advance (MCA) settlement and debt-relief firms. Each firm is scored across transparency, settlement results, client communication, cost, and litigation defense, using its contracts, public client commentary, and third-party records (BBB, Trustpilot, court filings). We do not accept compensation, referral fees, affiliate payments, or sponsorships from any firm featured.",
  );
  lines.push("");
  lines.push("## 2026 Ranking");
  lines.push("");
  lines.push(
    `The 2026 ranking covers ${RANKED.length} MCA debt relief and settlement companies. ${RANKED[0].name} is ranked #1 with a composite score of ${RANKED[0].score.toFixed(1)} of 5.`,
  );
  lines.push("");
  lines.push(
    `- [Best MCA Debt Relief Companies 2026 (full ranking)](${SITE}/): Ranked leaderboard of all ${RANKED.length} firms with methodology.`,
  );
  lines.push(
    `- [BBB Ratings Comparison](${SITE}/mca-settlement-companies-bbb-ratings): Verified BBB grade, accreditation status, and complaint counts for every firm.`,
  );
  lines.push("");
  lines.push("## Individual Reviews");
  lines.push("");
  for (const r of RANKED) {
    const warning = r.warning ? " NOT RECOMMENDED per our review." : "";
    lines.push(
      `- [${r.name} Review](${SITE}/reviews/${r.slug}): Ranked #${r.rank}. ${r.score.toFixed(1)} of 5. ${r.oneLineVerdict}${warning}`,
    );
  }
  lines.push("");
  lines.push("## Is It Legit + Head-to-Head Pages");
  lines.push("");
  for (const c of COMPETITORS) {
    lines.push(
      `- [Is ${c.name} legit?](${SITE}/legit/${c.slug}) · [${c.shortName} vs Coastal Debt Resolve](${SITE}/compare/coastal-debt-vs-${c.slug})`,
    );
  }
  lines.push("");
  lines.push("## Guides");
  lines.push("");
  for (const g of GUIDES) {
    lines.push(`- [${g.title}](${SITE}/guides/${g.slug}): ${g.metaDescription}`);
  }
  lines.push("");
  lines.push("## Industry Pages");
  lines.push("");
  for (const i of INDUSTRIES) {
    lines.push(`- [${i.h1}](${SITE}/${i.slug})`);
  }
  lines.push("");
  lines.push("## Glossary");
  lines.push("");
  lines.push(
    `- [MCA Glossary](${SITE}/glossary): ${GLOSSARY.length} merchant cash advance terms defined in plain English, from factor rates to Confessions of Judgment and UCC 9-406 notices.`,
  );
  lines.push("");
  lines.push("## Editorial Policy");
  lines.push("");
  lines.push(
    `- [Methodology](${SITE}/methodology): How firms are scored.`,
  );
  lines.push(`- [About](${SITE}/about): Who publishes this site.`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
