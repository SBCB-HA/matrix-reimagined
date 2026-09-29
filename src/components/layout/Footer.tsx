import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <Container>
        <div className="footer-top">
          <a className="brand brand-footer" href="#top"><span className="brand-mark">M</span><span className="brand-divider" /><span>Matrix Holding</span></a>
          <div className="contact-list">
            <a href="mailto:matrixholding.support@gmail.com"><Mail />matrixholding.support@gmail.com</a>
            <a href="tel:+84964243026"><Phone />(+84) 964 243 026</a>
            <span><MapPin />KĐT Bắc Linh Đàm, Phường Hoàng Liệt, Hà Nội</span>
          </div>
        </div>
        <div className="footer-grid">
          <div><h3>HỆ SINH THÁI</h3><a href="#ecosystem">Matrix Holding</a><a href="#ecosystem">Matrix Network</a><a href="#ecosystem">Matrix Connect</a><a href="#ecosystem">Matrix Ventures</a></div>
          <div><h3>VỀ CHÚNG TÔI</h3><a href="#about">Giới thiệu</a><a href="#top">Hướng dẫn sử dụng</a><a href="#top">Chính sách bảo mật</a><a href="#top">Điều khoản sử dụng</a></div>
          <div><h3>THEO DÕI CHÚNG TÔI</h3><div className="socials"><a href="#top">f</a><a href="#top">in</a><a href="#top">▶</a></div></div>
        </div>
        <p className="copyright">© 2026 Matrix Holding. Bảo lưu mọi quyền.</p>
      </Container>
    </footer>
  );
}