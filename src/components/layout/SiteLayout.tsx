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
      ".section-heading, .ecosystem-card, .news-item, .company-card, .metrics > div, .about-copy, .section-intro, .page-artwork, .about-hero-artwork, .page-hero > div:not(.page-artwork), .about-hero > div:not(.about-hero-artwork), .story-grid, .value-card, .article-original-copy, .brand-story-grid > article, .leadership-status, .hero-content, .hero-system-visual, [data-reveal]";
    const registered = new Set<Element>();
    const inView = new Set<Element>();
    const applyVisibility = (target: Element) => {
      const focused = target.contains(document.activeElement);
      target.classList.toggle("is-visible", inView.has(target) || focused);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) inView.add(entry.target);
          else inView.delete(entry.target);
          applyVisibility(entry.target);
        });
      },
      { threshold: 0, rootMargin: "0px" },
    );
    const registerTargets = () => {
      document.querySelectorAll(selector).forEach((target) => {
        if (registered.has(target)) return;
        registered.add(target);
        target.classList.add("reveal-target");
        observer.observe(target);
      });
      for (const target of registered) {
        if (!target.isConnected) {
          observer.unobserve(target);
          registered.delete(target);
          inView.delete(target);
        }
      }
    };
    const onFocus = () => inView.forEach(applyVisibility);
    const routeObserver = new MutationObserver(registerTargets);
    const start = () => {
      registerTargets();
      const page = document.querySelector(".site-page");
      if (page) routeObserver.observe(page, { childList: true, subtree: true });
      document.body.classList.add("motion-ready");
    };
    window.addEventListener("matrix:page-ready", start);
    document.addEventListener("focusin", onFocus);
    return () => {
      observer.disconnect();
      routeObserver.disconnect();
      window.removeEventListener("matrix:page-ready", start);
      document.removeEventListener("focusin", onFocus);
      registered.forEach((target) => target.classList.remove("reveal-target", "is-visible"));
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
