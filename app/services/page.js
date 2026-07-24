import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";

export const metadata = {
  title: "Services",
  description:
    "Buying, selling, renting, and landlord representation with Cade Barone across Dallas, TX.",
};

const CATEGORIES = [
  {
    href: "/services/buying",
    label: "Buying",
    body: "A clear plan from the first conversation to the closing table.",
  },
  {
    href: "/services/selling",
    label: "Selling",
    body: "A polished listing process designed to maximize your return.",
  },
  {
    href: "/services/renting",
    label: "Renting",
    body: "Guidance finding the right rental, without the runaround.",
  },
  {
    href: "/services/landlords",
    label: "Landlords",
    body: "Support marketing, screening, and filling your property.",
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
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[10px]">
                DALLAS REAL ESTATE · SERVICES
              </div>
              <h1 className="m-0 font-display font-medium tracking-[0.05em] text-[clamp(36px,4.8vw,58px)] leading-[1.04] text-cream">
                HOW I can HELP
              </h1>
            </FadeUp>
          </div>
        </section>

        <section className="bg-cream-deep">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)]">
            <StaggerGroup className="grid grid-cols-1 min-[640px]:grid-cols-2 gap-6">
              {CATEGORIES.map((cat) => (
                <StaggerItem key={cat.href}>
                  <Link
                    href={cat.href}
                    className="block h-full bg-white rounded-[10px] border border-border-subtle px-8 py-9 no-underline transition-colors duration-150 hover:border-gold/60"
                  >
                    <h2 className="m-0 mb-2.5 font-display font-medium tracking-[0.05em] text-2xl text-navy">
                      {cat.label}
                    </h2>
                    <p className="m-0 text-base leading-[1.7] text-grey-text">
                      {cat.body}
                    </p>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
