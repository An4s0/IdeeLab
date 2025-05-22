import { Metadata } from "next";
export const metadata: Metadata = {
title: "Discover and Share Creative Programming Ideas",
};

import DiscoverPage from "./discover";

export default function Discover() {
  return <DiscoverPage />;
}
