"use client";

import Link from "next/link";
import { useState } from "react";
import Footer from "../../components/Footer";
import MobileNavigation from "../../components/MobileNavigation";
import SearchModal from "../../components/SearchModal";

export default function RankingPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                      AR Ranking App
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
              AR Ranking App
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Step into the world of K-Pop Demon Hunters with the ultimate AR ranking game. 
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
              <h3 className="text-xl font-bold text-white mb-4 text-center">실시간 AR 얼굴 인식</h3>
              <p className="text-gray-200 text-center leading-relaxed">
                Google ML Kit 기반의 정확한 실시간 얼굴 추적으로 KDH 캐릭터들이 당신 위에 나타납니다
              </p>
            </div>

            {/* Ranking System */}
            <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">탭투랭크 시스템</h3>
              <p className="text-gray-200 text-center leading-relaxed">
                간단한 탭으로 HUNTR/X 멤버, 사자보이즈, 무기들을 1-10위까지 자유롭게 랭킹하세요
              </p>
            </div>

            {/* Social Sharing */}
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.50-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">소셜 미디어 공유</h3>
              <p className="text-gray-200 text-center leading-relaxed">
                TikTok, Instagram, YouTube Shorts용 고품질 영상을 즉시 녹화하고 공유하세요
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
              앱 미리보기
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              실제 앱 화면으로 AR 랭킹 시스템의 놀라운 기능들을 확인해보세요
            </p>
          </div>
          
          {/* Placeholder for app screenshots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-600/30 hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-[9/16] bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center border border-orange-400/30">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{i}</span>
                    </div>
                    <p className="text-gray-300 text-sm">스크린샷 {i}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Play Store Graphic Placeholder */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-600/30 hover:border-orange-400/50 transition-all duration-300">
            <div className="aspect-[1024/500] bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center border border-orange-400/30">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <p className="text-gray-300">플레이스토어 그래픽 (1024x500)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            플레이 방법
          </h2>
          <div className="space-y-6">
            {[
              { step: 1, title: "테마 선택", desc: "좋아하는 K-Pop Demon Hunters 테마를 선택하세요" },
              { step: 2, title: "얼굴 정렬", desc: "카메라 화면에서 얼굴을 정렬하세요" },
              { step: 3, title: "캐릭터 등장", desc: "KDH 우주의 캐릭터나 아이템이 머리 위에 나타납니다" },
              { step: 4, title: "랭킹 선택", desc: "화면의 번호 슬롯 (1-10)을 탭해서 아이템을 배치하세요" },
              { step: 5, title: "영상 녹화", desc: "원탭으로 랭킹 과정을 녹화하세요" },
              { step: 6, title: "공유하기", desc: "완성된 작품을 저장하고 전 세계와 공유하세요!" }
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
            다양한 랭킹 테마
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "HUNTR/X 멤버", desc: "루미, 미라, 조이 등 최애 멤버 랭킹", icon: "👥", color: "from-pink-500/20 to-purple-500/20" },
              { title: "사자보이즈", desc: "악마적 매력의 사자보이즈 순위 매기기", icon: "😈", color: "from-red-500/20 to-orange-500/20" },
              { title: "악마 사냥 무기", desc: "가장 강력한 무기는 무엇인가?", icon: "⚔️", color: "from-cyan-500/20 to-blue-500/20" },
              { title: "OST 트랙", desc: "Golden, Takedown 등 명곡들", icon: "🎵", color: "from-purple-500/20 to-indigo-500/20" }
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
            베타 테스터 모집
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            K-Pop Demon Hunters AR 랭킹 앱의 베타 테스터가 되어 새로운 경험을 가장 먼저 만나보세요!
          </p>

          {/* Waitlist Form */}
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
            {submitStatus === "success" ? (
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">등록 완료!</h3>
                <p className="text-gray-300">베타 테스트 정보를 가장 먼저 받아보실 수 있습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-white mb-3">
                    이메일 주소
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-200"
                  />
                </div>
                
                {submitStatus === "error" && (
                  <div className="bg-red-500/20 border border-red-400/50 rounded-lg p-4">
                    <p className="text-red-300 text-sm">
                      등록 중 오류가 발생했습니다. 다시 시도해 주세요.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:from-gray-500 disabled:to-gray-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 text-lg disabled:transform-none disabled:shadow-none"
                >
                  {isSubmitting ? "등록 중..." : "베타 대기자 명단 등록"}
                </button>
              </form>
            )}
          </div>

          <p className="text-sm text-gray-400 mt-6">
            베타 테스트 시작 시 이메일로 알려드립니다. 스팸은 절대 발송하지 않습니다.
          </p>
        </div>
      </section>

      <Footer />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}