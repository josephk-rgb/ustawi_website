export type ProgramStatus = "Active" | "In Development" | "Planned";

export type Program = {
  title: string;
  shortTitle: string;
  status: ProgramStatus;
  summary: string;
  details: string[];
  imageKey?: string;
};

export const programs: Program[] = [
  {
    title: "Sex Offender Treatment Programme (SOTP)",
    shortTitle: "SOTP",
    status: "Active",
    imageKey: "sotp-workshop-session",
    summary:
      "Kenya's structured rehabilitation programme for adult men convicted of sexual offences — combining cognitive behavioural therapy, trauma-informed care, accountability, and reintegration preparation.",
    details: [
      "5 maximum security prisons",
      "288 hours over 8 months",
      "200+ graduated · 160 in training",
    ],
  },
  {
    title: "Youth Sex Offender Rehabilitation Program",
    shortTitle: "Youth SORP",
    status: "In Development",
    imageKey: "graduation-certificate-presenter",
    summary:
      "Age-appropriate rehabilitation for young offenders, building on the SOTP evidence base with adapted modules for developmental needs.",
    details: [
      "Adolescent and young adult offenders",
      "Developmentally sensitive approach",
      "Pilot funding partnerships welcome",
    ],
  },
  {
    title: "Violent Offenders Rehabilitation Program",
    shortTitle: "Violent Offenders",
    status: "Planned",
    imageKey: "official-community-engagement",
    summary:
      "Structured programme addressing violent offending patterns, emotional regulation, and restorative accountability.",
    details: [
      "Harm recognition and pro-social identity",
      "Restorative justice outcomes",
      "Collaboration opportunities open",
    ],
  },
];

export const statusStyles: Record<ProgramStatus, string> = {
  Active: "bg-[var(--color-primary)] text-[var(--color-secondary)]",
  "In Development": "border border-[var(--color-secondary)]/20 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
  Planned: "border border-[var(--color-neutral)] bg-white text-[var(--color-text-body)]",
};
