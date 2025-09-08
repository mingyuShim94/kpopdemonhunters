import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { characterDetails as characters, characterSummaries } from "../../data/characters";
import CharacterPageClient from "../../components/CharacterPageClient";

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
    <CharacterPageClient 
      character={character} 
      characterSummary={characterSummary} 
      slug={slug} 
    />
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
  const description = character.overview ? 
    `${character.overview.slice(0, 150)}...` : 
    `Learn about ${character.name}, ${character.role} in K-pop Demon Hunters.`;
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
      ...(character.abilities || []),
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