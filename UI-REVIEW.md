# IA Academy Website — UI Audit Report

**Audited:** 2026-03-26  
**Baseline:** CLAUDE.md + DESIGN.md brand standards (abstract 6-pillar audit)  
**Screenshots:** Not captured — Playwright not installed; code-only audit  
**Dev Server:** Running at localhost:3000 (confirmed)  
**Files Audited:** 32 TSX files across `src/app/` and `src/components/`

---

## Executive Summary

**Overall Score: 72 / 100**

The IA Academy website is visually well-crafted — brand identity is strong, the glassmorphism design language is consistent, and accessibility foundations are genuinely excellent (ARIA, skip links, keyboard nav, accessibility mode selector). The major gap is that **all contact forms are completely non-functional** (no submit handlers, no API routes), which is a critical launch blocker. A second persistent issue is **off-brand `#e0e0e0` borders** on form inputs in the Book a Tour page, and **hardcoded hex colours** scattered through the Footer that bypass the design token system.

Mobile responsiveness is better than the raw numbers suggest — the zero-responsive-prefix pages mostly use simple single-column stacks that collapse gracefully — but the hero logo circle (200px fixed) and PageRails fixed positioning at `left: 6px` warrant review on very small viewports.

---

## Pillar Scores

| Pillar | Score | Key Finding |
|--------|-------|-------------|
| 1. Copywriting | 15/20 | Mission-driven CTAs; no form error/success copy anywhere |
| 2. Visuals | 14/20 | Strong hierarchy; all gallery + spotlight widgets are placeholder-only |
| 3. Color | 14/20 | Mostly token-based; `#e0e0e0` inputs in book-a-tour, hardcoded grays in footer |
| 4. Typography | 15/20 | Excellent dyslexia-friendly setup; Lexend variable wiring is broken |
| 5. Spacing | 19/20 | Exemplary consistency; only minor arbitrary-value usage |
| 6. Experience Design | 10/20 | Great a11y; forms fully non-functional; zero loading/error/success states |

**Total: 87 / 120 pillar points → 72 / 100 overall**

---

## Critical Issues (Must Fix Before Launch)

### 🔴 CRITICAL 1 — All Forms Are Non-Functional

**Files:** `src/app/contact/page.tsx`, `src/app/contact/book-a-tour/page.tsx`, `src/app/contact/vacancies/page.tsx`  
**Impact:** Parents cannot contact the school, book tours, or enquire about enrolment. This is the site's primary conversion mechanism.

Every form uses `action="#" method="POST" noValidate` with no `onSubmit` handler:
```tsx
// contact/page.tsx — both forms
<form className="space-y-4" action="#" method="POST" noValidate>
  ...
  <button type="submit" ...>Send Message</button>
```

There are **zero API routes** in `src/app/api/`. No `onSubmit` handlers, no `fetch()` calls, no `axios` usage anywhere in the codebase.

**Fix:** Create `src/app/api/contact/route.ts` using Resend (per CLAUDE.md tech stack) and wire up `onSubmit` with React Hook Form + Zod validation on each form. Add loading spinner on submit buttons, success state (cleared form + confirmation message), and field-level error messages with `aria-describedby` linking.

---

### 🔴 CRITICAL 2 — Off-Brand Form Input Borders in Book a Tour Page

**File:** `src/app/contact/book-a-tour/page.tsx` at lines 120, 143, 165, 200, 220, 254, 278  
**Also:** `src/app/contact/vacancies/page.tsx` at lines 284, 304, 337, 358, 383  
**Impact:** Jarring visual inconsistency — the contact page was already fixed to use `rgba(94,0,129,0.20)` but the book-a-tour and vacancies pages still use the generic gray.

```tsx
// Current (wrong) — book-a-tour/page.tsx:120
style={{ borderColor: "#e0e0e0", color: "var(--color-on-surface)" }}

// Should be:
style={{ borderColor: "rgba(94,0,129,0.20)", color: "var(--color-on-surface)" }}
```

**Fix:** Global find-replace `"#e0e0e0"` → `"rgba(94,0,129,0.20)"` across the codebase (12 occurrences total).

---

### 🟠 HIGH 3 — Lexend Font Variable Wiring is Broken

