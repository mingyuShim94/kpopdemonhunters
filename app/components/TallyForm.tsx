"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export default function TallyForm() {
  useEffect(() => {
    // Tally 스크립트가 로드되면 임베드를 초기화
    const loadTallyEmbeds = () => {
      if (typeof window !== "undefined" && window.Tally) {
        window.Tally.loadEmbeds();
      }
    };

    // 스크립트가 이미 로드되었는지 확인
    if (typeof window !== "undefined" && window.Tally) {
      loadTallyEmbeds();
    } else {
      // 스크립트 로드를 기다림
      const checkTally = setInterval(() => {
        if (typeof window !== "undefined" && window.Tally) {
          loadTallyEmbeds();
          clearInterval(checkTally);
        }
      }, 100);

      // 5초 후 타임아웃
      setTimeout(() => {
        clearInterval(checkTally);
      }, 5000);
    }
  }, []);

  return (
    <div className="max-w-lg mx-auto">
      <iframe
        data-tally-src="https://tally.so/embed/wboagg?alignLeft=1&hideTitle=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="177"
        frameBorder="0"
        title="KDH Beta Waitlist"
        className="rounded-lg"
      />
    </div>
  );
}