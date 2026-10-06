import { useEffect } from "react";
import "./OpeningIntro.css";

export function OpeningIntro({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(onComplete, reduced ? 0 : 1650);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, [onComplete]);

  return (
    <div className="opening-intro" role="region" aria-label="Lời mở đầu Matrix Holding">
      <div className="opening-intro-copy">
        <img src="/images/brand/logo-mark.png" width={64} height={72} alt="" />
        <p className="opening-intro-brand">MATRIX HOLDING</p>
        <p className="opening-intro-title">
          <span>
            <span>Kiến tạo hệ sinh thái</span>
          </span>
          <span>
            <span>kinh doanh đa ngành</span>
          </span>
        </p>
      </div>
      <button className="opening-intro-skip" type="button" onClick={onComplete}>
        Bỏ qua ↗
      </button>
    </div>
  );
}
