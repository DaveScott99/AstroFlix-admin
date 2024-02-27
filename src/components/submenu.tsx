import { useContext, useEffect } from "react";
import { UtilityAreaContext } from "../contexts/utility-area";
import * as ContextMenu from "@radix-ui/react-context-menu";
import { HeaderUtilityArea } from "./header-utility-area";
import { useSearchParams } from "react-router-dom";

export function Submenu() {
  const { components, headerUtilityArea, push, selectHeaderUtilityArea } =
    useContext(UtilityAreaContext);

  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams(params => {
      if (components.length > 0) {
        const title = components[components.length -1].name.toLowerCase().split(' ')
        params.set("submenu", title[0]+"-"+title[1]+"-"+title[2]);
      }

      return params;

    })
  }, [components.length])

  console.log(components);

  return (
    <div className="w-full h-full  ">
      <ContextMenu.Root>
        <ContextMenu.Trigger className="w-full h-full flex flex-col gap-4 ">
          {components.length !== 0 && (
            <div className="w-full">
              <HeaderUtilityArea title={components[components.length -1].name} 
                subtitle="TESTE" 
                action={
                  components[components.length -1].actions
                }/>
            </div>
          )}
          
          <div className="w-full h-full overflow-auto overflow-x-hidden ">
            {components.length > 0 && components[components.length - 1].content}
          </div>

          {/* 
          {components.length === 0 ? (
            <div className="flex flex-col justify-center items-center w-full h-full  ">
              <span className="text-md text-neutral-500">
                Right click or Drag here.
              </span>
              <span className="text-sm text-neutral-500 text-center">
                No components here. How about adding something?
              </span>
            </div>
          ) : (
            <div className="w-full h-full overflow-auto overflow-x-hidden ">
              {components.length > 0 && components[components.length - 1]}
            </div>
          )}
          */}
        </ContextMenu.Trigger>

        <ContextMenu.Portal>
          <ContextMenu.Content className="bg-neutral-900 py-2 rounded-md w-56 flex flex-col gap-1">
            <ContextMenu.Item className=" cursor-pointer hover:bg-neutral-400/10 outline-none py-1 px-6 text-sm">
              Search
            </ContextMenu.Item>
            <ContextMenu.Item
              className=" cursor-pointer hover:bg-neutral-400/10 outline-none py-1 px-6 text-sm"
              onClick={() => {
                push(null, "", []);
                selectHeaderUtilityArea(null);
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
