// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { site } from "./src/site.ts";

export default defineConfig({
  // The live domain. Canonical URLs, the sitemap and social cards all read from this.
  site: site.url,
  output: "static",
  trailingSlash: "ignore",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
