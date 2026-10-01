import { useEffect, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useLocation({ select: (location) => location.pathname });

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const targets = document.querySelectorAll(
      ".section-heading, .ecosystem-card, .news-item, .company-card, .metrics > div, [data-reveal]",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    targets.forEach((target) => {
      target.classList.add("reveal-target");
      observer.observe(target);
    });
    document.body.classList.add("motion-ready");
    return () => {
      observer.disconnect();
      document.body.classList.remove("motion-ready");
    };
  }, [pathname]);

  return (
    <div
      className={
        pathname === "/"
          ? "site-page"
          : `site-page interior-page${pathname === "/gioi-thieu" ? " about-route" : ""}`
      }
    >
      <a className="skip-link" href="#main-content">
        Chuyển đến nội dung
      </a>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
