"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Music, Play, Disc } from "lucide-react";
import Footer from "../components/Footer";
import { ostTracks } from "../data/ost";
import OSTSidebar from "../components/OSTSidebar";
import MobileButtons from "../components/MobileButtons";

// Note: Metadata export is removed because "use client" is needed for framer-motion.

export default function OSTPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-sans text-white">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: "url('/images/background.webp')",
            filter: "brightness(0.3) saturate(1.2) blur(2px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-900/20 to-black" />
      </div>

      {/* OST Sidebar */}
      <OSTSidebar tracks={ostTracks.map(track => ({ id: track.id, title: track.title }))} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-80 transition-opacity">
                KDH Wiki
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/characters"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                CHARACTERS
              </Link>
              <Link
                href="/ost"
                className="text-white font-medium tracking-wide border-b-2 border-cyan-500"
              >
                OST
              </Link>
              <Link
                href="/culture"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                CULTURE
              </Link>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-200 group"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </button>
            </div>
            <MobileButtons />
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="relative z-10 pt-32 pb-12 px-4 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Original Soundtrack
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the epic music of K-pop Demon Hunters.
          </p>
        </motion.div>
      </section>

      {/* OST Tracks */}
      <section className="relative z-10 py-8 px-4">
        <motion.div
          className="max-w-6xl mx-auto space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {ostTracks.map((track, index) => (
            <motion.div
              key={track.id}
              id={track.id}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-colors duration-500"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Video Section */}
                <div className="space-y-6">
                  <div className="aspect-video bg-black/50 rounded-2xl overflow-hidden shadow-2xl border border-white/5 relative group">
                    <iframe
                      src={`https://www.youtube.com/embed/${track.youtubeId}?rel=0`}
                      title={track.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    ></iframe>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {track.title}
                      </h3>
                      <div className="flex items-center gap-2 text-cyan-400 font-medium">
                        <Music className="w-4 h-4" />
                        {track.artist}
                      </div>
                    </div>
                    <div className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-bold border border-cyan-500/20">
                      Track {index + 1}
                    </div>
                  </div>

                  {/* Track Details */}
                  {track.duration && (
                    <div className="grid grid-cols-2 gap-4 p-4 bg-black/20 rounded-xl border border-white/5">
                      <div className="space-y-1">
                        <span className="text-xs text-gray-500 uppercase tracking-wider">Duration</span>
                        <div className="text-gray-300 font-medium">{track.duration}</div>
                      </div>
                      {track.genre && (
                        <div className="space-y-1">
                          <span className="text-xs text-gray-500 uppercase tracking-wider">Genre</span>
                          <div className="text-gray-300 font-medium">{track.genre}</div>
                        </div>
                      )}
                      {track.composer && (
                        <div className="space-y-1">
                          <span className="text-xs text-gray-500 uppercase tracking-wider">Composer</span>
                          <div className="text-gray-300 font-medium">{track.composer}</div>
                        </div>
                      )}
                      {track.lyricist && (
                        <div className="space-y-1">
                          <span className="text-xs text-gray-500 uppercase tracking-wider">Lyricist</span>
                          <div className="text-gray-300 font-medium">{track.lyricist}</div>
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-gray-300 leading-relaxed text-lg">
                    {track.description}
                  </p>

                  {/* Scene Description */}
                  {track.sceneDescription && (
                    <div className="p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl border border-white/5">
                      <div className="flex items-center gap-2 text-purple-400 font-bold mb-2">
                        <Play className="w-4 h-4 fill-current" /> Featured Scene
                      </div>
                      <p className="text-gray-300 italic">{track.sceneDescription}</p>
                    </div>
                  )}

                  {/* Themes */}
                  {track.themes && (
                    <div className="flex flex-wrap gap-2">
                      {track.themes.map((theme, themeIndex) => (
                        <span key={themeIndex} className="bg-white/5 hover:bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-sm transition-colors border border-white/5">
                          #{theme}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Lyrics Section */}
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-white/5 rounded-lg">
                      <Disc className="w-6 h-6 text-gray-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Lyrics</h4>
                  </div>

                  <div className="flex-grow bg-black/20 rounded-2xl p-8 border border-white/5 overflow-y-auto max-h-[600px] custom-scrollbar hover:border-white/10 transition-colors">
                    <pre className="text-gray-300 leading-loose whitespace-pre-wrap font-sans text-base">
                      {track.lyrics}
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Music Credits */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Music Credits</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                  <Music className="w-5 h-5" /> Production
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Music Director</span>
                    <span className="text-white font-medium">Studio KDH</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Sound Design</span>
                    <span className="text-white font-medium">Audio Collective</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Mixing</span>
                    <span className="text-white font-medium">Seoul Sound Studios</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Mastering</span>
                    <span className="text-white font-medium">Digital Audio Masters</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5" /> Performers
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Main Vocals</span>
                    <span className="text-white font-medium">KDH Voice Cast</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Traditional Instruments</span>
                    <span className="text-white font-medium">Korean Classical Ensemble</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Electronic Production</span>
                    <span className="text-white font-medium">Modern Beats Collective</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Orchestration</span>
                    <span className="text-white font-medium">Seoul Symphony Orchestra</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

function Users({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
