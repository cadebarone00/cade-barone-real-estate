# Site Simplification Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Collapse the current multi-page Next.js site into 4 destinations (About/Home, Services with 4 sub-pages, Listings, Contact), remove the popup contact modal in favor of a dedicated Contact page, and delete everything made obsolete by the simplification.

**Architecture:** This is a Next.js 16 App Router project with no test framework and no TypeScript — verification per task is `npm run lint` (eslint-config-next, catches unused imports/broken JSX) followed by `npm run build` (catches broken imports/exports and route collisions). The final task adds a manual dev-server smoke check across every route. No new dependencies are introduced.

**Tech Stack:** Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4 (custom theme tokens in `app/globals.css`), Framer Motion (via existing `FadeUp`/`StaggerGroup` components), Resend (existing `/api/contact` route, unchanged).

## Global Constraints

- Reuse existing Tailwind theme tokens only (`bg-navy`, `bg-cream`, `bg-cream-deep`, `text-gold`, `text-grey-text`, `font-display`, etc. — defined in `app/globals.css`). Do not invent new colors.
- Reuse existing animation components `FadeUp` and `StaggerGroup`/`StaggerItem` for entrance animation, matching the visual language of the rest of the site. Do not add new animation libraries.
- The "why you should / why you shouldn't work with me" section is plain stacked text — **no accordion, no bullets**, 5 sentences then 3 sentences, each its own paragraph.
- All client-provided placeholder content (hero photo, IDX URL, the 8 reason sentences, per-category process copy where noted) must be stored as plain constants at the top of the file, clearly marked with a `// TODO:` comment, so the client can find and edit them without touching JSX.
- IDX placeholder URL is exactly `"#idx-link-tbd"` everywhere it's used, so it's a single find-and-replace later.
- Footer must include the brokerage line **"Crown Homes Real Estate"** and **"500 N Central Expwy, Plano, TX"** as plain text (no zip, no office phone — left for the client to add later).
- No new npm dependencies.
- Every task's verify step is `npm run lint` then `npm run build`, run from the project root (`c:\Users\Owner\Documents\GitHub\cade-barone-real-estate`).

---

### Task 1: Rewrite Nav — new site map + Services dropdown

**Files:**
- Modify: `components/Nav.jsx` (full rewrite)

**Interfaces:**
- Consumes: nothing new (drops its `useContactModal` dependency).
- Produces: `Nav` (default export, no props) — unchanged call signature, so no other file needs to change because of this task. Routes it links to: `/`, `/services`, `/services/buying`, `/services/selling`, `/services/renting`, `/services/landlords`, `/listings`, `/contact`.

- [ ] **Step 1: Replace the file contents**

```jsx
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
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: no errors.

Note: `npm run build` will still fail at this point because other files (`Footer.jsx`, `app/page.js`) still reference `components/ContactModal.jsx`, which is untouched so far — that's expected and gets fixed in Tasks 2–3. Do not run `npm run build` yet.

- [ ] **Step 3: Commit**

```bash
git add components/Nav.jsx
git commit -m "Rewrite nav for About/Services/Listings/Contact site map"
```

---

### Task 2: Rewrite Footer — new links, brokerage info, drop modal

**Files:**
- Modify: `components/Footer.jsx` (full rewrite)

**Interfaces:**
- Consumes: nothing new (drops `useContactModal`; no longer needs `"use client"`).
- Produces: `Footer` (default export, no props) — unchanged call signature.

- [ ] **Step 1: Replace the file contents**

```jsx
import Link from "next/link";

