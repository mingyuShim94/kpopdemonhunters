"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Music, Users, Globe, ChevronRight } from "lucide-react";
import Footer from "./components/Footer";
import SearchModal from "./components/SearchModal";
import MobileButtons from "./components/MobileButtons";

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-sans text-white">
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
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
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
                onClick={() => setIsSearchOpen(true)}
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

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 text-center pt-16">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block py-1 px-3 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold tracking-wider uppercase mb-4">
              The Ultimate Fan Wiki
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-6">
              <span className="block text-white mb-2">K-pop</span>
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Demon Hunters
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Dive into the universe of demon hunters. Explore characters, music, and the Korean culture behind the story.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/characters"
              className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Exploring <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
            </Link>
            <Link
              href="/ost"
              className="px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              Listen to OST
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Category Cards */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-transparent to-black/80">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/characters" className="group">
              <div className="h-full bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Users className="w-32 h-32 text-pink-500 transform rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 p-0.5">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-black">
                      <Image
                        src="/images/category_thumnail/chracters_thumnail.webp"
                        alt="Characters"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                    Characters
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Meet the demon hunters. Discover their unique personalities, backgrounds, and memorable quotes.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/ost" className="group">
              <div className="h-full bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Music className="w-32 h-32 text-cyan-500 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-black">
                      <Image
                        src="/images/category_thumnail/ost_thumnail.webp"
                        alt="OST"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    OST
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Immerse yourself in the soundtrack. Watch music videos and read lyrics in English and Korean.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/culture" className="group">
              <div className="h-full bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Globe className="w-32 h-32 text-purple-500 transform rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 p-0.5">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-black">
                      <Image
                        src="/images/category_thumnail/cultures_thumnail.webp"
                        alt="Korean Culture"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    Korean Culture
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Explore the real-world inspirations. Learn about the traditions, food, and places featured in the story.
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
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
