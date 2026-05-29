import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Lorenzo Esterhuizen — Student Spotlight",
  description: "Lorenzo Esterhuizen is a Namibian Junior National Swimming Champion and IA Academy student, with multiple national records and Olympic ambitions for Dakar 2026 and Los Angeles 2028.",
};

const achievements = [
  { event: "Namibian Long Course Nationals", year: "2022", result: "11× Gold, 1× Bronze", note: "Junior Victor Ludorum" },
  { event: "SA Junior Championships (Port Elizabeth)", year: "2022", result: "5× Gold, 2× Silver", note: "4 National Records" },
  { event: "CANA Zone IV Championships (Luanda)", year: "2023", result: "7× Gold, 4× Silver", note: "Junior Victor Ludorum" },
  { event: "Short Course Nationals (Swakopmund)", year: "2023", result: "18× Gold, 2× Silver", note: "Junior Victor Ludorum" },
  { event: "Western Cape Aquatics (Cape Town)", year: "2023", result: "1× Gold, 2× Silver, 2× Bronze", note: "" },
  { event: "NASFED Long Course (Windhoek)", year: "2024", result: "8× Gold, 2× Silver, 1× Bronze", note: "" },
  { event: "NASFED Short Course (Swakopmund)", year: "2024", result: "14× Gold, 4× Silver, 1× Bronze", note: "" },
  { event: "Africa Aquatics Zone IV (Windhoek)", year: "2024", result: "Multiple medals", note: "3rd — 5km Open Water, Oanob Dam" },
  { event: "Africa Junior Championships (Cairo)", year: "2025", result: "600+ FINA Points", note: "Qualified for World Junior Championships" },
  { event: "Angola Independence Championships", year: "2025", result: "1× Gold, 2× Silver, 3× Bronze", note: "" },
  { event: "Region 5 Youth Games (Swakopmund)", year: "2025", result: "1× Bronze (200 Fly — Open)", note: "2 New National Records" },
  { event: "Junior World Championships (Romania)", year: "2025", result: "2 New National Records", note: "" },
  { event: "Africa Junior Championships (Luanda)", year: "2025", result: "1× Gold, 2× Silver, 3× Bronze", note: "1 New Namibian National Record" },
  { event: "Long Course Nationals (Windhoek)", year: "Feb 2026", result: "12× Gold, 1× Silver, 1× Bronze", note: "3 Trophies — best overall" },
];

