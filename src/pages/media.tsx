import { Link, useParams } from "react-router-dom";
import { GearIcon } from "@radix-ui/react-icons";
import { ASTROFLIX_API } from "../helper/axios-instance";
import { useQuery } from "@tanstack/react-query";
import { MediaMinDTO } from "../types/mediaMinDTO";
import { Loading } from "../components/loading";

export function Media() {
  const params = useParams();
  const currentMediaTitle = params['title'] as string;
  const currentMediaId = params['id'] as string;

  const {
    data: media,
    isFetching,
    error,
  } = useQuery<MediaMinDTO>({
    queryKey: ["media"],
    queryFn: async () => {
      const response = await ASTROFLIX_API.get("/media/movie/find?title=" + currentMediaTitle);

      return response.data;
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60, // 1 minute
  });

  if (isFetching) 
    return <Loading />

  return (
    <div>
      <div
        className="w-full"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/yyFc8Iclt2jxPmLztbP617xXllT.jpg)`,
        }}
      >
        <div className="w-full pt-24 bg-zinc-50 bg-opacity-20 dark:bg-slate-950 dark:bg-opacity-30">
          <div className="w-full bg-gradient-to-b from-transparent to-zinc-50 dark:bg-gradient-to-t dark:from-slate-950 dark:to-transparent ">
            <div className="mx-auto max-w-7xl flex items-center gap-6 py-8">
              <div className="max-w-[300px] max-h-[450px] h-full w-full rounded-md">
                <img
                  src={media?.poster.file}
                  alt="Media poster"
                  className="rounded-md"
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <div className="flex justify-between">
                  <h2 className="font-semibold text-3xl">
                    {currentMediaTitle} <span className="font-light">({media?.releaseYear})</span>
                  </h2>

                  <Link to={`/media/config/${currentMediaId}/${currentMediaTitle}/details`} >
                    <button className="border p-1 rounded-lg">
                      <GearIcon width="30px" height="30px" />
                    </button>
                  </Link>
                </div>


                <div className="flex gap-2 items-center">
                  <div className="border px-1 rounded-sm text-sm">PG</div>

                  <div className="flex gap-1 text-sm">
                    <span>12/07/2023</span>

                    {media?.genres.map((genre) => (
                      <span key={genre.id}>{genre.name}</span>
                    ))}
                

                    <span>2h</span> {/* RUNTIME */}
                  </div>
                </div>

                <div className="mt-6 opacity-75">
                  <em>Every good thing in this world started with a dream. </em>
                </div>

                <div className="mt-3">
                  <h3 className="font-semibold text-lg mb-1">Overview</h3>
                  <span className="text-sm">
                    Willy Wonka – chock-full of ideas and determined to change
                    the world one delectable bite at a time – is proof that the
                    best things in life begin with a dream, and if you’re lucky
                    enough to meet Willy Wonka, anything is possible.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
