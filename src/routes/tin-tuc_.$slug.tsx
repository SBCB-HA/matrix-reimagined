import { createFileRoute, notFound } from "@tanstack/react-router";
import { NewsDetailPage } from "@/pages/NewsPage";
import { newsArticles, pageHead } from "@/data/site";

export const Route = createFileRoute("/tin-tuc_/$slug")({
  loader: ({ params }) => {
    const article = newsArticles.find((entry) => entry.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) =>
    pageHead(loaderData?.title ?? "Không tìm thấy", loaderData?.summary ?? ""),
  component: Detail,
});

function Detail() {
  const article = Route.useLoaderData();
  return <NewsDetailPage article={article} />;
}
