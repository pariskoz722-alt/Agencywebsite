export const metadata = {
  title: "Privacy Policy",
  description:
    "How Sterling Digital handles the personal data you send through this informational portfolio site, in line with the EU GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated: 9 August 2026</p>

      <p>
        This website is an <strong>informational portfolio</strong> operated by{" "}
        <strong>Sterling Digital</strong>. It exists to show examples of our web
        development work and to publish articles about building for the web. It is
        not an online shop: nothing is sold here, no payments are taken, and no
        accounts are created.
      </p>

      <p>
        This policy explains what happens to the personal data you choose to send
        us, in line with the EU General Data Protection Regulation (Regulation (EU)
        2016/679, &ldquo;GDPR&rdquo;) and applicable Greek data protection law.
      </p>

      <div className="legal-note">
        <strong>Before launch:</strong> replace the placeholders below (registered
        name and address) with your actual details so this policy is accurate.
      </div>

      <h2>1. Who is responsible</h2>
      <ul>
        <li><strong>Sterling Digital</strong> [registered name]</li>
        <li>[Address], Greece</li>
        <li>
          Email:{" "}
          <a href="mailto:info.sterlingdigital@gmail.com">
            info.sterlingdigital@gmail.com
          </a>
        </li>
      </ul>

      <h2>2. What we collect, and when</h2>
      <p>
        We only receive personal data if you deliberately send it to us. There is no
        tracking, profiling, or advertising on this site.
      </p>
      <ul>
        <li>
          <strong>Contact form:</strong> your name, email address, and message.
          Importantly, this form does not submit to a server. When you press send,
          it opens your own email application with the message pre-filled — so the
          data travels by email, directly from you to us, and this website never
          stores or transmits it.
        </li>
        <li>
          <strong>Email:</strong> anything you include if you write to us directly.
        </li>
        <li>
          <strong>Technical data:</strong> our hosting provider records standard
          server information, such as IP addresses, in order to serve and secure the
          site.
        </li>
      </ul>

      <h2>3. Why we use it, and on what legal basis</h2>
      <p>
        We use the details you send for a single purpose: to read your message and
        reply to it. The legal basis is your <em>consent</em>, given by ticking the
        box on the contact form, together with our <em>legitimate interest</em> in
        responding to people who get in touch.
      </p>

      <h2>4. What we do not do</h2>
      <ul>
        <li>We do not sell, rent, or trade your data.</li>
        <li>We do not share it with third parties for marketing.</li>
        <li>We do not add you to a mailing list.</li>
        <li>We do not use it to build a profile of you.</li>
        <li>We do not store it in a database — your message lives in our inbox.</li>
      </ul>

      <h2>5. How long we keep it</h2>
      <p>
        Your message stays in our email account only for as long as it is useful for
        the conversation it belongs to, and is deleted once that correspondence is
        clearly finished. Nothing is retained long-term.
      </p>

      <h2>6. Cookies</h2>
      <p>
        The site sets no tracking cookies. It stores one small item in your
        browser&rsquo;s local storage to remember your cookie choice, and another to
        remember whether you prefer light or dark mode. Neither identifies you nor
        leaves your device. See our <a href="/cookie-policy">Cookie Policy</a>.
      </p>

      <h2>7. Your rights under the GDPR</h2>
      <p>You have the right to:</p>
      <ul>
        <li>access the personal data we hold about you;</li>
        <li>request correction of anything inaccurate;</li>
        <li>request erasure of your data;</li>
        <li>restrict or object to our processing of it;</li>
        <li>receive your data in a portable format;</li>
        <li>withdraw your consent at any time.</li>
      </ul>
      <p>
        In practice, exercising these rights usually means asking us to delete an
        email thread. Write to{" "}
        <a href="mailto:info.sterlingdigital@gmail.com">
          info.sterlingdigital@gmail.com
        </a>{" "}
        and we will action it. You may also complain to the Hellenic Data Protection
        Authority (Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα,{" "}
        <a href="https://www.dpa.gr" target="_blank" rel="noopener noreferrer">
          www.dpa.gr
        </a>
        ).
      </p>

      <h2>8. Security</h2>
      <p>
        The site is served over HTTPS and ships a strict Content Security Policy.
        Because we hold no database and run no login system, there is no store of
        personal data on this site to breach.
      </p>

      <h2>9. Children</h2>
      <p>
        This site is not directed at children under 16, and we do not knowingly
        collect their personal data.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update this policy from time to time. The &ldquo;Last updated&rdquo;
        date above always reflects the current version.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about this policy? Email{" "}
        <a href="mailto:info.sterlingdigital@gmail.com">
          info.sterlingdigital@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
