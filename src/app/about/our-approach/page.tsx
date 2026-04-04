import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Our Approach",
  description: "IA Academy's approach to teaching students with ADHD, ADD, Dyslexia and slow learning. Small classes, one-on-one attention, structured routines.",
};

const supportTypes = ["ADHD", "ADD", "Dyslexia", "Slow Learning", "Sensory Sensitivity"];

const pillars = [
  {
    title: "Small Class Sizes",
    body: "No more than 10 students per grade. This is not a guideline — it is a founding principle. Every child gets seen, heard, and taught.",
  },
  {
    title: "One-on-One Teaching",
    body: "Where other schools manage 30+ learners, we design lessons around the individual. Teachers know each child's strengths, triggers, and learning style.",
  },
  {
    title: "Structured, Calm Environment",
    body: "Predictable routines reduce anxiety for ADHD, ADD, and sensory-sensitive learners. Our spaces are designed for focus — not distraction.",
  },
  {
    title: "Trained Educators",
    body: "Our staff are trained in neurodivergent-aware teaching strategies. They don't just accommodate differences — they build on them.",
  },
  {
    title: "Namibian Curriculum",
    body: "All of this within a structured, internationally recognised curriculum. Your child is fully prepared for the next step, whatever that looks like.",
  },
];

export default function OurApproachPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Your child is not behind. They learn differently."
        description="At IA Academy, we don't ask children to fit the system. We build the system around the child."
        breadcrumb={[{ label: "Our Approach", href: "/about/our-approach" }]}
      />

      {/* Who We Support */}
      <section className="px-6 py-14" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold tracking-[0.16em] uppercase text-center" style={{ color: "var(--color-primary)" }}>
            Who We Support
          </p>
          <h2 className="mb-8 text-2xl font-bold text-center" style={{ color: "var(--color-on-surface)" }}>
            Learners who need — and deserve — something different
          </h2>
          <p className="text-sm font-medium text-center" style={{ color: "var(--color-primary)" }}>
            {supportTypes.join(" | ")}
          </p>
          <p className="mt-8 text-base leading-relaxed text-center max-w-2xl mx-auto" style={{ color: "var(--color-on-surface-variant)" }}>
            These are not labels that hold children back — they are descriptions of how a child&apos;s brain works. Our educators are trained to work with each profile, not against it.
          </p>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="px-6 py-14" style={{ background: "var(--color-surface-container-low)" }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: "var(--color-primary)" }}>
            Our Methodology
          </p>
          <h2 className="mb-10 text-2xl font-bold" style={{ color: "var(--color-on-surface)" }}>
            Five principles that guide everything we do
          </h2>
          <div className="space-y-6">
            {pillars.map(({ title, body }, i) => (
              <div
                key={title}
                className="flex gap-6 rounded-2xl p-6"
                style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)" }}
              >
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{ background: "var(--color-gold)", color: "var(--color-on-surface)" }}
                  aria-hidden="true"
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="mb-2 font-semibold" style={{ color: "var(--color-on-surface)" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ link */}
      <section className="px-6 py-12 text-center" style={{ background: "var(--color-surface)" }}>
        <p className="mb-4 text-base" style={{ color: "var(--color-on-surface-variant)" }}>Still have questions about our approach?</p>
        <Link
          href="/admissions/faq"
          className="inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold transition-transform hover:scale-105 focus-visible:ring-2"
          style={{ background: "var(--color-primary)", color: "var(--color-on-primary)" }}
        >
          Read our FAQ →
        </Link>
      </section>
    </>
  );
}
