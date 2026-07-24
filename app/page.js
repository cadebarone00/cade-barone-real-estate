import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export const metadata = {
  title: "About",
  description:
    "Cade Barone — Dallas real estate agent with Crown Homes Real Estate. Find a property, see why clients work with him, and get in touch.",
};

// TODO: replace with your own copy once you send it over
const REASONS_TO = [
  "Placeholder — reason 1 you should work with me.",
  "Placeholder — reason 2 you should work with me.",
  "Placeholder — reason 3 you should work with me.",
  "Placeholder — reason 4 you should work with me.",
  "Placeholder — reason 5 you should work with me.",
];

// TODO: replace with your own copy once you send it over
const REASONS_NOT_TO = [
  "Placeholder — reason 1 you shouldn't work with me.",
  "Placeholder — reason 2 you shouldn't work with me.",
  "Placeholder — reason 3 you shouldn't work with me.",
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
                Why you should work with me
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
                Why you shouldn&apos;t work with me
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
