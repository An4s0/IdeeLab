import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import AppProviders from "./providers";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "IdeeLab",
    template: "IdeeLab - %s",
  },
  description:
    "Share and explore creative programming ideas on IdeeLab. Discover inspiring project concepts, vote on your favorites, and spark your next build.",
  keywords: [
    "programming ideas",
    "developer inspiration",
    "project concepts",
    "coding challenges",
    "software ideas",
    "IdeeLab",
  ],
  authors: [
    {
      name: "Anas Almutary",
      url: "https://x.com/anasalmutary",
    },
  ],
  creator: "IdeeLab Team",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${firaCode.className}`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
