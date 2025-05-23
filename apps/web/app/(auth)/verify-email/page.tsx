import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Verify Email",
  description: "Verify your email address",
};

import VerifyEmailPage from "./verify-email";

export default function VerifyEmail() {
  return <VerifyEmailPage />;
}
