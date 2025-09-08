"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            fixed bottom-4 right-4 md:bottom-6 md:right-6
            w-12 h-12 md:w-14 md:h-14
            bg-gradient-to-r from-purple-600 to-pink-600
            hover:from-purple-500 hover:to-pink-500
            rounded-full
            flex items-center justify-center
            text-white text-lg md:text-xl
            shadow-lg hover:shadow-xl
            transform hover:scale-110
            transition-all duration-300 ease-in-out
            z-50
            group
            focus:outline-none focus:ring-4 focus:ring-purple-300/50
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
          aria-label="맨 위로 이동"
          title="맨 위로 이동"
        >
          <span className="transform group-hover:-translate-y-0.5 transition-transform duration-200">
            ⬆️
          </span>
        </button>
      )}
    </>
  );
}