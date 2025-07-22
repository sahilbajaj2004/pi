// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pi 3.14",
  description:
    "Join Pi, a developer community exploring innovation, collaboration, and infinite coding possibilities. Events, learning, and more — in one orbit.",
  keywords: [
    "Pi Community",
    "Developer Group",
    "Code Events",
    "Hackathons",
    "Open Source",
    "JavaScript",
    "Web Development",
    "Tech Meetups",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Pi" }],
  creator: "Pi Community",
  metadataBase: new URL("https://picommunity.vercel.app/"),
  openGraph: {
    title: "Pi Community",
    description:
      "Where developers orbit innovation. Explore coding events, community, and resources.",
    url: "https://picommunity.vercel.app/",
    siteName: "Pi Community",
    images: [
      {
        url: "/pi.png", // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Pi Community Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pi",
    description:
      "Join the Pi community of developers orbiting innovation and sharing code knowledge.",
    images: ["/pi.png"],
    // creator: "@yourhandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  themeColor: "#0f0f1b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
