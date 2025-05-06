"use client";

import { useState, useEffect, useRef } from "react";
import { Editor as MonacoEditor } from "@monaco-editor/react";
import { useTheme } from "next-themes";

interface MonacoEditorRef {
  setValue: (value: string) => void;
}

export default function Editor({
  code,
  language,
  onCodeChange,
}: {
  code: string;
  language: string;
  onCodeChange: (newCode: string) => void;
}) {
  const { theme } = useTheme();
  const editorRef = useRef<MonacoEditorRef | null>(null);
  const [editorTheme, setEditorTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      setEditorTheme("vs-dark");
    } else if (theme === "light") {
      setEditorTheme("vs");
    } else if (theme === "system") {
      setEditorTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "vs-dark"
          : "vs",
      );
    }
  }, [theme]);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setValue(code);
    }
  }, [code]);

  return (
    <MonacoEditor
      height="100%"
      width="100%"
      language={language}
      value={code}
      onChange={(newValue) => onCodeChange(newValue || "")}
      theme={editorTheme}
      options={{
        fontSize: 14,
        lineNumbers: "on",
        minimap: {
          enabled: false,
        },
        automaticLayout: true,
        scrollBeyondLastLine: false,
        wordWrap: "on",
        wrappingStrategy: "advanced",
        wrappingIndent: "same",
        renderLineHighlight: "all",
        renderWhitespace: "all",
        renderControlCharacters: true,
        formatOnPaste: true,
        formatOnType: true,
        tabSize: 2,
        insertSpaces: true,
        autoIndent: "full",
        suggestOnTriggerCharacters: true,
        quickSuggestions: true,
        quickSuggestionsDelay: 10,
        autoClosingBrackets: "languageDefined",
        autoClosingQuotes: "languageDefined",
        autoSurround: "languageDefined",
      }}
    />
  );
}
