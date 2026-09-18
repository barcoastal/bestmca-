import type { Review } from "@/data/reviews";
export function competitorFaqItems(review: Review): { q: string; a: string }[] {
  return [
    { q: `What does ${review.name} offer?`, a: review.oneLineVerdict },
    { q: "What do the public records say?", a: `${review.bbb}. ${review.trustpilot}. Read the dated source notes and linked records; complaints are allegations, not court findings.` },
    { q: `How much does ${review.name} cost?`, a: review.pricing },
    { q: "Why is there no numerical editorial score?", a: review.ratingNote || "The category assessments have not been independently substantiated. Compare the dated sources and written service terms." },
  ];
}
