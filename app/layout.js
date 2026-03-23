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
  title: "YYIT",
  description: "Beveilig je digitale wereld met onze geavanceerde cybersecurity-oplossingen. Bescherm je gegevens, netwerk en systemen tegen bedreigingen.",
  icons: {
    icon: "/Favicon.svg",
    shortcut: "/Favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
