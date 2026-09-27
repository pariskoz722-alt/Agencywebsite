"use client";
import { motion } from "framer-motion";

export default function Contact() {
  const contactLinks = [
    {
      label: "EMAIL US",
      value: "info.sterlingdigital@gmail.com",
      href: "mailto:info.sterlingdigital@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      label: "CALL / WHATSAPP",
      value: "+30 690 09619423",
      href: "tel:+3069009619423",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: "INSTAGRAM DM",
      value: "@sterlingdigital.gr",
      href: "https://instagram.com/sterlingdigital.gr",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="contact-section-premium">
      <div className="contact-container-premium">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-tag">GET IN TOUCH</span>
          <h2 className="contact-title">Let&apos;s talk</h2>
          <p className="contact-subtitle">
            Got a question about our work, or an idea you want to build together? Reach out directly through any of the options below.
          </p>
        </motion.div>

        <div className="contact-cards-wrapper">
          {contactLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="contact-card-premium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="contact-card-icon">{item.icon}</div>
              <div className="contact-card-content">
                <span className="contact-card-label">{item.label}</span>
                <span className="contact-card-value">{item.value}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}