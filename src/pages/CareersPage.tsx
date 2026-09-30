import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/layout/Container";
import { companies } from "@/data/home";
import { contact } from "@/data/site";

export function CareersPage() {
  const [query, setQuery] = useState("");
  const filtered = companies.filter((company) =>
    (company.name + " " + company.field)
      .toLocaleLowerCase("vi")
      .includes(query.trim().toLocaleLowerCase("vi")),
  );
  return (
    <PageShell
      eyebrow="Tuyển dụng"
      title="Bước tiếp theo trong hành trình của bạn."
      description="Tìm hiểu các doanh nghiệp trong hệ sinh thái Matrix và kết nối để trao đổi cơ hội nghề nghiệp."
    >
      <section className="section">
        <Container>
          <div className="empty-state career-state">
            <span className="eyebrow">Cơ hội nghề nghiệp</span>
            <h2>Chưa có vị trí đang tuyển được công bố.</h2>
            <p>Bạn vẫn có thể gửi hồ sơ để trao đổi về cơ hội phù hợp trong hệ sinh thái Matrix.</p>
            <a
              className="button button-primary"
              href={`mailto:${contact.email}?subject=${encodeURIComponent("Hồ sơ ứng tuyển — Matrix Holding")}`}
            >
              Gửi hồ sơ qua email <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="content-toolbar">
            <h2>Doanh nghiệp trong hệ sinh thái</h2>
            <label className="search-field">
              <span className="sr-only">Tìm doanh nghiệp hoặc lĩnh vực</span>
              <input
                type="search"
                placeholder="Tên doanh nghiệp hoặc lĩnh vực…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
          </div>
          <div className="directory-grid">
            {filtered.map((company) => (
              <article className="company-card" key={company.name}>
                <span className="mini-logo">M</span>
                <div>
                  <h3>{company.name}</h3>
                  <p>{company.field}</p>
                </div>
                <Link className="text-link" to="/lien-he">
                  Trao đổi cơ hội <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
          {!filtered.length && (
            <p className="empty-state" role="status">
              Không tìm thấy doanh nghiệp phù hợp. Thử tên hoặc lĩnh vực khác.
            </p>
          )}
        </Container>
      </section>
    </PageShell>
  );
}
