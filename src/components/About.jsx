"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "3+", label: "Years of Craft" },
];

// Counts up from 0 the first time it scrolls into view, keeping the suffix (+/%).
function StatNumber({ value }) {
  const target = parseInt(value, 10);
  const suffix = value.replace(String(target), "");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span ref={ref} className="stat-number">
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="about-section-premium">
      <div className="about-container-premium">

        <motion.div
          className="about-meta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-tag">Who We Are</span>
        </motion.div>

        <div className="about-content-premium">
          <motion.h2
            className="about-statement"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            A boutique digital agency crafting elite web experiences. We don't do mass production — every pixel is intentional, every animation natural, every product a reflection of true craftsmanship.
          </motion.h2>

          <motion.p
            className="about-subtext"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            By combining high-end aesthetics with clean modern engineering and smart automation, we help visionary brands elevate their digital presence and leave generic corporate solutions in the dust.
          </motion.p>

          <motion.div
            className="about-stats-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {stats.map((stat, i) => (
              <div className="stat-item" key={i}>
                <StatNumber value={stat.number} />
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
