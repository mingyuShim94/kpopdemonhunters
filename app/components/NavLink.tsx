"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`relative px-3 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "text-gray-900"
          : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full" />
      )}
    </Link>
  );
}
