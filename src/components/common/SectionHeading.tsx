import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className={cn("section-heading", light && "section-heading-light") }>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}