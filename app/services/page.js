import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";
import ServiceContactForm from "@/components/ServiceContactForm";

export const metadata = {
  title: "Services",
  description:
    "Buyer, seller, renter, and landlord representation across North Dallas and Collin County — Cade Barone.",
};

const SERVICES = [
  {
    id: "buyers",
    eyebrow: "BUYER REPRESENTATION",
    title: (
      <>
        FINDING <em className="italic">your</em> HOME
      </>
    ),
    subtitle: "What to expect when we work together.",
    photo: "/services/cade-services-1.jpg",
    photoAlt: "Cade Barone helping buyers find their home",
    steps: [
      {
        n: 1,
        title: "Intro Call",
        body: "A quick 15-minute call to understand your budget, timeline, and must-haves — plus make sure we're a great fit before we get started.",
      },
      {
        n: 2,
        title: "Pre-Approval",
        body: "I'll connect you with trusted lenders so you're pre-approved and ready to move fast the moment the right home hits the market.",
      },
      {
        n: 3,
        title: "The Search",
        body: "We'll tour homes together. I'll share honest insight on neighborhoods, pricing trends, and what each property is really worth.",
      },
      {
        n: 4,
        title: "Offer & Keys",
        body: "When we find the one, I'll negotiate hard on your behalf and guide you through every step of closing — right to the keys.",
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
        SELLING <em className="italic">for</em> MORE
      </>
    ),
    subtitle: "A strategy-first approach to getting top dollar.",
    photo: "/services/cade-services-2.jpg",
    photoAlt: "Cade Barone representing home sellers",
    steps: [
      {
        n: 1,
        title: "Home Evaluation",
        body: "A detailed comparative market analysis to price your home where it attracts serious buyers and maximizes your return.",
      },
      {
        n: 2,
        title: "Prep & List",
        body: "Professional photography, compelling listing copy, and placement on the MLS plus targeted digital channels to drive showings.",
      },
      {
        n: 3,
        title: "Negotiate",
        body: "Field offers, counter strategically, and protect your bottom line at every turn of the transaction.",
      },
      {
        n: 4,
        title: "Close",
        body: "Navigate inspections, appraisals, and paperwork from contract to closing day — smooth and stress-free.",
      },
    ],
    bg: "bg-white",
    photoLeft: false,
  },
  {
    id: "renters",
    eyebrow: "RENTER REPRESENTATION",
    title: (
      <>
        FINDING <em className="italic">the right</em> FIT
      </>
    ),
    subtitle: "Expert guidance through the rental process.",
    photo: "/services/cade-services-3.jpg",
    photoAlt: "Cade Barone helping renters find their home",
    steps: [
      {
        n: 1,
        title: "Define Your Needs",
        body: "Nail down your budget, must-haves, and preferred neighborhoods across North Dallas and Collin County.",
      },
      {
        n: 2,
        title: "Tour Options",
        body: "See the best available units with expert guidance on what each property — and landlord — is really like.",
      },
      {
        n: 3,
        title: "Apply & Negotiate",
        body: "Handle the application, review the lease carefully, and negotiate favorable terms before you sign anything.",
      },
      {
        n: 4,
        title: "Move In",
        body: "Coordinate your move-in and make sure everything is accounted for and right from day one.",
      },
    ],
    bg: "bg-cream-deep",
    photoLeft: true,
  },
  {
    id: "landlords",
    eyebrow: "LANDLORD REPRESENTATION",
    title: (
      <>
        PROTECTING <em className="italic">your</em> INVESTMENT
      </>
    ),
    subtitle: "Fill your property fast with the right tenant.",
    photo: "/services/cade-services-4.jpg",
    photoAlt: "Cade Barone representing landlords",
    steps: [
      {
        n: 1,
        title: "Property Analysis",
        body: "Price your rental competitively with a current market analysis to minimize vacancy and maximize monthly income.",
      },
      {
        n: 2,
        title: "Market Your Listing",
        body: "Targeted exposure across the MLS and rental platforms to attract qualified, serious tenants fast.",
      },
      {
        n: 3,
        title: "Screen Tenants",
        body: "Thorough background, credit, and income verification — so you feel confident in who you're handing the keys to.",
      },
      {
        n: 4,
        title: "Lease & Handoff",
        body: "Draft a solid lease, coordinate the move-in, and ensure your investment is protected from day one.",
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
        {/* HERO */}
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(56px,7vw,96px)] text-center">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[18px]">
                DALLAS REAL ESTATE · SERVICES
              </div>
              <h1 className="m-0 font-display font-medium text-[clamp(40px,5.4vw,68px)] leading-[1.04] text-cream">
                HOW I <em className="italic">can</em> HELP
              </h1>
            </FadeUp>
          </div>
        </section>

        {/* SERVICE SECTIONS */}
        {SERVICES.map((service) => (
          <section key={service.id} className={service.bg}>
            <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)] grid grid-cols-1 min-[900px]:grid-cols-[0.85fr_1fr] gap-[clamp(40px,6vw,88px)] items-start">

              {/* Photo */}
              <div className={service.photoLeft ? "" : "min-[900px]:order-2"}>
                <FadeUp>
                  <div className="relative w-full max-w-[420px] mx-auto min-[900px]:max-w-none aspect-[3/4] rounded-[190px_190px_6px_6px] overflow-hidden shadow-[0_24px_64px_rgba(22,32,47,0.14)]">
                    <Image
                      src={service.photo}
                      alt={service.photoAlt}
                      fill
                      sizes="(min-width: 900px) 40vw, 90vw"
                      className="object-cover object-center"
                    />
                  </div>
                </FadeUp>
              </div>

              {/* Content */}
              <div className={service.photoLeft ? "" : "min-[900px]:order-1"}>
                <FadeUp>
                  <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">
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
                      className="grid grid-cols-[56px_1fr] gap-[22px] items-start"
                    >
                      <div className="w-[52px] h-[52px] rounded-full bg-navy text-gold font-display text-[22px] flex items-center justify-center flex-shrink-0">
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
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </div>
          </section>
        ))}

        {/* CONTACT FORM */}
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(80px,10vw,130px)]">
            <div className="max-w-[760px] mx-auto">
              <FadeUp>
                <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-4 text-center">
                  LET&apos;S GET STARTED
                </div>
                <h2 className="m-0 mb-3 font-display font-medium text-[clamp(36px,4.8vw,62px)] leading-[1.04] text-cream text-center">
                  BOOK <em className="italic">a</em> CONSULTATION
                </h2>
                <p className="m-0 mb-12 text-lg leading-[1.7] text-pale-blue text-center max-w-[520px] mx-auto">
                  Fill out the form below and I&apos;ll be in touch within 24
                  hours — or book a 15-minute call directly at a time that works
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
