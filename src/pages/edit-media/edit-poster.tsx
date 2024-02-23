import { Plus } from "lucide-react";
import { Poster } from "../../components/poster";
import * as ContextMenu from "@radix-ui/react-context-menu";
import { useContext } from "react";
import { UtilityAreaContext } from "../../contexts/utility-area";
import { AddPoster } from "./add-poster";

interface EditPosterProps {
  idTMBD: number | undefined;
}

export function EditPoster({ idTMBD }: EditPosterProps) {
  const { selectComponent } = useContext(UtilityAreaContext);

  return (
    <div className="w-full flex flex-col justify-end items-center">
      <div className="w-full flex justify-end">
        <button className="border rounded-full p-1" onClick={() => selectComponent(<AddPoster idTMBD={idTMBD} />)}>
          <Plus size={24} strokeWidth={1.75} absoluteStrokeWidth />
        </button>
      </div>

      <div className="flex gap-4 justify-center items-center">
        <ContextMenu.Root>
          <ContextMenu.Trigger className="w-full h-full p-2 flex items-center flex-col gap-1">
            <div className="rounded-md">
              <Poster url="https://image.tmdb.org/t/p/original/qhb1qOilapbapxWQn9jtRCMwXJF.jpg" />
            </div>
          </ContextMenu.Trigger>

          <ContextMenu.Portal>
            <ContextMenu.Content className="bg-neutral-900 py-2 rounded-md w-56 flex flex-col gap-1">
              <ContextMenu.Item className=" cursor-pointer hover:bg-neutral-400/10 outline-none py-1 px-6 text-sm">
                Select poster
              </ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu.Portal>
        </ContextMenu.Root>
      </div>
    </div>
  );
}