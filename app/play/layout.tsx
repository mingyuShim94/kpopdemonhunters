import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play Services | K-pop Demon Hunters Interactive Experiences",
  description:
    "Discover interactive experiences in the K-pop Demon Hunters universe. AR ranking games, cosplay transformation, and more coming soon!",
  keywords: [
    "K-pop Demon Hunters",
    "AR ranking",
    "interactive games",
    "cosplay transformation",
    "mobile app",
    "KDH play services",
  ],
  openGraph: {
    title: "Play Services | K-pop Demon Hunters Interactive Experiences",
    description:
      "Discover interactive experiences in the K-pop Demon Hunters universe. AR ranking games, cosplay transformation, and more!",
    url: "https://kpopdemonhunters.net/play",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "KDH Play Services - Interactive Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Play Services | K-pop Demon Hunters Interactive Experiences",
    description:
      "Discover interactive experiences in the K-pop Demon Hunters universe. AR ranking games and cosplay transformation!",
    images: ["/images/og-image.jpg"],
  },
};

export default function PlayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}