# CLAUDE.md — IA Academy Website

Project context and session history for GitHub Copilot / AI agents.

---

## Project Overview

Official website for **Innovative Academics (IA) Academy**, Windhoek, Namibia.
Neurodivergent-friendly school (ADHD, ADD, Dyslexia) — Grade R to Grade 12, max 10 students per class.

- **Live URL:** https://ia-academy.org
- **Netlify site name:** `ia-academy-org`
- **Netlify subdomain:** `ia-academy-org.netlify.app`
- **GitHub repo:** `keenanswift101/iaacademy-website`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, `src/app/`) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS variables |
| Fonts | Lexend (Google Fonts) — dyslexia-friendly |
| Forms | Netlify Forms (fetch POST to `/netlify-forms.html`) |
| Hosting | Netlify (`@netlify/plugin-nextjs`, publish = `.next`) |

---

## Brand

| Token | Value |
|---|---|
| Primary (purple) | `#5e0081` / `var(--color-primary)` |
| Gold | `#f0c040` / `var(--color-gold)` |
| Near-black | `#1a1c1e` / `var(--color-on-surface)` |
| Font | Lexend (300–700) |

Logo: `public/logo-trns.png` — gold ornamental crest, transparent background.

---

## Key Files

| File | Purpose |
|---|---|
| `src/app/layout.tsx` | Root layout, global metadata, GA4, Schema.org JSON-LD |
| `src/app/page.tsx` | Home page (server component) |
| `src/app/globals.css` | CSS variables, design tokens, reveal animations |
| `src/app/sitemap.ts` | Auto-generates `/sitemap.xml` |
| `src/app/robots.ts` | Auto-generates `/robots.txt` |
| `netlify.toml` | Build config — copies all `public/` into `.next/` |
| `public/og-image.png` | 1200×630 OG image (purple bg, logo centred) |
| `public/logo-trns.png` | School logo — transparent PNG |
| `public/admissions_poster.png` | 2027 admission poster — shown in announcement modal |
| `public/netlify-forms.html` | Netlify Forms detection stub |
| `scripts/generate-og-image.py` | Python (Pillow) script to regenerate OG image |

---

## Netlify Forms

Four `"use client"` form components POST via `fetch` to `/netlify-forms.html`:

| Component | form-name |
|---|---|
| `ContactMessageForm.tsx` | `contact-message` |
| `EnrolmentEnquiryForm.tsx` | `enrolment-enquiry` |
| `BookATourForm.tsx` | `book-a-tour` |
| `RequestMeetingForm.tsx` | `request-meeting` |

`netlify.toml` build command copies all of `public/` into `.next/` so Netlify can serve static assets:
```toml
command = "npm run build && cp -r public/. .next/"
```

---

## DNS / Hosting

- **Registrar/cPanel host:** SiteJet (cPanel 134) — `iaacademy` account, shared IP `102.216.79.206`
- **DNS Zone Editor** (in cPanel) controls all DNS records
- `ia-academy.org` A record → `75.2.60.5` (Netlify load balancer)
- `www.ia-academy.org` CNAME → `ia-academy-org.netlify.app`
- HTTPS: Let's Encrypt cert auto-provisioned by Netlify (renews Aug 2026)
- **Important:** cPanel Apache is still the primary host but does NOT serve `ia-academy.org` — traffic routes to Netlify via the A record. Do not add `ia-academy.org` as an Addon Domain in cPanel or Apache will intercept requests.

---

## Analytics & SEO

- **GA4 Measurement ID:** `G-HXJ7XHMXDR` — loaded via `next/script` with `strategy="afterInteractive"` in `layout.tsx`
- **Schema.org:** `@type: School` JSON-LD injected in `<head>` in `layout.tsx`
- **Sitemap:** `src/app/sitemap.ts` → auto-generates `https://ia-academy.org/sitemap.xml`
- **Robots:** `src/app/robots.ts` → auto-generates `https://ia-academy.org/robots.txt`
- Submitted to Google Search Console

---

## OG / Social Preview

- `layout.tsx` has `metadataBase: new URL("https://ia-academy.org")`
- OG image: `https://ia-academy.org/og-image.png` (1200×630, served from `.next/`)
- Regenerate with: `python scripts/generate-og-image.py` (requires Pillow)
- To bust WhatsApp cache after changes: share `https://ia-academy.org/?v=N` with an incremented query param

---

## UI Components

| Component | Purpose |
|---|---|
| `src/components/ui/AnnouncementModal.tsx` | Home page pop-up — shows `admissions_poster.png`, links to `/admissions/request-meeting`, appears 2.5s after load, once per session |
| `src/components/ui/WhatsAppButton.tsx` | Fixed floating green bubble, bottom-right, every page. Number: `+264 81 729 6626` |
| `src/components/ui/SpotlightWidget.tsx` | Home page student spotlight card — cycles through gymnastics images on hover (1.2s interval), fades between slides |
| `src/components/ui/PageReveal.tsx` | IntersectionObserver scroll-reveal — watches `.reveal`, `.reveal-left`, `.reveal-right` classes |
| `src/components/ui/HeroCarousel.tsx` | Home page hero with slide-up text animations |
| `src/components/ui/PageRails.tsx` | Static decorative side ribbons (animations reverted — blocked by global `prefers-reduced-motion` override) |
| `src/components/ui/CookieConsent.tsx` | Cookie consent banner |
| `src/components/ui/ScrollToTop.tsx` | Scroll-to-top button |
| `src/components/ui/AnthemPlayer.tsx` | School anthem audio player |

