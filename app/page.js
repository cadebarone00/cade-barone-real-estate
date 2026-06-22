import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import BuyersReels from "@/components/BuyersReels";
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

const TESTIMONIALS = [
  {
    quote:
      "As a first-time homebuyer, I had a lot of questions, and Cade was endlessly patient — I felt confident and informed every step of the way. He made what could have been a stressful process feel seamless and genuinely fun.",
    author: "Alexandra Perpick",
  },
  {
    quote:
      "Cade was incredible from start to finish. Attentive to our exact criteria and patient over more than a year of searching. He guided us through the ups and downs, gave honest advice, and never once pressured us.",
    author: "Lucas Laracy",
  },
  {
    quote:
      "Cade helped me find my dream condo! As a first-time buyer it was incredible to have someone with such a strong grasp of the Dallas market. Kind, patient, responsive — plus great intros to a mortgage broker and lawyer.",
    author: "Natasha Pilato",
  },
  {
    quote:
      "Unfailingly personable and warm, but also sharp and professional on the business end. A great negotiator who balances assertiveness and friendliness, with strong relationships across the industry.",
    author: "Daniel Ferreira",
  },
  {
    quote:
      "Cade was amazing!! He took so much time with me and was extremely patient during our condo search. Very on top of everything and knowledgeable — I ended up in my dream condo, under budget. Highly recommend.",
    author: "Priya Sharma",
  },
  {
    quote:
      "I met Cade after briefly working with two other agents, and was immediately impressed by his preparedness and knowledge of the area I wanted. As a first-time buyer, his advice was incredibly helpful and reassuring.",
    author: "Marcus Chen",
  },
];

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

        {/* BEHIND THE SCENES */}
        <section className="bg-cream-deep">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)]">
            <div className="text-center mb-[54px]">
              <h2 className="m-0 mb-3.5 font-display font-medium text-[clamp(34px,4.4vw,56px)] leading-[1.05] text-ink">
                BEHIND <em className="italic">the</em> SCENES
              </h2>
              <p className="m-0 mx-auto max-w-[620px] text-lg leading-[1.6] text-grey-text">
                Featured short videos on home tours, market insights, and
                behind the scenes with my clients.
              </p>
            </div>

            <BuyersReels />
          </div>
        </section>

        {/* SUCCESS STORIES */}
        <section className="bg-white">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)]">
            <div className="text-center mb-[54px]">
              <h2 className="m-0 mb-3.5 font-display font-medium text-[clamp(34px,4.4vw,56px)] leading-[1.05] text-ink">
                SUCCESS <em className="italic">Stories</em>
              </h2>
              <p className="m-0 mx-auto max-w-[640px] text-lg leading-[1.6] text-grey-text">
                Here&apos;s what it&apos;s like to work together — from
                clients who&apos;ve been in your shoes.
              </p>
            </div>

            <div className="grid grid-cols-1 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3 gap-[clamp(18px,2.4vw,30px)]">
              {TESTIMONIALS.map((t) => (
                <div key={t.author} className="bg-cream-deep rounded-xl px-8 py-[34px]">
                  <div className="text-gold text-base tracking-[2px] mb-[18px]">★★★★★</div>
                  <p className="m-0 mb-6 text-base leading-[1.75] text-card-text">{t.quote}</p>
                  <div className="font-bold text-navy text-[15px]">— {t.author}</div>
                </div>
              ))}
            </div>
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
