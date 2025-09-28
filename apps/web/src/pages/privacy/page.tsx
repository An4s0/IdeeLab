import { useTitle } from "@/hooks";
import { MainLayout } from "@/components/layouts";

export default function PrivacyPage() {
  useTitle("IdeeLab | Privacy Policy");

  return (
    <MainLayout classNames="flex flex-col flex-grow container mx-auto max-w-7xl">
      <div className="p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Privacy Policy
        </h1>
        <p className="text-subtle mb-8 text-center">
          Last updated: June 27, 2025
        </p>

        <p className="text-subtle mb-6">
          At IdeeLab, we respect your privacy. This Privacy Policy explains how
          we collect and use your data when you use our platform to explore and
          engage with creative programming ideas.
        </p>

        <div className="space-y-6">
          <div className="pb-4">
            <h2 className="text-xl font-semibold mb-3">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside text-subtle space-y-2 ml-2">
              <li>
                <strong>Browsing:</strong> You can browse and explore ideas
                without creating an account. No personal data is required for
                viewing.
              </li>
              <li>
                <strong>Account Data:</strong> To suggest new ideas or interact
                (via comments or votes), we collect your email and basic login
                credentials.
              </li>
              <li>
                <strong>User Interactions:</strong> When you vote on an idea or
                post a comment, this information is stored as part of your
                account activity.
              </li>
              <li>
                <strong>Usage Data:</strong> We may collect IP address and
                browser details for security and analytics.
              </li>
            </ul>
          </div>

          <div className="pb-4">
            <h2 className="text-xl font-semibold mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-subtle space-y-2 ml-2">
              <li>
                To manage your account and enable idea suggestions, votes, and
                comments.
              </li>
              <li>To improve our platform’s features and user experience.</li>
              <li>To monitor for misuse and ensure platform integrity.</li>
            </ul>
          </div>

          <div className="pb-4">
            <h2 className="text-xl font-semibold mb-3">3. Cookies</h2>
            <p className="text-subtle mb-2">
              We use cookies to maintain your login session, remember your
              preferences, and help us understand how users interact with the
              platform (via basic analytics). You can control or disable cookies
              at any time through your browser settings.
            </p>
          </div>

          <div className="pb-4">
            <h2 className="text-xl font-semibold mb-3">4. Data Sharing</h2>
            <ul className="list-disc list-inside text-subtle space-y-2 ml-2">
              <li>
                We do not sell, rent, or trade your personal information to
                third parties.
              </li>
              <li>
                We may share limited data with trusted service providers (such
                as hosting services, analytics tools, or email systems) only as
                necessary to operate the platform. These providers are bound by
                confidentiality agreements.
              </li>
              <li>
                We may disclose information if required by law, or to
                investigate abuse, fraud, or threats to platform integrity.
              </li>
            </ul>
          </div>

          <div className="pb-4">
            <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
            <ul className="list-disc list-inside text-subtle space-y-2 ml-2">
              <li>
                You can request access to the personal data we hold about you.
              </li>
              <li>
                You can request correction or deletion of your account and data.
              </li>
              <li>You can update your account information at any time.</li>
              <li>
                Contact us directly for any privacy-related questions or
                requests.
              </li>
            </ul>
          </div>

          <div className="pb-4">
            <h2 className="text-xl font-semibold mb-3">
              6. Changes to This Policy
            </h2>
            <p className="text-subtle">
              We may update this Privacy Policy from time to time. Changes will
              be posted here along with the updated &quot;Last updated&quot;
              date. If significant changes are made, we will notify users via
              email or platform announcements.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-subtle mb-6">
            By using IdeeLab, you confirm that you have read, understood, and
            agreed to this Privacy Policy.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
