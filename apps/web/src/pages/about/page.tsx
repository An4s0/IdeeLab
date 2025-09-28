import { MainLayout } from "@/components/layouts";
import { useTitle } from "@/hooks";

export default function AboutPage() {
  useTitle("IdeeLab | About us");

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl mt-6 md:mt-12">
        <div className="p-4">
          <h1 className="mb-6 text-center text-3xl md:text-4xl font-bold">
            About IdeeLab
          </h1>

          <p className="mb-12 max-w-3xl mx-auto text-center text-subtle">
            IdeeLab is a platform designed to spark creativity through unique
            programming ideas. Whether you&apos;re a beginner or a seasoned
            developer, explore fresh, community-driven concepts to fuel your
            next project.
          </p>

          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <section className="max-w-3xl">
              <h2 className="mb-2 text-2xl font-semibold">Our Mission</h2>
              <p className="text-subtle">
                We aim to fuel innovation in software development by providing a
                wide range of programming ideas across categories, tech stacks,
                and skill levels. IdeeLab empowers developers to discover new
                possibilities and start meaningful projects.
              </p>
            </section>

            <section className="max-w-3xl">
              <h2 className="mb-2 text-2xl font-semibold">Who It&apos;s For</h2>
              <p className="text-subtle">
                IdeeLab is for learners, hobbyists, and professionals who seek
                fresh inspiration, want to brainstorm solo projects, or are
                looking for portfolio-worthy concepts.
              </p>
            </section>

            <section className="max-w-3xl">
              <h2 className="mb-2 text-2xl font-semibold">What We Offer</h2>
              <ul className="ml-4 list-disc list-inside space-y-2 text-subtle">
                <li>Curated programming project ideas to spark creativity</li>
                <li>Ideas organized by category, tags, and goal</li>
                <li>Hands-on projects that encourage practical learning</li>
                <li>Flexible concepts — build them your way, in your time</li>
              </ul>
            </section>

            <section className="max-w-3xl">
              <h2 className="mb-2 text-2xl font-semibold">Our Vision</h2>
              <p className="text-subtle">
                We believe that creativity is the foundation of great software.
                IdeeLab exists to encourage exploration, support innovation, and
                help developers turn ideas into reality — their way.
              </p>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
