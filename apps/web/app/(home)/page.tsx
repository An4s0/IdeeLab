import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Coding Challenges",
};

import HomePage from "./home";

export default function Home() {
  return <HomePage />;
}
