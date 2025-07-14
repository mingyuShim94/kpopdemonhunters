import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KDH Wiki - K-pop Demon Hunters Fan Guide",
  description: "Your ultimate guide to K-pop Demon Hunters characters, OST, and Korean culture. Explore the universe of demon hunters with detailed character profiles and cultural insights.",
  keywords: ["K-pop", "Demon Hunters", "KDH", "Characters", "OST", "Korean Culture", "Fan Wiki", "HUNTR/X", "Saja Boys"],
  authors: [{ name: "KDH Wiki Team" }],
  creator: "KDH Wiki",
  publisher: "KDH Wiki",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kpopdemonhunters.net'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "KDH Wiki - K-pop Demon Hunters Fan Guide",
    description: "Your ultimate guide to K-pop Demon Hunters characters, OST, and Korean culture. Explore the universe of demon hunters with detailed character profiles and cultural insights.",
    url: 'https://kpopdemonhunters.net',
    siteName: 'KDH Wiki',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KDH Wiki - K-pop Demon Hunters Fan Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "KDH Wiki - K-pop Demon Hunters Fan Guide",
    description: "Your ultimate guide to K-pop Demon Hunters characters, OST, and Korean culture.",
    images: ['/images/og-image.jpg'],
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
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
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
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
