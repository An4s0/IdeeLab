import type React from "react";
import { Header, BottomBar } from "../navigation";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="p-3 mt-16">
        {children}
        <br />
      </main>
      <BottomBar />
    </>
  );
}
