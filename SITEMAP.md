# IA Academy Primary School — Sitemap & Navigation Architecture
## Design Specification v1.3 | 2026-03-26

### Confirmed Client Decisions (v1.3)
| # | Decision | Answer |
|---|---|---|
| 2 | CTA + enrollment | "Book a Tour" retained; **Quick Enrollment Form** added to Contact page; email via **Resend** |
| 3 | Language / traffic split | **English only** — 60% mobile+tablet, 40% desktop |
| 4 | Photography assets | None yet — school **logo as image placeholder** with "Image coming soon" label |
| 5 | Social media | **Facebook + Instagram** confirmed (exact handles TBD from client) |
| 6 | Functional features | **8 confirmed** — see Confirmed Functional Features table below |
| 7 | Audience + adaptability | Parents (primary) + students (resources/viewing) — **Impairment Adaptation Feature** added (see below) |

### Confirmed Functional Features (v1.3)
| Feature | Scope | Notes |
|---|---|---|
| **Term Dates — PDF + iCal download** | `/admissions/term-dates` | PDF generated server-side or static; iCal `.ics` file; Google Calendar add link |
| **Notice Board** | `/notice-board` (new page) + Home widget | Current parents; pinned announcements + date-stamped posts; no login required (public) |
| **Resource Library by Grade** | `/resources` (new page) | Students + parents; organised tabs by grade (R–12); downloadable guides, worksheets, links |
| **Events Calendar** | `/events` (new page) + widget on Home | Upcoming exam dates, school events, term activities; monthly view + list view |
| **CV Upload on Vacancies** | `/contact/vacancies` | File upload field (PDF/DOCX, max 5MB); sent via Resend attachment to school inbox |
| **Student Spotlight** | Home widget + `/spotlight` (new page) | Rotating showcase of student achievements and milestones; no student surnames (POPIA) |
| **Virtual Tour Video** | `/about/campus` + Home | YouTube embed (URL TBD from client); fallback image if no video yet |
| **Parent Resource Section** | `/resources/parents` (sub-section) | ADHD, Dyslexia, ADD, slow learning tips; external links to Namibian support organisations |

### Grade Structure
| Phase | Grades | Ages (approx.) |
|---|---|---|
| **Primary** | Grade R, 1, 2, 3 | ~5–9 years |
| **Junior Primary** | Grade 4, 5, 6, 7 | ~10–13 years |
| **High School** | Grade 8, 9, 10, 11, 12 | ~14–18 years |

---

## Audience-Driven Design Rationale

Before any navigation decision, every item was evaluated against four audiences:

| Audience | Primary Need | What Gets Them Across the Line |
|---|---|---|
| **Prospective Parent** | "Is this school right for my child?" | Approach to learning differences, small class proof, tour booking |
| **Current Parent** | "Quick access to practical info" | Term dates, fees, contact, staff |
| **Teacher / Principal** | "Does this position match our values?" | Leadership, approach, facilities, vacancies |
| **Prospective Student** | "Will I feel safe and belong here?" | Gallery, student life, supportive tone |
| **Online Learner Parent** | "Can my child still have a school experience?" | Dedicated Online Learners page |

---

## Navigation Architecture

### Utility Bar (above main nav — desktop)
```
[Phone: +264 XX XXX XXXX]   [WhatsApp icon]   [Facebook icon]   [Instagram icon]   [Apply Now →]
```
- On mobile: collapses to a hamburger menu; Apply Now remains visible as a floating pill

### Main Navigation
```
Home | About Us ↓ | Primary ↓ | Junior Primary ↓ | High School ↓ | Online Learners | Gallery | Admissions ↓ | Resources ↓ | Contact ↓
                                                                                                        [Book a Tour]  ← persistent CTA button in nav
```

### Dropdown Details

#### About Us ↓
| Label | URL slug | Purpose |
|---|---|---|
| Our Story | /about/our-story | School history, founders, mission |
| Our Approach | /about/our-approach | Learning differences philosophy (ADHD, Dyslexia, ADD) |
| Leadership & Staff | /about/staff | Principal + key staff cards |
| Campus & Facilities | /about/campus | Photo of campus, classroom descriptions |

