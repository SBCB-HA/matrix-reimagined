import {
  Building2,
  Compass,
  Gem,
  Globe2,
  Handshake,
  Layers3,
  Network,
  Quote,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import {
  advantages,
  chairmanQuote,
  commitments,
  foundations,
  operatingModels,
  processSteps,
} from "@/data/about";
import { PartnerCarousel } from "./PartnerCarousel";
import { HistoryTimeline } from "./HistoryTimeline";

function AboutHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="about-heading" data-reveal>
      <span className="about-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
function Cards({
  items,
  icons,
  variant = "",
}: {
  items: { label?: string; title: string; text: string }[];
  icons: LucideIcon[];
  variant?: string;
}) {
  return (
    <div
      className={`about-card-grid ${variant === "advantage" ? "about-advantage-grid" : ""} ${variant === "commitment" ? "about-commitment-list" : ""}`}
    >
      {items.map((item, index) => {
        const Icon = icons[index] ?? Target;
        return (
          <article
            className={`about-card about-${variant}-card ${variant === "model" && index === 1 ? "about-card-featured" : ""}`}
            data-reveal
            style={{ transitionDelay: `${index * 70}ms` }}
            key={item.title}
          >
            {variant === "process" && (
              <span className="about-step-number" aria-hidden="true">
                0{index + 1}
              </span>
            )}
            <Icon className="about-card-icon" size={32} aria-hidden="true" />
            <div>
              {variant === "model" ? (
                <>
                  <h3>{item.label}</h3>
                  <h4>{item.title}</h4>
                </>
              ) : (
                <>
                  {(item.label || variant === "process") && (
                    <span className="about-card-label">{item.label || `0${index + 1}`}</span>
                  )}
                  <h3>{item.title}</h3>
                </>
              )}
              <p>{item.text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
export function ChairmanSection() {
  return (
    <section className="about-section about-chairman">
      <Container>
        <div className="about-chairman-grid">
          <figure className="about-chairman-portrait" data-reveal>
            <img
              src="/images/about/chairman-portrait-v3.png"
              alt="Nhân vật doanh nhân hư cấu minh họa bằng AI"
              width={1122}
              height={1402}
              fetchPriority="high"
            />
            <figcaption>Minh họa AI</figcaption>
          </figure>
          <div className="about-chairman-copy" data-reveal>
            <span className="about-eyebrow">Lời Chủ tịch</span>
            <Quote className="about-quote-icon" size={42} aria-hidden="true" />
            <blockquote>{chairmanQuote}</blockquote>
            <p>
              Chủ tịch Hội đồng Quản trị<strong>Matrix Holding</strong>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
export function PartnersSection() {
  return (
    <section className="about-section about-partners">
      <Container>
        <AboutHeading
          eyebrow="Đối tác"
          title="Đồng hành cùng Matrix Holding"
          description="Sự tin tưởng của các thương hiệu là động lực để chúng tôi tiếp tục kiến tạo những giá trị kinh doanh bền vững."
        />
        <PartnerCarousel />
      </Container>
    </section>
  );
}
export function PositioningSection() {
  return (
    <section className="about-section about-positioning">
      <Container>
        <AboutHeading
          eyebrow="Định vị thương hiệu"
          title="“Là thương hiệu tiên phong trong lĩnh vực tư vấn, đầu tư và phát triển hệ sinh thái kinh doanh đa ngành.”"
          description="Matrix Holding định vị bản thân là đơn vị kiến tạo và phát triển hệ sinh thái kinh doanh trong nhiều lĩnh vực khác nhau thông qua các dự án, mô hình kinh doanh hiệu quả và tối ưu."
        />
      </Container>
    </section>
  );
}
export function FoundationsSection() {
  return (
    <section className="about-section about-foundations">
      <Container>
        <AboutHeading
          eyebrow="Nền tảng phát triển"
          title="Sứ mệnh, tầm nhìn và giá trị cốt lõi."
          description="Những định hướng nhất quán để Matrix Holding kiến tạo giá trị lâu dài cho doanh nghiệp và cộng đồng."
        />
        <Cards items={foundations} icons={[Target, Compass, Gem]} />
      </Container>
    </section>
  );
}
export function OperatingModelsSection() {
  return (
    <section className="about-section about-models">
      <Container>
        <AboutHeading
          eyebrow="Mô hình hoạt động"
          title="Ba hệ sinh thái, một mạng lưới nguồn lực."
          description="Mỗi hệ sinh thái đảm nhận một vai trò chuyên biệt, nhưng cùng chung mục tiêu tạo ra giá trị lâu dài cho doanh nghiệp."
        />
        <Cards items={operatingModels} icons={[Network, Users, Layers3]} variant="model" />
      </Container>
    </section>
  );
}
export function HistorySection() {
  return (
    <section className="about-section about-history" id="lich-su">
      <Container>
        <AboutHeading
          eyebrow="Lịch sử hình thành"
          title="Hành trình của Matrix Holding"
          description="Chọn từng cột mốc để xem những dấu ấn quan trọng trên hành trình phát triển."
        />
        <HistoryTimeline />
      </Container>
    </section>
  );
}
export function ProcessSection() {
  return (
    <section className="about-section about-process" id="quy-trinh">
      <Container>
        <AboutHeading eyebrow="Quy trình làm việc" title="Đồng hành theo một quy trình rõ ràng" />
        <Cards items={processSteps} icons={[Handshake, Workflow, Target]} variant="process" />
      </Container>
    </section>
  );
}
export function CommitmentsSection() {
  return (
    <section className="about-section about-commitments">
      <Container>
        <AboutHeading
          eyebrow="Điều khoản cam kết"
          title="Tận tâm trong mọi mối quan hệ hợp tác"
          description="Những nguyên tắc chúng tôi duy trì trong từng dự án và mọi mối quan hệ đồng hành."
        />
        <div className="about-split-grid">
          <p className="about-side-copy" data-reveal>
            Không chỉ kết nối nguồn lực, Matrix Holding cam kết đồng hành bằng năng lực thực thi,
            trách nhiệm và sự minh bạch.
          </p>
          <Cards items={commitments} icons={[Users, Handshake, ShieldCheck]} variant="commitment" />
        </div>
      </Container>
    </section>
  );
}
export function AdvantagesSection() {
  return (
    <section className="about-section about-advantages">
      <Container>
        <AboutHeading
          eyebrow="Lợi thế Matrix Holding"
          title="Những khác biệt tạo giá trị lâu dài"
        />
        <div className="about-split-grid">
          <p className="about-side-copy" data-reveal>
            Hệ sinh thái được xây dựng để doanh nghiệp có thể đi nhanh hơn, vững hơn và tìm được
            đúng nguồn lực ở từng giai đoạn.
          </p>
          <Cards
            items={advantages}
            icons={[Globe2, Building2, Handshake, Workflow]}
            variant="advantage"
          />
        </div>
      </Container>
    </section>
  );
}
