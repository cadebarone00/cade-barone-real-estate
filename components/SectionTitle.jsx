export default function SectionTitle({ title, subtitle, dark = false, className = "" }) {
  return (
    <div className={`text-center mb-6 ${className}`}>
      <h2 className="m-0 font-display font-medium text-[clamp(40px,5.5vw,68px)] leading-[1.05] text-gold">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-xs sm:text-sm font-semibold tracking-[0.2em] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
