import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Sidebar } from "../../components/sidebar";
import { Submenu } from "../../components/submenu";
import { Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { UtilityAreaContext } from "../../contexts/utility-area";

export function AppLayout() {
  const { components } = useContext(UtilityAreaContext);

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
        <Panel
          className="relative border border-zinc-950/15 dark:border-white/15 p-2 rounded-lg flex justify-center bg-transparent"
          minSize={2}
          maxSize={2}
        >
          <Sidebar />
        </Panel>
        <PanelResizeHandle disabled />
        <Panel
          hidden={components.length === 0}
          className="border relative border-zinc-950/15 dark:border-white/15 p-2 rounded-lg flex justify-center bg-transparent"
          defaultSize={35}
          minSize={30}
          maxSize={40}
          style={{
            scrollbarColor: "#475569 #020617",
            display: components.length > 0 ? "block" : "none",
          }}
        >
          <Submenu />
        </Panel>
        <PanelResizeHandle disabled={components.length === 0} />
        {components.length > 0 && <React.Fragment></React.Fragment>}
        <Panel
          className="border relative border-zinc-950/15 dark:border-white/15 rounded-lg flex justify-center bg-transparent"
          minSize={50}
          style={{
            scrollbarColor: "#475569 #020617",
          }}
        >
          <div className="overflow-x-hidden overflow-y-auto h-full w-full">
            <div className="flex justify-center">
              <Outlet />
            </div>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
}
