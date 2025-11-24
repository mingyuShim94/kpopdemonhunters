import type { Metadata } from "next";
import { Suspense } from "react";
import Footer from "../components/Footer";
import GlobalNav from "../components/GlobalNav";
import CharacterTabs from "../components/CharacterTabs";
import GumroadButton from "../components/GumroadButton";
import StructuredData from "../components/StructuredData";
import { characterSummaries as characters } from "../data/characters";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Kpop Demon Hunters Characters | Complete KDH Wiki Guide",
  description:
    "Complete guide to all kpop demon hunters characters including HUNTR/X members Rumi, Mira, Zoey and Saja Boys Jinu, Abby, Romance, Mystery, Baby. KDH wiki with character profiles, abilities and backgrounds.",
  keywords: [
    "kpop demon hunters characters",
    "kdh characters",
    "huntr/x members",
    "saja boys members",
    "rumi kpop demon hunters",
    "mira kdh",
    "zoey kdh",
    "jinu saja boys",
    "kpop demon hunters character guide",
    "kdh wiki characters",
  ],
  openGraph: {
    title: "Kpop Demon Hunters Characters | Complete KDH Wiki Guide",
    description:
      "Complete guide to all kpop demon hunters characters including HUNTR/X and Saja Boys members.",
    images: ["/images/characters/rumi.jpg"],
  },
};

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://kpopdemonhunters.net",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Characters",
              item: "https://kpopdemonhunters.net/characters",
            },
          ],
        }}
      />

      {/* Global Navigation */}
      <GlobalNav />

      {/* Header */}
      <section className="py-16 px-4 text-center bg-pattern-dancheong">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-ink mb-6 leading-tight">
            Meet the <br className="md:hidden" />
            <span className="relative inline-block">
              Characters
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full" />
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Explore the heroes, villains, and allies of the K-pop Demon Hunters universe
          </p>
        </div>
      </section>

      {/* Character Grid */}
      <section className="py-16 px-4">
        <Suspense fallback={
          <div className="text-center text-gray-600">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-4 border-pink-500"></div>
            <p className="mt-4 text-lg">Loading characters...</p>
          </div>
        }>
          <CharacterTabs characters={characters} />
        </Suspense>
      </section>

      {/* Purchase Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ink">
              Unlock Exclusive Character Content
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get access to exclusive character art, behind-the-scenes content, and special
              merchandise featuring your favorite demon hunters.
            </p>
            <GumroadButton
              size="xl"
              variant="primary"
            />
          </div>
        </div>
      </section>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
