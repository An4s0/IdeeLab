import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about IdeeLab — a platform that provides creative programming ideas and daily challenges to inspire developers and help them grow through hands-on projects.",
};

import AboutPage from "./about";

export default function FAQ() {
  return <AboutPage />;
}
