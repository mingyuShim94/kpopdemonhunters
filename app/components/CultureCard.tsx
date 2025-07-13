"use client";

import Image from "next/image";
import { useState } from "react";
import { CultureItem } from "../data/culture";

interface CultureCardProps {
  item: CultureItem;
  color: "orange" | "purple" | "green" | "blue";
}

const colorStyles = {
  orange: {
    bg: "bg-orange-600/20",
    text: "text-orange-100",
  },
  purple: {
    bg: "bg-purple-600/20", 
    text: "text-purple-100",
  },
  green: {
    bg: "bg-green-600/20",
    text: "text-green-100", 
  },
  blue: {
    bg: "bg-blue-600/20",
    text: "text-blue-100",
  },
};

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackText: string;
  label: string;
  icon: string;
  gradientClass: string;
}

function ImageWithFallback({ src, alt, fallbackText, label, icon, gradientClass }: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  if (hasError) {
    return (
      <div className={`relative group ${gradientClass} flex items-center justify-center`}>
        <div className="text-center p-4">
          <div className="text-2xl mb-2">{icon}</div>
          <div className="text-white text-xs font-medium mb-1">{label}</div>
          <div className="text-white/80 text-xs">{fallbackText}</div>
        </div>
      </div>
    );
  }

  // Click handler to toggle the expanded state on any device
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className="relative group overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`transition-all duration-300 ease-in-out object-center ${
          isExpanded ? 'object-contain' : 'object-cover group-hover:object-contain'
        }`}
        sizes="50vw"
        onError={() => setHasError(true)}
      />
      {/* Hover hint icon (desktop only) */}
      <div className="hidden md:block absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-black/60 backdrop-blur-sm rounded-full p-1">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </div>
      </div>
      {/* Touch hint icon (mobile only) */}
      <div className={`md:hidden absolute top-2 right-2 transition-opacity duration-300 ${
        isExpanded ? 'opacity-100' : 'opacity-60'
      }`}>
        <div className="bg-black/60 backdrop-blur-sm rounded-full p-1">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isExpanded 
                ? "M20 12H4" // Collapse icon (-)
                : "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" // Expand icon
              } 
            />
          </svg>
        </div>
      </div>
      {/* Accessibility text for screen readers */}
      <span className="sr-only">
        Hover or touch to see the full image
      </span>
    </div>
  );
}

export default function CultureCard({ item, color }: CultureCardProps) {
  const styles = colorStyles[color];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
      {/* Split Screen Image Section */}
      <div className="aspect-video bg-black/20 grid grid-cols-2">
        {/* Film Image */}
        <ImageWithFallback
          src={item.filmImage}
          alt={`${item.name} in the film`}
          fallbackText={item.name}
          label="In Film"
          icon="🎬"
          gradientClass="bg-gradient-to-br from-purple-500/30 to-blue-500/30"
        />
        
        {/* Reality Image */}
        <ImageWithFallback
          src={item.realityImage}
          alt={`${item.name} in Korean culture`}
          fallbackText={item.name}
          label="In Korea"
          icon="🇰🇷"
          gradientClass="bg-gradient-to-br from-orange-500/30 to-red-500/30"
        />
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">
          {item.name}
        </h3>
        <p className="text-purple-200 mb-4 leading-relaxed">
          {item.description}
        </p>
        <div className={`${styles.bg} rounded-lg p-4`}>
          <p className={`${styles.text} text-sm`}>
            <span className="font-semibold">In the Film:</span>{" "}
            {item.filmConnection}
          </p>
        </div>
      </div>
    </div>
  );
}