import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://client.cofellow.com"),
  title: {
    default: "Cofellow Clients",
    template: "%s – Cofellow Clients",
  },
  description: "We craft creative brands, websites, and digital experiences.",
  openGraph: {
    type: "website",
    url: "https://clients.cofellow.com",
    siteName: "Cofellow",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@co_fellow",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <PageTransitionWrapper>{children}</PageTransitionWrapper>
        <Footer />
      </body>
    </html>
  );
}
