# IA Academy Primary School — Website

Official website for **Innovative Academics (IA) Academy Primary School**, Windhoek, Namibia.

A neurodivergent-friendly school specialising in students with ADHD, ADD, Dyslexia, and slow learning — offering the Namibian Cambridge Curriculum from Grade R to Grade 12 with a maximum of 10 students per class.

🌐 **Live site:** [iaacademyeduna.vercel.app](https://iaacademyeduna.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS variables |
| Forms | Netlify Forms (native, no backend required) |
| Gallery | yet-another-react-lightbox |
| Hosting | Netlify (primary) · Vercel (secondary) |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/              # Next.js App Router pages & layouts
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── ui/           # HeroCarousel, AnthemPlayer, PageRails, etc.
│   └── accessibility/ # AccessibilityModeSelector
├── data/             # Nav items, static data
└── lib/              # Utilities
public/               # Static assets (logo, images, audio)
```

---

## Brand

- **Primary:** Deep Royal Purple `#5e0081`
- **Gold:** Rich Gold `#f0c040`
- **Font:** [Lexend](https://fonts.google.com/specimen/Lexend) — dyslexia-friendly
- **Design principles:** No pure black, no sharp corners, no 1px borders, ambient shadows only

---

## Key Features

- Fully responsive — mobile-first
- Neurodivergent-friendly design (ADHD, Dyslexia, ADD)
- School anthem player with pulse animation
- Filterable gallery with lightbox
- Contact, Enrolment & Book a Tour forms (via Netlify Forms)
- FAQ accordion
- Open Graph / WhatsApp social sharing meta tags
- Accessibility mode selector
- Cookie consent banner

---

## Deployment

### Netlify (primary)
Connected to the `main` branch on GitHub. Push to `main` triggers an automatic production build via `@netlify/plugin-nextjs`.

### Vercel (secondary)
Also connected to `main`. Push to `main` also triggers a Vercel production build.

Manual Vercel deploy:
```bash
npx vercel --prod
```

### Forms
Contact forms use [Netlify Forms](https://docs.netlify.com/forms/setup/). Form submissions are captured automatically — no backend code required. The static detection file lives at `public/netlify-forms.html`.
