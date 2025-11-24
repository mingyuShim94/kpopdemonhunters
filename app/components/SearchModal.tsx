'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronRight, Music, User, Globe, Command } from 'lucide-react';
import { ostTracks } from '../data/ost';

interface SearchResult {
  title: string;
  type: 'character' | 'ost' | 'culture';
  href: string;
  description: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const characters = [
  { id: 'rumi', name: 'Rumi', role: 'HUNTR/X Leader', description: 'The passionate leader of HUNTR/X with half-demon heritage' },
  { id: 'mira', name: 'Mira', role: 'HUNTR/X Main Dancer', description: 'The visual and main dancer who wields a deadly woldo' },
  { id: 'zoey', name: 'Zoey', role: 'HUNTR/X Main Rapper', description: 'The sharp-witted maknae who uses throwing knives' },
  { id: 'jinu', name: 'Jinu', role: 'Saja Boys Leader', description: 'The charismatic leader of the Saja Boys with a haunting past' },
  { id: 'celine', name: 'Celine', role: 'Mentor', description: 'Former demon hunter and mentor to HUNTR/X' },
  { id: 'gwi-ma', name: 'Gwi-Ma', role: 'Demon King', description: 'The ruthless demon king and main antagonist' },
  { id: 'abby', name: 'Abby', role: 'Saja Boys Member', description: 'The muscular member of the Saja Boys' },
  { id: 'romance', name: 'Romance', role: 'Saja Boys Member', description: 'The smooth-talking romantic member' },
  { id: 'mystery', name: 'Mystery', role: 'Saja Boys Member', description: 'The enigmatic and mysterious member' },
  { id: 'baby', name: 'Baby', role: 'Saja Boys Member', description: 'The youngest member with deceptive innocence' },
  { id: 'bobby', name: 'Bobby', role: 'Manager', description: 'The enthusiastic manager of HUNTR/X' },
];

const cultureItems = [
  { id: 'korean-culture', name: 'Korean Culture', description: 'Traditional and modern Korean culture featured in the story' },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      setSelectedIndex(-1);
      return;
    }

    const searchResults: SearchResult[] = [];
    const query = searchTerm.toLowerCase();

    // Search characters
    characters.forEach(char => {
      if (
        char.name.toLowerCase().includes(query) ||
        char.role.toLowerCase().includes(query) ||
        char.description.toLowerCase().includes(query)
      ) {
        searchResults.push({
          title: char.name,
          type: 'character',
          href: `/characters/${char.id}`,
          description: `${char.role} - ${char.description}`,
        });
      }
    });

    // Search OST
    ostTracks.forEach(track => {
      if (
        track.title.toLowerCase().includes(query) ||
        track.artist.toLowerCase().includes(query) ||
        track.description.toLowerCase().includes(query)
      ) {
        searchResults.push({
          title: track.title,
          type: 'ost',
          href: '/ost',
          description: `${track.artist} - ${track.description.slice(0, 100)}...`,
        });
      }
    });

    // Search culture
    cultureItems.forEach(item => {
      if (
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      ) {
        searchResults.push({
          title: item.name,
          type: 'culture',
          href: '/culture',
          description: item.description,
        });
      }
    });

    setResults(searchResults.slice(0, 8)); // Limit to 8 results
    setSelectedIndex(-1);
  }, [searchTerm]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0) {
        window.location.href = results[selectedIndex].href;
        onClose();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'character': return <User className="w-4 h-4" />;
      case 'ost': return <Music className="w-4 h-4" />;
      case 'culture': return <Globe className="w-4 h-4" />;
      default: return <Search className="w-4 h-4" />;
    }
  };

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'character':
        return 'bg-pink-500/10 text-pink-400 border-pink-500/20';
      case 'ost':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'culture':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-[15%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-50"
          >
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-purple-500/10 overflow-hidden flex flex-col max-h-[70vh]">
              {/* Search Input */}
              <div className="p-4 border-b border-white/10 flex items-center gap-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search characters, OST, or culture..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none text-white text-lg placeholder-gray-500 focus:outline-none focus:ring-0"
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Results */}
              <div className="overflow-y-auto custom-scrollbar">
                {results.length > 0 ? (
                  <div className="p-2">
                    <div className="text-xs font-medium text-gray-500 px-3 py-2 uppercase tracking-wider">
                      Results
                    </div>
                    {results.map((result, index) => (
                      <Link
                        key={`${result.type}-${result.title}`}
                        href={result.href}
                        onClick={onClose}
                        className={`group flex items-center gap-4 p-3 rounded-xl transition-all duration-200 ${index === selectedIndex
                          ? 'bg-white/10'
                          : 'hover:bg-white/5'
                          }`}
                      >
                        <div className={`p-2 rounded-lg border ${getTypeStyles(result.type)}`}>
                          {getIcon(result.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-0.5">
                            <h3 className="text-white font-medium truncate group-hover:text-purple-300 transition-colors">
                              {result.title}
                            </h3>
                            {index === selectedIndex && (
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                          <p className="text-sm text-gray-400 truncate">
                            {result.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : searchTerm.trim() ? (
                  <div className="p-12 text-center">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-gray-500" />
                    </div>
                    <p className="text-gray-300 font-medium mb-1">No results found</p>
                    <p className="text-sm text-gray-500">
                      We couldn&apos;t find anything matching &quot;{searchTerm}&quot;
                    </p>
                  </div>
                ) : (
                  <div className="p-12 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5">
                      <Command className="w-8 h-8 text-purple-400" />
                    </div>
                    <p className="text-gray-300 font-medium mb-1">Search the Wiki</p>
                    <p className="text-sm text-gray-500 max-w-xs mx-auto">
                      Find detailed character profiles, OST lyrics, and cultural insights.
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-3 bg-white/5 border-t border-white/10 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10 font-sans">↑↓</kbd>
                    <span>navigate</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10 font-sans">↵</kbd>
                    <span>select</span>
                  </span>
                </div>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/10 font-sans">esc</kbd>
                  <span>close</span>
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}