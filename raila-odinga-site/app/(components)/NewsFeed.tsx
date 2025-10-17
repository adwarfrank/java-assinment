"use client";

import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type ApiResponse = { items: { id: string; title: string; excerpt: string; image: string; date: string; href: string }[] };

export default function NewsFeed() {
  const { data } = useSWR<ApiResponse>("/api/news", fetcher, { revalidateOnFocus: false });
  const items = data?.items ?? [];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((n) => (
        <article key={n.id} className="rounded-xl border border-black/5 bg-white overflow-hidden shadow-sm">
          <div className="relative h-48">
            <Image src={n.image} alt={n.title} fill className="object-cover" />
          </div>
          <div className="p-5">
            <h3 className="font-heading text-lg text-[color:var(--color-ink)]">{n.title}</h3>
            <p className="mt-2 text-sm text-[color:var(--color-ink)]/80 line-clamp-3">{n.excerpt}</p>
            <div className="mt-3 text-xs text-[color:var(--color-ink)]/60">{new Date(n.date).toLocaleDateString()}</div>
            <a href={n.href} className="mt-4 inline-flex text-[color:var(--color-brand-blue)] hover:underline">
              Read More
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
