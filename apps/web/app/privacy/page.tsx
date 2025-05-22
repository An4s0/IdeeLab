import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how IdeeLab collects, uses, and protects your data while you browse and share programming ideas.",
};

import PrivacyPage from "./privacy";

export default function Privacy() {
  return <PrivacyPage />;
}
