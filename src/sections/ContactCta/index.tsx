import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function ContactCta() {
  return <section className="contact-cta"><Container><div><p>MỞ RA CƠ HỘI MỚI</p><h2>BẠN ĐÃ SẴN SÀNG<br />TRỞ THÀNH ĐỐI TÁC CỦA CHÚNG TÔI?</h2></div><div className="button-row"><Button asChild variant="light"><a href="mailto:matrixholding.support@gmail.com">Đăng ký miễn phí <ArrowUpRight /></a></Button><Button asChild variant="outline"><a href="#ecosystem">Xem cơ hội hợp tác</a></Button></div></Container></section>;
}