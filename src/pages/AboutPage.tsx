import { Container } from "@/components/layout/Container";
import { aboutIntro } from "@/data/about";
import {
  AdvantagesSection,
  ChairmanSection,
  CommitmentsSection,
  FoundationsSection,
  HistorySection,
  OperatingModelsSection,
  PartnersSection,
  PositioningSection,
  ProcessSection,
} from "@/sections/About/AboutSections";

export function AboutPage() {
  return (
    <main id="main-content" className="about-page">
      <section className="about-hero">
        <Container>
          <span className="about-eyebrow">Matrix Holding</span>
          <h1>Giới thiệu</h1>
          <p>{aboutIntro}</p>
          <div className="about-hero-lines" aria-hidden="true" />
        </Container>
      </section>
      <ChairmanSection />
      <PartnersSection />
      <PositioningSection />
      <FoundationsSection />
      <OperatingModelsSection />
      <HistorySection />
      <ProcessSection />
      <CommitmentsSection />
      <AdvantagesSection />
    </main>
  );
}
