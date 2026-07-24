import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata = {
  title: "Renting",
  description: "The rental process with Cade Barone in Dallas, TX.",
};

// TODO: replace with your real renting process copy
const STEPS = [
  {
    n: 1,
    title: "Consultation",
    body: "TODO: replace with your renting process copy.",
  },
  {
    n: 2,
    title: "Search & Tour",
    body: "TODO: replace with your renting process copy.",
  },
  {
    n: 3,
    title: "Application",
    body: "TODO: replace with your renting process copy.",
  },
  {
    n: 4,
    title: "Move-In",
    body: "TODO: replace with your renting process copy.",
  },
];

export default function RentingPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(28px,3.5vw,44px)] text-center">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[10px]">
                DALLAS REAL ESTATE · RENTING
              </div>
              <h1 className="m-0 font-display font-medium tracking-[0.05em] text-[clamp(36px,4.8vw,58px)] leading-[1.04] text-cream">
                RENTING made SIMPLE
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
