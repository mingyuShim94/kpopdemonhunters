import Link from "next/link";
import Footer from "../components/Footer";

const characters = [
  {
    id: "lumi",
    name: "Lumi",
    description: "A talented demon hunter with exceptional agility and a sharp wit. Known for her stylish combat techniques and unwavering determination.",
    image: "/placeholder-character.jpg",
    role: "Lead Hunter"
  },
  {
    id: "kai",
    name: "Kai",
    description: "The strategist of the group with powerful psychic abilities. His calm demeanor hides a fierce protective instinct for his team.",
    image: "/placeholder-character.jpg", 
    role: "Strategist"
  },
  {
    id: "nova",
    name: "Nova",
    description: "A young but incredibly powerful hunter who specializes in energy manipulation. Her cheerful personality contrasts with her devastating combat skills.",
    image: "/placeholder-character.jpg",
    role: "Energy Specialist"
  },
  {
    id: "zara",
    name: "Zara",
    description: "The team's tech expert and support specialist. She combines traditional Korean martial arts with cutting-edge technology.",
    image: "/placeholder-character.jpg",
    role: "Tech Specialist"
  }
];

export default function CharactersPage() {
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

      {/* Header */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Characters
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Meet the demon hunters who protect the world from supernatural threats while navigating the complexities of modern life.
          </p>
        </div>
      </section>

      {/* Character Grid */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {characters.map((character) => (
              <Link key={character.id} href={`/characters/${character.id}`} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <div className="text-6xl text-white/50">👤</div>
                  </div>
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