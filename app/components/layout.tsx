import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Expert Academic Consultation & Assignment Help | AcademicAI',
  description: 'Get 100% plagiarism-free assignment guidance, thesis formatting, and research proposal support from elite academic writers. Achieve A+ grades securely.',
  keywords: ['assignment help', 'academic consultant', 'thesis writing help', 'research proposal', 'proofreading services'],
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