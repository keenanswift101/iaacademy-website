"use client";

import Image from "next/image";
import { useState } from "react";

type Category = "All" | "School Life" | "Swimming" | "Squash" | "Gymnastics" | "Football" | "Events";

const allImages: { src: string; alt: string; category: Exclude<Category, "All">; objectPosition?: string }[] = [
  { src: "/images/school-life-01.jpeg", alt: "Pupils at IA Academy", category: "School Life" },
  { src: "/images/school-life-02.jpeg", alt: "Classroom life at IA Academy", category: "School Life" },
  { src: "/images/school-life-03.jpeg", alt: "Learning at IA Academy", category: "School Life" },
  { src: "/images/school-life-04.jpeg", alt: "Students at IA Academy", category: "School Life" },
  { src: "/images/school-life-05.jpeg", alt: "School activities", category: "School Life" },
  { src: "/images/school-life-06.jpeg", alt: "Pupils learning together", category: "School Life" },
  { src: "/images/school-life-07.jpeg", alt: "IA Academy school life", category: "School Life" },
  { src: "/images/school-life-08.jpeg", alt: "Creative learning at IA Academy", category: "School Life" },
  { src: "/images/school-life-09.jpeg", alt: "Students at work", category: "School Life" },
  { src: "/images/school-life-10.jpeg", alt: "School environment", category: "School Life" },
  { src: "/images/school-life-11.jpeg", alt: "Pupils at IA Academy", category: "School Life" },
  { src: "/images/school-life-12.jpeg", alt: "Life at IA Academy", category: "School Life" },
  { src: "/images/sports/swimming/lorenzo-africa-youth-games-angola-podium.png", alt: "Lorenzo Esterhuizen on the podium at the Africa Youth Games in Angola", category: "Swimming", objectPosition: "50% 0%" },
  { src: "/images/sports/swimming/lorenzo-africa-junior-championships-medal.png", alt: "Lorenzo at the Africa Junior Championships holding medal", category: "Swimming", objectPosition: "50% 0%" },
  { src: "/images/sports/swimming/lorenzo-medals-collection.png", alt: "Lorenzo with his full medal collection", category: "Swimming", objectPosition: "50% 0%" },
  { src: "/images/sports/swimming/lorenzo-namibia-team-africa-championships-algeria.jpeg", alt: "Namibia Aquatics team at the 17th Africa Championships in Algeria", category: "Swimming", objectPosition: "50% 0%" },
  { src: "/images/sports/squash/charldon-wanderers-closed-b-senior-trophy.jpeg", alt: "Charldon winning the Men's Senior B Division at the Wanderers Closed squash tournament", category: "Squash", objectPosition: "50% 0%" },
  { src: "/images/sports/gymnastics/gymnastics_1.png", alt: "Zoé Lumé de Scande — 1st place, Level 1 Rhythmic Gymnastics, Walvis Bay 2026", category: "Gymnastics", objectPosition: "50% 22%" },
  { src: "/images/sports/gymnastics/gymnastics_2.png", alt: "Hayley du Toit — 2nd place, Level 6 Rhythmic Gymnastics, Walvis Bay 2026", category: "Gymnastics", objectPosition: "50% 15%" },
  { src: "/images/sports/gymnastics/gymnastics_3.png", alt: "Podium — Namibian Rhythmic Gymnastics 1st Qualifying Competition, Walvis Bay 2026", category: "Gymnastics", objectPosition: "50% 30%" },
  { src: "/images/sports/gymnastics/gymnastics_4.png", alt: "Zoé Lumé de Scande and teammate with gymnastics balls, Walvis Bay 2026", category: "Gymnastics", objectPosition: "50% 25%" },
  { src: "/images/sports/gymnastics/gymnastics_5.jpeg", alt: "Hayley du Toit — Silver, WRC Inter-Club Competition, July 2026", category: "Gymnastics", objectPosition: "50% 20%" },
  { src: "/images/sports/gymnastics/gymnastics_6.jpeg", alt: "Hayley du Toit celebrating with her silver medal, WRC Inter-Club Competition, July 2026", category: "Gymnastics", objectPosition: "50% 20%" },
  { src: "/images/sports/gymnastics/gymnastics_7.jpeg", alt: "Hayley du Toit with her WRC Inter-Club Competition certificate and medal, July 2026", category: "Gymnastics", objectPosition: "50% 20%" },
  { src: "/images/sports/gymnastics/gymnastics_8.jpeg", alt: "Zoé Lumé de Scande — Gold, WRC Inter-Club Competition, July 2026", category: "Gymnastics", objectPosition: "50% 25%" },
  { src: "/images/sports/soccer_match1.png", alt: "IA Academy PS vs Parkies Primary School football match — 30 June 2026", category: "Football", objectPosition: "50% 30%" },
  { src: "/images/events/smile-haven-visit/smile-haven-visit-dr-eliakim-team.jpeg", alt: "Dr. LN Eliakim and the Smile Haven team at IA Academy — Dental Hygiene visit, July 2026", category: "Events", objectPosition: "50% 30%" },
  { src: "/images/events/smile-haven-visit/smile-haven-visit-full-assembly.jpeg", alt: "IA Academy learners assembled for the Smile Haven dental hygiene presentation, July 2026", category: "Events", objectPosition: "50% 35%" },
  { src: "/images/events/smile-haven-visit/smile-haven-visit-presentation-banner.jpeg", alt: "Smile Haven team presenting dental hygiene tips to IA Academy learners, July 2026", category: "Events", objectPosition: "50% 40%" },
  { src: "/images/events/smile-haven-visit/smile-haven-visit-learners-smiling.jpeg", alt: "IA Academy learners holding a dental model at the Smile Haven visit, July 2026", category: "Events", objectPosition: "50% 35%" },
  { src: "/images/events/smile-haven-visit/smile-haven-visit-learner-dental-model.jpeg", alt: "Smile Haven team member with IA Academy learners and a dental model, July 2026", category: "Events", objectPosition: "50% 30%" },
  { src: "/images/events/smile-haven-visit/smile-haven-visit-brushing-demo.jpeg", alt: "IA Academy learner demonstrating tooth brushing technique with Smile Haven, July 2026", category: "Events", objectPosition: "50% 30%" },
  { src: "/images/events/smile-haven-visit/smile-haven-visit-young-learners.jpeg", alt: "Young IA Academy learners at the Smile Haven dental hygiene visit, July 2026", category: "Events", objectPosition: "50% 35%" },
  { src: "/images/events/smile-haven-visit/smile-haven-visit-learners-assembly.jpeg", alt: "IA Academy full school gathering for the Smile Haven dental hygiene visit, July 2026", category: "Events", objectPosition: "50% 40%" },
  { src: "/images/events/ium-career-fair/ium-career-fair-group-chancery.jpeg", alt: "IA Academy Grade 11 & 12 learners at the IUM Inbound Career Fair — Chancery building, July 2026", category: "Events", objectPosition: "50% 30%" },
  { src: "/images/events/ium-career-fair/ium-career-fair-girls-group.jpeg", alt: "IA Academy learners at the IUM Career Fair, July 2026", category: "Events", objectPosition: "50% 40%" },
  { src: "/images/events/ium-career-fair/ium-career-fair-group-2.jpeg", alt: "IA Academy learners outside IUM at the Inbound Career Fair, July 2026", category: "Events", objectPosition: "50% 30%" },
  { src: "/images/events/ium-career-fair/ium-career-fair-with-representative.jpeg", alt: "IA Academy learners with an IUM representative at the Career Fair, July 2026", category: "Events", objectPosition: "50% 35%" },
  { src: "/images/events/ium-career-fair/ium-career-fair-group-3.jpeg", alt: "IA Academy learners at the IUM Inbound Career Fair, July 2026", category: "Events", objectPosition: "50% 35%" },
];

