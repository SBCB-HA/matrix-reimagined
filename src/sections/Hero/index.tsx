import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/matrix-hero.jpg";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="hero" id="top">
      <img src={heroImage} width={1600} height={1200} alt="Biệt thự hiện đại bên hồ bơi nhìn ra vịnh" />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="hero-kicker"><span />MATRIX HOLDING · VIETNAM<span /></p>
        <h1>KIẾN TẠO HỆ SINH THÁI<br />KINH DOANH ĐA NGÀNH</h1>
        <p>Chúng tôi tập trung xây dựng một môi trường kinh doanh hiệu quả,<br className="hidden md:block" /> nơi các doanh nghiệp có thể tiếp cận với nhiều nguồn lực và mở ra cơ hội tiếp cận thị trường bền vững.</p>
        <Button asChild variant="light"><a href="#about">Khám phá Matrix Holding</a></Button>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Cuộn xuống"><ArrowDown /></a>
    </section>
  );
}