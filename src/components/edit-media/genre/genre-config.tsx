import { AddGenre } from "./add-genre";
import { ListGenre } from "./list-genre";

export function GenreConfig() {

    return(
        
        <section className=" w-full">
            
            <div className="p-2 flex justify-between w-full items-center">
                <h2 className="font-semibold text-2xl">Genres</h2>

                <AddGenre />
            </div>

            <ListGenre />

        </section>

    );
}