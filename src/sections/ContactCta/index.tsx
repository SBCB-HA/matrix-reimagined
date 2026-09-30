import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function ContactCta() {
  return (
    <section className="contact-cta">
      <Container>
        <div>
          <p>MỞ RA CƠ HỘI MỚI</p>
          <h2>
            Cùng nhau kiến tạo
            <br />
            bước tiến tiếp theo.
          </h2>
        </div>
        <div className="button-row">
          <Button asChild variant="light">
            <Link to="/lien-he">
              Liên hệ hợp tác <ArrowUpRight />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/he-sinh-thai">Khám phá hệ sinh thái</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
