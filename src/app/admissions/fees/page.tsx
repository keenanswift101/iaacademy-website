import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "School Fees",
  description: "IA Academy school fees information. Contact us for the current fee structure.",
};

export default function FeesPage() {
  return (
    <>
      <PageHero
        label="Admissions"
        title="School Fees"
        description="Transparent, fair pricing for quality, specialised education in Windhoek."
        breadcrumb={[{ label: "Admissions", href: "/admissions" }, { label: "School Fees", href: "/admissions/fees" }]}
      />

      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-3xl">
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(94,0,129,0.20)",
              boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
            }}
          >
            <p className="text-lg font-medium mb-3" style={{ color: "var(--color-primary)" }}>Fee structure available on request</p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--color-on-surface-variant)" }}>
              We share our current fee schedule directly with families who contact us. This allows us to explain what is included, answer your questions, and discuss payment options — personally.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold transition-transform hover:scale-105 focus-visible:ring-2"
              style={{ background: "var(--color-primary)", color: "var(--color-on-primary)" }}
            >
              Request fee information
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
