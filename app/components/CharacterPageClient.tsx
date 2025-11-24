"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Footer from "./Footer";
import GlobalNav from "./GlobalNav";
import CharacterImage from "./CharacterImage";
import ScrollToTop from "./ScrollToTop";
import { PerformanceOutfit } from "../data/characters";

interface Character {
  fullName?: string;
  name: string;
  gender?: string;
  species?: string;
  nationality?: string;
  age?: string;
  height?: string;
  affiliatedGroup?: string;
  position?: string;
  weapon?: string;
  weaponEvolution?: string;
  family?: Array<{
    relation: string;
    name: string;
  }>;
  voiceActors?: {
    en?: string;
    kr?: string;
    jp?: string;
  };
  singingVoice?: {
    en?: string;
    kr?: string;
    jp?: string;
  };
}

interface TriviaItem {
  category: string;
  title: string;
  description: string;
}

interface Relationship {
  name: string;
  relation: string;
  description: string;
}

interface CharacterData extends Character {
  role: string;
  koreanName?: string;
  overview?: string;
  appearance?: string;
  performanceOutfits?: PerformanceOutfit[];
  personality: string;
  quotes?: string[];
  abilities: string[];
  storyArc?: string;
  relationships?: Relationship[];
  trivia?: TriviaItem[];
  relatedOST?: string[];
}

interface CharacterSummary {
  id: string;
  name: string;
  description: string;
  image: string;
  role: string;
}

interface Props {
  character: CharacterData;
  characterSummary?: CharacterSummary;
  slug: string;
}

// Character color theme - Updated for new design
function getCharacterTheme(characterName: string) {
  const themes: Record<string, { primary: string; secondary: string; badge: string }> = {
    Rumi: { primary: "text-pink-600", secondary: "bg-pink-50", badge: "bg-pink-100 text-pink-700 border-pink-300" },
    Mira: { primary: "text-pink-600", secondary: "bg-pink-50", badge: "bg-pink-100 text-pink-700 border-pink-300" },
    Zoey: { primary: "text-cyan-600", secondary: "bg-cyan-50", badge: "bg-cyan-100 text-cyan-700 border-cyan-300" },
    Jinu: { primary: "text-purple-600", secondary: "bg-purple-50", badge: "bg-purple-100 text-purple-700 border-purple-300" },
    Abby: { primary: "text-green-600", secondary: "bg-green-50", badge: "bg-green-100 text-green-700 border-green-300" },
    Baby: { primary: "text-blue-600", secondary: "bg-blue-50", badge: "bg-blue-100 text-blue-700 border-blue-300" },
    Mystery: { primary: "text-gray-600", secondary: "bg-gray-50", badge: "bg-gray-100 text-gray-700 border-gray-300" },
    Romance: { primary: "text-rose-600", secondary: "bg-rose-50", badge: "bg-rose-100 text-rose-700 border-rose-300" },
    "Gwi-Ma": { primary: "text-red-600", secondary: "bg-red-50", badge: "bg-red-100 text-red-700 border-red-300" },
    Celine: { primary: "text-violet-600", secondary: "bg-violet-50", badge: "bg-violet-100 text-violet-700 border-violet-300" },
    Bobby: { primary: "text-yellow-600", secondary: "bg-yellow-50", badge: "bg-yellow-100 text-yellow-700 border-yellow-300" },
    Derpy: { primary: "text-blue-600", secondary: "bg-blue-50", badge: "bg-blue-100 text-blue-700 border-blue-300" },
    Sussie: { primary: "text-gray-600", secondary: "bg-gray-50", badge: "bg-gray-100 text-gray-700 border-gray-300" },
  };

  return themes[characterName] || { primary: "text-purple-600", secondary: "bg-purple-50", badge: "bg-purple-100 text-purple-700 border-purple-300" };
}

type TabType = "profile" | "relationships" | "combat" | "trivia";

