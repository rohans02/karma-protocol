import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Karma Protocol",
    template: "%s | Karma Protocol",
  },
  description:
    "Community-driven price feeds for decentralized prediction markets. Replace oracle dependency with position-neutral, weighted price submissions from token holders.",
  keywords: [
    "DeFi",
    "oracle",
    "price feed",
    "Karma Protocol",
    "prediction markets",
    "community oracle",
    "decentralized finance",
    "position neutrality",
    "Stability Nexus",
  ],
  authors: [{ name: "Karma Protocol" }],
  creator: "Karma Protocol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#050505" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Providers>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
