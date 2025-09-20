import { Header } from "@/components/header";
import { useTitle } from "@/hooks";

export default function AboutPage() {
  useTitle("IdeeLab | About us");

  return (
     <>
      <Header />
      <main className="min-h-screen flex flex-col flex-grow container mx-auto py-20 max-w-7xl">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            About IdeeLab
          </h1>

          <p className="text-subtle text-center max-w-3xl mx-auto mb-12">
            IdeeLab is a platform designed to spark creativity through unique
            programming ideas. Whether you&apos;re a beginner or a seasoned
            developer, explore fresh, community-driven concepts to fuel your
            next project.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
              <p className="text-subtle">
                We aim to fuel innovation in software development by providing a
                wide range of programming ideas across categories, tech stacks,
                and skill levels. IdeeLab empowers developers to discover new
                possibilities and start meaningful projects.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Who It&apos;s For</h2>
              <p className="text-subtle">
                IdeeLab is for learners, hobbyists, and professionals who seek
                fresh inspiration, want to brainstorm solo projects, or are
                looking for portfolio-worthy concepts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">What We Offer</h2>
              <ul className="list-disc list-inside text-subtle ml-4 space-y-2">
                <li>Curated programming project ideas to spark creativity</li>
                <li>Ideas organized by category, tags, and goal</li>
                <li>Hands-on projects that encourage practical learning</li>
                <li>Flexible concepts — build them your way, in your time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
              <p className="text-subtle">
                We believe that creativity is the foundation of great software.
                IdeeLab exists to encourage exploration, support innovation, and
                help developers turn ideas into reality — their way.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