export default function CharacterPageClient({ character, characterSummary }: Props) {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabType>("profile");
  const theme = getCharacterTheme(character.name);

  const fromTab = searchParams.get("fromTab") || "HUNTR/X";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Global Navigation */}
      <GlobalNav />

      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-pattern-dancheong overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            href={`/characters?tab=${encodeURIComponent(fromTab)}`}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-8 font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Characters
          </Link>

          {/* Character Hero */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Character Image */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  {characterSummary && (
                    <CharacterImage
                      src={characterSummary.image}
                      alt={`${character.name} from K-pop Demon Hunters`}
                      name={character.name}
                      role={character.role}
                      priority={true}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Character Info */}
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-ink mb-4 leading-tight">
                {character.name}
              </h1>
              {character.koreanName && (
                <p className="text-2xl text-gray-600 mb-6">{character.koreanName}</p>
              )}

              <span className={`inline-block px-4 py-2 rounded-full font-semibold mb-8 border-2 ${theme.badge}`}>
                {character.role}
              </span>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  {character.age && (
                    <div>
                      <span className="text-sm text-gray-500 block">Age</span>
                      <span className="text-lg font-semibold text-gray-900">{character.age}</span>
                    </div>
                  )}
                  {character.height && (
                    <div>
                      <span className="text-sm text-gray-500 block">Height</span>
                      <span className="text-lg font-semibold text-gray-900">{character.height}</span>
                    </div>
                  )}
                  {character.weapon && (
                    <div>
                      <span className="text-sm text-gray-500 block">Weapon</span>
                      <span className="text-lg font-semibold text-gray-900">{character.weapon}</span>
                    </div>
                  )}
                  {character.position && (
                    <div>
                      <span className="text-sm text-gray-500 block">Position</span>
                      <span className="text-lg font-semibold text-gray-900">{character.position}</span>
                    </div>
                  )}
                </div>

                {/* Voice Actors */}
                {character.voiceActors && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <span className="text-sm text-gray-500 block mb-2">Voice Actor</span>
                    {character.voiceActors.en && (
                      <p className="text-base font-semibold text-gray-900">{character.voiceActors.en}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Famous Quote */}
              {character.quotes && character.quotes.length > 0 && (
                <blockquote className={`${theme.secondary} rounded-2xl p-6 border-l-4 ${theme.primary.replace('text-', 'border-')}`}>
                  <p className="text-lg italic text-gray-700 leading-relaxed">
                    &ldquo;{character.quotes[0]}&rdquo;
                  </p>
                </blockquote>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-xl p-1.5 shadow-md border border-gray-200">
              {[
                { id: "profile" as TabType, label: "Profile" },
                { id: "relationships" as TabType, label: "Relationships" },
                { id: "combat" as TabType, label: "Combat" },
                { id: "trivia" as TabType, label: "Trivia" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-8 py-3 rounded-lg text-base font-semibold transition-all duration-250
                    ${activeTab === tab.id
                      ? `bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md`
                      : `text-gray-600 hover:bg-gray-50`
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="space-y-8">
                {character.overview && (
                  <div>
                    <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">{character.overview}</p>
                  </div>
                )}

                {character.personality && (
                  <div>
                    <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Personality</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">{character.personality}</p>
                  </div>
                )}

                {character.appearance && (
                  <div>
                    <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Appearance</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">{character.appearance}</p>
                  </div>
                )}

                {character.storyArc && (
                  <div>
                    <h2 className={`text-3xl font-bold mb-4 ${theme.primary}`}>Story Arc</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">{character.storyArc}</p>
                  </div>
                )}

                {character.quotes && character.quotes.length > 1 && (
                  <div>
                    <h2 className={`text-3xl font-bold mb-6 ${theme.primary}`}>Memorable Quotes</h2>
                    <div className="space-y-4">
                      {character.quotes.map((quote, index) => (
                        <blockquote key={index} className={`${theme.secondary} rounded-xl p-6 border-l-4 ${theme.primary.replace('text-', 'border-')}`}>
                          <p className="text-base italic text-gray-700">&ldquo;{quote}&rdquo;</p>
                        </blockquote>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Relationships Tab */}
            {activeTab === "relationships" && (
              <div>
                <h2 className={`text-3xl font-bold mb-8 ${theme.primary}`}>Relationships</h2>
                {character.relationships && character.relationships.length > 0 ? (
                  <div className="space-y-6">
                    {character.relationships.map((rel, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{rel.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${theme.badge}`}>
                            {rel.relation}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{rel.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-center py-12">No relationship information available yet.</p>
                )}
              </div>
            )}

            {/* Combat Tab */}
            {activeTab === "combat" && (
              <div className="space-y-8">
                {character.abilities && character.abilities.length > 0 && (
                  <div>
                    <h2 className={`text-3xl font-bold mb-6 ${theme.primary}`}>Abilities & Powers</h2>
                    <div className="grid gap-4">
                      {character.abilities.map((ability, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${theme.primary.replace('text-', 'bg-')}`}>
                            {index + 1}
                          </span>
                          <p className="text-lg text-gray-700 leading-relaxed">{ability}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {character.weapon && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Primary Weapon</h3>
                    <p className="text-lg text-gray-700">{character.weapon}</p>
                    {character.weaponEvolution && (
                      <>
                        <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Evolution</h4>
                        <p className="text-gray-700">{character.weaponEvolution}</p>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Trivia Tab */}
            {activeTab === "trivia" && (
              <div>
                <h2 className={`text-3xl font-bold mb-8 ${theme.primary}`}>Fun Facts & Trivia</h2>
                {character.trivia && character.trivia.length > 0 ? (
                  <div className="space-y-6">
                    {character.trivia.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${theme.badge}`}>
                          {item.category}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-center py-12">No trivia available yet.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
