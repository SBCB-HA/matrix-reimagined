import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Ecosystem } from "@/sections/Ecosystem";
import { News } from "@/sections/News";
import { Careers } from "@/sections/Careers";
import { Faq } from "@/sections/Faq";
import { ContactCta } from "@/sections/ContactCta";
import { usePageReady } from "@/hooks/usePageReady";

export function HomePage() {
  usePageReady();
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Ecosystem />
      <News />
      <Careers />
      <Faq />
      <ContactCta />
    </main>
  );
}
