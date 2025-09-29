"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import LeftSide from "../left-side";
import { Eye, EyeClosed } from "lucide-react";
import ThirdParty from "../third-party";

export default function LoginPage() {
  const [data, setData] = useState({
    email: "",
    password: "",
    terms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, _setError] = useState<string>("");

  return (
    <main className="flex h-screen w-full">
      <LeftSide />
      <div className="w-full lg:w-1/2 flex items-center justify-center p-5 lg:p-8">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-2">Welcome back!</h1>
          <p className="text-subtle mb-3">
            Don&apos;t have an account?{" "}
            <Link
              to="/auth/register"
              className="text-primary cursor-pointer hover:underline"
            >
              Register
            </Link>
          </p>
          {error && <p className="text-red-500 mb-3 text-center">{error}</p>}
          <div className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-br rounded-lg p-3 focus:outline-none focus:border-subtle/50"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-br rounded-lg p-3 focus:outline-none focus:border-subtle/50"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute right-3 top-4 text-subtle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
              </button>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4"
                onClick={() => setData({ ...data, terms: !data.terms })}
              />
              <label htmlFor="terms" className="ml-2 text-sm text-subtle">
                I agree to the{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <button className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 cursor-pointer">
              Login
            </button>
            <div className="text-center text-sm text-subtle my-2">
              <Link
                to="/forgot-password"
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
