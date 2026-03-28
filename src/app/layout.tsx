import type { Metadata } from "next";
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
  title: "Israel Lopez - Full-Stack Developer & Front-End Specialist",
  description: "Professional portfolio of Israel Lopez, a full-stack developer with 4+ years of experience in React, TypeScript, Node.js, and REST APIs. Currently at Dorger Software Architects.",
  keywords: ["React", "TypeScript", "Full-Stack Developer", "Front-End Engineer", "Node.js", "JavaScript"],
  authors: [{ name: "Israel Lopez" }],
  creator: "Israel Lopez",
  openGraph: {
    title: "Israel Lopez - Full-Stack Developer",
    description: "Professional portfolio showcasing experience in React, full-stack development, and AI-assisted development workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
