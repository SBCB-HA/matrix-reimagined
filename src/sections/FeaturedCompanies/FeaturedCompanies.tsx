import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { companySectors, featuredCompanies, type CompanySector } from "@/data/companies";
import "./FeaturedCompanies.css";

export function FeaturedCompanies() {
  const [sector, setSector] = useState<CompanySector | "Tất cả">("Tất cả");
  const companies = featuredCompanies.filter(
    (company) => sector === "Tất cả" || company.sector === sector,
  );
  return (
    <section
      className="section featured-companies-section"
      id="news"
      aria-labelledby="companies-heading"
    >
      <Container>
        <div className="featured-companies-heading" id="companies-heading">
          <SectionHeading eyebrow="KHÁM PHÁ DOANH NGHIỆP" title="Doanh nghiệp tiêu biểu" />
          <p>Khám phá thương hiệu và môi trường làm việc theo lĩnh vực trên TopCV.</p>
        </div>
        <div
          className="company-sector-tabs"
          role="group"
          aria-label="Lọc doanh nghiệp theo lĩnh vực"
        >
          {(["Tất cả", ...companySectors] as const).map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={sector === item}
              onClick={() => setSector(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="company-result-count" role="status">
          {sector} · {companies.length} doanh nghiệp
        </p>
        <div className="featured-companies-grid">
          {companies.map((company, index) => (
            <article
              key={company.id}
              className={`featured-company-card${index === 0 ? " featured-company-spotlight" : ""}`}
              data-reveal
            >
              <div className={`featured-company-logo company-logo-${company.id}`}>
                <img
                  src={`/images/companies/${company.id}.svg`}
                  alt={`Logo ${company.name}`}
                  width="96"
                  height="96"
                  loading="lazy"
                />
              </div>
              <div className="featured-company-copy">
                <span className="featured-company-sector">{company.sector}</span>
                <h3>{company.name}</h3>
                <p>{company.description}</p>
              </div>
              <a
                href={company.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Khám phá ${company.name} trên TopCV`}
              >
                Xem trên TopCV <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              {index === 0 && (
                <span className="featured-company-number" aria-hidden="true">
                  01
                </span>
              )}
            </article>
          ))}
        </div>
        <div className="featured-companies-footer">
          <span>Nguồn thông tin doanh nghiệp: TopCV</span>
          <a href="https://www.topcv.vn/cong-ty" target="_blank" rel="noopener noreferrer">
            Khám phá thêm doanh nghiệp <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
