import type { MetadataRoute } from "next";

const BASE_URL = "https://ia-academy.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // About
    { url: `${BASE_URL}/about/our-story`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about/our-approach`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about/staff`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about/campus`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Primary
    { url: `${BASE_URL}/primary`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/primary/curriculum`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/primary/learning-support`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/primary/daily-routine`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Junior Primary
    { url: `${BASE_URL}/junior-primary`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/junior-primary/curriculum`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/junior-primary/learning-support`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/junior-primary/aftercare`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // High School
    { url: `${BASE_URL}/high-school`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/high-school/curriculum`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/high-school/subjects`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/high-school/learning-support`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Online Learners
    { url: `${BASE_URL}/online-learners`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Gallery
    { url: `${BASE_URL}/gallery`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // Admissions
    { url: `${BASE_URL}/admissions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/admissions/request-meeting`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/admissions/fees`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/admissions/term-dates`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/admissions/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Resources
    { url: `${BASE_URL}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/resources/parents`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/notice-board`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/events`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/spotlight`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/spotlight/lorenzo-esterhuizen`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Contact
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact/book-a-tour`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact/vacancies`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  return routes;
}
