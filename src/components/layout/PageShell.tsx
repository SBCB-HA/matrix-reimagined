import "./PageShell.css";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { usePageReady } from "@/hooks/usePageReady";
import { editorialImages } from "@/data/visuals";

export function PageShell({
  eyebrow,
  title,
  description,
  children,
  back,
  image = editorialImages.hero,
}: {
  image?: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  back?: { label: string; to: "/he-sinh-thai" | "/tin-tuc" | "/tuyen-dung" };
}) {
  usePageReady();
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="page-artwork" aria-hidden="true">
          <img src={image} alt="" width={1024} height={1536} />
        </div>
        <Container>
          <nav className="breadcrumbs" aria-label="Đường dẫn">
            <Link to="/">Trang chủ</Link>
            <span aria-hidden="true">/</span>
            {back && (
              <>
                <Link to={back.to}>{back.label}</Link>
                <span aria-hidden="true">/</span>
              </>
            )}
            <span aria-current="page">{eyebrow}</span>
          </nav>
          <p className="hero-kicker">{eyebrow}</p>
          <h1>{title}</h1>
          {description && <p className="page-description">{description}</p>}
        </Container>
      </section>
      {children}
    </main>
  );
}
