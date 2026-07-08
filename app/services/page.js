import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata = {
  title: "Services",
  description:
    "Real estate services from Cade Barone for buyers, sellers, renters, landlords, and property owners across Dallas.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <ComingSoon title="Services" />
      </main>
      <Footer />
    </>
  );
}
