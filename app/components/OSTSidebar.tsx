'use client';

import { useEffect, useState } from 'react';

interface Track {
  id: string;
  title: string;
}

interface OSTSidebarProps {
  tracks: Track[];
}

export default function OSTSidebar({ tracks }: OSTSidebarProps) {
  const [activeTrack, setActiveTrack] = useState<string>(tracks[0]?.id || '');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sidebar after scrolling past header
      const headerSection = document.querySelector('section');
      if (headerSection) {
        const headerBottom = headerSection.offsetTop + headerSection.offsetHeight;
        setIsVisible(window.scrollY > headerBottom - 100);
      }

      // Find the currently visible track
      const trackElements = tracks.map(track => 
        document.getElementById(track.id)
      ).filter(Boolean);

      for (let i = trackElements.length - 1; i >= 0; i--) {
        const element = trackElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveTrack(tracks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [tracks]);

  const scrollToTrack = (trackId: string) => {
    const element = document.getElementById(trackId);
    if (element) {
      const headerHeight = 100;
      const top = element.offsetTop - headerHeight;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
      <div className="bg-black/30 backdrop-blur-md rounded-xl border border-white/20 p-4 max-w-xs">
        <h3 className="text-white font-semibold text-sm mb-4 text-center">
          Track List
        </h3>
        <div className="space-y-2 max-h-96 overflow-y-auto scrollbar-thin">
          {tracks.map((track, index) => (
            <button
              key={track.id}
              onClick={() => scrollToTrack(track.id)}
              className={`
                w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200
                flex items-center space-x-3
                ${
                  activeTrack === track.id
                    ? 'bg-purple-600/50 text-white ring-1 ring-purple-400/50'
                    : 'text-purple-200 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              <span 
                className={`
                  flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium
                  ${
                    activeTrack === track.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/20 text-purple-300'
                  }
                `}
              >
                {index + 1}
              </span>
              <span className="truncate flex-1">{track.title}</span>
            </button>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: rgba(147, 51, 234, 0.5) transparent;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(147, 51, 234, 0.5);
          border-radius: 2px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: rgba(147, 51, 234, 0.7);
        }
      `}</style>
    </div>
  );
}