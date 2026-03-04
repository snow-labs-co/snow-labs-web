# Snow Labs Website — Remaining Tasks

## Content

- [ ] **Add project screenshots** — Capture real screenshots from each project and place them in `public/projects/`:
  - `public/projects/kismet.png` — Kismet Coffee Roasters storefront (shop or checkout page)
  - `public/projects/statline.png` — StatLine live game or stats screen
  - `public/projects/mypace.png` — MyPace dashboard or food tracking screen

  Once screenshots are in place, update the project card image areas in `src/components/Projects.tsx` to use `<Image>` tags instead of the placeholder block.

- [ ] **Wire project links** — Add live URLs and/or repo links to each project card (currently no external links in the cards).

## Infrastructure

- [ ] **Configure Resend for contact form** — Set these environment variables in the Vercel project settings:
  - `RESEND_API_KEY` — your Resend API key
  - `CONTACT_EMAIL` — address to receive contact form submissions
  - `CONTACT_FROM` — sender address (must be a verified Resend domain)

- [ ] **Set a custom domain** — Configure your domain in Vercel project settings (`snow-labs-web` → Domains).

## Enhancements (optional)

- [ ] **SEO / OG metadata** — Add Open Graph image and full meta tags in `src/app/layout.tsx` for social sharing previews.
- [ ] **Analytics** — Add Vercel Analytics or Plausible for visitor tracking.
- [ ] **Dark/light mode toggle** — Currently forced dark; could add a toggle if needed.
