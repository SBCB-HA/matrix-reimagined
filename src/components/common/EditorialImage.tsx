import "./EditorialImage.css";

export function EditorialImage({
  src,
  alt = "",
  motion = "curtain",
  className = "",
  priority = false,
}: {
  src: string;
  alt?: string;
  motion?: "curtain" | "drift" | "pan";
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`editorial-image editorial-${motion} ${className}`} data-reveal>
      <img
        src={src}
        alt={alt}
        width={1024}
        height={1536}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  );
}
