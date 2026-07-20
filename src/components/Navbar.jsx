"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <MotionLink
          href="/"
          className="logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }}
        >
          Sterling <span className="logo-accent">Digital</span>
        </MotionLink>

        <motion.div
          className={`nav-links ${mobileOpen ? "mobile-open" : ""}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <button className="nav-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <Link href="/#about" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/#services" onClick={() => setMobileOpen(false)}>Services</Link>
          <Link href="/#portfolio" onClick={() => setMobileOpen(false)}>Portfolio</Link>
          <Link href="/#contact" className="nav-cta" onClick={() => setMobileOpen(false)}>
            Contact Us
          </Link>
        </motion.div>

        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
