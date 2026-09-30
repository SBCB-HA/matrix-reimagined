import { createFileRoute } from "@tanstack/react-router";
import { EcosystemPage } from "@/pages/EcosystemPage";
import { pageHead } from "@/data/site";

export const Route = createFileRoute("/he-sinh-thai")({
  head: () =>
    pageHead("Hệ sinh thái", "Khám phá Matrix Network, Matrix Connect và Matrix Ventures."),
  component: EcosystemPage,
});
