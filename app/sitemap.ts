import { MetadataRoute } from 'next'

// 캐릭터 목록 (characters/[slug]/page.tsx에서 가져옴)
const characters = [
  'rumi', 'mira', 'zoey', 'jinu', 'celine', 'gwi-ma', 
  'abby', 'romance', 'mystery', 'baby', 'bobby'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kpopdemonhunters.net';
  const now = new Date();
  
  // 기본 페이지들
  const routes = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/characters`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ost`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/culture`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/play`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/play/ranking`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ];

  // 캐릭터 페이지들 추가
  const characterPages = characters.map((slug) => ({
    url: `${baseUrl}/characters/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...characterPages];
}