#### Primary ↓  *(Grade R, 1, 2, 3)*
| Label | URL slug | Purpose |
|---|---|---|
| Overview | /primary | Welcome page with intro, grade range (R–3), key age group |
| Curriculum | /primary/curriculum | Cambridge-aligned Early Years & Lower Primary |
| Learning Support | /primary/learning-support | One-on-one focus, early intervention, support types |
| Daily Routine | /primary/daily-routine | What a day looks like — reassuring for parents of young children |

#### Junior Primary ↓  *(Grade 4, 5, 6, 7)*
| Label | URL slug | Purpose |
|---|---|---|
| Overview | /junior-primary | Intro page for Grades 4–7 |
| Curriculum | /junior-primary/curriculum | Cambridge curriculum per grade |
| Learning Support | /junior-primary/learning-support | Support strategies as academic demands increase |
| Aftercare | /junior-primary/aftercare | Aftercare availability and hours |

#### High School ↓  *(Grade 8, 9, 10, 11, 12)*
| Label | URL slug | Purpose |
|---|---|---|
| Overview | /high-school | Intro page for Grades 8–12 |
| Cambridge Curriculum | /high-school/curriculum | Cambridge Lower & Upper Secondary (IGCSE + AS Level) |
| Subject Choices | /high-school/subjects | Subjects offered per grade |
| Learning Support | /high-school/learning-support | Transition support, study skills, exam prep |

#### Admissions ↓
| Label | URL slug | Purpose |
|---|---|---|
| How to Apply | /admissions | Step-by-step process |
| School Fees | /admissions/fees | Fee structure (or request via form) |
| Term Dates | /admissions/term-dates | Downloadable/viewable calendar |
| FAQ | /admissions/faq | Comprehensive FAQ (see FAQ spec below) |

#### Contact ↓
| Label | URL slug | Purpose |
|---|---|---|
| Contact Us | /contact | Form, map, phone, email, WhatsApp |
| Book a School Tour | /contact/book-a-tour | Dedicated booking form (high-priority CTA) |
| Vacancies | /contact/vacancies | Teaching & support staff openings + CV upload |

#### Resources ↓  *(new — v1.3)*
| Label | URL slug | Purpose |
|---|---|---|
| Student Resources | /resources | Study guides + worksheets organised by grade (R–12) |
| Parent Resources | /resources/parents | ADHD, Dyslexia, ADD, slow learning tips + external links |
| Notice Board | /notice-board | Announcements and news for current parents |
| Events Calendar | /events | Upcoming events, exam dates, term activities |

---

## Standalone Pages (not in dropdown)

| Page | URL slug | Notes |
|---|---|---|
| Online Learners | /online-learners | Unique offering — deserves own nav item & dedicated page |
| Gallery / Student Life | /gallery | Photo grid, filterable by category |
| Student Spotlight | /spotlight | Full showcase page — links from Home widget |
| Notice Board | /notice-board | Current parent announcements — also accessible from Resources dropdown |
| Events Calendar | /events | Monthly + list view — also accessible from Resources dropdown |

---

## Persistent CTAs (always visible regardless of page)

1. **"Book a Tour"** — pill button in main navbar, gold background with dark text (high contrast)
2. **"Apply Now"** — utility bar, also appears in hero and admissions sections
3. **WhatsApp float button** — bottom-right corner on all pages (mobile-first markets)

---

## Page-by-Page Content Specification

---

### HOME PAGE (`/`)

**Hero Section**
- Full-width, gradient from `primary (#5e0081)` to `primary_container (#7b1fa2)`
- H1: School name — large Lexend display weight
- Tagline: "Where every child's story matters" (or similar — TBD with content team)
- Two CTAs: Primary → "Book a Tour" | Secondary → "Learn About Our Approach"
- Background: subtle pattern overlay or logo watermark at low opacity
- Accessibility: `role="banner"`, focus-visible on both CTAs, skip-to-content link

**Why IA Academy — 3 Pillar Cards**
- Card 1: Small Classes (max 10 per grade)
- Card 2: Specialised Learning Support (ADHD, ADD, Dyslexia, slow learning)
- Card 3: Cambridge Namibian Curriculum (Grade R to Grade 12)
- Design: surface-container-lowest cards, gold accent border-left, soft ambient shadow

