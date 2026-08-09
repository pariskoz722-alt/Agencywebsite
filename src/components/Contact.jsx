"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "info.sterlingdigital@gmail.com";

// Deliberately permissive: something@something.tld. Stricter patterns reject
// valid addresses more often than they catch typos.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const EMPTY = { name: "", email: "", message: "", consent: false };

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "That email address doesn’t look right.";
  }

  if (!values.message.trim()) {
    errors.message = "Please write a short message.";
  }

  if (!values.consent) {
    errors.consent = "Please agree to the processing of your contact data.";
  }

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const next = type === "checkbox" ? checked : value;

    setValues((prev) => ({ ...prev, [name]: next }));
    // Clear a field's error as soon as the visitor starts correcting it.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      setStatus("");
      return;
    }

    // No server is involved: this hands the message to the visitor's own mail
    // client, so nothing is stored or transmitted by this site.
    const subject = encodeURIComponent(`Website enquiry from ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\n—\n${values.name}\n${values.email}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setStatus(
      "Opening your email app so you can send the message. If nothing happens, write to us directly at " +
        CONTACT_EMAIL +
        "."
    );
    setValues(EMPTY);
  };

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
          <h2 className="contact-main-title">Let&rsquo;s talk</h2>
          <p className="contact-subtitle">
            Got a question about the work shown here, or an idea you want to think
            through? Send a message and we&rsquo;ll reply.
          </p>
          
          <div className="contact-direct-links">
            <div className="direct-item">
              <span className="item-label">Email us directly</span>
              <a href="mailto:info.sterlingdigital@gmail.com" className="item-link">info.sterlingdigital@gmail.com</a>
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
          <form className="premium-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Full name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Your name"
                aria-invalid={errors.name ? "true" : undefined}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p className="form-error" id="name-error" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="you@example.com"
                aria-invalid={errors.email ? "true" : undefined}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p className="form-error" id="email-error" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={values.message}
                onChange={handleChange}
                placeholder="What would you like to talk about?"
                aria-invalid={errors.message ? "true" : undefined}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p className="form-error" id="message-error" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="form-consent">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={values.consent}
                onChange={handleChange}
                aria-invalid={errors.consent ? "true" : undefined}
                aria-describedby={errors.consent ? "consent-error" : undefined}
              />
              <label htmlFor="consent">
                I agree to the processing of my contact data to receive a reply.
              </label>
            </div>
            {errors.consent && (
              <p className="form-error" id="consent-error" role="alert">
                {errors.consent}
              </p>
            )}

            <button type="submit" className="btn-form-submit">
              Send message
            </button>

            {status && (
              <p className="form-status" role="status">
                {status}
              </p>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
}