export type News = {
  id: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  url: string;
};

export function getNews(): News[] {
  return [
    {
      id: "1",
      title: "Community Development Forum in Kisumu",
      summary: "Raila Odinga meets local leaders to discuss community-driven development initiatives.",
      date: new Date().toISOString(),
      image: "/images/gallery-1.svg",
      url: "#",
    },
    {
      id: "2",
      title: "Youth Empowerment Program Launch",
      summary: "New program targets digital skills and entrepreneurship for youth.",
      date: new Date(Date.now() - 86400000).toISOString(),
      image: "/images/gallery-2.svg",
      url: "#",
    },
    {
      id: "3",
      title: "Infrastructure Roundtable",
      summary: "Regional stakeholders gather to coordinate investments in transport and energy.",
      date: new Date(Date.now() - 2 * 86400000).toISOString(),
      image: "/images/gallery-3.svg",
      url: "#",
    }
  ];
}
