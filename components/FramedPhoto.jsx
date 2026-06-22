import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function FramedPhoto({
  src,
  alt,
  label,
  sizes = "(min-width: 900px) 480px, 90vw",
  aspectClassName = "aspect-[4/5]",
  className = "",
}) {
  return (
    <div
      className={`bg-white p-3 shadow-[0_20px_50px_rgba(22,32,47,0.18)] ${className}`}
    >
      <div className={`relative overflow-hidden border border-ink/10 ${aspectClassName}`}>
        {src ? (
          <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
        ) : (
          <ImagePlaceholder label={label} className="absolute inset-0" />
        )}
      </div>
    </div>
  );
}
