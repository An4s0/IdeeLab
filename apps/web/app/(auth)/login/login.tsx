"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

// import component (LeftSide)
import LeftSide from "../left-side";

// Import libraries
import user from "@/lib/user";

// Import icons from react-icons
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import ThirdParty from "../third-party";

export default function LoginPage() {
  const [data, setData] = useState({
    email: "",
    password: "",
    terms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>("");

  // Get the error from local storage
  useEffect(() => {
    const err = localStorage.getItem("auth_error");
    if (err) {
      setError(decodeURIComponent(err));
      localStorage.removeItem("auth_error");
    }
  }, []);

  const handleSubmit = async () => {
    // Validate the form
    if (!data.email || !data.password) {
      setError("Please fill all the fields");
      return;
    }
    if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Email is not valid");
      return;
    }
    if (!data.terms) {
      setError("Please accept the terms and conditions");
      return;
    }

    // Call the login function
    const login = await user.login({
      email: data.email,
      password: data.password,
    })

    if (login.success) {
      if (!login.data?.user.verified) {
        window.location.href = "/verify-email";
      } else {
        window.location.href = "/";
      }
    } else {
      setError(login.message);
    }
  };

  return (
    <main className="flex h-screen w-full">
      <LeftSide />
      <div className="w-full lg:w-1/2 flex items-center justify-center p-5 lg:p-8">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-2">Welcome back!</h1>
          <p className="text-subtle mb-3">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-primary cursor-pointer hover:underline"
            >
              Register
            </Link>
          </p>
          {error && <p className="text-red-500 mb-3">{error}</p>}
          <div className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-outline rounded-lg p-3 focus:outline-none focus:border-primary"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-outline rounded-lg p-3 focus:outline-none focus:border-primary"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute right-3 top-4 text-subtle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-primary rounded"
                onClick={() => setData({ ...data, terms: !data.terms })}
              />
              <label htmlFor="terms" className="ml-2 text-sm text-subtle">
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <button
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 cursor-pointer"
              onClick={handleSubmit}
            >
              Login
            </button>
            <div className="text-center text-sm text-subtle my-2">
              <Link
                href="/forgot-password"
                className="text-primary cursor-pointer hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="text-center text-sm text-subtle my-2">
              Or login with
            </div>
            <ThirdParty />
          </div>
        </div>
      </div>
    </main>
  );
}
