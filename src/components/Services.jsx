"use client";
import { motion } from "framer-motion";
import { trackSpotlight } from "@/lib/spotlight";

const services = [
  {
    title: "Interface Design",
    subtitle: "Design systems & layout",
    desc: "Custom interfaces designed from scratch — type scales, colour systems, spacing rhythm, and micro-interactions. No templates, no page builders.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Front-end Engineering",
    subtitle: "React · Next.js · TypeScript",
    desc: "Production-grade code built on the React and Next.js App Router. Tuned for Core Web Vitals, semantic HTML, and accessibility.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Automation & Tooling",
    subtitle: "Workflows and integrations",
    desc: "Booking flows, custom CRM interfaces, and API integrations — the kind of internal tooling that removes repetitive manual work.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section-premium">
      <div className="services-container-premium">

        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="services-tag">Capabilities</span>
          <h2 className="services-main-title">What We Work With</h2>
        </motion.div>

        <div className="services-grid-premium">
          {services.map((service, index) => (
            <motion.div
              className="premium-service-card spotlight-card"
              key={index}
              onMouseMove={trackSpotlight}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="service-icon-wrapper">{service.icon}</div>
              <h3 className="card-title-premium">{service.title}</h3>
              <p className="card-subtitle-premium">{service.subtitle}</p>
              <div className="card-divider"></div>
              <p className="card-desc-premium">{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
