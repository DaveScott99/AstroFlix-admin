import { Link } from "react-router-dom";
import { GenreConfig } from "../components/edit-media/genre/genre-config";

export function ConfigMedia() {
  return (
    <section className="flex gap-4">
      <div className="max-w-[250px] w-full bg-slate-900 rounded-md h-full">
        <div className="p-2 bg-slate-500 rounded-tl-md rounded-tr-md">
          <h2 className="font-semibold">Edit</h2>
        </div>

        <ul className="flex flex-col gap-4  p-2">
          <Link to="#">
            <li className="p-2 hover:bg-slate-800 transition-all rounded-md">
              <span className="text-sm font-semibold">Arts</span>
            </li>
          </Link>
          <Link to="#">
            <li className="p-2 hover:bg-slate-800 transition-all rounded-md">
              <span className="text-sm font-semibold">Genres</span>
            </li>
          </Link>
        </ul>
      </div>

     
      <GenreConfig />



    </section>
  );
}
