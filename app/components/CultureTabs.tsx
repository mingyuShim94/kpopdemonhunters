"use client";

import { cultureCategories, CultureCategoryKey } from "../data/culture";

interface CultureTabsProps {
  activeTab: CultureCategoryKey;
  onTabChange: (tab: CultureCategoryKey) => void;
}

export default function CultureTabs({ activeTab, onTabChange }: CultureTabsProps) {
  const tabs = Object.entries(cultureCategories).map(([key, category]) => ({
    key: key as CultureCategoryKey,
    title: category.title,
  }));

  return (
    <div className="sticky top-0 z-10 bg-black/30 backdrop-blur-sm border-b border-white/10 mb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`flex-shrink-0 px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.key
                  ? "text-purple-300 border-b-2 border-purple-300"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}