export default function LorenzoSpotlightPage() {
  return (
    <>
      <PageHero
        label="Student Spotlight"
        title="Lorenzo Esterhuizen"
        description="Namibian Junior National Swimming Champion — Olympic hopeful, IA Academy learner."
        breadcrumb={[
          { label: "Student Spotlight", href: "/spotlight" },
          { label: "Lorenzo Esterhuizen", href: "/spotlight/lorenzo-esterhuizen" },
        ]}
      />

      {/* Profile intro */}
      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">

            {/* Photo */}
            <div className="w-full lg:w-5/12 flex-shrink-0">
              <div className="overflow-hidden rounded-2xl" style={{ boxShadow: "var(--shadow-ambient)", border: "1px solid rgba(94,0,129,0.15)" }}>
                <Image
                  src="/images/sports/swimming/lorenzo-africa-youth-games-angola-podium.jpeg"
                  alt="Lorenzo Esterhuizen on the podium at the African Youth Games in Angola"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold" style={{ background: "rgba(94,0,129,0.10)", color: "var(--color-primary)" }}>
                🏊 Swimming · Namibia National Team
              </div>
              <h2 className="mb-1 text-3xl font-bold" style={{ color: "var(--color-on-surface)" }}>Lorenzo Ethan Esterhuizen</h2>
              <p className="mb-6 text-sm font-medium" style={{ color: "var(--color-primary)" }}>Age 16 · Born 8 April 2009 · Windhoek, Namibia</p>

              <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
                <p>
                  Lorenzo Ethan Esterhuizen is one of Namibia's most accomplished young swimmers. With multiple national records and continental medals to his name, he is a consistent top performer with an unwavering focus on reaching Olympic-level competition.
                </p>
                <p>
                  Lorenzo has proudly represented Namibia at national and international level — including the South African Junior Swimming Championships and the Africa Aquatics Junior Championships — and is now setting his sights on even greater milestones.
                </p>
              </div>

              {/* Vision callout */}
              <div className="mt-8 rounded-2xl p-6" style={{ background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.08) 100%)", border: "1px solid rgba(94,0,129,0.20)" }}>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-primary)" }}>Vision</p>
                <p className="text-base font-semibold leading-snug" style={{ color: "var(--color-on-surface)" }}>
                  To represent Namibia at the 2026 Youth Olympic Games in Dakar — and ultimately at the 2028 Olympic Games in Los Angeles.
                </p>
              </div>

              {/* Stats row */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "14+", label: "National Records" },
                  { value: "2026", label: "Youth Olympics — Dakar" },
                  { value: "2028", label: "Olympic Goal — LA" },
                ].map(({ value, label }) => (
                  <div key={label} className="rounded-xl p-4 text-center" style={{ background: "var(--color-surface-container)", border: "1px solid rgba(94,0,129,0.12)" }}>
                    <p className="text-2xl font-bold" style={{ color: "var(--color-primary)" }}>{value}</p>
                    <p className="mt-1 text-xs leading-tight" style={{ color: "var(--color-on-surface-variant)" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery strip */}
      <section className="px-6 py-8" style={{ background: "var(--color-surface-container-low)" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: "/images/sports/swimming/lorenzo-africa-junior-championships-medal.jpeg", alt: "Lorenzo at the Africa Junior Championships, holding medal and mascot" },
              { src: "/images/sports/swimming/lorenzo-medals-collection.jpeg", alt: "Lorenzo smiling next to his full medal collection" },
              { src: "/images/sports/swimming/lorenzo-namibia-team-africa-championships-algeria.jpeg", alt: "Namibia Aquatics team heading to the 17th Africa Championships in Algeria" },
            ].map(({ src, alt }) => (
              <div key={src} className="relative aspect-4/3 overflow-hidden rounded-2xl" style={{ boxShadow: "var(--shadow-ambient)", border: "1px solid rgba(94,0,129,0.15)" }}>
                <Image src={src} alt={alt} fill className="object-cover object-center" sizes="(max-width: 768px) 33vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements table */}
      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--color-primary)" }}>Career Highlights</p>
          <h2 className="mb-8 text-2xl font-bold" style={{ color: "var(--color-on-surface)" }}>Achievements 2022 – 2026</h2>

          <div className="overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(94,0,129,0.18)", boxShadow: "var(--shadow-ambient)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--color-primary)", color: "var(--color-on-primary)" }}>
                  <th className="px-5 py-4 text-left font-semibold">Event</th>
                  <th className="px-5 py-4 text-left font-semibold">Year</th>
                  <th className="px-5 py-4 text-left font-semibold">Result</th>
                  <th className="hidden px-5 py-4 text-left font-semibold sm:table-cell">Note</th>
                </tr>
              </thead>
              <tbody>
                {achievements.map(({ event, year, result, note }, i) => (
                  <tr
                    key={event + year}
                    style={{
                      background: i % 2 === 0 ? "var(--color-surface-container-lowest)" : "var(--color-surface-container)",
                      color: "var(--color-on-surface-variant)",
                    }}
                  >
                    <td className="px-5 py-3 font-medium" style={{ color: "var(--color-on-surface)" }}>{event}</td>
                    <td className="px-5 py-3 whitespace-nowrap">{year}</td>
                    <td className="px-5 py-3">{result}</td>
                    <td className="hidden px-5 py-3 sm:table-cell" style={{ color: "var(--color-primary)" }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Training ethic */}
      <section className="px-6 py-16" style={{ background: "var(--color-surface-container-low)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--color-primary)" }}>Training & Dedication</p>
          <h2 className="mb-6 text-2xl font-bold" style={{ color: "var(--color-on-surface)" }}>Commitment beyond the pool</h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
            Lorenzo trains with full commitment and discipline under the guidance of his coach, Jean-Michael Leitner, and the support of his family. His approach to training reflects the same focused, structured mindset that IA Academy cultivates — where individual strengths are recognised, developed, and celebrated.
          </p>
        </div>
      </section>

      {/* Back link */}
      <section className="px-6 py-8 text-center" style={{ background: "var(--color-surface)" }}>
        <Link
          href="/spotlight"
          className="inline-flex h-10 items-center gap-2 rounded-full px-6 text-sm font-semibold transition-transform hover:scale-105"
          style={{ background: "var(--color-surface-container)", color: "var(--color-on-surface-variant)", border: "1px solid rgba(94,0,129,0.18)" }}
        >
          ← Back to Student Spotlight
        </Link>
      </section>
    </>
  );
}
