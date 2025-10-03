// External Libraries
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X, Plus, Bell } from "lucide-react";

// Types & Assets
import IdeeLabSvg from "@ideelab/assets/logos/logo.svg";
import type { UserType } from "@/types";

export function Header() {
  const [user, setUser] = useState<UserType | null>(null);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  useEffect(() => {
    setUser({
      name: "Anas Almutary",
      username: "anas",
      picture: "https://avatars.githubusercontent.com/u/86017774?s=48&v=4",
    });
  }, []);

  return (
    <header className="fixed top-0 w-full h-16 z-50 border-b border-br bg-bg px-3 flex items-center">
      {/* Mobile Search */}
      {mobileSearchOpen && (
        <div className="flex flex-1 items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-12 pr-3 py-3 rounded-2xl bg-bglt text-sm text-subtle placeholder-subtle focus:outline-none focus:ring-1 focus:ring-br"
              autoFocus
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-subtle" />
          </div>
          <button
            onClick={() => setMobileSearchOpen(false)}
            className="p-2 rounded-lg hover:bg-bglt"
            aria-label="Close search"
          >
            <X className="w-6 h-6 text-subtle" />
          </button>
        </div>
      )}

      {/* Default Header */}
      {!mobileSearchOpen && (
        <>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={IdeeLabSvg} alt="IdeeLab Logo" className="w-8 h-8" />
            <span className="text-lg font-bold tracking-tight">IdeeLab</span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 justify-center px-6">
            <div className="relative w-full max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-subtle" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-12 pr-3 py-3 rounded-2xl bg-bgltr text-sm text-subtle placeholder-subtle focus:outline-none focus:ring-1 focus:ring-br"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-1 ml-auto">
            {user ? (
              <>
                {/* Create Idea */}
                <Link
                  className="p-2 rounded-lg bg-primary hover:bg-primary/90"
                  to="/ideas/new"
                  aria-label="Create new idea"
                >
                  <Plus className="w-5 h-5 text-white" />
                </Link>

                {/* Notifications */}
                <Link
                  className="p-2 rounded-lg hover:bg-bgltr"
                  to="/notifications"
                  aria-label="View notifications"
                >
                  <Bell className="w-5 h-5 text-subtle" />
                </Link>

                {/* Profile */}
                <Link
                  to="/profile"
                  className="flex items-center gap-2 lg:px-2 lg:py-1 p-[6px] rounded-lg hover:bg-bgltr"
                  aria-label="Profile"
                >
                  <img
                    src={user.picture}
                    alt="profile"
                    className="w-8 h-8 rounded-lg"
                  />
                  <div className="hidden lg:flex flex-col leading-tight">
                    <span className="font-semibold text-sm">{user.name}</span>
                    <span className="text-xs text-subtle">
                      @{user.username}
                    </span>
                  </div>
                </Link>
              </>
            ) : (
              <Link
                className="px-5 py-1 rounded-lg bg-primary/20 border border-primary/50 text-white hover:bg-primary"
                to="/auth/login"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Search Button */}
          <button
            className="md:hidden ml-auto p-2 rounded-lg hover:bg-bglt"
            onClick={() => setMobileSearchOpen(true)}
            aria-label="Open search"
          >
            <Search className="w-5 h-5 text-subtle" />
          </button>
        </>
      )}
    </header>
  );
}
