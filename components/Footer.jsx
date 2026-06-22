"use client";

import Link from "next/link";
import { useContactModal } from "@/components/ContactModal";

export default function Footer() {
  const { open } = useContactModal();

  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] pt-[72px] pb-10 grid grid-cols-1 min-[640px]:grid-cols-[1.4fr_1fr_1fr] gap-12">
        <div>
          <div className="font-display font-medium text-2xl tracking-[0.13em] text-cream mb-[18px]">
            CADE BARONE
          </div>
          <p className="m-0 mb-[22px] max-w-[340px] text-[15px] leading-[1.7] text-footer-muted">
            Helping people buy, sell, and rent across Dallas — calm,
            strategic, and genuinely in your corner from the first call to
            the keys.
          </p>
          <button
            onClick={open}
            className="font-bold text-sm tracking-[0.05em] text-ink bg-gold rounded-md px-6 py-3 cursor-pointer transition-colors duration-150 hover:bg-gold-hover"
          >
            Let&apos;s Talk
          </button>
        </div>

        <div>
          <div className="text-xs font-semibold tracking-[0.18em] text-gold mb-[18px]">
            EXPLORE
          </div>
          <div className="flex flex-col gap-3 text-[15px]">
            <Link href="/about" className="text-footer-text no-underline hover:text-cream">
              About
            </Link>
            <Link href="/" className="text-footer-text no-underline hover:text-cream">
              Buyers
            </Link>
            <Link href="/sellers" className="text-footer-text no-underline hover:text-cream">
              Sellers
            </Link>
            <Link href="/renters" className="text-footer-text no-underline hover:text-cream">
              Renters
            </Link>
            <Link href="/landlords" className="text-footer-text no-underline hover:text-cream">
              Landlords
            </Link>
            <Link
              href="/property-management"
              className="text-footer-text no-underline hover:text-cream"
            >
              Property Management
            </Link>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold tracking-[0.18em] text-gold mb-[18px]">
            GET IN TOUCH
          </div>
          <div className="flex flex-col gap-3 text-[15px]">
            <a
              href="mailto:cadebarone00@gmail.com"
              className="text-footer-text no-underline hover:text-cream"
            >
              cadebarone00@gmail.com
            </a>
            <a
              href="tel:+12106652779"
              className="text-footer-text no-underline hover:text-cream"
            >
              (210) 665-2779
            </a>
            <span className="text-footer-muted">Dallas, Texas</span>
            <div className="flex gap-2.5 mt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="w-[38px] h-[38px] border border-pale-blue/25 rounded-full flex items-center justify-center text-footer-text no-underline text-[13px] font-bold hover:border-gold hover:text-gold"
              >
                IG
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-[38px] h-[38px] border border-pale-blue/25 rounded-full flex items-center justify-center text-footer-text no-underline text-[13px] font-bold hover:border-gold hover:text-gold"
              >
                TT
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-[38px] h-[38px] border border-pale-blue/25 rounded-full flex items-center justify-center text-footer-text no-underline text-[13px] font-bold hover:border-gold hover:text-gold"
              >
                IN
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-pale-blue/[0.14]">
        <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[22px] flex justify-between flex-wrap gap-3 text-[13px] text-footer-copy">
          <span>© 2026 Cade Barone. Real Estate Professional, Dallas, TX.</span>
          <span>Not intended to solicit clients currently under contract.</span>
        </div>
      </div>
    </footer>
  );
}
