"use client";
import { motion } from "framer-motion";

export default function TermsOfUse() {
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
          <h1 className="legal-title">Terms of Use</h1>
          <p className="legal-updated">Last Updated: September 27, 2026</p>
        </motion.div>

        <motion.div
          className="legal-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>
            Welcome to <strong>sterlingdigital.gr</strong>. These Terms of Use ("Terms") govern your access to and use of the website operated by <strong>Sterling Digital</strong> ("we," "our," or "us"). By accessing or using our website, you agree to be bound by these Terms.
          </p>

          <h2>1. Agency Services</h2>
          <p>
            Sterling Digital provides bespoke web development, UI/UX design, performance engineering, and digital agency services. The information, case studies, and portfolio showcases presented on this website are provided for informational and promotional purposes only.
          </p>

          <h2>2. Intellectual Property Rights</h2>
          <p>
            All content, visual interfaces, graphics, source code, design systems, branding assets, and layout structures on <strong>sterlingdigital.gr</strong> are the exclusive intellectual property of Sterling Digital or its licensors and are protected under Greek, EU, and international copyright laws.
          </p>
          <p>
            You may not copy, reproduce, distribute, modify, create derivative works of, or publicly display any content from this site without our prior written consent.
          </p>

          <h2>3. Acceptable Use</h2>
          <p>When interacting with our website, you agree NOT to:</p>
          <ul>
            <li>Use the site in any way that violates applicable local, national, or international laws.</li>
            <li>Attempt to gain unauthorized access to our site servers, databases, or infrastructure.</li>
            <li>Transmit any malicious code, viruses, or harmful data.</li>
            <li>Scrape or harvest data from our portfolio showcases or client list without explicit permission.</li>
          </ul>

          <h2>4. Client Proposals & External Links</h2>
          <p>
            Our site may contain links to client websites (e.g., live showcases in our portfolio section) or third-party platforms. Sterling Digital is not responsible for the content, privacy policies, or practices of any third-party websites linked from our platform.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            While we strive for 100% uptime and precision, the website and its content are provided on an "AS IS" and "AS AVAILABLE" basis. Sterling Digital shall not be held liable for any indirect, incidental, or consequential damages arising from your use or inability to use this website.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Greece and the European Union. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Athens, Greece.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            For any legal inquiries or questions regarding these Terms of Use, please reach out to us at:
          </p>
          <p>
            <strong>Email:</strong> <code>info.sterlingdigital@gmail.com</code><br />
          </p>
        </motion.div>
      </div>
    </section>
  );
}