import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My First Next.js Website",
  description: "Learning Next.js step by step",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-800">
        <header className="bg-blue-700 text-white shadow-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between p-5">
            <h2 className="text-2xl font-bold">My Website</h2>

            <nav className="flex gap-6">
              <Link href="/" className="hover:text-yellow-300">
                Home
              </Link>

              <Link href="/about" className="hover:text-yellow-300">
                About
              </Link>

              <Link href="/contact" className="hover:text-yellow-300">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {children}

      </body>
    </html>
  );
}