import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BriefcaseBusiness, MapPin, Search, Wallet } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/layout/Container";
import { jobDepartments, referenceJobs } from "@/data/reference";
import { normalizeSearch } from "@/lib/search";

export function CareersPage() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("Tất cả");
  const [page, setPage] = useState(1);
  const jobs = referenceJobs.filter(
    (job) =>
      (department === "Tất cả" || job.department === department) &&
      normalizeSearch([job.title, job.company_name, job.department].join(" ")).includes(
        normalizeSearch(query.trim()),
      ),
  );
  const pageCount = Math.max(1, Math.ceil(jobs.length / 8));
  const currentPage = Math.min(page, pageCount);
  const visibleJobs = jobs.slice((currentPage - 1) * 8, currentPage * 8);
  const companies = [...new Set(visibleJobs.map((job) => job.company_name))].slice(0, 5);
  return (
    <PageShell
      eyebrow="MATRIX HOLDING CAREERS"
      title="Cơ hội phù hợp cho hành trình tiếp theo của bạn."
      description="Khám phá các vị trí từ Matrix Holding và những doanh nghiệp trong hệ sinh thái đối tác."
    >
      <section className="section">
        <Container>
          <form
            className="content-toolbar career-search"
            data-reveal
            onSubmit={(event) => {
              event.preventDefault();
              document.getElementById("job-results")?.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                  ? "instant"
                  : "smooth",
              });
            }}
          >
            <label className="search-field">
              <Search size={18} />
              <span className="sr-only">Tìm vị trí, công ty hoặc phòng ban</span>
              <input
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
                placeholder="Tìm vị trí, công ty hoặc phòng ban"
              />
            </label>
            <button type="submit" className="button button-primary">
              Tìm việc <ArrowUpRight size={18} />
            </button>
            <p>{referenceJobs.length} vị trí đang tuyển</p>
          </form>
          <nav className="content-filters" aria-label="Danh mục việc làm" data-reveal>
            {jobDepartments.map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={department === item}
                onClick={() => {
                  setDepartment(item);
                  setPage(1);
                }}
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="careers-results-grid" id="job-results">
            <aside className="career-sidebar" data-reveal>
              <p className="eyebrow">Tìm việc thông minh</p>
              <h2>Kết nối với đúng cơ hội, đúng doanh nghiệp.</h2>
              <p>Mỗi tin tuyển dụng được cập nhật trực tiếp bởi đội ngũ phụ trách tuyển dụng.</p>
              <h3>Doanh nghiệp đang hiển thị</h3>
              {companies.length ? (
                companies.map((name) => (
                  <p className="career-company-name" key={name}>
                    {name}
                  </p>
                ))
              ) : (
                <p>Đang cập nhật.</p>
              )}
            </aside>
            <div>
              <p className="job-result-count" role="status">
                Hiển thị <strong>{visibleJobs.length}</strong> trong số{" "}
                <strong>{jobs.length}</strong> vị trí
              </p>
              {visibleJobs.length ? (
                <div className="job-list">
                  {visibleJobs.map((job, index) => (
                    <Link
                      className="job-card"
                      data-reveal
                      style={{ transitionDelay: `${(index % 3) * 60}ms` }}
                      to="/tuyen-dung/$id"
                      params={{ id: String(job.id) }}
                      key={job.id}
                    >
                      <div className="job-card-heading">
                        <div>
                          <h2>{job.title}</h2>
                          <p className="job-company">{job.company_name}</p>
                        </div>
                        <span className="job-employment">{job.employment_type}</span>
                      </div>
                      <div className="job-meta">
                        <span>
                          <MapPin size={16} />
                          {job.location}
                        </span>
                        <span>
                          <Wallet size={16} />
                          {job.salary}
                        </span>
                        <span>
                          <BriefcaseBusiness size={16} />
                          {job.department}
                        </span>
                      </div>
                      <p>{job.summary}</p>
                      <div className="job-card-end">
                        <span>
                          Đăng ngày{" "}
                          {new Date(job.created_at).toLocaleDateString("vi-VN", {
                            timeZone: "Asia/Ho_Chi_Minh",
                          })}
                        </span>
                        <span>
                          Xem chi tiết <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <h2>Chưa có công việc phù hợp</h2>
                  <p>Thử chọn một danh mục hoặc từ khóa khác.</p>
                  <button
                    type="button"
                    className="button button-primary"
                    onClick={() => {
                      setQuery("");
                      setDepartment("Tất cả");
                    }}
                  >
                    Xem tất cả
                  </button>
                </div>
              )}
              {pageCount > 1 && (
                <nav className="content-pagination" aria-label="Phân trang tuyển dụng">
                  {Array.from({ length: pageCount }, (_, index) => (
                    <button
                      type="button"
                      key={index}
                      aria-current={currentPage === index + 1 ? "page" : undefined}
                      aria-label={`Trang ${index + 1}`}
                      onClick={() => setPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </nav>
              )}
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

export function CareerDetailPage({ job }: { job: (typeof referenceJobs)[number] }) {
  const deadline = job.expires_at
    ? new Date(job.expires_at).toLocaleDateString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })
    : "Đang cập nhật";
  return (
    <PageShell
      eyebrow="Vị trí đang tuyển"
      title={job.title}
      description={job.summary}
      back={{ label: "Tuyển dụng", to: "/tuyen-dung" }}
    >
      <section className="section">
        <Container>
          <div className="job-detail-grid">
            <div>
              <section className="job-detail-block" data-reveal>
                <h2>Tổng quan</h2>
                <dl className="job-overview">
                  <div>
                    <dt>Vị trí</dt>
                    <dd>{job.title}</dd>
                  </div>
                  <div>
                    <dt>Danh mục công việc</dt>
                    <dd>{job.department}</dd>
                  </div>
                  <div>
                    <dt>Hình thức</dt>
                    <dd>{job.employment_type}</dd>
                  </div>
                  <div>
                    <dt>Địa điểm</dt>
                    <dd>{job.location}</dd>
                  </div>
                  <div>
                    <dt>Mức lương</dt>
                    <dd>{job.salary}</dd>
                  </div>
                  <div>
                    <dt>Hạn ứng tuyển</dt>
                    <dd>{deadline}</dd>
                  </div>
                </dl>
                <p className="job-salary-note">Thu nhập thỏa thuận theo năng lực</p>
              </section>
              <section className="job-detail-block" data-reveal>
                <h2>Mô tả công việc</h2>
                <p>{job.description}</p>
              </section>
              <section className="job-detail-block" data-reveal>
                <h2>Yêu cầu ứng viên</h2>
                <p>{job.requirements}</p>
                <a
                  className="button button-primary"
                  href={`https://matrixholding.com.vn/tuyen-dung/${job.id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ứng tuyển trên Matrix Holding <ArrowUpRight size={18} />
                </a>
              </section>
            </div>
            <aside className="job-detail-block job-company-panel" data-reveal>
              <h2>{job.company_name}</h2>
              <p>{job.company_summary || "Doanh nghiệp đang tuyển dụng trên Matrix Careers."}</p>
              <h3>Thông tin chung</h3>
              <p>Lĩnh vực tuyển dụng: {job.department}</p>
              <p>Địa điểm làm việc: {job.location}</p>
              <p>Hạn ứng tuyển: {deadline}</p>
              <Link className="text-link" to="/tuyen-dung">
                Xem thêm việc làm <ArrowUpRight size={16} />
              </Link>
            </aside>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
