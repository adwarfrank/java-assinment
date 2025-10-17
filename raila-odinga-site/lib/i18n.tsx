"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "@/locales/en.json";
import sw from "@/locales/sw.json";

type Locale = "en" | "sw";

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const messagesByLocale: Record<Locale, Record<string, string>> = { en, sw } as any;

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && (localStorage.getItem("locale") as Locale)) || null;
    if (stored === "en" || stored === "sw") setLocale(stored);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("locale", locale);
    if (typeof document !== "undefined") document.documentElement.setAttribute("lang", locale);
  }, [locale]);

  const t = useMemo(() => {
    const dict = messagesByLocale[locale] || {};
    return (key: string) => dict[key] ?? key;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function useT() {
  return useI18n().t;
}
