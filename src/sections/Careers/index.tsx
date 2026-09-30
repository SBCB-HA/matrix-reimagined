import { ArrowUpRight } from "lucide-react";
import { companies } from "@/data/home";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export function Careers() {
  return <section className="section careers" id="careers"><Container>
    <SectionHeading eyebrow="DOANH NGHIỆP TUYỂN DỤNG" title="Cùng phát triển với Matrix." />
    <p className="section-intro">Khám phá các doanh nghiệp đang tuyển dụng trong hệ sinh thái Matrix.</p>
    <div className="filters"><span className="active">Tất cả</span>{["Pháp lý","Tài chính","Vận hành","Nhân sự","Kinh doanh","Truyền thông","Công nghệ"].map(x => <span key={x}>{x}</span>)}</div>
    <div className="company-grid">{companies.map((company, i) => <article className={i === 0 ? "company-card company-card-featured" : "company-card"} key={company.name}><div className="mini-logo">M</div><div><h3>{company.name}</h3><p>{company.field}</p></div><div className="job-count">0 <span>việc làm</span></div>{i === 0 && <a href="#contact">Khám phá việc làm <ArrowUpRight /></a>}</article>)}</div>
    <p className="careers-note">Các tin tuyển dụng được cập nhật trực tiếp từ hệ thống tuyển dụng.</p>
  </Container></section>;
}
