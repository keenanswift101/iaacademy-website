import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/ui/HeroCarousel";
import AnnouncementModal from "@/components/ui/AnnouncementModal";
import AnthemPlayer from "@/components/ui/AnthemPlayer";

/* ─────────────────────────────────────────────
   IA Academy — Home Page
   Sections:
   1. Hero Banner
   2. Why IA Academy (3 Pillars)
   3. Our Approach Feature Block
   4. Online Learners Callout
   5. Testimonial / Social Proof
   6. Gallery Preview
   7. Notice Board + Student Spotlight widgets
   8. Contact Quick Bar
───────────────────────────────────────────── */

const pillars = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width={32} height={32} aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Small Classes, Big Results",
    copy: "Maximum 10 students per grade — 95 students across the school. Every child receives genuine one-on-one attention — not just a seat in a crowded room.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width={32} height={32} aria-hidden="true">
        <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2z"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/><path d="M8 14l1.5 1.5L12 13l2.5 2.5L16 14"/>
      </svg>
    ),
    title: "Specialised Learning Support",
    copy: "Designed for learners with ADHD, ADD, Dyslexia, and slow learning. Our educators are trained to meet each child where they are.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width={32} height={32} aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
      </svg>
    ),
    title: "Namibian Cambridge Curriculum",
    copy: "Grade R to Grade 12. A recognised, structured curriculum delivered in the calm, supportive environment your child deserves.",
  },
];

const galleryPlaceholders = [
  { label: "Classroom activity", aspect: "aspect-[4/3]" },
  { label: "Outdoor learning", aspect: "aspect-square" },
  { label: "Student reading session", aspect: "aspect-[4/3]" },
  { label: "Arts and creativity", aspect: "aspect-square" },
  { label: "Group collaboration", aspect: "aspect-[4/3]" },
  { label: "Campus grounds", aspect: "aspect-[4/3]" },
];

