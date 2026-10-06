import "./Navbar.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { LogIn, Menu, X } from "lucide-react";
import { siteNavigation } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuRef.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <Container className="flex h-20 items-center justify-between">
        <Link className="brand" to="/" aria-label="Matrix Holding - Trang chủ">
          <img
            className="brand-logo"
            src="/images/brand/logo-mark.png"
            alt=""
            width={44}
            height={44}
          />
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
        <Button asChild className="header-login">
          <a href="https://matrixholding.com.vn/dang-nhap">
            <LogIn size={16} /> Đăng nhập
          </a>
        </Button>
        <Button
          variant="ghost"
          className="menu-button"
          ref={menuRef}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </Container>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Điều hướng mở rộng">
          {siteNavigation.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeProps={{ className: "nav-active", "aria-current": "page" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              <span className="menu-index">0{index + 1}</span>
              <span>{item.label}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <a
            className="mobile-login button button-primary"
            href="https://matrixholding.com.vn/dang-nhap"
          >
            <LogIn size={16} /> Đăng nhập tài khoản
          </a>
        </nav>
      )}
    </header>
  );
}
