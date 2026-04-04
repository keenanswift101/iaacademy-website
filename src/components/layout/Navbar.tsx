"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/nav";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null); // attached to <header>

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setMobileOpen(false);
    setOpenDropdown(null);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [pathname]);

  function handleMobileNavClick() {
    setMobileOpen(false);
    setOpenDropdown(null);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-40 w-full"
      style={{
        background: "rgba(249,249,252,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--color-surface-high)",
      }}
    >
      {/* Utility bar */}
      <div
        className="hidden md:flex items-center justify-between px-6 py-1.5 text-xs font-medium"
        style={{ background: "var(--color-primary)", color: "#fff" }}
      >
        <span>+264 81 729 6626</span>
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/264817296626"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:opacity-80 transition-opacity"
          >
            WhatsApp
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:opacity-80 transition-opacity"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-80 transition-opacity"
          >
            Instagram
          </a>
          <Link
            href="/admissions"
            className="rounded-full px-3 py-0.5 text-xs font-semibold transition-opacity hover:opacity-80"
            style={{ background: "var(--color-gold)", color: "var(--color-on-surface)" }}
          >
            Apply Now →
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <nav aria-label="Main navigation" className="flex items-center justify-between px-4 md:px-6 h-16">
        {/* Logo */}
        <Link href="/" aria-label="Innovative Academics Academy — Home" className="flex items-center gap-3 shrink-0">
          <div className="relative flex-shrink-0 rounded-full flex items-center justify-center" style={{ width: 56, height: 56, background: "#000000", boxShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
            <Image
              src="/logo-trns.png"
              alt="Innovative Academics Academy logo"
              width={46}
              height={46}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-semibold text-sm leading-tight hidden sm:block" style={{ color: "var(--color-primary)" }}>
            Innovative Academics<br />Academy
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              {item.children ? (
                <>
                  <button
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-[var(--color-surface-variant)]"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    {item.label}
                    <span
                      className="text-xs transition-transform"
                      style={{
                        transform: openDropdown === item.label ? "rotate(180deg)" : "none",
                        color: "var(--color-primary)",
                      }}
                      aria-hidden="true"
                    >
                      ▾
                    </span>
                  </button>
                  {openDropdown === item.label && (
                    <ul
                      role="menu"
                      className="absolute top-full left-0 mt-1 w-56 rounded-xl py-2 shadow-lg overflow-hidden"
                      style={{
                        background: "var(--color-surface-white)",
                        border: "1px solid var(--color-surface-high)",
                        boxShadow: "var(--shadow-float)",
                      }}
                    >
                      {item.children.map((child) => (
                        <li key={child.href} role="none">
                          <Link
                            href={child.href}
                            role="menuitem"
                            className="block px-4 py-2.5 text-sm hover:bg-[var(--color-surface-low)] transition-colors"
                            style={{ color: "var(--color-on-surface)" }}
                          >
                            <span className="block font-medium">{child.label}</span>
                            {child.description && (
                              <span
                                className="block text-xs mt-0.5"
                                style={{ color: "var(--color-on-surface-muted)" }}
                              >
                                {child.description}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-[var(--color-surface-variant)]"
                  style={{ color: "var(--color-on-surface)" }}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Book a Tour CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact/book-a-tour"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-opacity btn-gold-metal"
            style={{ background: "var(--color-gold)", color: "var(--color-on-surface)" }}
          >
            Book a Tour
          </Link>
          <button
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg gap-1.5"
            style={{ color: "var(--color-primary)" }}
          >
            <span className={`block w-5 h-0.5 bg-current transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-current transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-full left-0 right-0 z-50 overflow-y-auto max-h-[calc(100dvh-4rem)] shadow-2xl"
          style={{ background: "var(--color-surface-white)" }}
        >
          <nav aria-label="Mobile navigation" className="px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      aria-expanded={openDropdown === item.label}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      {item.label}
                      <span
                        className="transition-transform"
                        style={{ transform: openDropdown === item.label ? "rotate(180deg)" : "none" }}
                        aria-hidden="true"
                      >
                        ▾
                      </span>
                    </button>
                    {openDropdown === item.label && (
                      <ul className="pl-4 space-y-0.5 mt-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={handleMobileNavClick}
                              className="block px-4 py-2.5 rounded-lg text-sm"
                              style={{ color: "var(--color-on-surface-muted)" }}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleMobileNavClick}
                    className="block px-4 py-3 rounded-xl text-base font-medium"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/contact/book-a-tour"
                onClick={handleMobileNavClick}
                className="flex items-center justify-center px-4 py-3 rounded-full font-semibold text-sm btn-gold-metal"
                style={{ background: "var(--color-gold)", color: "var(--color-on-surface)" }}
              >
                Book a Tour
              </Link>
              <Link
                href="/admissions"
                onClick={handleMobileNavClick}
                className="flex items-center justify-center px-4 py-3 rounded-full font-semibold text-sm btn-liquid-glass"
              >
                Apply Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
