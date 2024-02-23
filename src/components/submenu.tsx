import { useContext } from "react";
import { UtilityAreaContext } from "../contexts/utility-area";
import * as ContextMenu from "@radix-ui/react-context-menu";

export function Submenu() {
  const { component, selectComponent } = useContext(UtilityAreaContext);

  console.log(component);

  return (
    <div className="w-full flex justify-center items-center">
      <ContextMenu.Root>

        <ContextMenu.Trigger className="w-full h-full p-2 flex justify-center items-center flex-col gap-1">
          <span className="text-md text-neutral-500">
            Right click or Drag here.
          </span>
          <span className="text-sm text-neutral-500 text-center">
            No components here. How about adding something?
          </span>  
        </ContextMenu.Trigger>

        <ContextMenu.Portal>
          <ContextMenu.Content className="bg-neutral-900 py-2 rounded-md w-56 flex flex-col gap-1">
            <ContextMenu.Item className=" cursor-pointer hover:bg-neutral-400/10 outline-none py-1 px-6 text-sm">Clear</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Portal>



        {/* 
        {tab === "" && (
          <div>
            <span>Utility Area</span>
          </div>
        )}

        {tab === "create" && (
          <ul className="w-full flex flex-col gap-2">
            <Link to="/create/movie">
              <li className="p-2 border rounded-lg">Create movie</li>
            </Link>
            <Link to="#">
              <li className="p-2 border rounded-lg">Create Tv Show</li>
            </Link>
          </ul>
        )}

        {tab === "dashboard-movie" && (
          <ul className="w-full flex flex-col gap-2">
            <Link to="/media/wonka/edit">
              <li className="p-2 border rounded-lg">List</li>
            </Link>
          </ul>
        )}
        */}
      </ContextMenu.Root>
    </div>
  );
}
