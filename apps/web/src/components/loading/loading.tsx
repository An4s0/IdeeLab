// Hooks & Assets
import { useTheme } from "@/hooks/useTheme";
import IdeeLabSvg from "@ideelab/assets/logos/logo.svg";

export function Loading() {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "var(--bg)" : "var(--bg)";

  return (
    <main
      className={"w-full h-screen flex items-center justify-center"}
      style={{ backgroundColor: bgColor }}
    >
      {/* Logo with animation */}
      <img
        src={IdeeLabSvg}
        alt="IdeeLab Logo"
        className="w-20 h-20 animate-pulse"
      />
    </main>
  );
}
