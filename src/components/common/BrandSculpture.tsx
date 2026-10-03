import "./BrandSculpture.css";
/** CSS sculpture keeps the brand scene lightweight and available during SSR. */
export function BrandSculpture({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`brand-sculpture${compact ? " brand-sculpture-compact" : ""}`}
      aria-hidden="true"
    >
      <div className="sculpture-halo" />
      <div className="sculpture-core">
        <div className="sculpture-ring ring-a" />
        <div className="sculpture-ring ring-b" />
        <div className="sculpture-ring ring-c" />
        <div className="sculpture-ring ring-d" />
        <div className="sculpture-medallion">
          <img src="/images/brand/logo-mark.png" alt="" width={220} height={240} />
        </div>
      </div>
      <div className="sculpture-shadow" />
    </div>
  );
}
