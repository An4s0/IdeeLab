"use client";
import { useParams } from "next/navigation";
import { useState } from "react";

// Import layout components (Header, Footer)
import LeftSide from "../../left-side";

// Import libraries
import user from "@/lib/user";

export default function VerifyEmailPage() {
  const params = useParams();
  const verifyToken = params.token;
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleResendVerificationEmail = async () => {
    // Reset state
    setError(null);
    setSuccess(false);

    const verificationToken = await user.verifyEmail(verifyToken as string);

    if (verificationToken.success) {
      setSuccess(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } else {
      setError(verificationToken.message || "Failed to verified email");
    }
  };

  return (
    <main className="flex h-screen w-full">
      <LeftSide />
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-5 lg:p-8 max-w-2xl mx-auto space-y-2 text-center">
        <h1 className="text-2xl font-bold">Verify Your Email</h1>
        {error && <p className="text-md text-red-500">{error}</p>}
        {success && (
          <p className="text-md text-green-600">
            Your email has been verified successfully!
          </p>
        )}
        <p className="text-subtle">
          Please click the button below to verify your email address. If you
          have already verified your email, you can ignore this message.
        </p>
        <button
          className={`mt-6 px-4 py-2 rounded-md text-white font-medium transition cursor-pointer bg-primary hover:bg-primary/80`}
          onClick={handleResendVerificationEmail}
        >
          Verify
        </button>
      </div>
    </main>
  );
}
