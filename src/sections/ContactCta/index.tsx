import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function ContactCta() {
  return <section className="contact-cta"><Container><div><p>MỞ RA CƠ HỘI MỚI</p><h2>Cùng nhau kiến tạo<br />bước tiến tiếp theo.</h2></div><div className="button-row"><Button asChild variant="light"><a href="mailto:matrixholding.support@gmail.com">Liên hệ hợp tác <ArrowUpRight /></a></Button><Button asChild variant="outline"><a href="#ecosystem">Khám phá hệ sinh thái</a></Button></div></Container></section>;
}
