"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";

export default function HeroSection() {
  const t = useT();
  return (
    <section id="hero" className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 -z-10 will-change-transform" aria-hidden>
        <Image
          src="/images/raila-hero.jpg"
          alt="Raila Amolo Odinga"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container-responsive h-full grid content-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h1 className="font-heading text-5xl sm:text-6xl text-white leading-tight">
            {t("hero.tagline")}
          </h1>
          <p className="mt-4 text-white/90">
            A lifetime dedicated to democracy, development, and national unity.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#about" className="btn-primary">{t("cta.explore")}</a>
            <a href="#contact" className="btn-secondary">{t("cta.join")}</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
