export type ImageItem = {
  key: string;
  src: string;
  alt: string;
  caption: string;
};

export const imageRegistry: Record<string, ImageItem> = {
  "hero-tournament-banner": {
    key: "hero-tournament-banner",
    src: "/images/hero-tournament-banner.jpg",
    alt: "Ustawi Network football tournament launch with participants on the field.",
    caption: "Football tournament launch - #KickOffForHope",
  },
  "graduation-certificate-handshake": {
    key: "graduation-certificate-handshake",
    src: "/images/graduation-certificate-handshake.jpg",
    alt: "Certificate presentation during programme graduation at a correctional facility.",
    caption: "Certificate presentation at programme graduation",
  },
  "graduation-certificate-group": {
    key: "graduation-certificate-group",
    src: "/images/graduation-certificate-group.jpg",
    alt: "Graduate receiving a certificate with Ustawi Network and correctional partners.",
    caption: "Certificate of achievement ceremony",
  },
  "graduation-certificate-presenter": {
    key: "graduation-certificate-presenter",
    src: "/images/graduation-certificate-presenter.jpg",
    alt: "Structured graduation event recognizing completion of rehabilitation training.",
    caption: "Rehabilitation programme recognition",
  },
  "tournament-medals": {
    key: "tournament-medals",
    src: "/images/tournament-medals.jpg",
    alt: "Medal awarding moment during Nakuru Main Prison tournament.",
    caption: "Medal presentation at Nakuru Main Prison",
  },
  "tournament-trophy-winners": {
    key: "tournament-trophy-winners",
    src: "/images/tournament-trophy-winners.jpg",
    alt: "Tournament winners posing with trophy and Kenya Prisons Service partners.",
    caption: "Tournament winners with partners",
  },
  "tournament-team-group": {
    key: "tournament-team-group",
    src: "/images/tournament-team-group.jpg",
    alt: "Group photo during the Ustawi Network football tournament.",
    caption: "Team photo from football tournament",
  },
  "launch-cake-cutting": {
    key: "launch-cake-cutting",
    src: "/images/launch-cake-cutting.jpg",
    alt: "Joint cake-cutting at Ustawi Network launch with Kenya Prisons Service leaders.",
    caption: "Official launch celebration",
  },
  "launch-cake-kenya-prisons": {
    key: "launch-cake-kenya-prisons",
    src: "/images/launch-cake-kenya-prisons.jpg",
    alt: "Launch cake featuring Ustawi Network and Kenya Prisons Service symbols.",
    caption: "Towards Inclusive Societies launch moment",
  },
  "launch-cake-celebration": {
    key: "launch-cake-celebration",
    src: "/images/launch-cake-celebration.jpg",
    alt: "Community celebration moment during programme launch activities.",
    caption: "Community celebration at programme launch",
  },
  "nakuru-tournament-field": {
    key: "nakuru-tournament-field",
    src: "/images/nakuru-tournament-field.jpg",
    alt: "UN Football Tournament field scene with participants and banner.",
    caption: "Nakuru football tournament field engagement",
  },
  "official-community-engagement": {
    key: "official-community-engagement",
    src: "/images/official-community-engagement.jpg",
    alt: "Kenya Prisons leadership engaging with participants through sport.",
    caption: "Leadership engagement through sport",
  },
  "sotp-workshop-session": {
    key: "sotp-workshop-session",
    src: "/images/sotp-workshop-session.jpg",
    alt: "Facilitated psychosocial workshop session with participants in correctional setting.",
    caption: "SOTP workshop session",
  },
};

export const impactGallery = [
  "tournament-medals",
  "tournament-trophy-winners",
  "tournament-team-group",
  "nakuru-tournament-field",
  "graduation-certificate-group",
  "graduation-certificate-handshake",
  "launch-cake-cutting",
  "launch-cake-kenya-prisons",
  "launch-cake-celebration",
  "official-community-engagement",
];
