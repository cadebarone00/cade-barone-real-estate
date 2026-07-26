import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata = {
  title: "About",
  description:
    "Cade Barone — Dallas real estate agent with Crown Homes Real Estate. Find a property, see why clients work with him, and get in touch.",
};

const REASONS_TO = [
  {
    bold: "I am a relentless advocate for my clients",
    rest: " who strives to let nothing fall through the cracks. My goal is to protect your investment from start to finish.",
  },
  {
    bold: "I am hands-on through every step of the process,",
    rest: " including negotiation, due diligence, and contingencies, building a strategy fitting to your situation that helps you win.",
  },
  {
    bold: "I treat every deal with the same intent,",
    rest: " regardless of size or difficulty; A resource in any situation, making sure you get the most for your time and money.",
  },
  {
    bold: "I stay prepared and informed,",
    rest: " sharpened by experiences and a growing team behind me.",
  },
  {
    bold: "I lead with my core values",
    rest: " and put them to work for your benefit, not my own.",
  },
];

const REASONS_NOT_TO = [
  {
    bold: "You want an agent who's laid back throughout the transaction.",
    rest: " I like to communicate extensively throughout the process and stay available for you, including after hours.",
  },
  {
    bold: "You want someone who just gets a deal signed without digging into the details.",
    rest: " Instead, I negotiate hard and protect you through tailored strategies.",
  },
  {
    bold: "You want an agent who just tells you what you want to hear.",
    rest: " I value honesty over false comfort, and I won't agree with everything just to get you to the closing table.",
  },
];

