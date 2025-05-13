"use client";
import { useState } from "react";
import Link from "next/link";
import LeftSide from "../left-side";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa6";
import user from "@/lib/user";
import cookies from "@/lib/cookies";

type data = {
  email: string;
  password: string;
  terms: boolean;
};

export default function LoginPage() {
  const [data, setData] = useState<data>({
    email: "",
    password: "",
    terms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async () => {
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

    const login = await user.login(data);

    if (login.success) {
      cookies.set("token", login.data?.token as string, 7);
      window.location.href = "/";
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

          <p className="text-subtle mb-6">
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

            <div className="flex gap-4">
              <button className="w-1/2 border border-outline py-3 rounded-lg flex items-center justify-center cursor-pointer hover:bg-subtle/10">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>
              <button className="w-1/2 border border-outline py-3 rounded-lg flex items-center justify-center cursor-pointer hover:bg-subtle/10">
                <FaGithub size={20} className="mr-2" />
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
