"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import CultureTabs from "../components/CultureTabs";
import CultureSection from "../components/CultureSection";
import { cultureCategories, CultureCategoryKey } from "../data/culture";

export default function CulturePage() {
  const [activeTab, setActiveTab] = useState<CultureCategoryKey>("mythology");

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
              <Link href="/culture" className="text-purple-300 font-semibold">
                Korean Culture
              </Link>
            </div>
            <div className="md:hidden flex space-x-4">
              <Link
                href="/characters"
                className="text-white hover:text-purple-300 transition-colors text-sm"
              >
                Chars
              </Link>
              <Link
                href="/ost"
                className="text-white hover:text-purple-300 transition-colors text-sm"
              >
                OST
              </Link>
              <Link
                href="/culture"
                className="text-purple-300 font-semibold text-sm"
              >
                Culture
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Korean Culture in K-pop Demon Hunters
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Discover the rich Korean mythology, K-pop fandom, food, and places
            woven into the fabric of the film.
          </p>
        </div>
      </section>

      {/* Culture Tabs */}
      <CultureTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Active Tab Content */}
      <CultureSection
        title={cultureCategories[activeTab].title}
        items={cultureCategories[activeTab].data}
        color={cultureCategories[activeTab].color}
      />

      {/* Cultural Impact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            A Love Letter to Korean Culture
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <p className="text-purple-200 leading-relaxed text-lg mb-6">
              &quot;K-pop: Demon Hunters&quot; serves as a cultural bridge,
              introducing international audiences to Korean traditions, values,
              and modern lifestyle through engaging storytelling and authentic
              representation.
            </p>
            <p className="text-purple-200 leading-relaxed">
              By blending traditional folklore with the global phenomenon of
              K-pop, the film offers a vibrant look at both ancient spiritual
              traditions and the contemporary entertainment scene of Korea.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
