import { createFileRoute } from "@tanstack/react-router";
import { CareersPage } from "@/pages/CareersPage";
import { pageHead } from "@/data/site";

export const Route = createFileRoute("/tuyen-dung")({
  head: () =>
    pageHead(
      "Tuyển dụng",
      "Tìm hiểu doanh nghiệp và cơ hội nghề nghiệp trong hệ sinh thái Matrix.",
    ),
  component: CareersPage,
});
