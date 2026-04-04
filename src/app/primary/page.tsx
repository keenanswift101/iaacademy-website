import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Primary Phase — Grade R to Grade 3",
  description: "IA Academy's Primary Phase covers Grade R to Grade 3, offering a nurturing, small-class Namibian curriculum with specialised learning support.",
};

export default function PrimaryPage() {
  return (
    <>
      <PageHero
        label="Primary Phase"
        title="Grade R to Grade 3"
        description="The foundation years. A safe, nurturing space where young learners build confidence, curiosity, and core skills — at their own pace."
        breadcrumb={[{ label: "Primary", href: "/primary" }]}
      />

      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { label: "Curriculum", href: "/primary/curriculum", desc: "Namibian curriculum — Early Years and Lower Primary." },
              { label: "Learning Support", href: "/primary/learning-support", desc: "Early intervention and one-on-one strategies for young learners." },
              { label: "Daily Routine", href: "/primary/daily-routine", desc: "What a typical day looks like — structure that helps children thrive." },
              { label: "Book a Tour", href: "/contact/book-a-tour", desc: "Come and see the Primary classrooms for yourself." },
            ].map(({ label, href, desc }) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl p-8 block transition-transform hover:scale-[1.02] focus-visible:ring-2"
                style={{
                  background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(94,0,129,0.20)",
                  boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
                }}
              >
                <p className="font-semibold mb-2" style={{ color: "var(--color-on-surface)" }}>{label}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
