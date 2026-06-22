import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FramedPhoto from "@/components/FramedPhoto";
import UmhbPhotoStack from "@/components/UmhbPhotoStack";

export const metadata = {
  title: "About",
  description:
    "Get to know Cade Barone — where he's from, his Texas A&M and UMHB golf background, and how that shaped the way he works in Dallas real estate.",
};

const PLACEHOLDER_COPY =
  "Add a few sentences here — ask Claude to drop in your real story once you've shared it.";

export default function AboutPage() {
  return (
    <>
      <Nav />

      <main>
        {/* HERO */}
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(56px,7vw,96px)] text-center">
            <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[18px]">
              DALLAS REAL ESTATE · ABOUT
            </div>
            <h1 className="m-0 font-display font-medium text-[clamp(40px,5.4vw,68px)] leading-[1.04] text-cream">
              ABOUT <em className="italic">Cade</em>
            </h1>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="bg-cream-deep">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)] grid grid-cols-1 min-[900px]:grid-cols-2 gap-[clamp(40px,6vw,88px)] items-center">
            <FramedPhoto label="Drop a photo of you" aspectClassName="aspect-[4/5]" />
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">
                THE OVERVIEW
              </div>
              <h2 className="m-0 mb-5 font-display font-medium text-[clamp(32px,4vw,48px)] leading-[1.08] text-ink">
                WHERE IT <em className="italic">all</em> STARTED
              </h2>
              <p className="m-0 text-lg leading-[1.75] text-grey-text">
                {PLACEHOLDER_COPY}
              </p>
            </div>
          </div>
        </section>

        {/* TEXAS A&M */}
        <section className="bg-white">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)] grid grid-cols-1 min-[900px]:grid-cols-2 gap-[clamp(40px,6vw,88px)] items-center">
            <div className="min-[900px]:order-2">
              <FramedPhoto label="Drop a Texas A&M photo" aspectClassName="aspect-[4/5]" />
            </div>
            <div className="min-[900px]:order-1">
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">
                TEXAS A&amp;M
              </div>
              <h2 className="m-0 mb-5 font-display font-medium text-[clamp(32px,4vw,48px)] leading-[1.08] text-ink">
                GIG <em className="italic">&apos;em</em>
              </h2>
              <p className="m-0 text-lg leading-[1.75] text-grey-text">
                {PLACEHOLDER_COPY}
              </p>
            </div>
          </div>
        </section>

        {/* REAL ESTATE */}
        <section className="bg-cream-deep">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)] grid grid-cols-1 min-[900px]:grid-cols-2 gap-[clamp(40px,6vw,88px)] items-center">
            <FramedPhoto label="Drop a real estate photo" aspectClassName="aspect-[4/5]" />
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">
                REAL ESTATE
              </div>
              <h2 className="m-0 mb-5 font-display font-medium text-[clamp(32px,4vw,48px)] leading-[1.08] text-ink">
                FINDING <em className="italic">my</em> CALLING
              </h2>
              <p className="m-0 text-lg leading-[1.75] text-grey-text">
                {PLACEHOLDER_COPY}
              </p>
            </div>
          </div>
        </section>

        {/* UMHB GOLF */}
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)] grid grid-cols-1 min-[900px]:grid-cols-2 gap-[clamp(40px,6vw,88px)] items-center">
            <div className="min-[900px]:order-2">
              <UmhbPhotoStack />
            </div>
            <div className="min-[900px]:order-1">
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">
                UMHB GOLF
              </div>
              <h2 className="m-0 mb-5 font-display font-medium text-[clamp(32px,4vw,48px)] leading-[1.08] text-cream">
                2026 ASC <em className="italic">Champions</em>
              </h2>
              <p className="m-0 text-lg leading-[1.75] text-pale-blue">
                {PLACEHOLDER_COPY}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
