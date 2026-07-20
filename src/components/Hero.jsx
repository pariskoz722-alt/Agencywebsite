"use client";
import { motion } from "framer-motion";
import Link from "next/link";

// Each element fades in and rises 40px, staggered 0.15s after the previous one.
// The custom index controls where it lands in the landing sequence:
// heading lines -> paragraph -> buttons -> trusted section -> laptop illustration.
// (Logo + navbar occupy indices 0-1 and animate inside the Navbar component.)
const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3 + i * 0.15,
    },
  }),
};

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">

        <div className="hero-content">
          <h1 className="hero-title">
            <motion.span
              className="hero-line"
              variants={reveal}
              custom={0}
              initial="hidden"
              animate="show"
            >
              We build websites
            </motion.span>
            <motion.span
              className="hero-line"
              variants={reveal}
              custom={1}
              initial="hidden"
              animate="show"
            >
              that make businesses
            </motion.span>
            <motion.span
              className="hero-line text-gradient"
              variants={reveal}
              custom={2}
              initial="hidden"
              animate="show"
            >
              impossible to ignore.
            </motion.span>
          </h1>

          <motion.p
            className="hero-subtitle"
            variants={reveal}
            custom={3}
            initial="hidden"
            animate="show"
          >
            Premium design, ultra-fast development, and intelligent automation
            built for brands that care about quality.
          </motion.p>

          <motion.div
            className="hero-actions"
            variants={reveal}
            custom={4}
            initial="hidden"
            animate="show"
          >
            <Link href="#contact" className="btn-primary">Book a Call</Link>
            <Link href="#portfolio" className="btn-secondary">View Our Work</Link>
          </motion.div>

        </div>

        <motion.div
          className="hero-visual"
          variants={reveal}
          custom={5}
          initial="hidden"
          animate="show"
        >
          <div className="hero-browser-frame">
            <div className="browser-topbar">
              <div className="browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="browser-url">sterlingdigital.gr</div>
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
