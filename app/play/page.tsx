"use client";

import Link from "next/link";
import Footer from "../components/Footer";
import MobileNavigation from "../components/MobileNavigation";
import SearchModal from "../components/SearchModal";
import { useState } from "react";

export default function PlayPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-20 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
                KDH Wiki
              </Link>
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
              <div className="relative group">
                <button className="text-purple-300 font-semibold flex items-center space-x-1">
                  <span>Play</span>
                  <svg
                    className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg py-2 shadow-xl">
                    <Link
                      href="/play/ranking"
                      className="block px-4 py-2 text-white hover:bg-white/10 hover:text-orange-300 transition-colors"
                    >
                      KDH Ranking Filter
                    </Link>
                    <div className="px-4 py-2 text-gray-400 text-sm">
                      Cosplay Service (Coming Soon)
                    </div>
                  </div>
                </div>
              </div>
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
            <MobileNavigation currentPath="/play" />
          </div>
        </div>
      </nav>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/background.webp')",
            filter: "brightness(0.3) saturate(1.2)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-pink-900/40 to-cyan-900/60" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-12 md:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Play Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto">
            Step into the K-pop Demon Hunters universe with interactive experiences
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* KDH Ranking Filter */}
            <Link href="/play/ranking" className="group">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 md:p-8 hover:from-orange-500/30 hover:to-red-600/30 transition-all duration-300 border border-orange-400/30 hover:border-orange-400/60 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 animate-glow">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden border-2 border-orange-400/50 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full mx-auto w-fit mb-4">
                  🆕 COMING SOON
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                  KDH Ranking Filter
                </h3>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                  Experience AR face tracking technology! Rank your favorite HUNTR/X members, 
                  Saja Boys, and create viral TikTok videos with real-time overlays.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-sm text-gray-300">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    Real-time AR face tracking
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    Interactive tap-to-rank system
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    TikTok/Instagram ready recording
                  </div>
                </div>
              </div>
            </Link>

            {/* Cosplay Service (Coming Soon) */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-purple-400/20 opacity-60">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden border-2 border-purple-400/30 bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs px-3 py-1 rounded-full mx-auto w-fit mb-4">
                  🚧 IN DEVELOPMENT
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  Cosplay Service
                </h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  Upload your photo and transform into your favorite KDH character with AI-powered 
                  cosplay transformation technology.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-purple-400/50 rounded-full mr-3"></span>
                    AI character transformation
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-purple-400/50 rounded-full mr-3"></span>
                    Multiple character styles
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <span className="w-2 h-2 bg-purple-400/50 rounded-full mr-3"></span>
                    High-quality results
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 to-indigo-500/5 border border-purple-400/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-300 opacity-50">Coming Soon</span>
              </div>
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