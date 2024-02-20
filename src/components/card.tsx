import { Link } from "react-router-dom";
import { MediaMinDTO } from "../types/mediaMinDTO";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

interface MediaProps {
  media: MediaMinDTO;
}

export function Card({ media }: MediaProps) {
  return (
    <Link to={`/media/${media.id}/${media.title}`}>
      <article className="max-w-[350px] min-w-[140px] w-full p-4 bg-slate-100 dark:bg-slate-950 border border-slate-300 border-opacity-20 rounded-lg cursor-pointer">
        <AspectRatio.Root ratio={2/3}>
          <img
            src={media.poster.file}
            alt={media.poster.name}
            className="max-w-[300] max-h-[450] w-full h-full bg-cover"
          />
        </AspectRatio.Root>

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
