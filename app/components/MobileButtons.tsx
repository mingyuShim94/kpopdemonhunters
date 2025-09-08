"use client";

import { useMobileNav } from "./MobileNavContext";

export default function MobileButtons() {
  const { toggleMenu, openSearch } = useMobileNav();

  return (
    <div className="md:hidden flex items-center space-x-2">
      {/* Search button */}
      <button
        onClick={openSearch}
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

      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 relative">
          <span className="absolute block w-6 h-0.5 bg-white transition-all duration-300 top-1" />
          <span className="absolute block w-6 h-0.5 bg-white transition-all duration-300 top-3" />
          <span className="absolute block w-6 h-0.5 bg-white transition-all duration-300 top-5" />
        </div>
      </button>
    </div>
  );
}