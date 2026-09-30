import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./Container";
import { contact, ecosystemDetails } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-top">
          <Link className="brand brand-footer" to="/">
            <span className="brand-mark">M</span>
            <span className="brand-divider" />
            <span>Matrix Holding</span>
          </Link>
          <div className="contact-list">
            <a href={`mailto:${contact.email}`}>
              <Mail />
              {contact.email}
            </a>
            <a href={contact.phoneHref}>
              <Phone />
              {contact.phone}
            </a>
            <span>
              <MapPin />
              {contact.address}
            </span>
          </div>
        </div>
        <div className="footer-grid">
          <div>
            <h3>HỆ SINH THÁI</h3>
            <Link to="/he-sinh-thai">Tổng quan hệ sinh thái</Link>
            {ecosystemDetails.map((item) => (
              <Link to="/he-sinh-thai/$slug" params={{ slug: item.slug }} key={item.slug}>
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <h3>KHÁM PHÁ MATRIX</h3>
            <Link to="/gioi-thieu">Giới thiệu</Link>
            <Link to="/tin-tuc">Tin tức</Link>
            <Link to="/tuyen-dung">Tuyển dụng</Link>
          </div>
          <div>
            <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
            <Link to="/lien-he">Liên hệ hợp tác</Link>
            <a href={`mailto:${contact.email}`}>Gửi email cho Matrix</a>
            <a href={contact.phoneHref}>Gọi điện trao đổi</a>
          </div>
        </div>
        <p className="copyright">© 2026 Matrix Holding. Bảo lưu mọi quyền.</p>
      </Container>
    </footer>
  );
}
