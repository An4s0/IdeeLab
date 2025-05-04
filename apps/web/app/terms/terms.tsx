import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header fixed={false} />

      <div className="flex-grow container mx-auto md:px-4 py-12 max-w-4xl">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Terms of Service
          </h1>

          <p className="text-subtle mb-8 text-center">
            Last updated: April 21, 2025
          </p>

          <div className="space-y-6">
            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                1. Use of the Platform
              </h2>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>
                  You may use IdeeLab only for educational and personal
                  development purposes.
                </li>
                <li>
                  You may not use the platform for any illegal activities or to
                  harm the service or other users.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">2. Accounts</h2>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>
                  You must provide accurate information when creating an
                  account.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your login credentials.
                </li>
                <li>
                  We reserve the right to suspend or delete accounts that
                  violate our terms or disrupt the platform.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">3. Content</h2>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>
                  All challenges, solutions, tutorials, and other materials on
                  the platform are owned by IdeeLab or by users who post them.
                </li>
                <li>
                  By submitting content (such as solutions or comments), you
                  grant us the right to use and display it within the platform.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                4. Challenge Levels & Badges
              </h2>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>
                  The platform features a ranking system for challenges and
                  achievement badges to reflect your progress.
                </li>
                <li>
                  This system is meant for encouragement and does not represent
                  an official evaluation of your programming level.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                5. Modifications to the Service
              </h2>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>
                  We may update, modify, or discontinue any part of IdeeLab at
                  any time, with or without prior notice.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-xl font-semibold mb-3">
                6. Limitation of Liability
              </h2>
              <ul className="list-disc list-inside space-y-2 text-subtle ml-2">
                <li>Your use of IdeeLab is at your own risk.</li>
                <li>
                  We are not liable for any losses resulting from the use or
                  reliance on content within the platform.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-subtle mb-6">
              By using IdeeLab, you acknowledge that you have read, understood,
              and agree to these Terms of Service.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
