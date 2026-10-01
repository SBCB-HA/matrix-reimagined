import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { homeCopy } from "@/data/reference";

export function Hero() {
  return (
    <section className="hero" id="top">
      <Container className="hero-inner">
        <div className="hero-content">
          <p className="hero-kicker">{homeCopy.eyebrow}</p>
          <h1>
            Kiến tạo hệ sinh thái
            <br />
            <em>kinh doanh đa ngành</em>
          </h1>
          <p className="hero-description">{homeCopy.description}</p>
          <div className="hero-actions">
            <Button asChild variant="light">
              <a href="#about">
                Khám phá Matrix Holding <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/gioi-thieu">Về Matrix Holding</Link>
            </Button>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orbit" />
          <div className="hero-orbit orbit-two" />
          <img
            className="hero-brand-logo"
            src="/images/brand/logo-mark.png"
            alt=""
            width={660}
            height={720}
          />
          <span className="hero-point point-network">NETWORK</span>
          <span className="hero-point point-connect">CONNECT</span>
          <span className="hero-point point-ventures">VENTURES</span>
        </div>
      </Container>
      <a className="scroll-cue" href="#about" aria-label="Cuộn xuống">
        Cuộn để khám phá <ArrowDown />
      </a>
    </section>
  );
}
