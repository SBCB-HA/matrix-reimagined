import { useEffect, useState } from "react";
import "./ChapterNav.css";

const chapters = [
  { id: "top", label: "Trang chủ" },
  { id: "about", label: "Giới thiệu" },
  { id: "ecosystem", label: "Hệ sinh thái" },
  { id: "news", label: "Doanh nghiệp" },
  { id: "careers", label: "Tuyển dụng" },
  { id: "faq", label: "Câu hỏi" },
];

export function ChapterNav() {
  const [active, setActive] = useState("top");
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const current = [...chapters].reverse().find(({ id }) => {
          const section = document.getElementById(id);
          return section && section.getBoundingClientRect().top <= window.innerHeight * 0.35;
        });
        setActive(current?.id ?? "top");
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
    };
  }, []);
  return (
    <nav className="chapter-nav" aria-label="Các phần trang chủ">
      {chapters.map(({ id, label }, index) => (
        <a
          href={`#${id}`}
          key={id}
          aria-label={label}
          aria-current={active === id ? "location" : undefined}
        >
          <span className="chapter-label">{label}</span>
          <span className="chapter-number">0{index + 1}</span>
        </a>
      ))}
    </nav>
  );
}
