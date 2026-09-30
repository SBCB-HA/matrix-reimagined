import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Faq } from "@/sections/Faq";
import { ContactCta } from "@/sections/ContactCta";
import networkImage from "@/assets/matrix-network.jpg";

export function AboutPage() {
  return (
    <PageShell
      eyebrow="Giới thiệu"
      title="Kết nối nguồn lực. Phát triển cùng nhau."
      description="Matrix Holding đầu tư và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam."
    >
      <section className="section">
        <Container>
          <div className="story-grid">
            <img
              className="story-image"
              src={networkImage}
              alt="Không gian làm việc và kết nối doanh nghiệp"
              width={1200}
              height={912}
            />
            <div className="prose">
              <SectionHeading eyebrow="CÂU CHUYỆN MATRIX" title="Một định hướng, nhiều khả năng." />
              <p>
                Được thành lập năm 2023, Matrix Holding giữ vai trò công ty mẹ, quản trị, vận hành
                và điều phối các hoạt động trong hệ sinh thái.
              </p>
              <p>
                Chúng tôi hướng đến một môi trường kinh doanh giúp các doanh nghiệp tiếp cận nguồn
                lực, kết nối cộng đồng và mở ra cơ hội thị trường bền vững.
              </p>
              <Link className="text-link" to="/he-sinh-thai">
                Tìm hiểu hệ sinh thái <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <div className="metrics">
            <div>
              <strong>2023</strong>
              <span>Năm thành lập</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Hệ sinh thái trọng điểm</span>
            </div>
            <div>
              <strong>09+</strong>
              <span>Doanh nghiệp thành viên</span>
            </div>
          </div>
        </Container>
      </section>
      <section className="section about">
        <Container>
          <SectionHeading
            eyebrow="ĐỊNH HƯỚNG PHÁT TRIỂN"
            title="Đồng hành với doanh nghiệp trên hành trình dài."
          />
          <div className="value-grid">
            <article className="value-card">
              <span>01 / Tầm nhìn</span>
              <h3>Nuôi dưỡng tiềm năng</h3>
              <p>
                Hướng đến việc đưa các doanh nghiệp tiềm năng phát triển và tạo dấu ấn trong lĩnh
                vực của mình.
              </p>
            </article>
            <article className="value-card">
              <span>02 / Sứ mệnh</span>
              <h3>Kết nối nguồn lực</h3>
              <p>
                Kiến tạo môi trường để các ý tưởng kinh doanh có cơ hội tiếp cận dịch vụ, cộng đồng
                và mạng lưới đầu tư.
              </p>
            </article>
            <article className="value-card">
              <span>03 / Cách tiếp cận</span>
              <h3>Cùng tìm giải pháp</h3>
              <p>
                Phát huy nghiên cứu và sáng tạo để xây dựng định hướng phù hợp với nhu cầu của từng
                doanh nghiệp.
              </p>
            </article>
          </div>
        </Container>
      </section>
      <Faq />
      <ContactCta />
    </PageShell>
  );
}
