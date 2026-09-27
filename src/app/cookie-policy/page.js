"use client";
import { motion } from "framer-motion";

export default function CookiePolicy() {
  return (
    <section className="legal-page-section">
      <div className="legal-container">
        <motion.div
          className="legal-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="legal-tag">LEGAL & COMPLIANCE</span>
          <h1 className="legal-title">Cookie Policy</h1>
          <p className="legal-updated">Last Updated: September 27, 2026</p>
        </motion.div>

        <motion.div
          className="legal-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>
            This Cookie Policy explains how <strong>Sterling Digital</strong> ("we," "our," or "us") uses cookies and similar tracking technologies when you visit our website <strong>sterlingdigital.gr</strong>.
          </p>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are stored on your computer, smartphone, or device when you browse a website. They allow the website to recognize your device, remember your preferences (such as language or theme settings), and deliver a smoother, more tailored experience.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>We use cookies and local storage mechanisms on our website for the following purposes:</p>
          <ul>
            <li><strong>Strictly Necessary Cookies:</strong> Essential for the core operation of our website, including security, session routing, and accessibility.</li>
            <li><strong>Preference & Theme Cookies:</strong> Used to remember your selected preferences, such as switching between Light and Dark mode (e.g., saving your preferred <code>data-theme</code> setting).</li>
            <li><strong>Performance & Analytics Cookies:</strong> Help us understand how visitors interact with our pages, identify error logs, and optimize page load speeds.</li>
          </ul>

          <h2>3. Types of Cookies Used on sterlingdigital.gr</h2>
          <p>Our website utilizes both first-party and third-party elements:</p>
          <ul>
            <li><strong>First-Party Technical Storage:</strong> Local storage and session items used to remember UI states (e.g. theme preference).</li>
            <li><strong>Hosting & Edge Analytics:</strong> Provided via our infrastructure platform (Vercel Inc.) to monitor network bandwidth and basic server request logs without storing privacy-invasive user profiles.</li>
          </ul>

          <h2>4. Managing & Disabling Cookies</h2>
          <p>
            You have the right to accept or decline non-essential cookies. You can modify your browser settings to refuse cookies or to alert you when a cookie is being sent.
          </p>
          <p>
            Please note that if you choose to disable or block cookies, certain features of our website (such as theme persistence or interactive UI elements) may not function as intended.
          </p>
          <p>
            To manage cookies directly through your web browser, consult the help settings of your browser:
          </p>
          <ul>
            <li>Chrome / Chromium</li>
            <li>Apple Safari</li>
            <li>Mozilla Firefox</li>
            <li>Opera</li>
            <li>Microsoft Edge</li>
          </ul>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions regarding our use of cookies or tracking technologies, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> <code>info.sterlingdigital@gmail.com</code><br />
          </p>
        </motion.div>
      </div>
    </section>
  );
}