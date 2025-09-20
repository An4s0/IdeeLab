import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  Moon,
  Search,
  X,
  User,
  Settings,
  Info,
  UserPlus,
  LifeBuoy,
  Plus,
  Bell,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { useTheme } from "@/hooks";
import { BottomBar } from "./bottom-bar";
import IdeeLabSvg from "@ideelab/assets/logos/logo.svg";

type MenuItem =
  | { icon: React.ElementType; label: string; href: string; action?: never }
  | {
      icon: React.ElementType;
      label: string;
      action: () => void;
      href?: never;
    };

export function Header() {
  const { theme, setTheme } = useTheme();
  const [user, setUser] = useState<{
    name: string;
    username: string;
    picture: string;
  } | null>(null);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setUser({
      name: "Anas Almutary",
      username: "anas",
      picture: "https://avatars.githubusercontent.com/u/86017774?s=48&v=4",
    });
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems: MenuItem[][] = [
    [
      { icon: User, label: "Your Profile", href: "/profile" },
      { icon: Settings, label: "Settings", href: "/settings" },
    ],
    [
      {
        icon: theme === "dark" ? Sun : Moon,
        label: theme === "dark" ? "Light Mode" : "Dark Mode",
        action: () => setTheme(theme === "dark" ? "light" : "dark"),
      },
    ],
    [
      { icon: Info, label: "About us", href: "/about" },
      { icon: HelpCircle, label: "Support", href: "/support" },
    ],
    [
      { icon: UserPlus, label: "Invite Friends", href: "/invite" },
      {
        icon: LifeBuoy,
        label: "Report a Problem",
        action: () =>
          window.open(
            "https://github.com/An4s0/IdeeLab/issues/new?template=problem_report.yml",
            "_blank"
          ),
      },
      { icon: LogOut, label: "Logout", href: "/auth/logout" },
    ],
  ];

  return (
    <>
      <header className="fixed top-0 w-full h-16 z-50 border-b border-br bg-bg px-3 flex items-center">
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
            <Link to="/" className="flex items-center gap-2">
              <img src={IdeeLabSvg} alt="" className="w-8 h-8" />
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
            {/* Right side actions */}
            <div className="hidden md:flex items-center gap-1 ml-auto">
              {user ? (
                <>
                  <Link
                    className="p-2 rounded-lg bg-primary hover:bg-primary/90"
                    to={"/ideas/new"}
                    aria-label="Create new idea"
                  >
                    <Plus className="w-5 h-5 text-white" />
                  </Link>
                  <Link
                    className="p-2 rounded-lg hover:bg-bgltr"
                    to={"/notifications"}
                    aria-label="View notifications"
                  >
                    <Bell className="w-5 h-5 text-subtle" />
                  </Link>
                  <div className="relative" ref={profileRef}>
                    <div
                      className="flex items-center gap-2 lg:px-2 lg:py-1 p-[6px] rounded-lg hover:bg-bgltr cursor-pointer"
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                    >
                      <img
                        src={user.picture}
                        alt="profile"
                        className="w-8 h-8 rounded-lg"
                      />
                      <div className="hidden lg:flex flex-col leading-tight">
                        <span className="font-semibold text-sm">
                          {user.name}
                        </span>
                        <span className="text-xs text-subtle">
                          @{user.username}
                        </span>
                      </div>
                    </div>

                    {isProfileOpen && (
                      <div className="absolute right-0 mt-3 w-64 p-4 bg-bglt rounded-xl shadow-lg border border-br overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                        {/* User header in dropdown */}
                        <div className="border-b border-br pb-3">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <img
                                src={user.picture}
                                alt="User Avatar"
                                className="w-12 h-12 rounded-xl object-cover shadow-sm"
                              />
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-br"></div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-md truncate">
                                {user.name}
                              </p>
                              <p className="text-sm text-subtle truncate">
                                @{user.username}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Dynamic menu items */}
                        <div className="py-2">
                          {menuItems.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                              {section.map((item, itemIndex) => {
                                const Icon = item.icon;
                                return item.href ? (
                                  <Link
                                    key={itemIndex}
                                    to={item.href}
                                    className={`w-full flex items-center gap-3 px-2 py-3 text-sm hover:bg-bgltr group rounded-xl ${
                                      item.href === "/auth/logout"
                                        ? "text-red-500"
                                        : "text-subtle"
                                    }`}
                                  >
                                    <Icon
                                      className={`w-4 h-4 ${
                                        item.label === "Light Mode"
                                          ? "text-yellow-400"
                                          : item.label === "Dark Mode"
                                            ? "text-purple-500"
                                            : ""
                                      }`}
                                    />
                                    <span className="font-medium">
                                      {item.label}
                                    </span>
                                  </Link>
                                ) : (
                                  <button
                                    key={itemIndex}
                                    onClick={item.action}
                                    className="w-full flex items-center gap-3 px-2 py-3 text-sm hover:bg-bgltr group rounded-xl text-subtle"
                                  >
                                    <Icon
                                      className={`w-4 h-4 ${
                                        item.label === "Light Mode"
                                          ? "text-yellow-400"
                                          : item.label === "Dark Mode"
                                            ? "text-purple-500"
                                            : ""
                                      }`}
                                    />
                                    <span className="font-medium">
                                      {item.label}
                                    </span>
                                  </button>
                                );
                              })}
                              {sectionIndex < menuItems.length - 1 && (
                                <div className="my-2 h-px bg-br"></div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Footer links */}
                        <div className="pt-2 border-t border-br">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Link
                                to="/terms"
                                className="text-xs text-subtle hover:underline"
                              >
                                Terms
                              </Link>
                              <Link
                                to="/privacy"
                                className="text-xs text-subtle hover:underline"
                              >
                                Privacy
                              </Link>
                              <a
                                href="https://github.com/An4s0/IdeeLab"
                                target="_blank"
                                className="text-xs text-subtle hover:underline"
                              >
                                Github
                              </a>
                            </div>
                            <img
                              src={IdeeLabSvg}
                              alt="IdeeLab"
                              className="w-5 h-5"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
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
            {/* Mobile search button */}
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

      <BottomBar />
    </>
  );
}
