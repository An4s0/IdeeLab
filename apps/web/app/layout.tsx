import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

import AppProvider from "./provider";

import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

const ideelab = {
  title: "IdeeLab",
  description:
    "Share and explore creative programming ideas on IdeeLab. Discover inspiring project concepts, vote on your favorites, and spark your next build.",
  url: process.env.NEXT_PUBLIC_BASE_URL!,
};

export const metadata: Metadata = {
  metadataBase: new URL(ideelab.url),
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
