import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header fixed={false} />
      <div className="flex-grow container mx-auto py-12 max-w-4xl">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Privacy Policy
          </h1>
          <p className="text-subtle mb-8 text-center">
            Last updated: May 22, 2025
          </p>

          <p className="text-subtle mb-6">
            At IdeeLab, we respect your privacy. This Privacy Policy explains
            how we collect and use your data when you use our platform to
            explore and submit programming ideas.
          </p>

          <div className="space-y-6">
            <div>
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
                  <strong>Account Data:</strong> To submit your solution or rate
                  an idea, we collect your email and password upon registration.
                </li>
                <li>
                  <strong>Submissions:</strong> When you submit your
                  implementation of an idea, we store your code and any
                  associated data.
                </li>
                <li>
                  <strong>Usage Data:</strong> We may collect your IP address
                  and browser type for analytics and to ensure site stability
                  and security.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside text-subtle space-y-2 ml-2">
                <li>To manage your account and track your submissions.</li>
                <li>To improve our platform and enhance user experience.</li>
                <li>To detect abuse or misuse of the service.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">3. Cookies</h2>
              <p className="text-subtle mb-2">
                We use cookies to remember your login session and preferences.
                You can control or disable cookies through your browser
                settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">4. Data Sharing</h2>
              <ul className="list-disc list-inside text-subtle space-y-2 ml-2">
                <li>We do not sell or trade your personal information.</li>
                <li>
                  We may share data with service providers (like hosting
                  platforms) under strict confidentiality agreements.
                </li>
                <li>
                  We may disclose data if required by law or in case of misuse.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
              <ul className="list-disc list-inside text-subtle space-y-2 ml-2">
                <li>
                  You can request access or deletion of your account and data.
                </li>
                <li>You can update your account information at any time.</li>
                <li>Contact us directly for any privacy-related inquiries.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">
                6. Changes to This Policy
              </h2>
              <p className="text-subtle">
                We may update this Privacy Policy periodically. Any changes will
                be reflected here along with the &quot;Last updated&quot; date.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-subtle">
              By using IdeeLab, you agree to this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