**Files:** `src/app/layout.tsx` line 14, `src/app/globals.css` lines 47 + 110  
**Impact:** Next.js font optimization (self-hosting, FOUT prevention, layout stability) is not active. The browser may fall back to fetching Lexend from Google CDN — a performance and privacy concern.

`layout.tsx` loads Lexend and creates CSS variable `--font-lexend`:
```tsx
const lexend = Lexend({ variable: "--font-lexend", ... });
// Applies to: <html className={`${lexend.variable} h-full`}>
```

But `globals.css` references a completely different variable that uses a literal string:
```css
@theme {
  --font-sans: 'Lexend', sans-serif;  /* ← literal, ignores --font-lexend */
}
body {
  font-family: var(--font-sans);      /* ← never uses Next.js font */
}
```

`--font-lexend` is set on `<html>` but referenced nowhere in CSS.

**Fix:** In `globals.css @theme`, change the font-sans token to consume the Next.js variable:
```css
@theme {
  --font-sans: var(--font-lexend);  /* uses Next.js self-hosted font */
}
```

---

## Mobile-Specific Issues

### 🟠 MOBILE 1 — Hero Logo Circle Fixed at 200px

**File:** `src/components/ui/HeroCarousel.tsx` line 124  
**Impact:** On 360–375px wide phones, a `200px` centered circle occupies ~53% of viewport width and squeezes the text below it. On very narrow (320px) devices the proportions become awkward.

```tsx
// HeroCarousel.tsx:124
style={{
  width: 200,    // ← fixed px, no responsive scaling
  height: 200,
  ...
}}
```

**Fix:** Replace with responsive Tailwind sizing:
```tsx
className="w-32 h-32 sm:w-44 sm:h-44 md:w-[200px] md:h-[200px] ..."
```

---

### 🟡 MOBILE 2 — CTA Button Pair May Wrap Awkwardly on Small Screens

**File:** `src/components/ui/HeroCarousel.tsx` lines 179, 186  
**Impact:** Both hero CTA buttons have `min-w-[180px]`. On a 360px phone with `flex-col`, they stack fine. However, on the `sm:flex-row` breakpoint (640px), two `min-w-[180px]` buttons + `gap-4` = at minimum 364px + 16px = 380px. On screens 375–640px this could force awkward layout.

Actually the `flex-col sm:flex-row` pattern means they stack on mobile — this is fine. ✅ Minor item only.

---

### 🟡 MOBILE 3 — Utility Bar Hides Phone Number on Mobile

**File:** `src/components/layout/Navbar.tsx` line 37  
**Impact:** `className="hidden md:flex"` hides the utility bar (including phone number and Apply Now CTA) on all screens below 768px. Mobile users have no immediate contact information visible in the header and must scroll the page.

**Fix:** Add a condensed single-line bar on mobile with just the phone and WhatsApp link, or expose the phone number in the mobile menu header.

---

### 🟡 MOBILE 4 — Zero Responsive Prefixes on 10+ Inner Pages

**File group:** See table below  
**Impact:** While most zero-prefix pages use single-column `max-w` containers (which work fine), the following pages with more complex layouts have no explicit mobile handling:

| File | Concern |
|------|---------|
| `src/app/high-school/subjects/page.tsx` | Likely grid, not verified |
| `src/app/high-school/curriculum/page.tsx` | Likely grid, not verified |
| `src/app/junior-primary/curriculum/page.tsx` | Likely grid, not verified |
| `src/app/junior-primary/aftercare/page.tsx` | Unknown layout |
| `src/app/events/page.tsx` | Unknown layout |
| `src/app/primary/curriculum/page.tsx` | Unknown layout |
| `src/app/primary/daily-routine/page.tsx` | Unknown layout |

Pages confirmed-safe with 0 prefixes (single-column stacks):
`our-approach`, `fees`, `resources`, `online-learners` (has 3 breakpoints), `admissions`.

**Fix:** Audit the flagged pages above and add `sm:grid-cols-2 lg:grid-cols-3` responsive classes wherever grids are used.

---

### 🟡 MOBILE 5 — PageRails Visible on Small Screens

**File:** `src/components/ui/PageRails.tsx` lines 17–23  
**Impact:** `position: fixed; left: 6px; z-index: 0` — the left rail is 18px wide on mobile (`w-4.5`). Since content sections use `px-6` (24px), there's only 6px clearance between the decorative rail and content text. On 320px screens this can feel visually crowded.

