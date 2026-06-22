import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "Sellers" };

export default function SellersPage() {
  return (
    <>
      <Nav />
      <main>
        <ComingSoon title="SELLERS" />
      </main>
      <Footer />
    </>
  );
}
