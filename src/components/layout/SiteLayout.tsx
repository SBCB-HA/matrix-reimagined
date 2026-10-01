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
    const selector =
      ".section-heading, .ecosystem-card, .news-item, .company-card, .metrics > div, [data-reveal]";
    const registered = new WeakSet<Element>();
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
    const registerTargets = () => {
      document.querySelectorAll(selector).forEach((target) => {
        if (registered.has(target)) return;
        registered.add(target);
        target.classList.add("reveal-target");
        observer.observe(target);
      });
    };
    const routeObserver = new MutationObserver(registerTargets);
    const start = () => {
      registerTargets();
      const page = document.querySelector(".site-page");
      if (page) routeObserver.observe(page, { childList: true, subtree: true });
      document.body.classList.add("motion-ready");
    };
    window.addEventListener("matrix:page-ready", start);
    return () => {
      observer.disconnect();
      routeObserver.disconnect();
      window.removeEventListener("matrix:page-ready", start);
      document.body.classList.remove("motion-ready");
    };
  }, [pathname]);

  return (
    <div className={pathname === "/" ? "site-page" : "site-page interior-page"}>
      <a className="skip-link" href="#main-content">
        Chuyển đến nội dung
      </a>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
