import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { homeCopy } from "@/data/reference";

export function ContactCta() {
  return (
    <section className="contact-cta">
      <Container>
        <div data-reveal>
          <h2>{homeCopy.ctaTitle}</h2>
        </div>
        <div className="button-row" data-reveal>
          <Button asChild variant="light">
            <a href="https://matrixholding.com.vn/dang-ky">
              Đăng ký miễn phí <ArrowUpRight />
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link to="/he-sinh-thai">Xem cơ hội hợp tác</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
