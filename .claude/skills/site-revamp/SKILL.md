---
name: site-revamp
description: Use when asked to revamp, redesign, or rebuild a local business client's website from its current domain into a fast, non-generic Astro site on the site-starter template, hosted free on Cloudflare.
---

# Site revamp

Turns a client's existing website into a new site built on the **site-starter** template
(Astro + Tailwind, one content file, static output). Two approval gates: the design direction, then the preview.

Template repo: `<github-user>/site-starter` (replace with the real owner/name once; ask if unknown).

## 0. Set up the client repo
- Ask for, or confirm: the client's current domain, business name, and the new GitHub repo name.
- The repo is created from the template ("Use this template" on GitHub, by the user). In a cloud session,
  attach it with push access; in Claude Code, clone it locally.
- In the new repo: set `"name"` in `wrangler.jsonc` and `package.json` to `<client>-site`, run `npm install`.
- Read `README.md`, `CLAUDE.md` and `docs/INTAKE.md` before going further.

## 1. Intake (from the old site, then the client)
- Find every page: try `/sitemap.xml`, then follow the nav and footer links. Fetch each page. If a page
  comes back nearly empty (JavaScript builders like Wix, Base44, some Squarespace), read it with the browser instead.
- Fill `src/site.ts` from what the old site actually says. Set `isSample: false`. Never invent reviews,
  ratings, years, license numbers or stats; leave the field empty and add it to the open questions.
- Map every old URL to its new home in `public/_redirects`.
- Photos: use the client's real photos (from the old site, their Google Business Profile or social accounts,
  or a folder they share). Save to `src/assets/photos/` with the filenames used in `site.ts`.
  If none are available, keep the "Photo needed" frames. No stock or AI images of people or work.
- Write `docs/intake-<client>.md`: what the old site did well, what's missing, open questions for the client.

## 2. Direction (gate 1: get approval before building)
- Load the `frontend-design` skill (and `impeccable` if installed).
- Rewrite `DESIGN.md` for this client: brief, 4–6 named hex colors, type families and roles, an ASCII
  wireframe of the home page, alignment, three principles, and the **one** memorable element drawn from
  the client's trade. The sample's seasonal calendar is for landscapers only; remove sections that don't fit.
- Check the plan against the "avoid the defaults" list in `CLAUDE.md`. Change anything that matches and
  record what changed under "Checked against the AI defaults".
- Present the direction in a few lines (palette, type, the memorable element, the home page order) and
  wait for approval or feedback. On feedback, revise and present again.

## 3. Build
- Replace the tokens in `src/styles/global.css` and the font imports (install the chosen families with
  `npm i @fontsource-variable/<family>`; self-host, no Google Fonts request).
- Reshape `src/components/sections/` to match `DESIGN.md`. The sample sections are a starting structure,
  not the design: rewrite markup, reorder, delete or add sections as the plan says.
- Write copy from the client's real details: towns, services, prices, process, guarantees. Plain sentences.
- Fill `site.form` (Web3Forms access key from the client's inbox), `site.tracking.metaPixelId` if the client
  runs Meta ads, and replace `public/og.png` (1200×630) and `public/favicon.svg`.

## 4. QA (do all of it)
- `npm run build` passes.
- Screenshot home, one service page and contact at 390px and 1440px wide, and look at every screenshot.
  Fix anything awkward: overlong headlines, orphaned words, empty columns, sideways scroll on mobile.
- `npm run check:design`; fix real findings (static scans misreport Tailwind padding as cramped).
- Contrast AA for every text/background pair in the tokens; every page has its own title and description.
- Request each old URL from `_redirects` against the preview and confirm it lands on the right page.

## 5. Preview (gate 2: get approval before launch)
- Push to a branch other than `main`. If this client's repo isn't connected in Cloudflare yet, give the user
  the steps from the README ("Cloudflare project settings"); the dashboard work is theirs to do.
- Share the Cloudflare preview URL (Worker → Previews) with a short list of what changed and any open
  questions. Don't publish the client's site as a claude.ai artifact: previews go through the host.
- On feedback, revise, re-run QA, push again.

## 6. Launch
- After approval, merge to `main`.
- Walk the user through `docs/LAUNCH.md`. DNS and registrar changes happen only with the user's explicit
  go-ahead, after every existing DNS record (especially MX and TXT for email) has been exported.
- Run the "right after the switch" checks, then remind the user about the one-week follow-up.

## 7. Record
- Add a short entry to the client's context file or project: live URL, repo, host account owner,
  form inbox, pixel ID, launch date, open items.
