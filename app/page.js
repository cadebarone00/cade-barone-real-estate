import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { OpenContactButton } from "@/components/OpenContactButton";

export const metadata = {
  title: "Buyers",
  description:
    "From our first conversation to the moment you get the keys, Cade Barone makes buying a home in Dallas smooth, strategic, and stress-free.",
};

const STEPS = [
  {
    n: 1,
    title: "Intro Call",
    body: "We'll start with a quick 15-minute call to go over your budget, must-haves, preferred areas, and timing — plus make sure we're a great fit to work together.",
  },
  {
    n: 2,
    title: "Get Pre-Approved",
    body: "I'll connect you with a trusted mortgage broker to secure your pre-approval, so you know exactly what you can afford and can act quickly when the right home comes up.",
  },
  {
    n: 3,
    title: "Start the Search",
    body: "This is where the fun begins. We'll tour homes that match your criteria, and I'll share insight on neighborhoods, pricing, and opportunities you might not have considered.",
  },
  {
    n: 4,
    title: "Offer & Keys",
    body: "When we find the one, I'll negotiate hard on your behalf and guide you through every step of closing — right up to the moment the keys are in your hand.",
  },
];

// TODO: insert real testimonial — name + quote pending from client.
const TESTIMONIAL = {
  name: "",
  quote: "",
  rating: 5,
};

