export type ToolSlug =
  | "glossary"
  | "donation-impact"
  | "family-reintegration-checklist"
  | "csr-partnership-planner";

export type Tool = {
  slug: ToolSlug;
  title: string;
  eyebrow: string;
  metaDescription: string;
  excerpt: string;
  headerImageKey: string;
  relatedGuideSlugs: string[];
  faq: { question: string; answer: string }[];
};

export const tools: Tool[] = [
  {
    slug: "glossary",
    title: "Rehabilitation glossary",
    eyebrow: "Language",
    metaDescription:
      "Searchable definitions for SOTP, desistance, reintegration, restorative justice, CBT, Ubuntu, and other prison rehabilitation terms used in Kenya.",
    excerpt:
      "Shared language for families, officers, donors, and partners — from SOTP and desistance to Ubuntu and Training-of-Trainers.",
    headerImageKey: "sotp-workshop-session",
    relatedGuideSlugs: [
      "what-is-sotp-kenya",
      "cbt-trauma-informed-care-corrections",
      "restorative-justice-kenya",
    ],
    faq: [
      {
        question: "Is this a legal or clinical dictionary?",
        answer:
          "No. Definitions are educational, written for Ustawi's Kenyan prison-rehabilitation context. They are not legal, medical, or diagnostic advice.",
      },
      {
        question: "Can I suggest a term?",
        answer:
          "Yes. Contact Ustawi Network if a word you keep meeting in this work is missing.",
      },
    ],
  },
  {
    slug: "donation-impact",
    title: "Donation impact calculator",
    eyebrow: "Give",
    metaDescription:
      "Estimate how a gift in Kenyan shillings could support SOTP programme hours, facilitator training, and rehabilitation cycles. Educational figures only.",
    excerpt:
      "Enter an amount in KES and see an educational estimate of programme hours and facilitator training your gift could support.",
    headerImageKey: "graduation-certificate-group",
    relatedGuideSlugs: ["what-is-sotp-kenya", "csr-prison-rehabilitation"],
    faq: [
      {
        question: "Are these official programme prices?",
        answer:
          "No. Rates are illustrative estimates based on a 288-hour, eight-month SOTP cycle. Confirm any gift with Ustawi before you treat a figure as a quote.",
      },
    ],
  },
  {
    slug: "family-reintegration-checklist",
    title: "Family reintegration checklist",
    eyebrow: "Families",
    metaDescription:
      "An interactive checklist for Kenyan families preparing to receive someone home from prison: documents, housing, work, health, and boundaries.",
    excerpt:
      "Tick off documents, housing, conversations, work, and support. Progress stays on this device so you can return to it.",
    headerImageKey: "launch-cake-celebration",
    relatedGuideSlugs: [
      "family-reintegration-after-prison",
      "prison-rehabilitation-kenya",
    ],
    faq: [
      {
        question: "Does this checklist store my data on Ustawi's servers?",
        answer:
          "No. Ticks are saved in this browser only (localStorage). Clearing site data will reset the list.",
      },
      {
        question: "Is this a court or probation form?",
        answer:
          "No. It is a family planning aid, not an official document and not legal advice.",
      },
    ],
  },
  {
    slug: "csr-partnership-planner",
    title: "CSR partnership planner",
    eyebrow: "Corporates",
    metaDescription:
      "Sketch a CSR partnership with Ustawi Network: budget, vocational placements, and volunteer hours, then email the outline to the team.",
    excerpt:
      "Enter a budget, placements, and volunteer hours to draft a one-page partnership sketch you can send to Ustawi.",
    headerImageKey: "nakuru-tournament-field",
    relatedGuideSlugs: [
      "csr-prison-rehabilitation",
      "prison-rehabilitation-kenya",
    ],
    faq: [
      {
        question: "Does submitting this form book a partnership?",
        answer:
          "No. It helps you draft an outline. Emailing the sketch starts a conversation; it is not a contract.",
      },
    ],
  },
];

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

export const donationImpactConfig = {
  costPerProgrammeHourKes: 2500,
  hoursPerFullCycle: 288,
  monthsPerFullCycle: 8,
  facilitatorTrainingHours: 40,
};

export type ChecklistGroup = {
  id: string;
  title: string;
  items: { id: string; label: string }[];
};

export const checklistGroups: ChecklistGroup[] = [
  {
    id: "documents",
    title: "Documents and identity",
    items: [
      { id: "id", label: "National ID or replacement plan is in place" },
      { id: "release-papers", label: "Release or discharge paperwork is collected" },
      { id: "contacts", label: "Key phone numbers are written down (family, officer, clinic)" },
    ],
  },
  {
    id: "housing",
    title: "Housing and family",
    items: [
      { id: "host", label: "A host household and length of stay are agreed" },
      { id: "rules", label: "House rules are spoken aloud (visitors, alcohol, curfew)" },
      { id: "safety", label: "If someone harmed lives in the home, a safer plan is in place" },
      { id: "first72", label: "The first 72 hours (bed, food, who meets at the gate) are planned" },
    ],
  },
  {
    id: "work",
    title: "Work and daily routine",
    items: [
      { id: "income", label: "A short-term income or support plan exists" },
      { id: "routine", label: "Idle time has a daily structure even before a job" },
      { id: "old-peers", label: "A plan exists for old peers and high-risk places" },
    ],
  },
  {
    id: "health",
    title: "Health and support",
    items: [
      { id: "clinic", label: "A clinic or counsellor to contact is identified" },
      { id: "substances", label: "Alcohol and other substances have a clear household rule" },
      { id: "faith", label: "Faith or community support is arranged if it is wanted and safe" },
    ],
  },
];
