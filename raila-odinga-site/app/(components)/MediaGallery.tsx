"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mediaItems } from "@/lib/data";

const filters = ["All", "Images", "Videos"] as const;

type Filter = (typeof filters)[number];

export default function MediaGallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightbox, setLightbox] = useState<{ id: string; src: string; type: "image" | "video"; alt: string } | null>(null);
  const filtered = mediaItems.filter((m) =>
    filter === "All" ? true : filter === "Images" ? m.type === "image" : m.type === "video"
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div>
      <div className="mb-6 flex gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm font-medium border ${
              filter === f
                ? "bg-[color:var(--color-brand-blue)] text-white border-transparent"
                : "border-black/10 text-[color:var(--color-ink)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filtered.map((m) => (
            <motion.button
              key={m.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="relative aspect-[16/9] overflow-hidden rounded-lg border border-black/5"
              onClick={() => setLightbox(m)}
              aria-label={m.alt}
            >
              {m.type === "image" ? (
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <video controls className="h-full w-full object-cover" aria-label={m.alt}>
                  <source src={m.src} />
                </video>
              )}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/80 grid place-items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Media lightbox"
            onClick={() => setLightbox(null)}
          >
            <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute -top-10 right-0 text-white underline"
                onClick={() => setLightbox(null)}
              >
                Close
              </button>
              <div className="relative aspect-video">
                {lightbox.type === "image" ? (
                  <Image src={lightbox.src} alt={lightbox.alt} fill className="object-contain" />
                ) : (
                  <video controls className="h-full w-full object-contain" aria-label={lightbox.alt}>
                    <source src={lightbox.src} />
                  </video>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
