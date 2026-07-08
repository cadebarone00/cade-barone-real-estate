import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FramedPhoto from "@/components/FramedPhoto";
import UmhbPhotoStack from "@/components/UmhbPhotoStack";
import SectionTitle from "@/components/SectionTitle";
import FadeUp from "@/components/FadeUp";

export const metadata = {
  title: "About",
  description:
    "Get to know Cade Barone — where he's from, his Texas A&M and UMHB golf background, and how that shaped the way he works in Dallas real estate.",
};

const UMHB_ACHIEVEMENTS = [
  "Master's Degree in Sports Administration",
  "Individual & Team ASC Conference Champion",
  "6 Total Team Wins",
  "National Championship Birth, Placed 11th as a Team",
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
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(28px,3.5vw,44px)] text-center">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[10px]">
                DALLAS REAL ESTATE · ABOUT
              </div>
              <h1 className="m-0 font-display font-medium text-[clamp(36px,4.8vw,58px)] leading-[1.04] text-cream">
                ABOUT <em className="italic">Cade</em>
              </h1>
            </FadeUp>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="bg-cream-deep">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)] grid grid-cols-1 min-[900px]:grid-cols-2 gap-[clamp(40px,6vw,88px)] items-start">
            <FadeUp>
              <FramedPhoto
                src="/about/cade-overview.jpg"
                alt="Cade Barone"
                aspectClassName="aspect-[4/5]"
              />
            </FadeUp>
            <div>
              <FadeUp>
                <SectionTitle
                  title={
                    <>
                      WHERE IT <em className="italic">all</em> STARTED
                    </>
                  }
                  subtitle="TEXAS ROOTS"
                />
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="m-0 text-lg leading-[1.75] text-grey-text">
                  I grew up in Texas with a genuine love for competition and a
                  drive to build something real. Whether it was on the golf
                  course or in the classroom, I learned early that the best
                  results come from preparation, consistency, and putting in
                  the work when no one&apos;s watching. That same foundation is
                  what I bring to every client relationship in Dallas.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* TEXAS A&M */}
        <section className="bg-white">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)] grid grid-cols-1 min-[900px]:grid-cols-2 gap-[clamp(40px,6vw,88px)] items-start">
            <div className="min-[900px]:order-2">
              <FadeUp>
                <FramedPhoto
                  src="/about/cade-aggie.jpg"
                  alt="Cade Barone, Texas A&M"
                  aspectClassName="aspect-[4/5]"
                />
              </FadeUp>
            </div>
            <div className="min-[900px]:order-1">
              <FadeUp>
                <SectionTitle
                  title={
                    <>
                      GIG <em className="italic">&apos;em</em>
                    </>
                  }
                  subtitle="CLASS OF 2025"
                />
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="m-0 text-lg leading-[1.75] text-grey-text">
                  Texas A&amp;M is where I got my degree and, more
                  importantly, where I learned what it means to compete.
                  Surrounded by talented, driven people with high standards, I
                  developed the work ethic and the mindset I carry into my
                  real estate practice today. The Aggie network, the culture,
                  and the values I built there continue to shape the way I
                  show up for my clients.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* REAL ESTATE */}
        <section className="bg-cream-deep">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)] grid grid-cols-1 min-[900px]:grid-cols-2 gap-[clamp(40px,6vw,88px)] items-start">
            <FadeUp>
              <FramedPhoto
                src="/about/cade-working.jpg"
                alt="Cade Barone at work"
                aspectClassName="aspect-[4/5]"
              />
            </FadeUp>
            <div>
              <FadeUp>
                <SectionTitle
                  title={
                    <>
                      FINDING <em className="italic">my</em> CALLING
                    </>
                  }
                  subtitle="NORTH DALLAS & COLLIN COUNTY"
                />
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="m-0 text-lg leading-[1.75] text-grey-text">
                  Real estate is a people business — and that&apos;s exactly
                  why I love it. Every buyer has a different vision, every
                  market has its nuances, and every deal demands preparation,
                  patience, and a willingness to fight for the best possible
                  outcome. I work with buyers, sellers, and investors across
                  North Dallas and Collin County with one goal: getting you
                  where you want to be.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* UMHB GOLF */}
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)] grid grid-cols-1 min-[900px]:grid-cols-2 gap-[clamp(40px,6vw,88px)] items-start">
            <div className="min-[900px]:order-2">
              <FadeUp>
                <UmhbPhotoStack />
              </FadeUp>

              <FadeUp delay={0.1}>
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
              </FadeUp>
            </div>
            <div className="min-[900px]:order-1">
              <FadeUp>
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
              </FadeUp>
              <FadeUp delay={0.1}>
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
              </FadeUp>
              <FadeUp delay={0.2}>
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
              </FadeUp>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
