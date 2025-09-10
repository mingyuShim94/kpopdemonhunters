import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
import Footer from "../components/Footer";
import CharacterTabs from "../components/CharacterTabs";
import MobileButtons from "../components/MobileButtons";
import GumroadButton from "../components/GumroadButton";
import { characterSummaries as characters } from "../data/characters";

export const metadata: Metadata = {
  title: "All Characters | K-pop Demon Hunters Wiki",
  description:
    "Meet all K-pop Demon Hunters characters including HUNTR/X members Rumi, Mira, Zoey and Saja Boys Jinu, Abby, Romance, Mystery, Baby. Complete character profiles with abilities and backgrounds.",
  keywords: [
    "KDH characters",
    "HUNTR/X",
    "Saja Boys",
    "Rumi",
    "Mira",
    "Zoey",
    "Jinu",
    "K-pop Demon Hunters characters",
  ],
  alternates: {
    canonical: "/characters",
  },
  openGraph: {
    title: "All Characters | K-pop Demon Hunters Wiki",
    description:
      "Meet all K-pop Demon Hunters characters including HUNTR/X members Rumi, Mira, Zoey and Saja Boys Jinu, Abby, Romance, Mystery, Baby.",
    url: "https://kpopdemonhunters.net/characters",
    siteName: "KDH Wiki",
    images: [
      {
        url: "/images/characters/rumi.webp",
        width: 800,
        height: 800,
        alt: "K-pop Demon Hunters Characters",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Characters | K-pop Demon Hunters Wiki",
    description:
      "Meet all K-pop Demon Hunters characters including HUNTR/X and Saja Boys members.",
    images: ["/images/characters/rumi.jpg"],
  },
};

export default function CharactersPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-xl sm:text-2xl font-bold text-white hover:text-purple-300 transition-colors"
              >
                KDH Wiki
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/characters"
                className="text-purple-300 font-semibold"
              >
                Characters
              </Link>
              <Link
                href="/ost"
                className="text-white hover:text-purple-300 transition-colors"
              >
                OST
              </Link>
              <Link
                href="/culture"
                className="text-white hover:text-purple-300 transition-colors"
              >
                Korean Culture
              </Link>
            </div>
            <MobileButtons />
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Characters
          </h1>
        </div>
      </section>

      {/* Character Grid */}
      <section className="pt-0 pb-8 px-4">
        <Suspense fallback={<div className="text-center text-white">Loading characters...</div>}>
          <CharacterTabs characters={characters} />
        </Suspense>
      </section>

      {/* Main Purchase Section - Position 3 */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                🎭 Dive Deeper Into Their Stories
              </h2>
              <p className="text-xl text-gray-200 mb-6 max-w-3xl mx-auto">
                You&apos;ve met all 13 characters. Now discover their hidden depths, combat secrets, and untold stories in our comprehensive digital guide.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
                <div className="bg-black/20 rounded-xl p-4">
                  <div className="text-purple-400 font-bold mb-2">✍️ Perfect for Creators</div>
                  <div className="text-gray-300 text-sm">Detailed references for fanfiction writers and fan artists</div>
                </div>
                <div className="bg-black/20 rounded-xl p-4">
                  <div className="text-pink-400 font-bold mb-2">🔍 Deep Analysis</div>
                  <div className="text-gray-300 text-sm">Character psychology, relationships, and story arcs</div>
                </div>
                <div className="bg-black/20 rounded-xl p-4">
                  <div className="text-cyan-400 font-bold mb-2">📱 Instant Access</div>
                  <div className="text-gray-300 text-sm">13 high-quality Markdown files, ready to download</div>
                </div>
              </div>
              
              <div className="mb-6">
                <span className="text-2xl font-bold text-yellow-400">13 Complete Profiles</span>
                <span className="text-gray-300 mx-4">•</span>
                <span className="text-xl text-white">Digital Collection</span>
              </div>
              
              <GumroadButton size="xl" variant="primary" />
              
              <p className="text-gray-400 text-sm mt-4">
                ⚡ Instant download • 💎 Lifetime access • 🔄 Professional formatting
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
