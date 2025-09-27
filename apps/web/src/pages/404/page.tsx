import { Link } from "react-router-dom";
import { useTitle } from "@/hooks";
import { MainLayout } from "@/components/layouts";

export default function NotFound() {
  useTitle("IdeeLab | Page Not Found");

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-168px)] md:h-[calc(100vh-128px)] text-center">
        <h1 className="text-6xl font-extrabold">404</h1>
        <p className="text-2xl md:text-3xl mt-4">Oops! Page Not Found</p>
        <p className="mt-2 text-subtle">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-5 px-5 py-2.5 bg-primary text-white rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90"
        >
          Go Back Home
        </Link>
      </div>
    </MainLayout>
  );
}
