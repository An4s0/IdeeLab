// import layout components
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header fixed={false} />
      <div className="flex-grow container mx-auto py-12 max-w-7xl">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Terms of Service
          </h1>
          <p className="text-subtle mb-8 text-center">
            Last updated: May 22, 2025
          </p>

          <div className="space-y-6">
            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                1. Use of the Platform
              </h2>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>
                  You may use IdeeLab to browse, explore, and get inspired by
                  programming ideas for educational and personal development
                  purposes.
                </li>
                <li>
                  You agree not to misuse the platform or engage in activities
                  that disrupt its functionality or harm others.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">2. Accounts</h2>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>
                  Registration is required only to submit your solutions or rate
                  ideas.
                </li>
                <li>
                  You are responsible for keeping your login credentials safe.
                </li>
                <li>
                  We may suspend accounts that violate our rules or abuse the
                  platform.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">3. Content</h2>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>
                  All idea descriptions, user submissions, and related content
                  are either owned by IdeeLab or shared by users under their
                  permission.
                </li>
                <li>
                  By submitting your code or feedback, you grant us the right to
                  display it on the platform.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                4. Submissions and Ratings
              </h2>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>
                  Users may submit their implementation of a given idea or rate
                  the idea's usefulness.
                </li>
                <li>
                  Ratings and feedback are optional and serve only to help
                  others discover valuable content.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                5. Platform Changes
              </h2>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>
                  We reserve the right to update or remove features or content
                  at any time without prior notice.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                6. Limitation of Liability
              </h2>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>You use IdeeLab at your own risk.</li>
                <li>
                  We are not responsible for any damage, loss, or issues arising
                  from using the ideas or content shared on the platform.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-subtle mb-6">
              By using IdeeLab, you confirm that you have read, understood, and
              agreed to these Terms of Service.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
