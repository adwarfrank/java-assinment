"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations('hero');
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "-80px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section ref={ref} aria-label="Hero" className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Image
          src="/images/raila-hero.svg"
          alt="Portrait of Raila Odinga"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white" />
      </motion.div>

      <div className="container relative z-10 flex h-full flex-col items-start justify-end pb-24 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold max-w-3xl"
        >
          {t('tagline')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl text-pretty text-lg md:text-xl"
        >
          Building a Kenya where opportunity, dignity and justice are for all.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex items-center gap-4"
        >
          <Link href="#about" className="button-primary">{t('ctaExplore')}</Link>
          <Link href="#contact" className="button-secondary">{t('ctaJoin')}</Link>
        </motion.div>
      </div>
    </section>
  );
}
