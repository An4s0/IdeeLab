import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Logout",
  description: "Logout from your account",
};

import LogoutPage from "./logout";

export default function Logout() {
  return <LogoutPage />;
}
