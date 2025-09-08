"use client";

import Link from "next/link";
import Footer from "./Footer";
import CharacterImage from "./CharacterImage";


interface Character {
  fullName?: string;
  name: string;
  gender?: string;
  species?: string;
  nationality?: string;
  age?: string;
  affiliatedGroup?: string;
  position?: string;
  weapon?: string;
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

interface PerformanceOutfit {
  name: string;
  description: string;
  occasion: string;
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
  weaponEvolution?: string;
  storyArc?: string;
  relationships?: Relationship[];
  trivia?: TriviaItem[];
  relatedOST?: string[];
}

function InfoBox({ character }: { character: CharacterData }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-8">
      <h3 className="text-xl font-bold text-white mb-4 text-center border-b border-white/20 pb-2">
        {character.fullName || character.name}
      </h3>
      <div className="space-y-3 text-sm">
        {character.fullName && (
          <div className="grid grid-cols-3 gap-2">
            <span className="text-purple-300 font-semibold">Full Name:</span>
            <span className="text-white col-span-2">{character.fullName}</span>
          </div>
        )}
        {character.gender && (
          <div className="grid grid-cols-3 gap-2">
            <span className="text-purple-300 font-semibold">Gender:</span>
            <span className="text-white col-span-2">{character.gender}</span>
          </div>
        )}
        {character.species && (
          <div className="grid grid-cols-3 gap-2">
            <span className="text-purple-300 font-semibold">Species:</span>
            <span className="text-white col-span-2">{character.species}</span>
          </div>
        )}
        {character.nationality && (
          <div className="grid grid-cols-3 gap-2">
            <span className="text-purple-300 font-semibold">Nationality:</span>
            <span className="text-white col-span-2">{character.nationality}</span>
          </div>
        )}
        {character.age && (
          <div className="grid grid-cols-3 gap-2">
            <span className="text-purple-300 font-semibold">Age:</span>
            <span className="text-white col-span-2">{character.age}</span>
          </div>
        )}
        {character.affiliatedGroup && (
          <div className="grid grid-cols-3 gap-2">
            <span className="text-purple-300 font-semibold">Group:</span>
            <span className="text-white col-span-2">{character.affiliatedGroup}</span>
          </div>
        )}
        {character.position && (
          <div className="grid grid-cols-3 gap-2">
            <span className="text-purple-300 font-semibold">Position:</span>
            <span className="text-white col-span-2">{character.position}</span>
          </div>
        )}
        {character.weapon && (
          <div className="grid grid-cols-3 gap-2">
            <span className="text-purple-300 font-semibold">Weapon:</span>
            <span className="text-white col-span-2">{character.weapon}</span>
          </div>
        )}
        {character.family && character.family.length > 0 && (
          <div className="grid grid-cols-3 gap-2">
            <span className="text-purple-300 font-semibold">Family:</span>
            <div className="col-span-2 space-y-1">
              {character.family.map((member, index) => (
                <div key={index} className="text-white text-xs">
                  <span className="text-purple-200">{member.relation}:</span> {member.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {character.voiceActors && (
          <div className="grid grid-cols-3 gap-2">
            <span className="text-purple-300 font-semibold">Voice Actors:</span>
            <div className="col-span-2 space-y-1">
              {character.voiceActors.en && (
                <div className="text-white text-xs">
                  <span className="text-purple-200">EN:</span> {character.voiceActors.en}
                </div>
              )}
              {character.voiceActors.kr && (
                <div className="text-white text-xs">
                  <span className="text-purple-200">KR:</span> {character.voiceActors.kr}
                </div>
              )}
              {character.voiceActors.jp && (
                <div className="text-white text-xs">
                  <span className="text-purple-200">JP:</span> {character.voiceActors.jp}
                </div>
              )}
            </div>
          </div>
        )}
        {character.singingVoice && (
          <div className="grid grid-cols-3 gap-2">
            <span className="text-purple-300 font-semibold">Singing Voice:</span>
            <div className="col-span-2 space-y-1">
              {character.singingVoice.en && (
                <div className="text-white text-xs">
                  <span className="text-purple-200">EN:</span> {character.singingVoice.en}
                </div>
              )}
              {character.singingVoice.kr && (
                <div className="text-white text-xs">
                  <span className="text-purple-200">KR:</span> {character.singingVoice.kr}
                </div>
              )}
              {character.singingVoice.jp && (
                <div className="text-white text-xs">
                  <span className="text-purple-200">JP:</span> {character.singingVoice.jp}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PerformanceOutfits({ outfits }: { outfits: PerformanceOutfit[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {outfits.map((outfit, index) => (
        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:scale-105 transition-transform">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">👗</span>
            <h4 className="text-purple-300 font-semibold">{outfit.name}</h4>
          </div>
          <p className="text-purple-200 text-sm mb-2">
            <span className="font-semibold">Occasion:</span> {outfit.occasion}
          </p>
          <p className="text-white text-sm">{outfit.description}</p>
        </div>
      ))}
    </div>
  );
}

function TriviaCards({ trivia }: { trivia: TriviaItem[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {trivia.map((item, index) => (
        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:scale-105 transition-transform">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">✨</span>
            <div>
              <span className="text-purple-300 text-xs font-semibold uppercase tracking-wide">{item.category}</span>
              <h4 className="text-white font-semibold">{item.title}</h4>
            </div>
          </div>
          <p className="text-purple-200 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function SectionNavigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sticky top-0 z-10 bg-black/40 backdrop-blur-sm border-b border-white/10 py-3 mb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-center text-sm">
          {[
            { id: 'overview', label: '📖 Overview' },
            { id: 'appearance', label: '👗 Appearance' },
            { id: 'personality', label: '🧠 Personality' },
            { id: 'abilities', label: '⚔️ Abilities' },
            { id: 'story-arc', label: '📜 Story Arc' },
            { id: 'relationships', label: '💕 Relationships' },
            { id: 'trivia', label: '✨ Trivia' },
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 text-purple-300 rounded-full transition-colors"
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

interface CharacterPageClientProps {
  character: CharacterData;
  characterSummary?: {
    image?: string;
    name: string;
    role: string;
  };
  slug: string;
}

export default function CharacterPageClient({ character, characterSummary, slug }: CharacterPageClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-white hover:text-purple-300 transition-colors">
                KDH Wiki
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/characters" className="text-purple-300 font-semibold">
                Characters
              </Link>
              <Link href="/ost" className="text-white hover:text-purple-300 transition-colors">
                OST
              </Link>
              <Link href="/culture" className="text-white hover:text-purple-300 transition-colors">
                Korean Culture
              </Link>
            </div>
            <div className="md:hidden flex space-x-4">
              <Link href="/characters" className="text-purple-300 font-semibold text-sm">
                Chars
              </Link>
              <Link href="/ost" className="text-white hover:text-purple-300 transition-colors text-sm">
                OST
              </Link>
              <Link href="/culture" className="text-white hover:text-purple-300 transition-colors text-sm">
                Culture
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/characters" className="text-purple-300 hover:text-purple-200 mb-8 inline-block">
            ← Back to Characters
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Character Image */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl overflow-hidden mb-6">
                <CharacterImage
                  src={characterSummary?.image || `/images/characters/${slug}.webp`}
                  alt={`${character.name} character portrait`}
                  name={character.name}
                  role={character.role}
                  aspectRatio="square"
                />
              </div>
              {/* Info Box */}
              <InfoBox character={character} />
            </div>
            
            {/* Character Title & Quick Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white">{character.name}</h1>
                {character.koreanName && (
                  <span className="text-2xl md:text-3xl text-purple-300 font-medium">
                    {character.koreanName}
                  </span>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-600/30 text-purple-200 px-4 py-2 rounded-full">
                  {character.role}
                </span>
                {character.species && (
                  <span className="bg-indigo-600/30 text-indigo-200 px-4 py-2 rounded-full">
                    {character.species}
                  </span>
                )}
              </div>

              {character.quotes && character.quotes.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Memorable Quotes</h3>
                  <div className="space-y-4">
                    {character.quotes.map((quote, index) => (
                      <blockquote key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 border-l-4 border-l-purple-400">
                        <p className="text-purple-200 text-lg italic">&ldquo;{quote}&rdquo;</p>
                        <footer className="text-purple-300 mt-2">— {character.name}</footer>
                      </blockquote>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <SectionNavigation />

      {/* Overview */}
      {character.overview && (
        <section id="overview" className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-4xl">📖</span>
              Overview
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-purple-200 leading-relaxed">{character.overview}</p>
            </div>
          </div>
        </section>
      )}

      {/* Appearance */}
      {character.appearance && (
        <section id="appearance" className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-4xl">👗</span>
              Appearance
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-8">
              <p className="text-purple-200 leading-relaxed">{character.appearance}</p>
            </div>
            
            {character.performanceOutfits && character.performanceOutfits.length > 0 && (
              <>
                <h3 className="text-2xl font-bold text-white mb-6">Performance Outfits</h3>
                <PerformanceOutfits outfits={character.performanceOutfits} />
              </>
            )}
          </div>
        </section>
      )}

      {/* Personality */}
      <section id="personality" className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">🧠</span>
            Personality
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-purple-200 leading-relaxed space-y-4">
              {character.personality.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Abilities */}
      <section id="abilities" className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-4xl">⚔️</span>
            Abilities
          </h2>
          <div className="space-y-4">
            {character.abilities.map((ability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-purple-200 leading-relaxed">{ability}</div>
              </div>
            ))}
          </div>
          
          {character.weaponEvolution && (
            <div className="mt-6 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg p-6 border border-purple-400/30">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">🗡️</span>
                Weapon Evolution
              </h3>
              <p className="text-purple-200">{character.weaponEvolution}</p>
            </div>
          )}
        </div>
      </section>

      {/* Story Arc */}
      {character.storyArc && (
        <section id="story-arc" className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-4xl">📜</span>
              Story Arc
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-purple-200 leading-relaxed space-y-4">
                {character.storyArc.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Relationships */}
      {character.relationships && character.relationships.length > 0 && (
        <section id="relationships" className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-4xl">💕</span>
              Relationships
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {character.relationships.map((rel, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{rel.name}</h3>
                    <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm">
                      {rel.relation}
                    </span>
                  </div>
                  <p className="text-purple-200">{rel.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trivia */}
      {character.trivia && character.trivia.length > 0 && (
        <section id="trivia" className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-4xl">✨</span>
              Behind the Scenes & Trivia
            </h2>
            <TriviaCards trivia={character.trivia} />
          </div>
        </section>
      )}

      {/* Related OST */}
      {character.relatedOST && character.relatedOST.length > 0 && (
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="text-4xl">🎵</span>
              Related OST
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {character.relatedOST.map((track, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:scale-105 transition-transform">
                  <div className="text-purple-200 font-semibold">{track}</div>
                  <Link href="/ost" className="text-purple-300 text-sm hover:text-purple-200 transition-colors">
                    Listen →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}