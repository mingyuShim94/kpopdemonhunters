"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
import GlobalNav from "./components/GlobalNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-baekja">
      {/* Global Navigation */}
      <GlobalNav />

      {/* Hero Section - Korean Minimalism */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden bg-pattern-dancheong">
        {/* Subtle Korean pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-32 h-32 border-4 border-pink-500 rounded-full" />
          <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-purple-500 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-cyan-500 rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-ink leading-tight">
            K-pop Demon <br className="md:hidden" />
            <span className="relative inline-block">
              Hunters
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full" />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your ultimate guide to the characters, music, and Korean culture of the K-pop Demon Hunters universe
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/characters"
              className="group px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                Explore Characters
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/ost"
              className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-xl font-semibold text-lg hover:border-cyan-500 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Listen to OST
            </Link>
          </div>
        </div>
      </section>

      {/* Category Cards - Clean & Modern */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-ink">
            Explore the Universe
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Dive deep into characters, soundtracks, and Korean cultural elements
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Characters Card */}
            <Link href="/characters" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-pink-500">
                <div className="p-8">
                  <div className="w-20 h-20 mb-6 rounded-xl bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center">
                    <Image
                      src="/images/category_thumnail/chracters_thumnail.webp"
                      alt="Characters"
                      width={64}
                      height={64}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                    Characters
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    Meet the demon hunters and discover their personalities, backgrounds, and memorable quotes.
                  </p>

                  <div className="flex items-center text-pink-600 font-semibold">
                    Learn more
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* OST Card */}
            <Link href="/ost" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-cyan-500">
                <div className="p-8">
                  <div className="w-20 h-20 mb-6 rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center">
                    <Image
                      src="/images/category_thumnail/ost_thumnail.webp"
                      alt="OST"
                      width={64}
                      height={64}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
                    Original Soundtrack
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    Explore the soundtrack with music videos, English lyrics, and track information.
                  </p>

                  <div className="flex items-center text-cyan-600 font-semibold">
                    Learn more
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Korean Culture Card */}
            <Link href="/culture" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-purple-500">
                <div className="p-8">
                  <div className="w-20 h-20 mb-6 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                    <Image
                      src="/images/category_thumnail/cultures_thumnail.webp"
                      alt="Korean Culture"
                      width={64}
                      height={64}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    Korean Culture
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    Learn about Korean traditions, food, places, and modern culture featured in the film.
                  </p>

                  <div className="flex items-center text-purple-600 font-semibold">
                    Learn more
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section - New Addition */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ink">
                The Story Behind <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                  Demon Hunters
                </span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Discover how K-pop meets Korean mythology in this groundbreaking 2025 animated musical fantasy film.
                HUNTR/X uses their singing voices to create the magical Honmoon barrier, inspired by Korean mudang shamans.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Meanwhile, the charming Saja Boys hide a dark secret—they&apos;re named after Jeoseung Saja,
                the grim reapers of Korean folklore who steal the souls of their fans.
              </p>
              <Link
                href="/characters"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Meet the Characters
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 text-ink">Quick Facts</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                    <span className="text-gray-700"><strong>Release:</strong> June 20, 2025 on Netflix</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                    <span className="text-gray-700"><strong>Genre:</strong> Animated Musical Fantasy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
                    <span className="text-gray-700"><strong>Groups:</strong> HUNTR/X (heroes) & Saja Boys (villains)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</span>
                    <span className="text-gray-700"><strong>Soundtrack:</strong> 12+ original K-pop tracks</span>
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
