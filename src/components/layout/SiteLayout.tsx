import "./SiteLayout.css";
import { useEffect, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useLocation({ select: (location) => location.pathname });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const updateScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        document.documentElement.style.setProperty(
          "--scroll-progress",
          String(height > 0 ? window.scrollY / height : 0),
        );
      });
    };
    const updatePointer = (event: PointerEvent) => {
      if (reduced.matches || event.pointerType !== "mouse") return;
      document.documentElement.style.setProperty(
        "--pointer-x",
        String((event.clientX / window.innerWidth) * 2 - 1),
      );
      document.documentElement.style.setProperty(
        "--pointer-y",
        String((event.clientY / window.innerHeight) * 2 - 1),
      );
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, [pathname]);

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
      { threshold: 0, rootMargin: "0px 0px 120px 0px" },
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
      <div className="scroll-progress" aria-hidden="true" />
      <a className="skip-link" href="#main-content">
        Chuyển đến nội dung
      </a>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
