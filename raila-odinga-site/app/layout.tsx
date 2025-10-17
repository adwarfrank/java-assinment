import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "../styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Raila Amolo Odinga | Unity. Service. Progress.",
    template: "%s | Raila Odinga",
  },
  description:
    "Official website of Raila Amolo Odinga. Biography, timeline, vision, projects, media, and news.",
  metadataBase: new URL("https://railaodinga.ke"),
  openGraph: {
    title: "Raila Amolo Odinga",
    description:
      "Official website of Raila Amolo Odinga. Biography, timeline, vision, projects, media, and news.",
    url: "https://railaodinga.ke",
    siteName: "Raila Odinga",
    images: [
      {
        url: "/images/raila-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Raila Odinga portrait",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raila Amolo Odinga",
    description:
      "Official website of Raila Amolo Odinga. Biography, timeline, vision, projects, media, and news.",
    images: ["/images/raila-hero.jpg"],
  },
  alternates: {
    canonical: "https://railaodinga.ke",
    languages: {
      "en-KE": "https://railaodinga.ke/en",
      "sw-KE": "https://railaodinga.ke/sw",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
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
  } as const;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-white text-textDark`}>
        {children}
      </body>
    </html>
  );
}
