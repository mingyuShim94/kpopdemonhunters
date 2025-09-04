"use client";

import { useState } from "react";
import Link from "next/link";
import SearchModal from "./SearchModal";

interface MobileNavigationProps {
  currentPath?: string;
}

export default function MobileNavigation({
  currentPath,
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
    closeMenu();
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/characters", label: "Characters" },
    { href: "/ost", label: "OST" },
    { href: "/culture", label: "Korean Culture" },
    { 
      href: "/play", 
      label: "Play Services",
      subItems: [
        { href: "/play/ranking", label: "AR Ranking App" },
        { href: "#", label: "Cosplay Service (Coming Soon)", disabled: true }
      ]
    },
  ];

  return (
    <>
      {/* Mobile buttons */}
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
            <span
              className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 top-3" : "top-1"
              }`}
            />
            <span
              className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100 top-3"
              }`}
            />
            <span
              className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 top-3" : "top-5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-black border-l border-white/20 z-50 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Close button */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 flex items-center justify-center"
            aria-label="Close menu"
          >
            <span className="w-6 h-0.5 bg-white rotate-45 absolute" />
            <span className="w-6 h-0.5 bg-white -rotate-45 absolute" />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-white mb-8 block"
            onClick={closeMenu}
          >
            KDH Wiki
          </Link>

          {/* Navigation items */}
          <nav className="space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                    currentPath === item.href
                      ? "bg-purple-600 text-white border-l-4 border-purple-400"
                      : "text-white hover:bg-gray-800 hover:text-purple-200"
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
                {/* Sub items for Play Services */}
                {item.label === "Play Services" && (
                  <div className="ml-4 mt-2 space-y-1">
                    <Link
                      href="/play/ranking"
                      className="block px-4 py-2 rounded-lg text-base text-gray-300 hover:bg-gray-800 hover:text-orange-300 transition-all duration-200"
                      onClick={closeMenu}
                    >
                      AR Ranking App
                    </Link>
                    <div className="px-4 py-2 text-sm text-gray-500">
                      Cosplay Service (Coming Soon)
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Additional info */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-white text-sm">
              Your ultimate guide to K-pop Demon Hunters universe
            </p>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
