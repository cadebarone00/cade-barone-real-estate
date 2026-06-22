"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContactModal } from "@/components/ContactModal";

const LINKS = [
  { href: "/about", label: "ABOUT" },
  { href: "/", label: "BUYERS" },
  { href: "/sellers", label: "SELLERS" },
  { href: "/renters", label: "RENTERS" },
  { href: "/landlords", label: "LANDLORDS" },
  { href: "/property-management", label: "PROPERTY MANAGEMENT" },
];

export default function Nav() {
  const pathname = usePathname();
  const { open } = useContactModal();

  return (
    <header className="sticky top-0 z-50 bg-cream/[0.92] backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-6 px-[clamp(20px,5vw,56px)] py-[18px]">
        <Link
          href="/"
          className="font-display font-medium text-[23px] tracking-[0.13em] text-ink no-underline whitespace-nowrap"
        >
          CADE BARONE
        </Link>

        <nav className="flex items-center gap-[clamp(18px,2.6vw,40px)] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold tracking-[0.14em] no-underline whitespace-nowrap py-1 ${
                  isActive
                    ? "text-ink after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-gold"
                    : "text-grey-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={open}
          className="font-bold text-sm tracking-[0.05em] text-ink bg-gold rounded-[6px] px-6 py-3 cursor-pointer transition-colors duration-150 hover:bg-gold-hover whitespace-nowrap"
        >
          Let&apos;s Talk
        </button>
      </div>
    </header>
  );
}
