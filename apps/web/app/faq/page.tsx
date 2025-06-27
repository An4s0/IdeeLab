import { Metadata } from "next";
import FAQPage from "./faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about using IdeeLab for programming ideas.",
};

export default function FAQ() {
  return <FAQPage />;
}
