"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

type SectionId =
  | "about"
  | "timeline"
  | "vision"
  | "media"
  | "news"
  | "projects"
  | "contact";

const sections: Array<{ id: SectionId; label: string }> = [
  { id: "about", label: "About" },
  { id: "timeline", label: "Timeline" },
  { id: "vision", label: "Vision" },
  { id: "media", label: "Media" },
  { id: "news", label: "News" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 z-50 w-full transition-colors ${
        scrolled ? "bg-white/90 backdrop-blur border-b border-black/5" : "bg-transparent"
      }`}
      aria-label="Primary"
    >
      <div className="container flex items-center justify-between py-3">
        <Link href="#" className="flex items-center gap-2" aria-label="Raila Odinga Home">
          <span className="h-8 w-8 rounded-full bg-[var(--orange)] inline-block" />
          <span className="font-semibold">Raila Odinga</span>
        </Link>
        <ul className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`text-sm font-medium transition-colors hover:text-[var(--orange)] ${
                  active === s.id ? "text-[var(--orange)]" : "text-textDark/80"
                }`}
              >
                {(
                  {
                    about: t('about'),
                    timeline: t('timeline'),
                    vision: t('vision'),
                    media: t('media'),
                    news: t('news'),
                    projects: t('projects'),
                    contact: t('contact'),
                  } as Record<SectionId, string>
                )[s.id]}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href="#contact" className="button-primary">Join</a>
          <a href="#projects" className="button-secondary hidden sm:inline-flex">Donate</a>
          <Link
            href={locale === 'en' ? '/sw' : '/en'}
            className="ml-2 text-sm underline"
            aria-label="Switch language"
          >
            {locale === 'en' ? 'SW' : 'EN'}
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
