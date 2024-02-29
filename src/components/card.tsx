import { Link } from "react-router-dom";
import { Media } from "../types/media";
import { Poster } from "./poster";

interface MediaProps {
  media: Media;
}

export function Card({ media }: MediaProps) {

  return (
    <Link to={`/media/${media.title.toLowerCase().replace(" ", "-")}/edit`}>
      <article className="max-w-64 w-full p-2 bg-transparent border border-zinc-700/50 rounded-md cursor-pointer">
        <Poster url={media.poster.filePath} aspect_ratio={media.poster.aspectRatio} />

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
      </article>
    </Link>
  );
}
