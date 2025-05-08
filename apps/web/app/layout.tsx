import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

import AppProvider from "./provider";

import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

const ideelab = {
  title: "IdeeLab",
  description:
    "A platform for daily coding challenges to level up your programming skills.",
  url: "https://ideelab.com",
};

export const metadata: Metadata = {
  title: {
    default: ideelab.title,
    template: "IdeeLab - %s",
  },
  description: ideelab.description,
  twitter: {
    card: "summary_large_image",
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
