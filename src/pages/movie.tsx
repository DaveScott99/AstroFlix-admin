import { Card } from "../components/card";
import { Loading } from "../components/loading";
import { Toast } from "../components/toast/toast";
import { useSearchAstroflix } from "../hooks/useSearchAstroflix";

export function Movie() {
  const {
    data: movies,
    isFetching,
    error,
  } = useSearchAstroflix<any>("/media/movie/all");

  return (
    <div>

      {isFetching ? (
        <Loading />
      ) : (
        <section className="grid grid-cols-4 gap-6">
          {movies?.content.map((movie: any) => (
            <Card key={movie.id} media={movie} />
          ))}
        </section>
      )}

      {error?.message && (
        <div className="mt-10">
          <Toast title="Error!" description={error?.message} status="error" />
        </div>
      )}
    </div>
  );
}
