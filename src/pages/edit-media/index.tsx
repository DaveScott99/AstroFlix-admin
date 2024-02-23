import { Settings } from "lucide-react";
import { Backdrop } from "../../components/backdrop";
import { Overview } from "../../components/overview";
import { Poster } from "../../components/poster";
import { ReleaseYear } from "../../components/realease-year";
import { Tagline } from "../../components/tagline";
import { Title } from "../../components/title";
import { useContext } from "react";
import { UtilityAreaContext } from "../../contexts/utility-area";
import { Details } from "./details";
import { ASTROFLIX_API } from "../../helper/axios-instance";
import { useParams } from "react-router-dom";
import { MediaMinDTO } from "../../types/mediaMinDTO";
import { useQuery } from "@tanstack/react-query";
import { LoadingFull } from "../../components/loading-full";
import { EditPoster } from "./edit-poster";

export function EditMedia() {
  const params = useParams();
  const currentMediaTitle = params["title"] as string;

  const { selectComponent } = useContext(UtilityAreaContext);

  const {
    data: media,
    isFetching,
    error,
  } = useQuery<MediaMinDTO>({
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
    <>
      <div className="w-full">
        <Backdrop url="https://image.tmdb.org/t/p/original/yyFc8Iclt2jxPmLztbP617xXllT.jpg">
          <div
            className="mx-auto w-full md:flex-row flex flex-col items-center justify-center lg:items-center gap-4 p-4 pt-16 
          bg-gradient-to-t from-zinc-50 to-transparent text-white dark:bg-gradient-to-t dark:from-slate-950 dark:to-transparent"
          >
            <div onClick={() => selectComponent(<EditPoster idTMBD={media?.idTMBD} />)} className="cursor-pointer">
              <Poster url={media?.poster.file} />
            </div>

            <div className=" flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="md:justify-start flex items-center justify-center gap-1">
                  <Title text={media?.title} />
                  <ReleaseYear year={media?.releaseYear} />
                </div>
                <div
                  className="border rounded-md p-1 cursor-pointer"
                  onClick={() =>
                    selectComponent(<Details mediaTitle={media?.title} />)
                  }
                >
                  <Settings size={24} strokeWidth={1.75} absoluteStrokeWidth />
                </div>
              </div>
              <Tagline text="Every good thing in this world started with a dream." />
              <Overview
                text="
                    Willy Wonka – chock-full of ideas and determined to change
                    the world one delectable bite at a time – is proof that the
                    best things in life begin with a dream, and if you’re lucky
                    enough to meet Willy Wonka, anything is possible.
                    "
              />
            </div>
          </div>
        </Backdrop>

        <section></section>
      </div>

      {isFetching && <LoadingFull />}
    </>
  );
}
