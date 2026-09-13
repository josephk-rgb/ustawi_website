export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type Guide = {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  category: string;
  headerImageKey: string;
  excerpt: string;
  sections: GuideSection[];
  faq: GuideFaq[];
  relatedGuideSlugs: string[];
  relatedToolSlugs: string[];
};
