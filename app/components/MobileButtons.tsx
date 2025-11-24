"use client";

import { useMobileNav } from "./MobileNavContext";

interface MobileButtonsProps {
  onSearchClick?: () => void;
}

export default function MobileButtons({ onSearchClick }: MobileButtonsProps = {}) {
  const { toggleMenu, openSearch } = useMobileNav();

  const handleSearchClick = onSearchClick || openSearch;

  return (
    <div className="md:hidden flex items-center space-x-2">
      {/* Search button */}
      <button
        onClick={handleSearchClick}
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Search"
      >
        <svg
          className="w-5 h-5 text-gray-700"
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
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 relative">
          <span className="absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 top-1" />
          <span className="absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 top-3" />
          <span className="absolute block w-6 h-0.5 bg-gray-700 transition-all duration-300 top-5" />
        </div>
      </button>
    </div>
  );
}