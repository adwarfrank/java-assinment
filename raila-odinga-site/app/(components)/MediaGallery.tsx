"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  { id: 1, type: "image", src: "/images/gallery-1.svg", alt: "Rally crowd" },
  { id: 2, type: "image", src: "/images/gallery-2.svg", alt: "Handshake" },
  { id: 3, type: "image", src: "/images/gallery-3.svg", alt: "Press event" },
  { id: 4, type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", alt: "Speech" },
];

const filters = ["all", "image", "video"] as const;

type Filter = (typeof filters)[number];

export default function MediaGallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<typeof items[number] | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    return items.filter((i) => i.type === filter);
  }, [filter]);

  return (
    <section id="media" className="section bg-white">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">Media</h2>
          <div className="flex items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                className={`px-3 py-1 rounded-full text-sm border transition ${
                  filter === f ? "bg-[var(--orange)] text-white border-transparent" : "border-black/10"
                }`}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
              >
                {f[0].toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((m) => (
            <button key={m.id} onClick={() => setActive(m)} className="group relative rounded-lg overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]">
              {m.type === "image" ? (
                <Image src={m.src} alt={m.alt} width={600} height={400} className="object-cover w-full h-full" loading="lazy" />
              ) : (
                <div className="aspect-video w-full bg-black/5 grid place-items-center text-sm">Video</div>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
            </button>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 grid place-items-center p-4"
              aria-modal
              role="dialog"
            >
              <div className="relative max-w-4xl w-full">
                <button
                  className="absolute -top-10 right-0 text-white underline"
                  onClick={() => setActive(null)}
                >
                  Close
                </button>
                {active.type === "image" ? (
                  <Image src={active.src} alt={active.alt} width={1200} height={800} className="w-full h-auto" />
                ) : (
                  <div className="aspect-video w-full">
                    <iframe
                      src={active.src}
                      title={active.alt}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
