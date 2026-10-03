import "./Careers.css";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { companyDirectory, homeCopy, jobDepartments, referenceJobs } from "@/data/reference";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

const companyName = (name: string) =>
  name === "Matrix Community"
    ? "Matrix Connect"
    : name === "Matrix Capital"
      ? "Matrix Ventures"
      : name;
export function Careers() {
  const [department, setDepartment] = useState("Tất cả");
  const companies = companyDirectory
    .map((company) => ({
      ...company,
      jobs: referenceJobs.filter(
        (job) =>
          companyName(job.company_name) === company.name &&
          (department === "Tất cả" || job.department === department),
      ),
    }))
    .filter((company) => company.jobs.length);
  return (
    <section className="section careers" id="careers">
      <Container>
        <div className="section-title-row">
          <SectionHeading eyebrow="DOANH NGHIỆP TUYỂN DỤNG" title={homeCopy.careersTitle} />
          <Link to="/tuyen-dung">
            Khám phá việc làm <ArrowUpRight />
          </Link>
        </div>
        <p className="section-intro">
          Khám phá các doanh nghiệp đang tuyển dụng trong hệ sinh thái Matrix.
        </p>
        <nav className="content-filters" data-reveal aria-label="Lọc doanh nghiệp tuyển dụng">
          {jobDepartments.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={department === item}
              onClick={() => setDepartment(item)}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="directory-grid">
          {companies.map((company) => (
            <article className="company-card" key={company.name}>
              <span className="mini-logo">
                <img
                  src="/images/brand/logo-mark.png"
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                />
              </span>
              <div>
                <h3>{company.name}</h3>
                <p>{company.field}</p>
              </div>
              <Link className="text-link" to="/tuyen-dung">
                {company.jobs.length} việc làm <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
        {!companies.length && (
          <p className="empty-state" role="status">
            Hiện chưa có vị trí tuyển dụng nào.
          </p>
        )}
      </Container>
    </section>
  );
}
