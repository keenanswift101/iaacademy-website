import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vacancies | Innovative Academics Academy",
  description:
    "Join the IA Academy team in Windhoek. View current teaching and support staff vacancies and submit your CV.",
};

// When real vacancies exist, populate this array
const currentVacancies: {
  title: string;
  type: string;
  phase: string;
  description: string;
}[] = [];
// Example vacancy shape (uncomment and populate when real positions open):
// const currentVacancies = [
//   {
//     title: "Foundation Phase Teacher (Grade R–3)",
//     type: "Full-time",
//     phase: "Primary",
//     description: "...",
//   },
// ];

const desiredQualities = [
  "Passionate about inclusive and differentiated education",
  "Patient, empathetic, and relationship-driven",
  "Experienced with or open to learning about ADHD, ADD, Dyslexia, and slow learning",
  "Comfortable in a small, close-knit school community",
  "Strong understanding of the Namibian Cambridge Curriculum",
  "Willing to collaborate closely with parents and specialist therapists",
];

export default function VacanciesPage() {
  return (
    <div>
      <PageHero
        label="Contact"
        title="Vacancies at IA Academy"
        description="We are always interested in meeting exceptional people who share our commitment to every learner's potential."
        breadcrumb={[
          { label: "Contact", href: "/contact" },
          { label: "Vacancies", href: "/contact/vacancies" },
        ]}
      />

      <section
        style={{ background: "var(--color-surface)" }}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Current openings */}
          <div className="mb-16">
            <h2
              className="text-2xl font-bold mb-8"
              style={{ color: "var(--color-primary)" }}
            >
              Current Openings
            </h2>

            {currentVacancies.length === 0 ? (
              <div
                className="rounded-2xl p-10 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(94,0,129,0.20)",
                  boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#f0e8f6" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-7 h-7"
                    style={{ color: "var(--color-primary)" }}
                  >
                    <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 3H8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "var(--color-primary)" }}
                >
                  No vacancies at this time
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-md mx-auto"
                  style={{ color: "var(--color-on-surface)" }}
                >
                  We do not have any open positions right now, but we welcome
                  speculative applications. Submit your CV below and we will
                  keep it on file for future opportunities.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {currentVacancies.map((vacancy) => (
                  <div
                    key={vacancy.title}
                    className="rounded-2xl p-6"
                    style={{
                      background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(94,0,129,0.20)",
                      boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <h3
                        className="text-lg font-bold"
                        style={{ color: "var(--color-on-surface)" }}
                      >
                        {vacancy.title}
                      </h3>
                      <div className="flex gap-2">
                        <span
                          className="text-xs px-3 py-1 rounded-full font-semibold"
                          style={{
                            background: "var(--color-primary)",
                            color: "#ffffff",
                          }}
                        >
                          {vacancy.type}
                        </span>
                        <span
                          className="text-xs px-3 py-1 rounded-full font-semibold"
                          style={{
                            background: "#f0e8f6",
                            color: "var(--color-primary)",
                          }}
                        >
                          {vacancy.phase}
                        </span>
                      </div>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      {vacancy.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* What we look for */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--color-primary)" }}
              >
                What We Look For
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "var(--color-on-surface)" }}
              >
                IA Academy is a unique school. Our team members are not just
                qualified — they are genuinely invested in the children they
                work with, especially learners who have been underserved by
                traditional schooling systems.
              </p>
              <ul className="space-y-3">
                {desiredQualities.map((q) => (
                  <li key={q} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "var(--color-gold)" }}
                    >
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-3 h-3"
                        style={{ color: "var(--color-on-surface)" }}
                      >
                        <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      {q}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why work here */}
            <div
              className="rounded-2xl p-7 self-start"
              style={{
                background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(94,0,129,0.20)",
                boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
              }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                Why Join IA Academy?
              </h3>
              <ul className="space-y-4" style={{ color: "var(--color-on-surface)" }}>
                {[
                  {
                    title: "Small school, big impact",
                    body: "With max 10 students per grade, you will see real, measurable transformation in your learners.",
                  },
                  {
                    title: "Supportive, collaborative team",
                    body: "We work closely together — no silos, no politics. Just people who care about kids.",
                  },
                  {
                    title: "Meaningful work every day",
                    body: "Every learner here has a story. You will be part of changing the narrative for children who needed someone to believe in them.",
                  },
                  {
                    title: "Ongoing professional development",
                    body: "We invest in our team's growth in inclusive education, learning support, and differentiated teaching.",
                  },
                ].map((item) => (
                  <li key={item.title}>
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-sm mt-0.5" style={{ color: "rgba(26,28,30,0.70)" }}>{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CV Submission Form */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(94,0,129,0.20)",
              boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
            }}
          >
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: "var(--color-primary)" }}
            >
              Submit Your CV
            </h2>
            <p
              className="text-sm mb-6"
              style={{ color: "var(--color-on-surface)" }}
            >
              No open position that fits? Apply anyway. We keep CVs on file and
              reach out when the right role opens.
            </p>

            <form
              className="space-y-4"
              action="#"
              method="POST"
              encType="multipart/form-data"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="cv-name"
                    className="block text-sm font-semibold mb-1"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cv-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2"
                    style={{
                      borderColor: "rgba(94,0,129,0.20)",
                      color: "var(--color-on-surface)",
                    }}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cv-position"
                    className="block text-sm font-semibold mb-1"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Position Applying For <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="cv-position"
                    name="position"
                    required
                    className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2"
                    style={{
                      borderColor: "rgba(94,0,129,0.20)",
                      color: "var(--color-on-surface)",
                    }}
                  >
                    <option value="">Select role…</option>
                    <option value="primary-teacher">Primary Phase Teacher (Grade R–3)</option>
                    <option value="junior-primary-teacher">Junior Primary Teacher (Grade 4–7)</option>
                    <option value="high-school-teacher">High School Teacher (Grade 8–12)</option>
                    <option value="learning-support">Learning Support Specialist</option>
                    <option value="admin">Administrative / Office Staff</option>
                    <option value="aftercare">Aftercare Supervisor</option>
                    <option value="other">Other / Speculative</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="cv-email"
                    className="block text-sm font-semibold mb-1"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Email Address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cv-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2"
                    style={{
                      borderColor: "rgba(94,0,129,0.20)",
                      color: "var(--color-on-surface)",
                    }}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cv-phone"
                    className="block text-sm font-semibold mb-1"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Phone Number
                  </label>
                  <input
                    id="cv-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2"
                    style={{
                      borderColor: "rgba(94,0,129,0.20)",
                      color: "var(--color-on-surface)",
                    }}
                    placeholder="+264 XX XXX XXXX"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="cv-message"
                  className="block text-sm font-semibold mb-1"
                  style={{ color: "var(--color-on-surface)" }}
                >
                  Cover Letter / Message{" "}
                  <span className="font-normal text-xs" style={{ color: "rgba(26,28,30,0.55)" }}>
                    (optional but encouraged)
                  </span>
                </label>
                <textarea
                  id="cv-message"
                  name="message"
                  rows={4}
                  className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 resize-y"
                  style={{
                    borderColor: "rgba(94,0,129,0.20)",
                    color: "var(--color-on-surface)",
                  }}
                  placeholder="Tell us a little about yourself, your experience with learners who have learning differences, and why IA Academy interests you."
                />
              </div>

              {/* CV file upload */}
              <div>
                <label
                  htmlFor="cv-file"
                  className="block text-sm font-semibold mb-1"
                  style={{ color: "var(--color-on-surface)" }}
                >
                  Upload CV <span aria-hidden="true">*</span>
                  <span className="font-normal text-xs ml-1" style={{ color: "rgba(26,28,30,0.55)" }}>
                    PDF or DOCX, max 5 MB
                  </span>
                </label>
                <div
                  className="rounded-xl border-2 border-dashed px-6 py-8 text-center cursor-pointer transition-colors"
                  style={{ borderColor: "rgba(94,0,129,0.20)" }}
                >
                  <input
                    id="cv-file"
                    name="cv_file"
                    type="file"
                    accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    required
                    className="sr-only"
                    aria-describedby="cv-file-hint"
                  />
                  <label
                    htmlFor="cv-file"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="w-8 h-8"
                      style={{ color: "var(--color-primary)" }}
                    >
                      <path d="M12 16V4m0 0L8 8m4-4l4 4M4 20h16" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Click to upload your CV
                    </span>
                    <span
                      id="cv-file-hint"
                      className="text-xs"
                      style={{ color: "rgba(26,28,30,0.55)" }}
                    >
                      PDF or DOCX only — maximum file size 5 MB
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2"
                style={{
                  background: "var(--color-primary)",
                  color: "#ffffff",
                }}
              >
                Submit Application
              </button>
              <p className="text-xs text-center" style={{ color: "rgba(26,28,30,0.55)" }}>
                Your personal information is handled in accordance with
                Namibia&apos;s data protection standards. We will not share
                your details without your consent.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
