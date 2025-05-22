import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to common questions about using IdeeLab to explore and share your programming ideas.",
};

import FAQPage from "./faq";

export default function FAQ() {
  return <FAQPage />;
}
