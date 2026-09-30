import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Search } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/layout/Container";
import { newsArticles } from "@/data/site";

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}

export function NewsPage() {
  const [query, setQuery] = useState("");
  const articles = newsArticles.filter((article) =>
    normalize(article.title + " " + article.category).includes(normalize(query.trim())),
  );
  return (
    <PageShell
      eyebrow="Tin tức"
      title="Góc nhìn từ hệ sinh thái Matrix."
      description="Tìm hiểu Matrix Holding, các đơn vị thành viên và những hướng kết nối trong hệ sinh thái."
    >
      <section className="section">
        <Container>
          <div className="content-toolbar">
            <p>{articles.length} bài viết</p>
            <label className="search-field">
              <Search size={18} />
              <span className="sr-only">Tìm bài viết</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Tìm bài viết…"
              />
            </label>
          </div>
          {articles.length ? (
            <div className="article-grid">
              {articles.map((article) => (
                <article className="article-card" key={article.slug}>
                  <Link
                    to="/tin-tuc/$slug"
                    params={{ slug: article.slug }}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <img src={article.image} alt="" width={1200} height={912} loading="lazy" />
                  </Link>
                  <div className="article-card-body">
                    <span className="article-meta">
                      {article.category} · {article.date}
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
          ) : (
            <div className="empty-state" role="status">
              <h2>Chưa tìm thấy bài viết phù hợp.</h2>
              <p>Thử từ khóa khác hoặc xem lại tất cả bài viết.</p>
              <button className="button button-primary" onClick={() => setQuery("")}>
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
      eyebrow={article.category}
      title={article.title}
      description={article.summary}
      back={{ label: "Tin tức", to: "/tin-tuc" }}
    >
      <section className="section">
        <Container>
          <article className="article-detail">
            <div className="article-meta">
              Matrix Holding ·{" "}
              <time dateTime={article.date.split("/").reverse().join("-")}>{article.date}</time>
            </div>
            <img
              className="article-cover"
              src={article.image}
              alt={article.category}
              width={1200}
              height={912}
            />
            <div className="prose">
              {article.sections.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </section>
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
