# Intake: what to pull before designing

Work from the old site first, then ask the client only for what's missing.

## From the old site (every page, including footer and contact page)
- [ ] Business name exactly as written, phone, email, address (and whether the address should show)
- [ ] Hours, service area / towns, license or certification numbers **as stated** (don't guess)
- [ ] Every service, with what's included and any prices or "starting at" figures
- [ ] Reviews and testimonials **with the reviewer's name and where they were posted**
- [ ] FAQs, guarantees, warranties, financing, payment methods
- [ ] Logo (SVG if possible), brand colors worth keeping
- [ ] All photos of real work (note which page each came from)
- [ ] **Every URL** on the old site → becomes a line in `public/_redirects`
- [ ] Tracking already installed: Meta Pixel ID, Google Analytics / Tag Manager IDs, Google Search Console
- [ ] Form destination: where do current inquiries go (which inbox, which CRM)?

## From elsewhere (public)
- [ ] Google Business Profile: categories, hours, review count, photos, website link
- [ ] Facebook / Instagram: recent job photos, how the owner talks about the work
- [ ] Who ranks for "<main service> <town>": what the top competitors' sites say and lack

## Ask the client (only what's still missing)
1. Which jobs make you the most money, and which do you want more of?
2. What do customers usually ask on the first call?
3. What do you do that competitors don't (response time, warranty, same crew, written estimates)?
4. Can you send 10–20 photos of finished jobs, plus one of you or the crew? Phone photos are fine.
5. Who manages your domain (GoDaddy, Squarespace, Google Domains → Squarespace, Wix, Cloudflare)? Can you add me to it, or share access?
6. What email address should estimate requests go to?

## Output
- `src/site.ts` filled in, `isSample: false`
- `public/_redirects` with every old URL mapped
- `src/assets/photos/` with the client's photos, named to match `site.ts`
- `docs/intake-<client>.md`: open questions, anything uncertain, what the old site did well
