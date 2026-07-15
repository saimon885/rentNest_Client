import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sheard/Navbar";
import Footer from "@/components/sheard/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RentNest | Find & List Rental Properties with Ease",
  description: "A professional rental property marketplace platform.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-base-100 text-neutral">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
