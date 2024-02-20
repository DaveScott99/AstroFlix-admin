import { AddGenre } from "./add-genre";
import { ListGenre } from "./list-genre";

export function GenreConfig() {
  return (
    <section className="w-full flex flex-col gap-8 ">
      <div className="flex justify-between w-full items-center">
        <h2 className="font-semibold text-2xl">Genres</h2>
        <AddGenre />
      </div>

      <div className="w-full flex justify-center">
        <ListGenre />
      </div>
    </section>
  );
}
