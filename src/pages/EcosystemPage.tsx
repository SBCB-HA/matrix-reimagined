import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { EcosystemConnections } from "@/sections/Ecosystem/EcosystemConnections";
import { ecosystemDetails } from "@/data/site";

export function EcosystemPage() {
  return (
    <PageShell
      eyebrow="Hệ sinh thái Matrix Holding"
      title="Kết nối nguồn lực. Cùng nhau phát triển."
      description="Một trung tâm định hướng, ba thương hiệu thành viên cùng kết nối dịch vụ, cộng đồng và cơ hội đầu tư."
    >
      <section className="section">
        <Container>
          <EcosystemConnections />
        </Container>
      </section>
    </PageShell>
  );
}

export function EcosystemDetailPage({ item }: { item: (typeof ecosystemDetails)[number] }) {
  return (
    <PageShell
      eyebrow={item.name}
      title={item.headline}
      description={item.focus}
      back={{ label: "Hệ sinh thái", to: "/he-sinh-thai" }}
    >
      <section className="section">
        <Container>
          <div className="story-grid">
            <img
              className="story-image"
              src={item.image}
              alt={item.name}
              width={1200}
              height={912}
            />
            <div className="prose">
              <p className="eyebrow">{item.role}</p>
              <h2>{item.name}</h2>
              <p>{item.introduction}</p>
              <Link className="button button-primary" to="/lien-he">
                Trao đổi về hợp tác <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <div className="value-grid">
            {item.capabilities.map((capability, index) => (
              <article className="value-card" key={capability.title}>
                <span>0{index + 1} / Hướng kết nối</span>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section faq">
        <Container>
          <SectionHeading eyebrow="TIẾP TỤC KHÁM PHÁ" title="Các đơn vị trong hệ sinh thái." />
          <div className="related-grid">
            {ecosystemDetails
              .filter((other) => other.slug !== item.slug)
              .map((other) => (
                <Link
                  className="related-card"
                  to="/he-sinh-thai/$slug"
                  params={{ slug: other.slug }}
                  key={other.slug}
                >
                  <span>{other.focus}</span>
                  <h3>{other.name}</h3>
                  <ArrowUpRight />
                </Link>
              ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
