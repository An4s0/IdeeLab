import { Home, Compass, Plus, Bell, User } from "lucide-react";
import { NavLink } from "react-router-dom";

function navLinkClass(isActive: boolean, isPending?: boolean) {
  return `flex flex-col items-center hover:text-primary ${
    isPending ? "text-text" : isActive ? "text-primary" : "text-subtle"
  }`;
}

export function BottomBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 bg-bglt border-t border-br flex items-center justify-around md:hidden z-50 rounded-t-2xl px-2 shadow-sm">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          navLinkClass(isActive, isPending)
        }
      >
        <Home className="w-6 h-6" />
        <span className="text-xs mt-1">Home</span>
      </NavLink>

      <NavLink
        to="/ideas"
        className={({ isActive, isPending }) =>
          navLinkClass(isActive, isPending)
        }
      >
        <Compass className="w-6 h-6" />
        <span className="text-xs mt-1">Explore</span>
      </NavLink>

      <NavLink
        to="/ideas/new"
        className="bg-primary p-3 rounded-xl flex items-center justify-center text-white shadow-md hover:bg-primary/90"
        aria-label="Create new idea"
      >
        <Plus className="w-6 h-6" />
      </NavLink>

      <NavLink
        to="/notifications"
        className={({ isActive, isPending }) =>
          navLinkClass(isActive, isPending)
        }
      >
        <Bell className="w-6 h-6" />
        <span className="text-xs mt-1">Alerts</span>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive, isPending }) =>
          navLinkClass(isActive, isPending)
        }
      >
        <User className="w-6 h-6" />
        <span className="text-xs mt-1">Profile</span>
      </NavLink>
    </nav>
  );
}
