import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://futuretechwellness.com',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date('2026-06-21'),
    }),
  ],
  vite: {
    build: {
      assetsInlineLimit: 4096,
    },
  },
  // No adapter - pure static for Cloudflare Workers Static Assets
  // Deploy with: npx wrangler deploy (after build)
});
