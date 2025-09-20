import { Header } from "@/components/header";
import { useTitle } from "@/hooks";

export default function SupportPage() {
  useTitle("IdeeLab | Support & Contact");

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-64px)] flex flex-col flex-grow container mx-auto py-20 max-w-7xl">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Support & Contact
          </h1>

          <p className="text-subtle text-center max-w-3xl mx-auto mb-12">
            Need help or want to give feedback? Reach out to us through any of
            the following channels. We’re here to make your experience with
            IdeeLab smooth and enjoyable.
          </p>

          <div className="space-y-10 max-w-2xl mx-auto">
            <section>
              <h2 className="text-xl font-semibold mb-2">GitHub Repository</h2>
              <p className="text-subtle">
                Explore the project code, report issues, or contribute:
              </p>
              <ul className="list-disc mt-1 list-inside text-subtle ml-4 space-y-1">
                <li>
                  <a
                    href="https://github.com/An4s0/IdeeLab"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    View Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/An4s0/IdeeLab/issues"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Open an Issue
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/An4s0/IdeeLab/discussions"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Join the Discussion
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <p className="text-subtle">
                Reach out to us directly for any inquiries or support requests:
              </p>
              <p className="text-blue-600 hover:underline">
                <a href="mailto:support@ideelab.cc">support@ideelab.cc</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">X (Twitter)</h2>
              <p className="text-subtle">
                Follow us or send a message for quick updates and support:
              </p>
              <p className="text-blue-600 hover:underline">
                <a href="https://twitter.com/ideelabapp" target="_blank">
                  @IdeeLab
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12 text-center text-subtle">
            <p>
              We appreciate your feedback and contributions. Let’s make IdeeLab
              even better!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
