import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import AppProvider from "./provider";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IdeeLab",
  description: "A platform for daily, weekly, and monthly coding challenges to level up your programming skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className}`}>
        <AppProvider>
          {children}




        </AppProvider>
      </body>
    </html>
  );
}
