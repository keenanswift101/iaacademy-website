import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Parent Resources — ADHD, Dyslexia & Learning Support",
  description: "Practical guides, tips, and external links for parents of children with ADHD, ADD, Dyslexia, and slow learning — curated by IA Academy.",
};

const categories = [
  {
    title: "Understanding ADHD",
    description: "Practical strategies for supporting a child with ADHD at home, including routines, focus tips, and communication with teachers.",
    links: [
      { label: "ADDitude Magazine — Parent Guide to ADHD", href: "https://www.additudemag.com/category/parenting-adhd-kids/" },
      { label: "CHADD: Parenting a Child with ADHD", href: "https://chadd.org/for-parents/" },
    ],
  },
  {
    title: "Supporting Dyslexia",
    description: "Reading support strategies, assistive tools, and understanding how dyslexia affects learning beyond just reading.",
    links: [
      { label: "International Dyslexia Association — Parent Resources", href: "https://dyslexiaida.org/dyslexia-basics/" },
      { label: "Understood.org — Dyslexia Strategies for Parents", href: "https://www.understood.org/en/articles/what-is-dyslexia" },
    ],
  },
  {
    title: "Living with ADD",
    description: "Understanding the difference between ADHD and ADD, and the specific strategies that work best for inattentive learners.",
    links: [
      { label: "ADDitude: Inattentive ADHD (ADD) — A Parent's Guide", href: "https://www.additudemag.com/slideshows/inattentive-adhd-signs-symptoms/" },
      { label: "Understood.org — Classroom Accommodations for Inattentive Learners", href: "https://www.understood.org/en/articles/classroom-accommodations-for-adhd" },
    ],
  },
  {
    title: "Slow Learning & Intellectual Delay",
    description: "Supportive, dignity-first approaches to helping a child who learns at a different pace — and what realistic expectations look like.",
    links: [
      { label: "Understood.org — Supporting Children with Slow Processing Speed", href: "https://www.understood.org/en/articles/what-is-slow-processing-speed" },
      { label: "AAIDD — Resources for Families (Intellectual Disability)", href: "https://www.aaidd.org/intellectual-disability/definition" },
    ],
  },
];

export default function ParentResourcesPage() {
  return (
    <>
      <PageHero
        label="Resources"
        title="Parent Resources"
        description="Tools, guides, and expert links to help you support your child's learning journey at home and at school."
        breadcrumb={[{ label: "Resources", href: "/resources" }, { label: "Parent Resources", href: "/resources/parents" }]}
      />

      {/* Sub-nav */}
      <section className="px-6 py-4" style={{ background: "var(--color-surface-container-low)" }}>
        <div className="mx-auto max-w-5xl flex flex-wrap gap-2">
          <Link
            href="/resources"
            className="rounded-full px-4 py-1.5 text-sm font-medium transition-colors hover:bg-black/5"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            Student Resources
          </Link>
          <Link
            href="/resources/parents"
            className="rounded-full px-4 py-1.5 text-sm font-semibold"
            style={{ background: "var(--color-primary)", color: "var(--color-on-primary)" }}
            aria-current="page"
          >
            Parent Resources
          </Link>
        </div>
      </section>

      <section className="px-6 py-14" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-4xl space-y-8">
          {categories.map(({ title, description, links }) => (
            <div
              key={title}
              className="rounded-2xl p-8"
              style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)" }}
            >
              <h2 className="mb-3 text-xl font-bold" style={{ color: "var(--color-on-surface)" }}>{title}</h2>
              <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>{description}</p>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:underline focus-visible:ring-2"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {label}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={13} height={13} aria-hidden="true"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Zm6.75-.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V6.31L10.28 11.03a.75.75 0 0 1-1.06-1.06l5.72-5.72H11a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /></svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-center text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
            Resource links will be reviewed and updated regularly. Contact us if you have a resource recommendation.
          </p>
        </div>
      </section>
    </>
  );
}
