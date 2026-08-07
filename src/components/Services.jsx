"use client";
import { motion } from "framer-motion";
import { trackSpotlight } from "./spotlight";

const services = [
  {
    title: "Web Design",
    subtitle: "Conversion-first aesthetics",
    desc: "Custom interfaces built to convert visitors into paying clients. Every layout, color choice, and micro-interaction is intentional.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Development",
    subtitle: "Fast. Clean. Scalable.",
    desc: "Production-ready code built on React and Next.js. Optimized for Core Web Vitals, SEO, and flawless performance at any scale.",
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Automation",
    subtitle: "Intelligent workflows",
    desc: "Booking systems, custom CRMs, and AI integrations that eliminate manual work and let your business run while you sleep.",
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
          <span className="services-tag">What We Do</span>
          <h2 className="services-main-title">Our Expertise</h2>
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
