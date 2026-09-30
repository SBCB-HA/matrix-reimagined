import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section className="hero" id="top">
      <Container className="hero-inner">
        <div className="hero-content">
          <p className="hero-kicker">MATRIX HOLDING · VIETNAM</p>
          <h1>Kết nối để<br /><em>kiến tạo</em><br />tương lai.</h1>
          <p className="hero-description">Một hệ sinh thái kinh doanh đa ngành, nơi nguồn lực, cộng đồng và cơ hội đầu tư cùng phát triển.</p>
          <div className="hero-actions">
            <Button asChild variant="light"><a href="#ecosystem">Khám phá hệ sinh thái <ArrowUpRight /></a></Button>
            <Button asChild variant="outline"><a href="#about">Về Matrix Holding</a></Button>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orbit" /><div className="hero-orbit orbit-two" />
          <span className="hero-symbol">M</span>
          <span className="hero-point point-network">NETWORK</span>
          <span className="hero-point point-connect">CONNECT</span>
          <span className="hero-point point-ventures">VENTURES</span>
        </div>
      </Container>
      <a className="scroll-cue" href="#about" aria-label="Cuộn xuống">Cuộn để khám phá <ArrowDown /></a>
    </section>
  );
}
