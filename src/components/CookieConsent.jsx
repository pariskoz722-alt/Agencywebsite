"use client";
import { useSyncExternalStore } from "react";
import Link from "next/link";
import {
  subscribe,
  getConsent,
  getServerConsent,
  setConsent,
} from "@/lib/cookieConsent";

export default function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getConsent, getServerConsent);

  if (consent) return null;

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
            onClick={() => setConsent("rejected")}
          >
            Decline optional
          </button>
          <button
            type="button"
            className="cookie-btn cookie-accept"
            onClick={() => setConsent("accepted")}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
