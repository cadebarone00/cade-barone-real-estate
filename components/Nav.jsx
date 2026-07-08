"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContactModal } from "@/components/ContactModal";

const LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/services", label: "SERVICES" },
  { href: "/journal", label: "JOURNAL" },
];

export default function Nav() {
  const pathname = usePathname();
  const { open } = useContactModal();

  return (
    <header className="sticky top-0 z-50 bg-cream/[0.92] backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-4 px-[clamp(20px,5vw,56px)] py-[18px]">
        <Link
          href="/"
          className="font-display font-medium text-[23px] tracking-[0.13em] text-ink no-underline whitespace-nowrap"
        >
          CADE BARONE
        </Link>

        <div className="flex flex-1 items-center justify-end gap-[clamp(14px,2vw,32px)] min-w-[260px] max-[640px]:basis-full max-[640px]:justify-start max-[640px]:overflow-x-auto max-[640px]:pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <nav className="flex items-center gap-[clamp(14px,2vw,32px)]">
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
            className="text-sm font-semibold tracking-[0.14em] text-ink bg-transparent border border-gold/70 rounded-[6px] px-4 py-2 cursor-pointer whitespace-nowrap transition-colors duration-150 hover:border-gold hover:bg-gold/10"
          >
            CONTACT
          </button>
        </div>
      </div>
    </header>
  );
}
