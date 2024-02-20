import { Link } from "react-router-dom";
import { MediaMinDTO } from "../types/mediaMinDTO";

interface MediaProps {
  media: MediaMinDTO;
}

export function Card({ media }: MediaProps) {

  return (
    <Link to={`/media/${media.id}/${media.title}`}>
      <article className="max-w-[350px] min-w-[100px] w-full p-4 bg-slate-100 dark:bg-slate-950 border border-slate-300 border-opacity-20 rounded-lg cursor-pointer">
        <img
          src={media.poster.file}
          alt={media.poster.name}
          className="max-w-[300] max-h-[450] w-full h-full bg-cover"
        />

        <div className="items-center mt-4">
          <h2 className="font-semibold text-base ">{media.title}</h2>
        </div>

        <div className="flex justify-between mt-2">
          <div>
            <span className="text-sm font-normal">({media.releaseYear})</span>
          </div>
          <div>
            <i
              className={`w-2 h-2 outline ${
                media.active === true ? "text-green-500" : "text-red-500"
              }  mr-2`}
            ></i>
            <span className="font-semibold text-xs">
              {media.active === true ? "Active" : "Disabled"}
            </span>
          </div>
        </div>

        <div className="flex gap-2 justify-between mt-4">
          <div>
            <span className="border px-1 font-normal text-xs opacity-75 rounded-md">
              PG-13
            </span>
          </div>

          <div className="flex gap-1">
            {media.genres?.map((genre) => (
              <span
                key={genre.id}
                className="text-sm font-normal opacity-75  border px-1 rounded-md"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
