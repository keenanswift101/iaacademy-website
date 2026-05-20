import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Gallery — Life at IA Academy",
  description: "Photos of student life, campus, activities and events at Innovative Academics Academy in Windhoek, Namibia.",
};

const galleryItems = [
  { src: "/images/school-life-01.jpeg", alt: "Pupils at IA Academy" },
  { src: "/images/school-life-02.jpeg", alt: "Classroom life at IA Academy" },
  { src: "/images/school-life-03.jpeg", alt: "Learning at IA Academy" },
  { src: "/images/school-life-04.jpeg", alt: "Students at IA Academy" },
  { src: "/images/school-life-05.jpeg", alt: "School activities" },
  { src: "/images/school-life-06.jpeg", alt: "Pupils learning together" },
  { src: "/images/school-life-07.jpeg", alt: "IA Academy school life" },
  { src: "/images/school-life-08.jpeg", alt: "Creative learning at IA Academy" },
  { src: "/images/school-life-09.jpeg", alt: "Students at work" },
  { src: "/images/school-life-10.jpeg", alt: "School environment" },
  { src: "/images/school-life-11.jpeg", alt: "Pupils at IA Academy" },
  { src: "/images/school-life-12.jpeg", alt: "Life at IA Academy" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="Gallery"
        title="Life at IA Academy"
        description="A glimpse into the environment, activities, and daily life that make IA Academy a place where children feel at home."
        breadcrumb={[{ label: "Gallery", href: "/gallery" }]}
      />

      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {galleryItems.map(({ src, alt }) => (
              <div
                key={src}
                className="relative aspect-4/3 overflow-hidden rounded-2xl"
                style={{ boxShadow: "var(--shadow-ambient)", border: "1px solid rgba(94,0,129,0.15)" }}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
