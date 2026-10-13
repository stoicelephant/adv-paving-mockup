# Launch: pointing the client's domain at the new site

The domain stays registered where it is. Only DNS changes. The risk is email: if the MX/TXT records
don't come along, the client stops receiving email. This checklist exists to prevent that.

## 1. Before changing anything
- [ ] Log in to wherever the domain's DNS is managed (often the registrar: GoDaddy, Squarespace, Namecheap, Wix).
- [ ] **Export or screenshot every DNS record.** Note especially: `MX`, `TXT` (SPF `v=spf1…`, DMARC, Google/Microsoft verification), `CNAME`s for email (DKIM, `autodiscover`), and any subdomains in use.
- [ ] Confirm which email provider they use (Google Workspace, Microsoft 365, the registrar's own mail).
- [ ] The new site is approved on its preview URL; `site.url` in `site.ts` is the final domain.
- [ ] If the old site is on Wix/Squarespace/GoDaddy builder, **don't cancel it yet.** Cancel after a week of the new site running.

## 2a. Cloudflare (default)
Using the root domain (example.com) requires the domain's DNS to live on Cloudflare.
1. Cloudflare dashboard → Add a domain → enter the client domain → Free plan.
2. Cloudflare scans and imports existing records. **Compare against your export from step 1.** Add anything missing, especially MX, SPF/DKIM/DMARC TXT, and verification records.
3. Mail-related records (MX, and CNAMEs for DKIM/autodiscover) must be **DNS only** (grey cloud).
4. At the registrar, replace the nameservers with the two Cloudflare gives you. Activation usually takes minutes to a few hours.
5. Once active: Worker → Settings → Domains & Routes → Add → Custom domain → `example.com`, then add `www.example.com` too.
6. Redirect `www` to the root (or the reverse) with a Redirect Rule so there's one canonical address.

## 2b. Vercel Pro or Netlify
No nameserver change needed. In the host's dashboard, add the domain to the project; it shows the exact
records to create (an `A` record for the root and a `CNAME` for `www`). Add those at the registrar,
**replacing only the old website records**. Leave MX and TXT records alone.

## 3. Right after the switch
- [ ] `https://example.com` and `https://www.example.com` both load the new site with a valid certificate
- [ ] Send a test email to the client's address and get a reply from it (inbound and outbound both work)
- [ ] Submit the contact form; confirm it arrives in the right inbox; confirm `/thank-you` loads
- [ ] Spot-check 5 old URLs: each redirects (301) to the right new page
- [ ] Google Search Console: add/verify the domain, submit `https://example.com/sitemap-index.xml`
- [ ] Google Business Profile: website link points to the new site (and to a service page if that fits better)
- [ ] Meta Pixel (if used): Events Manager shows PageView from the new domain after accepting the cookie notice

## 4. A week later
- [ ] Search Console shows no spike in 404s (add any missing redirects)
- [ ] Cancel the old site builder plan; **keep the domain registration and email plan**
