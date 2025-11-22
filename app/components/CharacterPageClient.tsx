"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronLeft, Quote, Music } from "lucide-react";
import Footer from "./Footer";
import CharacterImage from "./CharacterImage";
import ScrollToTop from "./ScrollToTop";
import MobileButtons from "./MobileButtons";
import { PerformanceOutfit } from "../data/characters";

// ... (Interfaces and helper functions will be updated in next steps)
// Placeholder for interfaces to make this chunk valid TSX if possible, 
// but since we are replacing the whole file eventually, we can rely on the existing ones if we don't touch them yet.
// However, I need to make sure the file remains valid.
// I will assume the interfaces and helper functions are ABOVE this component in the file or I will include them if I'm replacing the whole file.
// Wait, I can't easily "skip" the middle parts with replace_file_content if I'm replacing from line 1 to 811.
// I should use multi_replace_file_content to replace specific blocks.

// Let's try replacing the IMPORTS first.


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

// Character color theme utility function
function getCharacterTheme(characterName: string) {
  switch (characterName) {
    case "Zoey":
      return {
        primary: "text-teal-300",
        secondary: "text-teal-200",
        bg: "bg-teal-600/30",
        accent: "bg-yellow-600/30 text-yellow-200",
      };
    case "Mira":
      return {
        primary: "text-pink-300",
        secondary: "text-pink-200",
        bg: "bg-pink-600/30",
        accent: "bg-red-600/30 text-red-200",
      };
    case "Jinu":
      return {
        primary: "text-amber-300",
        secondary: "text-amber-200",
        bg: "bg-amber-600/30",
        accent: "bg-orange-600/30 text-orange-200",
      };
    case "Abby":
      return {
        primary: "text-emerald-300",
        secondary: "text-emerald-200",
        bg: "bg-emerald-600/30",
        accent: "bg-green-600/30 text-green-200",
      };
    case "Baby":
      return {
        primary: "text-cyan-300",
        secondary: "text-cyan-200",
        bg: "bg-cyan-600/30",
        accent: "bg-blue-600/30 text-blue-200",
      };
    case "Mystery":
      return {
        primary: "text-slate-300",
        secondary: "text-slate-200",
        bg: "bg-slate-600/30",
        accent: "bg-gray-600/30 text-gray-200",
      };
    case "Romance":
      return {
        primary: "text-rose-300",
        secondary: "text-rose-200",
        bg: "bg-rose-600/30",
        accent: "bg-pink-600/30 text-pink-200",
      };
    case "Gwi-Ma":
      return {
        primary: "text-red-300",
        secondary: "text-red-200",
        bg: "bg-red-600/30",
        accent: "bg-orange-600/30 text-orange-200",
      };
    case "Celine":
      return {
        primary: "text-violet-300",
        secondary: "text-violet-200",
        bg: "bg-violet-600/30",
        accent: "bg-purple-600/30 text-purple-200",
      };
    case "Bobby":
      return {
        primary: "text-yellow-300",
        secondary: "text-yellow-200",
        bg: "bg-yellow-600/30",
        accent: "bg-amber-600/30 text-amber-200",
      };
    case "Derpy":
      return {
        primary: "text-blue-300",
        secondary: "text-blue-200",
        bg: "bg-blue-600/30",
        accent: "bg-cyan-600/30 text-cyan-200",
      };
    case "Sussie":
      return {
        primary: "text-slate-300",
        secondary: "text-slate-200",
        bg: "bg-slate-600/30",
        accent: "bg-gray-600/30 text-gray-200",
      };
    default:
      return {
        primary: "text-purple-300",
        secondary: "text-purple-200",
        bg: "bg-purple-600/30",
        accent: "bg-indigo-600/30 text-indigo-200",
      };
  }
}

