"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";
import SearchModal from "./components/SearchModal";

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-20 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                KDH Wiki
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/characters"
                className="text-white hover:text-purple-300 transition-colors"
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
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
                aria-label="Search"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <MobileNavigation currentPath="/" />
          </div>
        </div>
      </nav>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/background.webp')",
            filter: "brightness(0.4) saturate(1.2)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-pink-900/40 to-cyan-900/60" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-12 md:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            K-pop Demon Hunters
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto backdrop-blur-sm">
            Your ultimate guide to the characters, music, and Korean culture of
            the K-pop Demon Hunters universe
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/characters"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25 text-sm md:text-base"
            >
              Explore Characters
            </Link>
            <Link
              href="/ost"
              className="bg-transparent border-2 border-cyan-400/50 hover:border-cyan-400 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 text-sm md:text-base"
            >
              Listen to OST
            </Link>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="relative z-10 py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <Link href="/characters" className="group">
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:from-pink-500/30 hover:to-purple-600/30 transition-all duration-300 border border-pink-400/30 hover:border-pink-400/60 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden border-2 border-pink-400/50">
                  <Image
                    src="/images/characters/mira.webp"
                    alt="Characters"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
                  Characters
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Meet the demon hunters and discover their personalities,
                  backgrounds, and memorable quotes.
                </p>
              </div>
            </Link>

            <Link href="/ost" className="group">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:from-cyan-500/30 hover:to-blue-600/30 transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/60 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden border-2 border-cyan-400/50 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M13.243 8.757a1 1 0 011.414 0A5.984 5.984 0 0116 12a5.984 5.984 0 01-1.343 3.243 1 1 0 11-1.414-1.414A3.984 3.984 0 0014 12a3.984 3.984 0 00-.757-2.243 1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
                  OST
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Explore the soundtrack with music videos, English lyrics, and
                  track information.
                </p>
              </div>
            </Link>

            <Link href="/culture" className="group">
              <div className="bg-gradient-to-br from-purple-500/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:from-purple-500/30 hover:to-indigo-600/30 transition-all duration-300 border border-purple-400/30 hover:border-purple-400/60 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden border-2 border-purple-400/50 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">
                  Korean Culture
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  Learn about Korean traditions, food, places, and modern
                  culture featured in the anime.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Recent Updates
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Wiki Updates */}
            <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-3 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                Wiki Updates
              </h3>
              <p className="text-gray-200">
                We&apos;re continuously adding new character profiles, OST information, and cultural insights to the KDH Wiki.
              </p>
            </div>

            {/* AR App Announcement */}
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-6 border border-orange-400/40 hover:border-orange-400/60 transition-all duration-300 transform hover:scale-105 animate-glow">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-red-500">
                <span className="text-white font-bold text-xl">🆕</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                Coming Soon: AR Ranking App
              </h3>
              <p className="text-gray-200 mb-4 text-sm">
                Step into the world of KDH with AR face tracking! Rank your favorite HUNTR/X members and create viral TikTok videos.
              </p>
              <Link
                href="/play/ranking"
                className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-sm"
              >
                Join Beta Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}
