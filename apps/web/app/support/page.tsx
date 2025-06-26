import { Metadata } from "next";
import SupportPage from "./support";
export const metadata: Metadata = {
  title: "Support",
  description:
    "Need help or have a question? Contact the IdeeLab support team for assistance with technical issues, feedback, or general inquiries.",
};

export default function FAQ() {
  return <SupportPage />;
}
