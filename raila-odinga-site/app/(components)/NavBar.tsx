"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n, useT } from "@/lib/i18n";

const links = [
  { href: "#about", labelKey: "nav.about" },
  { href: "#timeline", labelKey: "nav.timeline" },
  { href: "#vision", labelKey: "nav.vision" },
  { href: "#media", labelKey: "nav.media" },
  { href: "#news", labelKey: "nav.news" },
  { href: "#projects", labelKey: "nav.projects" },
  { href: "#contact", labelKey: "nav.contact" },
];

export default function NavBar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { locale, setLocale } = useI18n();
  const t = useT();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        solid ? "bg-white/90 backdrop-blur border-b border-black/5" : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="container-responsive flex items-center justify-between py-4" aria-label="Primary">
        <Link href="#hero" className="font-heading text-xl text-[color:var(--color-ink)]">
          RAILA ODINGA
        </Link>
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="sm:hidden p-2 rounded-md border border-black/10"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open Menu</span>
          ☰
        </button>
        <ul className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                className="text-sm font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-brand-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand-blue)] focus-visible:ring-offset-2 rounded"
                href={l.href}
              >
                {t(l.labelKey)}
              </a>
            </li>
          ))}
          <li>
            <button
              className="text-sm font-medium text-[color:var(--color-ink)] border border-black/10 rounded px-2 py-1"
              onClick={() => setLocale(locale === "en" ? "sw" : "en")}
              aria-label="Toggle language"
            >
              {locale.toUpperCase()}
            </button>
          </li>
          <li>
            <a href="#contact" className="btn-primary">{t("cta.join")}</a>
          </li>
        </ul>
      </nav>
      {open && (
        <div className="sm:hidden border-t border-black/10 bg-white">
          <ul className="container-responsive py-4 grid gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a className="block py-2 text-[color:var(--color-ink)]" href={l.href} onClick={() => setOpen(false)}>
                  {t(l.labelKey)}
                </a>
              </li>
            ))}
            <li>
              <button
                className="border border-black/10 rounded px-3 py-2"
                onClick={() => setLocale(locale === "en" ? "sw" : "en")}
                aria-label="Toggle language"
              >
                {locale.toUpperCase()}
              </button>
            </li>
            <li>
              <a href="#contact" className="btn-primary w-full justify-center">{t("cta.join")}</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
