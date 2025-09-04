# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KPoP Demon Hunters (KDH) is a fan wiki project for the『K‑pop Demon Hunters』IP, built as a Next.js application deployed on Cloudflare Pages. The project aims to create a centralized information hub for characters, OST, lore, and worldbuilding content to lower the barrier for new and existing fans.

## Core Architecture

- **Framework**: Next.js 15 with App Router and TypeScript
- **Styling**: Tailwind CSS v4 with custom gradients and backdrop effects
- **Deployment**: Cloudflare Pages via OpenNext.js adapter
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Content Management**: TypeScript data files in `app/data/` (characters.ts, ost.ts, culture.ts)
- **Search**: Custom client-side search implementation with keyboard navigation
- **Analytics**: Google Analytics 4 and Google AdSense integrated
- **SEO**: Comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Lint code
npm run lint

# Deploy to Cloudflare
npm run deploy

# Preview deployment
npm run preview

# Generate Cloudflare environment types
npm run cf-typegen
```

## Project Structure

```
app/                    # Next.js App Router pages and layouts
├── layout.tsx         # Root layout with Geist fonts and comprehensive SEO
├── page.tsx           # Homepage with hero section and category cards
├── globals.css        # Global Tailwind styles
├── components/        # Shared React components
│   ├── SearchModal.tsx      # Client-side search with keyboard navigation
│   ├── MobileNavigation.tsx # Mobile-responsive navigation
│   ├── GoogleAnalytics.tsx  # GA4 integration
│   ├── StructuredData.tsx   # JSON-LD structured data component
│   └── Footer.tsx          # Site footer
├── data/              # Content data as TypeScript files
│   ├── characters.ts        # Character summaries and detailed profiles
│   ├── ost.ts              # OST track data with YouTube IDs and lyrics
│   └── culture.ts          # Korean culture information
├── characters/        # Character pages
│   ├── page.tsx           # Characters listing page
│   └── [slug]/page.tsx    # Individual character detail pages
├── ost/page.tsx       # OST listing and player page
├── culture/page.tsx   # Korean culture information page
├── privacy-policy/    # Legal pages
└── sitemap.ts         # Auto-generated sitemap

docs/                  # Project documentation
└── prd.md            # Product Requirements Document (Korean)

public/               # Static assets with Cloudflare headers
├── _headers          # Cloudflare Pages configuration
├── images/           # Organized image assets
│   ├── characters/        # Character profile images (WebP format)
│   ├── culture/          # Korean culture reference images
│   └── og-image.png      # Open Graph fallback image
└── *.svg             # UI icons and graphics
```

## Key Configuration Files

- `wrangler.jsonc`: Cloudflare Workers configuration
- `open-next.config.ts`: OpenNext.js Cloudflare adapter settings
- `next.config.ts`: Next.js configuration with Cloudflare dev setup
- `postcss.config.mjs`: PostCSS configuration for Tailwind
- `eslint.config.mjs`: ESLint configuration

## Development Guidelines

### Performance Targets (from PRD)
- First Contentful Paint (FCP) ≤ 2s
- Time to Interactive (TTI) ≤ 3s  
- Largest Contentful Paint (LCP) ≤ 2.5s
- First Input Delay (FID) ≤ 100ms
- Cumulative Layout Shift (CLS) ≤ 0.1
- Lighthouse mobile score ≥ 90

### Content Structure (Current Implementation)
- **Characters**: Comprehensive character data with TypeScript interfaces
  - `CharacterSummary`: Basic info for listing pages (id, name, description, image, role)
  - `CharacterDetails`: Full character profiles (Korean names, quotes, abilities, relationships, combat styles, personal details)
- **OST**: Complete track information with embedded YouTube players and lyrics
  - Track metadata: composer, lyricist, genre, themes, scene descriptions
  - Embedded lyrics in Korean and English
  - YouTube integration via video IDs
- **Culture**: Korean culture explanations with side-by-side film/reality comparisons
- **Search**: Real-time client-side search across all content types with keyboard navigation

### SEO Requirements
- Auto-generated meta tags and Open Graph images
- Google Search Console error-free indexing
- Mobile-first responsive design

### Technology Constraints
- Use existing libraries already in package.json
- Follow Tailwind CSS utility-first approach with dark theme design system
- Implement proper TypeScript types (see `CharacterSummary` and `CharacterDetails` interfaces)
- Maintain compatibility with Cloudflare Pages deployment via OpenNext.js
- All images should be in WebP format and placed in `public/images/` directory structure

## Data Architecture

### Character System
- Character data is split into summaries (for listing pages) and details (for individual pages)
- Relationships between characters are explicitly modeled with relation types and descriptions
- Korean names (`koreanName`) are stored alongside English names
- Character abilities, quotes, and personal details follow consistent interfaces

### Content Organization
- All content data is stored as TypeScript files in `app/data/` for type safety
- Images follow a structured naming convention: `/images/{category}/{subcategory}/filename.webp`
- Culture content compares film representation vs reality with paired images
- OST tracks include complete metadata and embedded YouTube integration

## Testing

Currently no test framework is configured - verify with the user before implementing testing. The project uses ESLint for code quality and TypeScript for type checking.

## Design System

### Visual Theme
- **Dark theme**: Black backgrounds with purple/pink/cyan gradients
- **Glass morphism**: Backdrop blur effects with semi-transparent overlays
- **Interactive elements**: Hover transforms, scale animations, and gradient transitions
- **Typography**: Gradient text effects for headings, clean white text for content

### Component Patterns
- **Layout**: Full-screen sections with relative/absolute positioning for layered effects
- **Cards**: Gradient borders, backdrop blur, hover scale transforms
- **Navigation**: Desktop horizontal nav + separate mobile navigation component
- **Modals**: Centered overlays with backdrop blur and keyboard interaction support

## Common Issues

- Ensure Cloudflare-specific features use the proper OpenNext.js patterns
- Static assets should be placed in the `public/` directory
- Environment variables for Cloudflare should be configured in wrangler.jsonc
- When adding new character data, maintain the separation between `CharacterSummary` and `CharacterDetails` interfaces
- Search functionality searches across all data types (characters, OST, culture) - update SearchModal when adding new content types