import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { characterDetails as characters, characterSummaries } from "../../data/characters";
import CharacterPageClient from "../../components/CharacterPageClient";
import StructuredData from "../../components/StructuredData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CharacterPage({ params }: PageProps) {
  const { slug } = await params;
  const character = characters[slug as keyof typeof characters];
  const characterSummary = characterSummaries.find(c => c.id === slug);
  
  if (!character) {
    notFound();
  }

  return (
    <>
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
            {
              "@type": "ListItem",
              position: 3,
              name: character.name,
              item: `https://kpopdemonhunters.net/characters/${slug}`,
            },
          ],
        }}
      />
      <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading character...</div>
      </div>}>
        <CharacterPageClient
          character={character}
          characterSummary={characterSummary}
          slug={slug}
        />
      </Suspense>
    </>
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

  // Special SEO optimization for trending characters based on Google Trends data
  const isRumi = slug === 'rumi';
  const isZoey = slug === 'zoey';
  const isGolden = slug === 'golden';
  const isMira = slug === 'mira';
  const isJinu = slug === 'jinu';

  // Optimized titles for trending search terms
  let title = `${character.name} - ${character.role} | KDH Wiki`;
  if (isRumi) {
    title = `Rumi - K-pop Star & Demon Hunter | HUNTR/X Leader | KDH Wiki`;
  } else if (isZoey) {
    title = `Zoey - K-pop Demon Hunter | HUNTR/X Vocalist & Lyricist | KDH Wiki`;
  } else if (isGolden) {
    title = `Golden - K-pop Demon Hunter | Character Profile | KDH Wiki`;
  } else if (isMira) {
    title = `Mira - K-pop Demon Hunter | HUNTR/X Main Dancer | KDH Wiki`;
  } else if (isJinu) {
    title = `Jinu - K-pop Demon Hunter | Saja Boys Leader | KDH Wiki`;
  }

  // Optimized descriptions for search intent
  let description = character.overview ?
    `${character.overview.slice(0, 150)}...` :
    `Learn about ${character.name}, ${character.role} in K-pop Demon Hunters.`;

  if (isRumi) {
    description = `Meet Rumi, the K-pop idol and leader of HUNTR/X from Kpop Demon Hunters. Discover her music career, demon hunting abilities, and half-demon secret in the KDH universe.`;
  } else if (isZoey) {
    description = `Discover Zoey from K-pop Demon Hunters, the Korean-American vocalist and lyricist of HUNTR/X. Learn about her demon hunting skills and role in the KDH universe.`;
  } else if (isGolden) {
    description = `Learn about Golden from K-pop Demon Hunters. Discover this character's role, abilities, and importance in the KDH storyline and universe.`;
  } else if (isMira) {
    description = `Meet Mira, the main dancer and choreographer of HUNTR/X from K-pop Demon Hunters. Explore her demon hunting abilities and character development in KDH.`;
  } else if (isJinu) {
    description = `Discover Jinu from K-pop Demon Hunters, the complex leader of rival boy band Saja Boys. Learn about his tragic past and relationship with HUNTR/X.`;
  }

  const canonicalUrl = `https://kpopdemonhunters.net/characters/${slug}`;

  // Enhanced keywords for trending search terms
  const baseKeywords = [
    character.name,
    character.role,
    'kpop demon hunters',
    'kdh wiki',
    'kdh character',
    'K-pop Demon Hunters',
    'KDH',
    'Character',
    'Fan Wiki',
    ...(character.abilities || []),
  ];

  // Character-specific trending keywords based on Google Trends
  let enhancedKeywords = baseKeywords;
  if (isRumi) {
    enhancedKeywords = [
      ...baseKeywords,
      'rumi kpop',
      'rumi k-pop demon hunters',
      'rumi huntr/x',
      'rumi leader',
      'kpop demon hunters rumi',
      'rumi main vocalist',
      'huntr/x kpop group',
      'rumi cambion',
      'rumi demon hunter',
      'who is rumi',
    ];
  } else if (isZoey) {
    enhancedKeywords = [
      ...baseKeywords,
      'kpop demon hunters zoey',
      'zoey kdh',
      'zoey huntr/x',
      'zoey k-pop demon hunters',
      'zoey korean american',
      'who is zoey',
      'zoey vocalist',
      'zoey lyricist',
    ];
  } else if (isGolden) {
    enhancedKeywords = [
      ...baseKeywords,
      'kpop demon hunters golden',
      'golden kdh',
      'golden k-pop demon hunters',
      'golden character',
      'who is golden',
      'golden lyrics',
      'golden song',
    ];
  } else if (isMira) {
    enhancedKeywords = [
      ...baseKeywords,
      'kpop demon hunters mira',
      'mira kdh',
      'mira huntr/x',
      'mira k-pop demon hunters',
      'mira main dancer',
      'who is mira',
      'mira choreographer',
    ];
  } else if (isJinu) {
    enhancedKeywords = [
      ...baseKeywords,
      'kpop demon hunters jinu',
      'jinu kdh',
      'jinu saja boys',
      'jinu k-pop demon hunters',
      'who is jinu',
      'jinu leader',
      'jinu demon',
    ];
  }

  return {
    title,
    description,
    keywords: enhancedKeywords,
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
        "description": character.overview || character.personality,
        "url": canonicalUrl,
        "image": `https://kpopdemonhunters.net/images/characters/${slug}.webp`,
        "jobTitle": character.role,
        "memberOf": {
          "@type": "Organization",
          "name": character.affiliatedGroup || (character.role.includes('HUNTR/X') ? 'HUNTR/X' : 
                 character.role.includes('Saja Boys') ? 'Saja Boys' : 'K-pop Demon Hunters'),
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