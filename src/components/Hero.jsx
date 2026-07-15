"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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
            We build websites that make businesses{" "}
            <span className="text-gradient">impossible to ignore.</span>
          </h1>
          <p className="hero-subtitle">
            Premium design, ultra-fast development, and intelligent automation
            built for brands that care about quality.
          </p>
          <div className="hero-actions">
            <Link href="#contact" className="btn-primary">Book a Call</Link>
            <Link href="#portfolio" className="btn-secondary">View Our Work</Link>
          </div>

          <div className="hero-trust-bar">
            <div className="trust-avatars">
              <div className="trust-avatar">MV</div>
              <div className="trust-avatar">SR</div>
              <div className="trust-avatar">JT</div>
              <div className="trust-avatar">+</div>
            </div>
            <span className="trust-sep"></span>
            <span>Trusted by 50+ growth-focused brands</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
        >
          <div className="hero-browser-frame">
            <div className="browser-topbar">
              <div className="browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="browser-url">nexusdigital.com</div>
            </div>
            <div className="browser-screen">
              <div className="mock-nav-bar">
                <div className="mock-logo-strip"></div>
                <div className="mock-nav-pills">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="mock-h-block accent"></div>
              <div className="mock-h-block wide"></div>
              <div className="mock-h-block medium"></div>
              <div className="mock-h-block short"></div>
              <div className="mock-cta-strip"></div>
              <div className="mock-divider"></div>
              <div className="mock-cards-grid">
                <div className="mock-card-block"></div>
                <div className="mock-card-block"></div>
                <div className="mock-card-block"></div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
