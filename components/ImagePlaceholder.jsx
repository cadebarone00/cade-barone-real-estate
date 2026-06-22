export default function ImagePlaceholder({ label, className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center bg-ink/5 border-[1.5px] border-dashed border-ink/20 text-ink/50 text-[13px] text-center p-3 overflow-hidden ${className}`}
    >
      <span className="max-w-[90%]">{label}</span>
    </div>
  );
}
