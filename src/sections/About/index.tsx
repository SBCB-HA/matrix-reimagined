import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export function About() {
  return (
    <section className="section about" id="about">
      <Container>
        <div className="about-grid">
          <SectionHeading
            eyebrow="VỀ CHÚNG TÔI"
            title="Cùng doanh nghiệp mở ra những khả năng mới."
          />
          <div className="about-copy">
            <p>
              Matrix Holding là doanh nghiệp hoạt động trong lĩnh vực đầu tư và phát triển hệ sinh
              thái kinh doanh đa ngành tại Việt Nam. Chúng tôi hướng đến việc kết nối nguồn lực,
              cộng đồng và cơ hội để các doanh nghiệp tiềm năng phát triển.
            </p>
            <div className="button-row">
              <Button asChild>
                <Link to="/gioi-thieu">
                  Tìm hiểu về Matrix <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/lien-he">Trao đổi hợp tác</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="metrics">
          <div>
            <strong>03</strong>
            <span>Hệ sinh thái trọng điểm</span>
          </div>
          <div>
            <strong>09+</strong>
            <span>Doanh nghiệp thành viên</span>
          </div>
          <div>
            <strong>2023</strong>
            <span>Năm thành lập</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
