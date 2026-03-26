# IA Academy Primary School — Project Memory

## Project Identity
- **School Name:** IA Academy Primary School
- **Location:** Windhoek, Namibia
- **Curriculum:** Namibian Cambridge Curriculum (Grade R to Grade 12)
- **Class Size:** Maximum 10 students per grade (intentional small-class model)

### Grade Structure
| Phase | Grades |
|---|---|
| **Primary** | Grade R, 1, 2, 3 |
| **Junior Primary** | Grade 4, 5, 6, 7 |
| **High School** | Grade 8, 9, 10, 11, 12 |

## Mission & Core Focus
A school specializing in students with learning difficulties including ADHD, ADD, Dyslexia, and slow learning. Offers:
- Face-to-face education with one-on-one teaching focus
- Supervised facilities for students on online curriculums who want a school-setup environment
- Safe, supportive, structured learning environment

---

## Brand Identity

### Logo
- Gold ornamental emblem with "IA" initials in purple on black background
- Logo file: `assets/logo.png` (provided by client)
- Do NOT redesign the logo — use as-is

### Brand Colors
| Role | Color | Hex |
|---|---|---|
| Primary (Purple) | Deep Royal Purple | `#5e0081` |
| Primary Container | Medium Purple | `#7b1fa2` |
| Secondary (Gold) | Rich Gold | `#745b00` |
| Secondary Container | Light Gold | `#f0c040` |
| Tertiary (Black/Dark) | Near-Black | `#383838` |
| Surface | Off-White | `#f9f9fc` |
| On Surface | Near-Black (NOT pure black) | `#1a1c1e` |

### Brand Vibe Keywords
Innovative · Creative · Trustworthy · Inspiring

### Typography
- **Font:** Lexend (Google Fonts) — chosen specifically for dyslexia-friendliness
- Display: 3.5rem | Headlines: 1.75rem | Body: 1rem (line-height 1.6–1.8) | Labels: 0.75rem Semi-Bold
- Text blocks max 60 characters wide

---

## Design System Principles (from DESIGN.md)
- **No 1px solid borders** for section dividers — use background color shifts only
- **No pure black `#000000`** for text — use `on_surface` (`#1a1c1e`)
- **No sharp 90° corners** — minimum border-radius `0.75rem`
- **No standard CSS drop shadows** — use ambient shadow: `0px 20px 40px rgba(94, 0, 129, 0.06)`
- **Glassmorphism** on nav/floating elements: `backdrop-filter: blur(12px)`
- **Asymmetric whitespace** for premium editorial feel
- **Gold is a highlight, not a background** — use sparingly

---

## Features Required
- [ ] Portfolio / Gallery (filterable masonry grid with lightbox)
- [ ] Contact Form (React Hook Form + Zod, ARIA error handling)
- [ ] Social Media Links (Facebook, Instagram, WhatsApp float)
- [ ] Google Maps Embed (Windhoek location)
- [ ] Custom Logo (provided, embedded as image asset)
- [ ] Book a Tour form (dedicated page + persistent nav CTA)
- [ ] FAQ accordion (keyboard navigable, 6 categories)
- [ ] Online Learners page (unique differentiator)
- [ ] WhatsApp float button (mobile-first)

---

## Tech Stack Decisions
> Updated 2026-03-26 — see SITEMAP.md for full specification

- **Framework:** Next.js 14 (App Router) — static generation for SEO
- **Styling:** Tailwind CSS + CSS variables for design tokens
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend / Nodemailer via Next.js API route
- **Maps:** Google Maps Embed API
- **Gallery:** Next.js `<Image>` + yet-another-react-lightbox
- **Hosting:** Vercel (preferred)
- **CMS:** Sanity.io or Contentlayer (Phase 2)
- **Analytics:** Plausible (POPIA-friendly, no cookie banner)

---

## Active Agents

| Agent | Role |
|---|---|
| `development-team/frontend-developer` | Builds UI components and pages |
| `development-team/ui-ux-designer` | Enforces design system & accessibility |
| `development-team/backend-architect` | Contact form backend, API design |
| `development-team/fullstack-developer` | Integration, deployment |
| `business-marketing/content-marketer` | Page copy, SEO, messaging |

Agent files live in `.claude/agents/`

---

## Key Accessibility Requirements
- Neurodivergent-friendly design at all times (ADHD, Dyslexia, ADD)
- Low cognitive load: generous whitespace, clear hierarchy, calm color use
- Lexend font mandatory for all body text
- Reading comfort: wide line-height (1.6–1.8), short line lengths (max 60ch)
- Avoid visual "vibration": no high-contrast pure black on white

---

## Project Structure
```
iaacademy-website/
├── CLAUDE.md           ← This file (memory persistence)
├── DESIGN.md           ← Full design system specification
├── .claude/
│   └── agents/         ← Agent definition files
├── assets/
│   └── logo.png        ← School logo (gold/purple/black)
├── src/                ← Source code (TBD structure)
└── public/             ← Static assets
```

---

## Key Files
- `CLAUDE.md` — Project memory (this file)
- `DESIGN.md` — Full design system specification
- `SITEMAP.md` — Full sitemap, nav architecture, page specs, component inventory, design tokens

---

## Session Log
> Append notes here as the project progresses.

- **2026-03-26:** Project initialized. Agents installed. DESIGN.md confirmed. CLAUDE.md created.
- **2026-03-26:** SITEMAP.md created. Navigation architecture, page specs, a11y spec, design tokens, component inventory, tech stack decisions all documented. Reference site used for professional benchmarking only — no project references remain.
