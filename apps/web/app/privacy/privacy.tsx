import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header fixed={false} />

      <div className="flex-grow container mx-auto md:px-4 py-12 max-w-4xl">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Privacy Policy
          </h1>

          <p className="text-subtle mb-8 text-center">
            Last updated: April 21, 2025
          </p>

          <p className="text-subtle mb-6">
            At IdeeLab, your privacy is important to us. This Privacy Policy
            explains how we collect, use, and protect your personal information
            when you use our platform.
          </p>

          <div className="space-y-6">
            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                1. Information We Collect
              </h2>
              <p className="text-subtle mb-2">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>
                  Account Information: When you register, we collect your
                  username, email address, and password.
                </li>
                <li>
                  Usage Data: Information about how you interact with the
                  platform, such as challenges you attempt, time spent, and your
                  progress.
                </li>
                <li>
                  Technical Data: Your IP address, browser type, device
                  information, and operating system.
                </li>
                <li>
                  Optional Data: If you participate in discussions, comments, or
                  community events, we may store your contributions.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-subtle mb-2">We use the collected data to:</p>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>Provide and improve our services.</li>
                <li>Personalize your experience on the platform.</li>
                <li>
                  Communicate with you (e.g., updates, challenge results).
                </li>
                <li>Monitor usage patterns and platform performance.</li>
                <li>Ensure security and prevent misuse.</li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                3. Sharing of Information
              </h2>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>We do not sell or rent your personal data.</li>
                <li>We may share your information with:</li>
                <ul className="list-disc list-inside ml-6 text-subtle">
                  <li>
                    Service providers that help us operate the site (e.g.,
                    analytics, hosting).
                  </li>
                  <li>
                    Legal authorities if required by law or to protect our
                    rights.
                  </li>
                </ul>
                <li>
                  All third parties are required to respect the security of your
                  data and treat it in accordance with the law.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                4. Cookies and Tracking
              </h2>
              <p className="text-subtle mb-2">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>Keep you logged in.</li>
                <li>Remember your preferences.</li>
                <li>Analyze traffic and usage.</li>
                <li>
                  You can control or disable cookies through your browser
                  settings.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">5. Data Security</h2>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>
                  We take data security seriously and use reasonable measures to
                  protect your information from unauthorized access or loss.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
              <p className="text-subtle mb-2">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>Access the personal data we hold about you.</li>
                <li>Request corrections to inaccurate data.</li>
                <li>Request deletion of your account and data.</li>
                <li>Opt-out of communications.</li>
                <li>
                  To exercise these rights, please contact us through our Help
                  Center.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                7. Changes to This Policy
              </h2>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>
                  We may update this policy from time to time. When we do, we
                  will notify you by updating the &quot;Last Updated&quot; date
                  and, if appropriate, via email or platform notice.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-subtle mb-6">
              By using IdeeLab, you acknowledge that you have read, understood,
              and agree to this Privacy Policy.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
