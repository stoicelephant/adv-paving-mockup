// Converts public/_redirects and the security headers into vercel.json.
// Only needed when a client site is hosted on Vercel (Pro plan; Hobby is non-commercial only).
// Usage: node scripts/redirects-to-vercel.mjs
import { readFileSync, writeFileSync } from "node:fs";

const lines = readFileSync(new URL("../public/_redirects", import.meta.url), "utf8").split("\n");
const redirects = lines
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith("#"))
  .map((l) => {
    const [source, destination, status = "301"] = l.split(/\s+/);
    return { source, destination, permanent: status === "301" || status === "308" };
  });

const config = {
  $schema: "https://openapi.vercel.sh/vercel.json",
  cleanUrls: true,
  redirects,
  headers: [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    },
    {
      source: "/_astro/(.*)",
      headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
    },
  ],
};

writeFileSync(new URL("../vercel.json", import.meta.url), JSON.stringify(config, null, 2) + "\n");
console.log(`vercel.json written with ${redirects.length} redirects.`);
