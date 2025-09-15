import { Home, Compass, Plus, Bell, User } from "lucide-react";
import { NavLink } from "react-router-dom";

export function BottomBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 bg-bglt border-t border-br flex items-center justify-around md:hidden z-50 rounded-t-2xl">
      <NavLink
        to="/"
        className="flex flex-col items-center text-subtle hover:text-primary"
      >
        <Home className="w-6 h-6" />
        <span className="text-xs">Home</span>
      </NavLink>

      <NavLink
        to="/explore"
        className="flex flex-col items-center text-subtle hover:text-primary"
      >
        <Compass className="w-6 h-6" />
        <span className="text-xs">Explore</span>
      </NavLink>

      <NavLink
        to="/new"
        className="relative -mt-10 bg-primary p-4 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-primary/90"
        aria-label="Create new idea"
      >
        <Plus className="w-6 h-6" />
      </NavLink>

      <NavLink
        to="/notifications"
        className="flex flex-col items-center text-subtle hover:text-primary"
      >
        <Bell className="w-6 h-6" />
        <span className="text-xs">Alerts</span>
      </NavLink>

      <NavLink
        to="/profile"
        className="flex flex-col items-center text-subtle hover:text-primary"
      >
        <User className="w-6 h-6" />
        <span className="text-xs">Profile</span>
      </NavLink>
    </nav>
  );
}
