import "./About.css";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { homeCopy, referenceJobs } from "@/data/reference";
import { EditorialImage } from "@/components/common/EditorialImage";
import { editorialImages } from "@/data/visuals";

export function About() {
  return (
    <section className="section about" id="about">
      <Container>
        <div className="about-grid">
          <SectionHeading eyebrow="VỀ CHÚNG TÔI" title={homeCopy.aboutTitle} />
          <div className="about-copy">
            <EditorialImage
              src={editorialImages.introduction}
              motion="curtain"
              className="about-inline-photo"
            />
            <p>{homeCopy.aboutDescription}</p>
            <div className="button-row">
              <Button asChild>
                <Link to="/gioi-thieu">
                  Tìm hiểu thêm <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="/ho-so-nang-luc.html" target="_blank" rel="noreferrer">
                  Xem Hồ sơ năng lực
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="metrics">
          <div>
            <strong>04</strong>
            <span>Hệ sinh thái trọng điểm</span>
          </div>
          <div>
            <strong>
              {String(new Set(referenceJobs.map((job) => job.company_name)).size).padStart(2, "0")}
            </strong>
            <span>Doanh nghiệp đang tuyển dụng</span>
          </div>
          <div>
            <strong>{referenceJobs.length}</strong>
            <span>Vị trí đang tuyển</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
