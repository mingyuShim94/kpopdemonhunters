import Link from "next/link";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import CharacterImage from "../components/CharacterImage";
import MobileNavigation from "../components/MobileNavigation";
import { characterSummaries as characters } from "../data/characters";

export const metadata: Metadata = {
  title: "All Characters | K-pop Demon Hunters Wiki",
  description:
    "Meet all K-pop Demon Hunters characters including HUNTR/X members Rumi, Mira, Zoey and Saja Boys Jinu, Abby, Romance, Mystery, Baby. Complete character profiles with abilities and backgrounds.",
  keywords: [
    "KDH characters",
    "HUNTR/X",
    "Saja Boys",
    "Rumi",
    "Mira",
    "Zoey",
    "Jinu",
    "K-pop Demon Hunters characters",
  ],
  alternates: {
    canonical: "/characters",
  },
  openGraph: {
    title: "All Characters | K-pop Demon Hunters Wiki",
    description:
      "Meet all K-pop Demon Hunters characters including HUNTR/X members Rumi, Mira, Zoey and Saja Boys Jinu, Abby, Romance, Mystery, Baby.",
    url: "https://kpopdemonhunters.net/characters",
    siteName: "KDH Wiki",
    images: [
      {
        url: "/images/characters/rumi.webp",
        width: 800,
        height: 800,
        alt: "K-pop Demon Hunters Characters",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Characters | K-pop Demon Hunters Wiki",
    description:
      "Meet all K-pop Demon Hunters characters including HUNTR/X and Saja Boys members.",
    images: ["/images/characters/rumi.jpg"],
  },
};

export default function CharactersPage() {
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
                className="text-purple-300 font-semibold"
              >
                Characters
              </Link>
              <Link
                href="/ost"
                className="text-white hover:text-purple-300 transition-colors"
              >
                OST
              </Link>
              <Link
                href="/culture"
                className="text-white hover:text-purple-300 transition-colors"
              >
                Korean Culture
              </Link>
            </div>
            <MobileNavigation currentPath="/characters" />
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Characters
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Meet the K-pop idols who lead double lives as demon slayers, the
            demonic forces they combat, and the allies who support them in their
            mission to protect the world.
          </p>
        </div>
      </section>

      {/* Character Grid */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {characters.map((character) => (
              <Link
                key={character.id}
                href={`/characters/${character.id}`}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <CharacterImage
                    src={character.image}
                    alt={`${character.name} character portrait`}
                    name={character.name}
                    role={character.role}
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {character.name}
                      </h3>
                      <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm">
                        {character.role}
                      </span>
                    </div>
                    <p className="text-purple-200 leading-relaxed">
                      {character.description}
                    </p>
                    <div className="mt-4 text-purple-300 group-hover:text-purple-200 transition-colors">
                      Learn more →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
