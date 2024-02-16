import { Link } from "react-router-dom";
import { Table } from "../components/table";
import { Toast } from "../components/toast/toast";
import { useSearchAstroflix } from "../hooks/useSearchAstroflix";
import { MediaMinDTO } from "../types/mediaMinDTO";
import { Card } from "../components/card";

const medias = [
  {
    id: 1,
    title: "Interestellar",
    logo: "https://i.ibb.co/gy04BcX/interestellar-logo.png",
    parentalAdvisory: "PG-13",
    genre: [{ id: 1, name: "Science Fiction" }],
    year: 2017,
    language: "English",
    status: true,
  },
  {
    id: 2,
    title: "Interestellar",
    logo: "https://i.ibb.co/gy04BcX/interestellar-logo.png",
    parentalAdvisory: "PG-13",
    genre: [{ id: 1, name: "Science Fiction" }],
    year: 2017,
    language: "English",
    status: false,
  },
];

export function Movie() {
  const {
    data: movies,
    isFetching,
    error,
  } = useSearchAstroflix<MediaMinDTO[]>("/media/movie/all");

  return (
    <div className="pt-24">
      {/*v
      <div className="mb-2 flex justify-between">
        <input
          type="text"
          placeholder="Search"
          className="text-sm border p-2 rounded-md"
        />
      </div>

          <Table listMedias={movies} isFetching={isFetching} />
        */}

      <section className="grid grid-cols-4 gap-6">
        {
          movies?.map((movie) => (
            <Card key={movie.id} media={movie} />
          ))
        }
      </section>

      {error?.message && (
        <div className="mt-10">
          <Toast title="Error!" description={error?.message} status="error" />
        </div>
      )}
    </div>
  );
}
