import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import StructuredData from "./components/StructuredData";
import ClientLayout from "./components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kpop Demon Hunters Wiki | KDH Characters, Soundtrack & Complete Fan Guide",
  description:
    "Complete kpop demon hunters wiki with detailed character profiles, OST tracks, Korean culture insights. KDH fan guide for HUNTR/X, Saja Boys, and the demon hunting universe.",
  keywords: [
    // Top Google Trends keywords (priority order)
    "rumi kpop",                        // 100 points
    "rumi kpop demon hunters",          // 99 points
    "rumi",                             // 98 points
    "kpop demon hunters zoey",          // 67 points
    "kpop demon hunters golden",        // 67 points
    "golden",                           // 66 points
    "zoey",                             // 65 points
    "kpop demon hunters lyrics",        // 54 points
    "kpop demon hunters mira",          // 48 points
    "mira",                             // 47 points
    "kpop demon hunters costume",       // 43 points
    "kpop demon hunters songs",         // 41 points
    "kpop demon hunters cast",          // 39 points
    "jinu",                             // 33 points
    "kpop demon hunters jinu",          // 32 points
    "kpop demon hunters movie",         // 28 points
    "demon hunter",                     // 28 points
    "demon hunter kpop",                // 28 points
    "k pop demon hunters",              // 27 points
    "k pop",                            // 27 points
    "kpop demon hunters free",          // 26 points
    "kpop demon hunters song",          // 26 points
    "what is kpop demon hunters",       // 24 points
    "golden lyrics",                    // 22 points

    // Core brand keywords
    "kpop demon hunters",
    "kdh wiki",
    "kpop demon hunters characters",
    "kpop demon hunters soundtrack",
    "K-pop Demon Hunters",
    "KDH",
    "characters",
    "OST",
    "HUNTR/X",
    "Saja Boys",
    "Rumi",
    "Jinu",
    "fan guide",

    // Additional discovery keywords
    "huntr/x kpop group",
    "saja boys kpop",
    "kdh characters",
    "kdh lyrics",
    "kdh songs",
    "kdh soundtrack",
    "demon hunters anime",
    "k-pop anime",
    "korean demon hunters",
  ],
  authors: [{ name: "KDH Wiki Team" }],
  creator: "KDH Wiki",
  publisher: "KDH Wiki",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kpopdemonhunters.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kpop Demon Hunters Wiki | KDH Characters, Soundtrack & Complete Fan Guide",
    description:
      "Complete kpop demon hunters wiki with detailed character profiles, OST tracks, Korean culture insights. KDH fan guide for HUNTR/X, Saja Boys, and the demon hunting universe.",
    url: "https://kpopdemonhunters.net",
    siteName: "KDH Wiki",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "KDH Wiki - K-pop Demon Hunters Fan Guide",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kpop Demon Hunters Wiki | KDH Characters, Soundtrack & Complete Fan Guide",
    description:
      "Complete kpop demon hunters wiki with detailed character profiles, OST tracks, and Korean culture insights.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "kaXPdPOQij_7YNOLITMfhdj3H2DIH8R4ozGUMVnJMRw",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* AdSense 스크립트 - 현재 미사용으로 주석처리 */}
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8647279125417942"
          crossOrigin="anonymous"
        ></script> */}
        <script async src="https://tally.so/widgets/embed.js"></script>
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://kpopdemonhunters.net#website",
                name: "Kpop Demon Hunters Fan Wiki",
                description:
                  "Complete kpop demon hunters wiki with detailed character profiles, OST tracks, Korean culture insights. KDH fan guide for HUNTR/X, Saja Boys, and the demon hunting universe.",
                url: "https://kpopdemonhunters.net",
                image: "https://kpopdemonhunters.net/images/og-image.png",
                publisher: {
                  "@type": "Organization",
                  "@id": "https://kpopdemonhunters.net#organization",
                  name: "KDH Wiki",
                  url: "https://kpopdemonhunters.net",
                  logo: "https://kpopdemonhunters.net/images/og-image.png",
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://kpopdemonhunters.net/?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@type": "Movie",
                "@id": "https://kpopdemonhunters.net#movie",
                name: "Kpop Demon Hunters",
                alternateName: "K-pop Demon Hunters",
                description:
                  "2025 animated musical fantasy film about K-pop idols who are secret demon hunters",
                genre: ["Animation", "Musical", "Fantasy", "K-pop"],
                datePublished: "2025-06-20",
                productionCompany: "Republic Records",
                image: "https://kpopdemonhunters.net/images/og-image.png",
                soundtrack: {
                  "@type": "MusicAlbum",
                  "@id": "https://kpopdemonhunters.net#soundtrack",
                  name: "Kpop Demon Hunters (Soundtrack)",
                  description: "Official soundtrack album to the 2025 animated musical fantasy film",
                  datePublished: "2025-06-20",
                  recordLabel: "Republic Records",
                  image: "https://kpopdemonhunters.net/images/og-image.png",
                  numTracks: 12,
                  genre: ["K-pop", "Soundtrack", "Pop"],
                },
              },
              {
                "@type": "MusicGroup",
                "@id": "https://kpopdemonhunters.net#huntrx",
                name: "HUNTR/X",
                description: "Virtual K-pop group from Kpop Demon Hunters universe",
                genre: ["K-pop", "Pop"],
                image: {
                  "@type": "ImageObject",
                  url: "https://kpopdemonhunters.net/images/characters/huntrx-group.webp",
                  width: 800,
                  height: 800,
                  caption: "HUNTR/X K-pop group from Kpop Demon Hunters",
                },
                member: [
                  {
                    "@type": "Person",
                    name: "Rumi",
                    description: "Main vocalist and leader of HUNTR/X",
                    image: {
                      "@type": "ImageObject",
                      url: "https://kpopdemonhunters.net/images/characters/rumi.webp",
                      width: 1400,
                      height: 700,
                      caption: "Rumi from Kpop Demon Hunters - HUNTR/X leader character profile",
                    },
                  },
                  {
                    "@type": "Person",
                    name: "Zoey",
                    description: "Lead dancer and vocalist of HUNTR/X",
                    image: {
                      "@type": "ImageObject",
                      url: "https://kpopdemonhunters.net/images/characters/zoey.webp",
                      width: 686,
                      height: 386,
                      caption: "Zoey from Kpop Demon Hunters - HUNTR/X dancer character profile",
                    },
                  },
                  {
                    "@type": "Person",
                    name: "Mira",
                    description: "Main rapper and visual of HUNTR/X",
                    image: {
                      "@type": "ImageObject",
                      url: "https://kpopdemonhunters.net/images/characters/mira.webp",
                      width: 1976,
                      height: 1208,
                      caption: "Mira from Kpop Demon Hunters - HUNTR/X rapper character profile",
                    },
                  },
                ],
              },
              {
                "@type": "MusicGroup",
                "@id": "https://kpopdemonhunters.net#sajaboys",
                name: "Saja Boys",
                description: "Virtual K-pop boy group from Kpop Demon Hunters universe",
                genre: ["K-pop", "Pop"],
                image: {
                  "@type": "ImageObject",
                  url: "https://kpopdemonhunters.net/images/characters/sajaboys-group.webp",
                  width: 800,
                  height: 800,
                  caption: "Saja Boys K-pop group from Kpop Demon Hunters",
                },
                member: [
                  {
                    "@type": "Person",
                    name: "Jinu",
                    description: "Leader and main vocalist of Saja Boys",
                    image: {
                      "@type": "ImageObject",
                      url: "https://kpopdemonhunters.net/images/characters/jinu.webp",
                      width: 1920,
                      height: 1080,
                      caption: "Jinu from Kpop Demon Hunters - Saja Boys leader character profile",
                    },
                  },
                  {
                    "@type": "Person",
                    name: "Mystery",
                    description: "Mysterious member of Saja Boys with unknown motives",
                    image: {
                      "@type": "ImageObject",
                      url: "https://kpopdemonhunters.net/images/characters/mystery.webp",
                      width: 958,
                      height: 539,
                      caption: "Mystery from Kpop Demon Hunters - Saja Boys mysterious character profile",
                    },
                  },
                ],
              },
            ],
          }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
