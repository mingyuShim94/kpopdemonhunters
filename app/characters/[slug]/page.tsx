import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";

const characters = {
  lumi: {
    name: "Lumi",
    role: "Lead Hunter",
    personality: `Lumi is the charismatic leader of the demon hunting team, known for her exceptional agility and strategic mind. She combines traditional Korean martial arts with modern combat techniques, making her a formidable opponent against supernatural threats.

Her leadership style is both inspiring and practical - she leads by example and never asks her team to do something she wouldn't do herself. Despite the weight of responsibility, Lumi maintains her sense of humor and her deep care for her teammates.

Born in Seoul, Lumi discovered her abilities during her teenage years when she encountered her first demon. This life-changing event set her on the path to becoming one of the most skilled hunters of her generation.`,
    quotes: [
      "Every demon we face is someone's nightmare. We're here to turn nightmares into dreams.",
      "Strength isn't just about power - it's about knowing when to fight and when to protect.",
      "The city sleeps peacefully because we stand guard. That's our honor and our duty."
    ],
    abilities: [
      "Enhanced Agility and Reflexes",
      "Energy Blade Manifestation", 
      "Tactical Leadership",
      "Demon Sense Detection"
    ],
    background: "Originally from Seoul, Lumi trained under traditional Korean martial arts masters before discovering her supernatural abilities. She founded the current demon hunting team after a series of demon attacks threatened the city.",
    relatedOST: ["Hunter's Anthem", "Seoul Nights", "Team Unity Theme"]
  },
  kai: {
    name: "Kai",
    role: "Strategist",
    personality: `Kai is the team's brilliant strategist and the voice of reason in chaotic situations. His psychic abilities allow him to analyze threats quickly and develop tactical solutions that save lives. He has a calm, thoughtful demeanor that masks his fierce determination to protect innocent people.

Despite his serious nature, Kai has a dry sense of humor and deeply values the bonds he's formed with his teammates. He often serves as the bridge between Lumi's bold leadership and the rest of the team's varied personalities.

His background in both ancient Korean philosophy and modern psychology gives him unique insights into both demon behavior and human nature.`,
    quotes: [
      "Knowledge is our greatest weapon against the unknown.",
      "Every battle won through strategy is a life saved through wisdom.",
      "The mind that stays calm in chaos can find solutions others miss."
    ],
    abilities: [
      "Psychic Analysis and Prediction",
      "Mental Shielding",
      "Strategic Combat Coordination",
      "Empathic Demon Reading"
    ],
    background: "Kai studied traditional Korean philosophy and modern psychology before his psychic abilities manifested. He joined Lumi's team after helping them solve a particularly complex demon case involving psychological manipulation.",
    relatedOST: ["Mind's Eye", "Strategic Calm", "Wisdom's Path"]
  },
  nova: {
    name: "Nova",
    role: "Energy Specialist", 
    personality: `Nova is the youngest member of the team but possesses incredibly powerful energy manipulation abilities. Her cheerful, optimistic personality often surprises those who witness her devastating combat capabilities. She brings light and hope to even the darkest situations.

Her enthusiasm for helping people is matched only by her dedication to mastering her abilities. Nova sees every challenge as an opportunity to grow stronger and protect more people. She has a special fondness for Korean street food and often brings snacks to share with the team.

Despite her young age, Nova's powers are among the most potent the team has encountered, and she continues to discover new applications for her energy manipulation.`,
    quotes: [
      "Every day is a chance to make someone's world a little brighter!",
      "Power without compassion is just destruction. I choose to illuminate, not devastate.",
      "The demons might be scary, but they've never faced someone who fights with pure joy!"
    ],
    abilities: [
      "Energy Manipulation and Projection",
      "Light-based Healing",
      "Energy Shield Creation",
      "Explosive Energy Bursts"
    ],
    background: "The youngest member of the team, Nova's abilities manifested during a demon attack on her school. Lumi and Kai rescued her and became her mentors, helping her channel her incredible power constructively.",
    relatedOST: ["Bright Future", "Energy Rising", "Youth and Power"]
  },
  zara: {
    name: "Zara",
    role: "Tech Specialist",
    personality: `Zara is the team's technological expert who seamlessly blends cutting-edge technology with traditional Korean martial arts. She's practical, resourceful, and has an engineer's mind for solving complex problems. Her gadgets and technical solutions often provide the edge the team needs in difficult battles.

She has a quiet confidence and prefers to let her work speak for itself. Zara is deeply respectful of Korean traditions while embracing innovation, seeing technology as a tool to honor and enhance ancient wisdom rather than replace it.

Her workshops are filled with both high-tech equipment and traditional Korean crafting tools, reflecting her unique approach to combining old and new.`,
    quotes: [
      "Tradition and innovation aren't opposites - they're partners in progress.",
      "Every piece of technology should serve a purpose: protecting those who can't protect themselves.",
      "The best solutions combine ancient wisdom with modern tools."
    ],
    abilities: [
      "Advanced Technical Engineering",
      "Traditional Korean Martial Arts",
      "Demon-Tracking Technology",
      "Protective Equipment Creation"
    ],
    background: "Zara comes from a family of traditional Korean craftsmen but showed early aptitude for modern technology. She developed specialized demon-hunting equipment after her hometown was attacked, combining her engineering skills with her martial arts training.",
    relatedOST: ["Tech and Tradition", "Innovation's Edge", "Craftsman's Heart"]
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
              <div className="aspect-square bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-8xl text-white/50">👤</div>
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
  return [
    { slug: 'lumi' },
    { slug: 'kai' },
    { slug: 'nova' },
    { slug: 'zara' },
  ];
}