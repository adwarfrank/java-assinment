"use client";

import { motion } from "framer-motion";
import { vision } from "@/lib/data";

export default function VisionSection() {
  return (
    <section id="vision" className="section bg-[var(--white)]">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Vision for Kenya</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {vision.map((v, i) => (
            <motion.div
              key={v.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-black/5 p-5 shadow-sm hover:shadow-md bg-white"
            >
              <h3 className="font-semibold text-lg">{v.title}</h3>
              <p className="mt-2 text-sm text-textDark/80">{v.description}</p>
              <a href="#contact" className="mt-4 inline-block button-secondary">Read More</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
