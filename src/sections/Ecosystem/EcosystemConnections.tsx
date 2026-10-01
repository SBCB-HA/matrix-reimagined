import { useState } from "react";
import { ArrowUpRight, Network, Users, Layers3 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ecosystemMembers } from "@/data/reference";

export function EcosystemConnections() {
  const [selected, setSelected] = useState<number | null>(null);
  const member = selected === null ? null : ecosystemMembers[selected];
  const icons = [Network, Users, Layers3];
  return (
    <>
      <div className="ecosystem-connections" data-reveal>
        <div className="ecosystem-orbit" role="group" aria-label="Hệ sinh thái Matrix Holding">
          <svg viewBox="0 0 600 540" className="ecosystem-orbit-lines" aria-hidden="true">
            <circle cx="300" cy="270" r="195" className="orbit-ring" />
            <circle cx="300" cy="270" r="172" className="orbit-dashes" />
            <path d="M300 270 L300 75 M300 270 L469 367 M300 270 L131 367" />
          </svg>
          <div className="orbit-center">
            <span className="brand-mark">M</span>
            <strong>Matrix Holding</strong>
            <span>Định hướng · Điều phối</span>
            <small>Kết nối nguồn lực</small>
          </div>
          {ecosystemMembers.map((item, index) => (
            <button
              type="button"
              className={`orbit-node orbit-node-${index}`}
              key={item.name}
              onClick={() => setSelected(index)}
              aria-pressed={selected === index}
            >
              <span>{item.name}</span>
              <small>{item.role}</small>
            </button>
          ))}
          <p className="orbit-hint">Chọn một thương hiệu để tìm hiểu vai trò</p>
        </div>
        <div className="ecosystem-model-copy">
          <p className="eyebrow">Mô hình liên kết</p>
          <h2>Một hệ sinh thái, kết nối đa chiều.</h2>
          <p>
            Matrix Holding giữ vai trò trung tâm định hướng và điều phối. Các thương hiệu thành viên
            đồng thời kết nối với nhau, chia sẻ nguồn lực và mở rộng cơ hội hợp tác.
          </p>
          <div className="orbit-legend">
            <p>
              <span />
              Đường nối tâm: liên kết với Holding
            </p>
            <p>
              <span />
              Vòng tròn: liên kết giữa các thành viên
            </p>
          </div>
          <div className="ecosystem-selected" aria-live="polite">
            <div key={selected}>
              <h3>{member?.name ?? "Matrix Holding"}</h3>
              <p>
                {member?.text ??
                  "Kiến tạo chiến lược, kết nối nguồn lực và thúc đẩy sự phát triển của toàn hệ sinh thái."}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="value-grid ecosystem-member-grid">
        {ecosystemMembers.map((item, index) => {
          const Icon = icons[index] ?? Network;
          return (
            <button
              type="button"
              className="value-card ecosystem-member-card"
              key={item.name}
              data-reveal
              style={{ transitionDelay: `${index * 90}ms` }}
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
            >
              <Icon size={28} aria-hidden="true" />
              <span>{item.role}</span>
              <h3>{item.name}</h3>
              <small>Thành viên của Matrix Holding</small>
              <p>{item.text}</p>
            </button>
          );
        })}
      </div>
      <div className="ecosystem-source-cta" data-reveal>
        <div>
          <p className="eyebrow">Đồng hành cùng Matrix</p>
          <h2>Kết nối hôm nay, mở rộng cơ hội ngày mai.</h2>
        </div>
        <Link className="button button-primary" to="/lien-he">
          Trao đổi hợp tác <ArrowUpRight size={18} />
        </Link>
      </div>
    </>
  );
}
