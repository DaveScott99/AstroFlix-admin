import { Link } from "react-router-dom";
import LogoWhite from "../assets/Logo-solo-white.svg";
import LogoLetters from "../assets/Logo-letters.svg";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  Cog,
  LifeBuoy,
  MoreVertical,
  PanelLeftOpen,
  PanelRightOpen,
} from "lucide-react";
import React, { createContext, useContext } from "react";

const SidebarContext = createContext<unknown>("");

interface SidebarProps {
  children: any;
}

interface SidebarItemProps {
  icon: any;
  text: string;
  active: any;
  alert?: any;
  path: string;
}

export function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      {expanded && (
        <div
          className="bg-zinc-950/55 absolute w-full h-full z-10"
          onClick={() => setExpanded((curr) => !curr)}
        />
      )}
      <aside className="h-screen fixed z-20">
        <nav
          className={`h-full flex flex-col ${
            expanded ? "dark:bg-slate-950/95" : "bg-transparent"
          }  shadow-sm gap-4`}
        >
          <div className="p-4 pb-2 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={LogoLetters}
                alt="Brand"
                className={`overflow-hidden transition-all ${
                  !expanded && "hidden"
                } max-w-[80px] select-none `}
              />
            </Link>

            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-transparent "
            >
              {expanded ? (
                <PanelRightOpen
                  size={24}
                  strokeWidth={1.75}
                  absoluteStrokeWidth
                />
              ) : (
                <PanelLeftOpen
                  size={24}
                  strokeWidth={1.75}
                  absoluteStrokeWidth
                />
              )}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3 gap-2 flex flex-col">{children}</ul>

            <div className="px-3 py-8 gap-2 flex flex-col">
              <SidebarItem
                icon={<Cog size={24} strokeWidth={1.75} absoluteStrokeWidth />}
                text="Settings"
                active
                path="#"
              />
              <SidebarItem
                icon={
                  <LifeBuoy size={24} strokeWidth={1.75} absoluteStrokeWidth />
                }
                text="Help"
                active
                path="#"
              />
            </div>
          </SidebarContext.Provider>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({
  icon,
  text,
  active,
  alert,
  path,
}: SidebarItemProps) {
  const { expanded } = useContext<any>(SidebarContext);

  return (
    <Link to={path}>
      <li
        className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active ? "bg-transparent" : "hover:bg-indigo-50 text-gray-600"}
        hover:bg-blue-500
    `}
      >
        {icon}
        <span
          className={` text-sm overflow-hidden transition-all ${
            expanded ? "w-40 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>

        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-blue-500 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-zinc-950 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
}
