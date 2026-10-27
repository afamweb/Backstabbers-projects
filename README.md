# The Backstabbers — Four-page Website

A responsive, interactive, deployable static website built from the supplied collective design and links.

## Pages

- `index.html`: Collective / home, with a functioning email-compose contact form.
- `syndicate.html`: All four member profiles, portfolios, mobile engineer email, résumé PDF.
- `projects.html`: Interactive project filter, live demos, and mobile case studies.
- `tech-matrix.html`: Technologies and collaboration matrix.

## Running locally

Double-click `index.html`, or for the best local preview start a server in this folder:

```bash
python -m http.server 8000
```

Open http://localhost:8000/ in your browser.

## Deploying

Upload the entire folder to a static host such as Vercel or Netlify. Keep the `assets` folder with the HTML files. For Vercel, create a project with this as the root directory; no build command is required. Existing live portfolio URLs are referenced externally and are not overwritten by this project.

## Real links already connected

- Ekene's portfolio: https://retro-portfolio-steel.vercel.app/
- Austine's portfolio: https://portfolio1-mocha-alpha.vercel.app/
- Austine's space website: https://portfolio1-mocha-alpha.vercel.app/space-x-main/home.html
- Austine's CyberWork website: https://portfolio1-mocha-alpha.vercel.app/CyberWork/index.html
- Austine's design concept: https://portfolio1-mocha-alpha.vercel.app/single-main/index.html
- Damilare GitHub: https://github.com/Dreymidroid
- Damilare's résumé: `assets/Adefemiwa-Damilare-Resume.pdf`

## Contact form behavior

The form is **mailto-based**: submission opens the visitor's email app with a prefilled draft. It **does not silently submit** and requires the visitor to press Send in their email app. The default collective inbox is `afamefuneaustine@gmail.com`. To change it, update `data-recipient` on the form in `index.html`, and update the contact links/text in the HTML. `assets/app.js` also contains a fallback address.

For inbox delivery without an email client, connect a form backend like Formspree, Netlify Forms or a serverless function; no backend is bundled.

## Content verification and caveats

- The supplied PDF identifies EstateGo as available on the Play Store and App Store, but no store listing URL was supplied. For accuracy it is treated as a résumé case study and not given an invented store link.
- The supplied PDF describes Wavezio as completed but pending launch. This distinction is preserved.
- The original site displayed unsourced throughput, uptime, client counts and other telemetry numbers. These are removed rather than advertised as verified facts.
- The artwork in `assets/images/` is original, self-contained SVG illustration. Team images are artistic representations, **not photographs or verified likenesses**. Project mockups are illustrative, **not actual screenshots** of the linked live projects.
- The two provided portfolio sites remain separate. This is a new collective website ready to deploy, not a direct update to existing Vercel deployments.

## Interaction and accessibility

Mobile navigation, active links, keyboard escape-to-close, project category filtering, field validation, contact email draft, email copy button, reduced motion support, skip link, responsive grids, and focus styles.

## Improvements in this build

- Consistent **Backstabbers** spelling throughout metadata, page headers, copy, form subject, assets, and ZIP name.
- Shared navigation and footer across all four pages, with correct active page links.
- Twelve original locally stored SVG illustrations (seven project graphics, four abstract member illustrations, and one decorative banner) so images do not rely on third-party image hosts.
- Repaired copy-email button. Added a working back-to-top button.
- Mobile layout and filtering are implemented without a build process.

## Before going live

- Review names, roles, content and authorizations for member bios and resumes.
- The contact form drafts email through visitors' local email app. To submit without an email app, configure an actual form delivery service.
- No production domain or live deployment is included in this ZIP.
