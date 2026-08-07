import { Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import MotionProvider from "@/components/MotionProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-logo",
});

export const metadata = {
  metadataBase: new URL("https://sterlingdigital.gr"),
  title: {
    default: "Sterling Digital — Premium Web Design & Development",
    template: "%s | Sterling Digital",
  },
  description:
    "Sterling Digital crafts premium websites, ultra-fast development, and intelligent automation for forward-thinking brands.",
  keywords: [
    "web design Greece",
    "Next.js development",
    "digital agency Athens",
    "κατασκευή ιστοσελίδων",
    "business automation",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://sterlingdigital.gr",
    siteName: "Sterling Digital",
    title: "Sterling Digital — Premium Web Design & Development",
    description:
      "We build websites that make businesses impossible to ignore. Premium design, ultra-fast development, and intelligent automation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sterling Digital — Premium Web Design & Development",
    description:
      "We build websites that make businesses impossible to ignore. Premium design, ultra-fast development, and intelligent automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${fraunces.variable}`}>
      <body>
        <MotionProvider>
          <Navbar />
          {children}
          <Footer />
          <CookieConsent />
        </MotionProvider>
      </body>
    </html>
  );
}
