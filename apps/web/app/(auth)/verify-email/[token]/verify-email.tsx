"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import axios from "axios";
import cookies from "@/lib/cookies";
import { ApiResponse } from "@/types";

export default function VerifyEmailPage() {
  const params = useParams();
  const verifyToken = params.token;
  const [error, setError] = useState<string | null>(null);
  const [buttonMessage, setButtonMessage] =
    useState<string>("Verify Your Email");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleVerifyEmail = async () => {
    setError(null);
    setSuccess(false);
    setLoading(true);

    try {
      const token = cookies.get("token");
      if (!token) {
        setError("You are not logged in");
        setLoading(false);
        return;
      }

      const res = await axios({
        url:
          process.env.NEXT_PUBLIC_API_URL + "/auth/verify-email/" + verifyToken,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.data;

      if (data.success) {
        setSuccess(true);
        setButtonMessage("Email verified!");
        setTimeout(() => {
          setButtonMessage("Go to Home");
          setSuccess(false);
        }, 5000);
      } else {
        setError(data.message || "Failed to send verification email");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data as Partial<ApiResponse> | undefined;
        if (err && err.message) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] text-center max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold">Verify Your Email</h1>

        {error && <p className="mt-4 text-md text-red-500">{error}</p>}

        {success && (
          <p className="mt-4 text-md text-green-600">
            Your email has been verified successfully!
          </p>
        )}

        <p className="mt-4 text-md text-subtle">
          Please click the button below to verify your email address. If you
          have already verified your email, you can ignore this message.
        </p>

        <button
          className={`mt-6 px-4 py-2 rounded-md text-white font-medium transition cursor-pointer
            ${loading ? "bg-primary/70 cursor-not-allowed" : "bg-primary hover:bg-primary/80"}
          `}
          onClick={() => {
            if (buttonMessage === "Verify Your Email") {
              handleVerifyEmail();
            } else {
              window.location.href = "/";
            }
          }}
          disabled={loading}
        >
          {loading ? "Verifying..." : buttonMessage}
        </button>
      </div>
      <Footer />
    </main>
  );
}
