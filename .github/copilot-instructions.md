# Copilot Instructions - Sapython Portfolio Website

## Project Overview
[sapython-website] is an Astro-based portfolio site showcasing projects, blog posts, and professional experience. It's a statically generated site deployed via Cloudflare Pages with server-side capabilities.

**Framework:** Astro 4.1 with Solid JS integration  
**Styling:** SCSS (global + component-scoped)  
**Hosting:** Cloudflare Pages  
**Primary Color Scheme:** `#BB7A4F` (burnt orange) on dark backgrounds

## Architecture Patterns

### 1. Component Structure
- **Astro Components** (`.astro`): Page layouts, sections, static UI
- **Solid JS Components** (`.jsx`): Interactive, client-side behavior
- **Shared Components** (`src/components/shared/`): FloatingNav, Footer, Header  
- **Section Components** (`src/components/portfolio/`, `src/components/blog/`): Domain-specific features

Example cross-component pattern:
```astro
// Astro fetches data and passes to Solid component
import InteractiveWhatCanIDo from './WhatCanIDo.astro'
const icons = ['devicon-react-original', ...]
<NonExperienceCard title="Web Dev" icons={icons} />
```

### 2. Content Management (Astro Content Collections)
- **Posts** (`src/content/posts/`): Markdown files with frontmatter
  - Schema: `title`, `date`, `description`, `author`, `tags[]` (references), `featured`, `heroImage`, `social[]`
  - Auto-routed via `src/pages/blog/[...slug].astro`
- **Tags** (`src/content/tags/`): Categorization with display order
  - Schema: `title`, `description`, `createdDate`, `sortOrder`

Always fetch collections server-side using `getCollection('posts')` and filter/sort before rendering.

### 3. Data Pattern
- **Static Data** (`src/data/projects.ts`): Typed interfaces like `ProjectData`
  - Includes rich metadata: `techStack[]`, `highlights[]`, `challenges[]`, `outcomes[]`
  - Examples: Shiphouse Backend, Urban Laundry Agent App
- **Computed Data:** Sorting, filtering happens in Astro frontmatter, not in client JS

## Styling Conventions

### Variables & Colors
```scss
$primary: #BB7A4F;        // Burnt orange - primary interactive elements
$contrast: #161616;       // Dark background
$secondary-text: #7a7d7d; // Dimmed text for metadata
```

### Typography
- **Headers:** `'RustyCage'` font (display headings)
- **Body/Code:** `'CascadiyaCode'` font (monospace)
- **Custom fonts hosted:** `public/fonts/` (@font-face in SCSS)

### Patterns
- **Card Components**: Inset shadow + gradient border-before on hover
  ```scss
  box-shadow: inset 0 3px 10px #47372D, 0 20px 40px rgba(#000000, 35%);
  &::before { /* gradient overlay */ opacity: 0; }
  &:hover { transform: translateY(-8px) scale(1.02); }
  ```
- **Buttons**: Drop shadow with active state (translateY on click)
- **Focus States**: Primary color border + box-shadow glow

## Interactive Features

### Blog Page (`src/pages/blog/index.astro`)
- **Search**: Real-time filtering by title/description (client-side)
- **Sort Dropdown**: Date (newest/oldest), Title (A-Z), Featured first
- **Tag Filters**: Multi-select button group
- **Layouts**: Bento grid (top 6 featured) + masonry (remaining posts)

**Common Issue:** Search/sorting controls can collide on mobile - use flexbox wrapping with responsive breakpoints.

### Animation Libraries
- **GSAP**: Timeline animations for section reveals
- **Lenis**: Smooth scroll experience
- **Vanilla Tilt**: 3D tilt effect on cards
- **Flubber**: Morph animations (custom fork from ericbf)

## Key Workflows

### Local Development
```bash
npm run dev          # Astro dev server (localhost:4321)
npm run build        # Type-check + build to ./dist/
npm run preview      # Preview production build with Cloudflare
```

### Adding Blog Posts
1. Create `.md` file in `src/content/posts/` with required frontmatter
2. Reference existing tags by slug in `tags: [reference('tags')]`
3. Auto-routed to `/blog/[slug]`

### Adding Projects
1. Add entry to `src/data/projects.ts` (interface: `ProjectData`)
2. Create route in `src/pages/project/[slug].astro` (already exists)
3. Use `ProjectDetail.astro` layout with schema components

## External Dependencies

| Package | Purpose | Notes |
|---------|---------|-------|
| `@astrojs/solid-js` | Interactive components | Avoid over-use; Astro SSR is preferred |
| `@astrojs/cloudflare` | Hosting adapter | Server functions via Pages Functions |
| `gsap` | Advanced animations | Timeline-based, premium license for commercial |
| `sharp` | Image optimization | Built-in Astro integration |
| `@astrojs/check` | Type checking | Run before builds |

## Common Pitfalls

1. **Mixing Astro & Solid state**: Astro components are SSR-only. Use Solid for `useState`, `useEffect`.
2. **Skipping type-check**: `npm run build` includes `astro check` - don't ignore errors.
3. **Font paths**: Custom fonts in `public/fonts/` referenced via `@font-face` in global SCSS.
4. **Content updates**: Frontmatter changes require rebuild (no hot reload for collections).

## SEO & Schema
- **PersonSchema.astro**: Structured data for author
- **WebsiteSchema.astro**: Site-wide schema
- **ProjectSchema.astro**: Individual project metadata
- All included in default `Layout.astro`

## Deployment
Push to `master` → Cloudflare Pages auto-builds via `npm run build` → Preview at `https://sapython.me/`

