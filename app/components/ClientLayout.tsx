"use client";

import { MobileNavProvider } from "./MobileNavContext";
import MobileMenu from "./MobileMenu";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <MobileNavProvider>
      {children}
      <MobileMenu />
    </MobileNavProvider>
  );
}