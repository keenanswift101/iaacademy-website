import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Innovative Academics Academy",
  description:
    "Get in touch with Innovative Academics Academy in Windhoek, Namibia. Call, WhatsApp, email or fill in the form — we respond promptly.",
};

const contactMethods = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    label: "Phone",
    value: "+264 81 729 6626",
    href: "tel:+264817296626",
    cta: "Call now",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    label: "Email",
    value: "iaprimary1@gmail.com",
    href: "mailto:iaprimary1@gmail.com",
    cta: "Send email",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.854L.057 23.077a.75.75 0 00.921.921L6.2 22.481A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.497-5.197-1.367l-.374-.216-3.877 1.017 1.018-3.804-.234-.387A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "Message us on WhatsApp",
    href: "https://wa.me/264817296626?text=Hi%20IA%20Academy%2C%20I%27d%20like%20more%20information",
    cta: "Open chat",
  },
];

export default function ContactPage() {
  return (
    <div>
      <PageHero
        label="Contact"
        title="We'd Love to Hear From You"
        description="Whether you have questions about enrolment, learning support, or want to book a tour — our team is here to help."
        breadcrumb={[
          { label: "Contact Us", href: "/contact" },
        ]}
      />

      <section
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact form + Quick Enrollment */}
            <div className="space-y-10">
              {/* General Contact Form */}
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "rgba(255,255,255,0.70)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(94,0,129,0.18)",
                  boxShadow: "var(--shadow-ambient)",
                }}
              >
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: "var(--color-primary)" }}
                >
                  Send Us a Message
                </h2>
                <form className="space-y-4" name="contact-message" method="POST" data-netlify="true" noValidate>
                  <input type="hidden" name="form-name" value="contact-message" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-semibold mb-1"
                        style={{ color: "var(--color-on-surface)" }}
                      >
                        Full Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full rounded-xl px-4 py-3 text-sm border outline-none transition-shadow focus:ring-2"
                        style={{
                          borderColor: "rgba(94,0,129,0.20)",
                          color: "var(--color-on-surface)",
                        }}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-semibold mb-1"
                        style={{ color: "var(--color-on-surface)" }}
                      >
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="w-full rounded-xl px-4 py-3 text-sm border outline-none transition-shadow focus:ring-2"
                        style={{
                          borderColor: "rgba(94,0,129,0.20)",
                          color: "var(--color-on-surface)",
                        }}
                        placeholder="+264 XX XXX XXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold mb-1"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      Email Address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-xl px-4 py-3 text-sm border outline-none transition-shadow focus:ring-2"
                      style={{
                        borderColor: "rgba(94,0,129,0.20)",
                        color: "var(--color-on-surface)",
                      }}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-semibold mb-1"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      className="w-full rounded-xl px-4 py-3 text-sm border outline-none transition-shadow focus:ring-2"
                      style={{
                        borderColor: "rgba(94,0,129,0.20)",
                        color: "var(--color-on-surface)",
                      }}
                    >
                      <option value="">Select a subject…</option>
                      <option value="admissions">Admissions enquiry</option>
                      <option value="learning-support">Learning support</option>
                      <option value="online-learners">Online learner placement</option>
                      <option value="fees">School fees</option>
                      <option value="tour">Book a school tour</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold mb-1"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-xl px-4 py-3 text-sm border outline-none transition-shadow focus:ring-2 resize-y"
                      style={{
                        borderColor: "rgba(94,0,129,0.20)",
                        color: "var(--color-on-surface)",
                      }}
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2"
                    style={{
                      background: "var(--color-primary)",
                      color: "#ffffff",
                    }}
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-center" style={{ color: "rgba(26,28,30,0.55)" }}>
                    We typically respond within one business day.
                  </p>
                </form>
              </div>

              {/* Quick Enrollment Form */}
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "rgba(255,255,255,0.70)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(94,0,129,0.18)",
                  boxShadow: "var(--shadow-ambient)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--color-gold)" }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-5 h-5"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      <path d="M12 2a5 5 0 110 10A5 5 0 0112 2zM3 20c0-4.418 4.03-8 9-8s9 3.582 9 8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2
                    className="text-2xl font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Quick Enrolment Enquiry
                  </h2>
                </div>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--color-on-surface)" }}
                >
                  Tell us a little about your child and we will be in touch to
                  guide you through the next steps.
                </p>
                <form className="space-y-4" name="enrolment-enquiry" method="POST" data-netlify="true" noValidate>
                  <input type="hidden" name="form-name" value="enrolment-enquiry" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="enrol-student-name"
                        className="block text-sm font-semibold mb-1"
                        style={{ color: "var(--color-on-surface)" }}
                      >
                        Student First Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="enrol-student-name"
                        name="student_name"
                        type="text"
                        required
                        className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2"
                        style={{
                          borderColor: "rgba(94,0,129,0.20)",
                          color: "var(--color-on-surface)",
                        }}
                        placeholder="Child's first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="enrol-grade"
                        className="block text-sm font-semibold mb-1"
                        style={{ color: "var(--color-on-surface)" }}
                      >
                        Grade of Interest <span aria-hidden="true">*</span>
                      </label>
                      <select
                        id="enrol-grade"
                        name="grade"
                        required
                        className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2"
                        style={{
                          borderColor: "rgba(94,0,129,0.20)",
                          color: "var(--color-on-surface)",
                        }}
                      >
                        <option value="">Select grade…</option>
                        {["R", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].map((g) => (
                          <option key={g} value={g}>
                            Grade {g}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="enrol-parent"
                        className="block text-sm font-semibold mb-1"
                        style={{ color: "var(--color-on-surface)" }}
                      >
                        Parent / Guardian Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="enrol-parent"
                        name="parent_name"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2"
                        style={{
                          borderColor: "rgba(94,0,129,0.20)",
                          color: "var(--color-on-surface)",
                        }}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="enrol-phone"
                        className="block text-sm font-semibold mb-1"
                        style={{ color: "var(--color-on-surface)" }}
                      >
                        Phone <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="enrol-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2"
                        style={{
                          borderColor: "rgba(94,0,129,0.20)",
                          color: "var(--color-on-surface)",
                        }}
                        placeholder="+264 XX XXX XXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="enrol-email"
                      className="block text-sm font-semibold mb-1"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      Email Address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="enrol-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2"
                      style={{
                        borderColor: "rgba(94,0,129,0.20)",
                        color: "var(--color-on-surface)",
                      }}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="enrol-needs"
                      className="block text-sm font-semibold mb-1"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      Brief Description of Learner&apos;s Needs{" "}
                      <span className="font-normal text-xs" style={{ color: "rgba(26,28,30,0.55)" }}>
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="enrol-needs"
                      name="needs"
                      rows={4}
                      className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 resize-y"
                      style={{
                        borderColor: "rgba(94,0,129,0.20)",
                        color: "var(--color-on-surface)",
                      }}
                      placeholder="e.g. ADHD, Dyslexia, Grade repeated, etc. — any detail that helps us prepare for your child."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2"
                    style={{
                      background: "var(--color-primary)",
                      color: "#ffffff",
                    }}
                  >
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Contact info + Map */}
            <div className="space-y-8">
              {/* Contact method cards */}
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <div
                    key={method.label}
                    className="rounded-2xl p-6 flex items-center gap-5"
                    style={{
                      background: "rgba(255,255,255,0.70)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(94,0,129,0.18)",
                      boxShadow: "var(--shadow-ambient)",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "var(--color-primary)",
                        color: "#ffffff",
                      }}
                    >
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-xs font-semibold uppercase tracking-wide mb-0.5"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {method.label}
                      </p>
                      <p
                        className="text-sm font-medium truncate"
                        style={{ color: "var(--color-on-surface)" }}
                      >
                        {method.value}
                      </p>
                    </div>
                    <a
                      href={method.href}
                      className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2"
                      style={{
                        background: "var(--color-surface)",
                        color: "var(--color-primary)",
                        border: "1.5px solid var(--color-primary)",
                      }}
                      target={method.label === "WhatsApp" ? "_blank" : undefined}
                      rel={method.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                    >
                      {method.cta}
                    </a>
                  </div>
                ))}
              </div>

              {/* Book a Tour CTA */}
              <div
                className="rounded-2xl p-7 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(94,0,129,0.20)",
                  boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
                }}
              >
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-primary)" }}>
                  See the School in Person
                </h3>
                <p className="text-sm mb-5" style={{ color: "var(--color-on-surface)" }}>
                  A tour is the best way to experience IA Academy. Meet our
                  team, see the classrooms, and ask your questions in person.
                </p>
                <a
                  href="/contact/book-a-tour"
                  className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2"
                  style={{
                    background: "var(--color-primary)",
                    color: "#ffffff",
                  }}
                >
                  Book a School Tour
                </a>
              </div>

              {/* Google Maps embed */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  boxShadow: "var(--shadow-ambient)",
                  minHeight: "280px",
                  border: "1px solid rgba(94,0,129,0.10)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1095.1882287459257!2d17.061304795676282!3d-22.588099511881342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b1b3d3172faef%3A0xaeb6a10585572f10!2sIA%20Academy%20%2F%20IA%20Primary%20Private%20School!5e0!3m2!1sen!2sna!4v1774509462043!5m2!1sen!2sna"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Innovative Academics Academy — Windhoek, Namibia"
                />
              </div>

              {/* Office hours note */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.70)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(94,0,129,0.18)",
                  boxShadow: "var(--shadow-ambient)",
                }}
              >
                <h3
                  className="font-bold text-base mb-3"
                  style={{ color: "var(--color-primary)" }}
                >
                  Office Hours
                </h3>
                <dl className="space-y-2 text-sm" style={{ color: "var(--color-on-surface)" }}>
                  <div className="flex justify-between">
                    <dt className="font-medium">Monday – Friday</dt>
                    <dd>7:00 AM – 1:10 PM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium">Saturday – Sunday</dt>
                    <dd>Closed</dd>
                  </div>
                </dl>
                <p className="text-xs mt-4" style={{ color: "rgba(26,28,30,0.55)" }}>
                  Hours subject to change during school holidays. Contact us to
                  confirm during holiday periods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
