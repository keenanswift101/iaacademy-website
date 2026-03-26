import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Campus & Facilities",
  description: "Explore the IA Academy campus in Windhoek — a calm, well-resourced learning environment designed for focused, supported learning.",
};

const spaces = [
  { name: "Classrooms", description: "Small, distraction-managed rooms with natural light and flexible seating — designed for groups of no more than 10." },
  { name: "Study Areas", description: "Quiet supervised study spaces for online learners and independent work." },
  { name: "Outdoor Spaces", description: "Safe, enclosed outdoor areas for breaks — structure and movement go hand in hand." },
  { name: "Resource Room", description: "Specialist support materials, learning aids, and assistive tools for every profile." },
];

export default function CampusPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Campus & Facilities"
        description="A calm, thoughtfully designed school environment where every learner can feel safe, focused, and at home."
        breadcrumb={[{ label: "Campus & Facilities", href: "/about/campus" }]}
      />

      {/* Virtual tour embed placeholder */}
      <section className="px-6 py-14" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-5xl">
          <div
            className="overflow-hidden rounded-2xl flex items-center justify-center"
            style={{ height: "360px", background: "var(--color-surface-container)", boxShadow: "var(--shadow-ambient)" }}
            role="img"
            aria-label="Virtual tour video — coming soon"
          >
            <div className="text-center" style={{ color: "var(--color-on-surface-variant)" }}>
              <div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: "var(--color-primary-container)" }}
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--color-primary)" width={28} height={28}>
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="font-semibold" style={{ color: "var(--color-on-surface)" }}>Virtual Tour — Coming Soon</p>
              <p className="mt-1 text-sm">A video tour of our campus will be embedded here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus spaces */}
      <section className="px-6 py-14" style={{ background: "var(--color-surface-container-low)" }}>
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-bold" style={{ color: "var(--color-on-surface)" }}>Our Spaces</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {spaces.map(({ name, description }) => (
              <div
                key={name}
                className="rounded-2xl p-8"
                style={{
                  background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(94,0,129,0.20)",
                  boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
                }}
              >
                <div
                  className="mb-4 overflow-hidden rounded-xl flex items-center justify-center"
                  style={{ height: "160px", background: "var(--color-surface-container)" }}
                  role="img"
                  aria-label={`${name} photo coming soon`}
                >
                  <Image src="/logo-trns.png" alt="" width={40} height={40} className="opacity-20" aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-semibold" style={{ color: "var(--color-on-surface)" }}>{name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
