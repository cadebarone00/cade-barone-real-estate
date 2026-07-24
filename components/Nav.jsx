"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [{ href: "/", label: "ABOUT" }];

const SERVICE_LINKS = [
  { href: "/services", label: "Overview" },
  { href: "/services/buying", label: "Buying" },
  { href: "/services/selling", label: "Selling" },
  { href: "/services/renting", label: "Renting" },
  { href: "/services/landlords", label: "Landlords" },
];

const TRAILING_LINKS = [{ href: "/listings", label: "LISTINGS" }];

export default function Nav() {
  const pathname = usePathname();
  const servicesActive = pathname.startsWith("/services");

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
            {NAV_LINKS.map((link) => {
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

            <details className="relative">
              <summary
                className={`list-none cursor-pointer text-sm font-semibold tracking-[0.14em] whitespace-nowrap py-1 ${
                  servicesActive ? "text-ink" : "text-grey-text"
                }`}
              >
                SERVICES
              </summary>
              <div className="absolute left-0 top-full mt-2 min-w-[180px] bg-cream border border-border-subtle rounded-[8px] shadow-[0_16px_40px_rgba(22,32,47,0.14)] py-2 flex flex-col z-10">
                {SERVICE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm font-semibold tracking-[0.05em] text-grey-text no-underline hover:text-ink hover:bg-cream-deep whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>

            {TRAILING_LINKS.map((link) => {
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

          <Link
            href="/contact"
            className="text-sm font-semibold tracking-[0.14em] text-ink bg-transparent border border-gold/70 rounded-[6px] px-4 py-2 no-underline whitespace-nowrap transition-colors duration-150 hover:border-gold hover:bg-gold/10"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  );
}
