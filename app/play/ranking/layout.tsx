import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KDH Ranking Filter | K-pop Demon Hunters Interactive AR Game",
  description:
    "Join the beta waitlist for the K-Pop Demon Hunters ranking filter app! Experience real-time face tracking, rank your favorite HUNTR/X members and Saja Boys, and create viral TikTok videos with AR technology.",
  keywords: [
    "K-pop Demon Hunters AR app",
    "ranking filter game",
    "face tracking app",
    "HUNTR/X ranking",
    "Saja Boys",
    "TikTok AR filter",
    "beta waitlist",
    "mobile AR game",
  ],
  openGraph: {
    title: "KDH Ranking Filter | K-pop Demon Hunters Interactive AR Game",
    description:
      "Join the beta waitlist for the revolutionary K-Pop Demon Hunters ranking filter app. Experience face tracking technology and rank your favorites!",
    url: "https://kpopdemonhunters.net/play/ranking",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "KDH KDH Ranking Filter - Revolutionary AR Experience",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KDH Ranking Filter | K-pop Demon Hunters Interactive AR Game",
    description:
      "Revolutionary ranking filter app for K-Pop Demon Hunters fans. Real-time face tracking, character ranking, and social sharing!",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RankingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}