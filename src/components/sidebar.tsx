import { Film, Tv, Plus, Cog, Home } from "lucide-react";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/Logo-solo-white.svg";

export function Sidebar() {
  return (
    <aside className="fixed left-0 h-full max-w-[80px] w-full py-4">
      <ul className="flex flex-col items-center gap-8">
        <li>
          <Link to="/">
            <img
              src={LogoWhite}
              alt="Brand"
              className="max-w-[40px] w-full max-h-[40px] h-full select-none"
            />
          </Link>
        </li>

        <div className="flex flex-col gap-4">
          <Link to="/">
            <li className="p-2 rounded-md hover:bg-blue-700 transition-all">
              <Home size={24} strokeWidth={1.75} absoluteStrokeWidth />
            </li>
          </Link>

          <Link to="/movie">
            <li className="p-2 rounded-md hover:bg-blue-700 transition-all">
              <Film size={24} strokeWidth={1.75} absoluteStrokeWidth />
            </li>
          </Link>

          <Link to="#">
            <li className="p-2 rounded-md hover:bg-blue-700 transition-all">
              <Tv size={24} strokeWidth={1.75} absoluteStrokeWidth />
            </li>
          </Link>

          <Link to="/create/movie">
            <li className="p-2 rounded-md hover:bg-blue-700 transition-all">
              <Plus size={24} strokeWidth={1.75} absoluteStrokeWidth />
            </li>
          </Link>

          <Link to="#">
            <li className="p-2 rounded-md hover:bg-blue-700 transition-all">
              <Cog size={24} strokeWidth={1.75} absoluteStrokeWidth />
            </li>
          </Link>
        </div>
      </ul>
    </aside>
  );
}
