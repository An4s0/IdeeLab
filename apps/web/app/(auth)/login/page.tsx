import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

import LoginPage from "./login";

export default function Login() {
  return <LoginPage />;
}
