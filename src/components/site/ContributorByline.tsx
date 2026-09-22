import Link from "next/link";
import { CONTRIBUTOR_NAME, CONTRIBUTOR_PATH } from "@/lib/contributor";

export function ContributorByline() {
  return (
    <p className="mt-4 text-sm text-ink-muted">
      By <Link href={CONTRIBUTOR_PATH} className="font-semibold text-navy underline underline-offset-2">{CONTRIBUTOR_NAME}</Link>
      <span className="mt-1 block">Research, writing and editorial review · MCA sales background</span>
    </p>
  );
}