function InfoBox({ character }: { character: CharacterData }) {
  const theme = getCharacterTheme(character.name);

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-8 relative overflow-hidden">
      <div className={`absolute top-0 left-0 right-0 h-1 ${theme.bg.replace('/30', '')}`} />

      <h3 className="text-2xl font-bold text-white mb-6 text-center pb-4 border-b border-white/10">
        {character.fullName || character.name}
      </h3>
      <div className="space-y-4 text-sm">
        {character.fullName && (
          <div className="grid grid-cols-3 gap-4 items-center">
            <span className={`font-bold uppercase tracking-wider text-xs ${theme.primary}`}>Full Name</span>
            <span className="text-gray-200 col-span-2 font-medium">{character.fullName}</span>
          </div>
        )}
        {character.gender && (
          <div className="grid grid-cols-3 gap-4 items-center">
            <span className={`font-bold uppercase tracking-wider text-xs ${theme.primary}`}>Gender</span>
            <span className="text-gray-200 col-span-2 font-medium">{character.gender}</span>
          </div>
        )}
        {character.species && (
          <div className="grid grid-cols-3 gap-4 items-center">
            <span className={`font-bold uppercase tracking-wider text-xs ${theme.primary}`}>Species</span>
            <span className="text-gray-200 col-span-2 font-medium">{character.species}</span>
          </div>
        )}
        {character.nationality && (
          <div className="grid grid-cols-3 gap-4 items-center">
            <span className={`font-bold uppercase tracking-wider text-xs ${theme.primary}`}>
              Nationality
            </span>
            <span className="text-gray-200 col-span-2 font-medium">
              {character.nationality}
            </span>
          </div>
        )}
        {character.age && (
          <div className="grid grid-cols-3 gap-4 items-center">
            <span className={`font-bold uppercase tracking-wider text-xs ${theme.primary}`}>Age</span>
            <span className="text-gray-200 col-span-2 font-medium">{character.age}</span>
          </div>
        )}
        {character.affiliatedGroup && (
          <div className="grid grid-cols-3 gap-4 items-center">
            <span className={`font-bold uppercase tracking-wider text-xs ${theme.primary}`}>Group</span>
            <span className="text-gray-200 col-span-2 font-medium">
              {character.affiliatedGroup}
            </span>
          </div>
        )}
        {character.position && (
          <div className="grid grid-cols-3 gap-4 items-center">
            <span className={`font-bold uppercase tracking-wider text-xs ${theme.primary}`}>Position</span>
            <span className="text-gray-200 col-span-2 font-medium">{character.position}</span>
          </div>
        )}
        {character.weapon && (
          <div className="grid grid-cols-3 gap-4 items-center">
            <span className={`font-bold uppercase tracking-wider text-xs ${theme.primary}`}>Weapon</span>
            <span className="text-gray-200 col-span-2 font-medium">{character.weapon}</span>
          </div>
        )}
        {character.family && character.family.length > 0 && (
          <div className="grid grid-cols-3 gap-4 items-start">
            <span className={`font-bold uppercase tracking-wider text-xs ${theme.primary} mt-1`}>Family</span>
            <div className="col-span-2 space-y-2">
              {character.family.map((member, index) => (
                <div key={index} className="text-gray-200 text-sm flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded bg-white/5 ${theme.secondary}`}>{member.relation}</span>
                  <span>{member.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {character.voiceActors && (
          <div className="grid grid-cols-3 gap-4 items-start">
            <span className={`font-bold uppercase tracking-wider text-xs ${theme.primary} mt-1`}>
              Voice Actors
            </span>
            <div className="col-span-2 space-y-2">
              {character.voiceActors.en && (
                <div className="text-gray-200 text-sm flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded bg-white/5 ${theme.secondary}`}>EN</span>
                  <span>{character.voiceActors.en}</span>
                </div>
              )}
              {character.voiceActors.kr && (
                <div className="text-gray-200 text-sm flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded bg-white/5 ${theme.secondary}`}>KR</span>
                  <span>{character.voiceActors.kr}</span>
                </div>
              )}
              {character.voiceActors.jp && (
                <div className="text-gray-200 text-sm flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded bg-white/5 ${theme.secondary}`}>JP</span>
                  <span>{character.voiceActors.jp}</span>
                </div>
              )}
            </div>
          </div>
        )}
        {character.singingVoice && (
          <div className="grid grid-cols-3 gap-4 items-start">
            <span className={`font-bold uppercase tracking-wider text-xs ${theme.primary} mt-1`}>
              Singing Voice
            </span>
            <div className="col-span-2 space-y-2">
              {character.singingVoice.en && (
                <div className="text-gray-200 text-sm flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded bg-white/5 ${theme.secondary}`}>EN</span>
                  <span>{character.singingVoice.en}</span>
                </div>
              )}
              {character.singingVoice.kr && (
                <div className="text-gray-200 text-sm flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded bg-white/5 ${theme.secondary}`}>KR</span>
                  <span>{character.singingVoice.kr}</span>
                </div>
              )}
              {character.singingVoice.jp && (
                <div className="text-gray-200 text-sm flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded bg-white/5 ${theme.secondary}`}>JP</span>
                  <span>{character.singingVoice.jp}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function OutfitGallery({
  characterName,
  outfits,
}: {
  characterName: string;
  outfits?: PerformanceOutfit[];
}) {
  const theme = getCharacterTheme(characterName);
  const [imageStatuses, setImageStatuses] = useState<{ [key: number]: 'loading' | 'loaded' | 'error' }>({});

  if (!outfits || outfits.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
        <span className="text-gray-400 text-lg">No outfits available yet</span>
      </div>
    );
  }

  const handleImageLoad = (index: number) => {
    setImageStatuses(prev => ({ ...prev, [index]: 'loaded' }));
  };

  const handleImageError = (index: number) => {
    setImageStatuses(prev => ({ ...prev, [index]: 'error' }));
  };

  return (
    <div className="flex overflow-x-auto gap-6 pb-8 snap-x">
      {outfits.map((outfit, index) => {
        const imageStatus = imageStatuses[index] || 'loading';
        const hasImageError = imageStatus === 'error';

        return (
          <div
            key={index}
            className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 flex-shrink-0 w-72 snap-center"
          >
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src={hasImageError ? "/images/sample_outfit.png" : outfit.imagePath}
                alt={`${characterName} from Kpop Demon Hunters wearing ${outfit.name} outfit`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 80vw, 20vw"
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
                unoptimized={hasImageError}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h4 className={`text-xl font-bold ${theme.primary} mb-1 drop-shadow-lg`}>
                {outfit.name}
              </h4>
              <p className="text-sm text-gray-300 drop-shadow-lg line-clamp-2">
                {outfit.occasion}
              </p>
            </div>

            {hasImageError && (
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
                <div className="text-center p-4">
                  <span className="text-white text-lg font-semibold block mb-2">
                    Coming Soon
                  </span>
                  <span className="text-gray-400 text-sm">
                    {outfit.name}
                  </span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function TriviaCards({
  trivia,
  characterName,
}: {
  trivia: TriviaItem[];
  characterName: string;
}) {
  const theme = getCharacterTheme(characterName);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {trivia.map((item, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300"
        >
          <div className="flex items-start gap-4 mb-3">
            <div className="p-3 rounded-full bg-white/5 text-2xl">✨</div>
            <div>
              <span
                className={`${theme.primary} text-xs font-bold uppercase tracking-wider mb-1 block`}
              >
                {item.category}
              </span>
              <h4 className="text-lg font-bold text-white">{item.title}</h4>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed pl-[4.5rem]">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function SectionNavigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Approximate height of the fixed nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="sticky top-16 z-40 bg-black/60 backdrop-blur-md border-b border-white/10 py-4 mb-12 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-3 min-w-max md:justify-center">
          {[
            { id: "overview", label: "Overview", icon: "📖" },
            { id: "appearance", label: "Appearance", icon: "👗" },
            { id: "personality", label: "Personality", icon: "🧠" },
            { id: "abilities", label: "Abilities", icon: "⚔️" },
            { id: "story-arc", label: "Story", icon: "📜" },
            { id: "relationships", label: "Relationships", icon: "💕" },
            { id: "trivia", label: "Trivia", icon: "✨" },
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 rounded-full transition-all duration-300"
            >
              <span className="text-lg group-hover:scale-110 transition-transform">{section.icon}</span>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white whitespace-nowrap">{section.label}</span>
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

export default function CharacterPageClient({
  character,
  characterSummary,
  slug,
}: CharacterPageClientProps) {
  const theme = getCharacterTheme(character.name);
  const searchParams = useSearchParams();

  const fromTab = searchParams.get("fromTab");
  const backToCharactersUrl = fromTab
    ? `/characters?tab=${encodeURIComponent(fromTab)}`
    : "/characters";

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-sans text-white">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('/images/background.webp')",
            filter: "brightness(0.3) saturate(1.2) blur(2px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-900/20 to-black" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-80 transition-opacity">
                KDH Wiki
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/characters"
                className="text-white font-medium tracking-wide border-b-2 border-pink-500"
              >
                CHARACTERS
              </Link>
              <Link
                href="/ost"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                OST
              </Link>
              <Link
                href="/culture"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                CULTURE
              </Link>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-200 group"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </button>
            </div>
            <MobileButtons />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href={backToCharactersUrl}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </div>
            <span className="font-medium">Back to Characters</span>
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Character Image */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-3xl overflow-hidden mb-8 border border-white/10 shadow-2xl shadow-purple-500/10 relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <CharacterImage
                  src={
                    characterSummary?.image || `/images/characters/${slug}.webp`
                  }
                  alt={`${character.name} from Kpop Demon Hunters - detailed character profile and biography`}
                  name={character.name}
                  role={character.role}
                  aspectRatio="square"
                />
              </div>
              {/* Info Box */}
              <InfoBox character={character} />
            </motion.div>

            {/* Character Title & Quick Info */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className={`px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider ${theme.bg} ${theme.secondary} border border-white/10`}>
                    {character.role}
                  </span>
                  {character.species && (
                    <span className={`px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider bg-white/5 text-gray-300 border border-white/10`}>
                      {character.species}
                    </span>
                  )}
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-2 tracking-tight">
                  {character.name}
                </h1>
                {character.koreanName && (
                  <div className={`text-3xl md:text-4xl font-bold ${theme.primary} opacity-80`}>
                    {character.koreanName}
                  </div>
                )}
              </div>

              {character.quotes && character.quotes.length > 0 && (
                <div className="grid gap-4 mb-12">
                  {character.quotes.map((quote, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative overflow-hidden"
                    >
                      <Quote className="absolute top-4 right-4 w-8 h-8 text-white/5" />
                      <p className="text-xl md:text-2xl text-gray-200 italic font-light leading-relaxed relative z-10">
                        &ldquo;{quote}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Section Navigation inside the grid for desktop, or sticky below hero */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <SectionNavigation />

      <div className="max-w-5xl mx-auto px-4 pb-20 space-y-20 relative z-10">
        {/* Overview */}
        {character.overview && (
          <motion.section
            id="overview"
            className="scroll-mt-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-4xl">📖</span>
              Overview
            </h2>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 leading-relaxed text-lg text-gray-300">
              {character.overview}
            </div>
          </motion.section>
        )}

        {/* Appearance */}
        {character.appearance && (
          <motion.section
            id="appearance"
            className="scroll-mt-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-4xl">👗</span>
              Appearance
            </h2>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 leading-relaxed text-lg text-gray-300 mb-8">
              {character.appearance}
            </div>

            <h3 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-purple-500">Performance Outfits</h3>
            <OutfitGallery
              characterName={character.name}
              outfits={character.performanceOutfits}
            />
          </motion.section>
        )}

        {/* Personality */}
        <motion.section
          id="personality"
          className="scroll-mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🧠</span>
            Personality
          </h2>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-lg text-gray-300 space-y-6">
            {character.personality.split("\n\n").map((paragraph, index) => (
              <p key={index} className="leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </motion.section>

        {/* Abilities */}
        <motion.section
          id="abilities"
          className="scroll-mt-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">⚔️</span>
            Abilities
          </h2>
          <div className="grid gap-4">
            {character.abilities.map((ability, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-gray-200 leading-relaxed text-lg">{ability}</div>
              </div>
            ))}
          </div>

          {character.weaponEvolution && (
            <div className="mt-8 bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
              <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">🗡️</span>
                Weapon Evolution
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">{character.weaponEvolution}</p>
            </div>
          )}
        </motion.section>

        {/* Story Arc */}
        {character.storyArc && (
          <motion.section
            id="story-arc"
            className="scroll-mt-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-4xl">📜</span>
              Story Arc
            </h2>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-lg text-gray-300 space-y-6">
              {character.storyArc.split("\n\n").map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </motion.section>
        )}

        {/* Relationships */}
        {character.relationships && character.relationships.length > 0 && (
          <motion.section
            id="relationships"
            className="scroll-mt-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-4xl">💕</span>
              Relationships
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {character.relationships.map((rel, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-pink-500/30 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{rel.name}</h3>
                    <span className="bg-pink-500/10 text-pink-300 px-3 py-1 rounded-full text-sm font-medium border border-pink-500/20">
                      {rel.relation}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{rel.description}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Trivia */}
        {character.trivia && character.trivia.length > 0 && (
          <motion.section
            id="trivia"
            className="scroll-mt-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-4xl">✨</span>
              Behind the Scenes & Trivia
            </h2>
            <TriviaCards
              trivia={character.trivia}
              characterName={character.name}
            />
          </motion.section>
        )}

        {/* Related OST */}
        {character.relatedOST && character.relatedOST.length > 0 && (
          <motion.section
            className="scroll-mt-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-4xl">🎵</span>
              Related OST
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {character.relatedOST.map((track, index) => (
                <Link
                  key={index}
                  href="/ost"
                  className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Music className="w-6 h-6 text-cyan-400" />
                    <span className="text-xs text-gray-500 uppercase tracking-wider group-hover:text-cyan-300 transition-colors">Listen</span>
                  </div>
                  <div className="text-lg font-bold text-white mb-1">{track}</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300">View Lyrics & Video →</div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </div>

      <div className="relative z-10 mt-20">
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
