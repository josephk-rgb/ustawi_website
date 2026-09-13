import type { Guide } from "@/lib/guides/types";
import { whatIsSotpKenya } from "@/lib/guides/what-is-sotp-kenya";
import { prisonRehabilitationKenya } from "@/lib/guides/prison-rehabilitation-kenya";
import { familyReintegrationAfterPrison } from "@/lib/guides/family-reintegration-after-prison";
import { restorativeJusticeKenya } from "@/lib/guides/restorative-justice-kenya";
import { csrPrisonRehabilitation } from "@/lib/guides/csr-prison-rehabilitation";
import { cbtTraumaInformedCare } from "@/lib/guides/cbt-trauma-informed-care";

export type { Guide, GuideFaq, GuideSection } from "@/lib/guides/types";

export const guides: Guide[] = [
  whatIsSotpKenya,
  prisonRehabilitationKenya,
  familyReintegrationAfterPrison,
  restorativeJusticeKenya,
  csrPrisonRehabilitation,
  cbtTraumaInformedCare,
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
