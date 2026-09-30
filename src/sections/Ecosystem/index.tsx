import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ecosystemDetails as ecosystem } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Ecosystem() {
  return (
    <section className="section ecosystem-section" id="ecosystem">
      <Container>
        <SectionHeading
          eyebrow="LĨNH VỰC HOẠT ĐỘNG"
          title="Một hệ sinh thái. Nhiều cơ hội phát triển."
        />
        <p className="section-intro">Khám phá hệ sinh thái kinh doanh của Matrix Holding</p>
        <div className="ecosystem-grid">
          {ecosystem.map((item, i) => (
            <article className="ecosystem-card" key={item.name}>
              <img src={item.image} loading="lazy" width={1200} height={912} alt={item.name} />
              <div className="card-overlay" />
              <div className="card-index">0{i + 1}</div>
              <div className="card-content">
                <h3>{item.name}</h3>
                <p className="card-role">— {item.role}</p>
                <p>{item.description}</p>
                <Link to="/he-sinh-thai/$slug" params={{ slug: item.slug }}>
                  KHÁM PHÁ NGAY <ArrowUpRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
