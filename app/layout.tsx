import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K-pop Demon Hunters Fan Wiki | Complete Characters & OST Guide",
  description:
    "Complete fan wiki for K-pop Demon Hunters with detailed character profiles, OST tracks, Korean culture insights. Explore HUNTR/X, Saja Boys, and the demon hunting universe.",
  keywords: [
    "K-pop Demon Hunters",
    "KDH wiki",
    "characters",
    "soundtrack",
    "OST",
    "HUNTR/X",
    "Saja Boys",
    "Rumi",
    "Jinu",
    "fan guide",
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
    title: "K-pop Demon Hunters Fan Wiki | Complete Characters & OST Guide",
    description:
      "Complete fan wiki for K-pop Demon Hunters with detailed character profiles, OST tracks, Korean culture insights. Explore HUNTR/X, Saja Boys, and the demon hunting universe.",
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
    title: "K-pop Demon Hunters Fan Wiki | Complete Characters & OST Guide",
    description:
      "Complete fan wiki for K-pop Demon Hunters with detailed character profiles, OST tracks, and Korean culture insights.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8647279125417942"
          crossOrigin="anonymous"
        ></script>
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "K-pop Demon Hunters Fan Wiki",
            description:
              "Complete fan wiki for K-pop Demon Hunters with detailed character profiles, OST tracks, Korean culture insights. Explore HUNTR/X, Saja Boys, and the demon hunting universe.",
            url: "https://kpopdemonhunters.net",
            publisher: {
              "@type": "Organization",
              name: "KDH Wiki",
              url: "https://kpopdemonhunters.net",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://kpopdemonhunters.net/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            mainEntity: [
              {
                "@type": "CreativeWork",
                "@id": "https://kpopdemonhunters.net#movie",
                name: "K-pop Demon Hunters",
                description:
                  "Animated movie about K-pop idols who are secret demon hunters",
                genre: "Animation, Action, K-pop, Supernatural",
                datePublished: "2024",
              },
            ],
          }}
        />
        {children}
      </body>
    </html>
  );
}
