import { useContext } from "react";
import { UtilityAreaContext } from "../contexts/utility-area";
import * as ContextMenu from "@radix-ui/react-context-menu";

export function Submenu() {
  const { component, headerUtilityArea, selectComponent, selectHeaderUtilityArea } =
    useContext(UtilityAreaContext);

  return (
    <div className="w-full flex flex-col justify-center items-center  ">
      <ContextMenu.Root>
        <ContextMenu.Trigger className="w-full h-full flex items-center flex-col gap-8 ">
          {headerUtilityArea && (
            <div className="w-full">{headerUtilityArea}</div>
          )}
          {!component ? (
            <div className="flex flex-col justify-center items-center w-full h-full  ">
              <span className="text-md text-neutral-500">
                Right click or Drag here.
              </span>
              <span className="text-sm text-neutral-500 text-center">
                No components here. How about adding something?
              </span>
            </div>
          ) : (
            <div className="w-full h-full overflow-auto">
              {component}
            </div>
            
          )}
        </ContextMenu.Trigger>

        <ContextMenu.Portal>
          <ContextMenu.Content className="bg-neutral-900 py-2 rounded-md w-56 flex flex-col gap-1">
            <ContextMenu.Item className=" cursor-pointer hover:bg-neutral-400/10 outline-none py-1 px-6 text-sm">
              Search
            </ContextMenu.Item>
            <ContextMenu.Item
              className=" cursor-pointer hover:bg-neutral-400/10 outline-none py-1 px-6 text-sm"
              onClick={() => {
                selectComponent(null)
                selectHeaderUtilityArea(null)
              }}
            >
              Clear
            </ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Portal>
      </ContextMenu.Root>
    </div>
  );
}
