import { useTitle } from "@/hooks/useTitle";
import { Header } from "@/components/header";
// import { Link } from "react-router-dom";

export default function HomePage() {
  useTitle("IdeeLab | Where coding ideas come alive");

  return (
    <>
      <Header />
      <main className="p-3 mt-16">
        <div className="w-full h-60 rounded-lg overflow-hidden relative bg-bglt">
          <img
            src={"/banner.svg"}
            alt="Banner"
            className="absolute top-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2"
          />
        </div>
        {/* <Link
          to="/explore"
          className="hidden md:block fixed bottom-5 right-5 px-4 py-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90"
        >
          Explore
        </Link> */}
      </main>
    </>
  );
}
