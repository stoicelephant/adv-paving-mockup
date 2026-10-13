# Advanced Asphalt & Concrete: website mockup

Design preview for adv-paving.com, built on the site starter (Astro + Tailwind, static).

- Content: `src/site.ts` (everything taken from their current site; see `docs/intake-adv-paving.md`)
- Design: `DESIGN.md` and `src/styles/global.css`
- Mockup mode: `site.preview.enabled` in `src/site.ts` shows the preview bar, adds noindex everywhere,
  and makes the quote form open /thank-you without sending. `vercel.json` also sends `X-Robots-Tag: noindex`.
- Photos are hotlinked from their Wix media library (`src/lib/wix.ts`). Before launch, get the originals
  and self-host them.

## Run it
```
npm install
npm run dev      # localhost:4321
npm run build    # static site in dist/
```

## Deploy (Vercel)
Import this repo at vercel.com/new. Framework preset Astro, build `npm run build`, output `dist`
(already set in `vercel.json`). Every push to `main` updates the preview link.

## Before going live
1. `site.preview.enabled = false`, and remove the `X-Robots-Tag` header from `vercel.json`
2. Web3Forms access key in `site.form.hidden.access_key`
3. Self-host the photos, ask for originals and job photos
4. Answer the open questions in `docs/intake-adv-paving.md`
5. Client sites are commercial use: host on Vercel Pro (Hobby is non-commercial), Cloudflare or Netlify
6. Follow `docs/LAUNCH.md` for the domain switch