**"Our Approach" Feature Block**
- Asymmetric layout: large portrait photo left, text right (or vice versa)
- Copy: empathetic, parent-focused — "Your child is not behind. They learn differently."
- Link: "Read about our learning approach →"

**Online Learners Callout**
- Distinct section break (surface-container-low background)
- Brief description of the supervised online learner facility
- CTA: "Find out more →"

**Testimonial / Social Proof**
- 1–2 parent/student testimonials (blockquote style, Lexend italic body)
- Or placeholder if no testimonials yet available

**Gallery Preview**
- 4–6 photos in a masonry/grid layout
- CTA: "See more in our Gallery →"

**Contact Quick Bar**
- Map embed (Google Maps, Windhoek pin)
- Phone | Email | WhatsApp — icons with labels
- Address line

**Footer**
- Logo
- Quick links (all main nav items)
- Social media icons (with visible labels for a11y)
- Cambridge affiliation badge
- Copyright + "Site by [agency]"
- Legal: Privacy Policy | Terms

---

### ABOUT — OUR APPROACH (`/about/our-approach`)

This is the most emotionally critical page. Prospective parents of neurodivergent children have often been failed by other schools. The content must be:
- Validating ("We see your child fully")
- Specific (name ADHD, ADD, Dyslexia, slow learning explicitly — parents search for these)
- Evidence of method (one-on-one, small classes, structured routine, calm environment)

**Sections:**
1. Opening statement — empathy-led
2. "Who We Support" — chip tags: ADHD · ADD · Dyslexia · Slow Learning · Sensory Sensitivity
3. Our Methodology — structured approach breakdown
4. What Small Classes Mean — expand on the max 10 benefit
5. A Typical Day — reassurance for routine-dependent children
6. FAQ anchor link → Admissions FAQ

---

### ONLINE LEARNERS (`/online-learners`)

**Unique to IA Academy — must be clearly differentiated from the main school offering.**

**Sections:**
1. Hero: "A School Environment for Online Learners"
2. What this is: "If your child is enrolled in an online curriculum but needs structured supervision, social interaction, and a safe school-like setting — we have a place for them."
3. What's included:
   - Supervised study space
   - Social interaction with peers
   - Safe, structured environment
   - School timetable/routine
4. Who it's for: OA curriculum types, registered home-schoolers, etc.
5. Fees / enquire section
6. FAQ (Online Learner specific)
7. CTA: "Enquire About Online Learner Placement"

---

### ADMISSIONS — FAQ (`/admissions/faq`)

FAQ must be structured as an accordion (keyboard navigable, ARIA-expanded) grouped by category:

**Category: General**
- What grades do you offer?
- How many students are in each class?
- Do you follow the Namibian Cambridge curriculum?
- Is IA Academy registered / accredited?
- What is your school's ethos?

**Category: Learning Support**
- My child has ADHD/ADD/Dyslexia — can you support them?
- What does "one-on-one teaching" mean in practice?
- Do you have specialist teachers or educational psychologists?
- How do you communicate progress to parents?
- What if my child needs additional external therapy?

**Category: Admissions Process**
- How do I apply?
- Is there an assessment before my child can enrol?
- Are there limited spaces?
- When does the school year start?
- What documents do I need to apply?

**Category: Fees & Finances**
- What are the school fees?
- Are there additional costs (uniforms, books, etc.)?
- Do you offer payment plans?
- Is there a registration fee?

**Category: Practical / Day-to-Day**
- What are the school hours?
- Is aftercare available?
- What is the school's address?
- How do I contact the school in an emergency?
- Is there a dress code or uniform?

**Category: Online Learners**
- What qualifies as an "online curriculum"?
- Can my child join just for supervision, not academic instruction?
- What are the hours for online learner supervision?
- Is this a separate fee structure?

---

### GALLERY (`/gallery`)

