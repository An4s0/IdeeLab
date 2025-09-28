import type React from "react";
import { Header, BottomBar } from "../navigation";

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
      <main className={`py-20 px-4 min-h-screen ${classNames}`}>
        {children}
      </main>
      <BottomBar />
    </>
  );
}
