import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FramedPhoto from "@/components/FramedPhoto";
import UmhbPhotoStack from "@/components/UmhbPhotoStack";
import SectionTitle from "@/components/SectionTitle";

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
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)] grid grid-cols-1 min-[900px]:grid-cols-2 gap-[clamp(40px,6vw,88px)] items-start">
            <FramedPhoto label="Drop a photo of you" aspectClassName="aspect-[4/5]" />
            <div>
              <SectionTitle
                title={
                  <>
                    WHERE IT <em className="italic">all</em> STARTED
                  </>
                }
                subtitle="ADD A SHORT TAGLINE HERE"
              />
              <p className="m-0 text-lg leading-[1.75] text-grey-text">
                {PLACEHOLDER_COPY}
              </p>
            </div>
          </div>
        </section>

        {/* TEXAS A&M */}
        <section className="bg-white">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)] grid grid-cols-1 min-[900px]:grid-cols-2 gap-[clamp(40px,6vw,88px)] items-start">
            <div className="min-[900px]:order-2">
              <FramedPhoto label="Drop a Texas A&M photo" aspectClassName="aspect-[4/5]" />
            </div>
            <div className="min-[900px]:order-1">
              <SectionTitle
                title={
                  <>
                    GIG <em className="italic">&apos;em</em>
                  </>
                }
                subtitle="ADD A SHORT TAGLINE HERE"
              />
              <p className="m-0 text-lg leading-[1.75] text-grey-text">
                {PLACEHOLDER_COPY}
              </p>
            </div>
          </div>
        </section>

        {/* REAL ESTATE */}
        <section className="bg-cream-deep">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)] grid grid-cols-1 min-[900px]:grid-cols-2 gap-[clamp(40px,6vw,88px)] items-start">
            <FramedPhoto label="Drop a real estate photo" aspectClassName="aspect-[4/5]" />
            <div>
              <SectionTitle
                title={
                  <>
                    FINDING <em className="italic">my</em> CALLING
                  </>
                }
                subtitle="ADD A SHORT TAGLINE HERE"
              />
              <p className="m-0 text-lg leading-[1.75] text-grey-text">
                {PLACEHOLDER_COPY}
              </p>
            </div>
          </div>
        </section>

        {/* UMHB GOLF */}
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)] grid grid-cols-1 min-[900px]:grid-cols-2 gap-[clamp(40px,6vw,88px)] items-start">
            <div className="min-[900px]:order-2">
              <UmhbPhotoStack />
            </div>
            <div className="min-[900px]:order-1">
              <SectionTitle
                dark
                title={
                  <>
                    <span className="font-bold not-italic">UMHB</span>{" "}
                    <span className="italic font-medium">Golf</span>
                  </>
                }
                subtitle="LIFE OUTSIDE OF REAL ESTATE"
              />
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
