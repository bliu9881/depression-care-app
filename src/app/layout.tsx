import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/amplify";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Depression Care App",
  description: "AI-powered mental health support and depression care platform",
  keywords: ["mental health", "depression", "therapy", "AI", "wellness"],
  authors: [{ name: "Depression Care Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-secondary-50 text-secondary-900">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
