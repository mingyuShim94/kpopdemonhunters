'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'character':
        return 'bg-pink-500/20 text-pink-300';
      case 'ost':
        return 'bg-cyan-500/20 text-cyan-300';
      case 'culture':
        return 'bg-purple-500/20 text-purple-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-sm rounded-2xl border border-white/20 w-full max-w-2xl mx-4 max-h-[70vh] overflow-hidden">
        {/* Search Input */}
        <div className="p-6 border-b border-white/20">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search characters, OST, or culture..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
              autoFocus
            />
            <button
              onClick={onClose}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-4 space-y-2">
              {results.map((result, index) => (
                <Link
                  key={`${result.type}-${result.title}`}
                  href={result.href}
                  className={`block p-4 rounded-lg transition-all duration-200 ${
                    index === selectedIndex
                      ? 'bg-white/20 ring-2 ring-purple-500'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                  onClick={onClose}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold">{result.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                      {result.type}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm line-clamp-2">{result.description}</p>
                </Link>
              ))}
            </div>
          ) : searchTerm.trim() ? (
            <div className="p-8 text-center text-white/60">
              <svg className="w-16 h-16 mx-auto mb-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p>No results found for &quot;{searchTerm}&quot;</p>
              <p className="text-sm mt-2">Try searching for characters, OST tracks, or culture topics</p>
            </div>
          ) : (
            <div className="p-8 text-center text-white/60">
              <svg className="w-16 h-16 mx-auto mb-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p>Start typing to search...</p>
              <p className="text-sm mt-2">Find characters, OST tracks, and culture information</p>
            </div>
          )}
        </div>

        {/* Shortcuts */}
        <div className="p-4 border-t border-white/20 bg-white/5">
          <div className="flex items-center justify-between text-xs text-white/50">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <kbd className="px-2 py-1 bg-white/10 rounded text-xs">↑</kbd>
                <kbd className="px-2 py-1 bg-white/10 rounded text-xs">↓</kbd>
                <span>to navigate</span>
              </span>
              <span className="flex items-center space-x-1">
                <kbd className="px-2 py-1 bg-white/10 rounded text-xs">Enter</kbd>
                <span>to select</span>
              </span>
            </div>
            <span className="flex items-center space-x-1">
              <kbd className="px-2 py-1 bg-white/10 rounded text-xs">Esc</kbd>
              <span>to close</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}