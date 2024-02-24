import React, { useContext } from "react";
import { LoadingClean } from "../../components/loading-clean";
import { Toast } from "../../components/toast/toast";
import { Image } from "../../types/image";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { Media } from "../../types/media";
import { useMutation } from "@tanstack/react-query";
import { ASTROFLIX_API } from "../../helper/axios-instance";
import { UtilityAreaContext } from "../../contexts/utility-area";

interface AddPosterProps {
  media: Media | undefined;
}

export function AddPoster({ media }: AddPosterProps) {
  const { selectComponent } = useContext(UtilityAreaContext);

  const {
    data: posters,
    isFetching,
    error,
  } = useInfiniteScroll(
    "/tmdb-api/movie/images/poster?idMovieTmdb=" + media?.idTMDB
  );

  return (
    <>
      <div className="flex flex-col gap-8 p-2">
        <div className="text-center">
          <h2 className="text-base ">
            This is a list of posters available on TMDB for Wonka
          </h2>
          <span className="text-sm text-neutral-500">
            Select a Poster for add
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {posters?.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.map((poster: Image, i: number) => (
                <div
                  key={i}
                  className="rounded-md max-w-[300px] cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                  onClick={() =>
                    selectComponent(
                      <CreatePoster poster={poster} media={media} />
                    )
                  }
                >
                  <img
                    className="rounded-md"
                    style={{ aspectRatio: poster.aspect_ratio }}
                    src={`https://image.tmdb.org/t/p/original/${poster.file_path}`}
                    alt="Poster media"
                  />
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>

        <div className="w-full flex justify-center items-center">
          {isFetching && <LoadingClean />}
        </div>

        <div id="sentinel" className="h-1" />
      </div>
    </>
  );
}

interface CreatePosterProps {
  poster: Image | undefined;
  media: Media | undefined;
}

function CreatePoster({ poster, media }: CreatePosterProps) {
  const { mutate, isSuccess, isError, isPending, error } = useMutation({
    mutationFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await ASTROFLIX_API.post(
        `/media/art/poster/create?idMedia=${media?.id}&titleMedia=${media?.title}&idMediaTmdb=${media?.idTMDB}&filePath=${poster?.file_path}`
      );
    },
  });
  return (
    <React.Fragment>
      <div className=" flex flex-col gap-4">
        <div className="rounded-md max-w-[450px]">
          <img
            className="rounded-md"
            style={{ aspectRatio: poster?.aspect_ratio }}
            src={`https://image.tmdb.org/t/p/original/${poster?.file_path}`}
            alt="Poster media"
          />
        </div>

        <div className="flex gap-2 justify-center">
          <button className="border px-2 py-1 rounded-md text-normal">
            Cancel
          </button>
          <button
            className="px-2 py-1 rounded-md text-normal bg-green-500/70 hover:bg-green-500/80"
            onClick={() => mutate()}
          >
            Add
          </button>
        </div>
      </div>
      {isPending && <Toast status="loading" />}

      {isSuccess && (
        <Toast title="Success!" description="Poster Added" status="success" />
      )}

      {isError && (
        <div>
          <Toast title="Error!" description={error?.message} status="error" />
        </div>
      )}
    </React.Fragment>
  );
}
