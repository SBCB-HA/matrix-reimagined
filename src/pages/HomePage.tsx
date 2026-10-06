import { useCallback, useState } from "react";
import { OpeningIntro } from "@/sections/Hero/OpeningIntro";
import { ChapterNav } from "@/components/layout/ChapterNav";
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
  const [introActive, setIntroActive] = useState(true);
  const finishIntro = useCallback(() => setIntroActive(false), []);
  return (
    <main id="main-content" className={introActive ? "home-intro-active" : undefined}>
      {introActive && <OpeningIntro onComplete={finishIntro} />}
      <div inert={introActive} aria-hidden={introActive || undefined}>
        <ChapterNav />
        <Hero />
        <About />
        <Ecosystem />
        <News />
        <Careers />
        <Faq />
        <ContactCta />
      </div>
    </main>
  );
}
