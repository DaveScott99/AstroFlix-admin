import { Card } from "../components/card";
import { Toast } from "../components/toast/toast";
import { LoadingFull } from "../components/loading-full";
import { Media } from "../types/media";
import { useFetchListMedias } from "../queries/media";

export function Movie() {

  const { data:movies, isError, error, isFetching } = useFetchListMedias();
    
  return (
    <>
      <div>
        <section className="grid grid-cols-5 gap-2 p-2">
          {movies?.map((movie: Media) => (
            <Card key={movie.id} media={movie} />
          ))}
        </section>

        {isError && (
          <div>
            <Toast title="Error!" description={error?.message} status="error" />
          </div>
        )}
      </div>

      {isFetching && <LoadingFull />}
    </>
  );
}
