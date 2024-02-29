import * as HoverCard from "@radix-ui/react-hover-card";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Media } from "../../types/media";

export function HomepageStatus() {
  const params = useParams();
  const currentMediaTitle = params["title"] as string;
  const queryClient = useQueryClient();
  const currentMedia = queryClient.getQueryData<Media>([
    "current-media",
    currentMediaTitle,
  ]);
  return (
    <div className="border flex flex-col gap-1 w-36">
      <span className="text-base font-semibold">Homepage</span>
      <div className="flex items-center">
        <i
          className={`w-2 h-2 rounded-full  ${
            currentMedia?.active === true ? "bg-green-500" : "bg-red-500"
          }  mr-1`}
        ></i>

        <HoverCard.Root>
          <HoverCard.Trigger asChild>
            <button className="font-semibold text-xs">
              {currentMedia?.active === true ? "Active" : "Disabled"}
            </button>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className="bg-zinc-950 border p-2 rounded-lg">
              <div>
                <span className="text-sm">
                  Notice: This media will be disabled for customers.
                </span>
              </div>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      </div>
    </div>
  );
}
