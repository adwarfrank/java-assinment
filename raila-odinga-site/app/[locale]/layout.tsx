import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import NavBar from "@/app/(components)/NavBar";

export const metadata: Metadata = {
  title: "Raila Odinga",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = (await import(`@/locales/${locale}.json`)).default as Record<string, unknown>;
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <NavBar />
      <main>{children}</main>
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "sw" }];
}
