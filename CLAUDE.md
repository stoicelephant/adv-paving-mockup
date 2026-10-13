# Working in this repo

This repo is one client's website, started from the site starter. Read `README.md` for the layout.
For a full revamp, follow `.claude/skills/site-revamp/SKILL.md`.

## Ground rules

- **Content lives in `src/site.ts`.** Components read from it. Don't hard-code business facts in markup.
- **Design lives in `DESIGN.md` → `src/styles/global.css` tokens.** Components use token names
  (`bg-ground`, `text-ink`, `bg-accent`, `.display`, `.heading`), never raw hex values.
- **Never invent facts.** No made-up reviews, ratings, years in business, license numbers, awards,
  team members or stats. Leave the field empty and list it as a question for the client.
- **Never use stock or AI-generated photos of people, crews, or finished work.** Use the client's photos.
  If there are none, leave the "Photo needed" frame and say so.
- **Copy is plain and specific.** Short sentences, the client's real services, towns and prices.
  No "elevate", "seamless", "unlock", "transform your", "solutions", "we pride ourselves".
- **Keep what works.** Phone number, business name, Google Business Profile link, and every old URL
  (redirected in `public/_redirects`).

## Design: avoid the defaults

Before writing any visual code, load the `frontend-design` skill (and `impeccable` if installed) and write
`DESIGN.md`: 4–6 named hex colors, typefaces and their roles, an ASCII wireframe of the home page,
alignment, and the one memorable element. Then check the plan against this list. If any line describes
the plan and the client didn't ask for it, change that part and note why in `DESIGN.md`.

The look that reads as generated, regardless of subject:
1. Warm cream background with a high-contrast serif display and a terracotta accent
2. Near-black background with one acid-green or vermilion accent
3. Broadsheet layout: hairline rules, zero radius, dense newspaper columns
4. The SaaS card kit: everything in identical rounded cards, one radius everywhere, soft grey shadows, gradient washes
5. Template chrome: tracked ALL-CAPS eyebrow labels above headings, "A · B · C" meta strings,
   monospace data labels, "→" appended to buttons and links
6. Inter / Roboto / system fonts; purple-to-blue gradients; a thick colored border on one side of a card;
   fade-and-slide-up on every section; numbered 01/02/03 markers on content that isn't a sequence;
   one word of a headline in a different color or italic

What makes a local-business site feel human instead:
- The client's real photos, of their real jobs, in their real towns
- One distinctive idea drawn from the trade (a landscaper's seasonal calendar, a roofer's storm checklist,
  a detailer's before/after slider) and everything else quiet
- Type with a point of view, matched to the trade, used confidently at large sizes
- Specifics: prices or "from" prices, towns, response times, what's included, how the job goes

## Quality floor

- Works at 360px wide with no sideways page scroll; tap targets at least 44px
- Text contrast WCAG AA (4.5:1 body, 3:1 large); visible keyboard focus; `prefers-reduced-motion` respected
- Every page has a unique `<title>` and description; images have real alt text
- Phone number is a `tel:` link everywhere it appears

## Checking your work

1. `npm run build` must pass.
2. Screenshot the home page, one service page and the contact page at 390px and 1440px wide, and look at them.
   (`python3` + Playwright, or Claude in Chrome / the built-in browser.)
3. `npm run check:design`. Fix true positives. Static scans report "cramped-padding" on Tailwind padding that
   is actually fine; confirm against the screenshot first.
4. Click every nav link, submit the form once, and request each old URL to confirm its redirect.