export default function Footer() {
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
          <Link
            href="/contact"
            className="inline-block font-bold text-sm tracking-[0.05em] text-ink bg-gold rounded-md px-6 py-3 no-underline transition-colors duration-150 hover:bg-gold-hover"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <div>
          <div className="text-xs font-semibold tracking-[0.18em] text-gold mb-[18px]">
            EXPLORE
          </div>
          <div className="flex flex-col gap-3 text-[15px]">
            <Link href="/" className="text-footer-text no-underline hover:text-cream">
              About
            </Link>
            <Link href="/services" className="text-footer-text no-underline hover:text-cream">
              Services
            </Link>
            <Link href="/listings" className="text-footer-text no-underline hover:text-cream">
              Listings
            </Link>
            <Link href="/contact" className="text-footer-text no-underline hover:text-cream">
              Contact
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
            {/* TODO: add office zip code and office phone number once provided */}
            <span className="text-footer-muted">
              Crown Homes Real Estate
              <br />
              500 N Central Expwy, Plano, TX
            </span>
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
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: no errors. (`npm run build` still expected to fail — `app/page.js` and `app/services/page.js` still reference deleted-in-a-later-task modal/form components. Fixed by Task 3 onward.)

- [ ] **Step 3: Commit**

```bash
git add components/Footer.jsx
git commit -m "Rewrite footer with new site map and Crown Homes brokerage info"
```

---

### Task 3: Rewrite the Home page (`/`) — hero, IDX quick link, reasons

**Files:**
- Modify: `app/page.js` (full rewrite)

**Interfaces:**
- Consumes: `Nav` (Task 1), `Footer` (Task 2), `FadeUp` (existing, `{children, delay?, className?}`).
- Produces: default export `HomePage` — route `/`. Drops its `OpenContactButton` usage, so `components/OpenContactButton.jsx` has zero remaining consumers after this task (verified in Task 5).

- [ ] **Step 1: Replace the file contents**

```jsx
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export const metadata = {
  title: "About",
  description:
    "Cade Barone — Dallas real estate agent with Crown Homes Real Estate. Find a property, see why clients work with him, and get in touch.",
};

// TODO: replace with your own copy once you send it over
const REASONS_TO = [
  "Placeholder — reason 1 you should work with me.",
  "Placeholder — reason 2 you should work with me.",
  "Placeholder — reason 3 you should work with me.",
  "Placeholder — reason 4 you should work with me.",
  "Placeholder — reason 5 you should work with me.",
];

// TODO: replace with your own copy once you send it over
const REASONS_NOT_TO = [
  "Placeholder — reason 1 you shouldn't work with me.",
  "Placeholder — reason 2 you shouldn't work with me.",
  "Placeholder — reason 3 you shouldn't work with me.",
];

// TODO: swap for your real Crown Homes IDX link
const IDX_URL = "#idx-link-tbd";

export default function HomePage() {
  return (
    <>
      <Nav />

      <main>
        {/* HERO */}
        <section className="relative bg-navy overflow-hidden">
          <div className="relative w-full aspect-[16/9] min-[900px]:aspect-[21/9]">
            <Image
              src="/cade-kitchen-hero.jpg"
              alt="Cade Barone"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,32,47,0.75),rgba(22,32,47,0.15))]" />
          </div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-[1280px] w-full mx-auto px-[clamp(20px,5vw,56px)]">
              <FadeUp>
                <h1 className="m-0 font-display font-medium text-[clamp(48px,9vw,120px)] leading-[0.98] tracking-[0.01em] text-cream">
                  CADE
                  <br />
                  BARONE
                </h1>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* QUICK LINK */}
        <section className="bg-cream-deep">
          <div className="max-w-[760px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(48px,6vw,80px)] text-center">
            <FadeUp>
              <h2 className="m-0 mb-4 font-display font-medium text-[clamp(26px,3vw,36px)] leading-[1.15] text-ink">
                Want to find a property?
              </h2>
              <p className="m-0 mb-8 text-lg leading-[1.7] text-grey-text">
                Search live listings in your area on my Crown Homes site.
              </p>
              <a
                href={IDX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold text-base tracking-[0.05em] text-ink bg-gold rounded-[7px] px-[38px] py-4 no-underline transition-colors duration-150 hover:bg-gold-hover"
              >
                Search Listings
              </a>
            </FadeUp>
          </div>
        </section>

        {/* REASONS */}
        <section className="bg-white">
          <div className="max-w-[760px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)]">
            <FadeUp>
              <h2 className="m-0 mb-7 font-display font-medium text-[clamp(28px,3.4vw,40px)] leading-[1.15] text-ink">
                Why you should work with me
              </h2>
              <div className="flex flex-col gap-4 mb-16">
                {REASONS_TO.map((reason, i) => (
                  <p key={i} className="m-0 text-lg leading-[1.7] text-grey-text">
                    {reason}
                  </p>
                ))}
              </div>
            </FadeUp>

            <FadeUp>
              <h2 className="m-0 mb-7 font-display font-medium text-[clamp(28px,3.4vw,40px)] leading-[1.15] text-ink">
                Why you shouldn&apos;t work with me
              </h2>
              <div className="flex flex-col gap-4">
                {REASONS_NOT_TO.map((reason, i) => (
                  <p key={i} className="m-0 text-lg leading-[1.7] text-grey-text">
                    {reason}
                  </p>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: no errors. (`npm run build` still expected to fail — `app/services/page.js` still imports `components/ServiceContactForm.jsx`, untouched until Task 7. Skip build for now.)

- [ ] **Step 3: Commit**

```bash
git add app/page.js
git commit -m "Rebuild home page as About/Home: hero, IDX quick link, reasons section"
```

---

### Task 4: Drop the contact modal provider from the root layout

**Files:**
- Modify: `app/layout.js`

**Interfaces:**
- Consumes: nothing new.
- Produces: `RootLayout` unchanged call signature, no longer wraps children in `ContactModalProvider`.

- [ ] **Step 1: Replace the file contents**

```jsx
import { Source_Serif_4, Mulish } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
    <html lang="en" className={`${sourceSerif.variable} ${mulish.variable}`}>
      <body className="bg-cream text-ink font-body">{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: no errors. (`npm run build` still expected to fail — `app/services/page.js` still imports `ServiceContactForm`. Skip build for now.)

- [ ] **Step 3: Commit**

```bash
git add app/layout.js
git commit -m "Remove ContactModalProvider from root layout"
```

---

### Task 5: Delete the contact modal and its open-button

**Files:**
- Delete: `components/ContactModal.jsx`
- Delete: `components/OpenContactButton.jsx`

**Interfaces:**
- Consumes: confirmation (via grep) that no file imports `ContactModal`, `useContactModal`, `ContactModalProvider`, or `OpenContactButton` anymore.
- Produces: nothing (removal only).

- [ ] **Step 1: Confirm there are no remaining references**

Run: `grep -rn "ContactModal\|OpenContactButton" --include="*.js" --include="*.jsx" app components`
Expected: no output (Tasks 1–4 already removed every usage; the only matches should be inside the two files being deleted in this task — if `grep` is unavailable, use the Grep tool instead with pattern `ContactModal|OpenContactButton`, glob `**/*.{js,jsx}`, and confirm the only matches are `components/ContactModal.jsx` and `components/OpenContactButton.jsx` themselves).

- [ ] **Step 2: Delete the files**

```bash
rm components/ContactModal.jsx components/OpenContactButton.jsx
```

- [ ] **Step 3: Verify**

Run: `npm run lint && npm run build`
Expected: both succeed. This is the first full build since Task 1 — it should now pass except for the still-outstanding `ServiceContactForm` import in `app/services/page.js`, which is fixed next in Task 7. If `npm run build` fails with an error unrelated to `ServiceContactForm`, stop and fix it before continuing.

- [ ] **Step 4: Commit**

```bash
git add -u components/ContactModal.jsx components/OpenContactButton.jsx
git commit -m "Delete contact modal system, replaced by dedicated /contact page"
```

---

### Task 6: Add a shared `ProcessSteps` component

**Files:**
- Create: `components/ProcessSteps.jsx`

**Interfaces:**
- Consumes: `StaggerGroup`, `StaggerItem` from `@/components/StaggerGroup` (existing, unchanged).
- Produces: default export `ProcessSteps({ steps })` where `steps` is `Array<{ n: number, title: string, body: string }>`. Consumed by Task 9's four Services sub-pages.

- [ ] **Step 1: Create the file**

```jsx
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";

export default function ProcessSteps({ steps }) {
  return (
    <StaggerGroup className="flex flex-col gap-[38px]">
      {steps.map((step) => (
        <StaggerItem
          key={step.n}
          className="grid grid-cols-[48px_1fr] min-[520px]:grid-cols-[56px_1fr] gap-[18px] min-[520px]:gap-[22px] items-start"
        >
          <div className="w-12 h-12 min-[520px]:w-[52px] min-[520px]:h-[52px] rounded-full bg-navy text-gold font-display text-[21px] flex items-center justify-center flex-shrink-0 shadow-[0_10px_24px_rgba(22,32,47,0.12)]">
            {step.n}
          </div>
          <div>
            <h3 className="m-0 mb-2.5 font-display italic font-medium text-2xl text-navy">
              {step.title}
            </h3>
            <p className="m-0 text-base leading-[1.7] text-grey-text max-w-[540px]">
              {step.body}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: no errors. (Not yet imported anywhere, so `npm run build` has nothing new to check — safe to skip until Task 9 wires it in.)

- [ ] **Step 3: Commit**

```bash
git add components/ProcessSteps.jsx
git commit -m "Add shared ProcessSteps component for services sub-pages"
```

---

### Task 7: Rewrite the Services overview page

**Files:**
- Modify: `app/services/page.js` (full rewrite)

**Interfaces:**
- Consumes: `Nav` (Task 1), `Footer` (Task 2), `FadeUp`, `StaggerGroup`/`StaggerItem` (existing).
- Produces: default export `ServicesPage` — route `/services`, linking to `/services/buying`, `/services/selling`, `/services/renting`, `/services/landlords` (created in Task 9 — routes not live yet, that's fine, `Link` doesn't require the target to exist at build time). Drops its `ServiceContactForm` usage, so `components/ServiceContactForm.jsx` has zero remaining consumers after this task (verified in Task 8).

- [ ] **Step 1: Replace the file contents**

```jsx
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import { StaggerGroup, StaggerItem } from "@/components/StaggerGroup";

export const metadata = {
  title: "Services",
  description:
    "Buying, selling, renting, and landlord representation with Cade Barone across Dallas, TX.",
};

const CATEGORIES = [
  {
    href: "/services/buying",
    label: "Buying",
    body: "A clear plan from the first conversation to the closing table.",
  },
  {
    href: "/services/selling",
    label: "Selling",
    body: "A polished listing process designed to maximize your return.",
  },
  {
    href: "/services/renting",
    label: "Renting",
    body: "Guidance finding the right rental, without the runaround.",
  },
  {
    href: "/services/landlords",
    label: "Landlords",
    body: "Support marketing, screening, and filling your property.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />

      <main>
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(28px,3.5vw,44px)] text-center">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[10px]">
                DALLAS REAL ESTATE · SERVICES
              </div>
              <h1 className="m-0 font-display font-medium text-[clamp(36px,4.8vw,58px)] leading-[1.04] text-cream">
                HOW I <em className="italic">can</em> HELP
              </h1>
            </FadeUp>
          </div>
        </section>

        <section className="bg-cream-deep">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)]">
            <StaggerGroup className="grid grid-cols-1 min-[640px]:grid-cols-2 gap-6">
              {CATEGORIES.map((cat) => (
                <StaggerItem key={cat.href}>
                  <Link
                    href={cat.href}
                    className="block h-full bg-white rounded-[10px] border border-border-subtle px-8 py-9 no-underline transition-colors duration-150 hover:border-gold/60"
                  >
                    <h2 className="m-0 mb-2.5 font-display italic font-medium text-2xl text-navy">
                      {cat.label}
                    </h2>
                    <p className="m-0 text-base leading-[1.7] text-grey-text">
                      {cat.body}
                    </p>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: no errors. (`npm run build` will now succeed for the whole app up to this point — safe to run; the four category links point to routes that don't exist yet, which is not a build error in Next.js.)

- [ ] **Step 3: Commit**

```bash
git add app/services/page.js
git commit -m "Rebuild services overview page as a 4-category link grid"
```

---

### Task 8: Delete the old service contact form

**Files:**
- Delete: `components/ServiceContactForm.jsx`

**Interfaces:**
- Consumes: confirmation (via grep) that no file imports `ServiceContactForm` anymore.
- Produces: nothing (removal only).

- [ ] **Step 1: Confirm there are no remaining references**

Run: `grep -rn "ServiceContactForm" --include="*.js" --include="*.jsx" app components`
Expected: only the definition inside `components/ServiceContactForm.jsx` itself (or use the Grep tool with pattern `ServiceContactForm`, glob `**/*.{js,jsx}`, and confirm the same).

- [ ] **Step 2: Delete the file**

```bash
rm components/ServiceContactForm.jsx
```

- [ ] **Step 3: Verify**

Run: `npm run lint && npm run build`
Expected: both succeed.

- [ ] **Step 4: Commit**

```bash
git add -u components/ServiceContactForm.jsx
git commit -m "Delete unused ServiceContactForm component"
```

---

### Task 9: Create the four Services sub-pages

**Files:**
- Create: `app/services/buying/page.js`
- Create: `app/services/selling/page.js`
- Create: `app/services/renting/page.js`
- Create: `app/services/landlords/page.js`

**Interfaces:**
- Consumes: `Nav` (Task 1), `Footer` (Task 2), `FadeUp` (existing), `ProcessSteps({ steps })` (Task 6).
- Produces: default-exported page components for routes `/services/buying`, `/services/selling`, `/services/renting`, `/services/landlords` — the routes `app/services/page.js` (Task 7) already links to.

- [ ] **Step 1: Create `app/services/buying/page.js`**

```jsx
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata = {
  title: "Buying",
  description: "The home buying process with Cade Barone in Dallas, TX.",
};

const STEPS = [
  {
    n: 1,
    title: "Consultation",
    body: "We'll discuss your goals, budget, timeline, and must-haves so I can create a personalized buying strategy.",
  },
  {
    n: 2,
    title: "Pre-Approval",
    body: "I'll connect you with trusted lenders to secure your financing and position you to act quickly when the right home becomes available.",
  },
  {
    n: 3,
    title: "Home Search",
    body: "Together we'll tour homes, evaluate neighborhoods, analyze market value, and identify the property that's the best fit for your lifestyle and investment goals.",
  },
  {
    n: 4,
    title: "Protect & Close",
    body: "From negotiations to option periods, inspections, appraisal, escrow, financing, and closing, I'll guide and protect you through every step so you can purchase with confidence.",
  },
];

export default function BuyingPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(28px,3.5vw,44px)] text-center">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[10px]">
                DALLAS REAL ESTATE · BUYING
              </div>
              <h1 className="m-0 font-display font-medium text-[clamp(36px,4.8vw,58px)] leading-[1.04] text-cream">
                BUYING <em className="italic">with</em> CONFIDENCE
              </h1>
            </FadeUp>
          </div>
        </section>

        <section className="bg-cream">
          <div className="max-w-[720px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)]">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">
                THE PROCESS
              </div>
            </FadeUp>
            <ProcessSteps steps={STEPS} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Create `app/services/selling/page.js`**

```jsx
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata = {
  title: "Selling",
  description: "The home selling process with Cade Barone in Dallas, TX.",
};

const STEPS = [
  {
    n: 1,
    title: "Pricing Strategy",
    body: "We'll evaluate your home, analyze the market, and develop a pricing strategy designed to maximize your return.",
  },
  {
    n: 2,
    title: "Luxury Marketing",
    body: "Your home will receive a custom marketing campaign featuring professional photography, cinematic video, digital advertising, social media exposure, and maximum online visibility to attract qualified buyers.",
  },
  {
    n: 3,
    title: "Negotiate Offers",
    body: "I'll present every offer, negotiate the strongest terms, and help you make informed decisions that protect your bottom line.",
  },
  {
    n: 4,
    title: "Contract to Close",
    body: "I'll manage inspections, repairs, appraisal, escrow, and every transaction detail to deliver a smooth, successful closing.",
  },
];

export default function SellingPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(28px,3.5vw,44px)] text-center">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[10px]">
                DALLAS REAL ESTATE · SELLING
              </div>
              <h1 className="m-0 font-display font-medium text-[clamp(36px,4.8vw,58px)] leading-[1.04] text-cream">
                SELLING <em className="italic">with</em> STRATEGY
              </h1>
            </FadeUp>
          </div>
        </section>

        <section className="bg-cream">
          <div className="max-w-[720px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)]">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">
                THE PROCESS
              </div>
            </FadeUp>
            <ProcessSteps steps={STEPS} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 3: Create `app/services/renting/page.js`**

```jsx
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata = {
  title: "Renting",
  description: "The rental process with Cade Barone in Dallas, TX.",
};

// TODO: replace with your real renting process copy
const STEPS = [
  {
    n: 1,
    title: "Consultation",
    body: "TODO: replace with your renting process copy.",
  },
  {
    n: 2,
    title: "Search & Tour",
    body: "TODO: replace with your renting process copy.",
  },
  {
    n: 3,
    title: "Application",
    body: "TODO: replace with your renting process copy.",
  },
  {
    n: 4,
    title: "Move-In",
    body: "TODO: replace with your renting process copy.",
  },
];

export default function RentingPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(28px,3.5vw,44px)] text-center">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[10px]">
                DALLAS REAL ESTATE · RENTING
              </div>
              <h1 className="m-0 font-display font-medium text-[clamp(36px,4.8vw,58px)] leading-[1.04] text-cream">
                RENTING <em className="italic">made</em> SIMPLE
              </h1>
            </FadeUp>
          </div>
        </section>

        <section className="bg-cream">
          <div className="max-w-[720px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)]">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">
                THE PROCESS
              </div>
            </FadeUp>
            <ProcessSteps steps={STEPS} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 4: Create `app/services/landlords/page.js`**

```jsx
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata = {
  title: "Landlords",
  description: "Landlord representation with Cade Barone in Dallas, TX.",
};

// TODO: replace with your real landlord process copy
const STEPS = [
  {
    n: 1,
    title: "Consultation",
    body: "TODO: replace with your landlord process copy.",
  },
  {
    n: 2,
    title: "Marketing",
    body: "TODO: replace with your landlord process copy.",
  },
  {
    n: 3,
    title: "Screening",
    body: "TODO: replace with your landlord process copy.",
  },
  {
    n: 4,
    title: "Lease & Move-In",
    body: "TODO: replace with your landlord process copy.",
  },
];

export default function LandlordsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(28px,3.5vw,44px)] text-center">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[10px]">
                DALLAS REAL ESTATE · LANDLORDS
              </div>
              <h1 className="m-0 font-display font-medium text-[clamp(36px,4.8vw,58px)] leading-[1.04] text-cream">
                SUPPORT <em className="italic">for</em> LANDLORDS
              </h1>
            </FadeUp>
          </div>
        </section>

        <section className="bg-cream">
          <div className="max-w-[720px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(64px,8vw,112px)]">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-4">
                THE PROCESS
              </div>
            </FadeUp>
            <ProcessSteps steps={STEPS} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 5: Verify**

Run: `npm run lint && npm run build`
Expected: both succeed, and the build output lists all four new routes (`/services/buying`, `/services/selling`, `/services/renting`, `/services/landlords`).

- [ ] **Step 6: Commit**

```bash
git add app/services/buying app/services/selling app/services/renting app/services/landlords
git commit -m "Add Buying/Selling/Renting/Landlords services sub-pages"
```

---

### Task 10: Create the Listings page

**Files:**
- Create: `app/listings/page.js`

**Interfaces:**
- Consumes: `Nav` (Task 1), `Footer` (Task 2), `FadeUp` (existing), `ImagePlaceholder({ label, className })` (existing, unchanged).
- Produces: default export `ListingsPage` — route `/listings` (already linked from Nav's `TRAILING_LINKS` in Task 1).

- [ ] **Step 1: Create the file**

```jsx
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata = {
  title: "Listings",
  description: "Active Crown Homes Texas listings with Cade Barone in Dallas, TX.",
};

// TODO: swap for your real Crown Homes IDX link
const IDX_URL = "#idx-link-tbd";

// TODO: replace with real agent listings once available
const AGENT_LISTINGS = [
  { id: 1, label: "Listing photo" },
  { id: 2, label: "Listing photo" },
  { id: 3, label: "Listing photo" },
];

export default function ListingsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(28px,3.5vw,44px)] text-center">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[10px]">
                DALLAS REAL ESTATE · LISTINGS
              </div>
              <h1 className="m-0 mb-5 font-display font-medium text-[clamp(36px,4.8vw,58px)] leading-[1.04] text-cream">
                CROWN HOMES <em className="italic">Texas</em> LISTINGS
              </h1>
              <a
                href={IDX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold text-base tracking-[0.05em] text-ink bg-gold rounded-[7px] px-[38px] py-4 no-underline transition-colors duration-150 hover:bg-gold-hover"
              >
                Want to see all the listings in your area?
              </a>
            </FadeUp>
          </div>
        </section>

        <section className="bg-cream">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(56px,7vw,96px)]">
            <FadeUp>
              <h2 className="m-0 mb-6 font-display font-medium text-[clamp(26px,3vw,36px)] leading-[1.15] text-ink">
                My Listings
              </h2>
              <p className="m-0 text-lg leading-[1.7] text-grey-text">
                No active listings at this time — check back soon.
              </p>
            </FadeUp>
          </div>
        </section>

        <section className="bg-cream-deep">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(56px,7vw,96px)]">
            <FadeUp>
              <h2 className="m-0 mb-8 font-display font-medium text-[clamp(26px,3vw,36px)] leading-[1.15] text-ink">
                Agent Listings
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 min-[560px]:grid-cols-2 min-[900px]:grid-cols-3 gap-6">
              {AGENT_LISTINGS.map((listing) => (
                <ImagePlaceholder
                  key={listing.id}
                  label={listing.label}
                  className="w-full aspect-[4/3] rounded-[10px]"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run lint && npm run build`
Expected: both succeed, build output includes `/listings`.

- [ ] **Step 3: Commit**

```bash
git add app/listings
git commit -m "Add Listings page with IDX banner, My Listings, and Agent Listings"
```

---

### Task 11: Create the Contact page

**Files:**
- Create: `app/contact/page.js`

**Interfaces:**
- Consumes: `Nav` (Task 1), `Footer` (Task 2), `FadeUp` (existing), the existing `POST /api/contact` route (`app/api/contact/route.js`, unchanged) which accepts JSON `{ name, email, phone?, service?, message? }` and returns `{ success: true }` or `{ error: string }`.
- Produces: default export `ContactPage` — route `/contact` (already linked from Nav in Task 1 and Footer in Task 2).

- [ ] **Step 1: Create the file**

```jsx
"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

const LOOKING_FOR_OPTIONS = ["Buying", "Selling", "Renting", "Landlord", "Just looking"];

const inputClass =
  "w-full bg-white border border-border-input rounded-[7px] px-[14px] py-3 text-ink placeholder:text-grey-text/60 text-[15px] focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(194,161,77,0.18)] transition-colors duration-150";

const labelClass = "block text-xs font-semibold tracking-[0.1em] text-grey-text mb-2";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function set(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Nav />
      <main>
        <section className="bg-navy">
          <div className="max-w-[1280px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(28px,3.5vw,44px)] text-center">
            <FadeUp>
              <div className="text-xs font-semibold tracking-[0.2em] text-gold mb-[10px]">
                DALLAS REAL ESTATE · CONTACT
              </div>
              <h1 className="m-0 font-display font-medium text-[clamp(36px,4.8vw,58px)] leading-[1.04] text-cream">
                LET&apos;S <em className="italic">talk</em>
              </h1>
            </FadeUp>
          </div>
        </section>

        <section className="bg-cream">
          <div className="max-w-[560px] mx-auto px-[clamp(20px,5vw,56px)] py-[clamp(56px,7vw,96px)]">
            {status === "success" ? (
              <FadeUp>
                <div className="text-center py-10">
                  <h2 className="font-display font-medium text-[clamp(28px,3vw,38px)] text-ink mb-3">
                    Thank you — talk soon.
                  </h2>
                  <p className="text-grey-text text-lg">
                    I&apos;ll reach out within one business day.
                  </p>
                </div>
              </FadeUp>
            ) : (
              <FadeUp>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className={labelClass}>Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={set("name")}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Phone</label>
                    <input
                      type="tel"
                      placeholder="(000) 000-0000"
                      value={form.phone}
                      onChange={set("phone")}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={set("email")}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>What are you looking for?</label>
                    <select
                      required
                      value={form.service}
                      onChange={set("service")}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      {LOOKING_FOR_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-1 font-bold text-[15px] tracking-[0.05em] text-ink bg-gold rounded-[7px] py-[15px] cursor-pointer transition-colors duration-150 hover:bg-gold-hover disabled:opacity-60"
                  >
                    {status === "loading" ? "Sending…" : "Send Message"}
                  </button>

                  {status === "error" && (
                    <p className="text-sm text-red-600">
                      Something went wrong. Please email me directly at
                      cadebarone00@gmail.com.
                    </p>
                  )}
                </form>
              </FadeUp>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify**

Run: `npm run lint && npm run build`
Expected: both succeed, build output includes `/contact`.

- [ ] **Step 3: Commit**

```bash
git add app/contact
git commit -m "Add dedicated Contact page (name/phone/email/looking-for)"
```

---

### Task 12: Delete obsolete routes and components

**Files:**
- Delete: `app/about/`, `app/journal/`, `app/landlords/`, `app/property-management/`, `app/renters/`, `app/sellers/` (entire folders)
- Delete: `components/FramedPhoto.jsx`, `components/SectionTitle.jsx`, `components/UmhbPhotoStack.jsx`, `components/BuyersReels.jsx`, `components/ComingSoon.jsx`

**Interfaces:**
- Consumes: confirmation (via grep) that nothing outside the files being deleted references these components. (The route folders are self-contained pages, safe to delete outright — nothing else imports a `page.js`.)
- Produces: nothing (removal only).

- [ ] **Step 1: Confirm the components have no remaining references**

Run: `grep -rln "FramedPhoto\|SectionTitle\|UmhbPhotoStack\|BuyersReels\|ComingSoon" --include="*.js" --include="*.jsx" app components`
Expected: only the six files about to be deleted (`app/about/page.js`, `app/journal/page.js`, `app/landlords/page.js`, `app/property-management/page.js`, `app/renters/page.js`, `app/sellers/page.js` reference `ComingSoon`; `app/about/page.js` references `FramedPhoto`/`SectionTitle`/`UmhbPhotoStack`) plus the component definition files themselves. If any other file shows up, stop and investigate before deleting.

- [ ] **Step 2: Delete the obsolete route folders and components**

```bash
rm -rf app/about app/journal app/landlords app/property-management app/renters app/sellers
rm components/FramedPhoto.jsx components/SectionTitle.jsx components/UmhbPhotoStack.jsx components/BuyersReels.jsx components/ComingSoon.jsx
```

- [ ] **Step 3: Verify**

Run: `npm run lint && npm run build`
Expected: both succeed. Build output should no longer list `/about`, `/journal`, `/landlords`, `/property-management`, `/renters`, or `/sellers`.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "Delete legacy routes and components superseded by the new site map"
```

---

### Task 13: Full site smoke test

**Files:** none (verification only)

**Interfaces:** none.

- [ ] **Step 1: Start the dev server in the background**

Run: `npm run dev` (background)
Wait for `✓ Ready` in the output before continuing.

- [ ] **Step 2: Check every live route returns 200**

```bash
for path in / /services /services/buying /services/selling /services/renting /services/landlords /listings /contact; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000$path")
  echo "$path -> $code"
done
```

Expected: every line prints `-> 200`.

- [ ] **Step 3: Confirm the deleted routes now 404**

```bash
for path in /about /journal /landlords /property-management /renters /sellers; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000$path")
  echo "$path -> $code"
done
```

Expected: every line prints `-> 404`.

- [ ] **Step 4: Spot-check page content**

```bash
curl -s http://localhost:3000/ | grep -o "CADE" | head -1
curl -s http://localhost:3000/ | grep -o "Why you should work with me"
curl -s http://localhost:3000/ | grep -o "Why you shouldn.t work with me"
curl -s http://localhost:3000/services/buying | grep -o "Home Search"
curl -s http://localhost:3000/listings | grep -o "No active listings at this time"
curl -s http://localhost:3000/contact | grep -o "What are you looking for?"
```

Expected: each command prints a match (non-empty output).

- [ ] **Step 5: Stop the dev server**

Stop the background `npm run dev` process started in Step 1.

- [ ] **Step 6: Report results**

No commit for this task — it's verification only. Summarize the route check and content check results to confirm the site is in the shape described in `docs/superpowers/specs/2026-07-24-site-simplification-design.md`.
