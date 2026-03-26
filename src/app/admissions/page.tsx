import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Admissions — How to Apply",
  description: "Apply to Innovative Academics Academy in Windhoek. Step-by-step admissions process for Grade R to Grade 12.",
};

const steps = [
  { step: "1", title: "Get in touch", body: "Contact us by phone, email, or WhatsApp to express your interest and ask any initial questions." },
  { step: "2", title: "Book a school tour", body: "Visit our campus to see the environment, meet the staff, and ask questions in person. This helps both you and us understand if IA Academy is the right fit." },
  { step: "3", title: "Submit an application", body: "Complete the enrolment form with your child's details, previous school records, and any relevant assessments or reports." },
  { step: "4", title: "Assessment & placement", body: "We may conduct a brief, informal assessment to understand your child's current level and best-fit grade placement." },
  { step: "5", title: "Confirmation & fees", body: "Once placement is confirmed, we'll share the fee structure and enrollment paperwork. Your child's start date is agreed with you." },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        label="Admissions"
        title="How to Apply"
        description="Joining IA Academy is straightforward. We walk every family through the process — no surprises."
        breadcrumb={[{ label: "Admissions", href: "/admissions" }]}
      />

      {/* Steps */}
      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            {steps.map(({ step, title, body }) => (
              <div
                key={step}
                className="flex gap-6 rounded-2xl p-8"
                style={{
                  background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(94,0,129,0.20)",
                  boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
                }}
              >
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{ background: "var(--color-gold)", color: "var(--color-on-surface)" }}
                  aria-hidden="true"
                >
                  {step}
                </div>
                <div>
                  <h2 className="mb-2 font-semibold" style={{ color: "var(--color-on-surface)" }}>{title}</h2>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact/book-a-tour"
              className="inline-flex h-12 flex-1 items-center justify-center rounded-full px-6 text-sm font-semibold transition-transform hover:scale-105 focus-visible:ring-2"
              style={{ background: "var(--color-primary)", color: "var(--color-on-primary)" }}
            >
              Book a Tour
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 flex-1 items-center justify-center rounded-full px-6 text-sm font-semibold transition-transform hover:scale-105 focus-visible:ring-2"
              style={{ background: "var(--color-primary)", color: "var(--color-on-primary)" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="px-6 py-12" style={{ background: "var(--color-surface-container-low)" }}>
        <div className="mx-auto max-w-3xl grid gap-4 sm:grid-cols-3">
          {[
            { label: "School Fees", href: "/admissions/fees" },
            { label: "Term Dates", href: "/admissions/term-dates" },
            { label: "FAQ", href: "/admissions/faq" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl p-5 text-center text-sm font-semibold transition-transform hover:scale-[1.02] focus-visible:ring-2"
              style={{
                background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(94,0,129,0.20)",
                boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
                color: "var(--color-primary)",
              }}
            >
              {label} →
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
