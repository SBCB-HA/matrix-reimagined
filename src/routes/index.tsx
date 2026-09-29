import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matrix Holding — Hệ sinh thái kinh doanh đa ngành" },
      { name: "description", content: "Matrix Holding đầu tư và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam." },
      { property: "og:title", content: "Matrix Holding — Hệ sinh thái kinh doanh đa ngành" },
      { property: "og:description", content: "Kiến tạo môi trường kinh doanh hiệu quả, bền vững cho doanh nghiệp Việt Nam." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
