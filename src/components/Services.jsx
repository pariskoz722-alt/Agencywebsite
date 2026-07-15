"use client";
import { motion } from "framer-motion";

export default function Services() {

  const servicesData = [
    {
      num: "01",
      title: "Web Design",
      subtitle: "Premium websites",
      desc: "Built to convert visitors into loyal clients."
    },
    {
      num: "02",
      title: "Development",
      subtitle: "Fast. Responsive.",
      desc: "Clean code built on modern web architectures."
    },
    {
      num: "03",
      title: "Automation",
      subtitle: "Intelligent workflow",
      desc: "Booking systems, custom CRMs, and AI integrations."
    }
  ];

  return (
    <section id="services" className="services-section-premium">
      <div className="services-container-premium">
        
        
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="services-tag">WHAT WE DO</span>
          <h2 className="services-main-title">Our Expertise</h2>
        </motion.div>

        
        <div className="services-grid-premium">
          {servicesData.map((service, index) => (
            <motion.div 
              className="premium-service-card" 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }} 
            >
              <div className="card-top">
                <span className="card-number">{service.num}</span>
                <span className="card-arrow">↓</span>
              </div>
              <h3 className="card-title-premium">{service.title}</h3>
              <p className="card-subtitle-premium">{service.subtitle}</p>
              <div className="card-divider"></div>
              <p className="card-desc-premium">{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}