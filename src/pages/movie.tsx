import { Card } from "../components/card";
import { Toast } from "../components/toast/toast";
import { ASTROFLIX_API } from "../helper/axios-instance";
import { useQuery } from "@tanstack/react-query";
import { Media } from "../types/Media";
import { LoadingFull } from "../components/loading-full";

export function Movie() {
  const {
    data: movies,
    isFetching,
    error,
  } = useQuery<Media[]>({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await ASTROFLIX_API.get("/media/movie/all");

      return response.data.content;
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60, // 1 minute
  });

  return (
    <>
      <div>
        <section className="grid grid-cols-5 gap-2">
          {movies?.map((movie: Media) => (
            <Card key={movie.id} media={movie} />
          ))}
        </section>

        {error?.message && (
          <div>
            <Toast title="Error!" description={error?.message} status="error" />
          </div>
        )}
      </div>

      {isFetching && <LoadingFull />}
    </>
  );
}
