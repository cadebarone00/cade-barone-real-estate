import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";

export const metadata = {
  title: "Services",
  description:
    "Buying, selling, renting, and landlord representation with Cade Barone across Dallas, TX.",
};

const CATEGORIES = [
  { href: "/services/buying", label: "Buying" },
  { href: "/services/selling", label: "Selling" },
  { href: "/services/renting", label: "Renting" },
  { href: "/services/landlords", label: "Landlords" },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />

      <main>
        <section className="bg-cream">
          <div className="max-w-[1400px] mx-auto px-[clamp(24px,3vw,40px)] pt-[clamp(16px,2vw,28px)] pb-[clamp(56px,7vw,96px)]">
            <StaggerGroup className="grid grid-cols-1 min-[900px]:grid-cols-4 gap-6">
              {CATEGORIES.map((cat) => (
                <StaggerItem key={cat.href}>
                  <div className="h-full bg-white border border-border-subtle rounded-[10px] p-6 flex flex-col">
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <h2 className="m-0 font-display font-medium tracking-[0.02em] text-xl text-ink">
                        {cat.label}
                      </h2>
                      <Link
                        href={cat.href}
                        className="text-[10px] font-semibold tracking-[0.08em] text-ink border border-ink/30 rounded-[4px] px-2.5 py-1.5 no-underline whitespace-nowrap transition-colors duration-150 hover:border-ink hover:bg-ink/5"
                      >
                        ALL RESOURCES
                      </Link>
                    </div>
                    <div className="flex flex-col gap-3">
                      {[1, 2, 3].map((i) => (
                        <ImagePlaceholder key={i} label="Resource" className="h-24 rounded-[6px]" />
                      ))}
                    </div>
                  </div>
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
