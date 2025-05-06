"use client";
import { useState, useRef, useEffect } from "react";
import SubHeader from "@/components/header/sub-header";
import Editor from "@/components/editor";

interface ChallengeData {
  id: string;
  title: string;
  description: string;
  level: string;
  code: string;
  language: string;
  instructions: string[];
}

function ChallengeDescription({ data }: { data: ChallengeData }) {
  return (
    <div className="h-full flex flex-col rounded-md border border-outline overflow-hidden">
      <div className="px-4 py-3 border-b border-outline bg-subtle/15 flex items-center justify-between">
        <h2 className="text-lg font-semibold">{data.title}</h2>
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
          ${
            data.level === "beginner"
              ? "bg-outline/20 text-[#28a745]"
              : data.level === "intermediate"
                ? "bg-outline/20 text-[#007bff]"
                : data.level === "advanced"
                  ? "bg-outline/20 text-[#fd7e14]"
                  : data.level === "expert"
                    ? "bg-outline/20 text-[#dc3545]"
                    : "bg-outline/20 text-[#6c757d]"
          }`}
        >
          {data.level}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-5">
          <div className="bg-subtle/8 p-4 rounded-md border-l-4 border-primary">
            {data.description}
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold border-b border-outline pb-1">
              Instructions:
            </h3>
            <ul className="space-y-2">
              {data.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-outline/30 text-primary text-xs font-medium mr-2 mt-0.5">
                    {index + 1}
                  </span>
                  {instruction}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-outline/10 p-4 rounded-md border border-outline">
            <h3 className="font-semibold mb-2">Test Cases:</h3>
            <pre>
              {`const counter = createCounter(5);
console.log(counter.increment()); // Output: 6
console.log(counter.increment()); // Output: 7
console.log(counter.decrement()); // Output: 6 
console.log(counter.reset());     // Output: 5`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

function Terminal() {
  const logs: Array<{
    type: "info" | "error" | "success" | "warning";
    message: string;
  }> = [
    { type: "info", message: "> Terminal initialized" },
    { type: "success", message: "> Environment ready" },
    { type: "info", message: "> Running tests..." },
    {
      type: "success",
      message: "> Test 1 passed: Counter initialized correctly",
    },
    {
      type: "success",
      message: "> Test 2 passed: Increment works as expected",
    },
    {
      type: "warning",
      message: "> Test 3 warning: Edge case not handled for negative values",
    },
    {
      type: "error",
      message:
        "> Test 4 failed: Reset function does not return the correct value",
    },
  ];

  return (
    <div className="h-full flex flex-col rounded-md border border-outline overflow-hidden">
      <div className="px-4 py-2 border-b border-outline flex items-center justify-between">
        <h2 className="font-medium">Terminal Output</h2>
        <div className="flex space-x-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 font-mono text-sm">
        {logs.map((log, index) => (
          <div
            key={index}
            className={`mb-1.5 ${
              log.type === "error"
                ? "text-red-500"
                : log.type === "success"
                  ? "text-green-500"
                  : log.type === "warning"
                    ? "text-yellow-500"
                    : "text-subtle-foreground"
            }`}
          >
            {log.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EditorPage() {
  const [leftWidth, setLeftWidth] = useState<number>(45);
  const [topHeight, setTopHeight] = useState<number>(60);

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<
    "challenge" | "editor" | "terminal"
  >("challenge");

  const isHorizontalResizing = useRef<boolean>(false);
  const isVerticalResizing = useRef<boolean>(false);

  const [challengeData, setChallengeData] = useState<ChallengeData>({
    id: "1",
    title: "Implement a Counter Function",
    description:
      "Create a JavaScript function that implements a counter with increment, decrement, and reset capabilities. The counter should maintain its state between function calls and provide methods to modify or reset its value.",
    level: "intermediate",
    code: `function createCounter(initialValue = 0) {\n  // Your implementation here\n}`,
    language: "javascript",
    instructions: [
      "Implement the createCounter function that returns an object with methods.",
      "The object should have increment(), decrement(), and reset() methods.",
      "The increment method should increase the counter by 1 and return the new value.",
      "The decrement method should decrease the counter by 1 and return the new value.",
      "The reset method should restore the counter to its initial value and return it.",
    ],
  });

  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 1500);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseDownHorizontal = (): void => {
    isHorizontalResizing.current = true;
  };

  const handleMouseDownVertical = (): void => {
    isVerticalResizing.current = true;
  };

  const handleTouchStartHorizontal = (): void => {
    isHorizontalResizing.current = true;
  };

  const handleTouchStartVertical = (): void => {
    isVerticalResizing.current = true;
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    if (isHorizontalResizing.current) {
      const newLeftWidth = (e.clientX / window.innerWidth) * 100;
      setLeftWidth(Math.min(Math.max(newLeftWidth, 10), 90));
    }

    if (isVerticalResizing.current) {
      const containerHeight = window.innerHeight - 65;
      const newTopHeight = ((e.clientY - 65) / containerHeight) * 100;
      setTopHeight(Math.min(Math.max(newTopHeight, 10), 90));
    }
  };

  const handleMouseUp = (): void => {
    isHorizontalResizing.current = false;
    isVerticalResizing.current = false;
  };

  const handleTouchEnd = (): void => {
    isHorizontalResizing.current = false;
    isVerticalResizing.current = false;
  };

  const MobileTabs = () => (
    <div className="flex w-full border-b border-outline">
      <button
        className={`flex-1 py-2 text-center transition-colors ${
          activeSection === "challenge"
            ? "bg-outline/20 font-medium text-primary"
            : "hover:bg-outline/10"
        } cursor-pointer`}
        onClick={() => setActiveSection("challenge")}
      >
        Challenge
      </button>
      <button
        className={`flex-1 py-2 text-center transition-colors ${
          activeSection === "editor"
            ? "bg-outline/20 font-medium text-primary"
            : "hover:bg-outline/10"
        } cursor-pointer`}
        onClick={() => setActiveSection("editor")}
      >
        Editor
      </button>
      <button
        className={`flex-1 py-2 text-center transition-colors ${
          activeSection === "terminal"
            ? "bg-outline/20 font-medium text-primary"
            : "hover:bg-outline/10"
        } cursor-pointer`}
        onClick={() => setActiveSection("terminal")}
      >
        Terminal
      </button>
    </div>
  );

  const onCodeChange = (newCode: string): void => {
    setChallengeData((prev) => ({ ...prev, code: newCode }));
  };

  if (isMobile) {
    return (
      <main className="min-h-screen flex flex-col bg-background">
        <SubHeader />
        <MobileTabs />
        <div className="flex-1 p-2">
          {activeSection === "challenge" && (
            <div className="h-[calc(100vh-122px)]">
              <ChallengeDescription data={challengeData} />
            </div>
          )}

          {activeSection === "editor" && (
            <div className="h-[calc(100vh-122px)] border border-outline rounded-md overflow-hidden">
              <Editor
                code={challengeData.code}
                language={challengeData.language}
                onCodeChange={onCodeChange}
              />
            </div>
          )}

          {activeSection === "terminal" && (
            <div className="h-[calc(100vh-122px)]">
              <Terminal />
            </div>
          )}
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen bg-background"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchEnd={handleTouchEnd}
    >
      <SubHeader />
      <div className="flex w-full h-[calc(100vh-65px)] p-2 gap-2">
        <div style={{ width: `${leftWidth}%` }}>
          <ChallengeDescription data={challengeData} />
        </div>
        <div
          className="w-1 cursor-e-resize bg-outline hover:bg-outline-hover rounded-full"
          onMouseDown={handleMouseDownHorizontal}
          onTouchStart={handleTouchStartHorizontal}
        />
        <div
          className="flex-1 flex flex-col gap-2"
          style={{ width: `${100 - leftWidth}%` }}
        >
          <div
            className="border border-outline rounded-md overflow-hidden"
            style={{ height: `${topHeight}%` }}
          >
            <Editor
              code={challengeData.code}
              language={challengeData.language}
              onCodeChange={onCodeChange}
            />
          </div>
          <div
            className="h-1 cursor-ns-resize bg-outline hover:bg-outline-hover rounded-full"
            onMouseDown={handleMouseDownVertical}
            onTouchStart={handleTouchStartVertical}
          />
          <div style={{ height: `${100 - topHeight - 1}%` }}>
            <Terminal />
          </div>
        </div>
      </div>
    </main>
  );
}
