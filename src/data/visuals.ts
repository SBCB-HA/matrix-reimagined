// Conceptual illustrations; never presented as photographs of Matrix events or premises.
export const editorialImages = {
  hero: "/images/editorial/architecture.webp",
  introduction: "/images/editorial/workspace.webp",
  positioning: "/images/editorial/collaboration.webp",
  foundations: "/images/editorial/planning.webp",
  models: "/images/editorial/architecture.webp",
};

const newsIllustrations: Record<string, string> = {
  "5": "/images/editorial/news-growth.webp",
  "4": "/images/editorial/news-services.webp",
  "3": "/images/editorial/news-investment.webp",
  "2": "/images/editorial/news-community.webp",
  "1": "/images/editorial/news-startup.webp",
};

export function newsIllustration(slug: string, fallback: string) {
  return newsIllustrations[slug] ?? fallback;
}
