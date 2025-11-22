"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Globe } from "lucide-react";
import Footer from "../components/Footer";
import CultureTabs from "../components/CultureTabs";
import CultureSection from "../components/CultureSection";
import MobileButtons from "../components/MobileButtons";
import { cultureCategories, CultureCategoryKey } from "../data/culture";

export default function CulturePage() {
  const [activeTab, setActiveTab] = useState<CultureCategoryKey>("mythology");

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-sans text-white">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('/images/background.webp')",
            filter: "brightness(0.3) saturate(1.2) blur(2px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-indigo-900/20 to-black" />
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
                className="text-white font-medium tracking-wide border-b-2 border-purple-500"
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
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              Korean Culture in KDH
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the rich Korean mythology, K-pop fandom, food, and places
            woven into the fabric of the film.
          </p>
        </motion.div>
      </section>

      {/* Culture Tabs */}
      <div className="relative z-10">
        <CultureTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Active Tab Content */}
      <div className="relative z-10 min-h-[500px]">
        <CultureSection
          title={cultureCategories[activeTab].title}
          items={cultureCategories[activeTab].data}
          color={cultureCategories[activeTab].color}
        />
      </div>

      {/* Cultural Impact Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <Globe className="w-48 h-48 text-white" />
            </div>

            <h2 className="text-3xl font-bold text-white mb-8 relative z-10">
              A Love Letter to Korean Culture
            </h2>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed relative z-10">
              <p>
                &quot;K-pop: Demon Hunters&quot; serves as a cultural bridge,
                introducing international audiences to Korean traditions, values,
                and modern lifestyle through engaging storytelling and authentic
                representation.
              </p>
              <p>
                By blending traditional folklore with the global phenomenon of
                K-pop, the film offers a vibrant look at both ancient spiritual
                traditions and the contemporary entertainment scene of Korea.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
