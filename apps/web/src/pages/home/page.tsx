import { useTitle } from "@/hooks/useTitle";
import { Header } from "@/components/header";
import { Link } from "react-router-dom";

export default function HomePage() {
  useTitle("IdeeLab | Where coding ideas come alive");

  return (
    <>
      <Header />
      <main>
        <Link
          to="/explore"
          className="hidden md:block fixed bottom-5 right-5 px-4 py-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90"
        >
          Explore
        </Link>
      </main>
    </>
  );
}
