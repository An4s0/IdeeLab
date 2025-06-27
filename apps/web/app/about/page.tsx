import { Metadata } from "next";
import AboutPage from "./about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover how IdeeLab inspires developers with creative programming ideas.",
};

export default function FAQ() {
  return <AboutPage />;
}
