export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const navItems: NavItem[] = [
  {
    label: "About Us",
    href: "/about/our-story",
    children: [
      { label: "Our Story", href: "/about/our-story", description: "School history and mission" },
      { label: "Our Approach", href: "/about/our-approach", description: "How we support every learner" },
      { label: "Leadership & Staff", href: "/about/staff", description: "Meet our team" },
      { label: "Campus & Facilities", href: "/about/campus", description: "Our learning environment" },
    ],
  },
  {
    label: "Primary",
    href: "/primary",
    children: [
      { label: "Overview", href: "/primary", description: "Grade R – 3 (ages ~5–9)" },
      { label: "Curriculum", href: "/primary/curriculum" },
      { label: "Learning Support", href: "/primary/learning-support" },
      { label: "Daily Routine", href: "/primary/daily-routine" },
    ],
  },
  {
    label: "Junior Primary",
    href: "/junior-primary",
    children: [
      { label: "Overview", href: "/junior-primary", description: "Grade 4 – 7 (ages ~10–13)" },
      { label: "Curriculum", href: "/junior-primary/curriculum" },
      { label: "Learning Support", href: "/junior-primary/learning-support" },
      { label: "Aftercare", href: "/junior-primary/aftercare" },
    ],
  },
  {
    label: "High School",
    href: "/high-school",
    children: [
      { label: "Overview", href: "/high-school", description: "Grade 8 – 12 (ages ~14–18)" },
      { label: "Cambridge Curriculum", href: "/high-school/curriculum" },
      { label: "Subject Choices", href: "/high-school/subjects" },
      { label: "Learning Support", href: "/high-school/learning-support" },
    ],
  },
  { label: "Online Learners", href: "/online-learners" },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "How to Apply", href: "/admissions" },
      { label: "School Fees", href: "/admissions/fees" },
      { label: "Term Dates", href: "/admissions/term-dates" },
      { label: "FAQ", href: "/admissions/faq" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Student Resources", href: "/resources", description: "Study guides by grade" },
      { label: "Parent Resources", href: "/resources/parents", description: "ADHD, Dyslexia & ADD tips" },
      { label: "Notice Board", href: "/notice-board", description: "School announcements" },
      { label: "Events Calendar", href: "/events", description: "Upcoming dates & activities" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    children: [
      { label: "Contact Us", href: "/contact" },
      { label: "Book a Tour", href: "/contact/book-a-tour" },
      { label: "Vacancies", href: "/contact/vacancies" },
    ],
  },
];
