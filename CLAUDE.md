# Chani Kochav Lev — Project Brain

## Project Overview
Landing page for **Chani Kochav Lev**, a prominent family financial advisor.
Brand promise: Helping families exit debt and build lasting financial security.
Target audience: Hebrew-speaking families in financial stress seeking a trusted guide.

---

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (scroll-triggered fade-in, slide-up, floating effects)
- **Icons**: Lucide React
- **Package Manager**: npm

---

## Design System

### Color Palette
| Token        | Hex       | Usage                              |
|--------------|-----------|------------------------------------|
| Navy Deep    | `#0B1D3A` | Primary backgrounds, hero section  |
| Navy Mid     | `#122A52` | Section backgrounds, cards         |
| Gold         | `#C9A84C` | Accents, CTA buttons, highlights   |
| Gold Light   | `#E8C97A` | Hover states, borders              |
| Sand         | `#F5EDD6` | Subtle backgrounds, warm sections  |
| White        | `#FFFFFF` | Body backgrounds, text on dark     |
| Text Dark    | `#1A1A2E` | Body text on light backgrounds     |
| Text Muted   | `#6B7280` | Secondary/muted text               |

### Typography
- **Headlines**: font-serif (Georgia / system serif) — elegant and trustworthy
- **Body**: font-sans (system sans-serif) — clean and readable
- **Direction**: `dir="rtl"` on Hebrew sections, Hebrew text must be right-to-left
- **Hierarchy**: Use large, bold headlines (text-5xl+) to create authority

### Spacing & Layout
- Mobile-first responsive design
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section padding: `py-20 md:py-28`

---

## Component Architecture
```
src/
  app/
    layout.tsx       — Root layout (fonts, metadata, dir="rtl")
    page.tsx         — Main page, composes sections
    globals.css      — Global styles, Tailwind directives
  components/
    Hero.tsx         — Split-screen hero, CTA, floating photo
    (future)
    About.tsx        — Chani's story and credentials
    Services.tsx     — What she offers
    Testimonials.tsx — Client success stories
    Process.tsx      — How it works (steps)
    FAQ.tsx          — Common questions
    Contact.tsx      — Contact form / booking CTA
    Footer.tsx       — Footer with links and social
```

---

## Animation Conventions (Framer Motion)
```ts
// Standard scroll fade-in + slide-up
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
}

// Use whileInView for scroll triggers, not useEffect
<motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>

// Floating animation for profile image
animate={{ y: [0, -12, 0] }}
transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
```

---

## Code Rules
1. **Functional components only** — no class components
2. **"use client"** directive required for any component using Framer Motion or hooks
3. **Mobile-first** — design for 375px first, then scale up with `md:` and `lg:` prefixes
4. **Hebrew text** — always inside a `dir="rtl"` wrapper; use `text-right` utility
5. **Images** — use Next.js `<Image>` component with proper `width`, `height`, and `alt`
6. **No inline styles** — use Tailwind classes exclusively
7. **Semantic HTML** — `<section>`, `<header>`, `<nav>`, `<main>`, `<footer>`, `<h1>`–`<h3>`

---

## Key Content (Hebrew)
- **Main Headline**: יוצאים מהמינוס, בונים עתיד בטוח
- **Sub-headline**: ליווי אישי ומקצועי לחופש כלכלי
- **CTA**: קבע/י פגישת ייעוץ חינם
- **Trust line**: מאות משפחות כבר שינו את חייהן הכלכליים

---

## Assets
- Profile image: `/public/chani.jpg` (placeholder until real photo provided)
- Favicon: to be added
