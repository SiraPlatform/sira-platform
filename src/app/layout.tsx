import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Morocco Opportunity Platform",
  description:
    "Discover opportunities, guides, communities, and resources for Moroccan youth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-white text-gray-900">
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="text-xl font-bold"
            >
              🇲🇦 Opportunity Platform
            </Link>

            <div className="flex flex-wrap items-center gap-5 text-sm">
              <Link
                href="/"
                className="hover:text-blue-600"
              >
                Home
              </Link>

              <Link
                href="/categories"
                className="hover:text-blue-600"
              >
                Explore Opportunities
              </Link>

              <Link
                href="/guides"
                className="hover:text-blue-600"
              >
                Guides
              </Link>

              <Link
                href="/communities"
                className="hover:text-blue-600"
              >
                Communities
              </Link>

              <Link
                href="/resources"
                className="hover:text-blue-600"
              >
                Resources
              </Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}