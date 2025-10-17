"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  url: string;
}

export default function NewsFeed() {
  const [items, setItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/news", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load news");
        const data = (await res.json()) as { news: NewsItem[] };
        setItems(data.news);
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, []);

  return (
    <section id="news" className="section bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((n) => (
            <article key={n.id} className="rounded-xl border border-black/5 overflow-hidden shadow-sm bg-white">
              <Image src={n.image} alt={n.title} width={640} height={360} className="w-full h-44 object-cover" />
              <div className="p-4">
                <time className="text-xs text-textDark/60">{new Date(n.date).toLocaleDateString()}</time>
                <h3 className="mt-1 font-semibold">{n.title}</h3>
                <p className="mt-1 text-sm text-textDark/80 line-clamp-3">{n.summary}</p>
                <a href={n.url} className="mt-3 inline-block button-secondary">Read More</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