- Masonry grid layout
- Filter bar: All · Primary (R–3) · Junior Primary (4–7) · High School (8–12) · Events · Campus
- Each image has a descriptive alt text (mandatory for a11y)
- Lightbox on click — keyboard navigable, Escape to close, ARIA role="dialog"
- No student names in image captions (child safety / POPIA compliance)
- **Until client assets arrive:** all image slots render `<ImagePlaceholder>` — school logo on `--color-surface-container` background, label "Image coming soon". Layout is fully reviewable with placeholders in place.

---

### CONTACT & BOOK A TOUR (`/contact`, `/contact/book-a-tour`)

**Contact Page:**
- Contact form: Name, Email, Phone, Subject (dropdown), Message
- **Quick Enrollment Form** (separate card below contact form):
  - Fields: Student First Name, Grade of Interest (dropdown — all grades R–12), Parent/Guardian Name, Phone, Email, Brief description of learner's needs (textarea, optional)
  - Submit → Resend API route → email to school inbox + auto-reply to parent confirming receipt
  - Success state: friendly confirmation + WhatsApp fallback link
- Google Maps embed with IA Academy Windhoek pin
- WhatsApp direct link (wa.me link with pre-filled message)
- Physical address
- Phone (click-to-call `tel:` link)
- Email

**Book a Tour Page:**
- Dedicated page — not buried in a dropdown
- **Phone-first approach:** prominent "Call Us" number at top with click-to-call; form as secondary option
- Form: Name, Phone/Email, Preferred Date, School Section (Primary R–3 / Junior Primary 4–7 / High School 8–12 / Online Learner enquiry)
- Note: "We will confirm your booking via WhatsApp or email within 24 hours"
- Available slots info: "Tours are available weekday mornings by appointment"

---

### RESOURCES — STUDENT LIBRARY (`/resources`)

**Audience:** Students (Grade 4–12 primarily) and parents looking for supplementary materials.

**Sections:**
1. Grade filter tabs: R–3 · 4–7 · 8–10 · 11–12
2. Resource cards: title, subject, grade level, file type badge (PDF / Link / worksheet), download/open button
3. Usage note: "Resources are supplementary materials — not a replacement for classroom instruction."
4. Placeholder state: "Resources for this grade are coming soon — check back after the first term."

**Constraints:**
- All downloadable files hosted in `/public/resources/` or an S3-compatible bucket (Phase 2)
- No login required — resources are publicly accessible
- File names must not contain student names (POPIA)

---

### RESOURCES — PARENT SECTION (`/resources/parents`)

**Audience:** Parents of children with ADHD, ADD, Dyslexia, or slow learning needs.

**Sections:**
1. Intro: "Supporting your child at home is one of the most powerful things you can do."
2. Topic cards (4): ADHD · Dyslexia · ADD · Slow / Delayed Learning
   - Each card: 4–6 practical home tips + link to reputable external resource (e.g., CHADD, British Dyslexia Association)
3. "When to Seek Additional Help" section — guidance on educational psychologists in Namibia
4. CTA: "Talk to our learning support team →" → Contact form

---

### NOTICE BOARD (`/notice-board`)

**Audience:** Current parents.

**Sections:**
1. Pinned notices (top): highlighted card with pin icon
2. Feed: date-stamped cards, most recent first
3. Category filter chips: General · Academic · Events · Fees · Holidays
4. "No account needed — this board is updated by the school and visible to all."
5. Placeholder state: "No notices yet — check back soon."

**Content management:** Phase 1 — hardcoded MDX or JSON file updated by developer. Phase 2 — Sanity.io CMS allows principal to post directly.

---

### EVENTS CALENDAR (`/events`)

**Sections:**
1. Month grid view (default) — colour-coded by type: Academic (purple) · Sports (gold) · Admin (grey) · Holidays (green)
2. List view toggle — sortable by date
3. Month navigation (prev/next arrows)
4. Add to calendar buttons on each event: Google Calendar · iCal download
5. Placeholder: "The school calendar will be published at the start of each term."

---

### STUDENT SPOTLIGHT (`/spotlight`)

**Audience:** Students, parents, prospective families.

