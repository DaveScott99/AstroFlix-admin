import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Film, Home, Plus, Tv } from "lucide-react";
import { Sidebar, SidebarItem } from "../../components/sidebar";
import { Submenu } from "../../components/submenu";
import { useSearchParams } from "react-router-dom";
import * as Tabs from '@radix-ui/react-tabs';
import { CreateMovie } from "../create-movie";
import { Content } from "../../components/content";


export function AppLayout() {

  const [, setSearchParams] = useSearchParams();

  function createTab() {
    setSearchParams(params => {
      params.set('tab', 'create');

      return params;
    })
  }


  function dashboardMovieTab() {
    setSearchParams(params => {
      params.set('tab', 'dashboard-movie');

      return params;
    })
  }

    return (
        <div className="flex gap-1 p-2  w-full h-screen">

      <Tabs.Root className="w-full">
        <PanelGroup autoSaveId="persistenceLayout" direction="horizontal" className="flex gap-1">

            <Panel className="relative border border-zinc-950/15 dark:border-white/15 p-2 rounded-lg flex justify-center bg-slate-950" minSize={3} maxSize={3}>
              <Sidebar>
                  <SidebarItem icon={<Home size={24} strokeWidth={1.75} absoluteStrokeWidth />} text="Home"  path="/"  />
                  <SidebarItem icon={<Film size={24} strokeWidth={1.75} absoluteStrokeWidth />} text="Movie"  setTab={dashboardMovieTab} />
                  <SidebarItem icon={<Tv size={24} strokeWidth={1.75} absoluteStrokeWidth />} text="TvShow"  path="#"  />
                  <SidebarItem icon={<Plus size={24} strokeWidth={1.75} absoluteStrokeWidth />} text="Add" setTab={createTab}/>
              </Sidebar>
            </Panel>
            <PanelResizeHandle disabled />


            <Panel className="border border-zinc-950/15 dark:border-white/15 p-2 rounded-lg flex justify-center bg-slate-950" minSize={15} >
              <Submenu />
            </Panel>


            <PanelResizeHandle  />

            <Panel className="border border-zinc-950/15 dark:border-white/15 rounded-lg flex justify-center mx-auto bg-slate-950 overflow-auto" minSize={50}  
              style={{
                scrollbarColor: "#475569 #020617",
              }}>

              <Content />
            </Panel>

        </PanelGroup>

      </Tabs.Root>

    </div>
    )

}