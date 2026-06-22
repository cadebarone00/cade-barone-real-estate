import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "Landlords" };

export default function LandlordsPage() {
  return (
    <>
      <Nav />
      <main>
        <ComingSoon title="LANDLORDS" />
      </main>
      <Footer />
    </>
  );
}
