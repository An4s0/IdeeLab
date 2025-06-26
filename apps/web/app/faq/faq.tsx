import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function FAQPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header fixed={false} />
      <div className="flex-grow container mx-auto py-12 max-w-7xl">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h1>
          <p className="text-subtle mb-8 text-center">
            Last updated: May 22, 2025
          </p>

          <div className="space-y-6">
            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                1. What is IdeeLab?
              </h2>
              <p className="text-subtle">
                IdeeLab is a platform that provides programming project ideas
                for developers looking to explore, practice, or get inspired. It
                is designed for educational and personal growth purposes.
              </p>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                2. Do I need to create an account?
              </h2>
              <p className="text-subtle">
                No account is required to browse or explore ideas. However, you
                need to register if you want to submit your implementation or
                rate others’ ideas.
              </p>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                3. Can I submit my own project ideas?
              </h2>
              <p className="text-subtle">
                Currently, only the admin team can post new ideas. In the
                future, we may allow community submissions with moderation.
              </p>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                4. Are the ideas beginner-friendly?
              </h2>
              <p className="text-subtle">
                Yes! Each idea is categorized by difficulty (Beginner,
                Intermediate, Advanced, Expert), so you can choose according to
                your level.
              </p>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                5. Can I use the ideas in my portfolio or resume?
              </h2>
              <p className="text-subtle">
                Absolutely. You are encouraged to implement and showcase your
                solutions as part of your learning or professional portfolio.
              </p>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                6. Is there any evaluation or feedback on my submissions?
              </h2>
              <p className="text-subtle">
                IdeeLab does not automatically evaluate submissions. You can
                still receive community feedback if others view or comment on
                your work.
              </p>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                7. How often are new ideas published?
              </h2>
              <p className="text-subtle">
                We aim to publish new ideas regularly. Stay tuned to our
                homepage or social channels for updates.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-subtle mb-6">
              Still have questions? Contact us via the support page or email and
              we’ll be happy to help!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
