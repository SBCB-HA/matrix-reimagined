import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/ContactPage";
import { pageHead } from "@/data/site";

export const Route = createFileRoute("/lien-he")({
  head: () =>
    pageHead("Liên hệ", "Kết nối với Matrix Holding để trao đổi hợp tác và cơ hội nghề nghiệp."),
  component: ContactPage,
});
