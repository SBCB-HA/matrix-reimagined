import "./BrandInformation.css";
import { Container } from "@/components/layout/Container";
import { milestones } from "@/data/about";

export function BrandStory() {
  return (
    <section className="about-section brand-story" id="cau-chuyen">
      <Container>
        <p className="about-eyebrow">Câu chuyện thương hiệu</p>
        <h2>Từ khởi nguồn sáng tạo đến hệ sinh thái kinh doanh đa ngành.</h2>
        <div className="brand-story-grid">
          {[milestones[0]!, milestones[2]!, milestones[4]!].map((item) => (
            <article key={item.year}>
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
export function Leadership() {
  return (
    <section className="about-section leadership" id="ban-lanh-dao">
      <Container>
        <p className="about-eyebrow">Ban lãnh đạo</p>
        <h2>Ban lãnh đạo Matrix Holding</h2>
        <div className="leadership-status">
          <h3>Thông tin đang được cập nhật</h3>
          <p>
            Danh sách, chức danh và hồ sơ lãnh đạo sẽ được bổ sung sau khi có thông tin chính thức
            từ Matrix Holding.
          </p>
        </div>
      </Container>
    </section>
  );
}
