import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { companies } from "@/data/home";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Careers() {
  return (
    <section className="section careers" id="careers">
      <Container>
        <div className="section-title-row">
          <SectionHeading eyebrow="CƠ HỘI NGHỀ NGHIỆP" title="Cùng phát triển với Matrix." />
          <Link to="/tuyen-dung">
            Khám phá tuyển dụng <ArrowUpRight />
          </Link>
        </div>
        <p className="section-intro">
          Tìm hiểu các doanh nghiệp trong hệ sinh thái và trao đổi về cơ hội đồng hành.
        </p>
        <div className="directory-grid">
          {companies.slice(0, 3).map((company) => (
            <article className="company-card" key={company.name}>
              <span className="mini-logo">M</span>
              <div>
                <h3>{company.name}</h3>
                <p>{company.field}</p>
              </div>
              <Link className="text-link" to="/tuyen-dung">
                Tìm hiểu cơ hội <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
