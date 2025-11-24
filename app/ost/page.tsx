import type { Metadata } from "next";
import Footer from "../components/Footer";
import GlobalNav from "../components/GlobalNav";
import { ostTracks } from "../data/ost";
import OSTSidebar from "../components/OSTSidebar";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Kpop Demon Hunters Lyrics & Soundtrack | Complete OST with Songs - KDH Wiki",
  description: "Complete kpop demon hunters lyrics and soundtrack collection. Listen to all KDH OST songs with YouTube videos, full lyrics, and detailed track information. Features Golden, TAKEDOWN, and all character theme songs.",
  keywords: [
    "kpop demon hunters lyrics",
    "kpop demon hunters songs",
    "kpop demon hunters soundtrack",
    "kpop demon hunters ost",
    "golden lyrics",
    "takedown lyrics",
    "k-pop demon hunters lyrics",
    "kdh lyrics",
    "kdh songs",
    "kdh soundtrack",
    "KDH OST",
    "kdh music",
    "kpop demon hunters music",
    "Golden",
    "TAKEDOWN",
    "Soda Pop",
    "Your Idol",
    "Free",
    "What It Sounds Like",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* OST Sidebar - Desktop Only */}
      <OSTSidebar tracks={ostTracks.map(track => ({ id: track.id, title: track.title }))} />

      {/* Global Navigation */}
      <GlobalNav />

      {/* Header */}
      <section className="py-16 px-4 text-center bg-pattern-dancheong">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-ink mb-6 leading-tight">
            Original <br className="md:hidden" />
            <span className="relative inline-block">
              Soundtrack
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full" />
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Experience the epic music of K-pop Demon Hunters with character themes, battle anthems, and emotional ballads
          </p>
        </div>
      </section>

      {/* OST Tracks */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {ostTracks.map((track, index) => (
            <div
              key={track.id}
              id={track.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-cyan-500"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Video Section */}
                <div>
                  <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-4 shadow-md">
                    <iframe
                      src={`https://www.youtube.com/embed/${track.youtubeId}?rel=0`}
                      title={track.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      loading="lazy"
                    ></iframe>
                  </div>

                  {/* Track Info */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                          {index + 1}. {track.title}
                        </h2>
                        <p className="text-lg text-gray-600">{track.artist}</p>
                      </div>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold">
                        {track.duration}
                      </span>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      {track.description}
                    </p>

                    {/* Scene Description */}
                    {track.sceneDescription && (
                      <div className="bg-cyan-50 rounded-lg p-4 border-l-4 border-cyan-500">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <strong className="text-cyan-700">Scene:</strong> {track.sceneDescription}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Lyrics & Metadata */}
                <div>
                  {/* Metadata Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {track.composer && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        🎵 {track.composer}
                      </span>
                    )}
                    {track.genre && (
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {track.genre}
                      </span>
                    )}
                  </div>

                  {/* Themes */}
                  {track.themes && track.themes.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Themes</h3>
                      <div className="flex flex-wrap gap-2">
                        {track.themes.map((theme, i) => (
                          <span key={i} className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Lyrics */}
                  {track.lyrics && (
                    <div className="bg-gray-50 rounded-xl p-6 max-h-96 overflow-y-auto">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Lyrics</h3>
                      <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700 leading-relaxed">
                        {track.lyrics}
                      </pre>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Details */}
              <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  {track.releaseDate && (
                    <div>
                      <span className="text-gray-500 block mb-1">Release Date</span>
                      <span className="text-gray-900 font-semibold">{track.releaseDate}</span>
                    </div>
                  )}
                  {track.album && (
                    <div className="col-span-2">
                      <span className="text-gray-500 block mb-1">Album</span>
                      <span className="text-gray-900 font-semibold">{track.album}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
