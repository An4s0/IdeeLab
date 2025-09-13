import { useTitle } from "@/hooks/useTitle";
import { Header } from "@/components/header";

export default function HomePage() {
  useTitle("IdeeLab | Where coding ideas come alive");

  return (
    <>
      <Header />
      <main></main>
    </>
  );
}
