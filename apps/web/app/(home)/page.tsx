import { Metadata } from "next";
import HomePage from "./home";

export const metadata: Metadata = {
  title: "Creative Programming Ideas",
  description: "Discover and share creative programming ideas on IdeeLab.",
};

export default function Page() {
  return <HomePage />;
}
