"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-cream/[0.92] backdrop-blur-md border-b border-border-subtle">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-6 px-[clamp(20px,5vw,56px)] py-[18px]">
          <Link
            href="/"
            className="font-display font-medium text-[23px] tracking-[0.13em] text-ink no-underline whitespace-nowrap"
          >
            CADE BARONE
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-[clamp(14px,2vw,32px)]">
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

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex flex-col gap-[5px] w-8 h-8 items-center justify-center"
          >
            <span className="block w-6 h-[2px] bg-ink" />
            <span className="block w-6 h-[2px] bg-ink" />
            <span className="block w-6 h-[2px] bg-ink" />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay — rendered as a header sibling, not a child, because
          the header's backdrop-blur creates a containing block that would otherwise
          clip a nested `fixed` element to the header's own (small) box. */}
      <div
        className={`fixed inset-0 z-[60] bg-navy overflow-y-auto transition-opacity duration-200 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-[clamp(20px,5vw,56px)] py-[18px] border-b border-pale-blue/[0.14]">
          <Link
            href="/"
            onClick={closeMenu}
            className="font-display font-medium text-[23px] tracking-[0.13em] text-cream no-underline"
          >
            CADE BARONE
          </Link>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="text-cream text-3xl leading-none w-8 h-8 flex items-center justify-center"
          >
            &times;
          </button>
        </div>

        <nav className="flex flex-col px-[clamp(20px,5vw,56px)] py-8 gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-4 text-xl font-semibold tracking-[0.05em] text-cream no-underline border-b border-pale-blue/[0.14]"
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => setMobileServicesOpen((v) => !v)}
            className="py-4 flex items-center justify-between text-xl font-semibold tracking-[0.05em] text-cream border-b border-pale-blue/[0.14]"
          >
            SERVICES
            <span
              className={`text-gold transition-transform duration-200 ${
                mobileServicesOpen ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>
          {mobileServicesOpen && (
            <div className="flex flex-col pl-4 gap-1">
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="py-3 text-base font-semibold tracking-[0.05em] text-pale-blue no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          {TRAILING_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-4 text-xl font-semibold tracking-[0.05em] text-cream no-underline border-b border-pale-blue/[0.14]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-8 text-center font-bold text-base tracking-[0.05em] text-ink bg-gold rounded-[7px] px-[38px] py-4 no-underline"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </>
  );
}
