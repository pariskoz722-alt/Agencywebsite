export const metadata = {
  title: "Privacy Policy",
  description:
    "How Sterling Digital collects, uses, and protects your personal data in accordance with the EU GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated: 16 July 2026</p>

      <p>
        This Privacy Policy explains how <strong>Sterling Digital</strong>{" "}
        (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, and
        protects your personal data when you visit{" "}
        <strong>sterlingdigital.gr</strong> (the &ldquo;Site&rdquo;) or contact us.
        We are committed to protecting your privacy and handling your data in an
        open and transparent manner, in accordance with the EU General Data
        Protection Regulation (Regulation (EU) 2016/679, &ldquo;GDPR&rdquo;) and
        applicable Greek data protection law.
      </p>

      <div className="legal-note">
        <strong>Action required before launch:</strong> replace the placeholders
        below (registered company name, address, and VAT/registration number) with
        your actual business details so this policy is legally accurate.
      </div>

      <h2>1. Data Controller</h2>
      <p>
        The data controller responsible for your personal data is:
      </p>
      <ul>
        <li><strong>Sterling Digital</strong> [registered legal name]</li>
        <li>[Registered address], Greece</li>
        <li>VAT / registration number: [ΑΦΜ / Γ.Ε.ΜΗ.]</li>
        <li>Email: <a href="mailto:info.sterlingdigital@gmail.com">info.sterlingdigital@gmail.com</a></li>
      </ul>

      <h2>2. What Data We Collect</h2>
      <p>We collect only the data we need to respond to you and operate the Site:</p>
      <ul>
        <li>
          <strong>Contact form data:</strong> your name, email address, phone
          number (optional), and the contents of your message.
        </li>
        <li>
          <strong>Communications:</strong> any information you provide when you
          email or otherwise contact us.
        </li>
        <li>
          <strong>Technical data:</strong> essential information required to serve
          the Site securely (such as your IP address in server logs). We do not run
          third-party advertising or profiling.
        </li>
      </ul>

      <h2>3. How and Why We Use Your Data (Legal Bases)</h2>
      <ul>
        <li>
          <strong>To respond to enquiries</strong> submitted via our contact form or
          email — legal basis: our <em>legitimate interest</em> in answering
          prospective and existing clients, and/or <em>steps prior to entering a
          contract</em> at your request.
        </li>
        <li>
          <strong>To provide our services</strong> once you become a client — legal
          basis: <em>performance of a contract</em>.
        </li>
        <li>
          <strong>To keep the Site secure and functioning</strong> — legal basis:
          our <em>legitimate interest</em> in the security and integrity of the Site.
        </li>
        <li>
          <strong>Optional analytics</strong> (if enabled) — legal basis: your{" "}
          <em>consent</em>, which you may withdraw at any time.
        </li>
      </ul>

      <h2>4. Cookies</h2>
      <p>
        The Site uses only strictly necessary storage by default. Optional cookies
        are set only with your consent. For full details, see our{" "}
        <a href="/cookie-policy">Cookie Policy</a>.
      </p>

      <h2>5. Data Sharing and Recipients</h2>
      <p>
        We do not sell your personal data. We may share it with trusted service
        providers acting as our processors — for example website hosting and email
        providers — strictly to operate the Site and communicate with you. These
        providers process data only on our instructions and under a data processing
        agreement.
      </p>

      <h2>6. International Transfers</h2>
      <p>
        Where a provider processes data outside the European Economic Area, we
        ensure appropriate safeguards are in place, such as the European
        Commission&rsquo;s Standard Contractual Clauses or an adequacy decision.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We keep personal data only for as long as necessary for the purposes above:
        enquiry data is retained for as long as needed to handle your request and a
        reasonable period afterwards; client data is retained for the duration of
        our engagement and for any period required by law (for example, tax and
        accounting obligations).
      </p>

      <h2>8. Your Rights Under the GDPR</h2>
      <p>You have the right to:</p>
      <ul>
        <li>access the personal data we hold about you;</li>
        <li>request correction of inaccurate or incomplete data;</li>
        <li>request erasure of your data (&ldquo;right to be forgotten&rdquo;);</li>
        <li>restrict or object to our processing of your data;</li>
        <li>data portability (receive your data in a structured, machine-readable format);</li>
        <li>withdraw consent at any time, where processing is based on consent.</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href="mailto:info.sterlingdigital@gmail.com">info.sterlingdigital@gmail.com</a>.
        You also have the right to lodge a complaint with the Hellenic Data
        Protection Authority (Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα,{" "}
        <a href="https://www.dpa.gr" target="_blank" rel="noopener noreferrer">www.dpa.gr</a>).
      </p>

      <h2>9. Data Security</h2>
      <p>
        We implement appropriate technical and organisational measures to protect
        your personal data against unauthorised access, loss, or misuse, including
        encryption in transit (HTTPS) and access controls.
      </p>

      <h2>10. Children&rsquo;s Privacy</h2>
      <p>
        The Site is not directed at children under 16, and we do not knowingly
        collect their personal data.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &ldquo;Last
        updated&rdquo; date at the top reflects the latest revision.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        Questions about this policy or your data? Email us at{" "}
        <a href="mailto:info.sterlingdigital@gmail.com">info.sterlingdigital@gmail.com</a>.
      </p>
    </main>
  );
}
