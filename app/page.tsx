"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
import SearchModal from "./components/SearchModal";
import MobileButtons from "./components/MobileButtons";

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  //수정
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
            <MobileButtons />
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
                    src="/images/category_thumnail/chracters_thumnail.webp"
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
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden border-2 border-cyan-400/50">
                  <Image
                    src="/images/category_thumnail/ost_thumnail.webp"
                    alt="OST"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
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
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden border-2 border-purple-400/50">
                  <Image
                    src="/images/category_thumnail/cultures_thumnail.webp"
                    alt="Korean Culture"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
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


      <Footer />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}
