import { Table } from "../components/table";
import { Toast } from "../components/toast/toast";
import { useSearchAstroflix } from "../hooks/useSearchAstroflix";
import { MediaMinDTO } from "../types/mediaMinDTO";

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
    <div>
      <div className="mb-2 flex justify-between">
        <input
          type="text"
          placeholder="Search"
          className="text-sm border p-2 rounded-md"
        />
      </div>

      <Table listMedias={movies} isFetching={isFetching} />

      {error?.message && (
        <div className="mt-10">
            <Toast title="Error!" description={error?.message} status="error"/>
        </div>
      )}
    </div>
  );
}
