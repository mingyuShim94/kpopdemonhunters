---
name: frontend-design
description: Guide for creating distinctive, production-grade frontend interfaces that avoid generic AI aesthetics. Use when building web components, pages, or applications that need memorable, intentional design.
---

# Frontend Design: Creating Distinctive Interfaces

## Overview

This skill guides creation of production-grade frontend interfaces that avoid generic "AI slop" aesthetics. The goal is implementing real working code with exceptional attention to design details and creative choices.

**Core Problem**: AI models tend toward "distributional convergence" - defaulting to safe, overused patterns (Inter fonts, purple gradients, minimal animations) because these dominate training data. This skill breaks that pattern.

## Before Coding: Establish Direction

Think through these dimensions before writing any code:

1. **Purpose**: What problem does this interface solve? Who is the audience?
2. **Tone**: Commit to a specific aesthetic direction (minimalist, maximalist, retro, organic, luxury, brutalist, etc.)
3. **Constraints**: What are the technical requirements and limitations?
4. **Differentiation**: What makes this design unforgettable?

**Critical Principle**: "Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work—the key is intentionality, not intensity."

## Design Implementation

### Typography

**Avoid These Overused Fonts**:
- Inter, Roboto, Open Sans, Lato, Arial
- System defaults (system-ui, -apple-system)
- Safe font weights (400, 500, 600)

**Use Distinctive, Characterful Fonts**:

From Google Fonts or similar sources:
- **Code aesthetic**: JetBrains Mono, Fira Code, Space Grotesk, IBM Plex Mono
- **Editorial**: Playfair Display, Crimson Pro, Newsreader, Libre Baskerville
- **Technical**: IBM Plex family, Source Sans 3, Work Sans
- **Distinctive**: Bricolage Grotesque, Space Grotesk, Syne, DM Sans

**Typography Strategy**:
- **High contrast pairings**: Display + monospace, serif + geometric sans
- **Extreme weights**: Use 100/200 or 800/900, not middle weights
- **Scale jumps**: Size ratios of 3x+ rather than 1.5x
- **Decisive choice**: Pick one distinctive font and use it boldly

### Color & Theme

**Avoid These Clichés**:
- Purple gradients on white backgrounds
- Timid pastel colors without purpose
- Generic blue (#007bff, #0066cc)
- Evenly-distributed rainbow palettes

**Create Cohesive Aesthetics**:

Use CSS variables for consistency:
```css
:root {
  --primary: /* Dominant color */
  --accent: /* Sharp, high-contrast accent */
  --surface: /* Background/card color */
  --text: /* Primary text color */
}
```

**Color Strategy**:
- **Dominant colors**: Choose 1-2 primary colors that set the mood
- **Sharp accents**: High-contrast highlights, not balanced palettes
- **Inspiration sources**:
  - IDE themes (Nord, Dracula, Tokyo Night, Monokai)
  - Cultural aesthetics (Cyberpunk, Vaporwave, Nordic, Brutalist)
  - Nature (Deep ocean, desert sunset, forest canopy)

### Motion

**Priority**: CSS-only solutions for HTML; Motion libraries for React.

**Avoid**:
- Scattered micro-interactions without purpose
- Hover effects on every element
- Animations that don't enhance understanding

**Focus On**:
- **High-impact moments**: Page load choreography
- **Orchestrated reveals**: Staggered delays create rhythm
- **Purposeful transitions**: Guide attention, don't distract

**Implementation Patterns**:

```css
/* Staggered fade-in */
.element {
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.element:nth-child(1) { animation-delay: 0.1s; }
.element:nth-child(2) { animation-delay: 0.2s; }
.element:nth-child(3) { animation-delay: 0.3s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Easing Functions**:
- Use cubic-bezier for natural motion
- Examples: `cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0.25, 0.46, 0.45, 0.94)`

### Backgrounds

**Avoid**:
- Flat solid colors
- Generic stock photos
- Overused gradient combinations

**Create Atmospheric Depth**:

**Techniques**:
- **Layered gradients**: Multiple gradients with different opacities
- **Geometric patterns**: CSS-generated grids, dots, lines
- **Noise textures**: Subtle grain overlays
- **Radial overlays**: Spotlight or vignette effects
- **Mesh gradients**: Multi-point gradient blends

**Example - Layered Background**:
```css
.background {
  background:
    radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.2), transparent 50%),
    linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}
```

### Spatial Composition

**Embrace Unexpected Layouts**:
- **Asymmetry**: Break grid conventions intentionally
- **Overlap**: Layer elements for depth
- **Diagonal flow**: Guide eye movement with angles
- **Grid-breaking**: Strategic elements that escape containers

## Anti-Patterns (Explicitly Avoid)

When building interfaces, DO NOT fall into these traps:

1. **Overused font families**: Inter, Roboto, Arial, Helvetica
2. **Safe font weights**: 400, 500, 600 (use extremes: 100-300 or 700-900)
3. **Clichéd color schemes**: Purple-pink gradients on white, generic blues
4. **Predictable layouts**: Cookie-cutter card grids, centered hero sections
5. **Minimal animations**: Missing page-load choreography, no motion hierarchy
6. **Generic components**: Designs that could be any product/service
7. **Timid choices**: "Safe" decisions that lack point-of-view

## Output Requirements

When implementing frontend designs:

✅ **Production-ready code**: Real, functional implementations (not mockups)
✅ **Visually striking**: Memorable and distinctive aesthetics
✅ **Cohesive**: Clear point-of-view executed consistently
✅ **Meticulous details**: Refinement in spacing, typography, color
✅ **Context-aware**: Matches the specific use case and target audience

## Decision Framework

Before implementing any design, answer these questions:

1. **What's the emotional tone?** (Playful, serious, luxurious, raw, etc.)
2. **What's one unique visual element** that will make this memorable?
3. **What patterns am I avoiding** that would make this generic?
4. **How does each choice** (font, color, motion) **support the purpose**?

## Examples of Intentional Choices

### Example 1: Dark, Technical Dashboard
- **Fonts**: JetBrains Mono (100, 800 weights)
- **Colors**: Nord theme (arctic blues, muted highlights)
- **Motion**: Data streaming animations, minimal UI transitions
- **Background**: Dark blue-gray with subtle hex grid pattern

### Example 2: Luxury Brand Landing Page
- **Fonts**: Playfair Display (serif) + Space Grotesk (sans)
- **Colors**: Cream backgrounds, deep burgundy accents, gold highlights
- **Motion**: Slow parallax scrolling, elegant fade-ins
- **Background**: Textured paper effect with subtle gradients

### Example 3: Playful Creative Portfolio
- **Fonts**: Syne (variable weight, extreme scales)
- **Colors**: Vibrant complementary pairs (coral + teal, yellow + purple)
- **Motion**: Bouncy hover effects, staggered card reveals
- **Background**: Geometric shapes with layered transparency

## When to Use This Skill

Automatically apply when:
- Building new web pages or applications
- Creating component libraries
- Designing landing pages, dashboards, or portfolios
- Any task involving frontend visual design

Manually invoke with: `/frontend-design`

## Remember

**Generic is the enemy of memorable.** Every design choice should have intention behind it. If you find yourself reaching for Inter font and a purple gradient, stop and ask: "Is this serving the purpose, or am I defaulting to training data patterns?"

The best designs are **coherent** (all choices work together) and **committed** (executed with confidence).
