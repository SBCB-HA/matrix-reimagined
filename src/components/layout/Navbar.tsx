import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { siteNavigation } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Container className="flex h-20 items-center justify-between">
        <Link className="brand" to="/" aria-label="Matrix Holding - Trang chủ">
          <span className="brand-mark">M</span>
          <span className="brand-divider" />
          <span>Matrix Holding</span>
        </Link>
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {siteNavigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "nav-active", "aria-current": "page" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="header-contact">
          <Link to="/lien-he">
            Liên hệ hợp tác <ArrowRight size={16} />
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="menu-button lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </Container>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Điều hướng trên điện thoại">
          {siteNavigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeProps={{ className: "nav-active", "aria-current": "page" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
