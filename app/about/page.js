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

const UMHB_ACHIEVEMENTS = [
  "Master's Degree in Sports Administration",
  "Individual & Team ASC Conference Champion",
  "6 Total Team Wins",
  "National Championship Berth, Placed 11th as a Team",
  "18th on Clipped Scoreboard",
  "Earned World Amateur Golf Ranking",
];

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

              <h3 className="font-display italic font-medium text-2xl text-gold mt-8 mb-4">
                My Career at UMHB
              </h3>
              <ul className="grid grid-cols-1 gap-y-2.5 m-0 p-0 list-none">
                {UMHB_ACHIEVEMENTS.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.04em] text-pale-blue"
                  >
                    <span className="text-gold">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
              <p className="m-0 mb-5 text-lg leading-[1.75] text-pale-blue">
                Golf has always been a passion of mine. After graduating from
                Texas A&amp;M in 2025, Coach Jordan Cox at the University of
                Mary Hardin-Baylor gave me the opportunity to play at the NCAA
                level. Unknowingly to me from the start, this was a year that
                would be characterized by so much more than just playing
                golf. Competing weekly against some of the top amateurs in
                the country taught me to stay the course when adversity
                arrives, not let my emotions take over in the good and the
                bad, and stay humble in success.
              </p>
              <p className="m-0 text-lg leading-[1.75] text-pale-blue">
                Golf is the ultimate teacher of this kind of discipline,
                which can only be learned by preparing relentlessly and
                performing under pressure. This experience truly taught me
                that consistency beats talent, and that the best results
                come from grinding through the unglamorous work day after
                day — lessons I&apos;ll directly incorporate into how I serve
                my clients across Dallas. I&apos;m so thankful for my time in
                Belton, TX as a collegiate golfer, and I&apos;m excited to
                resume my real estate career now that my NCAA career is over.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
