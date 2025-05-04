import SubHeader from "@/components/header/sub-header";
import Footer from "@/components/footer/footer";

export default function ChallengesPage() {
  return (
    <main>
      <SubHeader />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Challenges</h1>
        <p className="mt-4 text-lg">Coming soon...</p>
      </div>
      <Footer />
    </main>
  );
}
