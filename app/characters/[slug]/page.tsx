import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import CharacterImage from "../../components/CharacterImage";

const characters = {
  rumi: {
    name: "Rumi",
    role: "HUNTR/X Leader",
    personality: `The leader and lead vocalist of HUNTR/X. A confident and charismatic leader who wields a saingeom sword in battle. She is the daughter of a former demon hunter and is the most dedicated of the trio to their mission.`,
    quotes: [
      "We fight for the light, with the power of our voices.",
      "A true leader protects her team, no matter the cost.",
      "The stage is our battlefield, and our music is our weapon."
    ],
    abilities: [
      "Master Swordswoman (Saingeom)",
      "Vocal Magic",
      "Demon Sealing",
      "Inspirational Leadership"
    ],
    background: "As the daughter of a legendary demon hunter from the Sunlight Sisters, Rumi was raised to embrace her destiny. She now leads HUNTR/X, balancing the pressures of stardom with the sacred duty of protecting humanity.",
    relatedOST: ["Golden", "TAKEDOWN", "What It Sounds Like"]
  },
  mira: {
    name: "Mira",
    role: "HUNTR/X Main Dancer",
    personality: `The visual and main dancer of the group. Mira is fierce and graceful, expressing her power through movement. Her weapon of choice is a deadly woldo, which she wields with precision and artistry.`,
    quotes: [
      "Actions speak louder than words. My dance speaks loudest.",
      "Find your rhythm, find your strength.",
      "We move as one, a storm of light against the darkness."
    ],
    abilities: [
      "Woldo Mastery",
      "Dance-Based Combat",
      "Superhuman Agility",
      "Protective Aura"
    ],
    background: "A prodigy in both traditional and modern dance, Mira discovered her demon-hunting abilities when her movements began to generate protective energy. She brings a unique, fluid fighting style to the team.",
    relatedOST: ["How It's Done", "TAKEDOWN", "Golden"]
  },
  zoey: {
    name: "Zoey",
    role: "HUNTR/X Main Rapper",
    personality: `The main rapper, lyricist, and the youngest member (maknae) of HUNTR/X. Zoey is sharp, witty, and rebellious. She uses throwing knives with deadly accuracy and channels her energy into her powerful lyrics.`,
    quotes: [
      "My rhymes hit as hard as my blades.",
      "They call me the maknae, but I'm the one you should fear.",
      "Never underestimate the power of a sharp tongue and a sharper knife."
    ],
    abilities: [
      "Expert Marksmanship (Throwing Knives)",
      "Lyrical Incantations",
      "Stealth",
      "Rapid Attacks"
    ],
    background: "Zoey grew up on the streets, honing her survival instincts and her skills as a rapper. After discovering her lineage, she joined HUNTR/X, bringing a raw, untamed energy to the group's dynamic.",
    relatedOST: ["How It's Done", "TAKEDOWN", "Golden"]
  },
  jinu: {
    name: "Jinu",
    role: "Saja Boys Leader",
    personality: `The leader of the Saja Boys and a demon with a haunting past. He was a musician centuries ago who made a deal with the demon Gwi-Ma. He is a direct foil to Rumi, torn between his demonic nature and his lingering humanity.`,
    quotes: [
      "The world only understands power.",
      "My music is a curse, a beautiful, irresistible curse.",
      "We offer obsession, and they give us their souls."
    ],
    abilities: [
      "Demonic Charm",
      "Soul Absorption",
      "Shadow Manipulation",
      "Haunting Vocals"
    ],
    background: "Once a gifted musician, Jinu made a pact with the demon king Gwi-Ma to achieve eternal fame. Now, he leads the Saja Boys, using their music to drain energy from fans and weaken the barrier protecting the human world.",
    relatedOST: ["Soda Pop", "Your Idol", "Free"]
  },
  celine: {
    name: "Celine",
    role: "Mentor",
    personality: `A former demon hunter and member of the legendary band Sunlight Sisters. Celine is a wise and powerful mentor to HUNTR/X, guiding them with a firm but loving hand. She is also Rumi's adoptive mother.`,
    quotes: [
      "The fight is not just yours, it is a legacy.",
      "A true hunter fights with heart, not just with steel.",
      "Protect the balance, and protect each other."
    ],
    abilities: [
      "Veteran Demon Hunter",
      "Mentorship",
      "Protective Magic",
      "Vast Knowledge of Demon Lore"
    ],
    background: "As a member of the Sunlight Sisters, Celine fought alongside Rumi's mother. After her friend's fall, she retired from the front lines and dedicated her life to raising Rumi and preparing the next generation of hunters.",
    relatedOST: ["Free"]
  },
  "gwi-ma": {
    name: "Gwi-Ma",
    role: "Demon King",
    personality: `The ruthless and manipulative demon king. Gwi-Ma is the ultimate villain, a being of immense power who seeks to shatter the barrier between the demon and human worlds to reign over both.`,
    quotes: [
      "The world will burn, and from the ashes, my kingdom will rise.",
      "Their little songs are no match for my eternal power.",
      "All souls are mine to command."
    ],
    abilities: [
      "Overwhelming Demonic Power",
      "Manipulation and Corruption",
      "Reality Warping",
      "Command of Demon Armies"
    ],
    background: "An ancient and powerful demon, Gwi-Ma has been plotting his return for centuries. He manipulates the Saja Boys as his pawns to break the magical barrier maintained by HUNTR/X's music.",
    relatedOST: ["Your Idol"]
  },
  abby: {
    name: "Abby",
    role: "Saja Boys Member",
    personality: `A member of the Saja Boys with a charismatic and alluring presence.`,
    quotes: [
      "Follow the music, lose yourself in the rhythm.",
      "We are what you desire most.",
      "Your soul sings the sweetest melody."
    ],
    abilities: [
      "Hypnotic Performance",
      "Soul Enchantment",
      "Demonic Agility",
      "Dark Charisma"
    ],
    background: "As a member of the Saja Boys, Abby uses his supernatural charm to captivate audiences and drain their spiritual energy for Gwi-Ma's dark purposes.",
    relatedOST: ["Soda Pop", "Your Idol"]
  },
  romance: {
    name: "Romance",
    role: "Saja Boys Member",
    personality: `A member of the Saja Boys who specializes in emotional manipulation and seduction.`,
    quotes: [
      "Love is just another form of possession.",
      "Your heart belongs to us now.",
      "Romance is eternal, just like your servitude."
    ],
    abilities: [
      "Emotional Manipulation",
      "Seductive Aura",
      "Heart Corruption",
      "Illusion Creation"
    ],
    background: "Romance preys on the emotional vulnerabilities of fans, using the power of infatuation to bind souls to the Saja Boys' dark influence.",
    relatedOST: ["Soda Pop", "Your Idol"]
  },
  mystery: {
    name: "Mystery",
    role: "Saja Boys Member",
    personality: `The enigmatic member of the Saja Boys who shrouds himself in shadows and secrecy.`,
    quotes: [
      "The unknown is where true power lies.",
      "Fear what you cannot understand.",
      "In darkness, we are strongest."
    ],
    abilities: [
      "Shadow Manipulation",
      "Stealth",
      "Fear Induction",
      "Psychic Interference"
    ],
    background: "Mystery operates from the shadows, using fear and uncertainty as weapons. His true nature remains hidden, making him one of the most dangerous Saja Boys.",
    relatedOST: ["Soda Pop", "Your Idol"]
  },
  baby: {
    name: "Baby",
    role: "Saja Boys Member",
    personality: `The youngest member of the Saja Boys, whose innocent appearance masks a sinister nature.`,
    quotes: [
      "Don't let my age fool you.",
      "The youngest flame burns the brightest.",
      "Innocence is just another mask to wear."
    ],
    abilities: [
      "Deceptive Innocence",
      "Rapid Growth",
      "Energy Absorption",
      "Youthful Agility"
    ],
    background: "Baby uses his youthful appearance to lower the guard of victims, making him particularly effective at targeting younger fans and stealing their energy.",
    relatedOST: ["Soda Pop", "Your Idol"]
  },
  bobby: {
    name: "Bobby",
    role: "Manager",
    personality: `The enthusiastic and dedicated manager of HUNTR/X who supports the team both professionally and personally.`,
    quotes: [
      "Your success is my success.",
      "Behind every great group is a great manager.",
      "We'll face whatever comes together."
    ],
    abilities: [
      "Strategic Planning",
      "Industry Connections",
      "Team Coordination",
      "Crisis Management"
    ],
    background: "Bobby discovered HUNTR/X's potential early and has been instrumental in balancing their public careers with their secret demon-hunting duties.",
    relatedOST: ["Golden"]
  }
};

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

      {/* Background */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Background</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-purple-200 leading-relaxed">{character.background}</p>
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