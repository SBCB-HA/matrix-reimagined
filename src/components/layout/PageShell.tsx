import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Container } from "./Container";

export function PageShell({
  eyebrow,
  title,
  description,
  children,
  back,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  back?: { label: string; to: "/he-sinh-thai" | "/tin-tuc" };
}) {
  return (
    <main id="main-content">
      <section className="page-hero">
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
