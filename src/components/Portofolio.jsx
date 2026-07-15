"use client";
import { motion } from "framer-motion";

export default function Portofolio(){
  return (
    <section id="portfolio" className="featured-project-section">
      <div className="portfolio-container-premium">

        <motion.div
        className="portfolio-header"
        initial={{ opacity: 0, y: 30}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        >
          <span className="portfolio-tag">Case study</span>
          <h2 className="portfolio-main-title">Featured Work</h2>
        </motion.div>

        <motion.div 
        className="main-project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="project-image-wrapper">
            <div className="project-image-placeholder">
              <span>[ Cinematic Project Visual / Mockup ]</span>
            </div>
          </div>

          <div className="project-info-premium">
            <div className="project-meta">
              <span className="project-year">2026</span>
              <span className="mega-dot">•</span>
              <span className="project-category">Web agency & Brand Identity</span>
            </div>
            <h3 className="project-title-premium">Aether Luxury Real Estate</h3>
            <p className="project-desc-premium">
              A bespoke digital experience designed for a premium real estate agency, focused on clean grid structures, cinematic transitions, and seamless user flows.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}