**Fix:** Hide PageRails entirely below xl breakpoint:
```tsx
<div aria-hidden="true" className="hidden xl:block" style={{ position: "fixed", ... }}>
```
The rail is already functionally invisible on small screens (just a hairline), but a `hidden xl:block` would be cleaner and avoid any potential overlap perception.

---

## Detailed Findings by Pillar

### Pillar 1: Copywriting (15/20)

**Strengths:**
- All primary CTAs are specific and action-oriented: "Book a Tour", "Find out more", "Read about our approach", "Request fee information", "Open chat", "Book a School Tour"
- No generic "Click Here", "Submit", "OK/Cancel" patterns found
- Mission messaging is authentic and empathetic throughout — "Your child is not behind. They learn differently."
- Placeholder content uses appropriate forward-looking language: "Resources coming soon", "School notices will appear here"
- FAQ answers are comprehensive and school-specific (not boilerplate)
- Testimonials are plausible and regionally appropriate

**Issues:**
- **No form error messaging defined anywhere.** What does a user see if they submit an empty required field? There is no `aria-describedby` error pattern, no error copy written, no validation feedback. Once forms are wired, error copy must be written: "Please enter your full name", "A valid email address is required", etc.
- **No form success state copy.** After submission, what message does the parent see? ("Thank you — we'll be in touch within one business day." should appear.)
- Contact page submit button says "Send Message" (specific ✅) but enrollment form says "Submit Enquiry" (generic ⚠️) — consider "Send Enquiry" or "Start the Conversation"

---

### Pillar 2: Visuals (14/20)

**Strengths:**
- Hero carousel is the strongest section — large semi-transparent logo, bold h1, gold eyebrow label, clear dual-CTA structure
- 3-pillar card section uses consistent structure: gold left border, icon, heading, body
- Wave divider at hero bottom provides smooth section transition
- Approach section has strong editorial two-column layout (photo + text)
- `calm-pulse` radial gradient overlay on placeholder images is a sophisticated placeholder treatment
- Ambient shadows (`var(--shadow-ambient)`) are consistent and non-harsh

**Issues:**
- Gallery section (Section 6) is **entirely placeholder** — 6 logo-circle cards instead of real school photos. This is the section parents use to assess school environment and make emotional decisions. It is the highest-priority content gap.
- Student Spotlight widget uses `/favicon.png` as the "student" image — a 96×96 pixel favicon rendered at 96px looks pixelated and unprofessional. `src/app/page.tsx:368`
- Notice Board widget has only 2 static placeholder rows ("Coming soon", "—") — fine as a placeholder but should be called out for content management system integration
- PageRails organic curves are an elegant touch but invisible on 99% of screens (only xl+). Consider whether the development investment justified the viewport reach.

---

### Pillar 3: Color (14/20)

**Token compliance breakdown:**

| Usage | Assessment |
|-------|-----------|
| Primary brand purple `#5e0081` | Correctly uses `var(--color-primary)` in most places |
| Gold `#f0c040` | Correctly uses `var(--color-gold)` in buttons and accents |
| Surface system | Correctly uses `var(--color-surface-container-*)` throughout |
| Text `#1a1c1e` | Mix of `var(--color-on-surface)` and literal `#1a1c1e` |
| Logo circle `#000000` | Intentional brand decision — acceptable |
| WhatsApp `#25D366`, Facebook `#1877F2` | Social brand colors — acceptable |

**Violations:**
- `#e0e0e0` — 12 occurrences in `book-a-tour/page.tsx` and `contact/vacancies/page.tsx` for form input borders. This generic gray is not in the design token system and looks jarring against the purple brand.
- Footer hardcoded colors: `color: "#444"`, `color: "#555"`, `color: "#888"`, `color: "#666"` — `src/components/layout/Footer.tsx` lines 118–214. Should use `var(--color-on-surface-muted)` and `var(--color-on-surface-variant)`.
- `color: "#c47a00"` at `src/app/page.tsx:419` — hardcoded gold text variant instead of `var(--color-secondary)`.
- The contact page "Say Hello" section uses a mix of both CSS variables and literal hex on adjacent elements, creating two maintenance paths.

