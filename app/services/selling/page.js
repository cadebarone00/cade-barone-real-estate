import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata = {
  title: "Selling",
  description: "The home selling process with Cade Barone in Dallas, TX.",
};

const STEPS = [
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
];

export default function SellingPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(28px,3.5vw,44px)] text-center">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[10px]">
                DALLAS REAL ESTATE · SELLING
              </div>
              <h1 className="m-0 font-display font-medium tracking-[0.05em] text-[clamp(36px,4.8vw,58px)] leading-[1.04] text-cream">
                SELLING with STRATEGY
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
