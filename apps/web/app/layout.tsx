import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

import AppProvider from "./provider";

import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

const ideelab = {
  title: "IdeeLab",
  description:
    "A platform for daily, weekly, and monthly coding challenges to level up your programming skills.",
  url: "https://ideelab.com",
};

export const metadata: Metadata = {
  title: {
    default: ideelab.title,
    template: "IdeeLab - %s",
  },
  description: ideelab.description,
  openGraph: {
    title: ideelab.title,
    description: ideelab.description,
    url: ideelab.url,
    siteName: ideelab.title,
    images: [
      {
        url: `${ideelab.url}/opengraph-image.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ideelab",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${firaCode.className}`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
