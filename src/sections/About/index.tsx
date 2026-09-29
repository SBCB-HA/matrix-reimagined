import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export function About() {
  return (
    <section className="section about" id="about"><Container>
      <div className="about-grid">
        <SectionHeading eyebrow="VỀ CHÚNG TÔI" title="GIỚI THIỆU MATRIX HOLDING" />
        <div className="about-copy"><p>Matrix Holding là doanh nghiệp hoạt động trong lĩnh vực đầu tư và phát triển hệ sinh thái kinh doanh đa ngành tại Việt Nam. Hướng đến mục tiêu đưa các doanh nghiệp tiềm năng trở thành kỳ lân trong lĩnh vực, chúng tôi cam kết sẽ không ngừng nỗ lực, phát huy sự sáng tạo nhằm đưa ra giải pháp phù hợp với nhu cầu của từng doanh nghiệp.</p><div className="button-row"><Button asChild><a href="#ecosystem">Tìm hiểu thêm <ArrowUpRight /></a></Button><Button asChild variant="outline"><a href="#contact">Xem Hồ sơ năng lực</a></Button></div></div>
      </div>
      <div className="metrics"><div><strong>03</strong><span>Hệ sinh thái trọng điểm</span></div><div><strong>09+</strong><span>Doanh nghiệp thành viên</span></div><div><strong>2023</strong><span>Năm thành lập</span></div></div>
    </Container></section>
  );
}