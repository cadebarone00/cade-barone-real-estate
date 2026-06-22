import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <ComingSoon title="ABOUT CADE" />
      </main>
      <Footer />
    </>
  );
}
