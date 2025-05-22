import Link from "next/link";

// import layout components (Header, Footer)
import Header from "@/components/header";
import Footer from "@/components/footer";


export default function HomePage() {
  return (
    <main>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-4 text-lg">This is a simple home page.</p>
        <Link href="/about" className="mt-4 text-blue-500 hover:underline">
          Go to About Page
        </Link>
      </div>
      <Footer />
    </main>
  );
}
