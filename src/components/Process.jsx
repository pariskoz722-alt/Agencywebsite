"use client";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Research",
      desc: "Understanding the problem before writing any code — the content, the audience, and the constraints that shape the information architecture."
    },
    {
      num: "02",
      title: "Design",
      desc: "Building the type scale, colour system, and layout grid, then working them into high-fidelity prototypes. Every screen designed, never templated."
    },
    {
      num: "03",
      title: "Build",
      desc: "Translating the design into semantic, accessible React and Next.js code — component by component, with performance budgets in mind from the start."
    },
    {
      num: "04",
      title: "Ship & Measure",
      desc: "Deploying to production, then measuring what matters: Core Web Vitals, accessibility audits, and real-world loading behaviour."
    }
  ];

  return (
    <section id="process" className="process-section-premium">
      <div className="process-container-premium">
        
        {/* Header */}
        <motion.div 
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="process-tag">METHOD</span>
          <h2 className="process-main-title">How We Build</h2>
        </motion.div>

        {/* 4-Step Process Grid */}
        <div className="process-grid-premium">
          {steps.map((step, index) => (
            <motion.div 
              className="process-step-card" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="step-header">
                <span className="step-number">{step.num}</span>
                <div className="step-line"></div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}