import { Camera, Plus } from "lucide-react";
import { Backdrop } from "../../components/backdrop";
import { Overview } from "../../components/overview";
import { Poster } from "../../components/poster";
import { ReleaseYear } from "../../components/realease-year";
import { Tagline } from "../../components/tagline";
import { Title } from "../../components/title";
import React, { useContext } from "react";
import { UtilityAreaContext } from "../../contexts/utility-area";
import { Details } from "./details";
import { ASTROFLIX_API } from "../../helper/axios-instance";
import { useParams } from "react-router-dom";
import { Media } from "../../types/media";
import { useQuery } from "@tanstack/react-query";
import { LoadingFull } from "../../components/loading-full";
import { Toast } from "../../components/toast/toast";
import { CreateImage } from "./images/create-image";
import { ListImages } from "./images/list-images";

export function EditMedia() {
  const params = useParams();
  const currentMediaTitle = params["title"] as string;

  const { selectComponent } = useContext(UtilityAreaContext);

  const {
    data: media,
    isFetching,
    isError,
    error,
  } = useQuery<Media>({
    queryKey: ["media"],
    queryFn: async () => {
      const response = await ASTROFLIX_API.get(
        "/media/movie/find?title=" + currentMediaTitle
      );

      return response.data;
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60, // 1 minute
  });

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
              <button
                className="border rounded-md px-2 py-1 cursor-pointer flex gap-2 text-sm items-center hover:bg-zinc-950/50 transition"
                onClick={() =>
                  selectComponent(
                    <ListImages
                      media_id={media?.id}
                      title_header="Backdrops"
                      list_path={`/media/art/find/backdrop?mediaId= + ${media?.id}`}
                      type_image="backdrop"
                      action_header={
                        <button
                          className="border rounded-full p-1 flex justify-center items-center w-10 h-10"
                          onClick={() =>
                            selectComponent(
                              <CreateImage media={media} type="backdrop" />
                            )
                          }
                        >
                          <Plus
                            size={24}
                            strokeWidth={1.75}
                            absoluteStrokeWidth
                          />
                        </button>
                      }
                    />
                  )
                }
              >
                <Camera size={22} strokeWidth={1.75} absoluteStrokeWidth />
                Edit backdrop
              </button>
            </div>

            <div className="max-w-7xl w-full flex flex-col gap-8">
              <div className="flex max-w-7xl w-full items-center gap-4">
                <div
                  onClick={() =>
                    selectComponent(
                      <ListImages
                        media_id={media?.id}
                        title_header="Posters"
                        list_path={`/media/art/find/poster?mediaId=+ ${media?.id}`}
                        type_image="poster"
                        action_header={
                          <button
                            className="border rounded-full p-1 flex justify-center items-center w-10 h-10"
                            onClick={() =>
                              selectComponent(
                                <CreateImage media={media} type="poster" />
                              )
                            }
                          >
                            <Plus
                              size={24}
                              strokeWidth={1.75}
                              absoluteStrokeWidth
                            />
                          </button>
                        }
                      />
                    )
                  }
                  className="cursor-pointer w-96 relative"
                >
                  <Poster
                    url={media?.poster.filePath}
                    aspect_ratio={media?.poster.aspectRatio}
                  />
                  <div className="absolute w-full h-full top-0 hover:bg-zinc-950/60 transition group flex items-center justify-center rounded-lg">
                    <span className="invisible group-hover:visible text-base">
                      Change
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 w-full">
                  <div className="flex items-center gap-8">
                    <div className="md:justify-start flex items-center justify-center gap-1">
                      <Title text={media?.title} />
                      <ReleaseYear year={media?.releaseYear} />
                    </div>
                    <button
                      className="border rounded-md px-2 py-1 flex gap-2 text-sm hover:bg-zinc-950/50 transition"
                      onClick={() =>
                        selectComponent(<Details mediaTitle={media?.title} />)
                      }
                    >
                      Edit media
                    </button>
                  </div>
                  <Tagline text={media?.tagline} />
                  <Overview text={media?.overview} />
                </div>
              </div>
              <section>TABS</section>
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
