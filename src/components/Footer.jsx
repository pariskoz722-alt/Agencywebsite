"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-premium">
      <div className="footer-container">
        
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            Sterling <span className="logo-accent">Digital</span>
          </Link>
          <p className="footer-brand-text">
            Crafting elite digital experiences and high-end web systems for forward-thinking brands.
          </p>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Sitemap</h4>
          <ul className="footer-list">
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/#portfolio">Portfolio</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Services</h4>
          <ul className="footer-list">
            <li><Link href="/services">Web Design</Link></li>
            <li><Link href="/services">Next.js Development</Link></li>
            <li><Link href="/services">Smart Automation</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Connect</h4>
          <ul className="footer-list">
            <li><a href="mailto:hello@sterlingdigital.gr">Email Us</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Legal</h4>
          <ul className="footer-list">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/cookie-policy">Cookie Policy</Link></li>
            <li><Link href="/terms">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Sterling Digital. All rights reserved.
          </p>
          <p className="developer-tag">
            sterlingdigital.gr — Made with true craftsmanship.
          </p>
        </div>
      </div>
    </footer>
  );
}