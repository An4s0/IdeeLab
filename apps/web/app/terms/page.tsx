import { Metadata } from "next";
import TermsPage from "./terms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms and conditions for using IdeeLab to explore and share programming ideas.",
};

export default function Terms() {
  return <TermsPage />;
}
