"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobileNav } from "./MobileNavContext";
import SearchModal from "./SearchModal";

export default function MobileMenu() {
  const pathname = usePathname();
  const { isMenuOpen, isSearchOpen, closeMenu, closeSearch } = useMobileNav();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/characters", label: "Characters" },
    { href: "/ost", label: "OST" },
    { href: "/culture", label: "Korean Culture" },
  ];

  return (
    <>
      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-black border-l border-white/20 z-50 md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
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
                    pathname === item.href
                      ? "bg-purple-600 text-white border-l-4 border-purple-400"
                      : "text-white hover:bg-gray-800 hover:text-purple-200"
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
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
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
    </>
  );
}