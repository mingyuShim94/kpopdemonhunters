import Link from "next/link";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import CharacterImage from "../components/CharacterImage";
import MobileNavigation from "../components/MobileNavigation";

const characters = [
  {
    id: "rumi",
    name: "Rumi",
    description:
      "The driven leader of HUNTR/X, haunted by a demonic secret. She channels her immense magical power through a sacred saingeom sword and her powerful voice. Voiced by Arden Cho (speaking) and EJAE (singing).",
    image: "/images/characters/rumi.webp",
    role: "HUNTR/X Leader",
  },
  {
    id: "mira",
    name: "Mira",
    description:
      "The fashion-forward main dancer of HUNTR/X. Mira's elegance translates to the battlefield where she wields a deadly woldo. Voiced by May Hong (speaking) and Audrey Nuna (singing).",
    image: "/images/characters/mira.webp",
    role: "HUNTR/X Main Dancer",
  },
  {
    id: "zoey",
    name: "Zoey",
    description:
      "The rebellious rapper, lyricist, and maknae of HUNTR/X. Zoey's sharp wit is as deadly as the throwing knives she uses in combat. Voiced by Ji-young Yoo (speaking) and Rei Ami (singing).",
    image: "/images/characters/zoey.webp",
    role: "HUNTR/X Main Rapper",
  },
  {
    id: "jinu",
    name: "Jinu",
    description:
      "The charismatic and conflicted leader of the rival group, Saja Boys. A former human who traded his soul for fame, he now serves the demon king. Voiced by Ahn Hyo-seop (speaking) and Andrew Choi (singing).",
    image: "/images/characters/jinu.webp",
    role: "Saja Boys Leader",
  },
  {
    id: "abby",
    name: "Abby 'Abs' Saja",
    description:
      "The muscular and intimidating member of the Saja Boys, providing brute force for the demonic group. Voiced by SungWon Cho (speaking) and Neckwav (singing).",
    image: "/images/characters/abby.webp",
    role: "Saja Boys Member",
  },
  {
    id: "romance",
    name: "Romance Saja",
    description:
      "The smooth-talking, romantic member of the Saja Boys, who uses his charm as a weapon. Voiced by Joel Kim Booster (speaking) and samUIL Lee (singing).",
    image: "/images/characters/romance.webp",
    role: "Saja Boys Member",
  },
  {
    id: "baby",
    name: "Baby Saja",
    description:
      "The deceptive maknae of the Saja Boys, whose youthful appearance hides a sinister nature. Vocals by Danny Chung.",
    image: "/images/characters/baby.webp",
    role: "Saja Boys Member",
  },
  {
    id: "gwi-ma",
    name: "Gwi-Ma",
    description:
      "The ultimate evil, a powerful and manipulative demon king seeking to merge the human and demon realms. Voiced by the legendary Lee Byung-hun.",
    image: "/images/characters/gwi-ma.webp",
    role: "Demon King",
  },
  {
    id: "celine",
    name: "Celine",
    description:
      "Rumi's adoptive mother and the wise mentor to HUNTR/X. A former K-pop star and demon hunter herself. Voiced by Yunjin Kim (speaking) and Lea Salonga (singing).",
    image: "/images/characters/celine.webp",
    role: "Mentor",
  },
  {
    id: "bobby",
    name: "Bobby",
    description:
      "The ever-enthusiastic and slightly clueless manager of HUNTR/X, trying to keep the group's demon-hunting life a secret. Voiced by Ken Jeong.",
    image: "/images/characters/bobby.webp",
    role: "Manager",
  },
  {
    id: "mystery",
    name: "Mystery",
    description:
      "A mysterious member of the Saja Boys with unknown motives and a quiet demeanor.",
    image: "/images/characters/mystery.webp",
    role: "Saja Boys Member",
  },
];

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
