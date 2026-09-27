"use client";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-updated">Last Updated: September 27, 2026</p>
        </motion.div>

        <motion.div
          className="legal-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>
            At <strong>Sterling Digital</strong> ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>sterlingdigital.gr</strong> or communicate with us directly.
          </p>

          <h2>1. Data Controller</h2>
          <p>
            Sterling Digital operates as the data controller for personal information collected through this website pursuant to the General Data Protection Regulation (EU) 2016/679 (GDPR) and relevant Greek data protection legislation.
          </p>
          <p>
            <strong>Contact Email:</strong> info.sterlingdigital@gmail.com<br />
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Contact us via direct email links, telephone, or Instagram DM.</li>
            <li>Inquire about our digital agency services, pricing, or proposals.</li>
            <li>Subscribe to updates or interact with our portfolio showcases.</li>
          </ul>
          <p>This information may include: full name, email address, phone number, company name, and details regarding your project requirements.</p>

          <h2>3. How We Use Your Information</h2>
          <p>We process your personal data for the following legal bases and purposes:</p>
          <ul>
            <li><strong>Service Delivery & Communication:</strong> To respond to your inquiries, deliver agency proposals, and manage client relationships (Legitimate Interest / Contractual Necessity).</li>
            <li><strong>Website Improvement:</strong> To optimize user experience, performance, and site layout (Legitimate Interest).</li>
            <li><strong>Legal Obligations:</strong> To comply with applicable accounting, tax, and regulatory compliance rules.</li>
          </ul>

          <h2>4. Data Sharing & Third Parties</h2>
          <p>
            We do not sell, rent, or trade your personal information. We only share data with trusted third-party infrastructure service providers essential to running our agency operations, including:
          </p>
          <ul>
            <li><strong>Hosting & Infrastructure:</strong> Vercel Inc. (Website hosting and deployment).</li>
            <li><strong>Communication Platforms:</strong> Email and messaging service infrastructure.</li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal communication data only for as long as necessary to fulfill the purposes outlined in this policy or to comply with statutory retention requirements under Greek law.
          </p>

          <h2>6. Your GDPR Rights</h2>
          <p>Under the GDPR, you have the following rights regarding your personal data:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
            <li><strong>Erasure:</strong> Request the deletion of your personal data ("Right to be Forgotten").</li>
            <li><strong>Restriction:</strong> Request restriction of processing under specific conditions.</li>
            <li><strong>Data Portability:</strong> Request transfer of your data to another controller.</li>
          </ul>
          <p>To exercise any of these rights, please contact us at <code>info.sterlingdigital@gmail.com</code>.</p>

          <h2>7. Updates to This Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy periodically. Any updates will be published directly on this page with an updated revision date.
          </p>
        </motion.div>
      </div>
    </section>
  );
}