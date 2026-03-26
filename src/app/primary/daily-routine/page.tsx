import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Daily Routine — Primary Phase",
  description: "A look at what a typical school day looks like at IA Academy for Grade R to Grade 3 learners — structure, routine, and calm.",
};

export default function PrimaryDailyRoutinePage() {
  return (
    <>
      <PageHero
        label="Primary Phase"
        title="Daily Routine — Grade R to 3"
        description="Predictable structure reduces anxiety and builds confidence. Here's what a typical day at IA Academy looks like for our youngest learners."
        breadcrumb={[{ label: "Primary", href: "/primary" }, { label: "Daily Routine", href: "/primary/daily-routine" }]}
      />
      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl p-10 text-center" style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)" }}>
            <p className="text-lg font-medium mb-2" style={{ color: "var(--color-primary)" }}>Daily schedule coming soon</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>This page will include a visual or tabular daily schedule showing arrival, learning blocks, breaks, lunch, and dismissal times for the Primary phase.</p>
          </div>
        </div>
      </section>
    </>
  );
}
