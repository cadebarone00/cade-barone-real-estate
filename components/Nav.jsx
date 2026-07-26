"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const LINKS = [
  { href: "/", label: "ABOUT" },
  { href: "/services", label: "SERVICES" },
  { href: "/listings", label: "LISTINGS" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
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
      <header className="relative z-40">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-6 px-[clamp(20px,5vw,56px)] py-[clamp(20px,2.4vw,32px)]">
          <Link href="/" className="shrink-0">
            {/* TODO: swap for the real Crown Homes logo file */}
            <ImagePlaceholder label="Crown Homes Logo" className="h-10 w-[160px]" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {LINKS.map((link) => {
              const isActive =
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-semibold tracking-[0.14em] no-underline whitespace-nowrap py-1 ${
                    isActive
                      ? "text-ink after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-gold"
                      : "text-grey-text hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex flex-col gap-[5px] w-8 h-8 items-center justify-center shrink-0"
          >
            <span className="block w-6 h-[2px] bg-ink" />
            <span className="block w-6 h-[2px] bg-ink" />
            <span className="block w-6 h-[2px] bg-ink" />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay — rendered as a header sibling so it isn't
          clipped by any containing-block side effects from the header. */}
      <div
        className={`fixed inset-0 z-[60] bg-navy overflow-y-auto transition-opacity duration-200 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-[clamp(20px,5vw,56px)] py-[18px] border-b border-pale-blue/[0.14]">
          <Link
            href="/"
            onClick={closeMenu}
            className="font-display font-medium text-lg tracking-[0.14em] text-cream no-underline"
          >
            CROWN HOMES
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
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="py-4 text-xl font-semibold tracking-[0.05em] text-cream no-underline border-b border-pale-blue/[0.14]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
