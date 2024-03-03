import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Camera } from "lucide-react";
import React from "react";
import { useParams } from "react-router-dom";
import { Backdrop } from "../../components/backdrop";
import { LoadingFull } from "../../components/loading-full";
import { Overview } from "../../components/overview";
import { Poster } from "../../components/poster";
import { ReleaseYear } from "../../components/realease-year";
import { Tagline } from "../../components/tagline";
import { Title } from "../../components/title";
import { Toast } from "../../components/toast/toast";
import { useActionsUtilityArea } from "../../hooks/useActionsUtilityArea";
import { useFetchMediaByTitle } from "../../queries/media";
import { TabsMenu } from "./tabs-menu";
import { InfoCard } from "./info-card";

export function EditMedia() {
  const params = useParams();
  const currentMediaTitle = params["title"] as string;
  const { listBackdrops, listPosters, createPoster, createBackdrop } =
    useActionsUtilityArea(currentMediaTitle);

  const {
    data: media,
    isFetching,
    isError,
    error,
  } = useFetchMediaByTitle(currentMediaTitle);

  return (
    <React.Fragment>
      <div className="w-full ">
        <Backdrop
          url={media?.backdrop.filePath}
          aspect_ratio={media?.backdrop.aspectRatio}
        >
          <div
            className="h-full flex flex-col items-center gap-4 p-4
                      bg-gradient-to-t from-zinc-50 to-transparent text-white dark:bg-gradient-to-t 
                    dark:from-zinc-950 dark:to-transparent bg-zinc-950/60"
          >
            <div className="max-w-7xl w-full flex justify-end">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="border rounded-md px-2 py-1 cursor-pointer flex gap-2 text-sm items-center hover:bg-zinc-950/50 transition">
                    <Camera size={22} strokeWidth={1.75} absoluteStrokeWidth />
                    Edit backdrop
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content className="border border-zinc-50/50 bg-zinc-950 rounded-md py-2 mt-2 flex flex-col gap-2">
                    <DropdownMenu.Item
                      className="px-2 py-1 text-sm cursor-pointer hover:outline hover:outline-zinc-50/20"
                      onClick={() => listBackdrops()}
                    >
                      Change backdrop
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                      className="px-2 py-1 text-sm cursor-pointer hover:outline hover:outline-zinc-50/20"
                      onClick={() => createBackdrop()}
                    >
                      Add new backdrop
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>

            <div className="max-w-7xl w-full flex flex-col gap-8">
              <div className="flex max-w-7xl w-full items-center gap-4">
                <div className="cursor-pointer max-w-64 w-full relative">
                  <Poster
                    url={media?.poster.filePath}
                    aspect_ratio={media?.poster.aspectRatio}
                  />

                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <div className="absolute w-full h-full top-0 hover:bg-zinc-950/60 transition group flex items-center justify-center rounded-lg">
                        <span className="invisible group-hover:visible text-base">
                          Change
                        </span>
                      </div>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                      <DropdownMenu.Content className="border border-zinc-50/20 bg-zinc-950 rounded-md py-2 mt-2 flex flex-col gap-2">
                        <DropdownMenu.Item
                          className="px-2 py-1 text-sm cursor-pointer hover:outline hover:outline-zinc-50/20"
                          onClick={() => listPosters()}
                        >
                          Change poster
                        </DropdownMenu.Item>
                        <DropdownMenu.Item
                          className="px-2 py-1 text-sm cursor-pointer hover:outline hover:outline-zinc-50/20"
                          onClick={() => createPoster()}
                        >
                          Add new poster
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                </div>

                <div className="flex flex-col gap-4 w-full">
                  <div className="flex items-center gap-8">
                    <div className="md:justify-start flex items-center justify-center gap-1">
                      <Title text={media?.title} />
                      <ReleaseYear year={media?.releaseYear} />
                    </div>
                  </div>
                  <Tagline text={media?.tagline} />
                  <Overview />
                </div>
              </div>
              <section className="flex gap-8 w-full">
                
                <TabsMenu />
                <InfoCard />
           
              </section>
            </div>
          </div>
        </Backdrop>
      </div>

      {isFetching && <LoadingFull />}

      {isError && (
        <Toast title="Error" description={error.message} status="error" />
      )}
    </React.Fragment>
  );
}
