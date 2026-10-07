import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { companySectors, featuredCompanies, type CompanySector } from "@/data/companies";
import "./FeaturedCompanies.css";

function CompanyLogo({ name, src }: { name: string; src: string }) {
  const [failed, setFailed] = useState(!src);
  return failed ? (
    <span className="company-logo-placeholder" aria-label={`${name}: chưa có ảnh thương hiệu`}>
      {name
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word[0])
        .join("")}
    </span>
  ) : (
    <img
      src={src}
      alt={`Logo ${name}`}
      width="96"
      height="96"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export function FeaturedCompanies() {
  const [sector, setSector] = useState<CompanySector | "Tất cả">("Tất cả");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(11);
  const normalize = (value: string) =>
    value
      .toLocaleLowerCase("vi")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replaceAll("đ", "d");
  const companies = featuredCompanies.filter(
    (company) =>
      (sector === "Tất cả" || company.sector === sector) &&
      normalize(company.name).includes(normalize(query.trim())),
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
          <p>Khám phá thương hiệu theo lĩnh vực và tìm thông tin doanh nghiệp trên TopCV.</p>
        </div>
        <div className="company-directory-search">
          <label htmlFor="company-search">Tìm doanh nghiệp</label>
          <input
            id="company-search"
            type="search"
            value={query}
            placeholder="Nhập tên doanh nghiệp…"
            onChange={(event) => {
              setQuery(event.target.value);
              setVisibleCount(11);
            }}
          />
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
              onClick={() => {
                setSector(item);
                setVisibleCount(11);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="company-result-count" role="status">
          {sector} · {companies.length} doanh nghiệp · Đang hiển thị{" "}
          {Math.min(visibleCount, companies.length)}
        </p>
        <div className="featured-companies-grid">
          {companies.slice(0, visibleCount).map((company, index) => (
            <article
              key={company.id}
              className={`featured-company-card${index === 0 ? " featured-company-spotlight" : ""}`}
              data-reveal
            >
              <div className={`featured-company-logo company-logo-${company.id}`}>
                <CompanyLogo
                  src={company.logo ?? `/images/companies/${company.id}.svg`}
                  name={company.name}
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
                {company.searchLink ? "Tìm trên TopCV" : "Xem trên TopCV"}{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              {index === 0 && (
                <span className="featured-company-number" aria-hidden="true">
                  01
                </span>
              )}
            </article>
          ))}
        </div>
        {companies.length === 0 && (
          <p className="company-empty">
            Không tìm thấy doanh nghiệp phù hợp. Hãy thử tên khác hoặc chọn “Tất cả”.
          </p>
        )}
        {visibleCount < companies.length && (
          <div className="company-load-more">
            <button type="button" onClick={() => setVisibleCount((count) => count + 12)}>
              Xem thêm {Math.min(12, companies.length - visibleCount)} doanh nghiệp
            </button>
          </div>
        )}
        <div className="featured-companies-footer">
          <span>Tra cứu hồ sơ và cơ hội việc làm trên TopCV</span>
          <a href="https://www.topcv.vn/cong-ty" target="_blank" rel="noopener noreferrer">
            Khám phá thêm doanh nghiệp <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
