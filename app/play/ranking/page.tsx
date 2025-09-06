"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "../../components/Footer";
import MobileNavigation from "../../components/MobileNavigation";
import SearchModal from "../../components/SearchModal";
import StructuredData from "../../components/StructuredData";
import TallyForm from "../../components/TallyForm";

export default function RankingPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-20 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
                KDH Wiki
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/characters"
                className="text-white hover:text-purple-300 transition-colors"
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
              <div className="relative group">
                <button className="text-orange-300 font-semibold flex items-center space-x-1">
                  <span>Play</span>
                  <svg
                    className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg py-2 shadow-xl">
                    <Link
                      href="/play/ranking"
                      className="block px-4 py-2 text-orange-300 font-semibold"
                    >
                      KDH Ranking Filter
                    </Link>
                    <div className="px-4 py-2 text-gray-400 text-sm">
                      Cosplay Service (Coming Soon)
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
                aria-label="Search"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <MobileNavigation currentPath="/play/ranking" />
          </div>
        </div>
      </nav>

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/background.webp')",
            filter: "brightness(0.2) saturate(1.2)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/60 via-red-900/40 to-pink-900/60" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm px-4 py-2 rounded-full mx-auto w-fit mb-6 animate-glow">
              🆕 COMING SOON TO APP STORES
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
              KDH Ranking Filter
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Step into the world of K-Pop Demon Hunters with the ultimate ranking filter game. 
              Your face becomes the stage as your favorite heroes and villains appear above your head!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-lg"
              >
                Join Beta Waitlist
              </button>
              <button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-2 border-orange-400/50 hover:border-orange-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-orange-400/10 hover:shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 text-lg"
              >
                See Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Revolutionary AR Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* AR Technology */}
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Real-time AR Face Detection</h3>
              <p className="text-gray-200 text-center leading-relaxed">
                Powered by Google ML Kit for accurate face tracking as KDH characters appear above your head
              </p>
            </div>

            {/* Ranking System */}
            <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Tap-to-Rank System</h3>
              <p className="text-gray-200 text-center leading-relaxed">
                Simply tap to rank HUNTR/X members, Saja Boys, and weapons from 1-10 with intuitive gameplay
              </p>
            </div>

            {/* Social Sharing */}
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Social Media Sharing</h3>
              <p className="text-gray-200 text-center leading-relaxed">
                Record high-quality videos instantly for TikTok, Instagram, and YouTube Shorts sharing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              App Preview
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Experience the amazing features of the KDH ranking filter system through real app screens
            </p>
          </div>
          
          {/* App Screenshots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30 hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-[9/16] rounded-lg overflow-hidden border border-orange-400/30">
                  <Image
                    src={`/images/ranking/0${i}.webp`}
                    alt={`KDH Ranking Filter App Screenshot ${i}`}
                    width={400}
                    height={711}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Play */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            How to Play
          </h2>
          <div className="space-y-6">
            {[
              { step: 1, title: "Select Theme", desc: "Choose your favorite K-Pop Demon Hunters theme" },
              { step: 2, title: "Align Face", desc: "Position your face within the camera view" },
              { step: 3, title: "Character Appears", desc: "Watch as KDH universe characters or items appear above your head" },
              { step: 4, title: "Tap to Rank", desc: "Tap number slots (1-10) on screen to place items in your ranking" },
              { step: 5, title: "Record Video", desc: "Capture your ranking process with a single tap" },
              { step: 6, title: "Share & Save", desc: "Save your masterpiece and share it with the world!" }
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start space-x-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-xl p-6 border border-orange-400/20 hover:border-orange-400/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center font-bold text-white text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking Themes */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Ranking Themes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "HUNTR/X Members", desc: "Rank your favorite members like Rumi, Mira, and Zoey", icon: "👥", color: "from-pink-500/20 to-purple-500/20" },
              { title: "Saja Boys", desc: "Rank the demonic charm of the Saja Boys", icon: "😈", color: "from-red-500/20 to-orange-500/20" },
              { title: "Demon Slaying Weapons", desc: "Which weapon is the most powerful?", icon: "⚔️", color: "from-cyan-500/20 to-blue-500/20" },
              { title: "OST Tracks", desc: "Hit songs like Golden and Takedown", icon: "🎵", color: "from-purple-500/20 to-indigo-500/20" }
            ].map((theme, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${theme.color} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 text-center`}
              >
                <div className="text-4xl mb-4">{theme.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{theme.title}</h3>
                <p className="text-gray-300 text-sm">{theme.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="relative z-10 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Join Beta Testing
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Be among the first to experience the K-Pop Demon Hunters Ranking Filter app!
          </p>

          {/* Tally Waitlist Form */}
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm px-4 py-2 rounded-full mx-auto w-fit mb-4">
                ✅ NOW AVAILABLE
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Waitlist Registration</h3>
              <p className="text-gray-300 mb-6">
                Join our beta waitlist and be among the first to experience the KDH Ranking Filter app!
              </p>
              
              <TallyForm />
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            We&apos;ll notify you via email when beta testing begins. No spam, ever.
          </p>
        </div>
      </section>

      <Footer />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Structured Data */}
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          name: "K-Pop Demon Hunters KDH Ranking Filter",
          description:
            "Revolutionary AR face tracking app for ranking K-Pop Demon Hunters characters. Experience real-time overlays and create viral social media content.",
          operatingSystem: ["iOS", "Android"],
          applicationCategory: "GameApplication",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          author: {
            "@type": "Organization",
            name: "KDH Wiki Team",
            url: "https://kpopdemonhunters.net",
          },
          isBasedOn: {
            "@type": "CreativeWork",
            name: "K-pop Demon Hunters",
            description: "Animated movie about K-pop idols who are secret demon hunters",
          },
          featureList: [
            "Real-time AR face tracking with Google ML Kit",
            "Interactive tap-to-rank system for characters",
            "Social media recording and sharing features",
            "Multiple ranking themes (HUNTR/X, Saja Boys, OST)",
            "60fps performance optimization",
          ],
          screenshot: "https://kpopdemonhunters.net/images/app-preview.webp",
        }}
      />
    </div>
  );
}