export default function BuyersPage() {
  return (
    <>
      <Nav />

      <main>
        {/* HERO */}
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(48px,6vw,96px)] grid grid-cols-1 min-[900px]:grid-cols-[1.05fr_1fr] gap-[clamp(32px,5vw,72px)] items-center">
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[22px]">
                DALLAS REAL ESTATE · BUYERS
              </div>
              <h1 className="m-0 mb-[26px] font-display font-medium text-[clamp(40px,5.4vw,74px)] leading-[1.04] tracking-[0.01em] text-cream">
                BUYING <em className="italic">a</em> HOME{" "}
                <em className="italic">shouldn&apos;t</em> BE STRESSFUL
              </h1>
              <p className="m-0 mb-[38px] max-w-[480px] text-lg leading-[1.7] text-pale-blue">
                From our first conversation to the moment you get the keys, I
                make the buying process smooth, strategic, and stress-free —
                so you can focus on enjoying this exciting next chapter.
              </p>
              <OpenContactButton className="font-bold text-base tracking-[0.05em] text-ink bg-gold rounded-[7px] px-[38px] py-4 cursor-pointer transition-colors duration-150 hover:bg-gold-hover">
                Let&apos;s Talk
              </OpenContactButton>
            </div>
            <ImagePlaceholder
              label="Drop your headshot"
              className="w-full aspect-[4/4.6] rounded-[150px_8px_8px_8px]"
            />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-cream">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)] grid grid-cols-1 min-[900px]:grid-cols-[0.85fr_1fr] gap-[clamp(40px,6vw,88px)] items-start">
            <ImagePlaceholder
              label="Drop a lifestyle / portrait photo"
              className="w-full max-w-[420px] mx-auto min-[900px]:max-w-none aspect-[3/4] min-[900px]:sticky min-[900px]:top-[104px] rounded-[190px_190px_6px_6px]"
            />
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">
                THE PROCESS
              </div>
              <h2 className="m-0 mb-2 font-display font-medium text-[clamp(34px,4.4vw,56px)] leading-[1.05] text-ink">
                HOW <em className="italic">it</em> WORKS
              </h2>
              <p className="m-0 mb-11 text-xl text-grey-text">
                A step-by-step guide to buying a home.
              </p>

              <div className="flex flex-col gap-[38px]">
                {STEPS.map((step) => (
                  <div key={step.n} className="grid grid-cols-[56px_1fr] gap-[22px] items-start">
                    <div className="w-[52px] h-[52px] rounded-full bg-navy text-gold font-display text-[22px] flex items-center justify-center">
                      {step.n}
                    </div>
                    <div>
                      <h3 className="m-0 mb-2.5 font-display italic font-medium text-2xl text-navy">
                        {step.title}
                      </h3>
                      <p className="m-0 text-base leading-[1.7] text-grey-text max-w-[460px]">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOLLOW THE PROCESS */}
        {/* TODO: swap back to the reel-card grid (components/BuyersReels.jsx)
            once 3-5 real reels are posted, using real captions and real
            view/like counts pulled from the actual posts. */}
        <section className="bg-cream-deep">
          <div className="max-w-[640px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)] text-center">
            <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">
              FOLLOW THE PROCESS
            </div>
            <h2 className="m-0 mb-5 font-display font-medium text-[clamp(28px,3.4vw,40px)] leading-[1.15] text-ink">
              Documenting the search, one home at a time.
            </h2>
            <p className="m-0 mb-9 text-lg leading-[1.7] text-grey-text">
              I&apos;m building out video walkthroughs, market breakdowns, and
              behind-the-scenes content as I work with buyers across North
              Dallas and Collin County. Follow along on Instagram and TikTok
              — first ones dropping soon.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-bold tracking-[0.05em]">
              <a href="#" className="text-navy no-underline hover:text-gold">
                Follow on Instagram →
              </a>
              <a href="#" className="text-navy no-underline hover:text-gold">
                Follow on TikTok →
              </a>
            </div>
          </div>
        </section>

        {/* WHAT CLIENTS SAY */}
        <section className="bg-white">
          <div className="max-w-[640px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(56px,7vw,96px)] text-center">
            <h2 className="m-0 mb-8 font-display font-medium text-[clamp(26px,3vw,36px)] leading-[1.1] text-ink">
              WHAT CLIENTS <em className="italic">Say</em>
            </h2>

            {TESTIMONIAL.name && TESTIMONIAL.quote ? (
              <>
                <div className="text-gold text-base tracking-[2px] mb-5">
                  {"★".repeat(TESTIMONIAL.rating)}
                </div>
                <p className="m-0 mb-5 font-display italic text-xl leading-[1.7] text-card-text">
                  &ldquo;{TESTIMONIAL.quote}&rdquo;
                </p>
                <div className="font-bold text-navy text-[15px]">— {TESTIMONIAL.name}</div>
              </>
            ) : (
              <p className="m-0 text-base text-grey-text">Testimonials coming soon.</p>
            )}
          </div>
        </section>

        {/* BOOK A CALL */}
        <section className="relative bg-navy">
          <ImagePlaceholder
            label="Drop a wide lifestyle photo (background)"
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,32,47,0.62),rgba(22,32,47,0.72))]" />
          <div className="relative max-w-[760px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(80px,11vw,150px)] text-center">
            <h2 className="m-0 mb-[22px] font-display font-medium text-[clamp(40px,5.4vw,68px)] leading-[1.04] tracking-[0.03em] text-cream">
              BOOK <em className="italic">a</em> CALL
            </h2>
            <p className="m-0 mx-auto mb-[38px] max-w-[560px] text-[19px] leading-[1.65] text-pale-blue-3">
              Let&apos;s find your perfect home. Schedule a 15-minute intro
              call to begin the search together.
            </p>
            <OpenContactButton className="font-bold text-base tracking-[0.05em] text-ink bg-gold rounded-[7px] px-[42px] py-4 cursor-pointer transition-colors duration-150 hover:bg-gold-hover">
              Let&apos;s Talk
            </OpenContactButton>
          </div>
        </section>

        {/* REEL STRIP */}
        <section className="grid grid-cols-3 min-[640px]:grid-cols-6 bg-gold">
          {Array.from({ length: 6 }).map((_, i) => (
            <ImagePlaceholder key={i} label="Reel" className="w-full aspect-[3/4] border-0 rounded-none bg-ink/[0.08]" />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
