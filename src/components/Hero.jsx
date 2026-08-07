"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import MagneticLink from "./MagneticLink";

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

// The mockup website assembles itself piece by piece once the frame lands.
const buildSequence = {
  hidden: {},
  show: {
    transition: { delayChildren: 1.5, staggerChildren: 0.18 },
  },
};

// Bars "type" out from the left; cards pop up with a spring.
const buildBar = {
  hidden: { opacity: 0, scaleX: 0 },
  show: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const buildCard = {
  hidden: { opacity: 0, y: 14, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 22 },
  },
};

export default function Hero() {
  // The aurora drifts on its own, then leans a little toward the cursor.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const ax = useSpring(px, { stiffness: 40, damping: 20 });
  const ay = useSpring(py, { stiffness: 40, damping: 20 });
  const auroraX = useTransform(ax, (v) => `${v * 40}px`);
  const auroraY = useTransform(ay, (v) => `${v * 30}px`);

  const onPointerMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section className="hero-section" onPointerMove={onPointerMove}>
      <motion.div
        className="hero-aurora"
        aria-hidden="true"
        style={{ x: auroraX, y: auroraY }}
      />
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
              className="hero-line text-gradient shimmer-line"
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
            <MagneticLink href="#contact" className="btn-primary">Book a Call</MagneticLink>
            <MagneticLink href="#portfolio" className="btn-secondary">View Our Work</MagneticLink>
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
            <motion.div
              className="browser-screen"
              variants={buildSequence}
              initial="hidden"
              animate="show"
            >
              <motion.div className="mock-nav-bar" variants={buildBar} style={{ originX: 0 }}>
                <div className="mock-logo-strip"></div>
                <div className="mock-nav-pills">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </motion.div>
              <motion.div className="mock-h-block accent" variants={buildBar} style={{ originX: 0 }} />
              <motion.div className="mock-h-block wide" variants={buildBar} style={{ originX: 0 }} />
              <motion.div className="mock-h-block medium" variants={buildBar} style={{ originX: 0 }} />
              <motion.div className="mock-h-block short" variants={buildBar} style={{ originX: 0 }} />
              <motion.div className="mock-cta-strip" variants={buildCard} />
              <motion.div className="mock-divider" variants={buildBar} style={{ originX: 0 }} />
              <div className="mock-cards-grid">
                <motion.div className="mock-card-block" variants={buildCard} />
                <motion.div className="mock-card-block" variants={buildCard} />
                <motion.div className="mock-card-block" variants={buildCard} />
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
