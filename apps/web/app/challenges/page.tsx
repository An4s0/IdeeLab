import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Challenges",
  description:
    "This is the challenges page for our application. We provide a variety of challenges to help you improve your skills.",
};

import ChallengesPage from "./challenges";

export default function Challenges() {
  return <ChallengesPage />;
}
