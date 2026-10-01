import { createFileRoute, notFound } from "@tanstack/react-router";
import { CareerDetailPage } from "@/pages/CareersPage";
import { referenceJobs } from "@/data/reference";
import { pageHead } from "@/data/site";

export const Route = createFileRoute("/tuyen-dung_/$id")({
  loader: ({ params }) => {
    const job = referenceJobs.find((item) => String(item.id) === params.id);
    if (!job) throw notFound();
    return job;
  },
  head: ({ loaderData }) =>
    pageHead(loaderData?.title ?? "Không tìm thấy", loaderData?.summary ?? ""),
  component: Detail,
});
function Detail() {
  return <CareerDetailPage job={Route.useLoaderData()} />;
}
