import IdeeLabSvg from "@ideelab/assets/logos/logo.svg";

export function Loading() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-bg">
      <img
        src={IdeeLabSvg}
        alt="IdeeLab Logo"
        className="w-20 h-20 animate-pulse"
      />
    </main>
  );
}
