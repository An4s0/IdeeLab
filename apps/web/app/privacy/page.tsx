import { Metadata } from "next";
import PrivacyPage from "./privacy";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how IdeeLab collects, uses, and protects your data while you browse and share programming ideas.",
};

export default function Privacy() {
  return <PrivacyPage />;
}
