import Image from "next/image";
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
        {/* HERO */}
        <section className="relative bg-navy overflow-hidden">
          <div className="relative w-full aspect-[16/9] min-[900px]:aspect-[21/9]">
            <Image
              src="/cade-kitchen-hero.jpg"
              alt="Cade Barone"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,32,47,0.75),rgba(22,32,47,0.15))]" />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1280px] w-full mx-auto px-[clamp(20px,5vw,56px)]">
              <FadeUp>
                <h1 className="m-0 font-display font-medium text-[clamp(48px,9vw,120px)] leading-[0.98] tracking-[0.01em] text-cream">
                  CADE
                  <br />
                  BARONE
                </h1>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* QUICK LINK */}
        <section className="bg-cream-deep">
          <div className="max-w-[760px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(48px,6vw,80px)] text-center">
            <FadeUp>
              <h2 className="m-0 mb-4 font-display font-medium text-[clamp(26px,3vw,36px)] leading-[1.15] text-ink">
                Want to find a property?
              </h2>
              <p className="m-0 mb-8 text-lg leading-[1.7] text-grey-text">
                Search live listings in your area on my Crown Homes site.
              </p>
              <a
                href={IDX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold text-base tracking-[0.05em] text-ink bg-gold rounded-[7px] px-[38px] py-4 no-underline transition-colors duration-150 hover:bg-gold-hover"
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
              <h2 className="m-0 mb-7 font-display font-medium text-[clamp(28px,3.4vw,40px)] leading-[1.15] text-ink">
                Why should you hire me
              </h2>
              <div className="flex flex-col gap-4 mb-16">
                {REASONS_TO.map((reason, i) => (
                  <p key={i} className="m-0 text-lg leading-[1.7] text-grey-text">
                    {reason}
                  </p>
                ))}
              </div>
            </FadeUp>

            <FadeUp>
              <h2 className="m-0 mb-7 font-display font-medium text-[clamp(28px,3.4vw,40px)] leading-[1.15] text-ink">
                Why you should NOT hire me
              </h2>
              <div className="flex flex-col gap-4">
                {REASONS_NOT_TO.map((reason, i) => (
                  <p key={i} className="m-0 text-lg leading-[1.7] text-grey-text">
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
