# futuretechwellness.com — Premium Domain Landing

**Astro 4 + Tailwind + Content Collections • Pure Static • Cloudflare Workers Static Assets**

This is a sophisticated, high-conversion single-page website for the premium domain **futuretechwellness.com** — positioned at the intersection of AI / Future Technology and Wellness / Longevity.

- High acquisition price displayed: **$125,000**
- Sophisticated inquiry modal that constructs a professional pre-filled email to `sales@desertrich.com`
- Full SEO: OG meta, Twitter cards, JSON-LD structured data (Product + Offer schema)
- Sitemap + robots ready
- Built for **pure static deployment** on Cloudflare Workers Static Assets (no adapter)

## Project Structure

```
futuretechwellness_com_v1/
├── public/
│   ├── images/
│   │   ├── logo-hero.jpg          # Clean premium logo (generated)
│   │   └── og-image.jpg           # Social share / OG card
│   ├── favicon.svg
│   └── ...
├── src/
│   ├── content/
│   │   ├── config.ts
│   │   └── pillars/               # Content Collection (4 strategic pillars)
│   ├── layouts/
│   │   └── Layout.astro           # Full head SEO + structured data
│   ├── pages/
│   │   └── index.astro            # Complete landing experience
│   ├── styles/
│   │   └── global.css
│   └── env.d.ts
├── astro.config.mjs               # output: 'static' (no adapter)
├── wrangler.jsonc / wrangler.toml # Cloudflare Workers Static Assets config
├── package.json
└── tsconfig.json
```

## Local Development

```bash
cd futuretechwellness_com_v1
npm install
npm run dev
```

Open http://localhost:4321

## Production Build

```bash
npm run build
```

Output goes to `./dist/` (fully static HTML + assets).

## Deploy to Cloudflare Workers Static Assets (Recommended)

This project uses the **pure static + Workers Static Assets** pattern (no `@astrojs/cloudflare` adapter).

### 1. Install Wrangler (if not global)

```bash
npm install -g wrangler
# or npx wrangler
```

### 2. Login to Cloudflare

```bash
npx wrangler login
```

### 3. Deploy

```bash
npm run build
npx wrangler deploy
```

Wrangler will create the Worker (assets-only) and give you a `*.workers.dev` URL.

### 4. Add Custom Domain (futuretechwellness.com)

In Cloudflare Dashboard:
1. Go to your Worker → **Triggers** → **Custom Domains**
2. Add `futuretechwellness.com` (or `www.futuretechwellness.com`)
3. Update DNS / nameservers if needed, or use Cloudflare as registrar/proxy.

Alternatively, after first deploy you can run:

```bash
npx wrangler deploy --compatibility-date $(date +%Y-%m-%d)
```

## Key Technical Decisions

- **No adapter** — Pure `output: 'static'` for maximum performance and simplicity on Workers Static Assets.
- **Content Collections** used for the four strategic value pillars (easily extensible to testimonials, use-cases, or blog).
- **Client-side sophisticated CTA** — The inquiry modal builds a rich, personalized `mailto:` link so the experience feels premium without any backend.
- **Structured Data** — Product + Offer schema helps domain marketplaces and search engines understand this is a high-value asset for sale.
- **Performance** — Minimal deps, optimized Tailwind, static everything. Lighthouse scores should be near-perfect.

## Customization Notes

- Update price in `src/pages/index.astro` (hero + structured data) and `Layout.astro` if needed.
- Change `sales@desertrich.com` in multiple places if using a different acquisition email.
- Logo and OG image are in `/public/images/` — replace with your own if desired.
- To add more pillars or content: add `.md` files to `src/content/pillars/` following the schema.

## GitHub

Push this repo to: https://github.com/Mrerg7/futuretechwellness_com_v1.git

```bash
git init
git add .
git commit -m "Initial premium domain landing for futuretechwellness.com"
git remote add origin https://github.com/Mrerg7/futuretechwellness_com_v1.git
git branch -M main
git push -u origin main
```

Then connect the repo to Cloudflare for continuous deploy if desired (or keep manual `wrangler deploy`).

---

**This site is for demonstration purposes.** See the full disclaimer in the footer.

Built with ❤️ for premium digital assets by Eric R. Gutierrez — Astro + Cloudflare specialist.
