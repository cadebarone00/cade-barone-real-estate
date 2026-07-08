import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import ServiceContactForm from "@/components/ServiceContactForm";

export const metadata = {
  title: "Services",
  description:
    "Buyer and seller representation across Dallas, North Dallas, and Collin County with Cade Barone.",
};

const SERVICES = [
  {
    id: "buyers",
    eyebrow: "BUYER REPRESENTATION",
    title: (
      <>
        BUYING <em className="italic">with</em> CONFIDENCE
      </>
    ),
    subtitle: "A clear plan from the first conversation to the closing table.",
    photo: "/services/cade-services-1.jpg",
    photoAlt: "Cade Barone helping buyers find their home",
    steps: [
      {
        n: 1,
        title: "Consultation",
        body: "We'll discuss your goals, budget, timeline, and must-haves so I can create a personalized buying strategy.",
      },
      {
        n: 2,
        title: "Pre-Approval",
        body: "I'll connect you with trusted lenders to secure your financing and position you to act quickly when the right home becomes available.",
      },
      {
        n: 3,
        title: "Home Search",
        body: "Together we'll tour homes, evaluate neighborhoods, analyze market value, and identify the property that's the best fit for your lifestyle and investment goals.",
      },
      {
        n: 4,
        title: "Protect & Close",
        body: "From negotiations to option periods, inspections, appraisal, escrow, financing, and closing, I'll guide and protect you through every step so you can purchase with confidence.",
      },
    ],
    bg: "bg-cream",
    photoLeft: true,
  },
  {
    id: "sellers",
    eyebrow: "SELLER REPRESENTATION",
    title: (
      <>
        SELLING <em className="italic">with</em> STRATEGY
      </>
    ),
    subtitle: "A polished listing process designed to maximize your return.",
    photo: "/services/cade-services-2.jpg",
    photoAlt: "Cade Barone representing home sellers",
    steps: [
      {
        n: 1,
        title: "Pricing Strategy",
        body: "We'll evaluate your home, analyze the market, and develop a pricing strategy designed to maximize your return.",
      },
      {
        n: 2,
        title: "Luxury Marketing",
        body: "Your home will receive a custom marketing campaign featuring professional photography, cinematic video, digital advertising, social media exposure, and maximum online visibility to attract qualified buyers.",
      },
      {
        n: 3,
        title: "Negotiate Offers",
        body: "I'll present every offer, negotiate the strongest terms, and help you make informed decisions that protect your bottom line.",
      },
      {
        n: 4,
        title: "Contract to Close",
        body: "I'll manage inspections, repairs, appraisal, escrow, and every transaction detail to deliver a smooth, successful closing.",
      },
    ],
    bg: "bg-white",
    photoLeft: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />

      <main>
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(28px,3.5vw,44px)] text-center">
            <FadeUp>
              <div className="text-[clamp(15px,1.5vw,19px)] font-semibold tracking-[0.16em] text-gold mb-[10px]">
                DALLAS REAL ESTATE / SERVICES
              </div>
              <h1 className="m-0 font-display font-medium text-[clamp(36px,4.8vw,58px)] leading-[1.04] text-cream">
                HOW I <em className="italic">can</em> HELP
              </h1>
              <p className="m-0 mt-3 max-w-[640px] mx-auto text-lg leading-[1.7] text-pale-blue">
                Focused representation for buyers and sellers who want a clear
                process, strong strategy, and steady guidance from start to
                finish.
              </p>
            </FadeUp>
          </div>
        </section>

        {SERVICES.map((service) => (
          <section key={service.id} className={service.bg}>
            <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)] grid grid-cols-1 min-[900px]:grid-cols-[0.85fr_1fr] gap-[clamp(40px,6vw,88px)] items-start">
              <div className={service.photoLeft ? "" : "min-[900px]:order-2"}>
                <FadeUp>
                  <div className="relative w-full max-w-[420px] mx-auto min-[900px]:max-w-none">
                    <span
                      className="absolute -left-3 top-8 h-[68%] w-[5px] bg-gold"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute -right-3 -top-3 h-20 w-20 border-r-2 border-t-2 border-gold/80"
                      aria-hidden="true"
                    />
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[160px_160px_6px_6px] border border-gold/25 shadow-[0_24px_64px_rgba(22,32,47,0.16)]">
                      <Image
                        src={service.photo}
                        alt={service.photoAlt}
                        fill
                        sizes="(min-width: 900px) 40vw, 90vw"
                        className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.025]"
                      />
                    </div>
                  </div>
                </FadeUp>
              </div>

              <div className={service.photoLeft ? "" : "min-[900px]:order-1"}>
                <FadeUp>
                  <div className="text-[clamp(16px,1.6vw,21px)] font-semibold tracking-[0.15em] text-gold mb-5">
                    {service.eyebrow}
                  </div>
                  <h2 className="m-0 mb-2 font-display font-medium text-[clamp(34px,4.4vw,56px)] leading-[1.05] text-ink">
                    {service.title}
                  </h2>
                  <p className="m-0 mb-11 text-xl text-grey-text">
                    {service.subtitle}
                  </p>
                </FadeUp>

                <StaggerGroup className="flex flex-col gap-[38px]">
                  {service.steps.map((step) => (
                    <StaggerItem
                      key={step.n}
                      className="grid grid-cols-[48px_1fr] min-[520px]:grid-cols-[56px_1fr] gap-[18px] min-[520px]:gap-[22px] items-start"
                    >
                      <div className="w-12 h-12 min-[520px]:w-[52px] min-[520px]:h-[52px] rounded-full bg-navy text-gold font-display text-[21px] flex items-center justify-center flex-shrink-0 shadow-[0_10px_24px_rgba(22,32,47,0.12)]">
                        {step.n}
                      </div>
                      <div>
                        <h3 className="m-0 mb-2.5 font-display italic font-medium text-2xl text-navy">
                          {step.title}
                        </h3>
                        <p className="m-0 text-base leading-[1.7] text-grey-text max-w-[540px]">
                          {step.body}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </div>
          </section>
        ))}

        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(80px,10vw,130px)]">
            <div className="max-w-[760px] mx-auto">
              <FadeUp>
                <div className="text-[clamp(15px,1.5vw,19px)] font-semibold tracking-[0.16em] text-gold mb-4 text-center">
                  LET&apos;S GET STARTED
                </div>
                <h2 className="m-0 mb-3 font-display font-medium text-[clamp(36px,4.8vw,62px)] leading-[1.04] text-cream text-center">
                  BOOK <em className="italic">a</em> CONSULTATION
                </h2>
                <p className="m-0 mb-12 text-lg leading-[1.7] text-pale-blue text-center max-w-[520px] mx-auto">
                  Fill out the form below and I&apos;ll be in touch within 24
                  hours, or book a 15-minute call directly at a time that works
                  for you.
                </p>
              </FadeUp>

              <FadeUp delay={0.1}>
                <ServiceContactForm />
              </FadeUp>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