**Gold usage audit:** Gold appears on: hero CTA button, "Book a Tour" nav button, pillar card left border, section eyebrow dots, footer section h3 underlines, scroll-to-top indicator, numbered step circles. This is heavy use but each instance is a deliberate accent. The 60/30/10 split holds.

---

### Pillar 4: Typography (15/20)

**Font scale analysis:**

| Class | Used | Assessment |
|-------|------|-----------|
| `text-xs` | ✅ | Labels, meta, eyebrows |
| `text-sm` | ✅ | Body secondary, card text |
| `text-base` | ✅ | Primary body prose |
| `text-lg` | ✅ | Section descriptions, lead text |
| `text-xl` | ✅ | Card headings, widget titles |
| `text-2xl` | ✅ | Page `h2` headings |
| `text-3xl` | ✅ | Section `h2` headings |
| `text-4xl` | ✅ | Large `h2` headings at sm+ |

8 font sizes is at the upper limit of what's manageable. The `text-5xl` and `text-6xl` classes declared in `globals.css @theme` are unused, which is good.

Font weights: 4 in use (medium, semibold, bold, normal) — well-controlled.

**Accessibility wins:**
- `line-height: 1.7` on body — exceeds WCAG AA (1.5 minimum); excellent for dyslexic readers
- `max-width: 60ch` on `p, li, blockquote` — optimal reading line length
- Accessibility modes: ADHD (loose spacing), Dyslexia (letter-spacing + cream background), ADD (no animations + desaturated)
- `prefers-reduced-motion` implemented in globals.css

