import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Ecosystem } from "@/sections/Ecosystem";
import { News } from "@/sections/News";
import { Careers } from "@/sections/Careers";
import { Faq } from "@/sections/Faq";
import { ContactCta } from "@/sections/ContactCta";

export function HomePage() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const targets = document.querySelectorAll(".section-heading, .ecosystem-card, .news-item, .company-card, .metrics > div");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
    targets.forEach((target) => observer.observe(target));
    document.body.classList.add("motion-ready");
    return () => { observer.disconnect(); document.body.classList.remove("motion-ready"); };
  }, []);
  return <><Navbar /><main><Hero /><About /><Ecosystem /><News /><Careers /><Faq /><ContactCta /></main><Footer /></>;
}
import { useEffect } from "react";
