export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
};

export const posts: BlogPost[] = [
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
