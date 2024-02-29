import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Tabs from "@radix-ui/react-tabs";
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
import { Genre } from "../../types/genre";
import { Status } from "./status";
import { HomepageStatus } from "./homepage-status";

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
                  <Overview text={media?.overview} />
                </div>
              </div>
              <section className="flex gap-8 w-full">
                <div className="max-w-4xl w-full">
                  <Tabs.Root
                    defaultValue="tab1"
                    className="flex flex-col gap-4"
                  >
                    <Tabs.List className="flex gap-2">
                      <Tabs.Trigger
                        value="tab1"
                        className="py-2 px-4 data-[state='active']:border-b select-none"
                      >
                        Cast
                      </Tabs.Trigger>
                      <Tabs.Trigger
                        value="tab2"
                        className="py-2 px-4 data-[state='active']:border-b select-none"
                      >
                        Trailer
                      </Tabs.Trigger>
                      <Tabs.Trigger
                        value="tab3"
                        className="py-2 px-4 data-[state='active']:border-b select-none"
                      >
                        Audio
                      </Tabs.Trigger>
                      <Tabs.Trigger
                        value="tab4"
                        className="py-2 px-4 data-[state='active']:border-b select-none"
                      >
                        Subtitles
                      </Tabs.Trigger>
                      <Tabs.Trigger
                        value="tab5"
                        className="py-2 px-4 data-[state='active']:border-b select-none"
                      >
                        Media
                      </Tabs.Trigger>
                    </Tabs.List>

                    <Tabs.Content value="tab1">
                      <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-semibold">Actors</h2>

                        <div className="flex gap-4 overflow-x-auto whitespace-nowrap">
                          <div className=" bg-zinc-950/80 max-w-36 w-full rounded-md">
                            <div className="w-full">
                              <img
                                className="rounded-t-md"
                                src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sX2etBbIkxRaCsATyw5ZpOVMPTD.jpg"
                                alt="Actor photo"
                              />
                            </div>

                            <div className="flex flex-col py-2">
                              <span className="text-base font-semibold">
                                Actor name
                              </span>
                              <span className="text-sm text-zinc-50/50">
                                Character name
                              </span>
                            </div>
                          </div>
                          <div className=" bg-zinc-950/80 max-w-36 w-full rounded-md">
                            <div className="w-full">
                              <img
                                className="rounded-t-md"
                                src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sX2etBbIkxRaCsATyw5ZpOVMPTD.jpg"
                                alt="Actor photo"
                              />
                            </div>

                            <div className="flex flex-col py-2">
                              <span className="text-base font-semibold">
                                Actor name
                              </span>
                              <span className="text-sm text-zinc-50/50">
                                Character name
                              </span>
                            </div>
                          </div>
                          <div className=" bg-zinc-950/80 max-w-36 w-full rounded-md">
                            <div className="w-full">
                              <img
                                className="rounded-t-md"
                                src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sX2etBbIkxRaCsATyw5ZpOVMPTD.jpg"
                                alt="Actor photo"
                              />
                            </div>

                            <div className="flex flex-col py-2">
                              <span className="text-base font-semibold">
                                Actor name
                              </span>
                              <span className="text-sm text-zinc-50/50">
                                Character name
                              </span>
                            </div>
                          </div>
                          <div className=" bg-zinc-950/80 max-w-36 w-full rounded-md">
                            <div className="w-full">
                              <img
                                className="rounded-t-md"
                                src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sX2etBbIkxRaCsATyw5ZpOVMPTD.jpg"
                                alt="Actor photo"
                              />
                            </div>

                            <div className="flex flex-col py-2">
                              <span className="text-base font-semibold">
                                Actor name
                              </span>
                              <span className="text-sm text-zinc-50/50">
                                Character name
                              </span>
                            </div>
                          </div>
                          <div className=" bg-zinc-950/80 max-w-36 w-full rounded-md">
                            <div className="w-full">
                              <img
                                className="rounded-t-md"
                                src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sX2etBbIkxRaCsATyw5ZpOVMPTD.jpg"
                                alt="Actor photo"
                              />
                            </div>

                            <div className="flex flex-col py-2">
                              <span className="text-base font-semibold">
                                Actor name
                              </span>
                              <span className="text-sm text-zinc-50/50">
                                Character name
                              </span>
                            </div>
                          </div>
                          <div className=" bg-zinc-950/80 max-w-36 w-full rounded-md">
                            <div className="w-full">
                              <img
                                className="rounded-t-md"
                                src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sX2etBbIkxRaCsATyw5ZpOVMPTD.jpg"
                                alt="Actor photo"
                              />
                            </div>

                            <div className="flex flex-col py-2">
                              <span className="text-base font-semibold">
                                Actor name
                              </span>
                              <span className="text-sm text-zinc-50/50">
                                Character name
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tabs.Content>

                    <Tabs.Content value="tab2">TRAILER</Tabs.Content>
                    <Tabs.Content value="tab3">AUDIO</Tabs.Content>
                    <Tabs.Content value="tab4">SUBTITLES</Tabs.Content>
                    <Tabs.Content value="tab5">MEDIA</Tabs.Content>
                  </Tabs.Root>
                </div>

                <div className="border border-zinc-50/50 rounded-lg max-w-96 w-full p-2 flex flex-col gap-4">
                  
                  <div className="flex justify-center gap-8 items-center">
                    <Status />
                    <HomepageStatus />
                  </div>

                  <div>
                    <span>Content Advisory</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-base font-semibold">Runtime</span>
                    <span className="text-sm">{media?.runtime} minutes</span>
                  </div>

                  <div>
                    <span className="text-base font-semibold">Budget</span>
                  </div>

                  <div>
                    <span className="text-base font-semibold">
                      Original Language
                    </span>
                  </div>

                  <div>
                    <span className="text-base font-semibold">Genres</span>
                    <div>
                      {media?.genres.map((genre: Genre) => (
                        <span className="text-sm" key={genre.id}>
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
