"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import GlobalNav from "../components/GlobalNav";
import CultureTabs from "../components/CultureTabs";
import CultureSection from "../components/CultureSection";
import { cultureCategories, CultureCategoryKey } from "../data/culture";

export default function CulturePage() {
  const [activeTab, setActiveTab] = useState<CultureCategoryKey>("mythology");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Global Navigation */}
      <GlobalNav />

      {/* Header */}
      <section className="py-16 px-4 text-center bg-pattern-dancheong">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-ink mb-6 leading-tight">
            Korean <br className="md:hidden" />
            <span className="relative inline-block">
              Culture
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full" />
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Discover the rich Korean mythology, K-pop fandom, food, and places woven into the fabric of the film
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
          <h2 className="text-4xl font-bold text-ink mb-8">
            A Love Letter to Korean Culture
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              &quot;K-pop: Demon Hunters&quot; serves as a cultural bridge, introducing international audiences to Korean traditions, values, and modern lifestyle through engaging storytelling and authentic representation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By blending traditional folklore with the global phenomenon of K-pop, the film offers a vibrant look at both ancient spiritual traditions and the contemporary entertainment scene of Korea.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
