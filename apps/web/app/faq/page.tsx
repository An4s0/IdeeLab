import { Metadata } from "next";
import FAQPage from "./faq";
export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to common questions about using IdeeLab to explore and share your programming ideas.",
};

export default function FAQ() {
  return <FAQPage />;
}
