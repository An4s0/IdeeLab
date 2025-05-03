import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Page Not Found",
};

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function NotFound() {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-lg">Page Not Found</p>
        <p className="mt-2 text-sm text-subtle">
          The page you are looking for does not exist.
        </p>
      </div>
      <Footer />
    </main>
  );
}
