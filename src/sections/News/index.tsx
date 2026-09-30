import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { newsArticles as news } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

export function News() {
  return (
    <section className="section news-section" id="news">
      <Container>
        <div className="section-title-row">
          <SectionHeading
            eyebrow="TIN TỨC VÀ SỰ KIỆN"
            title="Những câu chuyện đang tiếp diễn."
            light
          />
          <Link to="/tin-tuc">
            Xem tất cả <ArrowUpRight />
          </Link>
        </div>
        <div className="news-list">
          {news.map((item, i) => (
            <article
              className={item.featured ? "news-item featured" : "news-item"}
              key={item.title}
            >
              <span>0{i + 1}</span>
              <time>{item.date}</time>
              <h3>
                <Link to="/tin-tuc/$slug" params={{ slug: item.slug }}>
                  {item.title}
                </Link>
              </h3>
              <Link
                to="/tin-tuc/$slug"
                params={{ slug: item.slug }}
                aria-label={`Xem ${item.title}`}
              >
                <ArrowUpRight />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
