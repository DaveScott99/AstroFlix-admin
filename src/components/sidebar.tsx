import { Cog, Film, LayoutDashboard, LifeBuoy, Plus, Tv } from "lucide-react";
import { Link } from "react-router-dom";
import LogoSolo from "../assets/Logo-solo-white.svg";
import { useContext } from "react";
import { UtilityAreaContext } from "../contexts/utility-area";

interface SidebarItemProps {
  icon: any;
  text: string;
  active?: any;
  path: string | "";
  action?: any;
}

export function Sidebar() {
  const { clear } = useContext(UtilityAreaContext);

  return (
    <aside className="h-screen fixed z-50">
      <h3 className="hidden">Sidebar</h3>
      <nav className={`h-full flex flex-col gap-4`}>
        <div className="p-4  flex justify-center items-center">
          <img
            src={LogoSolo}
            alt="Brand"
            className={`max-w-[30px] select-none `}
          />
        </div>

        <ul className="flex-1 px-3 gap-2 flex flex-col">
          <SidebarItem
            icon={
              <LayoutDashboard
                size={24}
                strokeWidth={1.75}
                absoluteStrokeWidth
              />
            }
            text="Dashboard"
            path="/dashboard"
          />
          <SidebarItem
            icon={<Film size={24} strokeWidth={1.75} absoluteStrokeWidth />}
            text="Movie"
            path="/movie"
            action={() => clear()}
          />

          <SidebarItem
            icon={<Tv size={24} strokeWidth={1.75} absoluteStrokeWidth />}
            text="TvShow"
            path="#"
          />

          <SidebarItem
            icon={<Plus size={24} strokeWidth={1.75} absoluteStrokeWidth />}
            text="Create"
            path="/create/movie"
          />
        </ul>

        <div className="px-3 py-8 gap-2 flex flex-col">
          <SidebarItem
            icon={<Cog size={24} strokeWidth={1.75} absoluteStrokeWidth />}
            text="Settings"
            path="#"
          />
          <SidebarItem
            icon={<LifeBuoy size={24} strokeWidth={1.75} absoluteStrokeWidth />}
            text="Help"
            path="#"
          />
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, path, action }: SidebarItemProps) {
  return (
    <Link to={path} onClick={action}>
      <li
        className={`
            relative flex py-3 px-4 
            rounded-md cursor-pointer
            transition-colors group
            ${active ? "bg-transparent" : "hover:bg-zinc-200/10"}
        `}
      >
        {icon}
        <div
          className={`
              absolute left-full rounded-md px-2 py-1 ml-6
              bg-zinc-950 border text-sm
              invisible opacity-20 -translate-x-3 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
        >
          {text}
        </div>
      </li>
    </Link>
  );
}
