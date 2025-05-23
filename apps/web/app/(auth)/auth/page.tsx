import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication page",
};

import AuthenticationPage from "./authentication";

export default function Authentication() {
  return <AuthenticationPage />;
}
