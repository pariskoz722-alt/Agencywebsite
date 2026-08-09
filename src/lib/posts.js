// Article content for the tech blog. Each post is plain data so the listing and
// the article pages stay in sync; `body` is an array of blocks rendered by
// src/app/blog/[slug]/page.js.
export const posts = [
  {
    slug: "content-security-policy-nextjs",
    title: "Shipping a Content Security Policy on a static Next.js site",
    excerpt:
      "A strict CSP is one of the cheapest security wins available — until it silently breaks your dev server. Here is the policy we run, and the trade-off we made to keep pages static.",
    date: "2026-08-08",
    readTime: "6 min read",
    tags: ["Next.js", "Security"],
    body: [
      {
        type: "p",
        text: "Most sites ship with no Content Security Policy at all. That is a shame, because a CSP is defence in depth: even if a cross-site scripting bug slips through, a good policy stops the injected script from executing or phoning home.",
      },
      { type: "h2", text: "Start by looking at what you actually serve" },
      {
        type: "p",
        text: "Before writing a policy, audit the page. This site is static: no third-party analytics, no embedded video, no external fonts (they are self-hosted through next/font). That means almost everything can be locked to 'self', which is a far stronger starting point than the permissive policies you often see copy-pasted.",
      },
      { type: "h2", text: "The policy" },
      {
        type: "code",
        text: `default-src 'self';
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline';
img-src 'self' data: blob:;
font-src 'self' data:;
connect-src 'self';
form-action 'self';
base-uri 'self';
object-src 'none';
frame-ancestors 'none';
upgrade-insecure-requests`,
      },
      { type: "h2", text: "The honest trade-off: 'unsafe-inline'" },
      {
        type: "p",
        text: "Two directives keep 'unsafe-inline', and it is worth being clear about why. Framer Motion writes inline styles on every animated element, so style-src needs it. Next.js inlines its hydration and bootstrap scripts, so script-src needs it too.",
      },
      {
        type: "p",
        text: "The textbook alternative is a per-request nonce. But generating a nonce requires middleware that runs on every request, which forces each page to render dynamically — and that throws away the static caching the whole site depends on. For a brochure site with no user input and no third-party scripts, the residual risk from 'unsafe-inline' is small, and the performance cost of removing it is not. Add an external script later and that calculation changes.",
      },
      { type: "h2", text: "Do not forget development mode" },
      {
        type: "p",
        text: "This is the part that bites people. React's development build uses eval() for debugging features, and Fast Refresh talks to the dev server over a WebSocket. A strict policy blocks both, so hot reloading dies and the console fills with errors — while production works perfectly.",
      },
      {
        type: "p",
        text: "The fix is to relax the policy in development only, and keep production strict:",
      },
      {
        type: "code",
        text: `const isDev = process.env.NODE_ENV === "development";

\`script-src 'self' 'unsafe-inline'\${isDev ? " 'unsafe-eval'" : ""}\`,
\`connect-src 'self'\${isDev ? " ws: wss:" : ""}\`,`,
      },
      { type: "h2", text: "Verify it against a real build" },
      {
        type: "p",
        text: "A CSP that has only been tested in development has not been tested. Run a production build locally, load the site, and watch the console. If a policy is going to break something, it will tell you there — long before a visitor finds it.",
      },
    ],
  },
  {
    slug: "animation-that-signals-craft",
    title: "Animation that signals craft, not decoration",
    excerpt:
      "Two or three surgical animations read as expensive. Ten read as a template with plugins. Notes on choosing motion that actually communicates something.",
    date: "2026-08-02",
    readTime: "5 min read",
    tags: ["Design", "Framer Motion"],
    body: [
      {
        type: "p",
        text: "There is a temptation, when building a portfolio, to reach for every effect you know. Custom cursors, particle fields, 3D tilt on every card, text that scrambles into place. The result usually reads as the opposite of what was intended: not expensive, but generic.",
      },
      { type: "h2", text: "Make the animation say something" },
      {
        type: "p",
        text: "The most effective motion on a page is the kind that carries meaning. On this site, the browser mockup in the hero does not simply fade in — it assembles itself. The nav bar arrives, the heading bars type out, the cards spring into the grid. The headline claims we build websites; the animation demonstrates it.",
      },
      {
        type: "p",
        text: "The same principle applies in the portfolio, where a card lifts out of one pipeline column and settles into another. It is a product demo disguised as a transition. Both animations would be pleasant as pure decoration. They are far better because they mean something.",
      },
      { type: "h2", text: "Spend your motion budget deliberately" },
      {
        type: "p",
        text: "Treat animation like a budget: a couple of statement pieces, then quiet texture everywhere else. A gold glow that tracks the cursor across a card costs almost nothing and is felt more than seen. Counters that tick up when they scroll into view give a section a heartbeat. Neither competes for attention.",
      },
      { type: "h2", text: "Respect the people who do not want it" },
      {
        type: "p",
        text: "Motion is not free for everyone. Vestibular disorders make large transforms genuinely unpleasant. Framer Motion makes the fix a one-liner — wrap the tree in MotionConfig with reducedMotion set to \"user\", and visitors with the OS-level preference enabled get calm fades instead of movement.",
      },
      {
        type: "code",
        text: `<MotionConfig reducedMotion="user">
  {children}
</MotionConfig>`,
      },
      {
        type: "p",
        text: "It takes a minute to add, and it is the kind of detail other developers notice immediately.",
      },
    ],
  },
  {
    slug: "image-weight-is-a-design-decision",
    title: "Image weight is a design decision",
    excerpt:
      "A 1.3 MB logo rendered at 44 pixels is not a performance problem you fix later. It is a decision you make when you export the file.",
    date: "2026-07-26",
    readTime: "4 min read",
    tags: ["Performance", "Core Web Vitals"],
    body: [
      {
        type: "p",
        text: "Auditing this site turned up a logo weighing 1.3 MB. It was displayed in a 44-pixel circle in the navigation bar, on every single page. That is roughly a hundred times more data than the rendering needed.",
      },
      { type: "h2", text: "Ship the size you actually render" },
      {
        type: "p",
        text: "The photograph in the portfolio told the same story from the other direction: a 1600 x 2400 original at 728 KB, displayed in a card about 570 pixels wide. Resizing it to 1200 pixels and re-encoding at quality 74 with mozjpeg brought it to 251 KB — a 65% reduction with retina headroom intact and no visible difference at display size.",
      },
      {
        type: "code",
        text: `await sharp("theros.jpg")
  .resize(1200)
  .jpeg({ quality: 74, mozjpeg: true })
  .toFile("theros.opt.jpg");`,
      },
      { type: "h2", text: "Why it matters more than it sounds" },
      {
        type: "p",
        text: "Largest Contentful Paint is usually an image. Every kilobyte you cut off the largest asset comes straight off that metric — and on a mobile connection in the real world, the difference between 251 KB and 728 KB is felt, not measured.",
      },
      { type: "h2", text: "Build the check into your process" },
      {
        type: "p",
        text: "The point is not that compression is difficult; it takes seconds. The point is that nobody looks. Export at the size you render, compress before committing, and glance at the byte count in your build output. A site that promises fast development should be fast itself — that is the whole argument.",
      },
    ],
  },
];

export function getPost(slug) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
