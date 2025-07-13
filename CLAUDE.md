# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KPoP Demon Hunters (KDH) is a fan wiki project for the『K‑pop Demon Hunters』IP, built as a Next.js application deployed on Cloudflare Pages. The project aims to create a centralized information hub for characters, OST, lore, and worldbuilding content to lower the barrier for new and existing fans.

## Core Architecture

- **Framework**: Next.js 15 with App Router and TypeScript
- **Styling**: Tailwind CSS v4 
- **Deployment**: Cloudflare Pages via OpenNext.js adapter
- **Content Management**: Planned MDX files + Decap CMS with Git gateway
- **Search**: Planned Algolia InstantSearch integration
- **Analytics**: Planned Google Analytics 4

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
├── layout.tsx         # Root layout with Geist fonts
├── page.tsx           # Homepage component
└── globals.css        # Global Tailwind styles

docs/                  # Project documentation
└── prd.md            # Product Requirements Document (Korean)

public/               # Static assets (_headers for Cloudflare)
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

### Content Structure (Planned)
- Characters: Korean/English names, personality, quotes, images
- OST: Track listings, YouTube embeds, lyrics with translation tabs
- Lore: Timeline-based worldbuilding content using MDX
- Search: Instant search with typo tolerance

### SEO Requirements
- Auto-generated meta tags and Open Graph images
- Google Search Console error-free indexing
- Mobile-first responsive design

### Technology Constraints
- Use existing libraries already in package.json
- Follow Tailwind CSS utility-first approach
- Implement proper TypeScript types
- Maintain compatibility with Cloudflare Pages deployment

## Testing

Check the package.json for available test scripts. Currently no test framework is configured - verify with the user before implementing testing.

## Common Issues

- Ensure Cloudflare-specific features use the proper OpenNext.js patterns
- Static assets should be placed in the `public/` directory
- Environment variables for Cloudflare should be configured in wrangler.jsonc