export default function HomePage() {
  return (
    <>
      <div className="min-[900px]:hidden">
        <Nav />
      </div>

      <main>
        {/* HERO — mobile: full-bleed photo, text card at bottom */}
        <section className="relative bg-navy overflow-hidden min-[900px]:hidden">
          <div className="relative w-full aspect-[3/4]">
            <Image
              src="/cade-kitchen-hero.jpg"
              alt="Cade Barone"
              fill
              sizes="100vw"
              className="object-cover object-[center_10%]"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(22,32,47,0.85),rgba(22,32,47,0)_55%)]" />
          </div>
          <div className="absolute inset-0 flex items-end pb-10">
            <div className="w-full px-[clamp(20px,5vw,56px)]">
              <FadeUp>
                <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-3">
                  DALLAS REAL ESTATE
                </div>
              </FadeUp>
              <FadeUp delay={0.08}>
                <h1 className="m-0 mb-3 font-display font-medium text-[clamp(40px,7vw,100px)] leading-[0.98] tracking-[0.08em] text-cream">
                  CADE
                  <br />
                  BARONE
                </h1>
              </FadeUp>
              <FadeUp delay={0.16}>
                <div className="text-xs sm:text-sm font-semibold tracking-[0.16em] text-pale-blue">
                  CROWN HOMES REAL ESTATE · NORTH DALLAS &amp; COLLIN COUNTY
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* HERO — desktop: split panel, photo right, text + boxed links left */}
        <section className="hidden min-[900px]:block bg-cream">
          <div className="max-w-[1400px] mx-auto px-[clamp(24px,3vw,40px)] pt-[clamp(20px,2.4vw,32px)] pb-0">
            {/* Top bar: logo + plain text nav */}
            <div className="flex items-center justify-between pb-8">
              {/* TODO: swap for the real Crown Homes logo file */}
              <ImagePlaceholder label="Crown Homes Logo" className="h-10 w-[160px]" />
              <nav className="flex items-center gap-10">
                <Link
                  href="/"
                  className="relative text-sm font-semibold tracking-[0.14em] text-ink no-underline after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-gold"
                >
                  HOME
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-semibold tracking-[0.14em] text-grey-text no-underline hover:text-ink"
                >
                  SERVICES
                </Link>
                <Link
                  href="/listings"
                  className="text-sm font-semibold tracking-[0.14em] text-grey-text no-underline hover:text-ink"
                >
                  LISTINGS
                </Link>
              </nav>
            </div>

            <div className="grid grid-cols-2 gap-[clamp(32px,4vw,64px)] items-stretch">
              <div className="flex flex-col items-center text-center justify-start pt-[clamp(32px,6vw,72px)] px-6">
                <FadeUp>
                  <div className="font-display font-medium tracking-[0.04em] text-xl text-ink mb-1">
                    Cade Barone, Realtor
                  </div>
                </FadeUp>
                <FadeUp delay={0.05}>
                  <div className="text-xs font-semibold tracking-[0.18em] text-grey-text mb-10">
                    CROWN HOMES REAL ESTATE
                  </div>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h1 className="m-0 mb-9 font-display font-medium text-[clamp(40px,4.6vw,68px)] leading-[1.1] text-ink max-w-[480px]">
                    Let&apos;s find your <em className="italic">dream home</em>.
                  </h1>
                </FadeUp>
                <FadeUp delay={0.16}>
                  <div className="text-xs font-semibold tracking-[0.18em] text-grey-text mb-10">
                    FRISCO&nbsp;&nbsp;|&nbsp;&nbsp;MCKINNEY&nbsp;&nbsp;|&nbsp;&nbsp;ALLEN
                  </div>
                </FadeUp>
                <FadeUp delay={0.22}>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="/services/buying"
                      className="border border-ink/35 rounded-[6px] px-6 py-3.5 text-xs font-semibold tracking-[0.12em] text-ink no-underline transition-colors duration-150 hover:border-ink hover:bg-ink/5"
                    >
                      BUY A HOME
                    </Link>
                    <Link
                      href="/services/selling"
                      className="border border-ink/35 rounded-[6px] px-6 py-3.5 text-xs font-semibold tracking-[0.12em] text-ink no-underline transition-colors duration-150 hover:border-ink hover:bg-ink/5"
                    >
                      SELL YOUR HOME
                    </Link>
                  </div>
                </FadeUp>
              </div>

              <div className="flex items-center justify-center py-12">
                <div className="relative w-full h-full min-h-[420px]">
                  <Image
                    src="/cade-kitchen-hero.jpg"
                    alt="Cade Barone"
                    fill
                    sizes="50vw"
                    className="object-cover object-[center_10%]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REASONS */}
        <section className="bg-white">
          <div className="max-w-[760px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)]">
            <FadeUp>
              <h2 className="m-0 mb-4 min-[900px]:mb-7 font-display font-medium tracking-[0.05em] text-xl min-[900px]:text-[clamp(28px,3.4vw,40px)] leading-[1.15] text-ink">
                Why should you hire me
              </h2>
              <div className="flex flex-col gap-2.5 min-[900px]:gap-4 mb-10 min-[900px]:mb-16">
                {REASONS_TO.map((reason, i) => (
                  <p key={i} className="m-0 text-sm min-[900px]:text-lg leading-[1.55] min-[900px]:leading-[1.7] text-grey-text">
                    <strong className="font-semibold text-ink">{reason.bold}</strong>
                    {reason.rest}
                  </p>
                ))}
              </div>
            </FadeUp>

            <FadeUp>
              <h2 className="m-0 mb-4 min-[900px]:mb-7 font-display font-medium tracking-[0.05em] text-xl min-[900px]:text-[clamp(28px,3.4vw,40px)] leading-[1.15] text-ink">
                Why you should NOT hire me
              </h2>
              <div className="flex flex-col gap-2.5 min-[900px]:gap-4">
                {REASONS_NOT_TO.map((reason, i) => (
                  <p key={i} className="m-0 text-sm min-[900px]:text-lg leading-[1.55] min-[900px]:leading-[1.7] text-grey-text">
                    <strong className="font-semibold text-ink">{reason.bold}</strong>
                    {reason.rest}
                  </p>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
