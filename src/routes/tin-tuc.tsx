import { createFileRoute } from "@tanstack/react-router";
import { NewsPage } from "@/pages/NewsPage";
import { pageHead } from "@/data/site";

export const Route = createFileRoute("/tin-tuc")({
  head: () => pageHead("Tin tức", "Thông tin và góc nhìn về hệ sinh thái Matrix Holding."),
  component: NewsPage,
});
