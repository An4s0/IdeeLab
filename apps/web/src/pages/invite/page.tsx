import { useState } from "react";
import { Copy, Users, CheckCircle } from "lucide-react";
import { Header } from "@/components/header";
import { useTitle } from "@/hooks";

export default function InvitePage() {
  useTitle("IdeeLab | Invite Friends");

  const [inviteLink, _setInviteLink] = useState(
    "https://ideelab.com/?ref=username",
  );
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = inviteLink;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-64px)] flex flex-col flex-grow container mx-auto pt-20 max-w-4xl justify-center">
        <div className="text-center max-w-4xl mx-auto mb-16 p-6 md:p-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Invite & Earn Rewards
          </div>

          <h1 className="text-4xl md:text-4xl font-bold mb-6">
            Invite Your Friends to
            <br />
            <span className="text-primary">IdeeLab</span>
          </h1>

          <p className="text-subtle max-w-3xl mx-auto mb-12 leading-relaxed">
            Share your invite link and bring friends to our growing community.
            Together, let’s spark ideas and shape the future
            <span className="inline-block ml-1">💡</span>
          </p>

          <div className="bg-bglt rounded-2xl shadow-lg shadow-bgltr p-6 mb-16 border border-br">
            <h2 className="text-lg font-semibold mb-4">
              Your Personal Invite Link
            </h2>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-bgltr rounded-xl p-2">
              <input
                type="text"
                readOnly
                value={inviteLink}
                className="flex-grow text-subtle px-2 py-1"
              />
              <button
                onClick={handleCopy}
                className={`flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-primary text-white hover:shadow-lg hover:bg-primary/90`}
              >
                {copied ? (
                  <>
                    <CheckCircle size={16} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy Link
                  </>
                )}
              </button>
            </div>

            <p className="text-sm text-subtle mt-3">
              Share this link with friends to invite them to join IdeeLab
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
