import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "Property Management" };

export default function PropertyManagementPage() {
  return (
    <>
      <Nav />
      <main>
        <ComingSoon title="PROPERTY MANAGEMENT" />
      </main>
      <Footer />
    </>
  );
}
