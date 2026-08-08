# Sterling Digital

Marketing site for Sterling Digital — [sterlingdigital.gr](https://sterlingdigital.gr)

Built with Next.js (App Router), React, and Framer Motion. The site is fully
static: there is no database, no authentication, and no API routes.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Structure

```
src/
  app/          Routes, layout, global styles, generated metadata
                (icon, opengraph-image, sitemap, robots)
  components/   UI components (all client components)
  lib/          Framework-agnostic helpers
public/         Static assets served at the site root
```

## Security

Security headers, including a Content Security Policy, are defined in
`next.config.mjs`. The policy is strict in production and relaxed in development
only, because React's development build needs `eval()` and Fast Refresh needs a
WebSocket connection.

Because the site is static, there is no server-side data access to protect. If an
API route or form handler is added later, it will need its own input validation,
rate limiting, and spam protection — none of that exists today.

## Deployment

Deployed on Vercel. Pushing to `main` or running `npx vercel --prod` publishes.