export default function HomePage() {
  return (
    <>
      <AnnouncementModal />
      {/* ── 1. HERO BANNER — carousel ──────────────────── */}
      <HeroCarousel />

      {/* ── 2. WHY IA ACADEMY — 3 PILLARS ────────────────── */}
      <section
        aria-labelledby="pillars-heading"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-5 flex items-center justify-center">
              <Image
                src="/favicon.png"
                alt=""
                width={52}
                height={52}
                className="object-contain"
                aria-hidden="true"
              />
            </div>
            <p className="mb-3 text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: "var(--color-primary)" }}>
              Why IA Academy
            </p>
            <h2 id="pillars-heading" className="text-3xl font-bold sm:text-4xl" style={{ color: "var(--color-on-surface)" }}>
              Built differently. On purpose.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {pillars.map(({ icon, title, copy }) => (
              <div
                key={title}
                className="rounded-2xl p-8 transition-shadow"
                style={{
                  background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(94,0,129,0.20)",
                  boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
                }}
              >
                <div className="mb-4" style={{ color: "var(--color-primary)" }}>
                  {icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold leading-snug" style={{ color: "var(--color-on-surface)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. OUR APPROACH FEATURE BLOCK ──────────────── */}
      <section
        aria-labelledby="approach-heading"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            {/* Photo placeholder */}
            <div className="w-full overflow-hidden rounded-2xl lg:w-5/12" style={{ boxShadow: "var(--shadow-ambient)", position: "relative" }}>
              <div
                className="flex aspect-4/5 items-center justify-center"
                style={{ background: "var(--color-surface-container)", position: "relative", overflow: "hidden" }}
                role="img"
                aria-label="IA Academy classroom environment photo (coming soon)"
              >
                {/* Calming pulse overlay */}
                <div
                  className="calm-pulse"
                  style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(ellipse at center, rgba(94,0,129,0.15) 0%, rgba(94,0,129,0) 70%)",
                    pointerEvents: "none",
                  }}
                  aria-hidden="true"
                />
                {/* Logo — black circle like hero */}
                <div
                  style={{
                    position: "relative", zIndex: 1,
                    width: 110, height: 110,
                    background: "#000000",
                    borderRadius: "9999px",
                    border: "2px solid rgba(240,192,64,0.55)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <Image src="/logo-trns.png" alt="" width={88} height={88} className="object-contain" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="mb-3 text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: "var(--color-primary)" }}>
                Our Approach
              </p>
              <h2 id="approach-heading" className="mb-6 text-3xl font-bold leading-tight sm:text-4xl" style={{ color: "var(--color-on-surface)" }}>
                Your child is not behind.<br />They learn differently.
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
                <p>
                  At IA Academy, we don&apos;t ask children to fit the system — we build the system around the child. Our educators are trained in strategies that work for ADHD, ADD, Dyslexia, and slow learning.
                </p>
                <p>
                  Small classes mean your child is never invisible. Structured routines provide the predictability that anxious learners need. And our calm, distraction-managed environment lets every student focus and flourish.
                </p>
              </div>
              <p className="mt-8 text-sm font-medium" style={{ color: "var(--color-primary)" }}>
                ADHD | ADD | Dyslexia | Slow Learning | Sensory Sensitivity
              </p>
              <Link
                href="/about/our-approach"
                className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105 focus-visible:ring-2 btn-gold-metal"
                style={{ background: "var(--color-primary)", color: "var(--color-on-primary)" }}
              >
                Read about our approach
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={16} height={16} aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. ONLINE LEARNERS CALLOUT ────────────────── */}
      <section
        aria-labelledby="online-heading"
        className="px-6 py-16"
      >
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full mb-6"
            style={{ background: "var(--color-gold)" }}
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--color-on-surface)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
              <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
            </svg>
          </div>
          <p className="mb-3 text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: "var(--color-primary)" }}>
            Something Unique
          </p>
          <h2 id="online-heading" className="mb-4 text-3xl font-bold sm:text-4xl">
            A School Environment for Online Learners
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
            Is your child enrolled in an online curriculum but thriving better in a structured, social environment? We provide supervised study space, peer interaction, and a calm daily routine — while they follow their own online programme.
          </p>
          <Link
            href="/online-learners"
            className="inline-flex h-12 items-center gap-2 rounded-full px-7 text-base font-semibold transition-transform hover:scale-105 focus-visible:ring-2 btn-gold-metal"
            style={{ background: "var(--color-primary)", color: "var(--color-on-primary)" }}
          >
            Find out more
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={16} height={16} aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" /></svg>
          </Link>
        </div>
      </section>

      {/* ── 5. TESTIMONIAL ──────────────────────────────── */}
      <section
        aria-labelledby="testimonial-heading"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: "var(--color-primary)" }}>
              From Our Community
            </p>
            <h2 id="testimonial-heading" className="text-3xl font-bold sm:text-4xl" style={{ color: "var(--color-on-surface)" }}>
              Hear from our families
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                quote: "Our son struggled at every school we tried. Within weeks at IA Academy, he was smiling when we dropped him off. That says everything.",
                name: "A Windhoek parent",
                tag: "Parent of a Grade 5 learner",
              },
              {
                quote: "The teachers here actually understand ADHD. They don&apos;t just tolerate it — they know how to work with it. I finally feel like my daughter belongs.",
                name: "A Windhoek parent",
                tag: "Parent of a Grade 8 learner",
              },
            ].map(({ quote, name, tag }) => (
              <figure
                key={tag}
                className="rounded-2xl p-8"
                style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)", border: "1px solid rgba(94,0,129,0.18)" }}
              >
                <blockquote
                  className="mb-6 text-base italic leading-relaxed"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-on-surface)" }}>{name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--color-primary)" }}>{tag}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. GALLERY PREVIEW ─────────────────────────── */}
      <section
        aria-labelledby="gallery-heading"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-1 text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: "var(--color-primary)" }}>
                Gallery
              </p>
              <h2 id="gallery-heading" className="text-3xl font-bold sm:text-4xl" style={{ color: "var(--color-on-surface)" }}>
                Life at IA Academy
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105 focus-visible:ring-2 btn-gold-metal"
              style={{ background: "var(--color-primary)", color: "var(--color-on-primary)" }}
            >
              View full gallery
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {galleryPlaceholders.map(({ label, aspect }) => (
              <div
                key={label}
                className={`overflow-hidden rounded-2xl ${aspect}`}
                style={{ background: "var(--color-surface-container)", boxShadow: "var(--shadow-ambient)", position: "relative", border: "1px solid rgba(94,0,129,0.22)" }}
                role="img"
                aria-label={`${label} — photo coming soon`}
              >
                {/* Calming pulse overlay */}
                <div
                  className="calm-pulse"
                  style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(ellipse at center, rgba(94,0,129,0.12) 0%, rgba(94,0,129,0) 70%)",
                    pointerEvents: "none",
                  }}
                  aria-hidden="true"
                />
                <div className="flex h-full items-center justify-center" style={{ position: "relative", zIndex: 1 }}>
                  {/* Logo — black circle like hero */}
                  <div
                    style={{
                      width: 64, height: 64,
                      background: "#000000",
                      borderRadius: "9999px",
                      border: "2px solid rgba(240,192,64,0.45)",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <Image src="/logo-trns.png" alt="" width={50} height={50} className="object-contain" aria-hidden="true" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. SCHOOL ANTHEM ─────────────────────────── */}
      <section
        aria-labelledby="anthem-heading"
        className="px-6 py-16"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: "var(--color-primary)" }}>
            Listen
          </p>
          <h2 id="anthem-heading" className="mb-2 text-3xl font-bold" style={{ color: "var(--color-on-surface)" }}>
            Our School Anthem
          </h2>
          <p className="mb-8 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
            A song of pride for every student, parent, and educator at IA Academy.
          </p>
          <AnthemPlayer />
        </div>
      </section>

      {/* ── 8. NOTICE BOARD + STUDENT SPOTLIGHT WIDGETS ── */}
      <section
        aria-label="News and highlights"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-5xl grid gap-8 sm:grid-cols-2">
          {/* Notice Board widget */}
          <div
            className="rounded-2xl p-8"
            style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)", border: "1px solid rgba(94,0,129,0.20)" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold" style={{ color: "var(--color-on-surface)" }}>Notice Board</h2>
              <Link
                href="/notice-board"
                className="text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: "var(--color-primary)" }}
              >
                All notices →
              </Link>
            </div>
            <ul className="space-y-4">
              {[
                { date: "Coming soon", title: "School notices will appear here" },
                { date: "—", title: "Term dates and important announcements" },
              ].map(({ date, title }) => (
                <li key={title} className="flex gap-4">
                  <span
                    className="mt-0.5 text-xs font-medium"
                    style={{ color: "var(--color-primary)", minWidth: "80px" }}
                  >
                    {date}
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
                    {title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Spotlight widget */}
          <div
            className="rounded-2xl p-8"
            style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)", border: "1px solid rgba(94,0,129,0.20)" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold" style={{ color: "var(--color-on-surface)" }}>Student Spotlight</h2>
              <Link
                href="/spotlight"
                className="text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: "var(--color-primary)" }}
              >
                All spotlights →
              </Link>
            </div>
            <div className="flex flex-col items-center text-center py-6">
              <div className="mb-4" aria-hidden="true">
                <Image
                  src="/favicon.png"
                  alt="IA Academy"
                  width={96}
                  height={96}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
                Student spotlight stories will be featured here — celebrating achievements, growth, and the individuals who make our school special.
              </p>
              <Link
                href="/spotlight"
                className="mt-4 text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: "var(--color-primary)" }}
              >
                Nominate a student →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CONTACT QUICK BAR ──────────────────────── */}
      <section
        aria-labelledby="contact-bar-heading"
        className="px-6 py-16"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "#c47a00" }}>
              Say Hello
            </p>
            <h2
              id="contact-bar-heading"
              className="text-3xl font-bold sm:text-4xl"
              style={{ color: "#5e0081" }}
            >
              Get in touch
            </h2>
            <p className="mt-3 text-base" style={{ color: "#666" }}>
              We&apos;d love to hear from you. Book a tour or ask us anything.
            </p>
          </div>

          {/* Contact method cards */}
          <div className="grid gap-5 sm:grid-cols-3 mb-10">
            {[
              {
                label: "Phone",
                value: "+264 81 729 6626",
                href: "tel:+264817296626",
                external: false,
                accent: "#5e0081",
              },
              {
                label: "Email",
                value: "iaprimary1@gmail.com",
                href: "mailto:iaprimary1@gmail.com",
                external: false,
                accent: "#f0c040",
              },
              {
                label: "WhatsApp",
                value: "Chat with us",
                href: "https://wa.me/264817296626",
                external: true,
                accent: "#25D366",
              },
            ].map(({ label, value, href, external, accent }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 rounded-2xl p-5 transition-all hover:scale-[1.02] focus-visible:ring-2"
                style={{
                  background: "rgba(94, 0, 129, 0.07)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(94, 0, 129, 0.18)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.55), 0 8px 32px rgba(94,0,129,0.10)",
                  color: "#1a1c1e",
                }}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <div
                  className="shrink-0 w-3 h-3 rounded-full"
                  style={{ background: accent }}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--color-on-surface)", fontWeight: 700 }}>{label}</p>
                  <p className="mt-0.5 text-sm font-semibold" style={{ color: "#1a1c1e" }}>{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Google Maps embed */}
          <div
            className="overflow-hidden rounded-2xl mb-8"
            style={{ height: "320px", boxShadow: "0 4px 24px rgba(94,0,129,0.10)", border: "1px solid rgba(94,0,129,0.12)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1095.1882287459257!2d17.061304795676282!3d-22.588099511881342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b1b3d3172faef%3A0xaeb6a10585572f10!2sIA%20Academy%20%2F%20IA%20Primary%20Private%20School!5e0!3m2!1sen!2sna!4v1774509462043!5m2!1sen!2sna"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Innovative Academics Academy — Windhoek, Namibia"
            />
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full px-10 text-base font-semibold transition-transform hover:scale-105 focus-visible:ring-2 btn-gold-metal"
              style={{ background: "#5e0081", color: "#ffffff" }}
            >
              Send us a message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

