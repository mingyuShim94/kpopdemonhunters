import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Footer from "../../components/Footer";
import CharacterImage from "../../components/CharacterImage";
import { characterDetails as characters } from "../../data/characters";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CharacterPage({ params }: PageProps) {
  const { slug } = await params;
  const character = characters[slug as keyof typeof characters];
  
  if (!character) {
    notFound();
  }

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

      {/* Character Header */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/characters" className="text-purple-300 hover:text-purple-200 mb-8 inline-block">
            ← Back to Characters
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="rounded-2xl overflow-hidden mb-6">
                <CharacterImage
                  src={`/images/characters/${slug}.jpg`}
                  alt={`${character.name} character portrait`}
                  name={character.name}
                  role={character.role}
                  aspectRatio="square"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white">{character.name}</h1>
                <span className="bg-purple-600/30 text-purple-200 px-4 py-2 rounded-full">
                  {character.role}
                </span>
              </div>
              
              <div className="space-y-4 text-purple-200 leading-relaxed">
                {character.personality.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abilities */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Abilities</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {character.abilities.map((ability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-purple-200 font-semibold">{ability}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memorable Quotes */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Memorable Quotes</h2>
          <div className="space-y-6">
            {character.quotes.map((quote, index) => (
              <blockquote key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 border-l-4 border-l-purple-400">
                <p className="text-purple-200 text-lg italic">&ldquo;{quote}&rdquo;</p>
                <footer className="text-purple-300 mt-2">— {character.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Character Stats */}
      {character.age && (
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Character Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Basic Info</h3>
                <div className="space-y-3 text-purple-200">
                  {character.koreanName && <div><span className="font-semibold">Korean Name:</span> {character.koreanName}</div>}
                  {character.age && <div><span className="font-semibold">Age:</span> {character.age}</div>}
                  {character.height && <div><span className="font-semibold">Height:</span> {character.height}</div>}
                  {character.weapon && <div><span className="font-semibold">Weapon:</span> {character.weapon}</div>}
                  {character.voiceActor && <div><span className="font-semibold">Voice Actor:</span> {character.voiceActor}</div>}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Personal Details</h3>
                <div className="space-y-3 text-purple-200">
                  {character.favoriteFood && <div><span className="font-semibold">Favorite Food:</span> {character.favoriteFood}</div>}
                  {character.combatStyle && <div><span className="font-semibold">Combat Style:</span> {character.combatStyle}</div>}
                  {character.hobbies && (
                    <div>
                      <span className="font-semibold">Hobbies:</span> {character.hobbies.join(', ')}
                    </div>
                  )}
                  {character.fears && (
                    <div>
                      <span className="font-semibold">Fears:</span> {character.fears.join(', ')}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Relationships */}
      {character.relationships && (
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Relationships</h2>
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

      {/* Background */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Background</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="text-purple-200 leading-relaxed space-y-4">
              {character.background.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related OST */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Related OST</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {character.relatedOST.map((track, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-purple-200 font-semibold">{track}</div>
                <Link href="/ost" className="text-purple-300 text-sm hover:text-purple-200 transition-colors">
                  Listen →
                </Link>
              </div>
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

export async function generateStaticParams() {
  return Object.keys(characters).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const character = characters[slug as keyof typeof characters];
  
  if (!character) {
    return {
      title: 'Character Not Found - KDH Wiki',
      description: 'The requested character could not be found in the KDH Wiki.',
    };
  }

  const title = `${character.name} - ${character.role} | KDH Wiki`;
  const description = `Learn about ${character.name}, ${character.role} in K-pop Demon Hunters. ${character.personality.slice(0, 150)}...`;
  const canonicalUrl = `https://kpopdemonhunters.net/characters/${slug}`;

  return {
    title,
    description,
    keywords: [
      character.name,
      character.role,
      'K-pop Demon Hunters',
      'KDH',
      'Character',
      'Fan Wiki',
      ...character.abilities,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'KDH Wiki',
      images: [
        {
          url: `/images/characters/${slug}.webp`,
          width: 800,
          height: 800,
          alt: `${character.name} character portrait`,
        },
      ],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/images/characters/${slug}.webp`],
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'application/ld+json': JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": character.name,
        "description": character.personality,
        "url": canonicalUrl,
        "image": `https://kpopdemonhunters.net/images/characters/${slug}.webp`,
        "jobTitle": character.role,
        "memberOf": {
          "@type": "Organization",
          "name": character.role.includes('HUNTR/X') ? 'HUNTR/X' : 
                 character.role.includes('Saja Boys') ? 'Saja Boys' : 'K-pop Demon Hunters',
          "url": "https://kpopdemonhunters.net"
        },
        "knowsAbout": character.abilities,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        }
      })
    },
  };
}