import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Sidebar } from "../../components/sidebar";
import { Submenu } from "../../components/submenu";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  // Disable default context menu
  /*
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
  */

  return (
    <div className="flex gap-1 p-2 w-full h-screen">
      <PanelGroup
        autoSaveId="persistenceLayout"
        direction="horizontal"
        className="flex gap-1"
      >
        {/* 
        <Panel
          className="relative border border-zinc-950/15 dark:border-white/15 p-2 rounded-lg flex justify-center bg-transparent"
          minSize={3}
          maxSize={3}
        >
          <Sidebar />
        </Panel>
        <PanelResizeHandle disabled />
        */}
        <Panel
          className="border relative border-zinc-950/15 dark:border-white/15 p-2 rounded-lg flex justify-center bg-transparent"
          minSize={3}
          style={{
            scrollbarColor: "#475569 #020617",
          }}
        >
          <Submenu />
        </Panel>
        <PanelResizeHandle />
        <Panel
          className="border relative border-zinc-950/15 dark:border-white/15 rounded-lg flex justify-center bg-transparent overflow-auto"
          minSize={50}
          style={{
            scrollbarColor: "#475569 #020617",
          }}
        >
          <Outlet />
        </Panel>
      </PanelGroup>
    </div>
  );
}
