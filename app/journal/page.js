import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ComingSoon from "@/components/ComingSoon";

export const metadata = {
  title: "Journal",
  description:
    "Market notes, neighborhood observations, and real estate updates from Cade Barone.",
};

export default function JournalPage() {
  return (
    <>
      <Nav />
      <main>
        <ComingSoon title="Journal" />
      </main>
      <Footer />
    </>
  );
}
