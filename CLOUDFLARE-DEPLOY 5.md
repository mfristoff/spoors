# Cloudflare Workers deployment

Use these settings in Cloudflare Workers Builds:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

The project builds to `dist`. The included `wrangler.jsonc` deploys that directory as static assets and serves `index.html` for client-side routes.
