"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="contact-section-premium">
      <div className="contact-container-premium">
        
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-tag">GET IN TOUCH</span>
          <h2 className="contact-main-title">Ready to grow?</h2>
          <p className="contact-subtitle">
            Let’s build something impossible to ignore. Fill out the form, or book a direct discovery call to discuss your project.
          </p>
          
          <div className="contact-direct-links">
            <div className="direct-item">
              <span className="item-label">Email us directly</span>
              <a href="mailto:hello@nexusdigital.com" className="item-link">hello@nexusdigital.com</a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <form className="premium-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" placeholder="Phone" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Notes</label>
              <textarea id="message" rows="5" placeholder="Tell us about your project..." required></textarea>
            </div>

            <button type="submit" className="btn-form-submit">
              Send message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}