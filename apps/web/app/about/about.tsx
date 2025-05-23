// import layout components
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header fixed={false} />
      <div className="flex-grow container mx-auto py-12 max-w-5xl">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            About IdeeLab
          </h1>

          <p className="text-subtle text-center max-w-3xl mx-auto mb-12">
            IdeeLab is a platform designed to inspire developers through daily
            programming ideas and challenges. Whether you're just starting your
            coding journey or you're an experienced developer looking for fresh
            concepts, IdeeLab helps you grow through hands-on exploration.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
              <p className="text-subtle">
                We aim to cultivate creativity in software development by
                offering a wide range of project ideas that span different
                difficulty levels and domains. IdeeLab helps developers practice
                real-world skills by working on meaningful challenges.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Who It's For</h2>
              <p className="text-subtle">
                IdeeLab is for learners, hobbyists, and professionals who want
                to sharpen their skills, contribute to creative projects, or
                simply find inspiration for their next build.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">What We Offer</h2>
              <ul className="list-disc list-inside text-subtle ml-4 space-y-2">
                <li>Daily programming ideas across multiple categories</li>
                <li>Difficulty-based challenge levels: Beginner to Expert</li>
                <li>Ability to submit your solutions and showcase them</li>
                <li>Optional ratings and feedback from the community</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
              <p className="text-subtle">
                We believe that practical creativity is the key to mastery in
                programming. IdeeLab is here to spark ideas, encourage
                experimentation, and empower developers to build things that
                matter.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
