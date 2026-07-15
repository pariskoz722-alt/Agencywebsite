"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about-section-premium">
      <div className="about-container-premium">
        
        <motion.div 
          className="about-meta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-tag">WHO WE ARE</span>
        </motion.div>

        <div className="about-content-premium">
          <motion.h2 
            className="about-statement"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            We are a boutique digital agency crafting elite web experiences. We don't do mass production. We believe every pixel should be intentional, every animation should feel natural, and every digital product should reflect true craftsmanship.
          </motion.h2>

          <motion.p 
            className="about-subtext"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            By combining high-end aesthetics with clean, modern engineering and smart automation, we help visionary brands elevate their digital presence and make standard corporate solutions look outdated.
          </motion.p>
        </div>

      </div>
    </section>
  );
}