import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-white">KDH Wiki</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/characters" className="text-white hover:text-purple-300 transition-colors">
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
              <Link href="/characters" className="text-white hover:text-purple-300 transition-colors text-sm">
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
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            K-pop Demon Hunters
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Your ultimate guide to the characters, music, and Korean culture of the K-pop Demon Hunters universe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/characters"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Characters
            </Link>
            <Link 
              href="/ost"
              className="bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Listen to OST
            </Link>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/characters" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-2xl font-bold text-white mb-4">Characters</h3>
                <p className="text-purple-200">
                  Meet the demon hunters and discover their personalities, backgrounds, and memorable quotes.
                </p>
              </div>
            </Link>

            <Link href="/ost" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-2xl font-bold text-white mb-4">OST</h3>
                <p className="text-purple-200">
                  Explore the soundtrack with music videos, English lyrics, and track information.
                </p>
              </div>
            </Link>

            <Link href="/culture" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4">🏮</div>
                <h3 className="text-2xl font-bold text-white mb-4">Korean Culture</h3>
                <p className="text-purple-200">
                  Learn about Korean traditions, food, places, and modern culture featured in the anime.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Recent Updates</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-purple-200">
              Welcome to the KDH Wiki! We&apos;re continuously adding new character profiles, OST information, and cultural insights.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
