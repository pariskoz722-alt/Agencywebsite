import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
});

export const metadata = {
  metadataBase: new URL("https://sterlingdigital.gr"),
  title: {
    default: "Sterling Digital — Premium Web Design & Development",
    template: "%s | Sterling Digital",
  },
  description:
    "Sterling Digital crafts premium websites, ultra-fast development, and intelligent automation for forward-thinking brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
