import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { AlertTriangle } from "lucide-react";
import { Toast } from "./toast/toast";
import { ASTROFLIX_API } from "../helper/axios-instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface RemoveDialogProps {
  title: any;
  description: any;
  iconTrigger: any;
  pathDelete: string;
  cacheItens: string;
  IdItemToRemove: number; 
}

export function RemoveDialog({
  title,
  description,
  iconTrigger,
  pathDelete,
  cacheItens,
  IdItemToRemove
}: RemoveDialogProps) {
  const queryClient = useQueryClient();

  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      ASTROFLIX_API.delete(pathDelete);
    },
    onSuccess: () => {
      console.log("DELETING...");
      const previusGenres = queryClient.getQueryData<any>([cacheItens]);
      if (previusGenres) {
        const nextItens: any = [];
        previusGenres?.map((item: any) => {
          if (item.id !== IdItemToRemove) {
            nextItens.push(item);
          }
        });
        queryClient.setQueryData([cacheItens], nextItens);
      }
    },
  });

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <button className="p-2 rounded-md bg-red-600/60 hover:bg-red-600 transition-all">
            {iconTrigger}
          </button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="inset-0 bg-black/70 fixed" />
          <AlertDialog.Content
            className={`z-10 px-8 py-8  dark:bg-slate-950 rounded-md fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border flex flex-col items-center gap-6`}
          >
            <AlertDialog.Title className="flex flex-col items-center gap-4">
              <AlertTriangle
                className="text-rose-600 bg-rose-600/30 p-2 rounded-md"
                size={64}
                strokeWidth={1.75}
              />
              <span className="text-xl font-bold">{title}</span>
            </AlertDialog.Title>
            <AlertDialog.Description className="text-sm  text-center max-w-[390px]">
              {description}
            </AlertDialog.Description>

            <div className="flex gap-4 justify-end">
              <AlertDialog.Cancel asChild>
                <button className="px-4 py-2 border text-sm font-bold rounded-md">
                  No, Keep it.
                </button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button
                  className="px-4 py-2 rounded-md text-sm font-bold bg-rose-600/80 hover:bg-red-800"
                  onClick={() => mutate()}
                >
                  Yes, Remove!
                </button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>

      {isPending && <Toast status="loading" />}

      {isError && (
        <div className="mt-10">
          {/*@ts-ignore */}
          <Toast description={error.response.data.message}
            title="Error!"
            status="error"
          />
        </div>
      )}
    </>
  );
}
