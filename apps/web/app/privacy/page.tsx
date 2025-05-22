import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "This is the privacy policy for our application. We value your privacy and are committed to protecting your personal information.",
};

import PrivacyPage from "./privacy";

export default function Privacy() {
  return <PrivacyPage />;
}
