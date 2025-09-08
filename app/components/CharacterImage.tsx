"use client";

import Image from "next/image";
import { useState } from "react";

interface CharacterImageProps {
  src: string;
  alt: string;
  name: string;
  role: string;
  aspectRatio?: "video" | "square";
  priority?: boolean;
}

export default function CharacterImage({ src, alt, name, role, aspectRatio = "video", priority = false }: CharacterImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const aspectClass = aspectRatio === "square" ? "aspect-square" : "aspect-video";
  const iconSize = aspectRatio === "square" ? "text-8xl" : "text-4xl";

  if (hasError) {
    return (
      <div className={`${aspectClass} bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center`}>
        <div className="text-center p-4">
          <div className={`${iconSize} mb-3 text-white/50`}>👤</div>
          <div className="text-white text-sm font-medium mb-1">{name}</div>
          <div className="text-white/80 text-xs">{role}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${aspectClass} overflow-hidden`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mb-2"></div>
            <div className="text-white/60 text-sm">Loading...</div>
          </div>
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}