import Link from "next/link";
import type { Metadata } from "next";
import Footer from "../components/Footer";
import { ostTracks } from "../data/ost";
import OSTSidebar from "../components/OSTSidebar";
import MobileButtons from "../components/MobileButtons";

export const metadata: Metadata = {
  title: "Kpop Demon Hunters Lyrics & Soundtrack | Complete OST with Songs - KDH Wiki",
  description: "Complete kpop demon hunters lyrics and soundtrack collection. Listen to all KDH OST songs with YouTube videos, full lyrics, and detailed track information. Features Golden, TAKEDOWN, and all character theme songs.",
  keywords: [
    // Core trending keywords from Google Trends
    "kpop demon hunters lyrics",
    "kpop demon hunters songs",
    "kpop demon hunters soundtrack",
    "kpop demon hunters ost",
    "golden lyrics",
    "takedown lyrics",
    // Expanded trending variations
    "k-pop demon hunters lyrics",
    "kdh lyrics",
    "kdh songs",
    "kdh soundtrack",
    "KDH OST",
    "kdh music",
    "kpop demon hunters music",
    // Individual song targeting
    "Golden",
    "TAKEDOWN",
    "Soda Pop",
    "Your Idol",
    "Free",
    "What It Sounds Like",
    // Additional discovery keywords
    "soundtrack",
    "music",
    "YouTube",
    "lyrics",
    "song lyrics",
    "k-pop songs",
    "demon hunter songs",
    "huntr/x songs",
    "saja boys songs"
  ],
  alternates: {
    canonical: '/ost',
  },
  openGraph: {
    title: "Kpop Demon Hunters Lyrics & Soundtrack | Complete OST with Songs - KDH Wiki",
    description: "Complete kpop demon hunters lyrics and soundtrack collection. Listen to all KDH OST songs with YouTube videos, full lyrics, and detailed track information.",
    url: 'https://kpopdemonhunters.net/ost',
    siteName: 'KDH Wiki',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'K-pop Demon Hunters OST & Lyrics',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kpop Demon Hunters Lyrics & Soundtrack | Complete OST with Songs - KDH Wiki",
    description: "Complete kpop demon hunters lyrics and soundtrack collection. Listen to all KDH OST songs with YouTube videos and lyrics.",
    images: ['/images/og-image.jpg'],
  },
};

export default function OSTPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* OST Sidebar */}
      <OSTSidebar tracks={ostTracks.map(track => ({ id: track.id, title: track.title }))} />
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
                className="text-white hover:text-purple-300 transition-colors"
              >
                Characters
              </Link>
              <Link href="/ost" className="text-purple-300 font-semibold">
                OST
              </Link>
              <Link
                href="/culture"
                className="text-white hover:text-purple-300 transition-colors"
              >
                Korean Culture
              </Link>
            </div>
            <MobileButtons />
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Original Soundtrack
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Experience the epic music of K-pop Demon Hunters with character
            themes, battle anthems, and emotional ballads.
          </p>
        </div>
      </section>

      {/* OST Tracks */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {ostTracks.map((track, index) => (
            <div
              key={track.id}
              id={track.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Video Section */}
                <div>
                  <div className="aspect-video bg-black/30 rounded-lg overflow-hidden mb-4">
                    <iframe
                      src={`https://www.youtube.com/embed/${track.youtubeId}?rel=0`}
                      title={track.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    ></iframe>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {track.title}
                      </h3>
                      <p className="text-purple-300">{track.artist}</p>
                    </div>
                    <div className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm">
                      Track {index + 1}
                    </div>
                  </div>
                  
                  {/* Track Details */}
                  {track.duration && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
                      <div className="text-purple-300">
                        <span className="font-semibold">Duration:</span> {track.duration}
                      </div>
                      {track.genre && (
                        <div className="text-purple-300">
                          <span className="font-semibold">Genre:</span> {track.genre}
                        </div>
                      )}
                      {track.composer && (
                        <div className="text-purple-300">
                          <span className="font-semibold">Composer:</span> {track.composer}
                        </div>
                      )}
                      {track.lyricist && (
                        <div className="text-purple-300">
                          <span className="font-semibold">Lyricist:</span> {track.lyricist}
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-purple-200 mt-4 leading-relaxed">
                    {track.description}
                  </p>

                  {/* Scene Description */}
                  {track.sceneDescription && (
                    <div className="mt-4 p-4 bg-black/20 rounded-lg border-l-4 border-purple-400">
                      <h5 className="font-semibold text-white mb-2">Featured Scene:</h5>
                      <p className="text-purple-200 text-sm">{track.sceneDescription}</p>
                    </div>
                  )}

                  {/* Themes */}
                  {track.themes && (
                    <div className="mt-4">
                      <h5 className="font-semibold text-white mb-2">Themes:</h5>
                      <div className="flex flex-wrap gap-2">
                        {track.themes.map((theme, themeIndex) => (
                          <span key={themeIndex} className="bg-purple-600/20 text-purple-200 px-2 py-1 rounded text-sm">
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Lyrics Section */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Lyrics</h4>
                  <div className="bg-black/20 rounded-lg p-6 max-h-96 overflow-y-auto">
                    <pre className="text-purple-200 leading-relaxed whitespace-pre-wrap font-sans">
                      {track.lyrics}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Music Credits */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Music Credits</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Production
                </h3>
                <ul className="text-purple-200 space-y-2">
                  <li>
                    <span className="font-semibold">Music Director:</span>{" "}
                    Studio KDH
                  </li>
                  <li>
                    <span className="font-semibold">Sound Design:</span> Audio
                    Collective
                  </li>
                  <li>
                    <span className="font-semibold">Mixing:</span> Seoul Sound
                    Studios
                  </li>
                  <li>
                    <span className="font-semibold">Mastering:</span> Digital
                    Audio Masters
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Performers
                </h3>
                <ul className="text-purple-200 space-y-2">
                  <li>
                    <span className="font-semibold">Main Vocals:</span> KDH
                    Voice Cast
                  </li>
                  <li>
                    <span className="font-semibold">
                      Traditional Instruments:
                    </span>{" "}
                    Korean Classical Ensemble
                  </li>
                  <li>
                    <span className="font-semibold">
                      Electronic Production:
                    </span>{" "}
                    Modern Beats Collective
                  </li>
                  <li>
                    <span className="font-semibold">Orchestration:</span> Seoul
                    Symphony Orchestra
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
