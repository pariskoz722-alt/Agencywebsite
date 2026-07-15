"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const plans = [
  {
    name: "Starter",
    desc: "Perfect for small local businesses that need a strong online presence.",
    price: "300",
    suffix: "€ one-time",
    featured: false,
    features: [
      "1-page landing site",
      "Mobile-responsive design",
      "Contact form integration",
      "Basic SEO optimization",
      "2-week delivery",
    ],
    cta: "Get Started",
    ctaStyle: "btn-plan btn-plan-outline",
  },
  {
    name: "Growth",
    desc: "For businesses ready to scale with a fully custom digital platform.",
    price: "800",
    suffix: "€ one-time",
    featured: true,
    features: [
      "Multi-page site or e-shop",
      "100% custom codebase",
      "Advanced SEO & performance",
      "CMS or booking integration",
      "1 month post-launch support",
    ],
    cta: "Most Popular",
    ctaStyle: "btn-plan btn-plan-filled",
  },
  {
    name: "Elite",
    desc: "Bespoke platforms with AI workflows, automation, and dedicated support.",
    price: "Custom",
    suffix: "project-based",
    featured: false,
    features: [
      "Full custom platform build",
      "AI & automation workflows",
      "CRM & third-party integrations",
      "Ongoing retainer available",
      "Dedicated account manager",
    ],
    cta: "Let's Talk",
    ctaStyle: "btn-plan btn-plan-outline",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section-premium">
      <div className="pricing-container-premium">

        <motion.div
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="pricing-tag">Pricing</span>
          <h2 className="pricing-main-title">Transparent pricing</h2>
          <p className="pricing-subtitle">
            No hidden fees, no surprises. Pick the plan that matches your ambition.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div
              className={`pricing-card ${plan.featured ? "featured-plan" : ""}`}
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {plan.featured && <div className="plan-badge">Most Popular</div>}

              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-desc">{plan.desc}</p>

              <div className="plan-price">
                <span className="price-amount">{plan.price}</span>
                <span className="price-suffix">{plan.suffix}</span>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, fi) => (
                  <li key={fi}>
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="#contact" className={plan.ctaStyle}>
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
