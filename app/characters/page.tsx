"use client";

import Link from "next/link";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Footer from "../components/Footer";
import CharacterTabs from "../components/CharacterTabs";
import MobileButtons from "../components/MobileButtons";
import GumroadButton from "../components/GumroadButton";
import StructuredData from "../components/StructuredData";
import { characterSummaries as characters } from "../data/characters";

// Note: Metadata export is removed because "use client" is needed for framer-motion.
// In a real app, we would separate the layout or use a server component wrapper.
// For this task, we prioritize the UI/UX request.

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-sans text-white">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://kpopdemonhunters.net",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Characters",
              item: "https://kpopdemonhunters.net/characters",
            },
          ],
        }}
      />

      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('/images/background.webp')",
            filter: "brightness(0.3) saturate(1.2) blur(2px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-900/20 to-black" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-80 transition-opacity">
                KDH Wiki
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/characters"
                className="text-white font-medium tracking-wide border-b-2 border-pink-500"
              >
                CHARACTERS
              </Link>
              <Link
                href="/ost"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                OST
              </Link>
              <Link
                href="/culture"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                CULTURE
              </Link>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-200 group"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </button>
            </div>
            <MobileButtons />
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="relative z-10 pt-32 pb-12 px-4 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Characters
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the hunters, the idols, and the demons.
          </p>
        </motion.div>
      </section>

      {/* Character Grid */}
      <section className="relative z-10 pt-0 pb-16 px-4">
        <Suspense fallback={<div className="text-center text-white">Loading characters...</div>}>
          <CharacterTabs characters={characters} />
        </Suspense>
      </section>

      {/* Main Purchase Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Dive Deeper Into Their Stories
              </h2>

              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                You&apos;ve met all 13 characters. Now discover their hidden depths, combat secrets, and untold stories in our comprehensive digital guide.
              </p>

              {/* Desktop: Full 3-column grid */}
              <div className="hidden md:grid md:grid-cols-3 gap-6 mb-10 text-left">
                <div className="bg-black/40 rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="text-purple-400 font-bold mb-2 text-lg">✍️ Perfect for Creators</div>
                  <div className="text-gray-400 text-sm">Detailed references for fanfiction writers and fan artists</div>
                </div>
                <div className="bg-black/40 rounded-2xl p-6 border border-white/5 hover:border-pink-500/30 transition-colors">
                  <div className="text-pink-400 font-bold mb-2 text-lg">🔍 Deep Analysis</div>
                  <div className="text-gray-400 text-sm">Character psychology, relationships, and story arcs</div>
                </div>
                <div className="bg-black/40 rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-colors">
                  <div className="text-cyan-400 font-bold mb-2 text-lg">📱 Instant Access</div>
                  <div className="text-gray-400 text-sm">13 high-quality Markdown files, ready to download</div>
                </div>
              </div>

              {/* Mobile: Single focused message */}
              <div className="block md:hidden mb-8">
                <div className="bg-black/40 rounded-xl p-6 text-center border border-white/5">
                  <div className="text-purple-400 font-bold mb-2">Complete Character Collection</div>
                  <div className="text-gray-400 text-sm">Perfect for creators • Deep analysis • Instant download</div>
                </div>
              </div>

              <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
                <span className="text-2xl font-bold text-yellow-400">13 Complete Profiles</span>
                <span className="hidden md:inline text-gray-500">•</span>
                <span className="text-xl text-white">Digital Collection</span>
              </div>

              <GumroadButton size="xl" variant="primary" />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10 mt-16">
        <Footer />
      </div>
    </div>
  );
}
