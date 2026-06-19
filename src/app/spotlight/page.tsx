import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Student Spotlight",
  description: "Celebrating the achievements, growth, and stories of IA Academy students.",
};

const spotlights = [
  {
    href: "/spotlight/zoe-lume-de-scande",
    name: "Zoé Lumé de Scande",
    tag: "Rhythmic Gymnastics · Level 1",
    summary: "Gold medallist and first-place finisher at the Namibian Rhythmic Gymnastics 1st Qualifying Competition in Walvis Bay, June 2026. Competing in Free Dance and Ball at Level 1.",
    image: "/images/sports/gymnastics/gymnastics_1.png",
    badge: "Gold — Namibian Qualifying Competition 2026",
  },
  {
    href: "/spotlight/hayley-du-toit",
    name: "Hayley du Toit",
    tag: "Rhythmic Gymnastics · Level 6",
    summary: "Silver medallist at the Namibian Rhythmic Gymnastics 1st Qualifying Competition in Walvis Bay, June 2026. Competing in Free Dance, Ribbon, and Rope at Level 6.",
    image: "/images/sports/gymnastics/gymnastics_2.png",
    badge: "Silver — Namibian Qualifying Competition 2026",
  },
  {
    href: "/spotlight/lorenzo-esterhuizen",
    name: "Lorenzo Esterhuizen",
    tag: "Swimming · Namibia National Team",
    summary: "Namibian Junior National Swimming Champion with 14+ national records, continental medals, and an Olympic dream — Youth Olympics Dakar 2026 and Los Angeles 2028.",
    image: "/images/sports/swimming/lorenzo-africa-youth-games-angola-podium.png",
    badge: "Olympic Hopeful — Youth Olympics Dakar 2026",
  },
];

export default function SpotlightPage() {
  return (
    <>
      <PageHero
        label="Student Spotlight"
        title="Celebrating Our Learners"
        description="Every child at IA Academy has a story worth telling. This is where we share them."
        breadcrumb={[{ label: "Student Spotlight", href: "/spotlight" }]}
      />

      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-4xl space-y-6">
          {spotlights.map(({ href, name, tag, summary, image, badge }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-lg sm:flex-row"
              style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)", border: "1px solid rgba(94,0,129,0.18)" }}
            >
              <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden sm:aspect-auto sm:w-96 sm:h-auto" style={{ minHeight: "320px" }}>
                <Image src={image} alt={name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 384px" />
              </div>
              <div className="flex-1 p-6 sm:p-8">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-primary)" }}>{tag}</p>
                <h2 className="mb-1 text-2xl font-bold" style={{ color: "var(--color-on-surface)" }}>{name}</h2>
                <p className="mb-4 text-sm font-medium" style={{ color: "#b8860b" }}>{badge}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>{summary}</p>
                <p className="mt-4 text-sm font-semibold transition-colors group-hover:opacity-80" style={{ color: "var(--color-primary)" }}>Read profile →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Nominate CTA */}
      <section className="px-6 py-12 text-center" style={{ background: "var(--color-surface-container-low)" }}>
        <h2 className="mb-2 text-2xl font-bold" style={{ color: "var(--color-on-surface)" }}>Know a student who deserves recognition?</h2>
        <p className="mb-6 text-base" style={{ color: "var(--color-on-surface-variant)" }}>Nominate a student for the next spotlight feature.</p>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold transition-transform hover:scale-105 focus-visible:ring-2"
          style={{ background: "var(--color-primary)", color: "var(--color-on-primary)" }}
        >
          Submit a nomination
        </Link>
      </section>
    </>
  );
}
