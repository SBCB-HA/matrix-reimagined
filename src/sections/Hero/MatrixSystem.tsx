import "./MatrixSystem.css";
import { Link } from "@tanstack/react-router";
import { Network, Users, Layers3, ArrowUpRight } from "lucide-react";
import { ecosystemDetails } from "@/data/site";

const icons = [Network, Users, Layers3];
export function MatrixSystem() {
  return (
    <div className="matrix-system">
      <svg className="matrix-system-lines" viewBox="0 0 500 500" aria-hidden="true">
        <path d="M250 240V65H80V140M250 65H420V140M250 240V400H120M250 400H420" />
        <circle cx="250" cy="65" r="4" />
        <circle cx="250" cy="400" r="4" />
      </svg>
      <div className="matrix-system-core">
        <img src="/images/brand/logo-mark.png" alt="" width={64} height={72} />
        <strong>MATRIX HOLDING</strong>
      </div>
      {ecosystemDetails.map((item, index) => {
        const Icon = icons[index]!;
        return (
          <Link
            className={`matrix-system-card matrix-system-card-${index}`}
            key={item.slug}
            to="/he-sinh-thai/$slug"
            params={{ slug: item.slug }}
          >
            <span className="matrix-system-index">0{index + 1}</span>
            <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
            <strong>{item.name}</strong>
            <span>{item.focus}</span>
            <ArrowUpRight className="matrix-system-arrow" size={18} aria-hidden="true" />
          </Link>
        );
      })}
    </div>
  );
}
