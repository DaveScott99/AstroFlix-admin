import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Film, Home, Plus, Tv } from "lucide-react";
import { Sidebar, SidebarItem } from "../../components/sidebar";
import { Submenu } from "../../components/submenu";
import { Content } from "../../components/content";

export function AppLayout({ children }: any) {

    return (
        <div className="flex gap-1 p-2  w-full h-screen">

        <PanelGroup autoSaveId="persistenceLayout" direction="horizontal" className="flex gap-1">
            <Panel className="relative border border-zinc-950/15 dark:border-white/15 p-2 rounded-lg flex justify-center bg-slate-950" minSize={3} maxSize={3}>
              <Sidebar>
                  <SidebarItem icon={<Home size={24} strokeWidth={1.75} absoluteStrokeWidth />} text="Home"  path="/"  />
                  <SidebarItem icon={<Film size={24} strokeWidth={1.75} absoluteStrokeWidth />} text="Movie"  path="/movie" />
                  <SidebarItem icon={<Tv size={24} strokeWidth={1.75} absoluteStrokeWidth />} text="TvShow"  path="#"  />
                  <SidebarItem icon={<Plus size={24} strokeWidth={1.75} absoluteStrokeWidth />} text="Add"  path="/create" />
              </Sidebar>
            </Panel>
            <PanelResizeHandle disabled />
            <Panel className="border border-zinc-950/15 dark:border-white/15 p-2 rounded-lg flex justify-center bg-slate-950" minSize={15} >
                <Submenu />
            </Panel>
            <PanelResizeHandle  />
            <Panel className="border border-zinc-950/15 dark:border-white/15 rounded-lg flex justify-center bg-slate-950" minSize={50}  
              style={{
                scrollbarColor: "#475569 #020617",
              }}>
              <main className="overflow-auto w-full">
                <Content />
              </main>
            </Panel>
        </PanelGroup>

      
      {/* 
      <Sidebar />

      <div className="border  w-96 rounded-lg p-2 "></div>

      <div className="border w-full rounded-lg p-2"></div>

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
            */}
    </div>
    )

}