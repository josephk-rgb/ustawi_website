export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
  showMedia?: boolean;
  headerImageKey?: string;
};

export const posts: BlogPost[] = [
  {
    slug: "sotp-kamiti-one-year-milestone",
    title: "SOTP Graduation and One-Year Milestone at Kamiti Main Prison",
    date: "March 2026",
    excerpt:
      "More than 90 inmates graduated as Ustawi Network and the Kenya Prisons Service marked one year of SOTP at Kamiti Main Prison.",
    headerImageKey: "graduation-certificate-group",
    showMedia: true,
    content: [
      "In March 2026, Ustawi Network joined the Kenya Prisons Service in marking a significant milestone for the Sex Offender Treatment Programme (SOTP) at Kamiti Main Prison. The event celebrated both the graduation of more than 90 inmates and one year since the programme was launched at Kamiti Main.",
      "Hosted at Kamiti Main Prison, with Naivasha Maximum and Kisumu Maximum Prisons joining virtually, the graduation highlighted the growing reach of the SOTP and the value of structured rehabilitation within correctional settings.",
      "The programme supports convicted sexual offenders to take responsibility for harmful behaviour, build self-awareness, strengthen emotional regulation, and prepare for safer community reintegration. The milestone affirmed the importance of continued investment in rehabilitation, accountability, and public safety.",
      "With over 200 men graduated across programme sites and 160 currently in active training at five maximum security prisons, this graduation represents both individual transformation and the expanding footprint of evidence-based rehabilitation in Kenya.",
    ],
  },
  {
    slug: "towards-inclusive-societies-2025",
    title: "Issue #1: Towards Inclusive Societies - Our 2025 Journey",
    date: "December 2025",
    excerpt:
      "From a 20-man pilot at Kamiti Medium Prison to graduations at Kibos attended by County Commissioners, 2025 proved rehabilitation works.",
    content: [
      "Ustawi Network was launched to fill a gap in Kenya's correctional system: the lack of structured, offence-specific rehabilitation for men convicted of sexual offences.",
      "After a successful Kamiti pilot in 2024, the programme expanded through 2025 to Kamiti Maximum and Nakuru Main Prison, then celebrated a milestone graduation in Kibos Maximum Prison.",
      "At Kibos, 30 participants completed 288 hours over 8 months, while 5 correctional officers completed Training-of-Trainers to sustain delivery.",
      "The results reinforce Ustawi's commitment to accountability with support, rehabilitation with dignity, and safer communities through structured reintegration.",
      "Looking to 2026, Ustawi aims to reach 30 correctional facilities, train 150 facilitators, deepen post-release pathways, and launch the Elderly Inmates Support Programme.",
    ],
  },
];
