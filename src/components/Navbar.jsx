"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          Nexus<span>Digital</span>
        </Link>

        
        <div className="nav-links">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact" className="nav-cta">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}