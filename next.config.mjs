/** @type {import('next').NextConfig} */

// This is a static marketing site: no API routes, no database, no auth, and no
// third-party scripts. The policy below is therefore locked down to same-origin.
// 'unsafe-inline' is required for styles (Framer Motion writes inline styles) and
// for the hydration/bootstrap scripts Next.js inlines. Using a nonce instead would
// force every page to render dynamically, which would remove the static caching
// this site depends on. Revisit if an analytics or embed script is ever added.
const isDev = process.env.NODE_ENV === "development";

// React's development build uses eval() for debugging, and Fast Refresh talks to
// the dev server over a WebSocket. Both are relaxed in dev only — production
// keeps the strict policy.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  // Keep the framework version out of responses.
  poweredByHeader: false,

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
