# Site Simplification — Design Spec

Date: 2026-07-24

## Goal

Collapse the current multi-page site (Home, About, Services, Journal,
Property Management, Renters, Sellers, Landlords) into a simple
4-destination site: **About** (also the homepage), **Services**
(Buying / Selling / Renting / Landlords sub-pages), **Listings**, and
**Contact**. Drop the popup contact modal in favor of a dedicated
Contact page. Keep everything easy for the client to hand-edit later
(placeholder content clearly marked, simple data structures).

## Site map

| Route | Purpose |
|---|---|
| `/` | About/Home hero + quick IDX link + reasons section + footer |
| `/services` | Overview page, 4 cards linking to sub-pages |
| `/services/buying` | Process for buyers |
| `/services/selling` | Process for sellers |
| `/services/renting` | Process for renters |
| `/services/landlords` | Process for landlords |
| `/listings` | IDX banner + My Listings (empty state) + Agent Listings (placeholder grid) |
| `/contact` | Name / Phone / Email / "What are you looking for?" form |

**Deleted:** `/about`, `/journal`, `/property-management`, `/renters`,
`/sellers`, `/landlords` (old top-level versions), the current
`/services` page content (replaced), the contact modal system
(`ContactModal.jsx`, `ContactModalProvider` usage in `layout.js`,
`OpenContactButton.jsx`), and components that become unused after the
sweep (`BuyersReels.jsx`, `UmhbPhotoStack.jsx`, `FramedPhoto.jsx`,
`ServiceContactForm.jsx`, `ComingSoon.jsx` — verify no remaining
imports before deleting each).

## Nav

`ABOUT` (→ `/`) · `SERVICES` (→ `/services`, with a hover/click
dropdown on desktop exposing direct links to the 4 sub-pages; on
mobile it's a plain link to the `/services` overview) · `LISTINGS` ·
`CONTACT`. The nav's "CONTACT" button and every other `OpenContactButton`
CTA site-wide (footer, hero, service pages) become plain links to
`/contact`.

## `/` — About/Home

Four sections only, in order:

1. **Hero** — landscape photo (`/cade-kitchen-hero.jpg`, reused as a
   placeholder until the client provides a real wide left-to-right
   photo) with the client's name large over/beside it.
2. **Quick link strip** — "Want to find a property?" one-liner + a
   button to the Crown Homes IDX site. IDX URL is a placeholder
   (`"#idx-link-tbd"`) marked with a comment so it's a trivial
   find-and-replace once the real link is provided.
3. **Reasons section** — NOT an accordion, always visible, plain
   stacked text:
   - Heading: "Why you should work with me" followed by 5 separated
     sentences (each its own short paragraph/line, no bullet glyphs).
   - Heading: "Why you shouldn't work with me" followed by 3
     separated sentences, same style.
   - All 8 sentences are placeholder copy for now (clearly marked
     `// TODO: replace with client-provided copy`), stored as two
     simple arrays so they're easy to swap out later.
4. **Footer.**

No bio/A&M/UMHB content carries over from the old About page.

## `/services` and sub-pages

- `/services`: short header + 4 cards (Buying / Selling / Renting /
  Landlords), each linking to its sub-page. This is the fallback for
  mobile users who don't get the hover dropdown.
- Each sub-page (`/services/buying`, `/selling`, `/renting`,
  `/landlords`): a **Process** section is the only content for now —
  a numbered-steps block (reusing the existing steps visual pattern
  already used on the buyer/services pages) with placeholder step
  titles/bodies per category, stored in a simple per-page data array
  so the client can edit it directly. Below the Process section,
  leave room (via the same data-array pattern) for the client to add
  brochures/PDFs/links later — no fake "coming soon" placeholder,
  that section simply doesn't render anything until content exists.

## `/listings`

- Top banner: "Want to see all the listings in your area?" → same
  IDX placeholder link as the homepage.
- **My Listings** — empty-state message (e.g. "No active listings at
  this time — check back soon").
- **Agent Listings** — placeholder card grid (fellow Crown Homes
  agents' listings), sample/placeholder cards for now, structured as
  a data array so it's swappable for a real IDX embed or manual
  entries later.

## `/contact`

- Fields: Name, Phone, Email, "What are you looking for?" (select:
  Buying / Selling / Renting / Landlord / Just looking). No message
  box — matches the client's simpler spec.
- Submits to the existing `/api/contact` Resend route (already wired
  to the client's email); the "looking for" value maps to the
  route's existing `service` field. No backend changes needed.

## Footer

Keep the current `Footer` component structure (columns, socials,
compliance bar), with these changes:
- Update the "EXPLORE" link list to the new site map (Home/About,
  Services, Listings, Contact).
- Swap the CTA button and "Contact" link from opening the modal to a
  plain link to `/contact`.
- Add brokerage info: **Crown Homes Real Estate — 500 N Central
  Expwy, Plano, TX**. Zip and office phone number are left off for
  now (client will provide later) — structured as plain text so
  they're a one-line edit to add.

## Placeholders & TODOs left for the client

- Hero photo (currently reusing `cade-kitchen-hero.jpg`)
- IDX website URL (currently `#idx-link-tbd`)
- 5 "why you should" + 3 "why you shouldn't" sentences
- Per-category Process step copy on each Services sub-page
- Brokerage zip code and office phone number in the footer
- Real listings data (My Listings + Agent Listings)

All of the above are stored as plain constants/arrays at the top of
their respective files or in small data objects, not buried in JSX,
so they're easy to find and edit later.
