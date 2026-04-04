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
| Forms | React Hook Form + Zod |
| Email | Resend |
| Gallery | yet-another-react-lightbox |
| Hosting | Vercel |

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
- Contact & Book a Tour forms
- FAQ accordion
- Open Graph / WhatsApp social sharing meta tags
- Accessibility mode selector

---

## Deployment

Deployed automatically via [Vercel](https://vercel.com). Push to `main` triggers a production build.

Manual deploy:
```bash
npx vercel --prod
```
