export default function ComingSoon({ title }) {
  return (
    <section className="bg-navy">
      <div className="max-w-[760px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(96px,14vw,180px)] text-center">
        <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[22px]">
          DALLAS REAL ESTATE
        </div>
        <h1 className="m-0 mb-[18px] font-display font-medium text-[clamp(36px,5vw,56px)] leading-[1.05] text-cream">
          {title}
        </h1>
        <p className="m-0 text-lg leading-[1.7] text-pale-blue">
          This page is on its way — check back soon.
        </p>
      </div>
    </section>
  );
}