const categories: Category[] = ["All", "School Life", "Swimming", "Squash", "Gymnastics", "Football", "Events"];

export default function GalleryClient() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? allImages : allImages.filter((img) => img.category === active);

  return (
    <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
      <div className="mx-auto max-w-5xl">

        {/* Category filter tabs */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((cat) => {
            const isActive = active === cat;
            const count = cat === "All" ? allImages.length : allImages.filter((img) => img.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:scale-105 focus-visible:ring-2"
                style={{
                  background: isActive ? "var(--color-primary)" : "transparent",
                  color: isActive ? "var(--color-on-primary)" : "var(--color-primary)",
                  border: "1.5px solid var(--color-primary)",
                  boxShadow: isActive ? "0 4px 16px rgba(94,0,129,0.25)" : "none",
                }}
              >
                {cat}
                <span
                  className="rounded-full px-2 py-0.5 text-xs font-bold"
                  style={{
                    background: isActive ? "rgba(255,255,255,0.25)" : "rgba(94,0,129,0.12)",
                    color: isActive ? "var(--color-on-primary)" : "var(--color-primary)",
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map(({ src, alt, objectPosition = "50% 50%" }) => (
            <div
              key={src}
              className="relative aspect-4/3 overflow-hidden rounded-2xl"
              style={{ boxShadow: "var(--shadow-ambient)", border: "1px solid rgba(94,0,129,0.15)" }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                style={{ objectPosition }}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
            No photos in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
