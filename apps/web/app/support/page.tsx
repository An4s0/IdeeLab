import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Support",
  description:
    "Need help or have a question? Contact the IdeeLab support team for assistance with technical issues, feedback, or general inquiries.",
};

import SupportPage from "./Support";

export default function FAQ() {
  return <SupportPage />;
}
