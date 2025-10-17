import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Raila Amolo Odinga | Unity. Service. Progress.',
  description: 'Official website of Raila Amolo Odinga - Former Prime Minister of Kenya, AU High Representative for Infrastructure Development, and champion of democracy.',
  keywords: 'Raila Odinga, Kenya, Prime Minister, AU, African Union, Democracy, Leadership, Unity',
  authors: [{ name: 'Raila Odinga Official' }],
  creator: 'Raila Odinga Team',
  publisher: 'Raila Odinga Foundation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Raila Amolo Odinga | Unity. Service. Progress.',
    description: 'Official website of Raila Amolo Odinga - Former Prime Minister of Kenya',
    url: 'https://railaodinga.ke',
    siteName: 'Raila Odinga Official',
    images: [
      {
        url: '/images/raila-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Raila Amolo Odinga',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raila Amolo Odinga | Unity. Service. Progress.',
    description: 'Official website of Raila Amolo Odinga - Former Prime Minister of Kenya',
    images: ['/images/raila-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Raila Amolo Odinga",
              "jobTitle": "Former Prime Minister of Kenya",
              "birthDate": "1945-01-07",
              "image": "/images/raila-hero.jpg",
              "sameAs": [
                "https://en.wikipedia.org/wiki/Raila_Odinga",
                "https://www.britannica.com/biography/Raila-Odinga",
                "https://twitter.com/RailaOdinga"
              ],
              "url": "https://railaodinga.ke",
              "nationality": "Kenyan",
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "University of Magdeburg",
                  "location": "Germany"
                }
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "African Union",
                "description": "High Representative for Infrastructure Development"
              }
            })
          }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}