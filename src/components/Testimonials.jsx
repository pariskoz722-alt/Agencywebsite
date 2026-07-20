"use client";
import { motion } from "framer-motion";

const StarIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const reviews = [
  {
    initials: "MV",
    name: "Marcus Vance",
    role: "Founder, Apex Capital",
    quote:
      "Sterling Digital took our outdated platform and turned it into an absolute masterpiece. The design is breathtaking, but the custom automation they built is what truly transformed our business. They operate at a level of quality that is extremely rare.",
  },
  {
    initials: "SR",
    name: "Sofia Reyes",
    role: "CMO, Marble & Co.",
    quote:
      "The team understood our brand instantly. They delivered a site that feels premium, loads in under a second, and has doubled our inbound inquiry rate. Worth every cent and more.",
  },
  {
    initials: "JT",
    name: "James Thorpe",
    role: "CEO, Northwave Labs",
    quote:
      "Working with Sterling Digital was seamless from day one. They pushed back when our ideas weren't optimal, proposed smarter solutions, and shipped on time. That combination is near impossible to find.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section-premium">
      <div className="testimonials-container-premium">

        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="testimonials-tag">Valued Partners</span>
          <h2 className="testimonials-main-title">What they say</h2>
        </motion.div>

        <div className="testimonials-grid">
          {reviews.map((review, i) => (
            <motion.div
              className="review-card-premium"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="review-stars">
                {[...Array(5)].map((_, s) => <StarIcon key={s} />)}
              </div>

              <p className="review-text">"{review.quote}"</p>

              <div className="review-author">
                <div className="review-avatar">{review.initials}</div>
                <div className="review-author-info">
                  <span className="review-author-name">{review.name}</span>
                  <span className="review-author-role">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