**Sections:**
1. Hero: "Celebrating Every Milestone" — empathy-led intro
2. Spotlight grid: cards with achievement title, grade level, month/year, brief description (1–2 sentences)
3. **Privacy rule enforced in code:** only first name + grade stored — no surnames, no photos without permission
4. Nomination CTA: "Nominate a Student →" → simple form (name, grade, achievement description) → sent via Resend
5. Placeholder state: "Our first spotlights are coming soon — we can't wait to celebrate our students."

---

### VACANCIES (`/contact/vacancies`) — updated

**Sections:**
1. Current openings (hardcoded or JSON-driven)
2. "Don't see a match? Send a speculative application."
3. **CV Upload Form:**
   - Fields: Full Name, Email, Phone, Position / Role of Interest, Cover Note (textarea), File Upload (PDF/DOCX, max 5MB)
   - Client-side validation: file type + size guard before submit
   - Submit → Next.js API route → Resend with file attachment → school inbox
   - Success: "Thank you — we'll be in touch within 5 working days."
   - Note: uploaded files are not stored server-side — emailed directly (no database, no storage bucket needed for Phase 1)

---

### TERM DATES (`/admissions/term-dates`) — updated

**Sections:**
1. Visual term calendar — table or card grid showing Term 1, 2, 3, 4 start/end dates + public holidays
2. **Download row:**
   - `[Download PDF]` — static PDF file at `/public/term-dates-2026.pdf`
   - `[Add to Google Calendar]` — Google Calendar URL with pre-filled event data
   - `[Download iCal (.ics)]` — `.ics` file at `/public/term-dates-2026.ics`
3. Note: "Term dates are set by the Namibian Ministry of Education and may be subject to change."

---

## Accessibility Specification

### WCAG Compliance Target: AA (with AAA on text-heavy pages)

| Requirement | Implementation |
|---|---|
| **Colour contrast** | All text ≥ 4.5:1 (verified — see ratios in CLAUDE.md) |
| **Font size** | Minimum 16px body, 18px on mobile |
| **Line height** | 1.6–1.8 on all body text (Lexend spec) |
| **Line length** | Max 60ch |
| **Focus indicators** | 2px `secondary (#f0c040)` outline, `3px` offset — always visible, never removed |
| **Touch targets** | Minimum 44×44px for all interactive elements |
| **Skip link** | "Skip to main content" — first focusable element on every page |
| **Headings** | Single H1 per page, logical H2→H3 hierarchy |
| **Alt text** | All meaningful images; decorative images `alt=""` |
| **ARIA** | Labels on icon-only buttons; expanded state on dropdowns |
| **Keyboard nav** | Full keyboard navigation — dropdown accessible via Enter/Space/Arrow keys |
| **Reduced motion** | All animations respect `prefers-reduced-motion: reduce` |
| **Form labels** | Every input has a visible `<label>`, never placeholder-only |
| **Error messages** | Inline, descriptive, ARIA-live announcements |
| **Language attr** | `<html lang="en">` |
| **Reading Mode** | Optional toggle (+2px font size, 2.0 line-height, increased spacing) — Phase 2 |

### Neurodivergent-Specific Enhancements

| Enhancement | Reason |
|---|---|
| Lexend font mandatory | Reduced visual stress, better reading for dyslexia |
| No pure black on white | Avoids "vibration" effect for ADHD/dyslexic readers |
| Generous padding in cards | Reduces visual crowding |
| Clear section labels | Predictable structure aids ADHD readers |
| No auto-play media | Prevents sensory overload |
| Consistent nav structure | Reduces cognitive load on every page |
| Short paragraphs (3–5 lines max) | Prevents text-wall fatigue |

---

## Mobile-First Priorities

- **Confirmed: 60% mobile + tablet, 40% desktop** (client-verified — supersedes previous 75% estimate)
- Navigation: hamburger → full-screen overlay with large tap targets
- CTAs: "Book a Tour" and "WhatsApp Us" pinned as bottom action bar on mobile
- Gallery: single column on mobile, 2-col on tablet, masonry on desktop
- Maps embed: smaller on mobile, tap-to-open in native maps app
- Phone number: `tel:` link (tappable on all devices)
- WhatsApp float: bottom-right, 56×56px, always reachable thumb zone
- Tablet breakpoint (768–1024px) treated as first-class — 2-col grids, hamburger nav still applies
- Touch targets: minimum 48×48px (bumped from 44px given 60% touch audience)

