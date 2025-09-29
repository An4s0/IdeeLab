"use client";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import IdeeLabSvg from "@ideelab/assets/logos/logo.white.svg";

export default function LeftSide() {
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "We are glad to see you again",
    "Let's create something amazing together",
    "Your ideas matter to us",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="hidden lg:flex lg:w-1/2 bg-primary relative flex-col justify-between p-8">
      <div className="flex flex-col items-center">
        <Link to={"/"}>
           <img src={IdeeLabSvg} alt="IdeeLab Logo" className="h-24" />
        </Link>
        <h1 className="text-white text-5xl font-bold mt-4">IdeeLab</h1>
      </div>

      <div className="flex flex-col mb-12 z-10">
        <p className="text-white text-2xl font-bold">Welcome back</p>
        <p className="text-white text-lg mt-2">{messages[messageIndex]}</p>

        <div className="flex mt-6 gap-2">
          {messages.map((_, i) => (
            <div
              key={i}
              className={`w-6 h-1 rounded-full transition-all ${i === messageIndex ? "bg-white" : "bg-white opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
