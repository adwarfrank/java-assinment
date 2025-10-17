export type TimelineItem = {
  title: string;
  cardTitle: string;
  cardSubtitle?: string;
  cardDetailedText?: string;
  media?: { type: string; source: { url: string } };
};

export const timeline: TimelineItem[] = [
  {
    title: "1945",
    cardTitle: "Early Life",
    cardSubtitle: "Born in Maseno, Kenya",
    cardDetailedText: "Raila Amolo Odinga was born on 7 January 1945, son of Jaramogi Oginga Odinga.",
  },
  {
    title: "1960s–1970s",
    cardTitle: "Education & Career",
    cardDetailedText: "Studied in East Germany; later founded East African Spectre.",
  },
  {
    title: "1982–1989",
    cardTitle: "Detentions",
    cardDetailedText: "Endured detentions for pro-democracy activism during Kenya's push for multiparty democracy.",
  },
  {
    title: "2008–2013",
    cardTitle: "Prime Minister",
    cardDetailedText: "Served as the 2nd Prime Minister of Kenya in the Grand Coalition Government.",
  },
  {
    title: "2018–2023",
    cardTitle: "AU Envoy",
    cardDetailedText: "Advanced infrastructure and development initiatives across Africa as AU High Representative.",
  },
];

export const vision = [
  {
    key: "economy",
    title: "Economy",
    description: "Inclusive growth, jobs for youth, support for SMEs and innovation.",
  },
  { key: "education", title: "Education", description: "Quality, accessible education; skills for the future." },
  { key: "health", title: "Health", description: "Universal access to affordable, quality healthcare." },
  { key: "infrastructure", title: "Infrastructure", description: "Reliable roads, energy, water, and digital connectivity." },
  { key: "unity", title: "Unity", description: "National cohesion, equity, and accountable governance." },
] as const;
