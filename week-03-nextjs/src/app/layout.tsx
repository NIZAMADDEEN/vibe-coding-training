
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MISAB NOOR ACADEMY JANI",
  description:
    "Together We Grow, Together We Learn! Nursery and Primary School.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white">

        <Header />

        <div className="flex-1">
          {children}
        </div>

        <Footer />

      </body>
    </html>
  );
}
