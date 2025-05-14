import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Register",
  description: "Create a new account",
};

import RegisterPage from "./register";

export default function Register() {
  return <RegisterPage />;
}
