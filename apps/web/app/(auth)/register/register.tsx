"use client";
import { useState } from "react";
import Link from "next/link";

// Import components (left-side)
import LeftSide from "../left-side";
import ThirdParty from "../third-party";

// Import libraries
import user from "@/lib/user";

// Import icons from react-icons
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function RegisterPage() {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async () => {
    setError("");

    if (!data.name || !data.username || !data.email || !data.password) {
      setError("Please fill all the fields");
      return;
    }
    if (data.name.length < 3 || data.name.length > 20) {
      setError("Name must be between 3 and 20 characters long");
      return;
    }
    if (data.username.length < 3 || data.username.length > 20) {
      setError("Username must be between 3 and 20 characters long");
      return;
    }
    if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Email is not valid");
      return;
    }
    if (data.password.length < 8 || data.password.length > 30) {
      setError("Password must be between 8 and 30 characters long");
      return;
    }
    if (data.password.includes(" ")) {
      setError("Password must not contain spaces");
      return;
    }
    if (!data.password.match(/[a-z]/)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!data.password.match(/[A-Z]/)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!data.password.match(/[0-9]/)) {
      setError("Password must contain at least one number");
      return;
    }
    if (!data.password.match(/[^a-zA-Z0-9]/)) {
      setError("Password must contain at least one special character");
      return;
    }
    if (data.password != data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!data.terms) {
      setError("Please agree to the terms and privacy");
      return;
    }

    const register = await user.register(data);

    if (register.success) {
      window.location.href = "/verify-email";
    } else {
      setError(register.message);
    }
  };

  return (
    <main className="flex h-screen w-full">
      <LeftSide />
      <div className="w-full lg:w-1/2 flex items-center justify-center p-5 lg:p-8">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-2">Create an account</h1>
          <p className="text-subtle mb-3">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary cursor-pointer hover:underline"
            >
              Login
            </Link>
          </p>
          {error && <p className="text-red-500 mb-3">{error}</p>}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-outline rounded-lg p-3 focus:outline-none focus:border-primary"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-outline rounded-lg p-3 focus:outline-none focus:border-primary"
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-outline rounded-lg p-3 focus:outline-none focus:border-primary"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full border border-outline rounded-lg p-3 focus:outline-none focus:border-primary"
                value={data.confirmPassword}
                onChange={(e) =>
                  setData({ ...data, confirmPassword: e.target.value })
                }
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
                onClick={() => setData({ ...data, terms: !data.terms })}
                className="h-4 w-4 text-primary rounded"
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
              Register
            </button>
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