---

## Gallery

File: `src/app/gallery/GalleryClient.tsx` (client component — `"use client"`)

- Category filter pills: **All / School Life / Swimming / Squash / Gymnastics**
- Images use **inline `style={{ objectPosition }}`** (not Tailwind `object-*` classes) for precise crop control
- `objectPosition` values per image control face/subject framing — adjust as `"x% y%"`
- Grid: `aspect-4/3` tiles, 2 → 3 → 4 cols responsive

### Image inventory

| Folder | Files |
|---|---|
| `public/images/` | `school-life-01.jpeg` through `school-life-12.jpeg` |
| `public/images/sports/swimming/` | `lorenzo-africa-youth-games-angola-podium.png`, `lorenzo-africa-junior-championships-medal.png`, `lorenzo-medals-collection.png`, `lorenzo-namibia-team-africa-championships-algeria.jpeg` |
| `public/images/sports/squash/` | `charldon-wanderers-closed-b-senior-trophy.jpeg` |
| `public/images/sports/gymnastics/` | `gymnastics_1.png` (Zoé on podium), `gymnastics_2.png` (Hayley with certificate), `gymnastics_3.png` (full podium group), `gymnastics_4.png` (two gymnasts with balls) |

---

## Student Spotlight

Index page: `src/app/spotlight/page.tsx` — order is **newest first**.

| Profile | URL | Sport | Result |
|---|---|---|---|
| Zoé Lumé de Scande | `/spotlight/zoe-lume-de-scande` | Rhythmic Gymnastics Level 1 | Gold — Namibian 1st Qualifying Competition, Walvis Bay, Jun 2026 |
| Hayley du Toit | `/spotlight/hayley-du-toit` | Rhythmic Gymnastics Level 6 | Silver — Namibian 1st Qualifying Competition, Walvis Bay, Jun 2026 |
| Lorenzo Esterhuizen | `/spotlight/lorenzo-esterhuizen` | Swimming — Namibia National Team | 14+ national records, Youth Olympics Dakar 2026 |

---

## Curriculum & School Info

- **Namibian curriculum:** Grade R to Grade 11
- **Grade 12:** via online programmes (TAPE, Mobimax, Cambridge) — supervised on campus
- **High School nav dropdown:** "Grade 8 – 12 (ages ~14–18)" — the full school goes to Grade 12, only the Namibian curriculum phase ends at Grade 11
- **School hours:** 07:15 – 13:30
- **Max class size:** 10 students per grade

---

## GitHub Multi-Account Note

Three accounts in the `gh` keyring. Repo belongs to `keenanswift101`.
**Before every push:**
```bash
gh auth switch --user keenanswift101
gh auth setup-git
git push origin main
```
If push fails with 403, run the above. `KeenanHusselmann` keeps becoming the active account.

---

## Session History

### May 5, 2026
- Fixed Netlify Forms (all 4 forms) — converted inline server components to `"use client"` fetch-POST components
- Configured DNS: A record `75.2.60.5`, `www` CNAME → `ia-academy-org.netlify.app`
- HTTPS live with Let's Encrypt
- Fixed `netlify.toml` build command to copy all `public/` assets into `.next/`
- Added OG image, updated `layout.tsx` OG metadata
- Replaced Unsplash stock photos in gallery with logo placeholders

### June 2026
- Added real school photos (`school-life-01` through `school-life-12`) to gallery and home page
- Built category-filtered gallery (School Life / Swimming / Squash / Gymnastics)
- Created Lorenzo Esterhuizen swimmer profile (`/spotlight/lorenzo-esterhuizen`)
- Built notice board with real content, events calendar with Namibian public holidays
- Added scroll-reveal animations (`PageReveal.tsx`, `.reveal` classes in `globals.css`)
- Removed accessibility mode selector button
- Fixed broken production images (extension mismatch `.jpeg` → `.png`)
- Applied Afrikaans client instructions: school start 07:15, Namibian curriculum to Grade 11
- Added `sitemap.ts` and `robots.ts` — submitted to Google Search Console
- Added GA4 (`G-HXJ7XHMXDR`), Schema.org JSON-LD, WhatsApp floating button
- Replaced announcement modal card with 2027 admission poster image (`admissions_poster.png`)
- Created Hayley du Toit and Zoé Lumé de Scande gymnastics profiles
- Added gymnastics gallery category with 4 images
- Built `SpotlightWidget.tsx` — hover-cycling image slideshow for home page
- Reordered spotlight page newest-first
