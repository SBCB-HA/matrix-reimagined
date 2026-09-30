import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { navigation } from "@/data/home";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

const ids = ["top", "about", "ecosystem", "news", "careers", "contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Container className="flex h-20 items-center justify-between">
        <a className="brand" href="#top" aria-label="Matrix Holding - Trang chủ">
          <span className="brand-mark">M</span><span className="brand-divider" /><span>Matrix Holding</span>
        </a>
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {navigation.map((item, index) => <a key={item} href={`#${ids[index]}`}>{item}</a>)}
        </nav>
        <Button asChild className="hidden lg:inline-flex"><a href="#contact">Liên hệ hợp tác <ArrowRight size={16} /></a></Button>
        <Button variant="ghost" className="menu-button lg:hidden" onClick={() => setOpen(!open)} aria-label="Mở menu">{open ? <X /> : <Menu />}</Button>
      </Container>
      {open && <nav className="mobile-nav">{navigation.map((item, index) => <a key={item} href={`#${ids[index]}`} onClick={() => setOpen(false)}>{item}</a>)}</nav>}
    </header>
  );
}
