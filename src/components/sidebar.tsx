import { Cog, LifeBuoy } from "lucide-react";
import { Link } from "react-router-dom";
import LogoSolo from "../assets/Logo-solo-white.svg"

interface SidebarProps {
  children?: any;
}

interface SidebarItemProps {
  icon: any;
  text: string;
  active?: any;
  alert?: any;
  path: string;
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <aside className="h-screen fixed  ">
      <h3 className="hidden">Sidebar</h3>
      <nav className={`h-full flex flex-col gap-4`}>
        
        <div className="p-4  flex justify-center items-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={LogoSolo}
              alt="Brand"
              className={`max-w-[50px] select-none `}
            />
          </Link>
        </div>

        <ul className="flex-1 px-3 gap-2 flex flex-col">{children}</ul>

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

export function SidebarItem({ icon, text, active, path }: SidebarItemProps) {
  return (
    <Link to={path}>
      <li
        className={`
          relative flex py-4 px-5 
          rounded-md cursor-pointer
          transition-colors group
          ${active ? "bg-transparent" : "hover:bg-zinc-200/50"}
      `}
      >
        {icon}

        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-transparent border text-sm
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
