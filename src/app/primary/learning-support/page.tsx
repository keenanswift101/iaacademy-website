import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Learning Support — Primary Phase",
  description: "Early intervention and specialised learning support for Grade R–3 learners at IA Academy, including support for ADHD, ADD, Dyslexia and slow learning.",
};

export default function PrimaryLearningSupportPage() {
  return (
    <>
      <PageHero
        label="Primary Phase"
        title="Learning Support — Grade R to 3"
        description="Early intervention makes all the difference. Our Primary educators are trained to identify, support, and celebrate each child's unique learning profile."
        breadcrumb={[{ label: "Primary", href: "/primary" }, { label: "Learning Support", href: "/primary/learning-support" }]}
      />
      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              The earlier a child receives the right kind of support, the better their long-term outcomes. At IA Academy, our Grade R to 3 educators are trained to recognise early signs of ADHD, ADD, Dyslexia, and slow learning — and to act on them through personalised teaching strategies.
            </p>
            <p>
              This page will be updated with detailed information on our early intervention approach, the types of support available, and how we communicate with parents throughout the process.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
