import { Metadata } from "next";
import SupportPage from "./support";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Contact IdeeLab support for help with technical issues, feedback, or questions.",
};

export default function FAQ() {
  return <SupportPage />;
}
