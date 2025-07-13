import Link from "next/link";
import Footer from "../components/Footer";
import CharacterImage from "../components/CharacterImage";

const characters = [
  {
    id: "rumi",
    name: "Rumi",
    description:
      "The leader and lead vocalist of HUNTR/X. A confident and charismatic leader who wields a saingeom sword in battle. She is the daughter of a former demon hunter and is the most dedicated of the trio to their mission.",
    image: "/images/characters/rumi.jpg",
    role: "HUNTR/X Leader",
  },
  {
    id: "mira",
    name: "Mira",
    description:
      "The visual and main dancer of the group. Mira's weapon of choice is a woldo.",
    image: "/images/characters/mira.jpg",
    role: "HUNTR/X Main Dancer",
  },
  {
    id: "zoey",
    name: "Zoey",
    description:
      "The main rapper, lyricist, and the youngest member (maknae) of HUNTR/X. She utilizes throwing knives in combat.",
    image: "/images/characters/zoey.jpg",
    role: "HUNTR/X Main Rapper",
  },
  {
    id: "jinu",
    name: "Jinu",
    description:
      "The leader of the Saja Boys and a demon with a haunting past. He was a musician centuries ago who made a deal with the demon Gwi-Ma.",
    image: "/images/characters/jinu.jpg",
    role: "Saja Boys Leader",
  },
  {
    id: "abby",
    name: "Abby",
    description: "A member of the Saja Boys.",
    image: "/images/characters/abby.jpg",
    role: "Saja Boys Member",
  },
  {
    id: "romance",
    name: "Romance",
    description: "A member of the Saja Boys.",
    image: "/images/characters/romance.jpg",
    role: "Saja Boys Member",
  },
  {
    id: "mystery",
    name: "Mystery",
    description: "A member of the Saja Boys.",
    image: "/images/characters/mystery.jpg",
    role: "Saja Boys Member",
  },
  {
    id: "baby",
    name: "Baby",
    description: "The youngest member of the Saja Boys.",
    image: "/images/characters/baby.jpg",
    role: "Saja Boys Member",
  },
  {
    id: "celine",
    name: "Celine",
    description:
      "A former demon hunter and member of the band Sunlight Sisters with Rumi's mother. She serves as a mentor to HUNTR/X and is Rumi's adoptive mother.",
    image: "/images/characters/celine.jpg",
    role: "Mentor",
  },
  {
    id: "bobby",
    name: "Bobby",
    description: "The enthusiastic band manager of HUNTR/X.",
    image: "/images/characters/bobby.jpg",
    role: "Manager",
  },
  {
    id: "gwi-ma",
    name: "Gwi-Ma",
    description:
      "The ruthless and manipulative demon king who is the main villain of the film.",
    image: "/images/characters/gwi-ma.jpg",
    role: "Demon King",
  },
];

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
            <div className="md:hidden flex space-x-4">
              <Link
                href="/characters"
                className="text-purple-300 font-semibold text-sm"
              >
                Chars
              </Link>
              <Link
                href="/ost"
                className="text-white hover:text-purple-300 transition-colors text-sm"
              >
                OST
              </Link>
              <Link
                href="/culture"
                className="text-white hover:text-purple-300 transition-colors text-sm"
              >
                Culture
              </Link>
            </div>
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
