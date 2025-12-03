import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import NextThemesProvider from "@/components/ThemeProvider";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gitaoh.github.io"),
  title: "Gitaoh | Software Engineer • TypeScript • Cloud & DevOps",
  description:
    "Software Engineer specializing in Full-Stack development using Typescript, Cloud, DevOps, AWS, and Scalable Web Applications.",
  keywords: [
    "Gitaoh",
    "Frontend Engineer",
    "TypeScript Developer",
    "Backend Engineer",
    "Cloud Engineer",
    "DevOps Engineer",
    "NestJS",
    "AWS",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Gitaoh", url: "https://gitaoh.github.io" }],
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "revisit-after": "7 days",
    distribution: "global",
    rating: "general",
    "format-detection": "telephone=no, date=no, email=no, address=no",
  },
  openGraph: {
    type: "website",
    url: "https://gitaoh.github.io",
    title: "Gitaoh | Software Engineer • TypeScript • Cloud & DevOps",
    description:
      "Software Engineer specializing in Full-Stack development using Typescript, Cloud, DevOps, AWS, and Scalable Web Applications.",
    images: [
      {
        url: "https://gitaoh.github.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gitaoh Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gitaoh | Software Engineer • TypeScript • Cloud & DevOps",
    description:
      "Software Engineer specializing in Full-Stack development using Typescript, Cloud, DevOps, AWS, and Scalable Web Applications.",
    images: ["https://gitaoh.github.io/og-image.png"],
  },
};

// Todo: How come the meta is rendered inside the html body tag

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={"dark"}
      suppressHydrationWarning={true}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextThemesProvider
          attribute={"class"}
          defaultTheme={"system"}
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
