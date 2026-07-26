import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export const metadata = {
  title: "About",
  description:
    "Cade Barone — Dallas real estate agent with Crown Homes Real Estate. Find a property, see why clients work with him, and get in touch.",
};

const REASONS_TO = [
  "I am a relentless advocate for my clients who strives to let nothing fall through the cracks. My goal is to protect your investment from start to finish.",
  "I am hands-on through every step of the process, including negotiation, due diligence, and contingencies, building a strategy fitting to your situation that helps you win.",
  "I treat every deal with the same intent, regardless of size or difficulty; A resource in any situation, making sure you get the most for your time and money.",
  "I stay prepared and informed, sharpened by experiences and a growing team behind me.",
  "I lead with my core values and put them to work for your benefit, not my own.",
];

const REASONS_NOT_TO = [
  "You want an agent who's laid back throughout the transaction. I like to communicate extensively throughout the process and stay available for you, including after hours.",
  "You want someone who just gets a deal signed without digging into the details, Instead, I negotiate hard and protect you through tailored strategies.",
  "You want an agent who tells you what you want to hear. I value honesty over false comfort, and I won't agree with everything just to get you to the closing table.",
];

// TODO: swap for your real Crown Homes IDX link
const IDX_URL = "#idx-link-tbd";

export default function HomePage() {
  return (
    <>
      <Nav />

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
          <div className="max-w-[1400px] mx-auto px-[clamp(24px,3vw,40px)] pt-[clamp(24px,3vw,40px)] pb-0">
            <div className="grid grid-cols-2 gap-[clamp(32px,4vw,64px)] items-stretch">
              <div className="flex flex-col justify-center py-12">
                <FadeUp>
                  <div className="text-xs font-semibold tracking-[0.2em] text-grey-text leading-[1.6] mb-8">
                    DALLAS REAL ESTATE
                    <br />
                    CROWN HOMES REAL ESTATE
                  </div>
                </FadeUp>
                <FadeUp delay={0.08}>
                  <h1 className="m-0 mb-9 font-display font-medium tracking-[0.02em] text-[clamp(48px,5.6vw,84px)] leading-[1.02] text-ink">
                    CADE
                    <br />
                    BARONE
                  </h1>
                </FadeUp>
                <FadeUp delay={0.14}>
                  <div className="h-px bg-border-subtle max-w-[420px] mb-9" />
                </FadeUp>
                <FadeUp delay={0.2}>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/services/buying"
                      className="border border-ink/35 rounded-[6px] px-6 py-3.5 text-xs font-semibold tracking-[0.12em] text-ink no-underline transition-colors duration-150 hover:border-ink hover:bg-ink/5"
                    >
                      BUY A HOME &gt;
                    </Link>
                    <Link
                      href="/services/selling"
                      className="border border-ink/35 rounded-[6px] px-6 py-3.5 text-xs font-semibold tracking-[0.12em] text-ink no-underline transition-colors duration-150 hover:border-ink hover:bg-ink/5"
                    >
                      SELL YOUR HOME &gt;
                    </Link>
                  </div>
                </FadeUp>
              </div>

              <div className="relative min-h-[560px] rounded-t-[16px] overflow-hidden">
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
        </section>

        {/* QUICK LINK */}
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(28px,4vw,44px)] flex flex-col min-[640px]:flex-row items-center justify-between gap-6 text-center min-[640px]:text-left">
            <FadeUp>
              <h2 className="m-0 mb-1 font-display font-medium tracking-[0.05em] text-[clamp(22px,2.4vw,30px)] leading-[1.15] text-cream">
                Want to find a property?
              </h2>
              <p className="m-0 text-sm text-pale-blue">
                Search live listings in your area on my Crown Homes site.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <a
                href={IDX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold text-sm tracking-[0.05em] text-ink bg-gold rounded-[7px] px-8 py-[14px] no-underline whitespace-nowrap transition-colors duration-150 hover:bg-gold-hover"
              >
                Search Listings
              </a>
            </FadeUp>
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
                    {reason}
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
                    {reason}
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
