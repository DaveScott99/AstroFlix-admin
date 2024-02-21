import { Genre } from "../types/genre"

interface ListGenreProps {
    list: Genre[]
}

export function ListGenres({ list }: ListGenreProps) {

    return (
        <div>
            {list.map((genre: Genre) => (
                <span key={genre.id}>{genre.name}</span>
            ))}
        </div>
   
    )

}