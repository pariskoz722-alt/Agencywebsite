"use client";
import { motion } from "framer-motion";

const StarIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const reviews = [
  {
    initials: "XK",
    name: "Xristos Keteoglou",
    role: "Manager, Theros by the Sea",
    quote:
      "Sterling Digital developed our website. They understood the assignment and took action — in only 3 days we had a finished and awesome website for our business.",
  },
  {
    initials: "RK",
    name: "Ridvan Koz",
    role: "Manager, Mykebab",
    quote:
      "Paris and his team took on a mission to create our website, and the communication was amazing throughout. They delivered a great product that left us and our visitors very happy.",
  },
  {
    initials: "JB",
    name: "Juliet Bali",
    role: "Owner, Hair Artists Voula",
    quote:
      "Sterling Digital handled the booking website for my hair salon and I’m very happy with the result. Everyone on the team is also super kind!",
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

              <p className="review-text">&ldquo;{review.quote}&rdquo;</p>

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
