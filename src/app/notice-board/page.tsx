import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import NoticeImageCarousel from "@/components/ui/NoticeImageCarousel";

export const metadata: Metadata = {
  title: "Notice Board",
  description: "Important school announcements, notices, and updates for IA Academy parents and students.",
};

const notices: {
  date: string;
  category: string;
  title: string;
  body: string;
  images?: string[];
}[] = [
  {
    date: "17 Jul 2026",
    category: "Events",
    title: "Grade 11 & 12 learners attend IUM Inbound Career Fair",
    body: "On 17 July 2026, our Grade 11 and Grade 12 learners had the incredible opportunity to attend the IUM Inbound Career Fair at the International University of Management (IUM) in Windhoek. Learners explored career opportunities, engaged with representatives from various fields, and gained valuable insight into pathways beyond school. Empowering minds. Inspiring futures. We are proud of every learner who attended and embraced this experience with curiosity and enthusiasm.",
    images: [
      "/images/events/ium-career-fair/ium-career-fair-group-chancery.jpeg",
      "/images/events/ium-career-fair/ium-career-fair-girls-group.jpeg",
      "/images/events/ium-career-fair/ium-career-fair-group-2.jpeg",
      "/images/events/ium-career-fair/ium-career-fair-with-representative.jpeg",
      "/images/events/ium-career-fair/ium-career-fair-group-3.jpeg",
    ],
  },
  {
    date: "16 Jul 2026",
    category: "Events",
    title: "Smile Haven visits IA Academy — Dental Hygiene Awareness",
    body: "We were delighted to welcome Dr. LN Eliakim and the Smile Haven team to IA Academy on 16 July 2026. They visited our learners and shared valuable information about dental hygiene and how to keep our smiles healthy and bright every day. Key lessons shared: brush your teeth twice a day, floss daily, brush for 2 minutes, and visit your dentist regularly. Thank you to Dr. Eliakim and the Smile Haven team for this wonderful and educational visit!",
    images: [
      "/images/events/smile-haven-visit/smile-haven-visit-dr-eliakim-team.jpeg",
      "/images/events/smile-haven-visit/smile-haven-visit-full-assembly.jpeg",
      "/images/events/smile-haven-visit/smile-haven-visit-presentation-banner.jpeg",
      "/images/events/smile-haven-visit/smile-haven-visit-learners-smiling.jpeg",
      "/images/events/smile-haven-visit/smile-haven-visit-learner-dental-model.jpeg",
      "/images/events/smile-haven-visit/smile-haven-visit-brushing-demo.jpeg",
      "/images/events/smile-haven-visit/smile-haven-visit-young-learners.jpeg",
      "/images/events/smile-haven-visit/smile-haven-visit-learners-assembly.jpeg",
    ],
  },
  {
    date: "30 Jun 2026",
    category: "Sport",
    title: "Football — IA Academy PS vs Parkies Primary School",
    body: "Our football team took the field on 30 June 2026 against Parkies Primary School in a two-game fixture. Game 1: IA PS 2–1 Parkies PS (Win). Game 2: IA PS 1–3 Parkies PS (Loss). One win, one loss — a great experience for our learners and a proud moment for IA Academy. Well played to every player who represented the school!",
    images: ["/images/sports/soccer_match1.png"],
  },
  {
    date: "12 Jun 2026",
    category: "Sport",
    title: "Gymnastics medals at Namibian 1st Qualifying Competition — Walvis Bay",
    body: "IA Academy congratulates Hayley du Toit (Level 6, Silver) and Zoé Lumé de Scande (Level 1, Gold) on their outstanding performances at the Namibian Rhythmic Gymnastics 1st Qualifying Competition in Walvis Bay on 12–13 June 2026. Two medallists, two podium finishes — we could not be prouder!",
    images: [
      "/images/sports/gymnastics/gymnastics_3.png",
      "/images/sports/gymnastics/gymnastics_1.png",
      "/images/sports/gymnastics/gymnastics_2.png",
      "/images/sports/gymnastics/gymnastics_4.png",
    ],
  },
  {
    date: "16 May 2026",
    category: "Sport",
    title: "Charldon wins Men's Senior B Division at Wanderers Closed",
    body: "Congratulations to Charldon, who claimed the Men's Senior B Division title at the Wanderers Closed squash tournament on the weekend of 16 May 2026. A well-earned victory — we are incredibly proud of you!",
    images: ["/images/sports/squash/charldon-wanderers-closed-b-senior-trophy.jpeg"],
  },
  {
    date: "May 2026",
    category: "Spotlight",
    title: "Lorenzo Esterhuizen qualifies for 2026 Youth Olympic Games in Dakar",
    body: "IA Academy is incredibly proud of Lorenzo Ethan Esterhuizen, who has qualified to represent Namibia at the 2026 Youth Olympic Games in Dakar, Senegal, in November 2026. Lorenzo is a Namibian Junior National Swimming Champion with over 14 national records and continental medals to his name. This is a historic achievement for our school and a testament to Lorenzo's dedication, discipline, and the support of his family and coach. We stand behind you all the way, Lorenzo!",
    images: [
      "/images/sports/swimming/lorenzo-africa-youth-games-angola-podium.png",
      "/images/sports/swimming/lorenzo-africa-junior-championships-medal.png",
    ],
  },
  {
    date: "26 May 2026",
    category: "Academic",
    title: "Term 2 begins 1 June 2026",
    body: "A reminder that Term 2 opens on Monday, 1 June 2026. School hours remain 07:15 – 13:30. Please ensure all stationery requirements are in order and that learners are ready for the new term. Term 2 runs until 20 August 2026.",
  },
  {
    date: "12 Jan 2026",
    category: "Academic",
    title: "2026 Term Dates confirmed",
    body: "The 2026 school term dates are confirmed: Term 1 runs from 12 January to 28 April. Term 2 from 1 June to 20 August. Term 3 from 7 September to 4 December. Please plan accordingly and refer to the Events Calendar for public holidays and key dates.",
  },
  {
    date: "Jan 2026",
    category: "General",
    title: "Welcome back — 2026 academic year underway",
    body: "Welcome back to all our learners and families for the 2026 academic year. We are excited for another year of growth, achievement, and community at IA Academy. Our doors are open for new enrolment enquiries — please reach out if you would like to book a school tour or request a consultation.",
  },
];

const categoryColors: Record<string, string> = {
  General: "var(--color-primary-container)",
  Academic: "var(--color-secondary-container)",
  Events: "rgba(26,115,64,0.12)",
  Sport: "rgba(240,192,64,0.20)",
  Spotlight: "rgba(94,0,129,0.12)",
};
const categoryTextColors: Record<string, string> = {
  General: "var(--color-on-primary-container)",
  Academic: "var(--color-on-secondary-container)",
  Events: "#1a7340",
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
          {notices.map(({ date, category, title, body, images }) => (
            <article
              key={title}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--color-surface-container-lowest)",
                boxShadow: "var(--shadow-ambient)",
              }}
            >
              {/* Image carousel */}
              {images && images.length > 0 && (
                <NoticeImageCarousel images={images} title={title} />
              )}

              {/* Card body */}
              <div className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      background: categoryColors[category],
                      color: categoryTextColors[category],
                    }}
                  >
                    {category}
                  </span>
                  <time
                    className="text-xs font-medium"
                    style={{ color: "var(--color-on-surface-variant)" }}
                  >
                    {date}
                  </time>
                </div>
                <h2
                  className="mb-3 text-lg font-semibold leading-snug"
                  style={{ color: "var(--color-on-surface)" }}
                >
                  {title}
                </h2>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {body}
                </p>

              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