---

## URL Structure

```
iaacademy.com/
├── about/
│   ├── our-story
│   ├── our-approach
│   ├── staff
│   └── campus                     ← Virtual Tour video embed lives here
├── primary/                       ← Grade R, 1, 2, 3
│   ├── curriculum
│   ├── learning-support
│   └── daily-routine
├── junior-primary/                ← Grade 4, 5, 6, 7
│   ├── curriculum
│   ├── learning-support
│   └── aftercare
├── high-school/                   ← Grade 8, 9, 10, 11, 12
│   ├── curriculum
│   ├── subjects
│   └── learning-support
├── online-learners/
├── gallery/
├── spotlight/                     ← Student achievement showcase (NEW)
├── notice-board/                  ← Current parent announcements (NEW)
├── events/                        ← Events calendar (NEW)
├── resources/                     ← Student resource library by grade (NEW)
│   └── parents/                   ← Parent resource section — ADHD/Dyslexia tips (NEW)
├── admissions/
│   ├── fees
│   ├── term-dates                 ← PDF + iCal/.ics download here
│   └── faq
└── contact/
    ├── book-a-tour
    └── vacancies                  ← CV upload field lives here
```

---

## Tech Stack Recommendation (for frontend-developer handoff)

| Layer | Recommendation | Reason |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | Static generation for SEO; fast; React ecosystem |
| **Styling** | Tailwind CSS + CSS variables for design tokens | Utility-first, consistent with design system |
| **Fonts** | Lexend via Google Fonts (`next/font`) | Dyslexia-friendly, required by brand |
| **Forms** | React Hook Form + Zod validation | Type-safe, accessible error handling |
| **Email** | **Resend** via Next.js API route (confirmed) | Contact form + Quick Enrollment Form delivery |
| **Maps** | Google Maps Embed API (no key required for basic embed) | Simple, reliable |
| **Gallery** | Next.js `<Image>` + Lightbox (yet-another-react-lightbox) | Optimised images, a11y-friendly lightbox |
| **Hosting** | Vercel (preferred) or Netlify | Zero-config Next.js, free tier available |
| **CMS** | Sanity.io or Contentlayer (Phase 2) | Allows principal to update news/gallery without code |
| **Analytics** | Plausible (privacy-friendly, no cookie banner needed) | GDPR/POPIA compliant |

---

## Design Tokens (CSS Variables)

```css
:root {
  /* Brand colours */
  --color-primary:           #5e0081;
  --color-primary-container: #7b1fa2;
  --color-secondary:         #745b00;
  --color-secondary-container: #f0c040;
  --color-tertiary:          #383838;

  /* Surface system */
  --color-surface:                  #f9f9fc;
  --color-surface-container-low:    #f3f3f6;
  --color-surface-container:        #ededf0;
  --color-surface-container-high:   #e7e7ea;
  --color-surface-container-highest:#e1e1e4;
  --color-surface-container-lowest: #ffffff;
  --color-surface-variant:          rgba(94, 0, 129, 0.06);

  /* On-colours (text on backgrounds) */
  --color-on-primary:         #ffffff;
  --color-on-secondary:       #ffffff;
  --color-on-surface:         #1a1c1e;
  --color-on-surface-variant: #44474a;

  /* Typography */
  --font-family: 'Lexend', sans-serif;
  --font-size-display:  3.5rem;    /* 56px */
  --font-size-headline: 1.75rem;   /* 28px */
  --font-size-title:    1.25rem;   /* 20px */
  --font-size-body:     1rem;      /* 16px */
  --font-size-label:    0.75rem;   /* 12px */
  --line-height-body:   1.7;
  --max-line-length:    60ch;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;

  /* Border radius */
  --radius-sm:   0.75rem;   /* minimum — no sharp corners */
  --radius-md:   1rem;
  --radius-lg:   1.5rem;
  --radius-xl:   2rem;
  --radius-full: 9999px;   /* pills */

  /* Shadows (ambient only — no harsh drop shadows) */
  --shadow-ambient: 0px 20px 40px rgba(94, 0, 129, 0.06);
  --shadow-card:    0px 8px 24px rgba(94, 0, 129, 0.08);
  --shadow-float:   0px 32px 64px rgba(94, 0, 129, 0.12);

  /* Focus ring */
  --focus-ring: 0 0 0 3px #f0c040;

  /* Transitions */
  --transition-fast:   150ms ease;
  --transition-normal: 250ms ease;
  --transition-slow:   350ms ease;
}
```

