import { useEffect, useState } from "react";
import IdeeLabSvg from "@ideelab/assets/logos/logo.svg";

export function Header() {
  const [_user, setUser] = useState<{
    name: string;
    username: string;
    picture: string;
  } | null>(null);

  useEffect(() => {
    setUser({
      name: "Anas Almutary",
      username: "anas",
      picture: "https://avatars.githubusercontent.com/u/86017774?s=48&v=4",
    });
  }, []);

  return (
    <header className="fixed w-full h-16 top-0 z-50 border-b border-br bg-bg">
      <div className="flex h-full justify-between items-center px-4 lg:px-6">
        <a href="/" className="flex items-center space-x-2">
          <img src={IdeeLabSvg} alt="IdeeLab" className="w-8 h-8" />
          <span className="text-xl font-bold">IdeeLab</span>
        </a>
      </div>
    </header>
  );
}
