// External Libraries
import type React from "react";

// Components
import { Header, BottomBar } from "../navigations";

export function MainLayout({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) {
  return (
    <>
      <Header />

      {/* Main content */}
      <main className={`py-20 px-3 min-h-screen ${classNames}`}>
        {children}
      </main>

      <BottomBar />
    </>
  );
}
