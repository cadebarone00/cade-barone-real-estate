import Image from "next/image";

export default function UmhbPhotoStack({ className = "" }) {
  return (
    <div
      className={`relative w-full max-w-[420px] mx-auto aspect-[4/5] min-[900px]:max-w-none min-[900px]:aspect-[6/5] ${className}`}
    >
      <div className="absolute left-0 top-0 w-[72%] aspect-square bg-cream p-2.5 border border-gold/50 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/about/umhb-team.jpg"
            alt="UMHB men's golf team holding the 2026 ASC Champion banner"
            fill
            sizes="(min-width: 900px) 380px, 70vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-[46%] aspect-[1206/1407] bg-cream p-2.5 border border-gold/50 shadow-[0_28px_70px_rgba(0,0,0,0.45)]">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/about/umhb-swing.jpg"
            alt="Cade Barone following through on a tee shot"
            fill
            sizes="(min-width: 900px) 240px, 45vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
