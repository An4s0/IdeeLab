import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Discover and Share Creative Programming Ideas",
};

import IdeasPage from "./ideas";

export default function Discover() {
  return <IdeasPage />;
}
