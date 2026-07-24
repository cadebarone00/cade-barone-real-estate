import { Playfair_Display, Mulish } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Cade Barone — Dallas Real Estate",
    template: "%s | Cade Barone — Dallas Real Estate",
  },
  description:
    "Cade Barone helps people buy, sell, rent, and manage property across Dallas, TX — calm, strategic, and genuinely in your corner from the first call to the keys.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${mulish.variable}`}>
      <body className="bg-cream text-ink font-body">{children}</body>
    </html>
  );
}
