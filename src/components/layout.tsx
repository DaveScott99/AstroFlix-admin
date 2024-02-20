import { Header } from "./header";
import { Sidebar, SidebarItem } from "./sidebar";
import { Film, Tv, Plus, Home } from "lucide-react";

export function Layout({ children, center, colision_header, colision_sidebar }:any ) {
    return (
        <main className="mx-auto flex">
            <Header />

            <Sidebar>
                <SidebarItem icon={<Home size={24} strokeWidth={1.75} absoluteStrokeWidth />} text="Home" active path="/" />
                <SidebarItem icon={<Film size={24} strokeWidth={1.75} absoluteStrokeWidth />} text="Movie" active path="/movie" />
                <SidebarItem icon={<Tv size={24} strokeWidth={1.75} absoluteStrokeWidth />} text="TvShow" active path="#"  />
                <SidebarItem icon={<Plus size={24} strokeWidth={1.75} absoluteStrokeWidth />} text="Add" active path="/create/movie" />
            </Sidebar>

            <div className={`${colision_header && "pt-24" } w-full ${colision_sidebar && "ml-24"}`}>
                <div className={`${center && "mx-auto max-w-7xl"} `}>
                    { children }
                </div>
            </div>

        </main>
    );
}