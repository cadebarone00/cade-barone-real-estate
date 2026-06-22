import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "Renters" };

export default function RentersPage() {
  return (
    <>
      <Nav />
      <main>
        <ComingSoon title="RENTERS" />
      </main>
      <Footer />
    </>
  );
}
