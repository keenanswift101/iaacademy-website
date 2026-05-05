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
| Framework | Next.js (App Router, `src/app/`) |
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
| `src/app/layout.tsx` | Root layout, global metadata, OG tags |
| `src/app/page.tsx` | Home page |
| `src/app/globals.css` | CSS variables, design tokens |
| `netlify.toml` | Build config — copies all `public/` into `.next/` |
| `public/og-image.png` | 1200×630 OG image (purple bg, logo centred) |
| `public/logo-trns.png` | School logo — transparent PNG |
| `public/netlify-forms.html` | Netlify Forms detection stub |
| `scripts/generate-og-image.py` | Python (Pillow) script to regenerate OG image |

---

## Netlify Forms

Three `"use client"` form components POST via `fetch` to `/netlify-forms.html`:

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

## OG / Social Preview

- `layout.tsx` has `metadataBase: new URL("https://ia-academy.org")`
- OG image: `https://ia-academy.org/og-image.png` (1200×630, served from `.next/`)
- Regenerate with: `python scripts/generate-og-image.py` (requires Pillow)
- To bust WhatsApp cache after changes: share `https://ia-academy.org/?v=N` with an incremented query param

---

## Image Placeholders

All non-hero images site-wide use logo placeholder cards (dark circle + gold logo + label). No stock photos remain. Real school photos will replace these when provided. Gallery page: `src/app/gallery/page.tsx`.

---

## Session History

### May 5, 2026
- Fixed Netlify Forms (all 4 forms) — converted inline server components to `"use client"` fetch-POST components
- Configured DNS: A record `75.2.60.5`, `www` CNAME → `ia-academy-org.netlify.app`
- HTTPS live with Let's Encrypt
- Fixed `ia-academy.org` routing — domain was served by cPanel Apache because it was registered as primary domain. Fixed by ensuring Netlify has `ia-academy.org` as a custom domain and A record points to Netlify's load balancer
- Fixed `netlify.toml` build command to copy all `public/` assets into `.next/` (previously only `netlify-forms.html` was copied, causing 404s for all static files)
- Added OG image (`public/og-image.png`) — purple gradient, logo centred, gold accent bars
- Updated `layout.tsx` OG metadata — correct domain, `summary_large_image` Twitter card
- Replaced Unsplash stock photos in gallery with logo placeholders
