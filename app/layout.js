import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import PostHogProvider from "../components/PostHogProvider";
import GTMScript, { GTMNoScript } from "../components/GTMScript";
import CookieConsent from "../components/CookieConsent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://yyit.nl"),
  title: {
    default: "YYIT | IT-beheer & Cybersecurity voor het MKB",
    template: "%s | YYIT",
  },
  description:
    "YYIT levert professioneel IT-beheer en cybersecurity voor het MKB. Vaste maandprijzen, 24/7 monitoring en NIS2-compliance. Vanaf €14,95 per werkplek.",
  keywords: [
    "IT-beheer MKB",
    "cybersecurity MKB",
    "managed IT services",
    "werkplekbeheer",
    "IT uitbesteden",
    "NIS2",
  ],
  authors: [{ name: "YYIT", url: "https://yyit.nl" }],
  creator: "YYIT",
  publisher: "YYIT",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "YYIT",
    title: "YYIT | IT-beheer & Cybersecurity voor het MKB",
    description:
      "Professioneel IT-beheer en cybersecurity voor het MKB. Vaste maandprijzen, 24/7 monitoring. Vanaf €14,95 per werkplek.",
    url: "https://yyit.nl",
  },
  twitter: {
    card: "summary_large_image",
    title: "YYIT | IT-beheer & Cybersecurity voor het MKB",
    description:
      "Professioneel IT-beheer en cybersecurity voor het MKB. Vaste maandprijzen, 24/7 monitoring. Vanaf €14,95 per werkplek.",
    site: "@yyit_nl",
    creator: "@yyit_nl",
  },
  icons: {
    icon: "/Favicon.svg",
    shortcut: "/Favicon.svg",
  },
  alternates: {
    canonical: "https://yyit.nl",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <GTMScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GTMNoScript />
        <PostHogProvider>
          {children}
        </PostHogProvider>
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
