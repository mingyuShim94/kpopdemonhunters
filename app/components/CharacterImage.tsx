"use client";

import Image from "next/image";
import { useState } from "react";

interface CharacterImageProps {
  src: string;
  alt: string;
  name: string;
  role: string;
  aspectRatio?: "video" | "square";
}

export default function CharacterImage({ src, alt, name, role, aspectRatio = "video" }: CharacterImageProps) {
  const [hasError, setHasError] = useState(false);
  
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
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setHasError(true)}
      />
    </div>
  );
}