import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Sidebar } from "../../components/sidebar";
import { Submenu } from "../../components/submenu";
import { Outlet } from "react-router-dom";
import * as Tabs from "@radix-ui/react-tabs";

export function AppLayout() {
  return (
    <div className="flex gap-1 p-2  w-full h-screen">
      <Tabs.Root className="w-full">
        <PanelGroup
          autoSaveId="persistenceLayout"
          direction="horizontal"
          className="flex gap-1"
        >
          <Panel
            className="relative border border-zinc-950/15 dark:border-white/15 p-2 rounded-lg flex justify-center bg-slate-950"
            minSize={3}
            maxSize={3}
          >
            <Sidebar />
          </Panel>
          <PanelResizeHandle disabled />

          <Panel
            className="border border-zinc-950/15 dark:border-white/15 p-2 rounded-lg flex justify-center bg-slate-950"
            minSize={15}
          >
            <Submenu />
          </Panel>

          <PanelResizeHandle />

          <Panel
            className="border border-zinc-950/15 dark:border-white/15 rounded-lg flex justify-center bg-slate-950 p-2 overflow-auto"
            minSize={50}
            style={{
              scrollbarColor: "#475569 #020617",
            }}
          >
            <Outlet />
          </Panel>
        </PanelGroup>
      </Tabs.Root>
    </div>
  );
}
