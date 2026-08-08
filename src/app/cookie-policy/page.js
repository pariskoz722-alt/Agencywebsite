export const metadata = {
  title: "Cookie Policy",
  description:
    "How Sterling Digital uses cookies and similar technologies, and how you can control them.",
};

export default function CookiePolicyPage() {
  return (
    <main className="legal-page">
      <h1>Cookie Policy</h1>
      <p className="legal-updated">Last updated: 16 July 2026</p>

      <p>
        This Cookie Policy explains how <strong>Sterling Digital</strong> uses
        cookies and similar technologies on <strong>sterlingdigital.gr</strong>{" "}
        (the &ldquo;Site&rdquo;). It should be read together with our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. Similar technologies, such as your browser&rsquo;s local storage,
        work in comparable ways. They help websites function, remember your
        preferences, and understand how the site is used.
      </p>

      <h2>2. Cookies We Use</h2>

      <h3>Strictly necessary (always active)</h3>
      <p>
        These are required for the Site to work and to remember your cookie choice.
        They do not track you for marketing purposes and cannot be switched off.
      </p>
      <ul>
        <li>
          <strong>sd-cookie-consent</strong> — stores whether you accepted or
          declined optional cookies, so we don&rsquo;t ask again on every visit.
          Stored in your browser&rsquo;s local storage.
        </li>
      </ul>

      <h3>Optional analytics (only with your consent)</h3>
      <p>
        If enabled, these help us understand how visitors use the Site so we can
        improve it. They are set <strong>only after you click &ldquo;Accept
        all&rdquo;</strong> in our cookie banner and are never loaded if you decline.
      </p>

      <div className="legal-note">
        <strong>Note for the site owner:</strong> if and when you add an analytics
        tool (e.g. a privacy-friendly analytics provider), list each cookie here —
        its name, provider, purpose, and duration — and make sure it loads only
        after consent is given.
      </div>

      <h2>3. Managing Your Preferences</h2>
      <p>
        When you first visit the Site, our cookie banner lets you accept or decline
        optional cookies. You can change your mind at any time by clearing this
        site&rsquo;s data in your browser, which will make the banner appear again.
      </p>
      <p>
        You can also control cookies through your browser settings — including
        blocking or deleting them. Note that disabling strictly necessary cookies
        may affect how the Site works.
      </p>

      <h2>4. Consent</h2>
      <p>
        We rely on your consent for any non-essential cookies. You may withdraw
        your consent at any time; withdrawal does not affect the lawfulness of
        processing carried out before you withdrew it.
      </p>

      <h2>5. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy as our use of cookies evolves. The
        &ldquo;Last updated&rdquo; date above reflects the latest revision.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        Questions about our use of cookies? Email us at{" "}
        <a href="mailto:info.sterlingdigital@gmail.com">info.sterlingdigital@gmail.com</a>.
      </p>
    </main>
  );
}
