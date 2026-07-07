import type { Review } from "@/data/reviews";

// Generates FAQ items for a competitor review page from data we already hold.
// The questions mirror the real branded modifier queries that pull impressions
// in Search Console: "is X legit", "X complaints", "X bbb", "X cost",
// "X vs Coastal". Answers are grounded in the review's own fields, so nothing
// is fabricated.
export function competitorFaqItems(review: Review): { q: string; a: string }[] {
  const { name, shortName, founded, hq, bbb, trustpilot, score, rank, pricing } =
    review;

  const inBusiness =
    founded && /\d{4}/.test(founded) ? ` and has been operating since ${founded}` : "";
  const location = hq && hq !== "United States" ? `, headquartered in ${hq},` : "";

  const complaintsSummary =
    review.concerns && review.concerns[0]
      ? review.concerns[0].quote
      : `Public feedback on ${shortName} is mixed.`;

  return [
    {
      q: `Is ${name} legit?`,
      a: `${name} is a real, operating debt-relief company${location}${inBusiness}, not a nonexistent or fake operation. Its Better Business Bureau standing: ${bbb}. In our independent 2026 review it scored ${score} out of 5 and ranked #${rank}. ${review.oneLineVerdict}`,
    },
    {
      q: `What do ${name} reviews and complaints say?`,
      a: `${complaintsSummary} Our overall read: ${review.oneLineVerdict}`,
    },
    {
      q: `What is ${name}'s BBB rating and Trustpilot score?`,
      a: `On the Better Business Bureau, ${shortName}: ${bbb}.${
        trustpilot ? ` On other review platforms: ${trustpilot}.` : ""
      }`,
    },
    {
      q: `How much does ${name} cost?`,
      a: pricing,
    },
    {
      q: `Is ${name} better than Coastal Debt Resolve?`,
      a: `In our 2026 review of MCA settlement firms, ${shortName} ranked #${rank} with a ${score}/5 score. Coastal Debt Resolve ranked #1 with 4.9/5 for combining attorneys, settlement, and case management under one roof. See our side-by-side comparison of ${shortName} vs Coastal Debt Resolve for the full breakdown.`,
    },
  ];
}
