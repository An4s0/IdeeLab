import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-outline/50">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/4">
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <h1 className="text-xl font-bold">IdeeLab</h1>
            </div>
            <p className="text-sm text-subtle leading-relaxed">
              Your go-to platform for daily coding challenges, consistent
              practice, and developer growth.
            </p>
          </div>

          <div className="w-full md:w-3/4 grid grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6">
            <div>
              <h3 className="text-base font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-subtle text-sm">
                <li>
                  <Link
                    href="/challenges"
                    className="hover:text-foreground/80 transition"
                  >
                    Challenges
                  </Link>
                </li>
                <li>
                  <Link
                    href="/leaderboard"
                    className="hover:text-foreground/80 transition"
                  >
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/progress"
                    className="hover:text-foreground/80 transition"
                  >
                    Track Progress
                  </Link>
                </li>
                <li>
                  <Link
                    href="/badges"
                    className="hover:text-foreground/80 transition"
                  >
                    Earn Badges
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights"
                    className="hover:text-foreground/80 transition"
                  >
                    Developer Insights
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-subtle text-sm">
                <li>
                  <Link
                    href="/docs"
                    className="hover:text-foreground/80 transition"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className="hover:text-foreground/80 transition"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="hover:text-foreground/80 transition"
                  >
                    Community Forum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-foreground/80 transition"
                  >
                    Blog Posts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="hover:text-foreground/80 transition"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-2 text-subtle text-sm">
                <li>
                  <a
                    href="mailto:me@ianas.me"
                    className="hover:text-foreground/80 transition"
                  >
                    Email Us
                  </a>
                </li>
                <li>
                  <Link
                    href="https://github.com/An4s0/IdeeLab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground/80 transition"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-foreground/80 transition"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-foreground/80 transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-outline/30">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center py-4 text-xs text-muted">
            © {new Date().getFullYear()} IdeeLab. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
