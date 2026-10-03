import "./PartnerCarousel.css";
import type { CSSProperties } from "react";
import { partners } from "@/data/about";

export function PartnerCarousel() {
  return (
    <div className="partner-wall" data-reveal role="region" aria-label="Các đối tác Matrix Holding">
      {partners.map((partner, index) => (
        <div
          className="partner-tile"
          key={partner.name}
          style={
            {
              "--partner-delay": `${(index % 6) * 90 + Math.floor(index / 6) * 130}ms`,
            } as CSSProperties
          }
        >
          <span className="partner-logo-frame">
            <img src={partner.image} alt={partner.name} width={176} height={86} loading="lazy" />
          </span>
        </div>
      ))}
    </div>
  );
}
