# Spoor's Prelaunch Indexing + Production Launch Switch

## Current state: PRELAUNCH

The staging build is intentionally blocked from search indexing in three places:

1. `index.html` ships with `meta name="robots"` set to `noindex, nofollow, noarchive`.
2. `src/lib/siteIndexing.js` keeps route-level SEO in noindex mode.
3. `public/_headers` sends a sitewide `X-Robots-Tag: noindex, nofollow, noarchive` response header.

`robots.txt` deliberately allows crawling during staging. This lets search engines crawl any URL they may already know about and see the stronger noindex directive. The staging robots file does not advertise the production sitemap.

The internal `/media-library` page is permanently `noindex` and is not included in navigation or the sitemap.

## When the new site is ready to replace the current site

Do not flip indexing on early. Immediately before the production-domain cutover, run:

```bash
npm run site:launch
npm run media:library
npm run build
```

`npm run site:launch` does all of the following:

- enables `index, follow` for the real production host only
- restores the production sitemap line in `robots.txt`
- removes the sitewide staging `X-Robots-Tag`
- keeps `/media-library` permanently noindex
- keeps `*.workers.dev`, `*.pages.dev`, `spoor.olivemedia.agency`, and `newspoors.olivemedia.agency` noindex after launch

## Production cutover checklist

- Confirm every final production URL and canonical uses `https://www.spoorsheatingandac.com`.
- Crawl the current live site and map any changed/retired URLs to 301 redirects before DNS cutover.
- Preserve high-value existing URLs when possible rather than changing slugs unnecessarily.
- Run the final Base44/local asset localization pass and verify no required media is missing.
- Run the production build and test forms, calls, analytics, conversion tracking, structured data, mobile layouts, and Core Web Vitals.
- Point the production domain/DNS to the new Cloudflare deployment.
- Verify HTTPS and both www/non-www behavior, including the preferred-host redirect.
- Confirm the production response no longer returns a global `X-Robots-Tag: noindex`.
- Confirm page source/meta robots is `index, follow` on production pages.
- Confirm `/media-library` still returns noindex and is absent from navigation and sitemap.
- Submit the final sitemap in Google Search Console and Bing Webmaster Tools.
- Inspect a representative set of service, service-area, About, blog, and homepage URLs in Search Console after launch.
- Monitor 404s, redirect chains, duplicate canonicals, and indexing coverage during the first weeks after cutover.

## Emergency rollback

If the production site is not ready to index, run:

```bash
npm run site:staging
npm run build
```

Then redeploy. This restores the global noindex protection.
