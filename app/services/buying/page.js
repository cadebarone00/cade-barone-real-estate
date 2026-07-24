import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata = {
  title: "Buying",
  description: "The home buying process with Cade Barone in Dallas, TX.",
};

const STEPS = [
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
];

export default function BuyingPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(28px,3.5vw,44px)] text-center">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[10px]">
                DALLAS REAL ESTATE · BUYING
              </div>
              <h1 className="m-0 font-display font-medium tracking-[0.05em] text-[clamp(36px,4.8vw,58px)] leading-[1.04] text-cream">
                BUYING with CONFIDENCE
              </h1>
            </FadeUp>
          </div>
        </section>

        <section className="bg-cream">
          <div className="max-w-[720px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)]">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">
                THE PROCESS
              </div>
            </FadeUp>
            <ProcessSteps steps={STEPS} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
