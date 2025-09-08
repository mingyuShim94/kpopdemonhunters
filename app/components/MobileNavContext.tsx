"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface MobileNavContextType {
  isMenuOpen: boolean;
  isSearchOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  openSearch: () => void;
  closeSearch: () => void;
}

const MobileNavContext = createContext<MobileNavContextType | undefined>(undefined);

export function useMobileNav() {
  const context = useContext(MobileNavContext);
  if (context === undefined) {
    throw new Error("useMobileNav must be used within a MobileNavProvider");
  }
  return context;
}

interface MobileNavProviderProps {
  children: ReactNode;
}

export function MobileNavProvider({ children }: MobileNavProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
    closeMenu();
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const value = {
    isMenuOpen,
    isSearchOpen,
    toggleMenu,
    closeMenu,
    openSearch,
    closeSearch,
  };

  return (
    <MobileNavContext.Provider value={value}>
      {children}
    </MobileNavContext.Provider>
  );
}