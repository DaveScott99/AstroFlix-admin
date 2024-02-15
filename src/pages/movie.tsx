import { Link } from "react-router-dom";
import { Table } from "../components/table";

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
  return (
    <div>
      <div className="mb-2 flex justify-between">
        <input
          type="text"
          placeholder="Search"
          className="text-sm border p-2 rounded-md"
        />

        <Link
          to="/create/movie"
          className="center rounded-md bg-green-500 py-2 px-6 text-sm font-bold"
        >
          Create
        </Link>
      </div>

      <Table listMedias={medias} />
    </div>
  );
}
