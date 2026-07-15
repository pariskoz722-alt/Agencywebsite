"use client";
import { motion } from "framer-motion";

const miniProjects = [
  {
    label: "2025 · SaaS Platform",
    title: "Momentum Dashboard",
    bg: "linear-gradient(135deg, #0C2A1E 0%, #081C13 100%)",
  },
  {
    label: "2025 · E-commerce",
    title: "Ivory Boutique Store",
    bg: "linear-gradient(135deg, #123D2B 0%, #0C2A1E 100%)",
  },
];

export default function Portofolio() {
  return (
    <section id="portfolio" className="featured-project-section">
      <div className="portfolio-container-premium">

        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="portfolio-tag">Case Study</span>
          <h2 className="portfolio-main-title">Featured Work</h2>
        </motion.div>

        <motion.div
          className="main-project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="project-image-wrapper">
            <div className="project-image-placeholder">
              [ Cinematic Project Visual / Mockup ]
            </div>
          </div>

          <div className="project-info-premium">
            <div className="project-meta">
              <span className="project-year">2026</span>
              <span className="meta-dot">·</span>
              <span className="project-category">Web Design & Brand Identity</span>
            </div>
            <h3 className="project-title-premium">Aether Luxury Real Estate</h3>
            <p className="project-desc-premium">
              A bespoke digital experience for a premium real estate agency, featuring cinematic transitions, clean grid structures, and seamless user flows designed to convert high-intent buyers.
            </p>
          </div>
        </motion.div>

        <div className="portfolio-projects-grid">
          {miniProjects.map((project, i) => (
            <motion.div
              className="mini-project-card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div
                className="mini-project-image"
                style={{ background: project.bg }}
              >
                [ Project Visual ]
              </div>
              <div className="mini-project-info">
                <p className="mini-project-meta">{project.label}</p>
                <h4 className="mini-project-title">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
