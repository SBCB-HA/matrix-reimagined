import { BrandStory, Leadership } from "@/sections/About/BrandInformation";
import "./AboutPage.css";
import { Container } from "@/components/layout/Container";
import { aboutIntro } from "@/data/about";
import { usePageReady } from "@/hooks/usePageReady";
import { editorialImages } from "@/data/visuals";
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
  usePageReady();
  return (
    <main id="main-content" className="about-page">
      <section className="about-hero">
        <div className="about-hero-artwork" aria-hidden="true">
          <img src={editorialImages.introduction} alt="" width={1024} height={1536} />
        </div>
        <Container>
          <span className="about-eyebrow">Matrix Holding</span>
          <h1>Giới thiệu</h1>
          <p>{aboutIntro}</p>
          <div className="about-hero-lines" aria-hidden="true" />
        </Container>
      </section>
      <nav className="about-jump-nav" aria-label="Các phần giới thiệu">
        <Container className="about-jump-links">
          {[
            ["cau-chuyen", "Câu chuyện"],
            ["ban-lanh-dao", "Ban lãnh đạo"],
            ["loi-chu-tich", "Tuyên ngôn Chủ tịch"],
            ["doi-tac", "Đối tác"],
            ["nen-tang", "Nền tảng"],
            ["mo-hinh", "Hệ sinh thái"],
            ["lich-su", "Hành trình"],
            ["quy-trinh", "Quy trình"],
            ["loi-the", "Lợi thế"],
          ].map(([id, label], index) => (
            <a key={id} href={`#${id}`}>
              <span className="about-chapter-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              {label}
            </a>
          ))}
        </Container>
      </nav>
      <BrandStory />
      <Leadership />
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
