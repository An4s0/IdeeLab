import { Metadata } from "next";
import PrivacyPage from "./privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Understand how IdeeLab handles your data when browsing or sharing programming ideas.",
};

export default function Privacy() {
  return <PrivacyPage />;
}
