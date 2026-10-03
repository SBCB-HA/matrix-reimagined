import "./HistoryTimeline.css";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { editorialImages } from "@/data/visuals";
import { milestones } from "@/data/about";

export function HistoryTimeline() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const milestone = milestones[selected] ?? milestones[0]!;
  return (
    <div className="about-timeline" data-reveal>
      <div className="about-timeline-scroll">
        <div role="tablist" aria-label="Cột mốc phát triển" className="about-timeline-tabs">
          {milestones.map((item, index) => (
            <button
              key={item.year}
              type="button"
              role="tab"
              id={`history-tab-${index}`}
              aria-controls="history-panel"
              aria-selected={selected === index}
              tabIndex={selected === index ? 0 : -1}
              ref={(element) => {
                tabs.current[index] = element;
              }}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => {
                let next = index;
                if (event.key === "ArrowRight") next = (index + 1) % milestones.length;
                else if (event.key === "ArrowLeft")
                  next = (index + milestones.length - 1) % milestones.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = milestones.length - 1;
                else return;
                event.preventDefault();
                setSelected(next);
                tabs.current[next]?.focus();
              }}
            >
              <span className="about-timeline-dot" />
              <span>{item.year}</span>
            </button>
          ))}
        </div>
      </div>
      <div
        id="history-panel"
        className="about-history-panel"
        role="tabpanel"
        aria-labelledby={`history-tab-${selected}`}
        tabIndex={0}
      >
        <div className="about-history-content" key={milestone.year}>
          <img
            src={
              [
                editorialImages.introduction,
                editorialImages.foundations,
                editorialImages.positioning,
                editorialImages.models,
                editorialImages.hero,
              ][selected]
            }
            alt="Ảnh minh họa hành trình phát triển doanh nghiệp"
            width={800}
            height={540}
            loading="lazy"
          />
          <div className="about-history-copy">
            <span className="about-eyebrow">Cột mốc · {milestone.year}</span>
            <h3>{milestone.title}</h3>
            <p>{milestone.text}</p>
            <span className="about-history-signature">
              Matrix Holding <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
