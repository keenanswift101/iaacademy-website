"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="mt-auto px-4 md:px-8"
      style={{
        background: "transparent",
        color: "var(--color-on-surface)",
      }}
    >
      {/* ── MAIN GRID ─────────────────────────── */}
      <div className="max-w-6xl mx-auto pt-12 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-4 mb-4">
            {/* Logo on black circle */}
            <div
              className="relative flex-shrink-0 rounded-full flex items-center justify-center"
              style={{ width: 96, height: 96, background: "#000000", boxShadow: "0 4px 20px rgba(0,0,0,0.35)" }}
            >
              <Image
                src="/logo-trns.png"
                alt="Innovative Academics Academy logo"
                width={78}
                height={78}
                className="object-contain"
              />
            </div>
            <div>
              <span
                className="font-bold text-base leading-tight block"
                style={{ color: "#5e0081" }}
              >
                Innovative Academics
                <br />
                Academy
              </span>
              <span
                className="text-xs font-semibold tracking-wide mt-0.5 block"
                style={{ color: "#c47a00" }}
              >
                Est. 2013 · Windhoek, Namibia
              </span>
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#555" }}>
            A Namibian curriculum school in Windhoek. Small classes, big hearts.
            Specialising in ADHD, ADD, Dyslexia and learning differences. Grade R – 12.
          </p>
          {/* Social icons */}
          <div className="flex gap-3 mt-5">
            {[
              {
                label: "Facebook",
                href: "https://facebook.com/",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.696 4.533-4.696 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                ),
                bg: "#1877F2",
                color: "#fff",
              },
              {
                label: "Instagram",
                href: "https://instagram.com/",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                ),
                bg: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                color: "#fff",
              },
              {
                label: "WhatsApp",
                href: "https://wa.me/264817296626",
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.854L.057 23.077a.75.75 0 00.921.921L6.2 22.481A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.497-5.197-1.367l-.374-.216-3.877 1.017 1.018-3.804-.234-.387A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                ),
                bg: "#25D366",
                color: "#fff",
              },
            ].map(({ label, href, icon, bg, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center rounded-full w-9 h-9 transition-all hover:scale-110 hover:opacity-90"
                style={{
                  background: bg,
                  color,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* School links */}
        <nav aria-label="Footer navigation — School">
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-4 pb-2"
            style={{ color: "#5e0081", borderBottom: "2px solid #f0c040" }}
          >
            School
          </h3>
          <ul className="space-y-2.5 text-sm">
            {[
              ["About Us", "/about/our-story"],
              ["Our Approach", "/about/our-approach"],
              ["Primary (R–3)", "/primary"],
              ["Junior Primary (4–7)", "/junior-primary"],
              ["High School (8–12)", "/high-school"],
              ["Online Learners", "/online-learners"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-colors hover:underline"
                  style={{ color: "#444" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#5e0081")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Admissions links */}
        <nav aria-label="Footer navigation — Admissions">
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-4 pb-2"
            style={{ color: "#5e0081", borderBottom: "2px solid #f0c040" }}
          >
            Admissions
          </h3>
          <ul className="space-y-2.5 text-sm">
            {[
              ["How to Apply", "/admissions"],
              ["School Fees", "/admissions/fees"],
              ["Term Dates", "/admissions/term-dates"],
              ["FAQ", "/admissions/faq"],
              ["Book a Tour", "/contact/book-a-tour"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-colors hover:underline"
                  style={{ color: "#444" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#5e0081")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3
            className="text-xs font-bold uppercase tracking-widest mb-4 pb-2"
            style={{ color: "#5e0081", borderBottom: "2px solid #f0c040" }}
          >
            Contact
          </h3>
          <ul className="space-y-3 text-sm" style={{ color: "#444" }}>
            <li>
              <a
                href="tel:+264817296626"
                className="hover:underline transition-colors"
                style={{ color: "#444" }}
              >
                +264 81 729 6626 <span style={{ opacity: 0.6, fontSize: "0.7rem" }}>(Principal)</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+264816065220"
                className="hover:underline transition-colors"
                style={{ color: "#444" }}
              >
                +264 81 606 5220 <span style={{ opacity: 0.6, fontSize: "0.7rem" }}>(Mariaan)</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:iaprimary1@gmail.com"
                className="hover:underline transition-colors"
                style={{ color: "#444" }}
              >
                iaprimary1@gmail.com
              </a>
            </li>
            <li>Windhoek, Namibia</li>
            <li
              className="text-xs rounded-xl px-3 py-2 font-medium"
              style={{ background: "rgba(94,0,129,0.07)", color: "#5e0081" }}
            >
              Mon – Fri: 7:00 AM – 1:10 PM
            </li>
          </ul>
          <Link
            href="/contact/book-a-tour"
            className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:scale-105 btn-gold-metal"
            style={{ background: "#5e0081", color: "#fff" }}
          >
            Book a Tour
          </Link>
        </div>
      </div>

      {/* ── BOTTOM BAR ────────────────────────── */}
      <div
        className="max-w-6xl mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
        style={{
          borderTop: "1px solid rgba(94,0,129,0.15)",
          color: "#888",
        }}
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span style={{ color: "#5e0081", fontWeight: 600 }}>Innovative Academics Academy</span>
          . All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:underline transition-colors" style={{ color: "#888" }}>
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline transition-colors" style={{ color: "#888" }}>
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
