import "./Careers.css";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { jobDepartments, referenceJobs } from "@/data/reference";
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
  const jobs = referenceJobs
    .filter((job) => department === "Tất cả" || job.department === department)
    .slice(0, 4);
  return (
    <section className="section careers" id="careers">
      <Container>
        <div className="section-title-row">
          <SectionHeading
            eyebrow="THÔNG TIN TUYỂN DỤNG"
            title="Thông tin tuyển dụng từ Matrix Holding"
          />
          <Link to="/tuyen-dung">
            Xem tất cả <ArrowUpRight />
          </Link>
        </div>
        <p className="section-intro">
          Khám phá các vị trí đang tuyển dụng trong hệ sinh thái Matrix.
        </p>
        <nav className="careers-filters" data-reveal aria-label="Lọc vị trí tuyển dụng">
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
        <div className="careers-grid">
          {jobs.map((job) => (
            <article className="company-card" key={job.id}>
              <div>
                <p>{companyName(job.company_name)}</p>
                <h3>{job.title}</h3>
                <p>
                  {job.location} · {job.salary}
                </p>
              </div>
              <Link className="text-link" to="/tuyen-dung/$id" params={{ id: String(job.id) }}>
                Xem chi tiết <ArrowUpRight size={16} />
              </Link>
            </article>
          ))}
        </div>
        {!jobs.length && (
          <p className="empty-state" role="status">
            Hiện chưa có vị trí tuyển dụng nào.
          </p>
        )}
      </Container>
    </section>
  );
}
