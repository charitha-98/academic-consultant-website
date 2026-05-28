import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expert Academic Assistance | Assignments, Projects & Theses",
  description: "Get high-quality, plagiarism-free university assignments, research projects, and thesis writing assistance from an expert academic writer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <main className="min-h-screen">
          {children}
        </main>
        <WhatsAppButton />
      </body>
    </html>
  );
}