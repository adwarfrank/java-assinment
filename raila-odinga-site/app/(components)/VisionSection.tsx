"use client";

import { motion } from "framer-motion";
import { visionItems } from "@/lib/data";

export default function VisionSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {visionItems.map((v, idx) => (
        <motion.article
          key={v.key}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          viewport={{ once: true }}
          className="rounded-xl border border-black/5 bg-white p-6 shadow-sm"
        >
          <h3 className="font-heading text-xl text-[color:var(--color-ink)]">{v.title}</h3>
          <p className="mt-2 text-sm text-[color:var(--color-ink)]/80">{v.description}</p>
          <a href={v.href ?? "#"} className="mt-4 inline-flex text-[color:var(--color-brand-blue)] hover:underline">
            Read More
          </a>
        </motion.article>
      ))}
    </div>
  );
}
