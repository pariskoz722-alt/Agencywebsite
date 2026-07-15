"use client";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section-premium">
      <div className="testimonials-container-premium">

        <motion.div 
        className="testimonials-header"
        vinitial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="testimonials-tag">VALUED PARTNERS</span>
          <h2 className="testimonials-main-title">What they say</h2>
        </motion.div>

        <motion.div
        className="testimonial-quote-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="quote-mark">“</span>

          <blockquote className="testimonial-quote">
            NexusDigital took our outdated platform and turned it into an absolute masterpiece. The design is breathtaking, but the custom automation they built behind the scenes is what truly transformed our day-to-day business. They operate at a level of quality that is extremely rare.
          </blockquote>

          <div className="testimonial-author">
            <span className="author-name">Marcus Vance</span>
            <span className="author-role">Founder, Apex Capital</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}