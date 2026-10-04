import "./ContentControls.css";
import "./NewsPage.css";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Search } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/layout/Container";
import { newsArticles } from "@/data/site";
import { newsCategories } from "@/data/reference";
import { normalizeSearch } from "@/lib/search";
import { newsIllustration } from "@/data/visuals";

export function NewsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tất cả");
  const articles = newsArticles.filter(
    (article) =>
      (category === "Tất cả" || article.category === category) &&
      normalizeSearch(article.title + " " + article.summary + " " + article.category).includes(
        normalizeSearch(query.trim()),
      ),
  );
  return (
    <PageShell
      image="/images/editorial/news-services.webp"
      eyebrow="MATRIX HOLDING · INSIGHTS"
      title="Tin tức & góc nhìn"
      description="Những câu chuyện, hoạt động và góc nhìn phát triển từ hệ sinh thái Matrix Holding."
    >
      <section className="section">
        <Container>
          <div className="content-toolbar" data-reveal>
            <p role="status">{articles.length} bài viết</p>
            <label className="search-field">
              <Search size={18} />
              <span className="sr-only">Tìm trong chuyên mục</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Tìm trong chuyên mục"
              />
            </label>
          </div>
          <nav className="content-filters" aria-label="Danh mục tin tức" data-reveal>
            {newsCategories.map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </nav>
          {articles.length ? (
            <div className="news-collections">
              {[
                { title: "Tin tức nổi bật", items: articles.filter((item) => item.featured) },
                {
                  title: "Tin tức mới nhất",
                  items: articles.filter((item) => !item.featured).slice(0, 2),
                },
                {
                  title: "Tin tức khác",
                  items: articles.filter((item) => !item.featured).slice(2),
                },
              ].map(
                (group) =>
                  group.items.length > 0 && (
                    <section key={group.title} className="news-collection">
                      <h2>{group.title}</h2>
                      <div className="article-grid">
                        {group.items.map((article, index) => (
                          <article
                            className="article-card"
                            key={article.slug}
                            data-reveal
                            style={{ transitionDelay: `${(index % 2) * 80}ms` }}
                          >
                            <Link
                              to="/tin-tuc/$slug"
                              params={{ slug: article.slug }}
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <img
                                src={newsIllustration(article.slug, article.image)}
                                alt=""
                                width={1200}
                                height={800}
                                loading="lazy"
                              />
                            </Link>
                            <div className="article-card-body">
                              <span className="article-meta">
                                {article.category} ·{" "}
                                <time dateTime={article.publishedAt}>{article.date}</time>
                              </span>
                              <h2>
                                <Link to="/tin-tuc/$slug" params={{ slug: article.slug }}>
                                  {article.title}
                                </Link>
                              </h2>
                              <p>{article.summary}</p>
                              <Link
                                className="text-link"
                                to="/tin-tuc/$slug"
                                params={{ slug: article.slug }}
                                aria-label={`Đọc: ${article.title}`}
                              >
                                Đọc bài viết <ArrowUpRight size={18} />
                              </Link>
                            </div>
                          </article>
                        ))}
                      </div>
                    </section>
                  ),
              )}
            </div>
          ) : (
            <div className="empty-state" role="status">
              <h2>Không tìm thấy bài viết phù hợp</h2>
              <p>Thử một từ khóa hoặc chuyên mục khác.</p>
              <button
                type="button"
                className="button button-primary"
                onClick={() => {
                  setQuery("");
                  setCategory("Tất cả");
                }}
              >
                Xem tất cả
              </button>
            </div>
          )}
        </Container>
      </section>
    </PageShell>
  );
}

export function NewsDetailPage({ article }: { article: (typeof newsArticles)[number] }) {
  return (
    <PageShell
      image="/images/editorial/news-services.webp"
      eyebrow={article.category}
      title={article.title}
      description={article.summary}
      back={{ label: "Tin tức", to: "/tin-tuc" }}
    >
      <section className="section">
        <Container>
          <article className="article-detail">
            <div className="article-meta" data-reveal>
              {article.author} · <time dateTime={article.publishedAt}>{article.date}</time>
            </div>
            <figure data-reveal>
              <img
                className="article-cover"
                src={newsIllustration(article.slug, article.image)}
                alt={article.title}
                width={1200}
                height={800}
              />
              <figcaption className="article-caption">
                Hình ảnh minh họa cho bài viết của Matrix Holding
              </figcaption>
            </figure>
            <div className="prose article-original-copy">
              {article.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="article-end">
              <Link className="text-link" to="/tin-tuc">
                ← Trở về tin tức
              </Link>
              <Link className="text-link" to="/lien-he">
                Liên hệ Matrix <ArrowUpRight size={18} />
              </Link>
            </div>
          </article>
          <div className="related-grid">
            {newsArticles
              .filter((other) => other.slug !== article.slug)
              .slice(0, 2)
              .map((other) => (
                <Link
                  className="related-card"
                  data-reveal
                  to="/tin-tuc/$slug"
                  params={{ slug: other.slug }}
                  key={other.slug}
                >
                  <span>{other.category}</span>
                  <h3>{other.title}</h3>
                  <ArrowUpRight />
                </Link>
              ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
