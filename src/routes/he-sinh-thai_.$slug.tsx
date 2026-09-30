import { createFileRoute, notFound } from "@tanstack/react-router";
import { EcosystemDetailPage } from "@/pages/EcosystemPage";
import { ecosystemDetails, pageHead } from "@/data/site";

export const Route = createFileRoute("/he-sinh-thai_/$slug")({
  loader: ({ params }) => {
    const item = ecosystemDetails.find((entry) => entry.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) =>
    pageHead(loaderData?.name ?? "Không tìm thấy", loaderData?.description ?? ""),
  component: Detail,
});

function Detail() {
  const item = Route.useLoaderData();
  return <EcosystemDetailPage item={item} />;
}
