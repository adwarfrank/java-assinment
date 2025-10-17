import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";
import { I18nProvider } from "@/lib/i18n";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://railaodinga.ke"),
  title: {
    default: "Raila Amolo Odinga | Unity. Service. Progress.",
    template: "%s | Raila Odinga",
  },
  description:
    "Cinematic, multilingual website showcasing Raila Odinga’s legacy, vision, projects, media, and news.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: "https://railaodinga.ke",
    title: "Raila Amolo Odinga",
    siteName: "Raila Odinga",
    description:
      "Unity. Service. Progress. Explore biography, timeline, vision, media, and projects.",
    images: [
      { url: "/images/raila-hero.jpg", width: 1200, height: 630, alt: "Raila Amolo Odinga" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raila Amolo Odinga",
    description:
      "Unity. Service. Progress. Explore biography, timeline, vision, media, and projects.",
    images: ["/images/raila-hero.jpg"],
  },
  other: {
    "theme-color": "#FF8000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Schema.org Person JSON-LD */}
        <Script id="jsonld-person" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Raila Amolo Odinga",
            jobTitle: "Former Prime Minister of Kenya",
            birthDate: "1945-01-07",
            image: "/images/raila-hero.jpg",
            sameAs: [
              "https://en.wikipedia.org/wiki/Raila_Odinga",
              "https://www.britannica.com/biography/Raila-Odinga",
            ],
            url: "https://railaodinga.ke",
          })}
        </Script>
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        <I18nProvider>
          {children}
        </I18nProvider>
        <footer className="mt-24 border-t border-black/5 bg-white/70">
          <div className="container-responsive py-10 text-sm text-[color:var(--color-ink)]/70 flex justify-between flex-wrap gap-4">
            <div>
              © {new Date().getFullYear()} Raila Odinga. All rights reserved.
            </div>
            <nav className="flex gap-4" aria-label="Footer">
              <Link href="#about">About</Link>
              <Link href="#vision">Vision</Link>
              <Link href="#contact">Contact</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
