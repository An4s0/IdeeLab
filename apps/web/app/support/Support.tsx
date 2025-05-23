// import layout components
import Header from "@/components/header";
import Footer from "@/components/footer";

// import icons from
import { CiMail } from "react-icons/ci";
import { FaGithub, FaBug, FaExternalLinkAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuMessageCircleMore } from "react-icons/lu";

export default function SupportPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header fixed={false} />
      <div className="flex-grow container mx-auto py-12 max-w-5xl px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get Support</h1>
          <p className="text-lg text-subtle max-w-3xl mx-auto leading-relaxed">
            Need help? We&apos;re here for you. Choose the best way to get in
            touch based on your needs.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-30">
          {/* Email Support */}
          <div className="flex items-center justify-between bg-outline/5 border border-outline/30 rounded-xl px-8 py-4">
            <div className="bg-outline/20 p-3 rounded-lg mr-4">
              <CiMail className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Email Support</h3>
              <p className="text-subtle">
                Get personalized help via email. We typically respond within 24
                hours.
              </p>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:support@ideelab.cc"
              className="text-primary hover:text-primary/70 font-medium flex items-center"
            >
              <FaExternalLinkAlt className="ml-2 h-5 w-5 text-foreground" />
            </a>
          </div>
          {/* GitHub Issues */}
          <div className="flex items-center justify-between bg-outline/5 border border-outline/30 rounded-xl px-8 py-4">
            <div className="bg-outline/20 p-3 rounded-lg mr-4">
              <FaBug className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Report Issues</h3>
              <p className="text-subtle">
                Found a bug or have a feature request? Create an issue on
                GitHub.
              </p>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/An4s0/IdeeLab/issues"
              className="text-primary hover:text-primary/70 font-medium flex items-center"
            >
              <FaExternalLinkAlt className="ml-2 h-5 w-5 text-foreground" />
            </a>
          </div>
          {/* Community Discussion */}
          <div className="flex items-center justify-between bg-outline/5 border border-outline/30 rounded-xl px-8 py-4">
            <div className="bg-outline/20 p-3 rounded-lg mr-4">
              <LuMessageCircleMore className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Discussions</h3>
              <p className="text-subtle">
                Join community discussions, ask questions, and share ideas.
              </p>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/An4s0/IdeeLab/discussions"
              className="text-primary hover:text-primary/70 font-medium flex items-center"
            >
              <FaExternalLinkAlt className="ml-2 h-5 w-5 text-foreground" />
            </a>
          </div>
        </div>

        {/* Resources Section */}
        <div className="rounded-2xl mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* GitHub Repository */}
            <div className="bg-outline/5 rounded-xl p-6 border border-outline/20">
              <div className="flex items-center mb-4">
                <FaGithub className="w-10 h-10 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold">GitHub Repository</h3>
                  <p className="text-subtle">
                    Browse source code and contribute
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <a
                  href="https://github.com/An4s0/IdeeLab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary hover:text-primary/70 font-medium"
                >
                  → Main Repository
                </a>
                <a
                  href="https://github.com/IdeeLab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary hover:text-primary/70 font-medium"
                >
                  → Organization Profile
                </a>
              </div>
            </div>
            {/* Social */}
            <div className="bg-outline/5 rounded-xl p-6 border border-outline/20">
              <div className="flex items-center mb-4">
                <FaXTwitter className="w-10 h-10 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold">Stay Updated</h3>
                  <p className="text-subtle">Follow us for news and updates</p>
                </div>
              </div>
              <div className="space-y-3">
                <a
                  href="https://x.com/ideelab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary hover:text-primary/70 font-medium"
                >
                  → Follow on X
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
