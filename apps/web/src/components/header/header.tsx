import { useEffect, useState } from "react";
import { Sun, Moon, Search, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import IdeeLabSvg from "@ideelab/assets/logos/logo.svg";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [user, setUser] = useState<{
    name: string;
    username: string;
    picture: string;
  } | null>(null);

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
      {/* Mobile search */}
      {mobileSearchOpen ? (
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
          <button onClick={() => setMobileSearchOpen(false)} className="p-2">
            <X className="w-6 h-6 text-subtle" />
          </button>
        </div>
      ) : (
        <>
          {/* Left side */}
          <a href="/" className="flex items-center gap-2">
            <img src={IdeeLabSvg} alt="IdeeLab" className="w-8 h-8" />
            <span className="text-lg font-bold tracking-tight">IdeeLab</span>
          </a>

          {/* Desktop Search */}
          <div className="hidden sm:flex flex-1 justify-center px-6">
            <div className="relative w-full max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-subtle" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-12 pr-3 py-3 rounded-2xl bg-bglt text-sm text-subtle placeholder-subtle focus:outline-none focus:ring-1 focus:ring-br"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="hidden sm:flex items-center gap-3 ml-auto">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-bglt"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {user ? (
              <div className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-bglt cursor-pointer">
                <img
                  src={user.picture}
                  alt="profile"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col leading-tight">
                  <span className="font-semibold text-sm">{user.name}</span>
                  <span className="text-xs text-subtle">@{user.username}</span>
                </div>
              </div>
            ) : (
              <a
                className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90"
                href="/signin"
              >
                Sign In
              </a>
            )}
          </div>

          {/* Mobile search button */}
          <button
            className="sm:hidden ml-auto p-2 rounded-lg hover:bg-bglt"
            onClick={() => setMobileSearchOpen(true)}
          >
            <Search className="w-5 h-5 text-subtle" />
          </button>
        </>
      )}
    </header>
  );
}
