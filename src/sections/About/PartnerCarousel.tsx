import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { partners } from "@/data/about";

export function PartnerCarousel() {
  const viewport = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const interacting = useRef(false);
  const drag = useRef<{ x: number; scroll: number } | null>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const element = viewport.current;
    if (!element || !group.current) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let frame = 0;
    let previous = 0;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false;
    });
    observer.observe(element);
    const animate = (time: number) => {
      const elapsed = previous ? Math.min(time - previous, 40) : 0;
      previous = time;
      if (visible && !paused && !interacting.current && !motion.matches && !document.hidden) {
        const loopWidth = group.current!.offsetWidth + 20;
        element.scrollLeft += elapsed * 0.035;
        if (element.scrollLeft >= loopWidth) element.scrollLeft -= loopWidth;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [paused]);
  const move = (direction: number) => {
    setPaused(true);
    viewport.current?.scrollBy({
      left: direction * 228,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  return (
    <div className="about-partner-carousel" data-reveal>
      <div className="about-carousel-toolbar">
        <p>Tự động trượt · Rê chuột để dừng và kéo xem thêm</p>
        <div className="about-carousel-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Xem đối tác trước">
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => setPaused(!paused)}
            aria-label={paused ? "Tiếp tục trượt logo" : "Dừng trượt logo"}
            aria-pressed={paused}
          >
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Xem đối tác tiếp theo">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <div
        ref={viewport}
        className="about-partner-viewport"
        tabIndex={0}
        role="region"
        aria-label="Danh sách đối tác Matrix Holding"
        onMouseEnter={() => {
          interacting.current = true;
        }}
        onMouseLeave={() => {
          interacting.current = !!viewport.current?.contains(document.activeElement);
        }}
        onFocus={() => {
          interacting.current = true;
        }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            interacting.current = event.currentTarget.matches(":hover");
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        onPointerDown={(event) => {
          if (event.pointerType !== "mouse") return;
          drag.current = { x: event.clientX, scroll: event.currentTarget.scrollLeft };
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (drag.current)
            event.currentTarget.scrollLeft = drag.current.scroll - (event.clientX - drag.current.x);
        }}
        onPointerUp={() => {
          drag.current = null;
        }}
        onPointerCancel={() => {
          drag.current = null;
        }}
      >
        <div className="about-partner-track">
          {[0, 1].map((copy) => (
            <div
              className="about-partner-group"
              key={copy}
              ref={copy === 0 ? group : undefined}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {partners.map((partner) => (
                <div className="about-partner-logo" key={partner.name}>
                  <img
                    src={partner.image}
                    alt={copy === 0 ? partner.name : ""}
                    width={176}
                    height={86}
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
