import { ArrowUpRight } from "lucide-react";
import { news } from "@/data/home";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export function News() {
  return <section className="section news-section" id="news"><Container>
    <div className="section-title-row"><SectionHeading eyebrow="TIN TỨC VÀ SỰ KIỆN" title="Những câu chuyện đang tiếp diễn." light /><a href="#news">Xem tất cả <ArrowUpRight /></a></div>
    <div className="news-list">{news.map((item, i) => <article className={item.featured ? "news-item featured" : "news-item"} key={item.title}><span>0{i + 1}</span><time>{item.date}</time><h3>{item.title}</h3><a href="#news" aria-label={`Xem ${item.title}`}><ArrowUpRight /></a></article>)}</div>
  </Container></section>;
}
