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
    default: "Sterling Digital — Web Development Portfolio & Blog",
    template: "%s | Sterling Digital",
  },
  description:
    "A portfolio and technical blog from Sterling Digital — custom-coded websites, front-end engineering, and notes on building for the modern web.",
  keywords: [
    "web design Greece",
    "Next.js development",
    "web development portfolio",
    "κατασκευή ιστοσελίδων",
    "business automation",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://sterlingdigital.gr",
    siteName: "Sterling Digital",
    title: "Sterling Digital — Web Development Portfolio & Blog",
    description:
      "A portfolio of custom-coded websites and front-end work, plus articles on performance, security, and building for the modern web.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sterling Digital — Web Development Portfolio & Blog",
    description:
      "A portfolio of custom-coded websites and front-end work, plus articles on performance, security, and building for the modern web.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Runs before first paint so the saved theme is applied without a flash of the
// wrong colours. Kept inline and tiny for that reason.
const themeScript = `
(function(){
  try {
    var stored = localStorage.getItem('sd-theme');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    document.documentElement.dataset.theme = stored || (prefersLight ? 'light' : 'dark');
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${spaceGrotesk.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
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
