import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Notice Board",
  description: "Important school announcements, notices, and updates for IA Academy parents and students.",
};

const noticePlaceholders = [
  { date: "16 May 2026", category: "Sport", title: "Charldon wins Men's Senior B Division at Wanderers Closed", body: "Congratulations to Charldon, who claimed the Men's Senior B Division title at the Wanderers Closed squash tournament on the weekend of 16 May 2026. A well-earned victory — we are incredibly proud of you!" },
  { date: "May 2026", category: "Spotlight", title: "Lorenzo Esterhuizen qualifies for 2026 Youth Olympic Games in Dakar", body: "IA Academy is incredibly proud of Lorenzo Ethan Esterhuizen, who has qualified to represent Namibia at the 2026 Youth Olympic Games in Dakar, Senegal, in November 2026. Lorenzo is a Namibian Junior National Swimming Champion with over 14 national records and continental medals to his name. This is a historic achievement for our school and a testament to Lorenzo's dedication, discipline, and the support of his family and coach. We stand behind you all the way, Lorenzo!" },
  { date: "26 May 2026", category: "Academic", title: "Term 2 begins 1 June 2026", body: "A reminder that Term 2 opens on Monday, 1 June 2026. School hours remain 07:45 – 13:30. Please ensure all stationery requirements are in order and that learners are ready for the new term. Term 2 runs until 20 August 2026." },
  { date: "12 Jan 2026", category: "Academic", title: "2026 Term Dates confirmed", body: "The 2026 school term dates are confirmed: Term 1 runs from 12 January to 28 April. Term 2 from 1 June to 20 August. Term 3 from 7 September to 4 December. Please plan accordingly and refer to the Events Calendar for public holidays and key dates." },
  { date: "Jan 2026", category: "General", title: "Welcome back — 2026 academic year underway", body: "Welcome back to all our learners and families for the 2026 academic year. We are excited for another year of growth, achievement, and community at IA Academy. Our doors are open for new enrolment enquiries — please reach out if you would like to book a school tour or request a consultation." },
];

const categoryColors: Record<string, string> = {
  General: "var(--color-primary-container)",
  Academic: "var(--color-secondary-container)",
  Events: "var(--color-tertiary-container)",
  Sport: "rgba(240,192,64,0.20)",
  Spotlight: "rgba(94,0,129,0.12)",
};
const categoryTextColors: Record<string, string> = {
  General: "var(--color-on-primary-container)",
  Academic: "var(--color-on-secondary-container)",
  Events: "var(--color-on-tertiary-container)",
  Sport: "#7a5c00",
  Spotlight: "var(--color-primary)",
};

export default function NoticeBoardPage() {
  return (
    <>
      <PageHero
        label="Resources"
        title="Notice Board"
        description="Important announcements, news, and updates from IA Academy administration."
        breadcrumb={[{ label: "Notice Board", href: "/notice-board" }]}
      />

      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-3xl space-y-6">
          {noticePlaceholders.map(({ date, category, title, body }) => (
            <article
              key={title}
              className="rounded-2xl p-8"
              style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)" }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ background: categoryColors[category], color: categoryTextColors[category] }}
                >
                  {category}
                </span>
                <time className="text-xs font-medium" style={{ color: "var(--color-on-surface-variant)" }}>{date}</time>
              </div>
              <h2 className="mb-3 text-lg font-semibold leading-snug" style={{ color: "var(--color-on-surface)" }}>{title}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>{body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
