import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Daily Coding Challenges",
};

import HomePage from "./home";

export default function Home() {
  return <HomePage />;
}