**Font wiring issue (see Critical Issue #3 above):**
- `--font-lexend` CSS variable is set on `<html>` by Next.js Font API
- `globals.css` uses `--font-sans: 'Lexend', sans-serif` (literal string)
- `body { font-family: var(--font-sans); }` — never references `--font-lexend`
- Next.js self-hosted font optimization is inactive; browser falls back to system/CDN Lexend

---

### Pillar 5: Spacing (19/20)

**Top marks.** Spacing discipline across both sections and components is exceptional:

**Section rhythm:**
- Short sections: `py-12` or `py-14`
- Standard sections: `py-16`
- Feature sections: `py-20`
- Content padding: `px-6` throughout (with `md:px-8` on footer)

**Card internals:**
- Small cards: `p-6`
- Standard cards: `p-8`
- Featured/hero cards: `p-10`

**Container widths:**
- Article content: `max-w-3xl`
- Two-column content: `max-w-4xl`
- Standard page: `max-w-5xl`
- Wide layouts: `max-w-6xl`

**Arbitrary values found:**
- `min-w-[180px]` on HeroCarousel CTAs — justified (prevents button width collapse)
- `h-[120px]` on wave divider SVG — justified (fixed aspect for SVG)
- `xl:w-[clamp(70px,8vw,120px)]` in PageRails — justified (responsive clamp only possible as arbitrary)
- No arbitrary spacing in content layouts

**Minor deduction:** `max-w-3xl` and `max-w-5xl` are used somewhat interchangeably for "inner content" — some pages use `max-w-3xl` while structurally similar pages use `max-w-4xl`. Defining a page-specific convention would prevent drift.

---

### Pillar 6: Experience Design (10/20)

**Accessibility foundations — excellent:**
- Skip-to-main-content link: `src/app/layout.tsx:55` — correct and styled
- `role="banner"` on hero, `role="dialog"` on modals, `role="tablist"` on carousel dots
- All carousel controls have `aria-label`, `aria-selected`, `aria-expanded` as appropriate
- Hamburger menu: `aria-expanded`, `aria-controls="mobile-menu"`, state-aware label
- Close-on-outside-click for dropdowns with `useEffect` + `mousedown`
- Mobile menu closes on route change
- `aria-live="polite" aria-atomic="true"` on carousel slide label — correct for dynamic text
- Keyboard focus rings: gold `outline: 3px solid var(--color-gold)` — high contrast, accessible
- `lang="en"` on `<html>`, `suppressHydrationWarning` for accessibility mode injection

**Interactive state coverage:**
- Hover: `hover:scale-105`, `hover:opacity-80`, `hover:opacity-90` — consistent across CTAs ✅
- Focus: `focus-visible:ring-2` throughout ✅
- Active: `active { transform: scale(0.97) }` on `.btn-gold-metal` ✅
- Disabled: **No disabled states defined anywhere** — form submit button has no disabled state during submission ⚠️
- Visited: Not defined (reasonable for a school marketing site) ✅

**State coverage — critical gaps:**
- **Loading state:** 0 instances across 32 files. No spinner, skeleton, or in-progress state.
- **Error state:** 0 instances. No `aria-invalid`, no error message containers, no error copy.
- **Success state:** 0 instances. No confirmation message, no form reset, no toast.
- **Empty state:** Placeholders exist for content ("Resources coming soon") but no functional data-driven empty states.

**Footer hover implementation:**
`src/components/layout/Footer.tsx` lines 118, 128 use `onMouseEnter/onMouseLeave` for link hover colour changes:
```tsx
onMouseEnter={(e) => (e.currentTarget.style.color = "#5e0081")}
onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
```
This approach bypasses CSS `:hover` and does not respond to focus or keyboard navigation. Use `group` + `group-hover:` or direct CSS instead.

---

## Recommendations Summary

### Must Fix (Launch Blockers)
1. **Wire all contact forms** to a real API endpoint with React Hook Form + Zod + Resend. Add loading, error, and success states. (`contact/page.tsx`, `book-a-tour/page.tsx`, `vacancies/page.tsx`)
2. **Fix `#e0e0e0` borders** → `rgba(94,0,129,0.20)` in `book-a-tour/page.tsx` (12 occurrences) and `contact/vacancies/page.tsx`
3. **Fix Lexend font wiring** in `globals.css`: change `--font-sans: 'Lexend', sans-serif` to `--font-sans: var(--font-lexend)`

### High Priority
4. **Add form validation error copy** — write and implement `aria-describedby` error messages for all required fields
5. **Replace `favicon.png` 96px Student Spotlight image** with a proper placeholder (`/logo-trns.png` or an illustrated SVG)
6. **Audit the 7 inner pages** with 0 responsive prefixes that may have grids (high-school/subjects, high-school/curriculum, junior-primary/curriculum, junior-primary/aftercare, events, primary/curriculum, primary/daily-routine)

### Medium Priority
7. **Replace Footer `onMouseEnter/onMouseLeave` inline handlers** with CSS `:hover` or Tailwind hover classes
8. **Replace hardcoded Footer grays** (`#444`, `#555`, `#888`) with design tokens (`var(--color-on-surface-variant)`, `var(--color-on-surface-muted)`)
9. **Make hero logo responsive** — `w-32 h-32 sm:w-44 sm:h-44 md:w-[200px] md:h-[200px]` in `HeroCarousel.tsx:124`
10. **Hide PageRails below xl** — add `hidden xl:block` wrapper to remove tiny hairline cursor from mobile gutters

### Nice to Have
11. Add a condensed contact strip in mobile navbar (phone number hidden on `<md`)
12. Standardise max-width containers: adopt `max-w-4xl` as default "inner content" and `max-w-5xl` as "grid page" consistently
13. Replace `"Submit Enquiry"` button label with `"Send Enquiry"` or `"Start the Conversation"` in enrollment form
14. Add `disabled` + loading state to all submit buttons: `disabled:opacity-60 disabled:cursor-not-allowed`

---

## Files Audited

**App pages:**
- `src/app/page.tsx` (home — 8 sections)
- `src/app/contact/page.tsx`
- `src/app/contact/book-a-tour/page.tsx`
- `src/app/contact/vacancies/page.tsx`
- `src/app/admissions/page.tsx`
- `src/app/admissions/fees/page.tsx`
- `src/app/admissions/faq/page.tsx`
- `src/app/online-learners/page.tsx`
- `src/app/about/our-approach/page.tsx`
- `src/app/resources/page.tsx`
- `src/app/layout.tsx`

**Components:**
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/ui/HeroCarousel.tsx`
- `src/components/ui/PageRails.tsx`
- `src/components/ui/PageHero.tsx`
- `src/components/ui/WhatsAppFloat.tsx`
- `src/components/ui/ScrollToTop.tsx`
- `src/components/ui/AnnouncementModal.tsx`
- `src/components/ui/CookieConsent.tsx`

**Styles:**
- `src/app/globals.css`

**Additional (grep scan for patterns only):**
- All remaining 12 `src/app/**/page.tsx` files (responsive prefix count + color audit)