---

## Component Inventory

| Component | Used On | Notes |
|---|---|---|
| `<Navbar>` | All pages | Sticky, glassmorphism, accessible dropdowns |
| `<HeroBanner>` | Home, section overviews | Gradient bg, dual CTA |
| `<PageHero>` | Inner pages | Simpler, smaller hero |
| `<PillarCard>` | Home | Icon + title + short copy |
| `<TestimonialCard>` | Home, About | Blockquote style |
| `<StaffCard>` | About/Staff | Photo + name + role + email |
| `<GalleryGrid>` | Gallery | Masonry, filterable, lightbox |
| `<AccordionFAQ>` | FAQ | Keyboard nav, ARIA-expanded |
| `<ContactForm>` | Contact | React Hook Form, validation, ARIA errors |
| `<TourBookingForm>` | Book a Tour | Date picker, preferred section, confirm flow |
| `<MapEmbed>` | Contact, Home footer | Google Maps iframe |
| `<WhatsAppFloat>` | All pages | Fixed position, bottom-right |
| `<CTASection>` | Home, inner pages | "Book a Tour" persistent CTA band |
| `<Footer>` | All pages | Logo, links, social, legal |
| `<SkipLink>` | All pages | First element in DOM, visually hidden until focused |
| `<BreadcrumbNav>` | Inner pages | ARIA-label="breadcrumb" |
| `<ChipTag>` | About/Approach, Online Learners | ADHD · ADD · Dyslexia tags |
| `<FeatureBlock>` | Home, Online Learners | Asymmetric image + text |
| `<QuickEnrollForm>` | Contact page | Student name, grade, parent name, phone/email, brief needs — submitted via Resend |
| `<ImagePlaceholder>` | All pages until assets arrive | Logo centred on surface-container bg, label "Image coming soon" |
| `<AccessibilityModeSelector>` | All pages | First-visit modal + persistent toolbar icon — sets `data-mode` on `<html>`, persisted via `localStorage` |
| `<NoticeBoardFeed>` | /notice-board, Home widget | Date-stamped announcement cards, pinned posts at top |
| `<EventsCalendar>` | /events, Home widget | Monthly grid view + list view toggle; event type colour-coded |
| `<ResourceLibrary>` | /resources | Tab-filtered file/link cards by grade level; download + external link actions |
| `<ParentResourceSection>` | /resources/parents | ADHD / Dyslexia / ADD / slow learning topic cards with tips + external links |
| `<StudentSpotlight>` | Home widget + /spotlight | Rotating achievement cards; anonymous (first name + grade only, no surnames) |
| `<VideoEmbed>` | /about/campus, Home | YouTube embed wrapper; aspect-ratio 16:9 preserved; `<ImagePlaceholder>` fallback until URL provided |
| `<TermDatesDownload>` | /admissions/term-dates | PDF download button + iCal/.ics download + Google Calendar link |
| `<CVUploadForm>` | /contact/vacancies | File input (PDF/DOCX ≤5MB), position field, name/email — sent via Resend with attachment |

---

## Open Questions for Client (before build)

