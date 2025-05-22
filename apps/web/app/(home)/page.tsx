import { Metadata } from "next";
export const metadata: Metadata = {
title: "Discover and Share Creative Programming Ideas",
};

import HomePage from "./home";

export default function Home() {
  return <HomePage />;
}
