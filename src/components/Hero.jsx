"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-title">
            We build websites that make businesses <span className="text-gradient">impossible to ignore.</span>
          </h1>
          <p className="hero-subtitle">
            Premium design, ultra-fast development, and intelligent automation built for brands that care about quality.
          </p>
          <div className="hero-action">
            <button className="btn-primary">Book a Call</button>
            <button className="btn-secondary">View Our Work</button>
          </div>
        </motion.div>

        <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, ease: "easeOut", delay: 0.2 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="blender-placeholder">
            <div className="chrome-sphere-mock"></div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}