| # | Question | Status |
|---|---|---|
| 1 | **School year of founding** — for "Our Story" content | ⏳ Pending |
| 2 | CTA + enrollment form — Quick Enrollment Form via Resend confirmed | ✅ Done |
| 3 | Language + device split — English only; 60% mobile+tablet, 40% desktop | ✅ Done |
| 4 | Photography assets — logo as placeholder until client provides photos | ✅ Done |
| 5 | Social media — Facebook + Instagram confirmed; **exact handles needed** | ⏳ Handles TBD |
| 6 | **Functional features** — 8 features confirmed (see Confirmed Functional Features table above) | ✅ Done |
| 7 | Audience + impairment adaptation — see Impairment Adaptation Feature below | ✅ Done |
| 8 | **Staff photos + bios** — suggestion: initials-avatar placeholders (see Staff Placeholder Approach below) | ✅ Suggested |
| 9 | **School motto or tagline** — official wording preferred | ⏳ Pending |
| 10 | **Online learner capacity** — max students, any prerequisites? | ⏳ Pending |
| 11 | **Physical address** — exact address for Google Maps pin | ⏳ Pending |
| 12 | **School fees** — list publicly, or enquire-only via form? | ⏳ Pending |
| 13 | **Uniform policy** — yes/no + brief description | ⏳ Pending |
| 14 | **School hours** — start/end times, aftercare hours | ⏳ Pending |
| 15 | **WhatsApp Business number** — needed for float button and utility bar | ⏳ Pending |

---

## Functional Feature Questions for Client (Q6 — resolved v1.3)

| # | Feature | Status |
|---|---|---|
| 1 | PDF/iCal download for term dates | ✅ Confirmed |
| 2 | Notice board for current parents | ✅ Confirmed |
| 3 | Resource library by grade for students | ✅ Confirmed |
| 4 | Parent portal / secure login | ❌ Not selected |
| 5 | Events calendar | ✅ Confirmed |
| 6 | Newsletter signup | ❌ Not selected |
| 7 | CV uploads on vacancies page | ✅ Confirmed |
| 8 | Student spotlight / achievement showcase | ✅ Confirmed |
| 9 | Virtual tour video embed | ✅ Confirmed |
| 10 | Parent resource section (ADHD/Dyslexia tips) | ✅ Confirmed |

---

## Impairment Adaptation Feature

**Concept: Learning Mode Selector**

A one-time modal appears ~2 seconds after a user's first visit. Selection is stored in `localStorage` (`iaacademy_mode`). The chosen mode applies a `data-mode` attribute to `<html>`, activating CSS variable overrides site-wide. A persistent floating icon (accessibility toolbar, bottom-left) lets any user change their mode at any time.

**Modal prompt:**
> "How can we make this website easier to read?"
> *(You can change this at any time)*

**Available Modes:**

| Mode | Key Visual Changes | Interactive Additions |
|---|---|---|
| **Standard** | No change (default) | None |
| **ADHD-Friendly** | Stronger heading hierarchy, extra whitespace between sections, reduced decorative elements | Section progress bar on long pages; "Focus Mode" button that hides nav + footer to show content only |
| **Dyslexia-Friendly** | Letter-spacing `+0.05em`, word-spacing `+0.1em`, line-height `2.0`, cream background tint `#fefde8` | Optional OpenDyslexic font toggle; "Read Aloud" button (Web Speech API) on resource pages |
| **ADD / Focus Difficulties** | All CSS transitions and animations disabled, reduced colour saturation, single-column layout on content pages | Step-by-step nav arrows between sections; "Hide Extras" toggle removes secondary content |
| **Low & Slow** | Body text `+20%` size, shorter paragraphs enforced at render, icons beside every action label | Tooltips on unfamiliar terms; "Read Aloud" button; simplified vocabulary mode (plain-language rewrites on key pages — Phase 2) |

**Implementation Notes:**
- All modes controlled via `[data-mode="..."]` CSS attribute selectors — no runtime JS style injection
- Respects `prefers-reduced-motion` regardless of selected mode
- Students visiting the Resources section see the same modal and can personalise independently
- No account or sign-in required — device-local only
- Accessible toolbar icon: `aria-label="Adjust reading settings"`, always visible at `z-index: 9999`

---

## Staff Placeholder Approach (Q8)

Until the client provides staff photos and bios:

- **Avatar:** 80×80px circle, `--color-primary` background, white initials in Lexend Semi-Bold
- **Card structure:** Avatar | Name | Role | Email (mailto link)
- **Placeholder bio:** "Bio coming soon." — brief note that team introductions will be added shortly
- **Named slots:** Principal + any known staff are named; remaining slots show "Team Member" with role label
- **On asset delivery:** drop image in, remove avatar element — no layout changes required
- Staff page is built last so client can supply names and bios progressively without blocking other pages
