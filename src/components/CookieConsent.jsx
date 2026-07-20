"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "sd-cookie-consent";

export default function CookieConsent() {
  // null = not yet decided this session; false = hidden; true = show banner
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) setVisible(true);
    } catch {
      // localStorage unavailable (e.g. privacy mode) — show the banner anyway.
      setVisible(true);
    }
  }, []);

  const decide = (choice) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, date: new Date().toISOString() })
      );
    } catch {
      /* no-op */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-inner">
        <p className="cookie-text">
          We use essential cookies to make this site work, and optional analytics
          cookies only with your consent. See our{" "}
          <Link href="/cookie-policy">Cookie Policy</Link> and{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
        <div className="cookie-actions">
          <button
            type="button"
            className="cookie-btn cookie-reject"
            onClick={() => decide("rejected")}
          >
            Decline optional
          </button>
          <button
            type="button"
            className="cookie-btn cookie-accept"
            onClick={() => decide("accepted")}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
