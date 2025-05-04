import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "These are the terms of service for our application. By using our application, you agree to these terms.",
};

import TermsPage from "./terms";

export default function terms() {
  return <TermsPage />;
}
