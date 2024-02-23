import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { LoadingClean } from "../../components/loading-clean";
import { Toast } from "../../components/toast/toast";
import { ASTROFLIX_API } from "../../helper/axios-instance";
import { Poster } from "../../types/poster";

interface AddPosterProps {
  idTMBD: number | undefined;
}

export function AddPoster({ idTMBD }: AddPosterProps) {
  const {
    data: posters,
    error,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["posters"],
    queryFn: async ({ pageParam }) => {
      const response = await ASTROFLIX_API.get(
        `/tmdb-api/movie/images/poster?idMovieTmdb=299536&page=${pageParam}`
      );
      return response.data.content;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length ? allPages.length + 1 : undefined,
  });

  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        fetchNextPage();
      }
    });

    /*@ts-ignore*/
    intersectionObserver.observe(document.querySelector("#sentinel"));

    return () => intersectionObserver.disconnect();
  }, []);

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
              {group.map((poster: Poster, i: number) => (
                <div
                  key={i}
                  className="rounded-md max-w-[300px] cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
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

      {error?.message && (
        <div>
          <Toast title="Error!" description={error?.message} status="error" />
        </div>
      )}
    </>
  );
}
