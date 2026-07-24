import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata = {
  title: "Listings",
  description: "Active Crown Homes Texas listings with Cade Barone in Dallas, TX.",
};

// TODO: swap for your real Crown Homes IDX link
const IDX_URL = "#idx-link-tbd";

// TODO: replace with real agent listings once available
const AGENT_LISTINGS = [
  { id: 1, label: "Listing photo" },
  { id: 2, label: "Listing photo" },
  { id: 3, label: "Listing photo" },
];

export default function ListingsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(28px,3.5vw,44px)] text-center">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[10px]">
                DALLAS REAL ESTATE · LISTINGS
              </div>
              <h1 className="m-0 mb-5 font-display font-medium text-[clamp(36px,4.8vw,58px)] leading-[1.04] text-cream">
                CROWN HOMES <em className="italic">Texas</em> LISTINGS
              </h1>
              <a
                href={IDX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold text-base tracking-[0.05em] text-ink bg-gold rounded-[7px] px-[38px] py-4 no-underline transition-colors duration-150 hover:bg-gold-hover"
              >
                Want to see all the listings in your area?
              </a>
            </FadeUp>
          </div>
        </section>

        <section className="bg-cream">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(56px,7vw,96px)]">
            <FadeUp>
              <h2 className="m-0 mb-6 font-display font-medium text-[clamp(26px,3vw,36px)] leading-[1.15] text-ink">
                My Listings
              </h2>
              <p className="m-0 text-lg leading-[1.7] text-grey-text">
                No active listings at this time — check back soon.
              </p>
            </FadeUp>
          </div>
        </section>

        <section className="bg-cream-deep">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(56px,7vw,96px)]">
            <FadeUp>
              <h2 className="m-0 mb-8 font-display font-medium text-[clamp(26px,3vw,36px)] leading-[1.15] text-ink">
                Agent Listings
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 min-[560px]:grid-cols-2 min-[900px]:grid-cols-3 gap-6">
              {AGENT_LISTINGS.map((listing) => (
                <ImagePlaceholder
                  key={listing.id}
                  label={listing.label}
                  className="w-full aspect-[4/3] rounded-[10px]"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
