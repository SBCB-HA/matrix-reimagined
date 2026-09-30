import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/AboutPage";
import { pageHead } from "@/data/site";

export const Route = createFileRoute("/gioi-thieu")({
  head: () =>
    pageHead(
      "Giới thiệu",
      "Tìm hiểu Matrix Holding và định hướng phát triển hệ sinh thái kinh doanh.",
    ),
  component: AboutPage,
});
