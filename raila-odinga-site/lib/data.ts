export type TimelineItem = {
  title: string;
  cardTitle?: string;
  cardSubtitle?: string;
  cardDetailedText?: string;
};

export const timelineItems: TimelineItem[] = [
  {
    title: "1945",
    cardTitle: "Early Life",
    cardSubtitle: "Born 7 Jan 1945 in Maseno, Kenya",
    cardDetailedText:
      "Raila Amolo Odinga, son of Jaramogi Oginga Odinga, would become a central figure in Kenya's democratic journey.",
  },
  {
    title: "1982–1989",
    cardTitle: "Detentions",
    cardSubtitle: "Struggle for multiparty democracy",
    cardDetailedText:
      "Detained for his role in the pro-democracy movement, he became a symbol of resilience and reform.",
  },
  {
    title: "2008–2013",
    cardTitle: "Prime Minister",
    cardSubtitle: "Grand Coalition Government",
    cardDetailedText:
      "Served as Kenya's Prime Minister, leading reform efforts and national reconciliation.",
  },
  {
    title: "2018–2023",
    cardTitle: "AU Envoy",
    cardSubtitle: "Infrastructure Development",
    cardDetailedText:
      "African Union High Representative for Infrastructure Development, championing regional connectivity.",
  },
];

export type VisionItem = { key: string; title: string; description: string; href?: string };

export const visionItems: VisionItem[] = [
  { key: "economy", title: "Economy", description: "Inclusive growth, job creation, industrial transformation." },
  { key: "education", title: "Education", description: "Quality education access from early years to university." },
  { key: "health", title: "Health", description: "Universal healthcare and resilient public health systems." },
  { key: "infrastructure", title: "Infrastructure", description: "Modern roads, rail, energy, and digital connectivity." },
  { key: "unity", title: "Unity", description: "A united Kenya built on justice and equity." },
];

export type MediaItem = { id: string; type: "image" | "video"; src: string; alt: string };

export const mediaItems: MediaItem[] = [
  { id: "1", type: "image", src: "/images/gallery-1.jpg", alt: "Community event" },
  { id: "2", type: "image", src: "/images/gallery-2.jpg", alt: "Speaking engagement" },
  { id: "3", type: "video", src: "/images/sample-video.mp4", alt: "Speech highlight" },
];

export type NewsItem = { id: string; title: string; excerpt: string; image: string; date: string; href: string };

export const newsItems: NewsItem[] = [
  {
    id: "n1",
    title: "Raila Odinga addresses national unity forum",
    excerpt: "Keynote speech highlighting inclusive governance and economic empowerment.",
    image: "/images/news-1.jpg",
    date: new Date().toISOString(),
    href: "#",
  },
  {
    id: "n2",
    title: "Infrastructure roundtable with regional leaders",
    excerpt: "Discussed cross-border rail and energy corridor priorities.",
    image: "/images/news-2.jpg",
    date: new Date().toISOString(),
    href: "#",
  },
];

export type Project = { id: string; title: string; description: string; href?: string; canDonate?: boolean };

export const projects: Project[] = [
  {
    id: "p1",
    title: "Youth Empowerment Initiative",
    description: "Training and mentorship programs for youth entrepreneurship and skills.",
    canDonate: true,
  },
  {
    id: "p2",
    title: "Healthcare Access Fund",
    description: "Supporting clinics and essential medicines in underserved areas.",
  },
];
