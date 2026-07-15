"use client";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "Deep dive into your business model, target audience, and goals. We map out the structure and define what makes you impossible to ignore."
    },
    {
      num: "02",
      title: "Strategy & Design",
      desc: "We craft interactive high-fidelity prototypes. No generic templates—every layout is custom designed to reflect your brand's unique authority."
    },
    {
      num: "03",
      title: "Development",
      desc: "We turn designs into clean, lightning-fast code using React and Next.js, optimized for maximum speed, SEO, and flawless performance."
    },
    {
      num: "04",
      title: "Launch & Optimize",
      desc: "Deploying your premium platform to production, setting up integrations, and monitoring to ensure your brand stands out from day one."
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
          <span className="process-tag">HOW WE WORK</span>
          <h2 className="process-main-title">Our Process</h2>
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