"use client";

import { useEffect } from "react";

interface GumroadButtonProps {
  characterName?: string;
  className?: string;
}

export default function GumroadButton({ characterName, className = "" }: GumroadButtonProps) {
  useEffect(() => {
    // Gumroad 스크립트가 로드되었는지 확인
    if (typeof window !== 'undefined' && !('GumroadOverlay' in window)) {
      const script = document.createElement('script');
      script.src = 'https://gumroad.com/js/gumroad.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const handleGumroadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // 직접 Gumroad 페이지로 이동 (CSP 문제 회피)
    window.open('https://gguggulab.gumroad.com/l/oexqcw', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`my-8 ${className}`}>
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300">
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-center gap-2">
            <span className="text-2xl">✍️</span>
            {characterName ? `Writing fanfiction about ${characterName}?` : "Need complete character profiles?"}
          </h3>
          <p className="text-purple-200 mb-4 text-sm">
            Get the complete character profile with detailed personality traits, relationships, and story arcs.
          </p>
          <button 
            onClick={handleGumroadClick}
            className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25 text-sm"
          >
            <span className="mr-2">📚</span>
            Get Complete Character Profile
          </button>
          <div className="mt-3 text-xs text-purple-300">
            Perfect for fanfiction writers • 13 comprehensive profiles • Instant download
          </div>
        </div>
      </div>
    </div>
  );
}