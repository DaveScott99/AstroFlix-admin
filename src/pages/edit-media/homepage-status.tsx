import * as HoverCard from "@radix-ui/react-hover-card";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Media } from "../../types/media";
import { AlertTriangle } from "lucide-react";

export function HomepageStatus() {
  const params = useParams();
  const currentMediaTitle = params["title"] as string;
  const queryClient = useQueryClient();
  const currentMedia = queryClient.getQueryData<Media>([
    "current-media",
    currentMediaTitle,
  ]);
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <div>
          {currentMedia?.active ? (
            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <button
                  className={`flex flex-col gap-1 w-36 rounded p-1 bg-green-600/50`}
                >
                  <span className="text-base font-semibold">Homepage</span>
                  <span className="font-semibold text-xs">Active</span>
                </button>
              </AlertDialog.Trigger>
              <AlertDialog.Portal>
                <AlertDialog.Overlay className="inset-0 bg-black/70 fixed" />
                <AlertDialog.Content
                  className={`z-10 px-8 py-8  dark:bg-zinc-950 rounded-md fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border flex flex-col items-center gap-6`}
                >
                  <AlertDialog.Title className="flex flex-col items-center gap-4">
                    <AlertTriangle
                      className="text-rose-600 bg-rose-600/30 p-2 rounded-md"
                      size={64}
                      strokeWidth={1.75}
                    />
                    <span className="text-xl font-bold">Disable media</span>
                  </AlertDialog.Title>
                  <AlertDialog.Description className="text-sm text-center max-w-[390px]">
                    <span>
                      You're going to disable the media "
                      <b>{currentMedia.title}</b>". Are you sure?
                    </span>
                  </AlertDialog.Description>

                  <div className="flex gap-4 justify-end">
                    <AlertDialog.Cancel asChild>
                      <button className="px-4 py-2 border text-sm font-bold rounded-md">
                        No, Keep it.
                      </button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                      <button className="px-4 py-2 rounded-md text-sm font-bold bg-rose-600/80 hover:bg-red-800">
                        Yes, Disable!
                      </button>
                    </AlertDialog.Action>
                  </div>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>
          ) : (
            <button
              className={`flex flex-col gap-1 w-36 rounded p-1 bg-red-600/50`}
            >
              <span className="text-base font-semibold">Homepage</span>
              <span className="font-semibold text-xs">Disabled</span>
            </button>
          )}
        </div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className="bg-zinc-950 border p-2 rounded-lg mt-2">
          {currentMedia?.active ? (
            <div>
              <span className="text-sm">
                Notice: This media will be disable.
              </span>
            </div>
          ) : (
            <div>
              <span className="text-sm">
                Notice: This media will be enable.
              </span>
            </div>
          )}
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
