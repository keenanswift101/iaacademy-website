import PageHero from "@/components/ui/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Innovative Academics Academy",
  description:
    "Answers to common questions about admissions, learning support, fees, and daily life at IA Academy.",
};

const faqCategories = [
  {
    id: "general",
    label: "General",
    questions: [
      {
        q: "What grades do you offer?",
        a: "IA Academy offers Grade R through to Grade 12. Our phases are: Primary (Grade R–3), Junior Primary (Grade 4–7), and High School (Grade 8–12).",
      },
      {
        q: "How many students are in each class?",
        a: "We intentionally limit each grade to a maximum of 10 students. This small-class model is central to our ability to provide personalised, one-on-one attention.",
      },
      {
        q: "Do you follow the Namibian curriculum?",
        a: "Yes. IA Academy follows the Namibian Curriculum from Grade R to Grade 12, including Cambridge IGCSE and AS Level offerings at the High School phase.",
      },
      {
        q: "Is IA Academy registered and accredited?",
        a: "Yes. IA Academy is a registered school in Namibia. Please contact us directly for up-to-date registration and accreditation documentation.",
      },
      {
        q: "What is your school's ethos?",
        a: "We believe every child deserves to be seen, understood, and celebrated on their own terms. Our ethos centres on patience, structure, and genuine belief in each learner's potential — regardless of the pace or style in which they learn.",
      },
    ],
  },
  {
    id: "learning-support",
    label: "Learning Support",
    questions: [
      {
        q: "My child has ADHD, ADD, or Dyslexia — can you support them?",
        a: "Absolutely. IA Academy was specifically established to support learners with ADHD, ADD, Dyslexia, and slow learning. Our teachers are experienced in adapted teaching strategies, and our entire school environment — from class size to timetable design — is built with these learners in mind.",
      },
      {
        q: "What does \"one-on-one teaching\" mean in practice?",
        a: "With a maximum of 10 students per grade, our teachers are able to spend meaningful individual time with each learner every day — adapting their approach, pacing, and explanations to each child's unique needs.",
      },
      {
        q: "Do you have specialist teachers or educational psychologists on staff?",
        a: "Our teachers are trained in learning support approaches. For additional specialist assessment or therapy, we maintain a network of trusted external educational psychologists and therapists in Windhoek whom we can refer families to.",
      },
      {
        q: "How do you communicate progress to parents?",
        a: "We believe in ongoing, open communication. You can expect regular progress conversations, formal reports, and direct access to your child's teacher. We do not leave concerns until the end of term.",
      },
      {
        q: "What if my child needs additional external therapy?",
        a: "We actively collaborate with external therapists (occupational therapy, speech therapy, remedial teaching) to ensure a consistent approach between school and therapy environments. We can also provide progress reports to support your child's therapy journey.",
      },
    ],
  },
  {
    id: "admissions-process",
    label: "Admissions Process",
    questions: [
      {
        q: "How do I apply?",
        a: "Start by contacting us to arrange a school tour. We will then guide you through our intake form, meet your child, and discuss whether IA Academy is the right fit. Visit our How to Apply page for the full 5-step process.",
      },
      {
        q: "Is there an assessment before my child can enrol?",
        a: "We conduct an informal assessment to understand your child's current learning level and support needs — not to exclude them, but to ensure we can genuinely serve them well and plan appropriately.",
      },
      {
        q: "Are there limited spaces?",
        a: "Yes. Because of our small-class model (max 10 per grade), spaces are limited. We recommend enquiring early to secure a place for the following term or year.",
      },
      {
        q: "When does the school year start?",
        a: "IA Academy follows the Namibian school calendar. The year typically begins in January. See our Term Dates page for exact dates.",
      },
      {
        q: "What documents do I need to apply?",
        a: "You will typically need: a copy of your child's birth certificate, most recent school report, immunisation records, and any relevant assessment reports (e.g., educational psychologist reports, OT reports). Our admissions team will confirm the full list.",
      },
    ],
  },
  {
    id: "fees",
    label: "Fees & Finances",
    questions: [
      {
        q: "What are the school fees?",
        a: "Our fee structure is available on request. We discuss fees during the admissions consultation to ensure transparency. Please contact us or complete the fee enquiry form on our School Fees page.",
      },
      {
        q: "Are there additional costs such as uniforms or books?",
        a: "There may be additional costs for uniforms, stationery, and learning materials. These will be communicated clearly during the admissions process.",
      },
      {
        q: "Do you offer payment plans?",
        a: "We understand that managing school fees can be challenging. Please speak to our admissions team — we are willing to discuss arrangements that work for your family.",
      },
      {
        q: "Is there a registration fee?",
        a: "A once-off registration fee applies upon enrolment. Details are provided during the admissions consultation.",
      },
    ],
  },
  {
    id: "practical",
    label: "Practical / Day-to-Day",
    questions: [
      {
        q: "What are the school hours?",
        a: "School hours will be confirmed during your admissions consultation. Please contact us directly for current operating times.",
      },
      {
        q: "Is aftercare available?",
        a: "Yes. Aftercare is available for Junior Primary learners (Grade 4–7). Please enquire about availability and times when you contact us.",
      },
      {
        q: "What is the school's address?",
        a: "IA Academy is located in Windhoek, Namibia. Please contact us for the exact address and directions.",
      },
      {
        q: "How do I contact the school in an emergency?",
        a: "You can reach us immediately via WhatsApp or phone. Our contact details are available on the Contact page. Emergency contact procedures are shared with parents during orientation.",
      },
      {
        q: "Is there a dress code or uniform?",
        a: "IA Academy has a school uniform. Details will be shared during the enrolment process.",
      },
    ],
  },
  {
    id: "online-learners",
    label: "Online Learners",
    questions: [
      {
        q: "What qualifies as an \"online curriculum\"?",
        a: "Any registered home education or online curriculum programme — such as IMPAQ, Brainline, Cambridge Home School, or similar — qualifies. Your child continues their existing curriculum; we provide the school environment.",
      },
      {
        q: "Can my child join just for supervision, not academic instruction?",
        a: "Yes. Our Online Learner programme is specifically designed for children who are already enrolled in an online curriculum. We provide supervised study space, peer interaction, and structure — your child's academic content remains with their online provider.",
      },
      {
        q: "What are the hours for online learner supervision?",
        a: "Online learner supervision hours align with our school day. Please contact us for current availability and scheduling.",
      },
      {
        q: "Is the online learner fee structure different?",
        a: "Yes. Online Learner placement fees are separate from full academic enrolment fees. Please enquire via the Online Learners page or contact us directly.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div>
      <PageHero
        label="Admissions"
        title="Frequently Asked Questions"
        description="Everything you need to know about IA Academy — from class sizes and learning support to fees, term dates, and daily life."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admissions", href: "/admissions" },
          { label: "FAQ", href: "/admissions/faq" },
        ]}
      />

      <section
        style={{ background: "var(--color-surface)" }}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Category jump links */}
          <nav aria-label="FAQ categories" className="mb-12">
            <p
              className="text-sm font-semibold mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Jump to section:
            </p>
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors focus-visible:outline-none focus-visible:ring-2"
                  style={{
                    borderColor: "var(--color-primary)",
                    color: "var(--color-primary)",
                  }}
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </nav>

          {/* FAQ Accordion by category */}
          <div className="space-y-14">
            {faqCategories.map((cat) => (
              <section key={cat.id} id={cat.id}>
                <h2
                  className="text-xl font-bold mb-6 pb-3"
                  style={{
                    color: "var(--color-primary)",
                    borderBottom: "2px solid var(--color-gold)",
                  }}
                >
                  {cat.label}
                </h2>

                <div className="space-y-3">
                  {cat.questions.map((item, idx) => (
                    <details
                      key={idx}
                      className="group rounded-xl overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(94,0,129,0.20)",
                        boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
                      }}
                    >
                      <summary
                        className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold select-none focus-visible:outline-none focus-visible:ring-2"
                        style={{
                          color: "var(--color-on-surface)",
                          borderRadius: "0.75rem",
                        }}
                      >
                        <span>{item.q}</span>
                        {/* Chevron icon via CSS */}
                        <span
                          aria-hidden="true"
                          className="flex-shrink-0 w-5 h-5 transition-transform group-open:rotate-180"
                          style={{ color: "var(--color-primary)" }}
                        >
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </summary>
                      <div
                        className="px-6 pb-5 pt-1 text-base leading-relaxed"
                        style={{ color: "var(--color-on-surface-variant)" }}
                      >
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div
            className="mt-16 rounded-2xl p-8 text-center"
            style={{ background: "var(--color-primary)" }}
          >
            <h2 className="text-2xl font-bold text-white mb-3">
              Still have a question?
            </h2>
            <p className="text-white/80 mb-6 text-base">
              Our team is happy to answer anything not covered here. Reach out
              directly — no obligation, just conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="inline-block px-7 py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                style={{
                  background: "#ffffff",
                  color: "var(--color-primary)",
                }}
              >
                Contact Us
              </a>
              <a
                href="/contact/book-a-tour"
                className="inline-block px-7 py-3 rounded-full font-semibold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white btn-liquid-glass-dark"
              >
                Book a School Tour
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
