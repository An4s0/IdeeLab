import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
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
  openGraph: {
    title: "IdeeLab – Creative Programming Ideas",
    description:
      "Browse and share innovative coding ideas, get inspired, and vote on your favorite projects.",
    url: "https://ideelab.cc",
    siteName: "IdeeLab",
    images: [
      {
        url: "https://ideelab.cc/og-image.png",
        width: 1200,
        height: 630,
        alt: "IdeeLab Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IdeeLab – Creative Programming Ideas",
    description:
      "Get inspired by developer-submitted project ideas. Explore, vote, and start building!",
    site: "@ideelab",
    creator: "@ideelab",
    images: ["https://ideelab.cc/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firaCode.variable}>
      <body>{children}</body>
    </html>
  );
}
