import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AR Ranking App | K-pop Demon Hunters Interactive AR Game",
  description:
    "Join the beta waitlist for the K-Pop Demon Hunters AR ranking app! Experience real-time face tracking, rank your favorite HUNTR/X members and Saja Boys, and create viral TikTok videos with AR technology.",
  keywords: [
    "K-pop Demon Hunters AR app",
    "AR ranking game",
    "face tracking app",
    "HUNTR/X ranking",
    "Saja Boys",
    "TikTok AR filter",
    "beta waitlist",
    "mobile AR game",
  ],
  openGraph: {
    title: "AR Ranking App | K-pop Demon Hunters Interactive AR Game",
    description:
      "Join the beta waitlist for the revolutionary K-Pop Demon Hunters AR ranking app. Experience face tracking technology and rank your favorites!",
    url: "https://kpopdemonhunters.net/play/ranking",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "KDH AR Ranking App - Revolutionary AR Experience",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AR Ranking App | K-pop Demon Hunters Interactive AR Game",
    description:
      "Revolutionary AR ranking app for K-Pop Demon Hunters fans. Real-time face tracking, character ranking, and social sharing!",
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